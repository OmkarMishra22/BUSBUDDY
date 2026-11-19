import React, { useState } from 'react';
import { Search, MapPin, ArrowRightLeft, Sparkles, Filter, Star, Landmark, BusFront } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';
import { StopAutocomplete } from './StopAutocomplete';

export type RouteFilterCategory = 'all' | 'govt' | 'private' | 'ctc' | 'live' | 'ac' | 'fav';

interface JourneyPlannerProps {
  onSearchSubmit: (params: { from: string; to: string; busOrStop: string }) => void;
  onFilterChange: (filter: RouteFilterCategory) => void;
  activeFilter: RouteFilterCategory;
  onOpenCTCExplorer?: () => void;
  initialFrom?: string;
  initialTo?: string;
  initialBusOrStop?: string;
  onResetSearch?: () => void;
}

export const JourneyPlanner: React.FC<JourneyPlannerProps> = ({
  onSearchSubmit,
  onFilterChange,
  activeFilter,
  onOpenCTCExplorer,
  initialFrom = '',
  initialTo = '',
  initialBusOrStop = '',
  onResetSearch
}) => {
  const { lang, t } = useLanguage();
  const { routes, favRoutes } = useTransit();

  const [fromQuery, setFromQuery] = useState(initialFrom);
  const [toQuery, setToQuery] = useState(initialTo);
  const [searchQuery, setSearchQuery] = useState(initialBusOrStop);

  const govtRoutesCount = routes.filter(r => r.sector === 'GOVERNMENT' && r.operatorType !== 'CTC').length;
  const ctcRoutesCount = routes.filter(r => r.operatorType === 'CTC').length;
  const privateRoutesCount = routes.filter(r => r.sector === 'PRIVATE').length;

  // Popular Kolkata Terminals & Requested Hubs
  const popularHubs = [
    { id: 'stop-howrah-stn', nameEn: 'Howrah Station', nameBn: 'হাওড়া' },
    { id: 'stop-sealdah', nameEn: 'Sealdah Station', nameBn: 'শিয়ালদহ' },
    { id: 'stop-sector-v-sdf', nameEn: 'Salt Lake Sector V', nameBn: 'সেক্টর ৫' },
    { id: 'stop-airport', nameEn: 'Bimanbandar (Airport Gate 1)', nameBn: 'বিমানবন্দর' },
    { id: 'stop-birati', nameEn: 'Birati Bus Stand', nameBn: 'বিরাটি' },
    { id: 'stop-esplanade', nameEn: 'Esplanade (Dharmatala)', nameBn: 'ধর্মতলা' },
    { id: 'stop-gariahat', nameEn: 'Gariahat Junction', nameBn: 'গড়িয়াহাট' },
    { id: 'stop-shyambazar', nameEn: 'Shyambazar 5 Point Crossing', nameBn: 'শ্যামবাজার' }
  ];

  const handleSwap = () => {
    const temp = fromQuery;
    setFromQuery(toQuery);
    setToQuery(temp);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      from: fromQuery.trim(),
      to: toQuery.trim(),
      busOrStop: searchQuery.trim()
    });
  };

  const handleReset = () => {
    setFromQuery('');
    setToQuery('');
    setSearchQuery('');
    if (onResetSearch) {
      onResetSearch();
    }
  };

  return (
    <div className="bg-[#FAF7F2] rounded-3xl shadow-md border border-[#E6DFD5] p-4 sm:p-6 transition-all">
      
      {/* Kolkata Transit Title & Authority Badges */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-stone-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#1E4D38] text-amber-400 flex items-center justify-center font-bold text-sm shadow">
              🚍
            </span>
            <span>{lang === 'bn' ? 'কলকাতা বাস ও রুট অনুসন্ধান' : 'Kolkata Bus & Journey Search'}</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            {lang === 'bn' 
              ? 'উৎস ও গন্তব্য লিখুন — লাইভ বাস, সময়সূচি ও রুট স্টপ দেখুন' 
              : 'Enter origin & destination to find all matching buses, stops, and schedules'}
          </p>
        </div>

        {/* Operator Tag Pills */}
        <div className="flex items-center gap-1.5 text-[11px] font-bold flex-wrap">
          <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#1E4D38] border border-emerald-300 flex items-center gap-1">
            <Landmark className="w-3 h-3 text-[#1E4D38]" />
            <span>WBTC Govt</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 flex items-center gap-1">
            <span>🚋</span>
            <span>CTC Tramways (48)</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-950 border border-orange-300 flex items-center gap-1">
            <BusFront className="w-3 h-3 text-orange-700" />
            <span>Private Syndicates</span>
          </span>
        </div>
      </div>

      {/* Main Search Form */}
      <form onSubmit={handleFormSubmit} className="space-y-3.5">
        
        {/* Row 1: Source & Destination Autocomplete Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center gap-2.5">
          
          {/* Source / From Stoppage with Autocomplete */}
          <StopAutocomplete
            id="source-stoppage-input"
            label={lang === 'bn' ? 'উৎস স্টপ (কোথা থেকে):' : 'Source Stop (From):'}
            placeholder={lang === 'bn' ? 'উৎস লিখুন (যেমন বিরাটি, হাওড়া, বিমানবন্দর)...' : 'Type source stop (e.g. Birati, Howrah, Airport)...'}
            value={fromQuery}
            onChange={setFromQuery}
            onSelect={(name) => setFromQuery(name)}
            iconColor="text-emerald-700"
          />

          {/* Swap Button */}
          <div className="flex justify-center md:pt-5">
            <button
              type="button"
              onClick={handleSwap}
              className="p-2.5 rounded-xl bg-white hover:bg-amber-100 text-stone-700 hover:text-stone-900 border border-stone-300 shadow-sm transition"
              title="Swap Origin and Destination"
              aria-label="Swap Origin and Destination"
            >
              <ArrowRightLeft className="w-4 h-4 text-[#1E4D38]" />
            </button>
          </div>

          {/* Destination / To Stoppage with Autocomplete */}
          <StopAutocomplete
            id="destination-stoppage-input"
            label={lang === 'bn' ? 'গন্তব্য স্টপ (কোথায় যাবেন):' : 'Destination Stop (To):'}
            placeholder={lang === 'bn' ? 'গন্তব্য লিখুন (যেমন সেক্টর ৫, বিমানবন্দর, গড়িয়াহাট)...' : 'Type destination stop (e.g. Sector V, Airport, Gariahat)...'}
            value={toQuery}
            onChange={setToQuery}
            onSelect={(name) => setToQuery(name)}
            iconColor="text-rose-700"
          />

        </div>

        {/* Row 2: Bus Number / Direct Stop Search + Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-end">
          
          {/* Direct Search Bar */}
          <div className="md:col-span-8">
            <label htmlFor="bus-no-input" className="block text-[11px] font-bold text-stone-600 mb-1 tracking-wide uppercase">
              {lang === 'bn' ? 'অথবা সরাসরি বাস নম্বর বা নির্দিষ্ট স্টপ:' : 'Or Direct Bus No. / Specific Stoppage:'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="bus-no-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'bn' ? 'বাস নম্বর (S-12, 215A, AC-9, MB-8) বা স্টপ...' : 'Search bus no. (e.g. S-12, 215A, MB-8) or stop...'}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 bg-[#FAF7F2] focus:bg-white text-stone-900 text-sm font-medium focus:ring-2 focus:ring-[#1E4D38]/20 focus:border-[#1E4D38] outline-none transition"
              />
            </div>
          </div>

          {/* Search Button (Primary) */}
          <div className="md:col-span-4 flex items-center gap-2">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#1E4D38] hover:bg-[#153828] text-amber-300 hover:text-amber-200 font-extrabold text-sm shadow-md transition active:scale-[0.98]"
            >
              <Search className="w-4 h-4" />
              <span>{lang === 'bn' ? 'বাস অনুসন্ধান করুন' : 'Search Buses'}</span>
            </button>

            {(fromQuery || toQuery || searchQuery) && (
              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 px-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold text-xs transition"
                title="Reset Search"
              >
                {t('reset_search')}
              </button>
            )}
          </div>

        </div>

      </form>

      {/* Popular Hubs Quick Click Tags */}
      <div className="mt-3.5 pt-3 border-t border-stone-200/70 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide mr-1">
          {t('popular_places')}:
        </span>
        {popularHubs.map(hub => {
          const label = lang === 'bn' ? hub.nameBn : hub.nameEn;
          return (
            <button
              key={hub.id}
              type="button"
              onClick={() => {
                if (!fromQuery) {
                  setFromQuery(label);
                } else if (!toQuery) {
                  setToQuery(label);
                } else {
                  setFromQuery(label);
                }
              }}
              className="px-2.5 py-1 text-xs rounded-lg bg-white hover:bg-amber-100 hover:text-amber-900 border border-stone-300 text-stone-700 transition font-medium shadow-2xs"
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Filter Tabs: All | Government | CTC | Private | Live | AC | Favourites */}
      <div className="mt-3.5 pt-3 border-t border-stone-200/70 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
          {/* All */}
          <button
            onClick={() => onFilterChange('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'all'
                ? 'bg-[#1E4D38] text-amber-300 shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
            }`}
          >
            {t('filter_all')} ({routes.length})
          </button>

          {/* Government WBTC */}
          <button
            onClick={() => onFilterChange('govt')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'govt'
                ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-300'
                : 'bg-white text-emerald-900 hover:bg-emerald-50 border border-stone-300'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Govt WBTC ({govtRoutesCount})</span>
          </button>

          {/* CTC Tramways */}
          <button
            onClick={() => onFilterChange('ctc')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'ctc'
                ? 'bg-amber-600 text-stone-950 shadow-sm ring-2 ring-amber-300 font-black'
                : 'bg-white text-amber-950 hover:bg-amber-50 border border-stone-300'
            }`}
          >
            <span>🚋</span>
            <span>CTC Tramways ({ctcRoutesCount})</span>
          </button>

          {/* Private Syndicate */}
          <button
            onClick={() => onFilterChange('private')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'private'
                ? 'bg-orange-700 text-white shadow-sm ring-2 ring-orange-300'
                : 'bg-white text-orange-950 hover:bg-orange-50 border border-stone-300'
            }`}
          >
            <BusFront className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'বেসরকারি সিন্ডিকেট' : 'Private Syndicates'} ({privateRoutesCount})</span>
          </button>

          {/* Live Only */}
          <button
            onClick={() => onFilterChange('live')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'live'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-stone-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t('filter_live_only')}</span>
          </button>

          {/* AC Buses */}
          <button
            onClick={() => onFilterChange('ac')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'ac'
                ? 'bg-cyan-700 text-white shadow-sm'
                : 'bg-white text-cyan-900 hover:bg-cyan-50 border border-stone-300'
            }`}
          >
            {t('filter_ac_only')}
          </button>

          {/* Favourites */}
          <button
            onClick={() => onFilterChange('fav')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeFilter === 'fav'
                ? 'bg-stone-800 text-amber-300 shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{t('filter_favorites')} ({favRoutes.length})</span>
          </button>
        </div>
      </div>

    </div>
  );
};
