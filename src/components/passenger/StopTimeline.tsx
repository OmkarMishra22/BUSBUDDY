import React from 'react';
import { BusRoute, ActiveBusState } from '../../types/transit';
import { STOP_MAP } from '../../data/kolkataStops';
import { useLanguage } from '../../context/LanguageContext';
import { Bus, MapPin, CheckCircle, Navigation } from 'lucide-react';

interface StopTimelineProps {
  route: BusRoute;
  direction: 'UP' | 'DOWN';
  activeBusesOnRoute: ActiveBusState[];
}

export const StopTimeline: React.FC<StopTimelineProps> = ({
  route,
  direction,
  activeBusesOnRoute
}) => {
  const { lang } = useLanguage();
  const dirConfig = route.directions[direction];
  const stops = dirConfig.stops;

  return (
    <div className="mt-3 pt-3 border-t border-slate-100 pl-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          {lang === 'bn' ? 'স্টপ ও রুটের ক্রম' : 'Stops & Route Sequence'} ({stops.length} {lang === 'bn' ? 'স্টপ' : 'stops'})
        </span>
        <span className="text-[11px] text-slate-500">
          ~{dirConfig.stops[stops.length - 1]?.scheduledMinutesFromStart} min total
        </span>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-3 pl-4 space-y-3 py-1">
        {stops.map((st, idx) => {
          const stopData = STOP_MAP.get(st.stopId);
          const isFirst = idx === 0;
          const isLast = idx === stops.length - 1;

          // Check if any active bus is currently approaching or at this stop
          const busNearStop = activeBusesOnRoute.find(b => 
            b.nextStopNameEn.toLowerCase().includes(stopData?.nameEn.toLowerCase() || '___') ||
            b.nextStopNameBn.toLowerCase().includes(stopData?.nameBn.toLowerCase() || '___')
          );

          return (
            <div key={st.stopId} className="relative group">
              {/* Timeline Node Dot */}
              <div 
                className={`absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                  isFirst
                    ? 'bg-emerald-600 ring-2 ring-emerald-300'
                    : isLast
                    ? 'bg-rose-600 ring-2 ring-rose-300'
                    : 'bg-slate-400 group-hover:bg-blue-600'
                }`}
              />

              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs text-slate-900">
                      {lang === 'bn' ? stopData?.nameBn : stopData?.nameEn}
                    </span>
                    {stopData?.isTerminal && (
                      <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-100 text-amber-800">
                        {lang === 'bn' ? 'টার্মিনাস' : 'Terminus'}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500">
                    {lang === 'bn' ? stopData?.landmarkBn : stopData?.landmarkEn}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-[10px] text-slate-500 font-mono">
                    +{st.scheduledMinutesFromStart}m
                  </span>
                </div>
              </div>

              {/* Active approaching bus indicator */}
              {busNearStop && (
                <div className="mt-1 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-semibold animate-pulse">
                  <Bus className="w-3.5 h-3.5 text-emerald-700" />
                  <span>
                    {lang === 'bn' ? `বাস ${busNearStop.routeNumber} আসছে (${busNearStop.etaRange})` : `Approaching: Bus ${busNearStop.routeNumber} (${busNearStop.etaRange})`}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
