import React, { useState, useMemo } from 'react';
import { DIRECTORY_BUS_ROUTES } from '../../data/kolkataDirectoryRoutes';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';
import { BusRoute } from '../../types/transit';
import { 
  Bus, 
  MapPin, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  BookOpen,
  Filter,
  Flame,
  Snowflake,
  ExternalLink,
  Building2,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';

interface DirectoryRoutesCatalogProps {
  onSelectRouteOnMap?: (route: BusRoute) => void;
}

export const DirectoryRoutesCatalog: React.FC<DirectoryRoutesCatalogProps> = ({ onSelectRouteOnMap }) => {
  const { lang } = useLanguage();
  const { setSelectedRouteId } = useTransit();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<'ALL' | 'GOVT' | 'COMMUNITY' | 'MINIBUS' | 'AC'>('ALL');
  const [expandedRouteId, setExpandedRouteId] = useState<string | null>(null);

  // Section statistics
  const govtCount = useMemo(() => DIRECTORY_BUS_ROUTES.filter(r => r.sector === 'GOVERNMENT').length, []);
  const communityCount = useMemo(() => DIRECTORY_BUS_ROUTES.filter(r => r.classification === 'Community-listed').length, []);
  const minibusCount = useMemo(() => DIRECTORY_BUS_ROUTES.filter(r => r.operatorType === 'MINIBUS').length, []);
  const acCount = useMemo(() => DIRECTORY_BUS_ROUTES.filter(r => r.isAC).length, []);

  // Filtered routes
  const filteredRoutes = useMemo(() => {
    return DIRECTORY_BUS_ROUTES.filter(route => {
      // 1. Section Filter
      if (selectedSection === 'GOVT' && route.sector !== 'GOVERNMENT') return false;
      if (selectedSection === 'COMMUNITY' && route.classification !== 'Community-listed') return false;
      if (selectedSection === 'MINIBUS' && route.operatorType !== 'MINIBUS') return false;
      if (selectedSection === 'AC' && !route.isAC) return false;

      // 2. Search query check
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchNum = route.routeNumber.toLowerCase().includes(q);
        const matchName = route.nameEn.toLowerCase().includes(q) || route.nameBn.toLowerCase().includes(q);
        const matchVia = route.viaEn.toLowerCase().includes(q) || route.viaBn.toLowerCase().includes(q);
        const matchStops = route.allStopsList?.some(s => s.toLowerCase().includes(q)) ?? false;
        if (!matchNum && !matchName && !matchVia && !matchStops) return false;
      }

      return true;
    });
  }, [selectedSection, searchQuery]);

  const handleTrackRoute = (route: BusRoute) => {
    setSelectedRouteId(route.id);
    if (onSelectRouteOnMap) {
      onSelectRouteOnMap(route);
    }
  };

  const toggleExpand = (routeId: string) => {
    setExpandedRouteId(prev => prev === routeId ? null : routeId);
  };

  return (
    <div className="space-y-6">
      
      {/* Directory Header Banner */}
      <div className="bg-gradient-to-r from-[#143627] via-[#1E4D38] to-[#143627] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-emerald-900/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 uppercase tracking-wider shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kolkata Bus Directory</span>
            </span>
            <span className="text-xs text-amber-200 font-semibold bg-black/30 border border-white/10 px-2.5 py-1 rounded-full">
              kolkata.datacarta.in
            </span>
            <span className="text-xs text-emerald-300 font-bold bg-emerald-950/60 border border-emerald-700/60 px-2.5 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{DIRECTORY_BUS_ROUTES.length} Verified Routes</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {lang === 'bn' 
              ? 'কলকাতা বাস রুট ডিরেক্টরি — সরকারি, কমিউনিটি ও মিনিবাস তালিকা'
              : 'Kolkata Bus Routes Directory — Official, Community & Minibuses'}
          </h2>

          <p className="text-sm text-stone-200 max-w-3xl leading-relaxed">
            {lang === 'bn'
              ? 'কলকাতা ট্রানজিট ডাটাবেস ও রুট কার্ড থেকে সংগৃহীত সম্পূর্ণ ডিরেক্টরি। সরকারি (WBTC), কমিউনিটি তালিকাভুক্ত ও দ্রুতগামী মিনিবাসের সম্পূর্ণ স্টপেজ ক্রমানুযায়ী সাজানো।'
              : 'Complete directory compiled from authentic Kolkata transit route cards. Covers Government (WBTC / CSTC), Community-listed corridors, and agile 28-seater Minibuses with comprehensive sequential stoppages.'}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-stone-300 flex-wrap">
            <span className="flex items-center gap-1">
              <Building2 className="w-4 h-4 text-emerald-400" />
              Government (20)
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4 text-amber-300" />
              Community-listed (118)
            </span>
            <span className="flex items-center gap-1">
              <Bus className="w-4 h-4 text-red-300" />
              Minibuses (10)
            </span>
            <span className="flex items-center gap-1">
              <Snowflake className="w-4 h-4 text-cyan-300" />
              AC Corridors ({acCount})
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-stone-200 space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'bn' 
              ? 'বাসের নম্বর (যেমন 14A, AC-39, M-7B, C43) বা স্টপের নাম লিখে খুঁজুন...' 
              : 'Search by bus number (e.g. 14A, AC-39, M-7B, C43) or stoppage name...'}
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D38] focus:bg-white transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-full w-5 h-5 flex items-center justify-center transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedSection('ALL')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              selectedSection === 'ALL'
                ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span>{lang === 'bn' ? 'সকল রুট' : 'All Directory Routes'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/20">
              {DIRECTORY_BUS_ROUTES.length}
            </span>
          </button>

          <button
            onClick={() => setSelectedSection('GOVT')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              selectedSection === 'GOVT'
                ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-blue-500" />
            <span>{lang === 'bn' ? 'সরকারি রুট' : 'Government (Official)'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-blue-100 text-blue-800">
              {govtCount}
            </span>
          </button>

          <button
            onClick={() => setSelectedSection('COMMUNITY')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              selectedSection === 'COMMUNITY'
                ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'bn' ? 'কমিউনিটি তালিকাভুক্ত' : 'Community-listed'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-800">
              {communityCount}
            </span>
          </button>

          <button
            onClick={() => setSelectedSection('MINIBUS')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              selectedSection === 'MINIBUS'
                ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Bus className="w-3.5 h-3.5 text-red-600" />
            <span>{lang === 'bn' ? 'মিনিবাস' : 'Minibuses'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-red-100 text-red-800">
              {minibusCount}
            </span>
          </button>

          <button
            onClick={() => setSelectedSection('AC')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              selectedSection === 'AC'
                ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Snowflake className="w-3.5 h-3.5 text-cyan-600" />
            <span>{lang === 'bn' ? 'এসি বাস' : 'AC Buses'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-cyan-100 text-cyan-800">
              {acCount}
            </span>
          </button>
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>
          {lang === 'bn' 
            ? `${filteredRoutes.length}টি রুট প্রদর্শিত হচ্ছে` 
            : `Showing ${filteredRoutes.length} matching directory routes`}
        </span>
        <span className="text-[11px] text-stone-400">
          {lang === 'bn' ? 'স্টপেজ দেখতে যে কোনো রুটে ক্লিক করুন' : 'Click any route to view full stoppage sequence'}
        </span>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRoutes.map((route) => {
          const isExpanded = expandedRouteId === route.id;
          const stopsList = route.allStopsList || [];

          return (
            <div 
              key={route.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition overflow-hidden flex flex-col justify-between"
            >
              
              {/* Card Top Header */}
              <div className="p-4 sm:p-5 space-y-3">
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {/* Route Badge */}
                    <div 
                      className="px-3 py-1.5 rounded-xl font-black text-sm text-white shadow-sm flex items-center gap-1.5"
                      style={{ backgroundColor: route.color || '#1E4D38' }}
                    >
                      <Bus className="w-4 h-4" />
                      <span>{route.routeNumber}</span>
                    </div>

                    {/* Sector / Classification Badge */}
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      route.sector === 'GOVERNMENT'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : route.operatorType === 'MINIBUS'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {route.classification || (route.sector === 'GOVERNMENT' ? 'Government' : 'Community')}
                    </span>

                    {/* AC Badge */}
                    {route.isAC ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 flex items-center gap-1">
                        <Snowflake className="w-3 h-3" />
                        <span>AC</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                        Non-AC
                      </span>
                    )}
                  </div>

                  {/* Stoppage Count */}
                  <span className="text-xs font-semibold text-stone-500 whitespace-nowrap bg-stone-100 px-2.5 py-1 rounded-lg">
                    {stopsList.length} {lang === 'bn' ? 'স্টপ' : 'Stops'}
                  </span>
                </div>

                {/* Route Endpoints Name */}
                <div>
                  <h3 className="font-bold text-stone-900 text-base leading-snug">
                    {lang === 'bn' ? route.nameBn : route.nameEn}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                    <span className="font-semibold text-stone-600">{lang === 'bn' ? 'ভায়া: ' : 'Via: '}</span>
                    {lang === 'bn' ? route.viaBn : route.viaEn}
                  </p>
                </div>

                {/* Stoppages Preview Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {stopsList.slice(0, 5).map((stop, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] bg-stone-50 border border-stone-200 text-stone-600 px-2 py-0.5 rounded-md"
                    >
                      {stop}
                    </span>
                  ))}
                  {stopsList.length > 5 && (
                    <span className="text-[11px] text-stone-400 px-1 py-0.5">
                      +{stopsList.length - 5} {lang === 'bn' ? 'আরও' : 'more'}
                    </span>
                  )}
                </div>

              </div>

              {/* Expandable Stops Sequence Drawer */}
              {isExpanded && (
                <div className="px-4 pb-4 bg-stone-50/70 border-t border-stone-100 pt-3 space-y-2">
                  <div className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1E4D38]" />
                    <span>
                      {lang === 'bn' ? 'সম্পূর্ণ স্টপেজ তালিকা (ক্রমানুযায়ী):' : 'Full Stoppage Sequence:'}
                    </span>
                  </div>

                  <div className="max-h-56 overflow-y-auto space-y-1 pr-1 text-xs text-stone-700">
                    {stopsList.map((stop, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 py-1 px-2 rounded-lg bg-white border border-stone-200/80"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#1E4D38] font-bold text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-medium">{stop}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Footer Actions */}
              <div className="px-4 py-3 bg-stone-50/90 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => toggleExpand(route.id)}
                  className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1 transition"
                >
                  {isExpanded ? (
                    <>
                      <span>{lang === 'bn' ? 'স্টপ লুকান' : 'Hide Stops'}</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>{lang === 'bn' ? 'সব স্টপ দেখুন' : 'Show All Stops'}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleTrackRoute(route)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1E4D38] hover:bg-[#153828] text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ম্যাপ ও সময়সূচি' : 'Timetable & Map'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredRoutes.length === 0 && (
        <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center space-y-3">
          <Bus className="w-8 h-8 text-stone-400 mx-auto" />
          <h3 className="font-bold text-stone-800">
            {lang === 'bn' ? 'কোনো রুট পাওয়া যায়নি' : 'No Matching Directory Routes Found'}
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            {lang === 'bn' 
              ? 'অন্য কোনো বাসের নম্বর বা স্টপের নাম লিখে অনুসন্ধান করুন।' 
              : 'Try searching with a different route code (e.g. 14A, AC-39, M-7B, C43) or clear the search query.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedSection('ALL'); }}
            className="px-4 py-2 rounded-xl bg-[#1E4D38] text-amber-300 font-bold text-xs"
          >
            {lang === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset Search'}
          </button>
        </div>
      )}

    </div>
  );
};
