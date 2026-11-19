import React, { useState } from 'react';
import { useTransit } from '../../context/TransitContext';
import { useLanguage } from '../../context/LanguageContext';
import { BusRoute, BusStop, ActiveBusState, RegisteredDriver, BusSector, OperatorType } from '../../types/transit';
import { FreshnessBadge } from '../common/FreshnessBadge';
import { 
  Activity, 
  AlertTriangle, 
  Bus, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Plus, 
  Search, 
  ShieldAlert, 
  TrendingUp, 
  Users, 
  X,
  Compass,
  UserCheck,
  ShieldCheck,
  KeyRound,
  Trash2,
  Lock,
  Unlock,
  Radio,
  Building2
} from 'lucide-react';

export const OperatorDashboard: React.FC = () => {
  const { lang, t } = useLanguage();
  const { 
    routes, 
    stops, 
    activeBuses, 
    registeredDrivers, 
    registerDriver, 
    updateDriverStatus, 
    deleteDriver, 
    addOrUpdateRoute, 
    addOrUpdateStop 
  } = useTransit();

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('bb_admin_session') === 'true';
  });
  const [adminIdInput, setAdminIdInput] = useState('');
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const id = adminIdInput.trim().toLowerCase();
    const pwd = adminPasswordInput.trim();

    if ((id === 'admin' || id === 'wbtc-admin' || id === 'operator') && 
        (pwd === 'admin' || pwd === 'admin123' || pwd === 'kolkata2026' || pwd === 'ctc2026')) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('bb_admin_session', 'true');
      setAuthError('');
    } else {
      setAuthError(lang === 'bn' 
        ? 'ভুল আইডি বা পাসওয়ার্ড। অনুগ্রহ করে অনুমোদিত ক্রেডেনশিয়াল ব্যবহার করুন।' 
        : 'Invalid Admin ID or Password. Please enter authorized credentials.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('bb_admin_session');
    setAdminIdInput('');
    setAdminPasswordInput('');
    setAuthError('');
  };

  // Active Tab: 'fleet' | 'drivers'
  const [activeTab, setActiveTab] = useState<'fleet' | 'drivers'>('fleet');

  // Search & Filters
  const [fleetSearch, setFleetSearch] = useState('');
  const [fleetSectorFilter, setFleetSectorFilter] = useState<'all' | 'GOVERNMENT' | 'PRIVATE'>('all');
  const [driverSectorFilter, setDriverSectorFilter] = useState<'all' | 'GOVERNMENT' | 'PRIVATE'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'live' | 'stale' | 'offroute'>('all');

  // Modals
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);
  const [isStopModalOpen, setIsStopModalOpen] = useState(false);

  // New Driver Form States
  const [newDriverSector, setNewDriverSector] = useState<BusSector>('GOVERNMENT');
  const [newDriverRoleInBus, setNewDriverRoleInBus] = useState<'driver' | 'conductor'>('driver');
  const [newDriverId, setNewDriverId] = useState(`DRV-WBTC-${100 + registeredDrivers.length + 1}`);
  const [newDriverNameEn, setNewDriverNameEn] = useState('');
  const [newDriverNameBn, setNewDriverNameBn] = useState('');
  const [newDriverLicense, setNewDriverLicense] = useState('');
  const [newDriverPhone, setNewDriverPhone] = useState('');
  const [newDriverDepot, setNewDriverDepot] = useState('Kasba CSTC Depot');
  const [newDriverSyndicate, setNewDriverSyndicate] = useState('Joint Council of Bus Syndicates');
  const [newDriverPermit, setNewDriverPermit] = useState('');
  const [newDriverOwnerName, setNewDriverOwnerName] = useState('');
  const [newDriverBusId, setNewDriverBusId] = useState('bus-wb04-1842');
  const [newDriverRouteId, setNewDriverRouteId] = useState('route-s12');
  const [newDriverPin, setNewDriverPin] = useState('1234');

  // New Route Form
  const [newRouteNum, setNewRouteNum] = useState('');
  const [newRouteNameEn, setNewRouteNameEn] = useState('');
  const [newRouteNameBn, setNewRouteNameBn] = useState('');
  const [newRouteViaEn, setNewRouteViaEn] = useState('');
  const [newRouteViaBn, setNewRouteViaBn] = useState('');
  const [newRouteIsAC, setNewRouteIsAC] = useState(false);
  const [newRouteOperator, setNewRouteOperator] = useState<OperatorType>('WBTC');

  // New Stop Form
  const [newStopNameEn, setNewStopNameEn] = useState('');
  const [newStopNameBn, setNewStopNameBn] = useState('');
  const [newStopLat, setNewStopLat] = useState('22.5700');
  const [newStopLon, setNewStopLon] = useState('88.3700');
  const [newStopLandmarkEn, setNewStopLandmarkEn] = useState('');
  const [newStopLandmarkBn, setNewStopLandmarkBn] = useState('');

  // Switch Sector in Registration Modal
  const handleSectorChange = (sec: BusSector) => {
    setNewDriverSector(sec);
    if (sec === 'GOVERNMENT') {
      setNewDriverId(`DRV-WBTC-${100 + registeredDrivers.length + 1}`);
      setNewDriverRoleInBus('driver');
      setNewDriverDepot('Kasba CSTC Depot');
    } else {
      setNewDriverId(`DRV-PVT-${200 + registeredDrivers.length + 1}`);
      setNewDriverDepot('Howrah Station Syndicate Stand');
    }
  };

  // Metrics
  const totalBuses = 10;
  const activeTripsCount = activeBuses.length;
  const govtBusesCount = activeBuses.filter(b => b.sector === 'GOVERNMENT').length;
  const pvtBusesCount = activeBuses.filter(b => b.sector === 'PRIVATE').length;
  const govtDriversCount = registeredDrivers.filter(d => d.sector === 'GOVERNMENT').length;
  const pvtDriversCount = registeredDrivers.filter(d => d.sector === 'PRIVATE').length;

  const staleCount = activeBuses.filter(b => b.isStale).length;
  const offRouteCount = activeBuses.filter(b => b.isOffRoute).length;
  const freshPercentage = Math.round(
    ((activeTripsCount - staleCount) / Math.max(1, activeTripsCount)) * 100
  );

  // Filtered buses for Fleet Table
  const filteredBuses = activeBuses.filter(bus => {
    const matchesSearch = 
      bus.routeNumber.toLowerCase().includes(fleetSearch.toLowerCase()) ||
      bus.registrationNumber.toLowerCase().includes(fleetSearch.toLowerCase()) ||
      (bus.driverId && bus.driverId.toLowerCase().includes(fleetSearch.toLowerCase())) ||
      (bus.syndicateOrDepot && bus.syndicateOrDepot.toLowerCase().includes(fleetSearch.toLowerCase()));
    
    if (!matchesSearch) return false;
    if (fleetSectorFilter !== 'all' && bus.sector !== fleetSectorFilter) return false;
    if (statusFilter === 'live') return bus.freshnessStatus === 'live' && !bus.isOffRoute;
    if (statusFilter === 'stale') return bus.isStale;
    if (statusFilter === 'offroute') return bus.isOffRoute;
    return true;
  });

  // Filtered drivers for Registry Table
  const filteredDrivers = registeredDrivers.filter(drv => {
    if (driverSectorFilter !== 'all' && drv.sector !== driverSectorFilter) return false;
    return true;
  });

  // Handle Driver Registration Submit
  const handleSaveDriver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDriverId || !newDriverNameEn || !newDriverPin) return;

    const newDriver: RegisteredDriver = {
      id: `drv-uuid-${Date.now()}`,
      driverId: newDriverId.trim().toUpperCase(),
      sector: newDriverSector,
      roleInBus: newDriverRoleInBus,
      nameEn: newDriverNameEn.trim(),
      nameBn: newDriverNameBn.trim() || newDriverNameEn.trim(),
      licenseNumber: newDriverLicense.trim() || (newDriverRoleInBus === 'conductor' ? 'COND-WB-PENDING' : 'WB-01-PENDING'),
      phone: newDriverPhone.trim() || '+91 98300 00000',
      pin: newDriverPin.trim(),
      assignedDepot: newDriverSector === 'GOVERNMENT' ? newDriverDepot : `${newDriverSyndicate} (${newDriverDepot})`,
      assignedBusId: newDriverBusId,
      assignedRouteId: newDriverRouteId,
      status: 'active',
      registeredAt: new Date().toISOString(),
      registeredByAdmin: 'Admin (Kolkata Operations Control)',
      busOwnerName: newDriverSector === 'PRIVATE' ? (newDriverOwnerName.trim() || 'Kolkata Bus Syndicate Member') : undefined,
      permitNumber: newDriverSector === 'PRIVATE' ? (newDriverPermit.trim() || `P.St.P./WB/${newDriverRouteId.toUpperCase()}`) : undefined
    };

    registerDriver(newDriver);
    setIsDriverModalOpen(false);
    setNewDriverNameEn('');
    setNewDriverNameBn('');
    setNewDriverLicense('');
    setNewDriverPin('1234');
    setNewDriverId(newDriverSector === 'GOVERNMENT' 
      ? `DRV-WBTC-${100 + registeredDrivers.length + 2}` 
      : `DRV-PVT-${200 + registeredDrivers.length + 2}`
    );
  };

  const handleSaveRoute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRouteNum || !newRouteNameEn) return;

    const isPvt = newRouteOperator === 'PRIVATE' || (newRouteOperator as string) === 'MINIBUS';
    const routeSector: BusSector = isPvt ? 'PRIVATE' : 'GOVERNMENT';

    const newRoute: BusRoute = {
      id: `route-custom-${Date.now()}`,
      routeNumber: newRouteNum.toUpperCase(),
      nameEn: newRouteNameEn,
      nameBn: newRouteNameBn || newRouteNameEn,
      operatorId: newRouteOperator.toLowerCase(),
      operatorType: newRouteOperator,
      sector: routeSector,
      isAC: newRouteIsAC,
      color: newRouteIsAC ? '#059669' : (isPvt ? '#EA580C' : '#2563EB'),
      fareMin: newRouteIsAC ? 25 : (isPvt ? 10 : 8),
      fareMax: newRouteIsAC ? 50 : (isPvt ? 20 : 15),
      frequencyMinutes: isPvt ? 8 : 12,
      firstBus: '05:30 AM',
      lastBus: '09:30 PM',
      viaEn: newRouteViaEn || 'Major Kolkata Corridors',
      viaBn: newRouteViaBn || 'কলকাতার প্রধান সড়ক',
      acceptsGovtPass: !isPvt,
      paymentModes: isPvt ? ['cash', 'upi'] : ['cash', 'smart_card', 'govt_pass'],
      syndicateNameEn: isPvt ? 'Joint Council of Bus Syndicates' : undefined,
      syndicateNameBn: isPvt ? 'জয়েন্ট কাউন্সিল অফ বাস সিন্ডিকেট' : undefined,
      permitNumber: isPvt ? `P.St.P./WB/${newRouteNum.toUpperCase()}-01` : undefined,
      directions: {
        UP: {
          directionId: 'UP',
          directionNameEn: `Towards ${newRouteNameEn.split('⇌')[1]?.trim() || 'Terminus'}`,
          directionNameBn: `টার্মিনাসের দিকে`,
          originStopId: stops[0]?.id || 'stop-howrah-stn',
          destinationStopId: stops[1]?.id || 'stop-sector-v-sdf',
          stops: [
            { stopId: stops[0]?.id || 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
            { stopId: stops[1]?.id || 'stop-sector-v-sdf', sequence: 2, distanceFromStartKm: 12.5, scheduledMinutesFromStart: 45 }
          ],
          pathCoordinates: [
            [88.3431, 22.5835],
            [88.3888, 22.5898],
            [88.4338, 22.5736]
          ]
        },
        DOWN: {
          directionId: 'DOWN',
          directionNameEn: `Towards ${newRouteNameEn.split('⇌')[0]?.trim() || 'Origin'}`,
          directionNameBn: `উৎসের দিকে`,
          originStopId: stops[1]?.id || 'stop-sector-v-sdf',
          destinationStopId: stops[0]?.id || 'stop-howrah-stn',
          stops: [
            { stopId: stops[1]?.id || 'stop-sector-v-sdf', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
            { stopId: stops[0]?.id || 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 12.5, scheduledMinutesFromStart: 45 }
          ],
          pathCoordinates: [
            [88.4338, 22.5736],
            [88.3888, 22.5898],
            [88.3431, 22.5835]
          ]
        }
      }
    };

    addOrUpdateRoute(newRoute);
    setIsRouteModalOpen(false);
    setNewRouteNum('');
    setNewRouteNameEn('');
  };

  const handleSaveStop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStopNameEn) return;

    const newStop: BusStop = {
      id: `stop-custom-${Date.now()}`,
      nameEn: newStopNameEn,
      nameBn: newStopNameBn || newStopNameEn,
      latitude: parseFloat(newStopLat) || 22.5726,
      longitude: parseFloat(newStopLon) || 88.3639,
      landmarkEn: newStopLandmarkEn || 'Kolkata Bus Stop',
      landmarkBn: newStopLandmarkBn || 'কলকাতা বাস স্টপ'
    };

    addOrUpdateStop(newStop);
    setIsStopModalOpen(false);
    setNewStopNameEn('');
  };

  // If not authenticated, render secure ID & Password Login Gateway
  if (!isAdminAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-8 p-6 sm:p-8 bg-[#FAF7F2] rounded-3xl border border-[#E6DFD5] shadow-xl">
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#1E4D38] text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#1E4D38] uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
              Government of West Bengal • WBTC
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
              {lang === 'bn' ? 'অ্যাডমিন কনসোল প্রবেশদ্বার' : 'Admin & Fleet Console Login'}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {lang === 'bn' 
                ? 'অনুমোদিত অপারেটর আইডি ও পাসওয়ার্ড দিয়ে লগইন করুন।' 
                : 'Enter your designated Operator ID & Password to manage Kolkata fleet, routes & drivers.'}
            </p>
          </div>
        </div>

        {authError && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
              {lang === 'bn' ? 'অ্যাডমিন আইডি:' : 'Admin / Operator ID:'}
            </label>
            <input
              type="text"
              value={adminIdInput}
              onChange={(e) => setAdminIdInput(e.target.value)}
              placeholder="e.g. admin or WBTC-ADMIN"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm font-medium focus:ring-2 focus:ring-[#1E4D38]/20 focus:border-[#1E4D38] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
              {lang === 'bn' ? 'পাসওয়ার্ড:' : 'Password:'}
            </label>
            <input
              type="password"
              value={adminPasswordInput}
              onChange={(e) => setAdminPasswordInput(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm font-medium focus:ring-2 focus:ring-[#1E4D38]/20 focus:border-[#1E4D38] outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-[#1E4D38] hover:bg-[#153828] text-amber-300 hover:text-amber-200 font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-[0.99]"
          >
            <KeyRound className="w-4 h-4" />
            <span>{lang === 'bn' ? 'কনসোলে প্রবেশ করুন' : 'Sign In to Admin Console'}</span>
          </button>
        </form>

        {/* Quick Demo Credentials Fill Button */}
        <div className="mt-5 pt-4 border-t border-stone-200 text-center">
          <p className="text-[11px] text-stone-500 mb-2">
            {lang === 'bn' ? 'পরীক্ষামূলক শংসাপত্র (Demo Access):' : 'Authorized Pilot Credentials:'}
          </p>
          <button
            type="button"
            onClick={() => {
              setAdminIdInput('admin');
              setAdminPasswordInput('admin123');
              setAuthError('');
            }}
            className="w-full py-2 px-3 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs transition"
          >
            🔑 Fill Demo Credentials (ID: <code className="font-mono">admin</code> / Pass: <code className="font-mono">admin123</code>)
          </button>
        </div>

        <div className="mt-4 text-center text-[10px] text-stone-400">
          West Bengal Motor Vehicles & Transit Management Division • 2026
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Operator Title & Action Buttons */}
      <div className="bg-[#143627] text-white p-6 rounded-3xl shadow-sm border border-[#1E4D38] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              {lang === 'bn' ? 'অপারেটর কনসোল ও নিয়ন্ত্রক' : 'Transit Authority & Syndicate Admin Console'}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black mt-1">
            {t('op_title')}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200">
            {lang === 'bn' 
              ? 'সরকারি ও বেসরকারি চালক আইডি নিবন্ধন, বাস বহরের অবস্থান, ও রুট কনফিগারেশন'
              : 'Register official driver/conductor IDs, audit live telemetry for Government (WBTC) and Private Syndicates, and configure Kolkata corridors'}
          </p>
        </div>

        {/* Action Buttons & Logout */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setIsDriverModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-stone-950 font-bold text-xs hover:bg-amber-300 transition shadow-sm"
          >
            <UserCheck className="w-4 h-4" />
            <span>Register Driver ID</span>
          </button>

          <button
            onClick={() => setIsRouteModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E4D38] text-white font-bold text-xs hover:bg-emerald-900 border border-emerald-700 transition"
          >
            <Plus className="w-4 h-4" />
            <span>{t('op_add_route')}</span>
          </button>

          <button
            onClick={() => setIsStopModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E4D38] text-white font-bold text-xs hover:bg-emerald-900 border border-emerald-700 transition"
          >
            <Plus className="w-4 h-4" />
            <span>{t('op_add_stop')}</span>
          </button>

          {/* Admin Sign Out */}
          <button
            onClick={handleAdminLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-900/80 hover:bg-rose-800 text-rose-200 border border-rose-700 font-bold text-xs transition"
            title="Log out of Admin Console"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'লগ আউট' : 'Sign Out'}</span>
          </button>
        </div>
      </div>

      {/* Pilot Telemetry Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Registered Drivers */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Official Drivers</span>
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
            {registeredDrivers.length}
          </div>
          <div className="text-[11px] text-purple-700 font-semibold mt-1 flex items-center gap-1.5 flex-wrap">
            <span className="bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded font-mono">🏛️ {govtDriversCount} Govt</span>
            <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-mono">🚍 {pvtDriversCount} Pvt</span>
          </div>
        </div>

        {/* Active Trips */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">{t('op_active_trips')}</span>
            <Bus className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
            {activeTripsCount} <span className="text-xs font-semibold text-slate-400">/ {totalBuses}</span>
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1.5 flex-wrap">
            <span className="bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded font-mono">🏛️ {govtBusesCount} Govt</span>
            <span className="bg-orange-50 text-orange-800 px-1.5 py-0.5 rounded font-mono">🚍 {pvtBusesCount} Pvt</span>
          </div>
        </div>

        {/* Freshness Health */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Data Freshness</span>
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
            {freshPercentage}%
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            Updates &lt; 30s average
          </div>
        </div>

        {/* Stale Updates (>2m) */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">{t('op_stale_alerts')}</span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono">
            {staleCount}
          </div>
          <div className="text-[11px] text-amber-700 font-medium mt-1">
            Degraded reliability
          </div>
        </div>
      </div>

      {/* Console Section Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('fleet')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === 'fleet'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Live Fleet & Telemetry ({activeBuses.length})
        </button>

        <button
          onClick={() => setActiveTab('drivers')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === 'drivers'
              ? 'bg-amber-400 text-slate-950 shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Driver Registry & Designated IDs ({registeredDrivers.length})</span>
        </button>
      </div>

      {/* TAB 1: FLEET & LIVE TELEMETRY TABLE */}
      {activeTab === 'fleet' && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          
          {/* Sector & Search Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={fleetSearch}
                onChange={(e) => setFleetSearch(e.target.value)}
                placeholder="Search bus no., driver ID (e.g. DRV-WBTC-101), depot..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Sector Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setFleetSectorFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  fleetSectorFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Sectors ({activeBuses.length})
              </button>
              <button
                onClick={() => setFleetSectorFilter('GOVERNMENT')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  fleetSectorFilter === 'GOVERNMENT'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-blue-800 hover:bg-blue-50'
                }`}
              >
                <span>🏛️ WBTC Govt</span>
                <span>({govtBusesCount})</span>
              </button>
              <button
                onClick={() => setFleetSectorFilter('PRIVATE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  fleetSectorFilter === 'PRIVATE'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-orange-800 hover:bg-orange-50'
                }`}
              >
                <span>🚍 Private Syndicates</span>
                <span>({pvtBusesCount})</span>
              </button>
            </div>
          </div>

          {/* Telemetry Status Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-semibold mr-1">Status:</span>
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                statusFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              All Status
            </button>
            <button
              onClick={() => setStatusFilter('live')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                statusFilter === 'live' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800'
              }`}
            >
              Live Fresh ({activeBuses.filter(b => b.freshnessStatus === 'live' && !b.isOffRoute).length})
            </button>
            <button
              onClick={() => setStatusFilter('stale')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                statusFilter === 'stale' ? 'bg-amber-500 text-slate-950' : 'bg-amber-50 text-amber-800'
              }`}
            >
              Stale ({staleCount})
            </button>
            <button
              onClick={() => setStatusFilter('offroute')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                statusFilter === 'offroute' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-800'
              }`}
            >
              Off-Route ({offRouteCount})
            </button>
          </div>

          {/* Real-time Fleet Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-xs uppercase font-bold">
                  <th className="p-3">{t('op_reg_no')}</th>
                  <th className="p-3">Sector & Syndicate</th>
                  <th className="p-3">Designated Driver</th>
                  <th className="p-3">{t('op_route')}</th>
                  <th className="p-3">Interior Temp</th>
                  <th className="p-3">{t('op_speed')}</th>
                  <th className="p-3">{t('op_freshness')}</th>
                  <th className="p-3">{t('op_status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredBuses.map(bus => (
                  <tr key={bus.busId} className="hover:bg-slate-50 transition">
                    <td className="p-3 whitespace-nowrap">
                      <div className="font-bold text-slate-900 font-mono text-xs">{bus.registrationNumber}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{bus.model || 'Ashok Leyland'}</div>
                    </td>

                    {/* Sector Badge */}
                    <td className="p-3 whitespace-nowrap">
                      {bus.sector === 'GOVERNMENT' ? (
                        <div className="space-y-0.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-900 border border-blue-200">
                            🏛️ WBTC Govt Fleet
                          </span>
                          <div className="text-[10px] text-slate-500 font-medium">{bus.syndicateOrDepot}</div>
                        </div>
                      ) : (
                        <div className="space-y-0.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-orange-100 text-orange-950 border border-orange-200">
                            🚍 {bus.operatorType === 'MINIBUS' ? 'Minibus Samity' : 'Private Syndicate'}
                          </span>
                          <div className="text-[10px] text-slate-500 font-medium truncate max-w-[150px]">
                            {bus.permitNumber || bus.syndicateOrDepot}
                          </div>
                        </div>
                      )}
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block w-fit">
                        {bus.driverId || 'DRV-WBTC-101'}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold">
                        {bus.driverName || 'Designated Driver'}
                      </span>
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-900 mr-1.5">
                        {bus.routeNumber}
                      </span>
                      <span className="text-xs text-slate-600 font-normal">
                        To {bus.destinationEn}
                      </span>
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                        bus.isAC ? 'bg-cyan-50 text-cyan-800' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {bus.climate?.interiorTempC || 29.5}°C
                      </span>
                    </td>

                    <td className="p-3 whitespace-nowrap font-mono text-xs text-slate-700">
                      {bus.speedKmh} km/h
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <FreshnessBadge 
                        status={bus.freshnessStatus}
                        labelEn={bus.freshnessLabelEn}
                        labelBn={bus.freshnessLabelBn}
                        isHistorical={bus.isHistorical}
                      />
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      {bus.isOffRoute ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-xs font-bold">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Off-Route Alert</span>
                        </span>
                      ) : bus.isStale ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-semibold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Signal Stale</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>On-Track</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: DRIVER REGISTRY & DESIGNATED ID MANAGEMENT */}
      {activeTab === 'drivers' && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Official Driver & Conductor Registry (প্রশাসনিক চালক ও কন্ডাক্টর তালিকা)
              </h2>
              <p className="text-xs text-slate-500">
                Only drivers & conductors registered with designated credentials can log into the Driver Portal.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Sector filter for drivers */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
                <button
                  onClick={() => setDriverSectorFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    driverSectorFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All ({registeredDrivers.length})
                </button>
                <button
                  onClick={() => setDriverSectorFilter('GOVERNMENT')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    driverSectorFilter === 'GOVERNMENT' ? 'bg-blue-600 text-white shadow-xs' : 'text-blue-800'
                  }`}
                >
                  🏛️ Govt ({govtDriversCount})
                </button>
                <button
                  onClick={() => setDriverSectorFilter('PRIVATE')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    driverSectorFilter === 'PRIVATE' ? 'bg-orange-500 text-white shadow-xs' : 'text-orange-800'
                  }`}
                >
                  🚍 Private ({pvtDriversCount})
                </button>
              </div>

              <button
                onClick={() => setIsDriverModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition shadow-sm"
              >
                <UserCheck className="w-4 h-4" />
                <span>Register New Driver</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-xs uppercase font-bold">
                  <th className="p-3">Designated ID & Sector</th>
                  <th className="p-3">Driver / Conductor Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Assigned Depot / Syndicate</th>
                  <th className="p-3">Assigned Route</th>
                  <th className="p-3">Security PIN</th>
                  <th className="p-3">Access Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDrivers.map(drv => {
                  const assignedRoute = routes.find(r => r.id === drv.assignedRouteId);
                  const isSuspended = drv.status === 'suspended';

                  return (
                    <tr key={drv.id} className="hover:bg-slate-50 transition">
                      <td className="p-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 border border-amber-300">
                            {drv.driverId}
                          </span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            drv.sector === 'GOVERNMENT'
                              ? 'bg-blue-100 text-blue-900'
                              : 'bg-orange-100 text-orange-950'
                          }`}>
                            {drv.sector === 'GOVERNMENT' ? '🏛️ WBTC' : '🚍 PVT'}
                          </span>
                        </div>
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <div className="font-bold text-slate-900 text-sm">{drv.nameEn}</div>
                        <div className="text-xs text-slate-500 font-bengali">{drv.nameBn}</div>
                        <div className="text-[10px] text-slate-400">{drv.phone}</div>
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded capitalize ${
                          drv.roleInBus === 'conductor' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {drv.roleInBus || 'driver'}
                        </span>
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <div className="font-semibold text-xs text-slate-800">{drv.assignedDepot}</div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {drv.permitNumber ? `Permit: ${drv.permitNumber}` : `Lic: ${drv.licenseNumber}`}
                        </div>
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                          {assignedRoute?.routeNumber || 'S-12'}
                        </span>
                        <span className="text-xs text-slate-600 ml-1.5">
                          {assignedRoute?.nameEn || 'Kolkata Route'}
                        </span>
                      </td>

                      <td className="p-3 whitespace-nowrap font-mono text-xs font-bold text-slate-700">
                        •••• ({drv.pin})
                      </td>

                      <td className="p-3 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          drv.status === 'active'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${drv.status === 'active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                          <span className="capitalize">{drv.status}</span>
                        </span>
                      </td>

                      <td className="p-3 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => updateDriverStatus(drv.driverId, isSuspended ? 'active' : 'suspended')}
                            className={`p-1.5 rounded-lg border text-xs font-semibold transition ${
                              isSuspended
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                                : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                            }`}
                            title={isSuspended ? 'Activate Driver Access' : 'Suspend Driver Access'}
                          >
                            {isSuspended ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                          </button>

                          <button
                            onClick={() => deleteDriver(drv.driverId)}
                            className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                            title="Remove Driver Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* REGISTER DRIVER MODAL */}
      {isDriverModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900">
                  Register Designated Transit Crew ID
                </h2>
              </div>
              <button 
                onClick={() => setIsDriverModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveDriver} className="space-y-4">
              {/* Sector Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Sector (ক্ষেত্র) *</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSectorChange('GOVERNMENT')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      newDriverSector === 'GOVERNMENT'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>🏛️ WBTC / Government</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSectorChange('PRIVATE')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      newDriverSector === 'PRIVATE'
                        ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>🚍 Private Bus Syndicate</span>
                  </button>
                </div>
              </div>

              {/* Role in Bus */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">On-Bus Role (ভূমিকা) *</label>
                  <select
                    value={newDriverRoleInBus}
                    onChange={(e) => setNewDriverRoleInBus(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
                  >
                    <option value="driver">Driver (চালক - Steers bus)</option>
                    <option value="conductor">Conductor (কন্ডাক্টর - Carries GPS phone)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Designated Driver ID *</label>
                  <input
                    type="text"
                    required
                    value={newDriverId}
                    onChange={(e) => setNewDriverId(e.target.value.toUpperCase())}
                    placeholder="e.g. DRV-WBTC-105"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-mono font-bold uppercase focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Security PIN & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Security PIN (4 Digits) *</label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    value={newDriverPin}
                    onChange={(e) => setNewDriverPin(e.target.value)}
                    placeholder="1234"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-mono text-center font-bold tracking-widest"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone (মোবাইল) *</label>
                  <input
                    type="text"
                    required
                    value={newDriverPhone}
                    onChange={(e) => setNewDriverPhone(e.target.value)}
                    placeholder="+91 98300 12345"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>

              {/* Names */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Name in English *</label>
                  <input
                    type="text"
                    required
                    value={newDriverNameEn}
                    onChange={(e) => setNewDriverNameEn(e.target.value)}
                    placeholder="e.g. Subir Karmakar"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Name in Bengali</label>
                  <input
                    type="text"
                    value={newDriverNameBn}
                    onChange={(e) => setNewDriverNameBn(e.target.value)}
                    placeholder="যেমন: সুবীর কর্মকার"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bengali"
                  />
                </div>
              </div>

              {/* Sector-Specific Fields */}
              {newDriverSector === 'GOVERNMENT' ? (
                <div className="grid grid-cols-2 gap-3 bg-blue-50/50 p-3 rounded-2xl border border-blue-100">
                  <div>
                    <label className="block text-xs font-bold text-blue-900 mb-1">Government Depot *</label>
                    <select
                      value={newDriverDepot}
                      onChange={(e) => setNewDriverDepot(e.target.value)}
                      className="w-full p-2 rounded-xl border border-blue-200 text-xs bg-white"
                    >
                      <option value="Kasba CSTC Depot">Kasba CSTC Depot</option>
                      <option value="Jadavpur 8B Depot">Jadavpur 8B Depot</option>
                      <option value="Tollygunge Tram Depot">Tollygunge Tram Depot</option>
                      <option value="Howrah Station Bus Stand">Howrah Station Bus Stand</option>
                      <option value="Babughat Riverfront Terminus">Babughat Riverfront Terminus</option>
                      <option value="Barasat Central Depot">Barasat Central Depot</option>
                      <option value="Salt Lake Karunamoyee Depot">Salt Lake Karunamoyee Depot</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 mb-1">Commercial License</label>
                    <input
                      type="text"
                      value={newDriverLicense}
                      onChange={(e) => setNewDriverLicense(e.target.value)}
                      placeholder="e.g. WB-01-2023-004410"
                      className="w-full p-2 rounded-xl border border-blue-200 text-xs font-mono"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3 bg-orange-50/50 p-3 rounded-2xl border border-orange-100">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-orange-950 mb-1">Private Syndicate *</label>
                      <select
                        value={newDriverSyndicate}
                        onChange={(e) => setNewDriverSyndicate(e.target.value)}
                        className="w-full p-2 rounded-xl border border-orange-200 text-xs bg-white"
                      >
                        <option value="Joint Council of Bus Syndicates">Joint Council of Bus Syndicates</option>
                        <option value="Bengal Bus Syndicate">Bengal Bus Syndicate</option>
                        <option value="All Bengal Minibus Samity">All Bengal Minibus Samity</option>
                        <option value="Minibus Operators Guild">Minibus Operators Guild</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-orange-950 mb-1">RTO Route Permit No.</label>
                      <input
                        type="text"
                        value={newDriverPermit}
                        onChange={(e) => setNewDriverPermit(e.target.value)}
                        placeholder="e.g. P.St.P./WB/215A-08"
                        className="w-full p-2 rounded-xl border border-orange-200 text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-orange-950 mb-1">Bus Owner / Union Contact</label>
                    <input
                      type="text"
                      value={newDriverOwnerName}
                      onChange={(e) => setNewDriverOwnerName(e.target.value)}
                      placeholder="e.g. Birendra Ghosh (Syndicate Operator)"
                      className="w-full p-2 rounded-xl border border-orange-200 text-xs"
                    />
                  </div>
                </div>
              )}

              {/* Assigned Route */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Assigned Route (রুট) *</label>
                <select
                  value={newDriverRouteId}
                  onChange={(e) => setNewDriverRouteId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                >
                  {routes.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.sector === 'GOVERNMENT' ? '🏛️' : '🚍'} {r.routeNumber} : {r.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsDriverModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm"
                >
                  Register & Provision ID
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD ROUTE MODAL */}
      {isRouteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'নতুন বাস রুট যোগ করুন' : 'Add New Kolkata Bus Route'}
              </h2>
              <button 
                onClick={() => setIsRouteModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveRoute} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Route Number</label>
                  <input
                    type="text"
                    required
                    value={newRouteNum}
                    onChange={(e) => setNewRouteNum(e.target.value)}
                    placeholder="e.g. S-32, AC-12, 230"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none uppercase font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Operator / Syndicate Type</label>
                  <select
                    value={newRouteOperator}
                    onChange={(e) => setNewRouteOperator(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm bg-white"
                  >
                    <option value="WBTC">🏛️ WBTC (Government)</option>
                    <option value="CSTC">🏛️ CSTC (Government)</option>
                    <option value="CTC">🏛️ CTC (Government)</option>
                    <option value="PRIVATE">🚍 PRIVATE (Syndicate)</option>
                    <option value="MINIBUS">🚍 MINIBUS (Samity)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Route Name (English)</label>
                <input
                  type="text"
                  required
                  value={newRouteNameEn}
                  onChange={(e) => setNewRouteNameEn(e.target.value)}
                  placeholder="e.g. Howrah Station ⇌ Salt Lake Sector V"
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="isACRoute"
                  checked={newRouteIsAC}
                  onChange={(e) => setNewRouteIsAC(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="isACRoute" className="text-xs font-semibold text-slate-700">
                  Air Conditioned Deluxe Service (AC Bus - ❄️ 21.5°C)
                </label>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsRouteModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  {t('save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD STOP MODAL */}
      {isStopModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'নতুন বাস স্টপ যোগ করুন' : 'Add New Bus Stop'}
              </h2>
              <button 
                onClick={() => setIsStopModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStop} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Stop Name (English)</label>
                  <input
                    type="text"
                    required
                    value={newStopNameEn}
                    onChange={(e) => setNewStopNameEn(e.target.value)}
                    placeholder="e.g. Park Street More"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Stop Name (Bengali)</label>
                  <input
                    type="text"
                    value={newStopNameBn}
                    onChange={(e) => setNewStopNameBn(e.target.value)}
                    placeholder="যেমন: পার্ক স্ট্রিট মোড়"
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-bengali"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Latitude</label>
                  <input
                    type="number"
                    step="0.0001"
                    required
                    value={newStopLat}
                    onChange={(e) => setNewStopLat(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Longitude</label>
                  <input
                    type="number"
                    step="0.0001"
                    required
                    value={newStopLon}
                    onChange={(e) => setNewStopLon(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Landmark</label>
                <input
                  type="text"
                  value={newStopLandmarkEn}
                  onChange={(e) => setNewStopLandmarkEn(e.target.value)}
                  placeholder="e.g. Near Metro Gate 2"
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsStopModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm"
                >
                  {t('save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
