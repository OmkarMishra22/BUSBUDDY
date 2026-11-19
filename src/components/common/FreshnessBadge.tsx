import React from 'react';
import { FreshnessStatus } from '../../types/transit';
import { Radio, Clock, AlertTriangle, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FreshnessBadgeProps {
  status: FreshnessStatus;
  labelEn: string;
  labelBn: string;
  isHistorical?: boolean;
  className?: string;
}

export const FreshnessBadge: React.FC<FreshnessBadgeProps> = ({
  status,
  labelEn,
  labelBn,
  isHistorical,
  className = ''
}) => {
  const { lang } = useLanguage();
  const label = lang === 'bn' ? labelBn : labelEn;

  if (isHistorical) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 ${className}`}
        title="Delayed point uploaded after reconnection. Not live."
        aria-label={`Historical update: ${label}`}
      >
        <Clock className="w-3.5 h-3.5 text-amber-700" />
        <span>{label}</span>
      </span>
    );
  }

  if (status === 'live') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 ${className}`}
        aria-label={`Live status: ${label}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        </span>
        <Radio className="w-3.5 h-3.5 text-emerald-700" />
        <span>{label}</span>
      </span>
    );
  }

  if (status === 'stale') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 ${className}`}
        aria-label={`Stale status: ${label}`}
      >
        <Clock className="w-3.5 h-3.5 text-amber-700" />
        <span>{label}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-300 ${className}`}
      aria-label={`Timetable schedule: ${label}`}
    >
      <Calendar className="w-3.5 h-3.5 text-slate-500" />
      <span>{label}</span>
    </span>
  );
};
