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
  UploadCloud,
  Lock,
  UserCheck,
  LogOut,
  Thermometer,
  CloudSun,
  KeyRound,
  CheckCircle,
  ShieldAlert,
  Landmark,
  BusFront,
  Smartphone
} from 'lucide-react';

export const DriverPortal: React.FC = () => {
  const { lang, t } = useLanguage();
  const { 
    routes, 
    registeredDrivers,
    authenticatedDriver,
    loginDriver,
    logoutDriver,
    driverSession, 
    startDriverTrip, 
    endDriverTrip, 
    isOnline, 
    queuedPointsCount,
    syncOfflineQueue,
    kolkataWeather,
    setRole
  } = useTransit();

  // Login Portal Tab: 'ALL' | 'GOVERNMENT' | 'PRIVATE'
  const [loginSectorTab, setLoginSectorTab] = useState<'GOVERNMENT' | 'PRIVATE'>('GOVERNMENT');

  // Driver Login Form States
  const [inputDriverId, setInputDriverId] = useState('DRV-WBTC-101');
  const [inputPin, setInputPin] = useState('1234');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  // Trip selection states (initialized with driver's registered assignment)
  const [selectedBusId, setSelectedBusId] = useState('');
  const [selectedRouteId, setSelectedRouteId] = useState('');
  const [direction, setDirection] = useState<'UP' | 'DOWN'>('UP');

  // Active trip telemetry HUD state
  const [tripElapsedSeconds, setTripElapsedSeconds] = useState(0);
  const [pingsSent, setPingsSent] = useState(14);
  const [currentSpeed, setCurrentSpeed] = useState(32);
  const [simulatedOffline, setSimulatedOffline] = useState(false);

  // Sync selection with authenticated driver assignment
  useEffect(() => {
    if (authenticatedDriver) {
      setSelectedBusId(authenticatedDriver.assignedBusId || 'bus-wb04-1842');
      setSelectedRouteId(authenticatedDriver.assignedRouteId || 'route-s12');
    }
  }, [authenticatedDriver]);

  const selectedRoute = routes.find(r => r.id === (driverSession ? driverSession.routeId : (selectedRouteId || 'route-s12')));
  const selectedBus = SAMPLE_BUS_FLEET.find(b => b.id === (driverSession ? driverSession.busId : (selectedBusId || 'bus-wb04-1842')));

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
    if (!driverSession?.isActive || !authenticatedDriver) return;

    const interval = window.setInterval(async () => {
      const now = new Date();
      const speed = Math.floor(20 + Math.random() * 25);
      setCurrentSpeed(speed);

      const coords = selectedRoute?.directions[driverSession.direction].pathCoordinates || [[88.4187, 22.5867]];
      const randomPoint = coords[Math.floor(Math.random() * coords.length)];
      const lat = randomPoint[1] + (Math.random() - 0.5) * 0.001;
      const lon = randomPoint[0] + (Math.random() - 0.5) * 0.001;

      const actuallyOnline = isOnline && !simulatedOffline;

      if (actuallyOnline) {
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
        }, {
          driverId: authenticatedDriver.driverId,
          driverName: authenticatedDriver.nameEn,
          sector: authenticatedDriver.sector
        });
        setPingsSent(prev => prev + 1);
      } else {
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
  }, [driverSession?.isActive, isOnline, simulatedOffline, selectedRoute, authenticatedDriver]);

  // Handle Login
  const handleDriverLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess('');

    if (!inputDriverId.trim()) {
      setLoginError('Please enter your designated Driver ID.');
      return;
    }
    if (!inputPin.trim()) {
      setLoginError('Please enter your 4-digit PIN.');
      return;
    }

    const result = loginDriver(inputDriverId, inputPin);
    if (!result.success) {
      setLoginError(result.message);
    } else {
      setLoginSuccess(result.message);
    }
  };

  const handleQuickSelectDriver = (driver: typeof registeredDrivers[0]) => {
    setInputDriverId(driver.driverId);
    setInputPin(driver.pin);
    setLoginSectorTab(driver.sector);
    setLoginError('');
  };

  const handleStartTrip = () => {
    if (!selectedBusId || !selectedRouteId) return;
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

  // Filtered demo drivers for each sector
  const govtDemoDrivers = registeredDrivers.filter(d => d.sector === 'GOVERNMENT');
  const privateDemoDrivers = registeredDrivers.filter(d => d.sector === 'PRIVATE');

  // -------------------------------------------------------------
  // VIEW 1: SIGN-IN PORTAL (If driver not authenticated)
  // -------------------------------------------------------------
  if (!authenticatedDriver) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-4">
        {/* Sign In Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          
          {/* Logo & Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-md">
              <KeyRound className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {lang === 'bn' ? 'অনুমোদিত চালক ও কন্ডাক্টর প্রবেশদ্বার' : 'Driver & Conductor Telemetry Portal'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              {lang === 'bn' 
                ? 'সরকারি (WBTC/CSTC) এবং বেসরকারি (সিন্ডিকেট/মিনিবাস) উভয়ের জন্যই সমন্বিত পোর্টাল।'
                : 'Dedicated operational portal for both Government (WBTC/CSTC) and Private Syndicate bus crews.'}
            </p>
          </div>

          {/* Sector Switcher Tabs: Govt vs Private */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => {
                setLoginSectorTab('GOVERNMENT');
                setInputDriverId('DRV-WBTC-101');
                setInputPin('1234');
                setLoginError('');
              }}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                loginSectorTab === 'GOVERNMENT'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>🏛️ {lang === 'bn' ? 'সরকারি চালক (WBTC/CSTC)' : 'Government Fleet (WBTC)'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setLoginSectorTab('PRIVATE');
                setInputDriverId('DRV-PVT-201');
                setInputPin('4567');
                setLoginError('');
              }}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                loginSectorTab === 'PRIVATE'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BusFront className="w-4 h-4" />
              <span>🚍 {lang === 'bn' ? 'বেসরকারি বাস ও মিনিবাস' : 'Private Syndicates'}</span>
            </button>
          </div>

          {/* Admin Notice based on Sector */}
          <div className={`mb-6 p-3.5 rounded-2xl border text-xs flex items-start gap-2.5 ${
            loginSectorTab === 'GOVERNMENT'
              ? 'bg-blue-50 border-blue-200 text-blue-950'
              : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}>
            <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
            <p className="leading-relaxed">
              {loginSectorTab === 'GOVERNMENT' ? (
                <>
                  <strong>Government Service: </strong>
                  Official State Employee IDs (e.g. <code>DRV-WBTC-xxx</code>) are provisioned through state depot administration (Kasba, Jadavpur, Tollygunge).
                </>
              ) : (
                <>
                  <strong>Private Syndicate Fleet: </strong>
                  Syndicate IDs (e.g. <code>DRV-PVT-xxx</code>, <code>DRV-MB-xxx</code>) are authorized by the Joint Council of Bus Syndicates or Minibus Samity. Both <strong>Drivers</strong> and <strong>Conductors</strong> can share mobile GPS.
                </>
              )}
            </p>
          </div>

          {/* Error Banner */}
          {loginError && (
            <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2" role="alert">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleDriverLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {loginSectorTab === 'GOVERNMENT' ? 'Official Employee Driver ID' : 'Designated Syndicate Driver / Conductor ID'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={inputDriverId}
                  onChange={(e) => setInputDriverId(e.target.value.toUpperCase())}
                  placeholder={loginSectorTab === 'GOVERNMENT' ? 'e.g. DRV-WBTC-101' : 'e.g. DRV-PVT-201'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 font-mono text-sm tracking-wide focus:ring-2 focus:ring-amber-500 uppercase font-semibold outline-none bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {lang === 'bn' ? '৪-সংখ্যার সিকিউরিটি পিন' : '4-Digit Security PIN'}
              </label>
              <input
                type="password"
                required
                maxLength={4}
                value={inputPin}
                onChange={(e) => setInputPin(e.target.value)}
                placeholder="••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 font-mono text-center text-lg tracking-widest focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50 font-bold"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl text-white font-extrabold text-sm transition shadow-md flex items-center justify-center gap-2 mt-2 ${
                loginSectorTab === 'GOVERNMENT'
                  ? 'bg-blue-700 hover:bg-blue-800'
                  : 'bg-slate-900 hover:bg-slate-800'
              }`}
            >
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>{lang === 'bn' ? 'অনুমোদন যাচাই ও প্রবেশ' : `Access ${loginSectorTab === 'GOVERNMENT' ? 'Government' : 'Private'} Console`}</span>
            </button>
          </form>

          {/* Quick Select Demo Drivers for Current Tab */}
          <div className="mt-8 pt-5 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 text-center">
              {loginSectorTab === 'GOVERNMENT' ? '🏛️ Official Government Demo Drivers (1-Click)' : '🚍 Private Syndicate & Minibus Demo Drivers (1-Click)'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(loginSectorTab === 'GOVERNMENT' ? govtDemoDrivers : privateDemoDrivers).map(d => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => handleQuickSelectDriver(d)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition flex items-center justify-between ${
                    inputDriverId === d.driverId
                      ? 'bg-amber-50 border-amber-400 text-amber-950 font-semibold'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span className="font-mono text-amber-700">{d.driverId}</span>
                      <span>• {lang === 'bn' ? d.nameBn : d.nameEn}</span>
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {d.assignedDepot} • PIN: {d.pin}
                    </div>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold text-slate-700">
                    Use
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Link to Admin console */}
          <div className="mt-6 text-center text-xs text-slate-500">
            Need to register a Government or Private driver?{' '}
            <button
              onClick={() => setRole('operator')}
              className="text-blue-600 font-bold hover:underline"
            >
              Open Admin Console &rarr;
            </button>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED DRIVER PORTAL & HUD
  // -------------------------------------------------------------
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Driver Header Badge */}
      <div className={`text-white p-6 rounded-3xl shadow-lg border ${
        authenticatedDriver.sector === 'GOVERNMENT'
          ? 'bg-slate-900 border-blue-800'
          : 'bg-slate-900 border-amber-800'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${
              authenticatedDriver.sector === 'GOVERNMENT' ? 'bg-blue-600 text-white' : 'bg-amber-400 text-slate-950'
            }`}>
              <Bus className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl sm:text-2xl font-black">
                  {lang === 'bn' ? authenticatedDriver.nameBn : authenticatedDriver.nameEn}
                </span>
                <span className="bg-amber-400 text-slate-950 text-xs font-mono font-bold px-2 py-0.5 rounded-lg">
                  {authenticatedDriver.driverId}
                </span>
                {/* Sector Badge */}
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  authenticatedDriver.sector === 'GOVERNMENT'
                    ? 'bg-blue-800 text-blue-200 border border-blue-700'
                    : 'bg-amber-800 text-amber-200 border border-amber-700'
                }`}>
                  {authenticatedDriver.sector === 'GOVERNMENT' ? '🏛️ WBTC Govt Fleet' : '🚍 Private Syndicate'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {authenticatedDriver.assignedDepot} • License: {authenticatedDriver.licenseNumber}
                {authenticatedDriver.busOwnerName ? ` • Owner: ${authenticatedDriver.busOwnerName}` : ''}
              </p>
            </div>
          </div>

          {/* Right Controls: Sharing Indicator & Sign Out */}
          <div className="flex items-center gap-2.5">
            {driverSession?.isActive ? (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold animate-pulse">
                <Radio className="w-4 h-4 text-emerald-400" />
                <span>{t('driver_sharing_active')}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span>{t('driver_sharing_inactive')}</span>
              </div>
            )}

            <button
              onClick={logoutDriver}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
              title="Sign Out of Driver Console"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Climate & Weather Alignment Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CloudSun className="w-4 h-4 text-amber-400" />
            <span>Kolkata Ambient: <strong>{kolkataWeather.temperatureC}°C</strong> ({kolkataWeather.conditionEn}, Hum: {kolkataWeather.humidity}%)</span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <Thermometer className="w-4 h-4 text-cyan-400" />
            <span>Bus Interior Sensor: <strong className="text-cyan-300">{selectedRoute?.isAC ? '21.5°C (AC Cooling Active)' : '29.5°C (Ambient Airflow)'}</strong></span>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-4 p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-400">Privacy Notice: </strong>
            {t('driver_privacy_notice')}
          </p>
        </div>
      </div>

      {/* TRIP FLOW: ACTIVE HUD vs START TRIP FORM */}
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
              <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                authenticatedDriver.sector === 'GOVERNMENT'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}>
                {authenticatedDriver.sector === 'GOVERNMENT' ? 'Govt Driver ID' : 'Syndicate ID'}: {authenticatedDriver.driverId}
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

            {/* Bus Interior Climate */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Thermometer className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 font-semibold uppercase">Interior Temp</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {selectedRoute?.isAC ? '21.5°C' : '29.5°C'}
              </div>
            </div>
          </div>

          {/* Offline Queue Test Simulator */}
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

          {/* End Trip Button */}
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
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'নতুন ট্রিপ শুরু করুন' : 'Initiate Authorized Bus Trip'}
              </h2>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                authenticatedDriver.sector === 'GOVERNMENT' ? 'bg-blue-100 text-blue-900' : 'bg-amber-100 text-amber-900'
              }`}>
                {authenticatedDriver.sector === 'GOVERNMENT' ? '🏛️ WBTC State Government Fleet' : '🚍 Private Syndicate Operator'}
              </span>
            </div>
          </div>

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
                {SAMPLE_BUS_FLEET.filter(b => b.sector === authenticatedDriver.sector).map(bus => (
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
                {routes.filter(r => r.sector === authenticatedDriver.sector).map(r => (
                  <option key={r.id} value={r.id}>
                    {r.routeNumber} : {lang === 'bn' ? r.nameBn : r.nameEn} {r.isAC ? '(AC)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Direction Selection */}
            <div className="md:col-span-2">
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
          </div>

          {/* Start Trip Big Accessible Green Button */}
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
