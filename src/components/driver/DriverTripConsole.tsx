import React, { useState, useEffect } from 'react';
import { useTransit } from '../../context/TransitContext';
import { useLanguage } from '../../context/LanguageContext';
import { SAMPLE_BUS_FLEET } from '../../data/kolkataRoutes';
import { STOP_MAP } from '../../data/kolkataStops';
import { offlineStorage } from '../../services/offlineStorage';
import { telemetryEngine } from '../../services/telemetryEngine';
import { 
  Bus, 
  Play, 
  Square, 
  ShieldCheck, 
  Radio, 
  Wifi, 
  WifiOff, 
  Gauge, 
  Clock, 
  MapPin, 
  AlertCircle,
  Database,
  UploadCloud
} from 'lucide-react';

export const DriverTripConsole: React.FC = () => {
  const { lang, t } = useLanguage();
  const { 
    routes, 
    driverSession, 
    startDriverTrip, 
    endDriverTrip, 
    isOnline, 
    queuedPointsCount,
    syncOfflineQueue 
  } = useTransit();

  // Selection form states
  const [selectedBusId, setSelectedBusId] = useState('bus-wb04-1842');
  const [selectedRouteId, setSelectedRouteId] = useState('route-s12');
  const [direction, setDirection] = useState<'UP' | 'DOWN'>('UP');
  const [driverName, setDriverName] = useState('Rajesh Das (রাজেশ দাস)');
  const [driverPin, setDriverPin] = useState('5621');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Active trip telemetry state
  const [tripElapsedSeconds, setTripElapsedSeconds] = useState(0);
  const [pingsSent, setPingsSent] = useState(14);
  const [currentSpeed, setCurrentSpeed] = useState(32);
  const [simulatedOffline, setSimulatedOffline] = useState(false);

  const selectedRoute = routes.find(r => r.id === (driverSession ? driverSession.routeId : selectedRouteId));
  const selectedBus = SAMPLE_BUS_FLEET.find(b => b.id === (driverSession ? driverSession.busId : selectedBusId));

  // Elapsed timer when trip is active
  useEffect(() => {
    let timer: number;
    if (driverSession?.isActive) {
      timer = window.setInterval(() => {
        setTripElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [driverSession?.isActive]);

  // Periodic Location Ping Emulation while Trip is Active
  useEffect(() => {
    if (!driverSession?.isActive) return;

    const interval = window.setInterval(async () => {
      const now = new Date();
      const speed = Math.floor(20 + Math.random() * 25);
      setCurrentSpeed(speed);

      // GPS coordinates along route
      const coords = selectedRoute?.directions[driverSession.direction].pathCoordinates || [[88.4187, 22.5867]];
      const randomPoint = coords[Math.floor(Math.random() * coords.length)];
      const lat = randomPoint[1] + (Math.random() - 0.5) * 0.001;
      const lon = randomPoint[0] + (Math.random() - 0.5) * 0.001;

      const actuallyOnline = isOnline && !simulatedOffline;

      if (actuallyOnline) {
        // Send directly to live telemetry
        telemetryEngine.publishDriverLocation({
          id: `loc-drv-${Date.now()}`,
          tripId: driverSession.tripId,
          busId: driverSession.busId,
          routeId: driverSession.routeId,
          direction: driverSession.direction,
          latitude: lat,
          longitude: lon,
          bearing: Math.floor(Math.random() * 360),
          speedKmh: speed,
          accuracyMeters: 6,
          measuredTime: now.toISOString(),
          receivedTime: now.toISOString(),
          source: 'driver_gps',
          isHistorical: false
        });
        setPingsSent(prev => prev + 1);
      } else {
        // Driver is OFFLINE: Queue locally in IndexedDB!
        await offlineStorage.queueDriverLocation({
          id: `queued-${Date.now()}`,
          tripId: driverSession.tripId,
          busId: driverSession.busId,
          latitude: lat,
          longitude: lon,
          bearing: 85,
          speedKmh: speed,
          accuracyMeters: 10,
          measuredTime: now.toISOString(),
          queuedAt: now.toISOString()
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [driverSession?.isActive, isOnline, simulatedOffline, selectedRoute]);

  const handleStartTrip = () => {
    startDriverTrip(selectedBusId, selectedRouteId, direction);
    setTripElapsedSeconds(0);
    setPingsSent(1);
  };

  const handleEndTrip = () => {
    endDriverTrip();
  };

  const formatDuration = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
              <Bus className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black">
                {t('driver_title')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                {t('driver_subtitle')}
              </p>
            </div>
          </div>

          {/* Sharing Status Badge */}
          <div>
            {driverSession?.isActive ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold animate-pulse">
                <Radio className="w-4 h-4 text-emerald-400" />
                <span>{t('driver_sharing_active')}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span>{t('driver_sharing_inactive')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Privacy Assurance Box */}
        <div className="mt-5 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-400">Notice: </strong>
            {t('driver_privacy_notice')}
          </p>
        </div>
      </div>

      {/* Main Flow: If Active Trip vs Start Trip Form */}
      {driverSession?.isActive ? (
        /* ACTIVE TRIP HUD CONSOLE */
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                {lang === 'bn' ? 'চলমান ট্রিপ' : 'Ongoing Active Trip'}
              </span>
              <h2 className="text-xl font-black text-slate-900 mt-0.5">
                {driverSession.registrationNumber} • {driverSession.routeNumber}
              </h2>
              <p className="text-xs text-slate-500">
                {selectedRoute?.directions[driverSession.direction].directionNameEn}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                Driver: {driverSession.driverName}
              </span>
            </div>
          </div>

          {/* Real-time Telemetry Dashboard Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Speedometer */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Gauge className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 font-semibold uppercase">{t('driver_speed')}</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {currentSpeed} <span className="text-xs font-normal text-slate-500">km/h</span>
              </div>
            </div>

            {/* Trip Duration */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 font-semibold uppercase">{t('driver_trip_duration')}</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {formatDuration(tripElapsedSeconds)}
              </div>
            </div>

            {/* Live Pings Sent */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Radio className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 font-semibold uppercase">{t('driver_pings_sent')}</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {pingsSent}
              </div>
            </div>

            {/* Offline Queued Points */}
            <div className={`p-4 rounded-2xl border text-center transition ${
              queuedPointsCount > 0 ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-slate-50 border-slate-200'
            }`}>
              <Database className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 font-semibold uppercase">{t('driver_queued_offline')}</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {queuedPointsCount}
              </div>
            </div>
          </div>

          {/* Connectivity & Offline Test Simulator */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {!simulatedOffline && isOnline ? (
                <Wifi className="w-5 h-5 text-emerald-600" />
              ) : (
                <WifiOff className="w-5 h-5 text-amber-600 animate-pulse" />
              )}
              <div>
                <span className="font-bold text-xs text-slate-900">
                  {!simulatedOffline && isOnline 
                    ? (lang === 'bn' ? 'নেটওয়ার্ক অনলাইন: সরাসরি লাইভ আপলোড সক্রিয়' : 'Network Online: Live Telemetry Streaming')
                    : (lang === 'bn' ? 'অফলাইন মোড সক্রিয়: স্থানীয় IndexedDB-তে পয়েন্ট জমছে' : 'Offline Mode Active: Local IndexedDB Queue Active')}
                </span>
                <p className="text-[11px] text-slate-500">
                  {lang === 'bn' 
                    ? 'পুনরায় সংযোগে বিলম্বিত পয়েন্টগুলো ঐতিহাসিক হিসেবে চিহ্নিত হয়ে সার্ভারে আপলোড হবে।'
                    : 'Reconnection automatically marks queued points as historical before upload.'}
                </p>
              </div>
            </div>

            {/* Offline Simulation Toggle button for Reviewer Testing */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setSimulatedOffline(!simulatedOffline)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  simulatedOffline
                    ? 'bg-amber-500 text-slate-950 border-amber-600'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border-slate-300'
                }`}
              >
                {simulatedOffline ? 'Reconnect Network' : 'Simulate Offline Drop'}
              </button>

              {queuedPointsCount > 0 && (
                <button
                  onClick={syncOfflineQueue}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-1 shadow-sm"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Sync ({queuedPointsCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* End Trip Big Accessible Red Button */}
          <div className="pt-2">
            <button
              onClick={handleEndTrip}
              className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-rose-200 transition focus:ring-4 focus:ring-rose-300 outline-none"
            >
              <Square className="w-5 h-5 fill-current" />
              <span>{t('driver_end_trip')}</span>
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              {lang === 'bn' ? 'যাত্রাশেষে ট্র্যাকিং অবিলম্বে বন্ধ হয়ে যাবে।' : 'Stops location tracking immediately and releases bus.'}
            </p>
          </div>
        </div>
      ) : (
        /* START TRIP FORM */
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            {lang === 'bn' ? 'নতুন ট্রিপ শুরু করুন' : 'Initiate Authorized Bus Trip'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bus Vehicle Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                {t('driver_select_bus')}
              </label>
              <select
                value={selectedBusId}
                onChange={(e) => setSelectedBusId(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-sm focus:ring-2 focus:ring-amber-500 outline-none"
              >
                {SAMPLE_BUS_FLEET.map(bus => (
                  <option key={bus.id} value={bus.id}>
                    {bus.registrationNumber} — {bus.model} ({bus.operatorType} {bus.isAC ? 'AC' : 'Non-AC'})
                  </option>
                ))}
              </select>
            </div>

            {/* Route Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                {t('driver_select_route')}
              </label>
              <select
                value={selectedRouteId}
                onChange={(e) => setSelectedRouteId(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-sm focus:ring-2 focus:ring-amber-500 outline-none"
              >
                {routes.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.routeNumber} : {lang === 'bn' ? r.nameBn : r.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Direction Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                {t('driver_select_direction')}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDirection('UP')}
                  className={`p-3 rounded-xl text-xs font-bold border transition truncate ${
                    direction === 'UP'
                      ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  UP: {selectedRoute?.directions.UP.directionNameEn.replace('Towards ', '')}
                </button>
                <button
                  type="button"
                  onClick={() => setDirection('DOWN')}
                  className={`p-3 rounded-xl text-xs font-bold border transition truncate ${
                    direction === 'DOWN'
                      ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  DOWN: {selectedRoute?.directions.DOWN.directionNameEn.replace('Towards ', '')}
                </button>
              </div>
            </div>

            {/* Driver Identity */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                {lang === 'bn' ? 'চালকের নাম ও পিন' : 'Driver Name & Security PIN'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                  className="col-span-2 p-3 rounded-xl border border-slate-300 bg-slate-50 font-medium text-sm"
                  placeholder="Driver Name"
                />
                <input
                  type="password"
                  value={driverPin}
                  onChange={(e) => setDriverPin(e.target.value)}
                  maxLength={4}
                  className="p-3 rounded-xl border border-slate-300 bg-slate-50 font-mono text-center text-sm font-bold"
                  placeholder="PIN"
                />
              </div>
            </div>
          </div>

          {/* Big Start Trip Button */}
          <div className="pt-2">
            <button
              onClick={handleStartTrip}
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transition focus:ring-4 focus:ring-emerald-300 outline-none"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{t('driver_start_trip')}</span>
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              {lang === 'bn' ? 'যাত্রা শুরু করলে বাসের অবস্থান রিয়েল-টাইমে শেয়ার হবে।' : 'GPS sharing activates upon starting trip.'}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
