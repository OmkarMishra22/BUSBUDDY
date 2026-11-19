import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'bn';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Roles
    app_name: 'BusBuddy Kolkata',
    tagline: 'Reliable Live Bus Tracking & Journey Planner',
    role_passenger: 'Passenger Mode',
    role_driver: 'Driver Console',
    role_operator: 'Operator Dashboard',
    
    // Connectivity
    online_status: 'Online',
    offline_status: 'Offline (Cached Data)',
    syncing_status: 'Syncing Queue...',
    offline_banner_title: 'You are currently offline',
    offline_banner_desc: 'Showing cached routes and last-known bus positions. A fully offline device cannot send or receive live location updates.',
    
    // Journey Planner
    journey_planner_title: 'Plan Your Kolkata Commute',
    from_placeholder: 'From: e.g. Howrah Station, Sealdah, Gariahat...',
    to_placeholder: 'To: e.g. Sector V, Airport, Karunamoyee...',
    search_bus_placeholder: 'Search bus no. (e.g. S-12, AC-9, 215A) or stop...',
    find_routes_btn: 'Find Routes',
    reset_search: 'Clear',
    popular_places: 'Popular Hubs',
    filter_all: 'All Routes',
    filter_live_only: 'Live Buses Only',
    filter_ac_only: 'AC Buses',
    filter_favorites: 'Favourites',
    
    // Route Card & Details
    arrival_est_label: 'Estimated Arrival',
    arrival_disclaimer: 'Ranges account for Kolkata road traffic and signals.',
    fare_label: 'Fare',
    frequency_label: 'Frequency',
    first_last_bus: 'Operating Hours',
    direction_up: 'Up Direction',
    direction_down: 'Down Direction',
    view_stops: 'View All Stops',
    hide_stops: 'Hide Stops',
    track_on_map: 'Track on Map',
    save_fav: 'Save Favourite',
    remove_fav: 'Bookmarked',
    source_driver: 'Driver location',
    source_passenger: 'Passenger report',
    source_timetable: 'Scheduled timetable',
    
    // Freshness & Confidence
    confidence_high: 'High Confidence (Direct GPS)',
    confidence_med: 'Moderate Confidence',
    confidence_low: 'Uncertain / Low Confidence',
    badge_demo: 'Pilot / Demo Feed',
    
    // View mode
    view_map: 'Interactive Map',
    view_list: 'Accessible List',
    
    // Driver Mode
    driver_title: 'Driver Trip Console',
    driver_subtitle: 'Share real-time GPS telemetry during your authorized trip',
    driver_select_bus: 'Select Assigned Bus',
    driver_select_route: 'Select Route',
    driver_select_direction: 'Select Direction',
    driver_start_trip: 'Start Trip',
    driver_end_trip: 'End Trip',
    driver_sharing_active: 'LOCATION SHARING ACTIVE',
    driver_sharing_inactive: 'TRIP INACTIVE',
    driver_privacy_notice: 'Privacy Guarantee: GPS location is shared ONLY while your trip is actively running. Tracking terminates immediately when you tap "End Trip". Silent background tracking is strictly disabled.',
    driver_speed: 'Speed',
    driver_pings_sent: 'Live Pings',
    driver_queued_offline: 'Offline Points Queued',
    driver_trip_duration: 'Trip Duration',
    driver_next_stop: 'Next Stop',
    
    // Operator Mode
    op_title: 'Transport Operator Control Center',
    op_active_trips: 'Active Trips',
    op_total_fleet: 'Monitored Fleet',
    op_stale_alerts: 'Stale Updates (>2m)',
    op_offroute_alerts: 'Off-Route Buses',
    op_fleet_table: 'Real-time Fleet Overview',
    op_reg_no: 'Reg No.',
    op_route: 'Route',
    op_driver: 'Driver',
    op_speed: 'Speed',
    op_freshness: 'Freshness',
    op_status: 'Status',
    op_add_route: 'Add / Edit Route',
    op_add_stop: 'Add / Edit Stop',
    op_audit_log: 'System Alert Feed',
    
    // Modals & General
    close: 'Close',
    save: 'Save Changes',
    cancel: 'Cancel',
    success_toast: 'Action completed successfully'
  },
  bn: {
    // Brand & Roles
    app_name: 'বাসবাডি কলকাতা',
    tagline: 'নির্ভরযোগ্য লাইভ বাস ট্র্যাকিং ও যাত্রা পরিকল্পনা',
    role_passenger: 'যাত্রী মোড',
    role_driver: 'চালক কনসোল',
    role_operator: 'অপারেটর ড্যাশবোর্ড',
    
    // Connectivity
    online_status: 'অনলাইন',
    offline_status: 'অফলাইন (ক্যাশড তথ্য)',
    syncing_status: 'সিঙ্ক হচ্ছে...',
    offline_banner_title: 'আপনি বর্তমানে অফলাইনে আছেন',
    offline_banner_desc: 'ক্যাশ করা রুট এবং শেষ পরিচিত বাসের অবস্থান প্রদর্শিত হচ্ছে। সম্পূর্ণ অফলাইন ডিভাইস থেকে লাইভ অবস্থান পাঠানো বা গ্রহণ করা সম্ভব নয়।',
    
    // Journey Planner
    journey_planner_title: 'আপনার কলকাতা যাত্রা পরিকল্পনা করুন',
    from_placeholder: 'কোথা থেকে: যেমন হাওড়া স্টেশন, শিয়ালদহ, গড়িয়াহাট...',
    to_placeholder: 'কোথায় যাবেন: যেমন সেক্টর ৫, বিমানবন্দর, করুণাময়ী...',
    search_bus_placeholder: 'বাস নম্বর (যেমন S-12, AC-9, 215A) বা স্টপ খুঁজুন...',
    find_routes_btn: 'রুট খুঁজুন',
    reset_search: 'মুছুন',
    popular_places: 'জনপ্রিয় টার্মিনাস',
    filter_all: 'সকল রুট',
    filter_live_only: 'শুধু লাইভ বাস',
    filter_ac_only: 'এসি বাস',
    filter_favorites: 'প্রিয় রুট',
    
    // Route Card & Details
    arrival_est_label: 'আনুমানিক আগমন',
    arrival_disclaimer: 'কলকাতার ট্রাফিক জ্যাম ও সিগন্যাল বিবেচনা করে রেঞ্জ নির্দেশিত।',
    fare_label: 'ভাড়া',
    frequency_label: 'ব্যবধান',
    first_last_bus: 'পরিষেবার সময়',
    direction_up: 'আপ অভিমুখ',
    direction_down: 'ডাউন অভিমুখ',
    view_stops: 'সকল স্টপ দেখুন',
    hide_stops: 'স্টপ লুকান',
    track_on_map: 'ম্যাপে দেখুন',
    save_fav: 'সংরক্ষণ করুন',
    remove_fav: 'সংরক্ষিত',
    source_driver: 'চালকের জিপিএস লোকেশন',
    source_passenger: 'যাত্রী রিপোর্ট',
    source_timetable: 'সময়সূচি অনুযায়ী',
    
    // Freshness & Confidence
    confidence_high: 'উচ্চ বিশ্বস্ততা (সরাসরি জিপিএস)',
    confidence_med: 'মাঝারি বিশ্বস্ততা',
    confidence_low: 'অনির্দিষ্ট / কম বিশ্বস্ততা',
    badge_demo: 'পাইলট / ডেমো ফিড',
    
    // View mode
    view_map: 'ইন্টারেক্টিভ ম্যাপ',
    view_list: 'অ্যাক্সেসিবল তালিকা',
    
    // Driver Mode
    driver_title: 'চালক ট্রিপ কনসোল',
    driver_subtitle: 'আপনার অনুমোদিত ট্রিপ চলাকালীন রিয়েল-টাইম জিপিএস শেয়ার করুন',
    driver_select_bus: 'বরাদ্দকৃত বাস নির্বাচন করুন',
    driver_select_route: 'রুট নির্বাচন করুন',
    driver_select_direction: 'অভিমুখ নির্বাচন করুন',
    driver_start_trip: 'যাত্রা শুরু করুন',
    driver_end_trip: 'যাত্রা সমাপ্ত করুন',
    driver_sharing_active: 'লাইভ লোকেশন শেয়ারিং সক্রিয়',
    driver_sharing_inactive: 'ট্রিপ নিষ্ক্রিয়',
    driver_privacy_notice: 'গোপনীয়তা নিশ্চয়তা: আপনার ট্রিপ চলাকালীন কেবল জিপিএস অবস্থান শেয়ার করা হয়। "যাত্রা সমাপ্ত করুন" চাপার সাথে সাথেই ট্র্যাকিং বন্ধ হয়ে যায়। ব্যাকগ্রাউন্ডে ট্র্যাকিং সম্পূর্ণরূপে নিষিদ্ধ।',
    driver_speed: 'গতিবেগ',
    driver_pings_sent: 'লাইভ পিং',
    driver_queued_offline: 'অফলাইন কিউ ডাটা',
    driver_trip_duration: 'যাত্রার সময়',
    driver_next_stop: 'পরবর্তী স্টপ',
    
    // Operator Mode
    op_title: 'পরিবহন অপারেটর নিয়ন্ত্রণ কেন্দ্র',
    op_active_trips: 'সক্রিয় ট্রিপ',
    op_total_fleet: 'মোট বাস',
    op_stale_alerts: 'বিলম্বিত আপডেট (>২ মি.)',
    op_offroute_alerts: 'রুটচ্যুত বাস',
    op_fleet_table: 'রিয়েল-টাইম বহর পরিস্থিতি',
    op_reg_no: 'রেজিস্ট্রেশন নং',
    op_route: 'রুট',
    op_driver: 'চালক',
    op_speed: 'গতি',
    op_freshness: 'আপডেট সময়',
    op_status: 'অবস্থা',
    op_add_route: 'নতুন রুট যোগ/সম্পাদনা',
    op_add_stop: 'নতুন স্টপ যোগ/সম্পাদনা',
    op_audit_log: 'সিস্টেম এলার্ট ফিড',
    
    // Modals & General
    close: 'বন্ধ করুন',
    save: 'সংরক্ষণ করুন',
    cancel: 'বাতিল',
    success_toast: 'সফলভাবে সম্পন্ন হয়েছে'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('bb_preferred_lang');
    return saved === 'bn' ? 'bn' : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('bb_preferred_lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
