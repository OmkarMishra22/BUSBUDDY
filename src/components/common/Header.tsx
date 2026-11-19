import React from 'react';
import { Bus, User, KeyRound, Wifi, WifiOff, CloudSun } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTransit } from '../../context/TransitContext';
import { UserRole } from '../../types/transit';

export const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const { role, setRole, isOnline, authenticatedDriver, kolkataWeather } = useTransit();

  const portals: { id: UserRole; labelEn: string; labelBn: string; icon: React.ReactNode }[] = [
    { 
      id: 'passenger', 
      labelEn: 'Passenger Portal', 
      labelBn: 'যাত্রী পোর্টাল', 
      icon: <User className="w-4 h-4" /> 
    },
    { 
      id: 'driver', 
      labelEn: authenticatedDriver ? `Driver: ${authenticatedDriver.driverId}` : 'Driver Portal', 
      labelBn: authenticatedDriver ? `চালক: ${authenticatedDriver.driverId}` : 'চালক পোর্টাল', 
      icon: <Bus className="w-4 h-4" /> 
    },
    { 
      id: 'operator', 
      labelEn: 'Admin Console', 
      labelBn: 'অ্যাডমিন কনসোল', 
      icon: <KeyRound className="w-4 h-4" /> 
    },
  ];

  return (
    <header className="bg-[#143627] text-white sticky top-0 z-40 shadow-md border-b border-[#1E4D38]">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Brand & City Tag (Clean Kolkata Transit Vibe, Demo Removed) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-inner">
              <Bus className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  BusBuddy
                </span>
                <span className="bg-amber-400 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">
                  Kolkata
                </span>
              </div>
              <p className="text-xs text-emerald-200 font-medium">
                {lang === 'bn' ? 'কলকাতা রিয়েল-টাইম বাস ট্র্যাকিং' : 'WBTC, CTC & Private Transit Network'}
              </p>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <span 
              className={`p-1.5 rounded-full ${isOnline ? 'bg-emerald-900 text-emerald-300' : 'bg-amber-900 text-amber-300'}`}
              title={isOnline ? t('online_status') : t('offline_status')}
            >
              {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
            </span>

            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="px-2.5 py-1 text-xs font-bold rounded bg-[#1E4D38] hover:bg-[#285e46] border border-emerald-700 text-amber-300 transition"
              aria-label="Toggle language between English and Bengali"
            >
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>
          </div>
        </div>

        {/* Center: Dedicated Portal Switcher */}
        <nav 
          aria-label="Portal switcher" 
          className="flex items-center bg-[#0d261b] p-1 rounded-2xl border border-[#1E4D38] w-full md:w-auto justify-center shadow-inner"
        >
          {portals.map(p => {
            const active = role === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setRole(p.id)}
                className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  active
                    ? 'bg-amber-400 text-stone-950 shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-[#1E4D38]/60'
                }`}
                aria-pressed={active}
              >
                {p.icon}
                <span>{lang === 'bn' ? p.labelBn : p.labelEn}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Right Controls: Weather, Network & Language */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Kolkata Live Temperature Widget */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#1E4D38] border border-emerald-700 text-xs">
            <CloudSun className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-amber-300 font-mono">{kolkataWeather.temperatureC}°C</span>
            <span className="text-[10px] text-emerald-200">Kolkata</span>
          </div>

          {/* Network Status Indicator */}
          <div 
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
              isOnline
                ? 'bg-emerald-900/80 text-emerald-200 border-emerald-700'
                : 'bg-amber-900/80 text-amber-200 border-amber-700'
            }`}
          >
            {isOnline ? (
              <Wifi className="w-3.5 h-3.5 text-emerald-300" />
            ) : (
              <WifiOff className="w-3.5 h-3.5 text-amber-300" />
            )}
            <span>{isOnline ? t('online_status') : t('offline_status')}</span>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center bg-[#0d261b] rounded-lg p-0.5 border border-[#1E4D38]">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition ${
                lang === 'en' ? 'bg-amber-400 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('bn')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition font-bengali ${
                lang === 'bn' ? 'bg-amber-400 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};
