import React, { useState, useRef, useEffect } from 'react';
import { MapPin, X, ChevronDown, Check } from 'lucide-react';
import { searchStoppages, TransitStoppage } from '../../data/allStoppages';
import { useLanguage } from '../../context/LanguageContext';

interface StopAutocompleteProps {
  value: string;
  onChange: (val: string) => void;
  onSelect: (stopName: string, stoppage?: TransitStoppage) => void;
  placeholder: string;
  iconColor?: string;
  label?: string;
  id?: string;
}

export const StopAutocomplete: React.FC<StopAutocompleteProps> = ({
  value,
  onChange,
  onSelect,
  placeholder,
  iconColor = 'text-emerald-700',
  label,
  id = 'stop-input'
}) => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<TransitStoppage[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update suggestions whenever value changes
  useEffect(() => {
    if (value.trim().length > 0) {
      const results = searchStoppages(value, 20);
      setSuggestions(results);
    } else {
      // When empty and focused, show major transit hubs
      const hubs = searchStoppages('', 15);
      setSuggestions(hubs);
    }
  }, [value]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleSelectStoppage = (stop: TransitStoppage) => {
    const chosenName = lang === 'bn' ? (stop.nameBn || stop.nameEn) : stop.nameEn;
    onChange(chosenName);
    onSelect(stop.nameEn, stop);
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleClear = () => {
    onChange('');
    onSelect('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      {label && (
        <label htmlFor={id} className="block text-[11px] font-bold text-stone-600 mb-1 tracking-wide uppercase">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {/* Left Icon */}
        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${iconColor}`}>
          <MapPin className="w-4 h-4 stroke-[2.2]" />
        </div>

        {/* Input Field */}
        <input
          id={id}
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-stone-300 bg-[#FAF7F2] text-stone-900 text-sm font-medium placeholder:text-stone-400 focus:bg-white focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/20 outline-none transition-all shadow-sm"
        />

        {/* Right Action: Clear or Arrow */}
        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center">
          {value ? (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition"
              aria-label="Clear input"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-stone-400 hover:text-stone-600"
              tabIndex={-1}
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </div>

      {/* Real-time Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-stone-300 rounded-xl shadow-xl max-h-72 overflow-y-auto divide-y divide-stone-100 animate-in fade-in duration-100">
          <div className="px-3 py-1.5 bg-[#F5EFEB] border-b border-stone-200 text-[10px] font-bold text-stone-600 flex items-center justify-between">
            <span>
              {value.trim() 
                ? (lang === 'bn' ? `"${value}" এর সাথে মিলছে (${suggestions.length} টি স্টপ)` : `Matching "${value}" (${suggestions.length} stops)`)
                : (lang === 'bn' ? 'প্রধান কলকাতা ট্রানজিট হাবসমূহ' : 'Major Kolkata Transit Hubs')}
            </span>
            <span className="text-[9px] text-stone-500 font-normal">
              {lang === 'bn' ? 'ক্লিক করে নির্বাচন করুন' : 'Click to select'}
            </span>
          </div>

          {suggestions.length > 0 ? (
            suggestions.map((stop) => {
              const isSelected = value.toLowerCase() === stop.nameEn.toLowerCase() || value === stop.nameBn;
              return (
                <button
                  key={stop.id}
                  type="button"
                  onClick={() => handleSelectStoppage(stop)}
                  className={`w-full text-left px-3.5 py-2.5 hover:bg-[#F7F4EE] transition flex items-center justify-between gap-2 group ${
                    isSelected ? 'bg-amber-50 text-amber-950 font-bold' : 'text-stone-800'
                  }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      stop.isHub ? 'bg-[#D97706]' : 'bg-[#1E4D38]'
                    }`} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs sm:text-sm font-semibold truncate group-hover:text-[#1E4D38]">
                          {stop.nameEn}
                        </span>
                        {stop.nameBn && stop.nameBn !== stop.nameEn && (
                          <span className="text-xs text-stone-500 font-normal">
                            ({stop.nameBn})
                          </span>
                        )}
                      </div>
                      {stop.area && (
                        <span className="text-[10px] text-stone-400 block truncate">
                          {stop.area}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    {stop.isHub && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                        {lang === 'bn' ? 'হাব' : 'HUB'}
                      </span>
                    )}
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-amber-700" />
                    )}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="p-4 text-center text-xs text-stone-500">
              <p className="font-semibold text-stone-700">
                {lang === 'bn' ? 'কোনো স্টপ পাওয়া যায়নি' : 'No matching stops found'}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {lang === 'bn' 
                  ? 'বানান পরীক্ষা করুন বা কাছাকাছি অন্য স্টপ খুঁজুন' 
                  : 'Try typing a nearby junction or major terminus'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
