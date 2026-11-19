import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTransit } from '../../context/TransitContext';
import { useLanguage } from '../../context/LanguageContext';
import { STOP_MAP } from '../../data/kolkataStops';
import { Bus, Crosshair, Layers, Navigation, ZoomIn, ZoomOut, Thermometer, CloudSun, MapPin } from 'lucide-react';

export const KolkataTransitMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: maplibregl.Marker }>({});
  const stopMarkersRef = useRef<{ [key: string]: maplibregl.Marker }>({});

  const { 
    routes, 
    stops, 
    activeBuses, 
    selectedRouteId, 
    selectedDirection, 
    selectedBusId, 
    setSelectedBusId,
    kolkataWeather 
  } = useTransit();
  const { lang, t } = useLanguage();

  const [showStops, setShowStops] = useState(true);
  const [showPath, setShowPath] = useState(true);
  const [showAllBuses, setShowAllBuses] = useState(true);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Kolkata central coordinates: 22.5726° N, 88.3639° E
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          'osm-tiles': {
            type: 'raster',
            tiles: [
              'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            maxzoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        },
        layers: [
          {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm-tiles',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [88.3639, 22.5726],
      zoom: 12.2,
      attributionControl: false
    });

    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');

    map.on('load', () => {
      // Source & Layer for selected route polyline
      map.addSource('route-line', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: []
          }
        }
      });

      // Outline casing
      map.addLayer({
        id: 'route-line-casing',
        type: 'line',
        source: 'route-line',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#0F172A',
          'line-width': 7,
          'line-opacity': 0.8
        }
      });

      // Main route polyline
      map.addLayer({
        id: 'route-line-main',
        type: 'line',
        source: 'route-line',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#2563EB',
          'line-width': 4,
          'line-opacity': 0.95
        }
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Route Polyline Path
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;

    const source = map.getSource('route-line') as maplibregl.GeoJSONSource | undefined;
    if (!source) return;

    if (!selectedRouteId || !showPath) {
      source.setData({
        type: 'Feature',
        properties: {},
        geometry: { type: 'LineString', coordinates: [] }
      });
      return;
    }

    const route = routes.find(r => r.id === selectedRouteId);
    if (route) {
      const coords = route.directions[selectedDirection].pathCoordinates;
      source.setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coords
        }
      });

      if (map.getLayer('route-line-main')) {
        map.setPaintProperty('route-line-main', 'line-color', route.color || '#2563EB');
      }

      if (coords.length > 0) {
        const bounds = new maplibregl.LngLatBounds(coords[0], coords[0]);
        coords.forEach(pt => bounds.extend(pt));
        map.fitBounds(bounds, { padding: 60, maxZoom: 14.5, duration: 1000 });
      }
    }
  }, [selectedRouteId, selectedDirection, routes, showPath]);

  // Update Bus Markers with Temperature & Driver ID
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const currentMarkers = markersRef.current;
    const busIdsInState = new Set<string>();

    activeBuses.forEach(bus => {
      busIdsInState.add(bus.busId);
      const isSelected = selectedBusId === bus.busId;
      const isLive = bus.freshnessStatus === 'live';
      const isStale = bus.freshnessStatus === 'stale';

      let el = currentMarkers[bus.busId]?.getElement();
      if (!el) {
        el = document.createElement('div');
        el.className = 'bus-marker-container cursor-pointer transition-transform duration-300';
        el.addEventListener('click', () => {
          setSelectedBusId(bus.busId);
        });

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat([bus.longitude, bus.latitude])
          .addTo(map);

        currentMarkers[bus.busId] = marker;
      } else {
        currentMarkers[bus.busId].setLngLat([bus.longitude, bus.latitude]);
      }

      const statusBg = isLive
        ? 'bg-emerald-600 text-white border-white ring-2 ring-emerald-400'
        : isStale
        ? 'bg-amber-500 text-slate-950 border-white ring-2 ring-amber-300'
        : 'bg-slate-600 text-white border-white';

      const pulseRing = isLive
        ? `<div class="absolute -inset-1 rounded-full bg-emerald-400 animate-ping opacity-60 pointer-events-none"></div>`
        : '';

      const bearingIndicator = `
        <div class="w-3.5 h-3.5 text-slate-900 bg-white rounded-full flex items-center justify-center -mb-1 shadow text-[10px]" style="transform: rotate(${bus.bearing}deg)">
          ▲
        </div>
      `;

      const tempBadge = bus.isAC
        ? `<span class="bg-cyan-500/30 text-white text-[9px] px-1 rounded font-mono font-bold">❄️${bus.climate?.interiorTempC || 21}°C</span>`
        : `<span class="bg-black/20 text-white text-[9px] px-1 rounded font-mono">${bus.climate?.interiorTempC || 29}°C</span>`;

      el.innerHTML = `
        <div class="relative flex flex-col items-center">
          ${pulseRing}
          <div class="flex items-center gap-1 px-2 py-0.5 rounded-full shadow-lg border-2 text-xs font-bold ${statusBg} ${isSelected ? 'scale-110 ring-4 ring-blue-500' : ''}">
            <span>${bus.routeNumber}</span>
            <span class="text-[10px] font-mono opacity-90">${bus.speedKmh}k</span>
            ${tempBadge}
          </div>
          ${bearingIndicator}
        </div>
      `;

      // Rich Bus Popup with Temperature & Driver ID
      const popupContent = `
        <div class="p-2.5 text-xs font-sans max-w-[230px]">
          <div class="font-bold text-sm text-slate-900 flex items-center justify-between">
            <span class="flex items-center gap-1">
              <span>Bus ${bus.routeNumber}</span>
              ${bus.isAC ? '<span class="text-[9px] bg-cyan-100 text-cyan-800 px-1 py-0.2 rounded font-bold uppercase">AC</span>' : ''}
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 font-mono">${bus.registrationNumber}</span>
          </div>

          <div class="mt-1 text-slate-600 font-medium">
            To: ${lang === 'bn' ? bus.destinationBn : bus.destinationEn}
          </div>

          <!-- Driver ID & Speed -->
          <div class="mt-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200 space-y-0.5 text-[11px]">
            <div class="flex justify-between">
              <span class="text-slate-500">Designated Driver:</span>
              <span class="font-mono font-bold text-amber-700">${bus.driverId || 'DRV-WBTC-101'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Live Speed:</span>
              <span class="font-mono font-semibold text-slate-800">${bus.speedKmh} km/h (±${bus.accuracyMeters}m)</span>
            </div>
          </div>

          <!-- Climate & Temperature Alignment -->
          <div class="mt-1.5 p-1.5 rounded-lg ${bus.isAC ? 'bg-cyan-50 border border-cyan-200' : 'bg-amber-50 border border-amber-200'} text-[11px]">
            <div class="flex items-center justify-between">
              <span class="text-slate-700 font-medium">Interior Temp:</span>
              <span class="font-mono font-bold ${bus.isAC ? 'text-cyan-800' : 'text-amber-800'}">
                ${bus.climate?.interiorTempC || 21.5}°C ${bus.isAC ? '(Chilled)' : '(Ambient)'}
              </span>
            </div>
            <div class="text-[10px] text-slate-500 mt-0.5">
              Kolkata Outdoor: ${kolkataWeather.temperatureC}°C (${kolkataWeather.humidity}% Humid)
            </div>
          </div>

          <!-- Arrival Estimate & Freshness -->
          <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1.5">
            <span class="font-extrabold text-emerald-700 text-sm">${bus.etaRange}</span>
            <span class="text-[10px] text-slate-500">${lang === 'bn' ? bus.freshnessLabelBn : bus.freshnessLabelEn}</span>
          </div>
        </div>
      `;

      const popup = new maplibregl.Popup({ offset: 15, closeButton: false }).setHTML(popupContent);
      currentMarkers[bus.busId].setPopup(popup);
    });

    Object.keys(currentMarkers).forEach(busId => {
      if (!busIdsInState.has(busId)) {
        currentMarkers[busId].remove();
        delete currentMarkers[busId];
      }
    });
  }, [activeBuses, selectedBusId, lang, setSelectedBusId, kolkataWeather]);

  // Update ALL Kolkata Stop Markers
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const currentStops = stopMarkersRef.current;

    if (!showStops) {
      Object.keys(currentStops).forEach(id => {
        currentStops[id].remove();
        delete currentStops[id];
      });
      return;
    }

    stops.forEach(stop => {
      if (!currentStops[stop.id]) {
        const el = document.createElement('div');
        el.className = 'stop-marker cursor-pointer transition-transform hover:scale-125';
        el.innerHTML = `
          <div class="flex items-center justify-center">
            <div class="w-3.5 h-3.5 rounded-full border-2 border-white shadow-md ${
              stop.isTerminal ? 'bg-amber-500 ring-2 ring-amber-600' : 'bg-blue-600'
            }"></div>
          </div>
        `;

        // Find routes serving this stop
        const routesAtStop = routes.filter(r => 
          r.directions.UP.stops.some(s => s.stopId === stop.id) ||
          r.directions.DOWN.stops.some(s => s.stopId === stop.id)
        );

        const routeBadges = routesAtStop.map(r => `
          <span class="px-1.5 py-0.2 rounded text-[10px] font-bold text-white shadow-sm" style="background-color: ${r.color || '#2563EB'}">
            ${r.routeNumber}
          </span>
        `).join(' ');

        const popupHtml = `
          <div class="p-2 text-xs font-sans max-w-[210px]">
            <div class="flex items-center gap-1 font-bold text-slate-900 text-sm">
              <span class="text-blue-600">🚏</span>
              <span>${lang === 'bn' ? stop.nameBn : stop.nameEn}</span>
            </div>
            <div class="text-[10px] text-slate-500 mt-0.5">
              ${lang === 'bn' ? stop.landmarkBn : stop.landmarkEn}
            </div>

            ${stop.isTerminal ? `
              <div class="mt-1">
                <span class="text-[9px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded font-bold uppercase tracking-wider">
                  ${lang === 'bn' ? 'প্রধান টার্মিনাস' : 'Major Terminus'}
                </span>
              </div>
            ` : ''}

            <!-- Served Routes -->
            <div class="mt-2 pt-1.5 border-t border-slate-200">
              <span class="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                ${lang === 'bn' ? 'যেসব বাস থামে' : 'Serving Routes'}:
              </span>
              <div class="flex flex-wrap gap-1">
                ${routeBadges || '<span class="text-[10px] text-slate-400">Regular transit</span>'}
              </div>
            </div>
          </div>
        `;

        const popup = new maplibregl.Popup({ offset: 10, closeButton: false }).setHTML(popupHtml);

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat([stop.longitude, stop.latitude])
          .setPopup(popup)
          .addTo(map);

        currentStops[stop.id] = marker;
      }
    });
  }, [stops, showStops, lang, routes]);

  const handleRecenterKolkata = () => {
    mapRef.current?.flyTo({
      center: [88.3639, 22.5726],
      zoom: 12.2,
      duration: 1200
    });
  };

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          mapRef.current?.flyTo({
            center: [pos.coords.longitude, pos.coords.latitude],
            zoom: 14.5,
            duration: 1000
          });
        },
        () => {
          handleRecenterKolkata();
        }
      );
    }
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-300">
      
      {/* MapLibre Canvas Container */}
      <div ref={mapContainerRef} className="w-full h-full" aria-label="Interactive Kolkata bus tracking map with all stops" />

      {/* Top Floating Weather & Temperature Pill */}
      <div className="absolute top-3 left-3 z-10 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 text-xs flex items-center gap-2">
        <CloudSun className="w-4 h-4 text-amber-400" />
        <span className="font-semibold">Kolkata:</span>
        <span className="font-black text-amber-400 font-mono">{kolkataWeather.temperatureC}°C</span>
        <span className="text-[10px] text-slate-400">({kolkataWeather.humidity}% Humid)</span>
      </div>

      {/* Floating Control Overlay */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
        <button
          onClick={() => mapRef.current?.zoomIn()}
          className="p-2 rounded-xl bg-white/95 text-slate-800 shadow-md hover:bg-slate-50 transition border border-slate-200"
          title="Zoom In"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => mapRef.current?.zoomOut()}
          className="p-2 rounded-xl bg-white/95 text-slate-800 shadow-md hover:bg-slate-50 transition border border-slate-200"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleLocateMe}
          className="p-2 rounded-xl bg-white/95 text-blue-700 shadow-md hover:bg-slate-50 transition border border-slate-200"
          title="Locate Me (Current GPS)"
          aria-label="Locate Me"
        >
          <Crosshair className="w-4 h-4" />
        </button>
        <button
          onClick={handleRecenterKolkata}
          className="p-2 rounded-xl bg-amber-400 text-slate-950 shadow-md hover:bg-amber-300 transition font-bold text-xs"
          title="Recenter Kolkata Central"
          aria-label="Recenter on Kolkata"
        >
          Kolkata
        </button>
      </div>

      {/* Map Legend & Layer Toggles (All Stops, Route Path, Moving Buses) */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-slate-200 text-xs flex-wrap">
        <button
          onClick={() => setShowStops(!showStops)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl font-bold transition ${
            showStops ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
          }`}
          title="Toggle visibility of all Kolkata bus stops"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>{lang === 'bn' ? `সকল স্টপ (${stops.length})` : `All Stops (${stops.length})`}</span>
        </button>

        <button
          onClick={() => setShowPath(!showPath)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl font-bold transition ${
            showPath ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
          }`}
          title="Toggle route polyline path"
        >
          <span className="w-2.5 h-1 bg-white rounded"></span>
          <span>{lang === 'bn' ? 'রুট লাইন' : 'Route Path'}</span>
        </button>

        <div className="hidden sm:flex items-center gap-1 pl-1 text-[11px] text-slate-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{activeBuses.length} Moving Buses</span>
        </div>
      </div>
    </div>
  );
};
