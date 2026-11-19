import { BusRoute, BusStop, QueuedLocationPoint, RegisteredDriver } from '../types/transit';
import { INITIAL_REGISTERED_DRIVERS } from '../data/kolkataDrivers';

const DB_NAME = 'busbuddy_offline_db';
const DB_VERSION = 2;

class OfflineStorageService {
  private dbPromise: Promise<IDBDatabase> | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'indexedDB' in window) {
      this.initDB();
    }
  }

  private initDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      try {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains('routes')) {
            db.createObjectStore('routes', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('stops')) {
            db.createObjectStore('stops', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('favorites')) {
            db.createObjectStore('favorites', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('driver_queue')) {
            db.createObjectStore('driver_queue', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('drivers')) {
            db.createObjectStore('drivers', { keyPath: 'id' });
          }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => {
          console.warn('IndexedDB failed to open, falling back to localStorage');
          reject(request.error);
        };
      } catch (err) {
        reject(err);
      }
    });

    return this.dbPromise;
  }

  // --- Routes Caching ---
  async cacheRoutes(routes: BusRoute[]): Promise<void> {
    try {
      const db = await this.initDB();
      const tx = db.transaction('routes', 'readwrite');
      const store = tx.objectStore('routes');
      for (const route of routes) {
        store.put(route);
      }
    } catch {
      localStorage.setItem('bb_cached_routes', JSON.stringify(routes));
    }
  }

  async getCachedRoutes(): Promise<BusRoute[]> {
    try {
      const db = await this.initDB();
      return new Promise((resolve) => {
        const tx = db.transaction('routes', 'readonly');
        const store = tx.objectStore('routes');
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result as BusRoute[]);
        req.onerror = () => resolve(this.getRoutesFromLocalStorage());
      });
    } catch {
      return this.getRoutesFromLocalStorage();
    }
  }

  private getRoutesFromLocalStorage(): BusRoute[] {
    const raw = localStorage.getItem('bb_cached_routes');
    return raw ? JSON.parse(raw) : [];
  }

  // --- Stops Caching ---
  async cacheStops(stops: BusStop[]): Promise<void> {
    try {
      const db = await this.initDB();
      const tx = db.transaction('stops', 'readwrite');
      const store = tx.objectStore('stops');
      for (const stop of stops) {
        store.put(stop);
      }
    } catch {
      localStorage.setItem('bb_cached_stops', JSON.stringify(stops));
    }
  }

  async getCachedStops(): Promise<BusStop[]> {
    try {
      const db = await this.initDB();
      return new Promise((resolve) => {
        const tx = db.transaction('stops', 'readonly');
        const store = tx.objectStore('stops');
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result as BusStop[]);
        req.onerror = () => resolve(this.getStopsFromLocalStorage());
      });
    } catch {
      return this.getStopsFromLocalStorage();
    }
  }

  private getStopsFromLocalStorage(): BusStop[] {
    const raw = localStorage.getItem('bb_cached_stops');
    return raw ? JSON.parse(raw) : [];
  }

  // --- Favourites ---
  async getFavorites(): Promise<{ routes: string[]; stops: string[] }> {
    try {
      const db = await this.initDB();
      return new Promise((resolve) => {
        const tx = db.transaction('favorites', 'readonly');
        const store = tx.objectStore('favorites');
        const req = store.getAll();
        req.onsuccess = () => {
          const items = req.result as { id: string; type: 'route' | 'stop' }[];
          const routes = items.filter(i => i.type === 'route').map(i => i.id);
          const stops = items.filter(i => i.type === 'stop').map(i => i.id);
          resolve({ routes, stops });
        };
        req.onerror = () => resolve(this.getFavoritesFromLocalStorage());
      });
    } catch {
      return this.getFavoritesFromLocalStorage();
    }
  }

  private getFavoritesFromLocalStorage(): { routes: string[]; stops: string[] } {
    const rawRoutes = localStorage.getItem('bb_fav_routes');
    const rawStops = localStorage.getItem('bb_fav_stops');
    return {
      routes: rawRoutes ? JSON.parse(rawRoutes) : [],
      stops: rawStops ? JSON.parse(rawStops) : []
    };
  }

  async toggleFavorite(type: 'route' | 'stop', id: string): Promise<boolean> {
    try {
      const db = await this.initDB();
      const tx = db.transaction('favorites', 'readwrite');
      const store = tx.objectStore('favorites');
      return new Promise((resolve) => {
        const getReq = store.get(id);
        getReq.onsuccess = () => {
          if (getReq.result) {
            store.delete(id);
            resolve(false);
          } else {
            store.put({ id, type, createdAt: new Date().toISOString() });
            resolve(true);
          }
        };
        getReq.onerror = () => resolve(this.toggleFavoriteFallback(type, id));
      });
    } catch {
      return this.toggleFavoriteFallback(type, id);
    }
  }

  private toggleFavoriteFallback(type: 'route' | 'stop', id: string): boolean {
    const key = type === 'route' ? 'bb_fav_routes' : 'bb_fav_stops';
    const raw = localStorage.getItem(key);
    const list: string[] = raw ? JSON.parse(raw) : [];
    const index = list.indexOf(id);
    let added = false;
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
      added = true;
    }
    localStorage.setItem(key, JSON.stringify(list));
    return added;
  }

  // --- Driver Offline Queue ---
  async queueDriverLocation(point: QueuedLocationPoint): Promise<void> {
    try {
      const db = await this.initDB();
      const tx = db.transaction('driver_queue', 'readwrite');
      const store = tx.objectStore('driver_queue');
      store.put(point);
    } catch {
      const raw = localStorage.getItem('bb_driver_queue');
      const list: QueuedLocationPoint[] = raw ? JSON.parse(raw) : [];
      list.push(point);
      localStorage.setItem('bb_driver_queue', JSON.stringify(list));
    }
  }

  async getQueuedLocations(): Promise<QueuedLocationPoint[]> {
    try {
      const db = await this.initDB();
      return new Promise((resolve) => {
        const tx = db.transaction('driver_queue', 'readonly');
        const store = tx.objectStore('driver_queue');
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result as QueuedLocationPoint[]);
        req.onerror = () => resolve(this.getQueuedFromLocalStorage());
      });
    } catch {
      return this.getQueuedFromLocalStorage();
    }
  }

  private getQueuedFromLocalStorage(): QueuedLocationPoint[] {
    const raw = localStorage.getItem('bb_driver_queue');
    return raw ? JSON.parse(raw) : [];
  }

  async clearQueuedLocations(ids?: string[]): Promise<void> {
    try {
      const db = await this.initDB();
      const tx = db.transaction('driver_queue', 'readwrite');
      const store = tx.objectStore('driver_queue');
      if (ids && ids.length > 0) {
        for (const id of ids) {
          store.delete(id);
        }
      } else {
        store.clear();
      }
    } catch {
      if (ids && ids.length > 0) {
        const current = this.getQueuedFromLocalStorage();
        const filtered = current.filter(item => !ids.includes(item.id));
        localStorage.setItem('bb_driver_queue', JSON.stringify(filtered));
      } else {
        localStorage.removeItem('bb_driver_queue');
      }
    }
  }

  // --- Registered Drivers Management (Admin registered) ---
  async getRegisteredDrivers(): Promise<RegisteredDriver[]> {
    const raw = localStorage.getItem('bb_registered_drivers');
    if (!raw) {
      localStorage.setItem('bb_registered_drivers', JSON.stringify(INITIAL_REGISTERED_DRIVERS));
      return INITIAL_REGISTERED_DRIVERS;
    }
    return JSON.parse(raw);
  }

  async saveRegisteredDriver(driver: RegisteredDriver): Promise<void> {
    const drivers = await this.getRegisteredDrivers();
    const existingIdx = drivers.findIndex(d => d.id === driver.id || d.driverId === driver.driverId);
    if (existingIdx >= 0) {
      drivers[existingIdx] = driver;
    } else {
      drivers.unshift(driver);
    }
    localStorage.setItem('bb_registered_drivers', JSON.stringify(drivers));
  }

  async saveAllRegisteredDrivers(drivers: RegisteredDriver[]): Promise<void> {
    localStorage.setItem('bb_registered_drivers', JSON.stringify(drivers));
  }
}

export const offlineStorage = new OfflineStorageService();
