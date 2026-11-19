import React from 'react';
import { ReliabilityScore, UpdateSource } from '../../types/transit';
import { ShieldCheck, ShieldAlert, Shield, Navigation, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ReliabilityBadgeProps {
  reliability: ReliabilityScore;
  percentage?: number;
  source: UpdateSource;
  isHistorical?: boolean;
}

export const ReliabilityBadge: React.FC<ReliabilityBadgeProps> = ({
  reliability,
  percentage,
  source,
  isHistorical
}) => {
  const { t, lang } = useLanguage();

  const getSourceLabel = () => {
    switch (source) {
      case 'driver_gps':
        return t('source_driver');
      case 'passenger_report':
        return t('source_passenger');
      case 'timetable_estimate':
      default:
        return t('source_timetable');
    }
  };

  const getSourceIcon = () => {
    switch (source) {
      case 'driver_gps':
        return <Navigation className="w-3.5 h-3.5 text-blue-600" />;
      case 'passenger_report':
        return <Users className="w-3.5 h-3.5 text-purple-600" />;
      default:
        return <Calendar className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  const getReliabilityConfig = () => {
    if (isHistorical) {
      return {
        label: lang === 'bn' ? 'ঐতিহাসিক রেকর্ড (অনিশ্চিত)' : 'Historical GPS (Uncertain)',
        bg: 'bg-amber-50 text-amber-800 border-amber-200',
        icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
      };
    }
    switch (reliability) {
      case 'high':
        return {
          label: lang === 'bn' ? 'উচ্চ বিশ্বস্ততা' : 'High Confidence',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        };
      case 'medium':
        return {
          label: lang === 'bn' ? 'মাঝারি বিশ্বস্ততা' : 'Moderate Confidence',
          bg: 'bg-sky-50 text-sky-800 border-sky-200',
          icon: <Shield className="w-3.5 h-3.5 text-sky-600" />
        };
      case 'low':
      case 'uncertain':
      default:
        return {
          label: lang === 'bn' ? 'অনির্দিষ্ট (আনুমানিক)' : 'Uncertain (Approximate)',
          bg: 'bg-slate-100 text-slate-700 border-slate-300',
          icon: <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
        };
    }
  };

  const rel = getReliabilityConfig();

  return (
    <div className="flex flex-wrap items-center gap-1.5 text-xs">
      {/* Source */}
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
        {getSourceIcon()}
        <span>{getSourceLabel()}</span>
      </span>

      {/* Confidence */}
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border font-medium ${rel.bg}`}>
        {rel.icon}
        <span>{rel.label}</span>
        {percentage && <span className="opacity-75">({percentage}%)</span>}
      </span>
    </div>
  );
};
