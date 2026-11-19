import React from 'react';
import { WifiOff, RefreshCw, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';

export const OfflineBanner: React.FC = () => {
  const { isOnline, isSyncing, syncOfflineQueue, queuedPointsCount } = useTransit();
  const { t, lang } = useLanguage();

  if (isOnline && queuedPointsCount === 0) return null;

  return (
    <div 
      className={`px-4 py-3 border-b text-sm transition-colors ${
        !isOnline 
          ? 'bg-amber-500 text-slate-950 border-amber-600 font-medium' 
          : 'bg-blue-600 text-white border-blue-700'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          {!isOnline ? (
            <WifiOff className="w-5 h-5 flex-shrink-0 animate-pulse text-amber-950" />
          ) : (
            <RefreshCw className={`w-5 h-5 flex-shrink-0 ${isSyncing ? 'animate-spin' : ''}`} />
          )}
          <div>
            <span className="font-bold">
              {!isOnline ? t('offline_banner_title') : t('syncing_status')}
            </span>
            <p className="text-xs opacity-95">
              {!isOnline
                ? t('offline_banner_desc')
                : (lang === 'bn' 
                    ? `সংযোগ পুনরুদ্ধার হয়েছে। ${queuedPointsCount}টি অফলাইন জিপিএস পয়েন্ট ঐতিহাসিক রেকর্ড হিসেবে আপলোড হচ্ছে...`
                    : `Connection restored. Uploading ${queuedPointsCount} queued offline GPS points as historical data...`)}
            </p>
          </div>
        </div>

        {isOnline && queuedPointsCount > 0 && (
          <button
            onClick={syncOfflineQueue}
            disabled={isSyncing}
            className="self-end sm:self-auto px-3 py-1 bg-white text-blue-900 rounded font-semibold text-xs hover:bg-blue-50 transition shadow-sm disabled:opacity-50"
          >
            {isSyncing ? (lang === 'bn' ? 'সিঙ্ক হচ্ছে...' : 'Syncing...') : (lang === 'bn' ? 'এখনই সিঙ্ক করুন' : 'Sync Now')}
          </button>
        )}
      </div>
    </div>
  );
};
