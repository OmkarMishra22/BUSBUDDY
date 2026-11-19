import React, { useState } from 'react';
import { BusRoute, ActiveBusState } from '../../types/transit';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';
import { FreshnessBadge } from '../common/FreshnessBadge';
import { ReliabilityBadge } from '../common/ReliabilityBadge';
import { StopTimeline } from './StopTimeline';
import { 
  Bus, 
  Clock, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Navigation2, 
  Info, 
  IndianRupee, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface RouteCardProps {
  route: BusRoute;
  activeBusesOnRoute: ActiveBusState[];
  onViewTimings?: (route: BusRoute) => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route, activeBusesOnRoute, onViewTimings }) => {
  const { lang, t } = useLanguage();
  const { 
    selectedRouteId, 
    setSelectedRouteId, 
    selectedDirection, 
    setSelectedDirection,
    favRoutes, 
    toggleFavRoute 
  } = useTransit();

  const [expandedStops, setExpandedStops] = useState(false);
  const [localDir, setLocalDir] = useState<'UP' | 'DOWN'>('UP');

  const isSelected = selectedRouteId === route.id;
  const isFav = favRoutes.includes(route.id);
  const currentDirection = isSelected ? selectedDirection : localDir;

  const dirConfig = route.directions[currentDirection];
  const originName = currentDirection === 'UP' ? route.directions.UP.directionNameEn : route.directions.DOWN.directionNameEn;

  // Best active bus for this direction
  const busesInDir = activeBusesOnRoute.filter(b => b.direction === currentDirection);
  const primaryBus = busesInDir[0];

  const handleSelectRoute = () => {
    setSelectedRouteId(route.id);
    setSelectedDirection(currentDirection);
  };

  const handleToggleDirection = (dir: 'UP' | 'DOWN') => {
    setLocalDir(dir);
    if (isSelected) {
      setSelectedDirection(dir);
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-200 shadow-sm ${
        isSelected 
          ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md' 
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      {/* Top Header: Route Number, Badges, Favorite */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {/* Route Number Badge */}
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-sm flex-shrink-0"
            style={{ backgroundColor: route.color || '#2563EB' }}
          >
            {route.routeNumber}
          </div>

          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {lang === 'bn' ? route.nameBn : route.nameEn}
              </h3>
              {/* Sector Pill */}
              {route.operatorType === 'CTC' ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-900 border border-purple-300 flex items-center gap-1">
                  <span>🚋</span>
                  <span>{lang === 'bn' ? 'সিটিসি ট্রামওয়েজ' : 'CTC Tramways'}</span>
                </span>
              ) : route.sector === 'GOVERNMENT' ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-300 flex items-center gap-1">
                  <span>🏛️</span>
                  <span>{lang === 'bn' ? 'সরকারি বাস' : 'Govt WBTC'}</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-950 border border-amber-300 flex items-center gap-1">
                  <span>{route.operatorType === 'MINIBUS' ? '🚐' : '🚍'}</span>
                  <span>{route.operatorType === 'MINIBUS' ? (lang === 'bn' ? 'মিনিবাস' : 'Minibus') : (lang === 'bn' ? 'বেসরকারি সিন্ডিকেট' : 'Private Syndicate')}</span>
                </span>
              )}
              {route.isAC && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-100 text-cyan-800 border border-cyan-300 uppercase">
                  AC
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 mt-0.5">
              <span className="font-medium text-slate-600">Via:</span> {lang === 'bn' ? route.viaBn : route.viaEn}
            </p>

            {/* Operator Detail Subtitle */}
            <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
              {route.operatorType === 'CTC' ? (
                <span className="text-purple-800 font-semibold bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200">
                  {lang === 'bn' ? 'ক্যালকাটা ট্রামওয়েজ (CTC) • পাস প্রযোজ্য' : `${(route as any).depotEn || 'CTC Depot'} • Govt Pass Accepted`}
                </span>
              ) : route.sector === 'GOVERNMENT' ? (
                <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.2 rounded border border-blue-100">
                  {lang === 'bn' ? '✓ সরকারি পাস ও স্মার্টকার্ড প্রযোজ্য' : '✓ Govt Pass & Transit Card Accepted'}
                </span>
              ) : (
                <span className="text-amber-800 font-semibold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 font-mono">
                  {route.syndicateNameEn} • {route.permitNumber || 'Syndicate Stage'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Favorite Bookmark Button */}
        <button
          onClick={() => toggleFavRoute(route.id)}
          className={`p-2 rounded-xl transition ${
            isFav 
              ? 'text-amber-500 bg-amber-50 hover:bg-amber-100' 
              : 'text-slate-400 hover:text-slate-600 bg-slate-100'
          }`}
          title={isFav ? t('remove_fav') : t('save_fav')}
          aria-label={isFav ? `Remove ${route.routeNumber} from favorites` : `Add ${route.routeNumber} to favorites`}
        >
          <Star className={`w-5 h-5 ${isFav ? 'fill-amber-400 stroke-amber-500' : ''}`} />
        </button>
      </div>

      {/* Direction Switcher Pills */}
      <div className="mt-3.5 flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold gap-1">
        <button
          onClick={() => handleToggleDirection('UP')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-center transition truncate ${
            currentDirection === 'UP' 
              ? 'bg-white text-slate-900 shadow-sm font-bold' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {lang === 'bn' ? route.directions.UP.directionNameBn : route.directions.UP.directionNameEn}
        </button>
        <button
          onClick={() => handleToggleDirection('DOWN')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-center transition truncate ${
            currentDirection === 'DOWN' 
              ? 'bg-white text-slate-900 shadow-sm font-bold' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {lang === 'bn' ? route.directions.DOWN.directionNameBn : route.directions.DOWN.directionNameEn}
        </button>
      </div>

      {/* Primary Telemetry & Arrival Estimate */}
      <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          
          {/* Estimated Arrival Range */}
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">
              {t('arrival_est_label')}
            </span>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {primaryBus ? primaryBus.etaRange : '10–18 min'}
              </span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-black uppercase tracking-tight flex items-center gap-0.5 ${
                route.isAC 
                  ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' 
                  : 'bg-stone-200 text-stone-700 border border-stone-300'
              }`}>
                <span>{route.isAC ? '❄️ AC' : '🌡️ Non-AC'}</span>
              </span>
              <span className="text-[11px] text-slate-500 italic">
                ({lang === 'bn' ? 'আনুমানিক রেঞ্জ' : 'estimated range'})
              </span>
            </div>
          </div>

          {/* Freshness Status Pill */}
          <div className="sm:text-right">
            {primaryBus ? (
              <FreshnessBadge 
                status={primaryBus.freshnessStatus}
                labelEn={primaryBus.freshnessLabelEn}
                labelBn={primaryBus.freshnessLabelBn}
                isHistorical={primaryBus.isHistorical}
              />
            ) : (
              <FreshnessBadge
                status="none"
                labelEn="No live report · Scheduled"
                labelBn="লাইভ তথ্য নেই · সময়সূচি"
              />
            )}
          </div>
        </div>

        {/* Source & Reliability Details + Climate Alignment */}
        <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {primaryBus ? (
              <ReliabilityBadge 
                reliability={primaryBus.reliability}
                percentage={primaryBus.reliabilityPercentage}
                source={primaryBus.source}
                isHistorical={primaryBus.isHistorical}
              />
            ) : (
              <ReliabilityBadge 
                reliability="uncertain"
                percentage={35}
                source="timetable_estimate"
              />
            )}

            {/* Climate & Interior Temperature Indicator */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${
              route.isAC 
                ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' 
                : 'bg-slate-200 text-slate-800 border border-slate-300'
            }`}>
              <span>{route.isAC ? '❄️' : '🌡️'}</span>
              <span>{primaryBus?.climate?.interiorTempC || (route.isAC ? 21.5 : 29.5)}°C</span>
              <span className="text-[10px] font-normal opacity-85">
                {route.isAC ? '(AC)' : '(Standard)'}
              </span>
            </span>
          </div>

          <span className="text-[11px] text-slate-500">
            {primaryBus?.driverId ? `Driver: ${primaryBus.driverId}` : t('arrival_disclaimer')}
          </span>
        </div>
      </div>

      {/* Service Info: Fare, Frequency & Hours with AC/Non-AC */}
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <span className="text-[10px] text-slate-400 block">{t('fare_label')}</span>
          <span className="font-bold text-slate-800">₹{route.fareMin} – ₹{route.fareMax}</span>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <span className="text-[10px] text-slate-400 block">{t('frequency_label')}</span>
          <span className="font-bold text-slate-800">~{route.frequencyMinutes} min</span>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <span className="text-[10px] text-slate-400 block">{t('first_last_bus')}</span>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="font-bold text-slate-800 text-[11px]">{route.firstBus} - {route.lastBus}</span>
            <span className={`px-1 py-0.2 rounded text-[9px] font-black uppercase tracking-tight ${
              route.isAC 
                ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' 
                : 'bg-stone-200 text-stone-700 border border-stone-300'
            }`}>
              {route.isAC ? 'AC' : 'Non-AC'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Actions: View Stops Toggle, Timings & Track on Map */}
      <div className="mt-4 pt-3 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={() => setExpandedStops(!expandedStops)}
          className="flex items-center gap-1 text-xs font-semibold text-stone-700 hover:text-stone-900 py-1 px-2 rounded-lg hover:bg-stone-100 transition"
          aria-expanded={expandedStops}
        >
          <span>{expandedStops ? t('hide_stops') : t('view_stops')}</span>
          {expandedStops ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
        </button>

        <div className="flex items-center gap-2">
          {onViewTimings && (
            <button
              onClick={() => {
                handleSelectRoute();
                onViewTimings(route);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs transition shadow-sm active:scale-95"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'বাসের সময়সূচি দেখুন' : 'View Bus Timings'}</span>
            </button>
          )}

          <button
            onClick={() => {
              handleSelectRoute();
              if (onViewTimings) onViewTimings(route);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm ${
              isSelected
                ? 'bg-[#1E4D38] text-amber-300 shadow-md ring-2 ring-emerald-300'
                : 'bg-stone-900 text-white hover:bg-[#1E4D38]'
            }`}
          >
            <Navigation2 className="w-3.5 h-3.5 fill-current" />
            <span>{isSelected ? (lang === 'bn' ? 'ম্যাপে ট্র্যাকিং সক্রিয়' : 'Tracking on Map') : t('track_on_map')}</span>
          </button>
        </div>
      </div>

      {/* Expandable Stops Sequence */}
      {expandedStops && (
        <StopTimeline 
          route={route}
          direction={currentDirection}
          activeBusesOnRoute={busesInDir}
        />
      )}
    </div>
  );
};
