import React, { useState } from 'react';
import { CTC_BUS_ROUTES, CTCBusRoute } from '../../data/ctcBusRoutes';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';
import { 
  Bus, 
  MapPin, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Building2,
  Compass,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';

interface CTCRoutesCatalogProps {
  onSelectRouteOnMap?: (routeId: string) => void;
}

export const CTCRoutesCatalog: React.FC<CTCRoutesCatalogProps> = ({ onSelectRouteOnMap }) => {
  const { lang } = useLanguage();
  const { setSelectedRouteId } = useTransit();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepot, setSelectedDepot] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [expandedRouteId, setExpandedRouteId] = useState<string | null>(null);

  // Depots list
  const depots = [
    { id: 'ALL', nameEn: 'All CTC Depots (সকল ডিপো)', count: CTC_BUS_ROUTES.length },
    { id: 'Belgachia Depot', nameEn: 'Belgachia Depot (বেলগাছিয়া)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Belgachia Depot').length },
    { id: 'Tollygunge Depot', nameEn: 'Tollygunge Depot (টালিগঞ্জ)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Tollygunge Depot').length },
    { id: 'Khidirpur Depot', nameEn: 'Khidirpur Depot (খিদিরপুর)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Khidirpur Depot').length },
    { id: 'Rajabazar Depot', nameEn: 'Rajabazar Depot (রাজাবাজার)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Rajabazar Depot').length },
    { id: 'Park Circus Depot', nameEn: 'Park Circus Depot (পার্ক সার্কাস)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Park Circus Depot').length },
    { id: 'Ghasbagan Depot', nameEn: 'Ghasbagan Depot (ঘাসবাগান হাওড়া)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Ghasbagan Depot').length },
    { id: 'Barasat Depot', nameEn: 'Barasat Depot (বারাসাত)', count: CTC_BUS_ROUTES.filter(r => r.depotEn === 'Barasat Depot').length }
  ];

  // Categories list
  const categories = [
    { id: 'ALL', nameEn: 'All Categories (৪৮)', count: CTC_BUS_ROUTES.length },
    { id: 'City C-Series', nameEn: 'City C-Series (শহর)', count: CTC_BUS_ROUTES.filter(r => r.category === 'City C-Series').length },
    { id: 'Tramway Feeder T-Series', nameEn: 'Feeder T-Series (ফিডার)', count: CTC_BUS_ROUTES.filter(r => r.category === 'Tramway Feeder T-Series').length },
    { id: 'Express E-Series', nameEn: 'Express E-Series (এক্সপ্রেস)', count: CTC_BUS_ROUTES.filter(r => r.category === 'Express E-Series').length },
    { id: 'Deluxe AC', nameEn: 'Deluxe AC (এসি)', count: CTC_BUS_ROUTES.filter(r => r.category === 'Deluxe AC').length }
  ];

  // Filtered routes
  const filteredRoutes = CTC_BUS_ROUTES.filter(route => {
    // Search query check
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      const matchRouteNum = route.routeNumber.toLowerCase().includes(q);
      const matchName = route.nameEn.toLowerCase().includes(q) || route.nameBn.includes(q);
      const matchDepot = route.depotEn.toLowerCase().includes(q) || route.depotBn.includes(q);
      const matchStops = route.allStopsList.some(s => s.toLowerCase().includes(q));
      if (!matchRouteNum && !matchName && !matchDepot && !matchStops) {
        return false;
      }
    }

    // Depot check
    if (selectedDepot !== 'ALL' && route.depotEn !== selectedDepot) {
      return false;
    }

    // Category check
    if (selectedCategory !== 'ALL' && route.category !== selectedCategory) {
      return false;
    }

    return true;
  });

  const handleTrackRoute = (routeId: string) => {
    setSelectedRouteId(routeId);
    if (onSelectRouteOnMap) {
      onSelectRouteOnMap(routeId);
    }
  };

  const toggleExpand = (routeId: string) => {
    setExpandedRouteId(prev => prev === routeId ? null : routeId);
  };

  return (
    <div className="space-y-6">
      
      {/* Official CTC Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 uppercase tracking-wider shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>Official CTC Dataset</span>
            </span>
            <span className="text-xs text-amber-300 font-semibold bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-full">
              www.calcuttatramways.com/bus-route/
            </span>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>48 Verified Corridors</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {lang === 'bn' 
              ? 'ক্যালকাটা ট্রামওয়েজ কোম্পানি (CTC) — বাস রুট ও স্টপেজ তালিকা'
              : 'Calcutta Tramways Company (CTC / WBTC) Bus Network'}
          </h2>

          <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
            {lang === 'bn'
              ? 'কলকাতা ট্রামওয়েজ কোম্পানির অফিসিয়াল ওয়েবসাইট থেকে সংগৃহীত সমস্ত ৪৮টি ঐতিহাসিক সি-সিরিজ, টি-সিরিজ ও এক্সপ্রেস রুটের সম্পূর্ণ স্টপেজ সিকোয়েন্স ও ডিপো বরাদ্দ।'
              : 'Complete dataset of all 48 official CTC bus routes, 7 major operational depots (Belgachia, Tollygunge, Khidirpur, Rajabazar, Park Circus, Ghasbagan, Barasat), and 680+ transit stoppages across greater Kolkata.'}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Government Stage Carriage
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Govt Pass Accepted
            </span>
            <a 
              href="https://www.calcuttatramways.com/bus-route/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-semibold ml-auto"
            >
              <span>Source URL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'bn' 
              ? 'রুট নম্বর (যেমন: C-11, T-AC-1, D1) বা যে কোনো স্টপেজ (ডোমজুড়, হাড়োয়া, আমতা) খুঁজুন...'
              : 'Search route (e.g. C-11, T-AC-1, D1), depot, or any stop (Domjur, Haroa, Amta, Santragachi)...'}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full"
            >
              Clear
            </button>
          )}
        </div>

        {/* Depot Filter Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Operational Depot Filter (ডিপো অনুযায়ী ফিল্টার):</span>
          </label>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
            {depots.map(depot => (
              <button
                key={depot.id}
                onClick={() => setSelectedDepot(depot.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                  selectedDepot === depot.id
                    ? 'bg-slate-900 text-amber-400 shadow-sm ring-1 ring-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{depot.nameEn}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  selectedDepot === depot.id ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-200 text-slate-700'
                }`}>
                  {depot.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin pt-1 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-400 whitespace-nowrap mr-1">Category:</span>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
        <span>
          Showing <span className="font-bold text-slate-900">{filteredRoutes.length}</span> of {CTC_BUS_ROUTES.length} Calcutta Tramways routes
        </span>
        <span>
          Depot: <span className="font-bold text-slate-800">{selectedDepot === 'ALL' ? 'All Depots' : selectedDepot}</span>
        </span>
      </div>

      {/* Route Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRoutes.map((route, idx) => {
          const isExpanded = expandedRouteId === route.id;

          return (
            <div 
              key={route.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span 
                      className="px-3 py-1 rounded-xl text-sm font-black text-white shadow-xs"
                      style={{ backgroundColor: route.color }}
                    >
                      {route.routeNumber}
                    </span>

                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700">
                      {route.category}
                    </span>

                    {route.isAC && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                        ❄️ AC Deluxe
                      </span>
                    )}
                  </div>

                  {/* Depot Badge */}
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>{route.depotEn}</span>
                  </span>
                </div>

                {/* Route Termini */}
                <div className="mt-3">
                  <h3 className="text-base font-extrabold text-slate-900">
                    {route.nameEn}
                  </h3>
                  <p className="text-xs text-slate-500 font-bengali mt-0.5">
                    {route.nameBn}
                  </p>
                </div>

                {/* Key Corridors Preview */}
                <div className="mt-3 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Compass className="w-3.5 h-3.5 text-slate-400" />
                    <span>Key Corridors:</span>
                  </div>
                  <div className="text-[11px] text-slate-600 line-clamp-2">
                    {route.viaEn}
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-center">
                  <div className="bg-slate-50 p-1.5 rounded-lg">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Stops</div>
                    <div className="text-xs font-black text-slate-800 font-mono">{route.stopCount}</div>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-lg">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Frequency</div>
                    <div className="text-xs font-black text-slate-800 font-mono">{route.frequencyMinutes} min</div>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-lg">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Govt Pass</div>
                    <div className="text-xs font-black text-emerald-700">Accepted</div>
                  </div>
                </div>

                {/* Full Stoppages Accordion */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>Complete Stoppage Chain ({route.allStopsList.length} Stops):</span>
                      <span className="text-[10px] text-slate-400 font-normal">In official sequence</span>
                    </div>

                    <div className="max-h-60 overflow-y-auto space-y-1 pr-1 scrollbar-thin">
                      {route.allStopsList.map((stop, sIdx) => (
                        <div 
                          key={sIdx}
                          className="flex items-center gap-2 text-xs py-1 px-2 rounded-lg hover:bg-amber-50/60 transition"
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono ${
                            sIdx === 0 
                              ? 'bg-emerald-600 text-white' 
                              : sIdx === route.allStopsList.length - 1
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}>
                            {sIdx + 1}
                          </span>
                          <span className={`truncate font-medium ${
                            sIdx === 0 || sIdx === route.allStopsList.length - 1 ? 'font-bold text-slate-900' : 'text-slate-700'
                          }`}>
                            {stop}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => toggleExpand(route.id)}
                  className="flex-1 py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-1.5"
                >
                  <span>{isExpanded ? 'Hide All Stops' : `View All ${route.stopCount} Stops`}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => handleTrackRoute(route.id)}
                  className="py-2 px-4 rounded-xl bg-slate-900 text-amber-400 hover:bg-slate-800 font-bold text-xs transition flex items-center gap-1.5 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Track on Map</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
