import React, { useState } from 'react';
import { BusRoute, ActiveBusState } from '../../types/transit';
import { useLanguage } from '../../context/LanguageContext';
import { generateRouteTimetable, TimetableSlot } from '../../utils/timetableGenerator';
import { KolkataTransitMap } from '../map/KolkataTransitMap';
import { 
  Bus, 
  Clock, 
  MapPin, 
  Navigation2, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Thermometer, 
  ShieldCheck, 
  X,
  Radio,
  Maximize2
} from 'lucide-react';

interface BusTimingsPanelProps {
  route: BusRoute;
  activeBuses: ActiveBusState[];
  onClose?: () => void;
  direction?: 'UP' | 'DOWN';
  onDirectionChange?: (dir: 'UP' | 'DOWN') => void;
}

export const BusTimingsPanel: React.FC<BusTimingsPanelProps> = ({
  route,
  activeBuses,
  onClose,
  direction = 'UP',
  onDirectionChange
}) => {
  const { lang, t } = useLanguage();
  const [selectedDirection, setSelectedDirection] = useState<'UP' | 'DOWN'>(direction);
  const [showMap, setShowMap] = useState<boolean>(true); // User clicked bus & timings, so show map!

  const busesOnRoute = activeBuses.filter(b => b.routeId === route.id);
  const { slots, nextBusSlot, stopArrivals } = generateRouteTimetable(route, busesOnRoute);

  const handleDirectionToggle = (dir: 'UP' | 'DOWN') => {
    setSelectedDirection(dir);
    if (onDirectionChange) onDirectionChange(dir);
  };

  const dirData = route.directions[selectedDirection];
  const activeBusInDir = busesOnRoute.find(b => b.direction === selectedDirection) || busesOnRoute[0];

  return (
    <div className="bg-[#FAF7F2] rounded-3xl border border-stone-300 shadow-xl overflow-hidden transition-all duration-300">
      
      {/* Header Bar */}
      <div className="bg-[#1E4D38] text-white p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl bg-amber-400 text-stone-950 font-black text-xl flex items-center justify-center shadow-md flex-shrink-0"
              style={{ backgroundColor: route.color || '#E5A93C' }}
            >
              {route.routeNumber}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {lang === 'bn' ? route.nameBn : route.nameEn}
                </h2>
                {route.operatorType === 'CTC' ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-stone-950">
                    🚋 CTC Tramways
                  </span>
                ) : route.sector === 'GOVERNMENT' ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-950">
                    🏛️ WBTC Govt
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200 text-amber-950">
                    🚍 Private Syndicate
                  </span>
                )}
                {route.isAC && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-200 text-cyan-950 uppercase">
                    AC Express
                  </span>
                )}
              </div>

              <p className="text-xs text-emerald-100 mt-1 flex items-center gap-1.5">
                <span className="font-semibold text-amber-300">Via:</span>
                <span>{lang === 'bn' ? route.viaBn : route.viaEn}</span>
              </p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close bus details"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Direction Switcher */}
        <div className="mt-4 flex items-center bg-[#143627] p-1 rounded-xl text-xs font-semibold gap-1">
          <button
            onClick={() => handleDirectionToggle('UP')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-center transition ${
              selectedDirection === 'UP'
                ? 'bg-amber-400 text-stone-950 font-bold shadow'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            {lang === 'bn' ? route.directions.UP.directionNameBn : route.directions.UP.directionNameEn}
          </button>
          <button
            onClick={() => handleDirectionToggle('DOWN')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-center transition ${
              selectedDirection === 'DOWN'
                ? 'bg-amber-400 text-stone-950 font-bold shadow'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            {lang === 'bn' ? route.directions.DOWN.directionNameBn : route.directions.DOWN.directionNameEn}
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-6">

        {/* 1. Next Bus Live Arrival Banner */}
        <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
                {lang === 'bn' ? 'পরবর্তী আসন্ন বাস (লাইভ ট্র্যাকিং)' : 'NEXT BUS TIMING (LIVE TRACKING)'}
              </span>
            </div>

            <div className="flex items-baseline gap-2.5 flex-wrap">
              <span className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                {nextBusSlot?.timeStr || '06:45 AM'}
              </span>

              {/* AC / Non-AC Badge right beside Next Bus timing */}
              <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1 border shadow-2xs ${
                nextBusSlot?.isAC
                  ? 'bg-cyan-100 text-cyan-950 border-cyan-300'
                  : 'bg-stone-200 text-stone-900 border-stone-300'
              }`}>
                <span>{nextBusSlot?.isAC ? '❄️ AC' : '🌡️ Non-AC'}</span>
                <span className="text-[10px] font-medium opacity-85">
                  ({nextBusSlot?.isAC ? (lang === 'bn' ? 'শীতাতপ নিয়ন্ত্রিত' : 'Air-Conditioned') : (lang === 'bn' ? 'সাধারণ বাস' : 'Standard Bus')})
                </span>
              </span>

              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                {nextBusSlot?.minutesUntil && nextBusSlot.minutesUntil > 0 
                  ? (lang === 'bn' ? `${nextBusSlot.minutesUntil} মিনিটের মধ্যে আসছে` : `in ~${nextBusSlot.minutesUntil} mins`)
                  : (lang === 'bn' ? 'স্ট্যান্ডে প্রস্তুত' : 'At Terminal / Now')}
              </span>
            </div>

            <p className="text-xs text-stone-500 flex items-center gap-2 flex-wrap">
              <span>{lang === 'bn' ? 'যানবাহন নম্বর:' : 'Bus No:'} <strong>{nextBusSlot?.busPlate || 'WB04-1842'}</strong></span>
              <span>•</span>
              <span>{lang === 'bn' ? 'চালকের আইডি:' : 'Driver ID:'} <strong>{nextBusSlot?.driverId || 'DRV-WBTC-101'}</strong></span>
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="bg-stone-50 border border-stone-200 px-3 py-2 rounded-xl text-center">
              <span className="text-[10px] text-stone-400 block uppercase font-bold">{t('fare_label')}</span>
              <span className="font-extrabold text-stone-900 text-sm">₹{route.fareMin}–₹{route.fareMax}</span>
            </div>
            <div className="bg-stone-50 border border-stone-200 px-3 py-2 rounded-xl text-center">
              <span className="text-[10px] text-stone-400 block uppercase font-bold">{t('frequency_label')}</span>
              <span className="font-extrabold text-stone-900 text-sm">~{route.frequencyMinutes}m</span>
            </div>
            <div className="bg-stone-50 border border-stone-200 px-3 py-2 rounded-xl text-center">
              <span className="text-[10px] text-stone-400 block uppercase font-bold">{lang === 'bn' ? 'কেবিন তাপমাত্রা' : 'Interior'}</span>
              <span className="font-extrabold text-stone-900 text-sm flex items-center justify-center gap-0.5">
                <span>{route.isAC ? '❄️' : '🌡️'}</span>
                <span>{activeBusInDir?.climate?.interiorTempC || (route.isAC ? 21.5 : 29.5)}°C</span>
              </span>
            </div>
          </div>
        </div>

        {/* 2. All Bus Timings One-by-One (Chronological Timetable with AC and Non-AC displayed beside each) */}
        <div className="space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#1E4D38]" />
              <span>{lang === 'bn' ? 'সারাদিনের বাসের সময়সূচি (এক এক করে AC / Non-AC সহ)' : 'All Bus Timings One-by-One (with AC & Non-AC)'}</span>
            </h3>

            {/* AC / Non-AC Legend */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-cyan-100 text-cyan-900 border border-cyan-300">
                <span>❄️ AC</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-stone-100 text-stone-700 border border-stone-300">
                <span>🌡️ Non-AC</span>
              </span>
              <span className="text-xs text-stone-500 font-medium">
                ({slots.length} {lang === 'bn' ? 'টি বাস' : 'departures'})
              </span>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-inner">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 max-h-60 overflow-y-auto pr-1">
              {slots.map((slot, idx) => {
                const isNext = slot.status === 'next';
                const isDeparted = slot.status === 'departed';
                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 ${
                      isNext
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 text-amber-950 font-bold shadow-sm'
                        : isDeparted
                        ? 'bg-stone-50 border-stone-200 text-stone-400 opacity-75'
                        : 'bg-white border-stone-200 text-stone-800 hover:border-[#1E4D38]'
                    }`}
                  >
                    {/* Time + AC/Non-AC Badge beside timing */}
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                      <span className={`text-xs sm:text-sm font-black ${isNext ? 'text-amber-950' : 'text-stone-900'}`}>
                        {slot.timeStr}
                      </span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-black uppercase tracking-tight flex items-center gap-0.5 border ${
                        slot.isAC 
                          ? 'bg-cyan-100 text-cyan-900 border-cyan-300' 
                          : 'bg-stone-100 text-stone-700 border-stone-300'
                      }`}>
                        <span>{slot.isAC ? '❄️' : '🌡️'}</span>
                        <span>{slot.isAC ? (lang === 'bn' ? 'এসি' : 'AC') : (lang === 'bn' ? 'নন-এসি' : 'Non-AC')}</span>
                      </span>
                    </div>

                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                      isNext 
                        ? 'bg-emerald-600 text-white font-bold' 
                        : isDeparted 
                        ? 'bg-stone-200 text-stone-500' 
                        : 'text-stone-500'
                    }`}>
                      {isNext 
                        ? (lang === 'bn' ? 'পরবর্তী বাস' : 'Next Bus')
                        : isDeparted 
                        ? (lang === 'bn' ? 'ছাড়িয়া গেছে' : 'Departed') 
                        : (lang === 'bn' ? `~${Math.max(0, slot.minutesUntil)} মি.` : `in ${Math.max(0, slot.minutesUntil)}m`)}
                    </span>

                    {slot.busPlate && !isDeparted && (
                      <span className="text-[9px] font-mono text-stone-400 truncate max-w-full">
                        {slot.busPlate}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Sequential Corridor Bus Stops to Destination */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              <span>
                {lang === 'bn' 
                  ? 'গন্তব্য পর্যন্ত সকল বাস স্টপের ক্রম ও সময়' 
                  : 'All Route Stops & Arrival Estimates to Destination'}
              </span>
            </h3>
            <span className="text-xs text-stone-500">
              {dirData?.stops?.length || 0} {lang === 'bn' ? 'টি স্টপ' : 'total stops'}
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm max-h-60 overflow-y-auto">
            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
              {stopArrivals.map((stop, sIdx) => {
                const isOrigin = sIdx === 0;
                const isTerminus = sIdx === stopArrivals.length - 1;
                return (
                  <div key={sIdx} className="relative flex items-center justify-between gap-3 text-xs">
                    {/* Stepper Dot */}
                    <div className={`absolute -left-6 top-1 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                      isOrigin 
                        ? 'border-emerald-600 bg-emerald-100 text-emerald-800' 
                        : isTerminus 
                        ? 'border-rose-600 bg-rose-100 text-rose-800' 
                        : 'border-[#1E4D38] bg-white'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        isOrigin ? 'bg-emerald-600' : isTerminus ? 'bg-rose-600' : 'bg-[#1E4D38]'
                      }`} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-800">
                        {stop.stopNameEn}
                      </span>
                      {isOrigin && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                          {lang === 'bn' ? 'প্রস্থান' : 'Origin'}
                        </span>
                      )}
                      {isTerminus && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] bg-rose-100 text-rose-800 font-bold">
                          {lang === 'bn' ? 'গন্তব্য' : 'Destination'}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-stone-500 flex-shrink-0">
                      <span>{stop.distanceKm.toFixed(1)} km</span>
                      <div className="flex items-center gap-1.5 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        <span className="font-extrabold text-stone-900">
                          {stop.scheduledTimeStr}
                        </span>
                        <span className={`text-[9px] px-1 py-0.2 rounded font-black uppercase tracking-tight ${
                          nextBusSlot?.isAC 
                            ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' 
                            : 'bg-stone-200 text-stone-800 border border-stone-300'
                        }`}>
                          {nextBusSlot?.isAC ? '❄️ AC' : 'Non-AC'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Interactive Kolkata Transit Map for this Bus */}
        <div className="space-y-2.5 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5">
              <Navigation2 className="w-4 h-4 text-emerald-700" />
              <span>
                {lang === 'bn' 
                  ? `${route.routeNumber} বাসের লাইভ ম্যাপ ট্র্যাকিং` 
                  : `Live Map Tracking for Bus ${route.routeNumber}`}
              </span>
            </h3>

            <button
              onClick={() => setShowMap(!showMap)}
              className="text-xs font-bold text-[#1E4D38] hover:underline flex items-center gap-1"
            >
              {showMap ? (lang === 'bn' ? 'ম্যাপ লুকান' : 'Hide Map') : (lang === 'bn' ? 'ম্যাপ প্রসারিত করুন' : 'Show Map')}
            </button>
          </div>

          {showMap && (
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md">
              <KolkataTransitMap />
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
