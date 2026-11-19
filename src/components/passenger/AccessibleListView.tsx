import React from 'react';
import { BusRoute, ActiveBusState } from '../../types/transit';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';
import { FreshnessBadge } from '../common/FreshnessBadge';
import { ReliabilityBadge } from '../common/ReliabilityBadge';
import { Star, Bus, Navigation, Clock } from 'lucide-react';

interface AccessibleListViewProps {
  routes: BusRoute[];
  activeBuses: ActiveBusState[];
}

export const AccessibleListView: React.FC<AccessibleListViewProps> = ({ routes, activeBuses }) => {
  const { lang, t } = useLanguage();
  const { selectedRouteId, setSelectedRouteId, favRoutes, toggleFavRoute } = useTransit();

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm" role="region" aria-label="Accessible Kolkata Bus Transit Table">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {lang === 'bn' ? 'অ্যাক্সেসিবল রুট ও বাস তালিকা' : 'Accessible Routes & Live Bus Directory'}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'bn' ? 'স্ক্রিন রিডার ও কিবোর্ড নেভিগেশনের জন্য উপযুক্ত' : 'Optimized for screen readers and keyboard navigation'}
          </p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 font-semibold text-slate-700">
          {routes.length} {lang === 'bn' ? 'টি রুট' : 'routes'}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse" role="table">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-bold">
              <th scope="col" className="p-3">Route</th>
              <th scope="col" className="p-3">Corridor & Direction</th>
              <th scope="col" className="p-3">Estimated Arrival</th>
              <th scope="col" className="p-3">Live Freshness</th>
              <th scope="col" className="p-3">Source & Reliability</th>
              <th scope="col" className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {routes.map(route => {
              const buses = activeBuses.filter(b => b.routeId === route.id);
              const primaryBus = buses[0];
              const isSelected = selectedRouteId === route.id;
              const isFav = favRoutes.includes(route.id);

              return (
                <tr 
                  key={route.id}
                  className={`hover:bg-slate-50/80 transition ${
                    isSelected ? 'bg-blue-50/60 font-medium' : ''
                  }`}
                >
                  {/* Route & Type */}
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span 
                        className="px-2.5 py-1 rounded-lg text-white font-extrabold text-xs shadow-sm"
                        style={{ backgroundColor: route.color || '#2563EB' }}
                      >
                        {route.routeNumber}
                      </span>
                      {route.sector === 'GOVERNMENT' ? (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">
                          🏛️ Govt
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                          {route.operatorType === 'MINIBUS' ? '🚐 Minibus' : '🚍 Private'}
                        </span>
                      )}
                      {route.isAC && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800 uppercase">
                          AC
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Corridor & Syndicate */}
                  <td className="p-3">
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {lang === 'bn' ? route.nameBn : route.nameEn}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Via: {lang === 'bn' ? route.viaBn : route.viaEn}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {route.sector === 'GOVERNMENT' ? 'WBTC State Fleet • Passes Valid' : (route.syndicateNameEn || 'Syndicate Operator')}
                    </div>
                  </td>

                  {/* Arrival Range */}
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-extrabold text-sm text-slate-900">
                        {primaryBus ? primaryBus.etaRange : '8–15 min'}
                      </span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-black uppercase tracking-tight ${
                        route.isAC 
                          ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' 
                          : 'bg-stone-200 text-stone-700 border border-stone-300'
                      }`}>
                        {route.isAC ? '❄️ AC' : 'Non-AC'}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic">
                      {lang === 'bn' ? 'আনুমানিক রেঞ্জ' : 'estimated range'}
                    </div>
                  </td>

                  {/* Freshness */}
                  <td className="p-3 whitespace-nowrap">
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
                        labelEn="No live report"
                        labelBn="লাইভ তথ্য নেই"
                      />
                    )}
                  </td>

                  {/* Reliability & Source */}
                  <td className="p-3 whitespace-nowrap">
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
                        percentage={30}
                        source="timetable_estimate"
                      />
                    )}
                  </td>

                  {/* Actions */}
                  <td className="p-3 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => toggleFavRoute(route.id)}
                        className={`p-1.5 rounded-lg border transition ${
                          isFav ? 'bg-amber-100 text-amber-600 border-amber-300' : 'bg-white text-slate-400 hover:text-slate-700 border-slate-200'
                        }`}
                        title={isFav ? 'Remove Favorite' : 'Save Favorite'}
                        aria-label={`Bookmark ${route.routeNumber}`}
                      >
                        <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
                      </button>

                      <button
                        onClick={() => setSelectedRouteId(route.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                        aria-label={`Select route ${route.routeNumber} to view on map`}
                      >
                        {isSelected ? 'Active' : 'Select'}
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
  );
};
