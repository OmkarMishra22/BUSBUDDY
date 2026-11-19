import React, { useState, useMemo } from 'react';
import { useTransit } from './context/TransitContext';
import { useLanguage } from './context/LanguageContext';
import { Header } from './components/common/Header';
import { OfflineBanner } from './components/common/OfflineBanner';
import { JourneyPlanner, RouteFilterCategory } from './components/passenger/JourneyPlanner';
import { RouteCard } from './components/passenger/RouteCard';
import { AccessibleListView } from './components/passenger/AccessibleListView';
import { KolkataTransitMap } from './components/map/KolkataTransitMap';
import { BusTimingsPanel } from './components/passenger/BusTimingsPanel';
import { DriverPortal } from './components/driver/DriverPortal';
import { OperatorDashboard } from './components/operator/OperatorDashboard';
import { CTCRoutesCatalog } from './components/ctc/CTCRoutesCatalog';
import { DirectoryRoutesCatalog } from './components/directory/DirectoryRoutesCatalog';
import { BusRoute } from './types/transit';
import { 
  Map, 
  List, 
  AlertCircle, 
  Bus, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Navigation, 
  Sparkles,
  ChevronRight,
  RotateCcw,
  BookOpen
} from 'lucide-react';

export const App: React.FC = () => {
  const { lang, t } = useLanguage();
  const { role, routes, activeBuses, favRoutes, selectedRouteId, setSelectedRouteId } = useTransit();

  // Search & Filter state for Passenger View
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState({ from: '', to: '', busOrStop: '' });
  const [activeFilter, setActiveFilter] = useState<RouteFilterCategory>('all');
  const [viewMode, setViewMode] = useState<'buses' | 'list' | 'ctc' | 'directory'>('buses');
  
  // Selected bus for viewing all timings one by one & map
  const [selectedBusForTimings, setSelectedBusForTimings] = useState<BusRoute | null>(null);

  // Popular quick commute corridors
  const quickCorridors = [
    { from: 'Birati Bus Stand', to: 'B.B.D. Bag (Dalhousie)', label: 'Birati ⇌ B.B.D. Bag', labelBn: 'বিরাটি ⇌ বি.বি.ডি. বাগ' },
    { from: 'Howrah Station', to: 'Salt Lake Sector V (SDF)', label: 'Howrah ⇌ Sector V', labelBn: 'হাওড়া ⇌ সেক্টর ৫' },
    { from: 'Sealdah Station', to: 'Bimanbandar (Airport Gate 1)', label: 'Sealdah ⇌ Airport', labelBn: 'শিয়ালদহ ⇌ বিমানবন্দর' },
    { from: 'Gariahat Junction', to: 'Esplanade (Dharmatala)', label: 'Gariahat ⇌ Esplanade', labelBn: 'গড়িয়াহাট ⇌ ধর্মতলা' },
  ];

  // Filter routes based on search and filters
  const filteredRoutes = useMemo(() => {
    if (!hasSearched) return [];

    const { from, to, busOrStop } = searchParams;
    const f = from.toLowerCase().trim();
    const t = to.toLowerCase().trim();
    const q = busOrStop.toLowerCase().trim();

    return routes.filter(route => {
      // 1. Sector / Category Filters
      if (activeFilter === 'govt' && (route.sector !== 'GOVERNMENT' || route.operatorType === 'CTC')) return false;
      if (activeFilter === 'ctc' && route.operatorType !== 'CTC') return false;
      if (activeFilter === 'private' && route.sector !== 'PRIVATE') return false;
      if (activeFilter === 'live') {
        const hasLive = activeBuses.some(b => b.routeId === route.id && b.freshnessStatus === 'live');
        if (!hasLive) return false;
      }
      if (activeFilter === 'ac' && !route.isAC) return false;
      if (activeFilter === 'fav' && !favRoutes.includes(route.id)) return false;

      // 2. Direct query search (Bus number, Route name, Syndicate, Stop)
      if (q) {
        const matchNum = route.routeNumber.toLowerCase().includes(q);
        const matchName = route.nameEn.toLowerCase().includes(q) || route.nameBn.toLowerCase().includes(q);
        const matchVia = route.viaEn.toLowerCase().includes(q) || route.viaBn.toLowerCase().includes(q);
        const matchSyndicate = route.syndicateNameEn?.toLowerCase().includes(q) || route.syndicateNameBn?.toLowerCase().includes(q);
        if (matchNum || matchName || matchVia || matchSyndicate) return true;
      }

      // 3. Origin & Destination search
      const routeText = `${route.nameEn} ${route.nameBn} ${route.viaEn} ${route.viaBn}`.toLowerCase();
      
      const allStops = [
        ...(route.directions.UP.stops || []),
        ...(route.directions.DOWN.stops || [])
      ].map(s => s.stopId.replace('stop-', '').replace(/-/g, ' ').toLowerCase());
      const stopsStr = allStops.join(' ');

      const matchesFrom = !f || routeText.includes(f) || stopsStr.includes(f);
      const matchesTo = !t || routeText.includes(t) || stopsStr.includes(t);

      if (f && t) {
        return matchesFrom && matchesTo;
      } else if (f) {
        return matchesFrom;
      } else if (t) {
        return matchesTo;
      }

      // If user searched without specific query, show all that pass filter
      return !q;
    });
  }, [routes, hasSearched, searchParams, activeFilter, activeBuses, favRoutes]);

  const handleSearchSubmit = (params: { from: string; to: string; busOrStop: string }) => {
    setSearchParams(params);
    setHasSearched(true);
    setSelectedBusForTimings(null);
    setViewMode('buses');
  };

  const handleResetSearch = () => {
    setHasSearched(false);
    setSearchParams({ from: '', to: '', busOrStop: '' });
    setSelectedBusForTimings(null);
  };

  const handleSelectQuickCorridor = (c: { from: string; to: string }) => {
    setSearchParams({ from: c.from, to: c.to, busOrStop: '' });
    setHasSearched(true);
    setSelectedBusForTimings(null);
    setViewMode('buses');
  };

  const handleViewBusTimings = (route: BusRoute) => {
    setSelectedRouteId(route.id);
    setSelectedBusForTimings(route);
  };

  // Get corridor stops sequence for the first matching route (Requirement 3)
  const representativeRoute = selectedBusForTimings || filteredRoutes[0];
  const corridorStops = representativeRoute?.directions.UP.stops || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 font-sans">
      {/* 1. Header with Role Switcher & Language Toggle (Demo Badge Removed) */}
      <Header />

      {/* 2. Offline Connectivity & Queue Banner */}
      <OfflineBanner />

      {/* 3. Main Workspace Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 lg:p-6">
        
        {/* ========================================== */}
        {/* PASSENGER EXPERIENCE                       */}
        {/* ========================================== */}
        {role === 'passenger' && (
          <div className="space-y-6">

            {/* 1. Search Section with Autocomplete for Source & Destination */}
            <JourneyPlanner 
              onSearchSubmit={handleSearchSubmit}
              onFilterChange={setActiveFilter}
              activeFilter={activeFilter}
              onOpenCTCExplorer={() => setViewMode('ctc')}
              initialFrom={searchParams.from}
              initialTo={searchParams.to}
              initialBusOrStop={searchParams.busOrStop}
              onResetSearch={handleResetSearch}
            />

            {/* 2. INITIAL VIEW (When portal opens: ONLY search is shown, no map or bus list!) */}
            {!hasSearched && viewMode !== 'directory' && viewMode !== 'ctc' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Welcoming Heritage Banner */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6DFD5] shadow-sm text-center max-w-3xl mx-auto space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1E4D38] text-amber-300 flex items-center justify-center mx-auto shadow-md">
                    <Bus className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-stone-900">
                      {lang === 'bn' ? 'স্বাগতম বাসবাডি কলকাতায়' : 'Welcome to BusBuddy Kolkata'}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-lg mx-auto">
                      {lang === 'bn' 
                        ? 'আপনার যাত্রা শুরু করতে উপরে উৎস এবং গন্তব্য লিখুন (যেমন "বি" লিখলে বিরাটি বা বিমানবন্দর দেখতে পাবেন)। "বাস অনুসন্ধান" বোতামে ক্লিক করলে সব বাস ও সময়সূচি দেখতে পাবেন।'
                        : 'Enter your Origin & Destination above (e.g. typing "Bi" suggests Birati, Bimanbandar, Bishnupur, etc.). Click "Search Buses" to explore routes, stops, and departure timings.'}
                    </p>
                  </div>

                  {/* 3 Step Visual Guide */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-left">
                    <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                      <span className="w-6 h-6 rounded-full bg-[#1E4D38] text-amber-300 flex items-center justify-center text-xs font-bold mb-2">1</span>
                      <h4 className="font-bold text-xs text-stone-900">{lang === 'bn' ? 'স্টপ নির্বাচন করুন' : '1. Enter Stoppages'}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5">{lang === 'bn' ? 'উৎস ও গন্তব্য অটো-সাজেস্ট থেকে পছন্দ করুন' : 'Autocomplete suggestions for 850+ Kolkata hubs'}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                      <span className="w-6 h-6 rounded-full bg-[#1E4D38] text-amber-300 flex items-center justify-center text-xs font-bold mb-2">2</span>
                      <h4 className="font-bold text-xs text-stone-900">{lang === 'bn' ? 'বাস ও রুট দেখুন' : '2. Search Buses'}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5">{lang === 'bn' ? 'গন্তব্য পর্যন্ত সব স্টপ ও চলাচলকারী বাস দেখুন' : 'View all corridor stops & matching buses'}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                      <span className="w-6 h-6 rounded-full bg-[#1E4D38] text-amber-300 flex items-center justify-center text-xs font-bold mb-2">3</span>
                      <h4 className="font-bold text-xs text-stone-900">{lang === 'bn' ? 'সময়সূচি ও ম্যাপ' : '3. Timings & Map'}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5">{lang === 'bn' ? 'যে কোনো বাসে ক্লিক করে সময়সূচি ও লাইভ ম্যাপ দেখুন' : 'Click any bus for full timetable & live map'}</p>
                    </div>
                  </div>

                  {/* Quick Commute Corridors */}
                  <div className="pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wide block mb-2">
                      {lang === 'bn' ? 'জনপ্রিয় যাত্রাপথ এক ক্লিকে:' : 'Or Try Popular Kolkata Corridors:'}
                    </span>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      {quickCorridors.map((c, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectQuickCorridor(c)}
                          className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-amber-100 hover:text-amber-950 text-stone-700 text-xs font-semibold border border-stone-300 transition flex items-center gap-1.5 shadow-2xs"
                        >
                          <span>{lang === 'bn' ? c.labelBn : c.label}</span>
                          <ArrowRight className="w-3 h-3 text-[#1E4D38]" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Direct Catalog Explorers */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-center gap-3 flex-wrap">
                    <button
                      onClick={() => setViewMode('directory')}
                      className="px-4 py-2 rounded-xl bg-[#1E4D38] hover:bg-[#153828] text-amber-300 font-bold text-xs flex items-center gap-2 shadow-sm transition"
                    >
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>{lang === 'bn' ? 'সম্পূর্ণ বাস ডিরেক্টরি দেখুন (১৪৮টি রুট)' : 'Explore Kolkata Bus Directory (148 Routes)'}</span>
                    </button>
                    <button
                      onClick={() => setViewMode('ctc')}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-sm transition"
                    >
                      <span>🚋</span>
                      <span>{lang === 'bn' ? 'সিটিসি ট্রামওয়েজ ক্যাটালগ (৪৮টি রুট)' : 'Explore CTC Tramways Catalog (48 Routes)'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Direct Catalog Explorer View (when selected without searching) */}
            {!hasSearched && (viewMode === 'directory' || viewMode === 'ctc') && !selectedBusForTimings && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-stone-200">
                  <button
                    onClick={() => setViewMode('buses')}
                    className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'যাত্রী হোমে ফিরুন' : 'Back to Home'}</span>
                  </button>

                  <div className="flex items-center bg-[#F5EFEB] p-1 rounded-xl">
                    <button
                      onClick={() => setViewMode('directory')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                        viewMode === 'directory'
                          ? 'bg-[#1E4D38] text-amber-300 font-black shadow-sm'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'bn' ? 'রুট ডিরেক্টরি (১৪৮)' : 'Route Directory (148)'}</span>
                    </button>
                    <button
                      onClick={() => setViewMode('ctc')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                        viewMode === 'ctc'
                          ? 'bg-amber-500 text-stone-950 font-black shadow-sm'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <span>🚋</span>
                      <span>{lang === 'bn' ? 'সিটিসি ক্যাটালগ (৪৮)' : 'CTC 48 Catalog'}</span>
                    </button>
                  </div>
                </div>

                {viewMode === 'directory' ? (
                  <DirectoryRoutesCatalog 
                    onSelectRouteOnMap={(matchedRoute) => {
                      setSelectedBusForTimings(matchedRoute);
                      setHasSearched(true);
                    }}
                  />
                ) : (
                  <CTCRoutesCatalog 
                    onSelectRouteOnMap={(rId) => {
                      const matched = routes.find(r => r.id === rId);
                      if (matched) {
                        setSelectedBusForTimings(matched);
                        setHasSearched(true);
                      }
                    }}
                  />
                )}
              </div>
            )}

            {/* 3. POST-SEARCH VIEW (When user clicks Search Buses) */}
            {hasSearched && (
              <div className="space-y-5 animate-in fade-in duration-300">
                
                {/* Search Results Summary Header Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-white p-3 sm:p-4 rounded-2xl border border-[#E6DFD5] shadow-sm gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-stone-900">
                        {filteredRoutes.length} {lang === 'bn' ? 'টি বাস রুট পাওয়া গেছে' : 'matching buses & routes found'}
                      </span>
                      {(searchParams.from || searchParams.to) && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#1E4D38] border border-emerald-300 font-bold">
                          {searchParams.from || 'Any'} ➔ {searchParams.to || 'Any'}
                        </span>
                      )}
                    </div>
                    {searchParams.busOrStop && (
                      <p className="text-xs text-stone-500 mt-0.5">
                        {lang === 'bn' ? 'অনুসন্ধান ফিল্টার:' : 'Filter query:'} <strong>"{searchParams.busOrStop}"</strong>
                      </p>
                    )}
                  </div>

                  {/* Actions: View Toggle or Back to Buses */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedBusForTimings && (
                      <button
                        onClick={() => setSelectedBusForTimings(null)}
                        className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition flex items-center gap-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{lang === 'bn' ? 'সকল বাসের তালিকায় ফিরুন' : 'Back to All Buses'}</span>
                      </button>
                    )}

                    <div className="flex items-center bg-[#F5EFEB] p-1 rounded-xl">
                      <button
                        onClick={() => setViewMode('buses')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                          viewMode === 'buses'
                            ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <Bus className="w-3.5 h-3.5" />
                        <span>{lang === 'bn' ? 'বাস ও রুট' : 'Buses & Routes'}</span>
                      </button>

                      <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                          viewMode === 'list'
                            ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <List className="w-3.5 h-3.5" />
                        <span>{t('view_list')}</span>
                      </button>

                      <button
                        onClick={() => setViewMode('ctc')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                          viewMode === 'ctc'
                            ? 'bg-amber-500 text-stone-950 font-black shadow-sm'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <span>🚋</span>
                        <span>{lang === 'bn' ? 'সিটিসি ক্যাটালগ (৪৮)' : 'CTC 48 Catalog'}</span>
                      </button>

                      <button
                        onClick={() => setViewMode('directory')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                          viewMode === 'directory'
                            ? 'bg-[#1E4D38] text-amber-300 font-black shadow-sm ring-1 ring-emerald-600'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        <span>{lang === 'bn' ? 'রুট ডিরেক্টরি (১৪৮)' : 'Route Directory (148)'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. IF A SPECIFIC BUS IS CLICKED: Show its full timings one by one AND the map! */}
                {selectedBusForTimings ? (
                  <BusTimingsPanel 
                    route={selectedBusForTimings}
                    activeBuses={activeBuses}
                    onClose={() => setSelectedBusForTimings(null)}
                  />
                ) : viewMode === 'directory' ? (
                  <DirectoryRoutesCatalog 
                    onSelectRouteOnMap={(matchedRoute) => {
                      setSelectedBusForTimings(matchedRoute);
                    }}
                  />
                ) : viewMode === 'ctc' ? (
                  <CTCRoutesCatalog 
                    onSelectRouteOnMap={(rId) => {
                      const matched = routes.find(r => r.id === rId);
                      if (matched) {
                        setSelectedBusForTimings(matched);
                      }
                    }}
                  />
                ) : viewMode === 'list' ? (
                  <AccessibleListView 
                    routes={filteredRoutes} 
                    activeBuses={activeBuses} 
                  />
                ) : (
                  <div className="space-y-6">

                    {/* Requirement 3: Corridor Stoppages First (All stops to destination) */}
                    {representativeRoute && (
                      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E6DFD5] shadow-sm space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold tracking-wider text-[#1E4D38] uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {lang === 'bn' ? 'যাত্রাপথের সকল বাস স্টপের ক্রম' : 'Sequential Route Stoppages to Destination'}
                            </span>
                            <h3 className="text-sm sm:text-base font-extrabold text-stone-900 mt-1 flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-rose-600" />
                              <span>
                                {representativeRoute.nameEn}
                              </span>
                            </h3>
                          </div>
                          <span className="text-xs text-stone-500">
                            {corridorStops.length} {lang === 'bn' ? 'টি স্টপ' : 'Stops along Corridor'}
                          </span>
                        </div>

                        {/* Horizontal / Wrapped Stoppage Sequence Stepper */}
                        <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-stone-200 overflow-x-auto">
                          <div className="flex items-center gap-2 min-w-max">
                            {corridorStops.map((stop, sIdx) => {
                              const isFirst = sIdx === 0;
                              const isLast = sIdx === corridorStops.length - 1;
                              const cleanName = stop.stopId.replace('stop-', '').replace(/-/g, ' ');
                              return (
                                <React.Fragment key={stop.stopId || sIdx}>
                                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-2xs">
                                    <span className={`w-2 h-2 rounded-full ${isFirst ? 'bg-emerald-600' : isLast ? 'bg-rose-600' : 'bg-[#1E4D38]'}`} />
                                    <span className="text-xs font-bold text-stone-800 capitalize">{cleanName}</span>
                                    {isFirst && <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1 rounded font-bold">{lang === 'bn' ? 'উৎস' : 'Origin'}</span>}
                                    {isLast && <span className="text-[9px] bg-rose-100 text-rose-800 px-1 rounded font-bold">{lang === 'bn' ? 'গন্তব্য' : 'Destination'}</span>}
                                  </div>
                                  {!isLast && (
                                    <ChevronRight className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Followed by: All Buses that travel in that route */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-extrabold text-stone-900 flex items-center gap-2">
                          <Bus className="w-4 h-4 text-[#1E4D38]" />
                          <span>
                            {lang === 'bn' 
                              ? `এই রুটে চলাচলকারী সকল বাস (${filteredRoutes.length} টি)` 
                              : `All Buses Traveling in this Corridor (${filteredRoutes.length} Buses)`}
                          </span>
                        </h3>
                        <p className="text-xs text-stone-500">
                          {lang === 'bn' ? 'বাসের সময়সূচি ও ম্যাপ দেখতে যে কোনো বাসে ক্লিক করুন' : 'Click any bus to view its next departure timings & live map'}
                        </p>
                      </div>

                      {filteredRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {filteredRoutes.map(route => {
                            const busesOnRoute = activeBuses.filter(b => b.routeId === route.id);
                            return (
                              <RouteCard 
                                key={route.id}
                                route={route}
                                activeBusesOnRoute={busesOnRoute}
                                onViewTimings={handleViewBusTimings}
                              />
                            );
                          })}
                        </div>
                      ) : (
                        <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center space-y-3">
                          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                            <AlertCircle className="w-6 h-6" />
                          </div>
                          <h3 className="font-bold text-stone-800 text-sm sm:text-base">
                            {lang === 'bn' ? 'কোনো সরাসরি বাস পাওয়া যায়নি' : 'No Direct Bus Found for this Search'}
                          </h3>
                          <p className="text-xs text-stone-500 max-w-sm mx-auto">
                            {lang === 'bn' 
                              ? 'অন্য কোনো নিকটবর্তী স্টপ বা প্রধান সংযোগস্থল লিখে অনুসন্ধান করুন, অথবা ফিল্টার পুনরায় সেট করুন।' 
                              : 'Try searching for nearby transit junctions (e.g. Howrah, Sealdah, Esplanade, Birati) or clear your filter tab.'}
                          </p>
                          <button
                            onClick={handleResetSearch}
                            className="px-4 py-2 rounded-xl bg-[#1E4D38] text-amber-300 font-bold text-xs hover:bg-[#153828] transition"
                          >
                            {lang === 'bn' ? 'অনুসন্ধান পুনরায় সেট করুন' : 'Reset & Search Again'}
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* DEDICATED DRIVER PORTAL */}
        {role === 'driver' && (
          <DriverPortal />
        )}

        {/* OPERATOR CONTROL CENTER (Protected with ID & Password Gateway) */}
        {role === 'operator' && (
          <OperatorDashboard />
        )}

      </main>

      {/* 4. Communal Footer with Kolkata Transport Credentials */}
      <footer className="bg-[#143627] text-white border-t border-[#1E4D38] mt-12 py-6 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-xs">
              <Bus className="w-4 h-4" />
            </div>
            <span className="font-bold text-white">BusBuddy Kolkata</span>
            <span className="text-emerald-400">—</span>
            <span className="text-emerald-200">WBTC, CSTC, CTC & Joint Council Bus Pilot</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-emerald-300">
            <span className="inline-flex items-center gap-1 text-amber-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WCAG 2.1 AA Accessible</span>
            </span>
            <span>•</span>
            <span>Offline-Ready (IndexedDB)</span>
            <span>•</span>
            <span>OpenStreetMap / MapLibre GL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
