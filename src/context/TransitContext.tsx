import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  BusRoute, 
  BusStop, 
  ActiveBusState, 
  UserRole, 
  DriverTripSession,
  QueuedLocationPoint,
  LocationReport,
  RegisteredDriver,
  KolkataWeather 
} from '../types/transit';
import { KOLKATA_ROUTES, SAMPLE_BUS_FLEET } from '../data/kolkataRoutes';
import { KOLKATA_STOPS } from '../data/kolkataStops';
import { INITIAL_REGISTERED_DRIVERS, CURRENT_KOLKATA_WEATHER } from '../data/kolkataDrivers';
import { offlineStorage } from '../services/offlineStorage';
import { telemetryEngine } from '../services/telemetryEngine';

interface TransitContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isOnline: boolean;
  isSyncing: boolean;
  routes: BusRoute[];
  stops: BusStop[];
  activeBuses: ActiveBusState[];
  selectedRouteId: string | null;
  setSelectedRouteId: (id: string | null) => void;
  selectedBusId: string | null;
  setSelectedBusId: (id: string | null) => void;
  selectedDirection: 'UP' | 'DOWN';
  setSelectedDirection: (dir: 'UP' | 'DOWN') => void;
  favRoutes: string[];
  favStops: string[];
  toggleFavRoute: (routeId: string) => void;
  toggleFavStop: (stopId: string) => void;
  
  // Kolkata Weather
  kolkataWeather: KolkataWeather;

  // Registered Drivers (Managed by Admin Console)
  registeredDrivers: RegisteredDriver[];
  registerDriver: (driver: RegisteredDriver) => void;
  updateDriverStatus: (driverId: string, status: 'active' | 'suspended' | 'off_duty') => void;
  deleteDriver: (driverId: string) => void;

  // Driver Authentication & Session
  authenticatedDriver: RegisteredDriver | null;
  loginDriver: (driverId: string, pin: string) => { success: boolean; message: string };
  logoutDriver: () => void;
  driverSession: DriverTripSession | null;
  startDriverTrip: (busId: string, routeId: string, direction: 'UP' | 'DOWN') => void;
  endDriverTrip: () => void;
  queuedPointsCount: number;
  syncOfflineQueue: () => Promise<void>;

  // Operator Actions
  addOrUpdateRoute: (route: BusRoute) => void;
  addOrUpdateStop: (stop: BusStop) => void;
}

const TransitContext = createContext<TransitContextType | null>(null);

export const TransitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('passenger');
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  
  const [routes, setRoutes] = useState<BusRoute[]>(KOLKATA_ROUTES);
  const [stops, setStops] = useState<BusStop[]>(KOLKATA_STOPS);
  const [activeBuses, setActiveBuses] = useState<ActiveBusState[]>([]);
  
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>('route-s12');
  const [selectedBusId, setSelectedBusId] = useState<string | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<'UP' | 'DOWN'>('UP');
  
  const [favRoutes, setFavRoutes] = useState<string[]>([]);
  const [favStops, setFavStops] = useState<string[]>([]);
  const [queuedPointsCount, setQueuedPointsCount] = useState<number>(0);

  // Kolkata Weather Feed
  const [kolkataWeather] = useState<KolkataWeather>(CURRENT_KOLKATA_WEATHER);

  // Admin Registered Drivers
  const [registeredDrivers, setRegisteredDrivers] = useState<RegisteredDriver[]>(INITIAL_REGISTERED_DRIVERS);

  // Current Logged-in Driver in Driver Portal
  const [authenticatedDriver, setAuthenticatedDriver] = useState<RegisteredDriver | null>(() => {
    const saved = localStorage.getItem('bb_auth_driver');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [driverSession, setDriverSession] = useState<DriverTripSession | null>(() => {
    const saved = localStorage.getItem('bb_driver_session');
    return saved ? JSON.parse(saved) : null;
  });

  // 1. Initial Data and Connectivity Listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      syncOfflineQueue();
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial cache sync
    offlineStorage.cacheRoutes(KOLKATA_ROUTES);
    offlineStorage.cacheStops(KOLKATA_STOPS);
    
    // Load registered drivers from storage
    offlineStorage.getRegisteredDrivers().then(drivers => {
      setRegisteredDrivers(drivers);
    });

    // Load favorites
    offlineStorage.getFavorites().then(favs => {
      setFavRoutes(favs.routes);
      setFavStops(favs.stops);
    });

    // Check queued points
    offlineStorage.getQueuedLocations().then(pts => {
      setQueuedPointsCount(pts.length);
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 2. Telemetry Engine Live Subscription
  useEffect(() => {
    telemetryEngine.startSimulation();
    const unsubscribe = telemetryEngine.subscribe((buses) => {
      setActiveBuses(buses);
    });

    return () => {
      unsubscribe();
      telemetryEngine.stopSimulation();
    };
  }, []);

  // 3. Favourites Handlers
  const toggleFavRoute = async (routeId: string) => {
    await offlineStorage.toggleFavorite('route', routeId);
    setFavRoutes(prev => 
      prev.includes(routeId) ? prev.filter(id => id !== routeId) : [...prev, routeId]
    );
  };

  const toggleFavStop = async (stopId: string) => {
    await offlineStorage.toggleFavorite('stop', stopId);
    setFavStops(prev => 
      prev.includes(stopId) ? prev.filter(id => id !== stopId) : [...prev, stopId]
    );
  };

  // 4. Admin Driver Management
  const registerDriver = (driver: RegisteredDriver) => {
    setRegisteredDrivers(prev => {
      const updated = [driver, ...prev];
      offlineStorage.saveAllRegisteredDrivers(updated);
      return updated;
    });
  };

  const updateDriverStatus = (driverId: string, status: 'active' | 'suspended' | 'off_duty') => {
    setRegisteredDrivers(prev => {
      const updated = prev.map(d => d.driverId === driverId ? { ...d, status } : d);
      offlineStorage.saveAllRegisteredDrivers(updated);
      return updated;
    });
  };

  const deleteDriver = (driverId: string) => {
    setRegisteredDrivers(prev => {
      const updated = prev.filter(d => d.driverId !== driverId);
      offlineStorage.saveAllRegisteredDrivers(updated);
      return updated;
    });
  };

  // 5. Driver Authentication Portal Logic
  const loginDriver = (driverId: string, pin: string): { success: boolean; message: string } => {
    const cleanId = driverId.trim().toUpperCase();
    const driver = registeredDrivers.find(d => d.driverId.toUpperCase() === cleanId);

    if (!driver) {
      return { 
        success: false, 
        message: 'Driver ID not recognized. Driver registration must be completed by the Admin Console.' 
      };
    }

    if (driver.status === 'suspended') {
      return { 
        success: false, 
        message: 'Access Suspended: This driver ID has been temporarily suspended by depot operations.' 
      };
    }

    if (driver.pin !== pin.trim()) {
      return { 
        success: false, 
        message: 'Incorrect security PIN. Please try again or contact your depot administrator.' 
      };
    }

    setAuthenticatedDriver(driver);
    localStorage.setItem('bb_auth_driver', JSON.stringify(driver));
    return { success: true, message: `Welcome, ${driver.nameEn}!` };
  };

  const logoutDriver = () => {
    if (driverSession) {
      endDriverTrip();
    }
    setAuthenticatedDriver(null);
    localStorage.removeItem('bb_auth_driver');
  };

  // 6. Driver Flow
  const startDriverTrip = (busId: string, routeId: string, direction: 'UP' | 'DOWN') => {
    if (!authenticatedDriver) return;

    const route = routes.find(r => r.id === routeId);
    const bus = SAMPLE_BUS_FLEET.find(b => b.id === busId);
    const newSession: DriverTripSession = {
      tripId: `trip-${Date.now()}`,
      busId,
      registrationNumber: bus?.registrationNumber || 'WB-04-H-1842',
      routeId,
      routeNumber: route?.routeNumber || 'S-12',
      sector: authenticatedDriver.sector || 'GOVERNMENT',
      direction,
      driverName: authenticatedDriver.nameEn,
      driverId: authenticatedDriver.driverId,
      startTime: new Date().toISOString(),
      isActive: true,
      pointsRecorded: 0,
      queuedPointsCount: 0,
      currentSpeedKmh: 28,
      interiorTempC: route?.isAC ? 21.5 : 29.5
    };

    setDriverSession(newSession);
    localStorage.setItem('bb_driver_session', JSON.stringify(newSession));
  };

  const endDriverTrip = () => {
    if (driverSession) {
      telemetryEngine.endDriverTrip(driverSession.busId);
    }
    setDriverSession(null);
    localStorage.removeItem('bb_driver_session');
  };

  // 7. Offline Queue Syncing
  const syncOfflineQueue = async () => {
    const queued = await offlineStorage.getQueuedLocations();
    if (queued.length === 0) return;

    setIsSyncing(true);
    try {
      const now = new Date();
      for (const pt of queued) {
        const report: LocationReport = {
          id: pt.id,
          tripId: pt.tripId,
          busId: pt.busId,
          routeId: driverSession?.routeId || 'route-s12',
          direction: driverSession?.direction || 'UP',
          latitude: pt.latitude,
          longitude: pt.longitude,
          bearing: pt.bearing,
          speedKmh: pt.speedKmh,
          accuracyMeters: pt.accuracyMeters,
          measuredTime: pt.measuredTime,
          receivedTime: now.toISOString(),
          source: 'driver_gps',
          isHistorical: true
        };
        telemetryEngine.publishDriverLocation(report, {
          driverId: driverSession?.driverId || 'DRV-WBTC-101',
          driverName: driverSession?.driverName || 'Driver',
          sector: driverSession?.sector || 'GOVERNMENT'
        });
      }
      await offlineStorage.clearQueuedLocations();
      setQueuedPointsCount(0);
    } finally {
      setIsSyncing(false);
    }
  };

  // 8. Operator Route & Stop Updates
  const addOrUpdateRoute = (route: BusRoute) => {
    setRoutes(prev => {
      const idx = prev.findIndex(r => r.id === route.id);
      let updated: BusRoute[];
      if (idx >= 0) {
        updated = [...prev];
        updated[idx] = route;
      } else {
        updated = [route, ...prev];
      }
      offlineStorage.cacheRoutes(updated);
      return updated;
    });
  };

  const addOrUpdateStop = (stop: BusStop) => {
    setStops(prev => {
      const idx = prev.findIndex(s => s.id === stop.id);
      let updated: BusStop[];
      if (idx >= 0) {
        updated = [...prev];
        updated[idx] = stop;
      } else {
        updated = [stop, ...prev];
      }
      offlineStorage.cacheStops(updated);
      return updated;
    });
  };

  return (
    <TransitContext.Provider
      value={{
        role,
        setRole,
        isOnline,
        isSyncing,
        routes,
        stops,
        activeBuses,
        selectedRouteId,
        setSelectedRouteId,
        selectedBusId,
        setSelectedBusId,
        selectedDirection,
        setSelectedDirection,
        favRoutes,
        favStops,
        toggleFavRoute,
        toggleFavStop,
        kolkataWeather,
        registeredDrivers,
        registerDriver,
        updateDriverStatus,
        deleteDriver,
        authenticatedDriver,
        loginDriver,
        logoutDriver,
        driverSession,
        startDriverTrip,
        endDriverTrip,
        queuedPointsCount,
        syncOfflineQueue,
        addOrUpdateRoute,
        addOrUpdateStop
      }}
    >
      {children}
    </TransitContext.Provider>
  );
};

export const useTransit = () => {
  const context = useContext(TransitContext);
  if (!context) {
    throw new Error('useTransit must be used within a TransitProvider');
  }
  return context;
};
