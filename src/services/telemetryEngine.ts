import { ActiveBusState, BusRoute, LocationReport, ReliabilityScore, FreshnessStatus, BusClimate, BusSector } from '../types/transit';
import { KOLKATA_ROUTES, SAMPLE_BUS_FLEET } from '../data/kolkataRoutes';
import { STOP_MAP } from '../data/kolkataStops';

export class TelemetryEngine {
  private busesState: Map<string, ActiveBusState> = new Map();
  private listeners: Set<(buses: ActiveBusState[]) => void> = new Set();
  private simulationTimer: number | null = null;

  constructor() {
    this.initInitialStates();
  }

  private getClimateForBus(isAC: boolean): BusClimate {
    if (isAC) {
      return {
        interiorTempC: 21.5,
        exteriorTempC: 30.5,
        humidityPercent: 52,
        acStatus: 'active_cooling',
        comfortDescriptionEn: 'AC Active • Chilled Interior',
        comfortDescriptionBn: 'এসি চালু • শীতল আরামদায়ক'
      };
    }
    return {
      interiorTempC: 29.5,
      exteriorTempC: 30.5,
      humidityPercent: 68,
      acStatus: 'ambient_fan',
      comfortDescriptionEn: 'Standard • Cross-ventilated',
      comfortDescriptionBn: 'সাধারণ • পর্যাপ্ত বাতাসযুক্ত'
    };
  }

  private initInitialStates() {
    const now = new Date();

    // 1. Government Live Bus: S-12 (WBTC - Kasba Depot - Driver: DRV-WBTC-101 Rajesh Das)
    this.busesState.set('bus-wb04-1842', {
      id: 'loc-1',
      tripId: 'trip-live-101',
      busId: 'bus-wb04-1842',
      registrationNumber: 'WB-04-H-1842',
      routeId: 'route-s12',
      routeNumber: 'S-12',
      operatorType: 'WBTC',
      sector: 'GOVERNMENT',
      isAC: false,
      direction: 'UP',
      latitude: 22.5867,
      longitude: 88.4187,
      bearing: 82,
      speedKmh: 34,
      accuracyMeters: 6,
      measuredTime: new Date(now.getTime() - 8 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 7 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'College More (Sector V)',
      nextStopNameBn: 'কলেজ মোড় (সেক্টর ৫)',
      destinationEn: 'New Town Ecospace',
      destinationBn: 'নিউ টাউন ইকোস্পেস',
      etaRange: '6–9 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 8s ago',
      freshnessLabelBn: 'লাইভ · ৮ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 96,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(false),
      driverId: 'DRV-WBTC-101',
      driverName: 'Rajesh Das',
      acceptsGovtPass: true
    });

    // 2. Government Live Bus: AC-9 (WBTC - Volvo AC - Driver: DRV-WBTC-102 Prabir Mukherjee)
    this.busesState.set('bus-wb02-9921', {
      id: 'loc-2',
      tripId: 'trip-live-102',
      busId: 'bus-wb02-9921',
      registrationNumber: 'WB-02-AK-9921',
      routeId: 'route-ac9',
      routeNumber: 'AC-9',
      operatorType: 'WBTC',
      sector: 'GOVERNMENT',
      isAC: true,
      direction: 'UP',
      latitude: 22.5404,
      longitude: 88.3962,
      bearing: 42,
      speedKmh: 28,
      accuracyMeters: 8,
      measuredTime: new Date(now.getTime() - 15 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 14 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Chingrighata Flyover',
      nextStopNameBn: 'চিংড়িঘাটা ফ্লাইওভার',
      destinationEn: 'Salt Lake Karunamoyee',
      destinationBn: 'সল্টলেক করুণাময়ী',
      etaRange: '10–14 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 15s ago',
      freshnessLabelBn: 'লাইভ · ১৫ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 94,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(true),
      driverId: 'DRV-WBTC-102',
      driverName: 'Prabir Mukherjee',
      acceptsGovtPass: true
    });

    // 3. Government Stale Bus: V-1 (WBTC Airport AC - Driver: DRV-WBTC-103 Anup Roy)
    this.busesState.set('bus-wb19-4530', {
      id: 'loc-3',
      tripId: 'trip-stale-103',
      busId: 'bus-wb19-4530',
      registrationNumber: 'WB-19-E-4530',
      routeId: 'route-v1',
      routeNumber: 'V-1',
      operatorType: 'WBTC',
      sector: 'GOVERNMENT',
      isAC: true,
      direction: 'UP',
      latitude: 22.6100,
      longitude: 88.4100,
      bearing: 35,
      speedKmh: 0,
      accuracyMeters: 25,
      measuredTime: new Date(now.getTime() - 240 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 238 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'VIP Road / Kaikhali',
      nextStopNameBn: 'ভিআইপি রোড / কৈখালী',
      destinationEn: 'Kolkata Airport',
      destinationBn: 'কলকাতা বিমানবন্দর',
      etaRange: '18–25 min',
      freshnessStatus: 'stale',
      freshnessLabelEn: 'Last seen 4m ago',
      freshnessLabelBn: '৪ মিনিট আগে দেখা গেছে',
      reliability: 'medium',
      reliabilityPercentage: 62,
      isOffRoute: false,
      isStale: true,
      climate: this.getClimateForBus(true),
      driverId: 'DRV-WBTC-103',
      driverName: 'Anup Roy',
      acceptsGovtPass: true
    });

    // 4. PRIVATE Syndicate Live Bus: 215A (Joint Council of Bus Syndicates - Driver: DRV-PVT-201 Tarak Naskar)
    this.busesState.set('bus-wb06-2041', {
      id: 'loc-4',
      tripId: 'trip-psg-104',
      busId: 'bus-wb06-2041',
      registrationNumber: 'WB-06-B-2041',
      routeId: 'route-215a',
      routeNumber: '215A',
      operatorType: 'PRIVATE',
      sector: 'PRIVATE',
      isAC: false,
      direction: 'UP',
      latitude: 22.5831,
      longitude: 88.3732,
      bearing: 88,
      speedKmh: 22,
      accuracyMeters: 10,
      measuredTime: new Date(now.getTime() - 12 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 11 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Ultadanga (Hudco)',
      nextStopNameBn: 'উল্টোডাঙা (হুডকো)',
      destinationEn: 'Salt Lake Sector V',
      destinationBn: 'সল্টলেক সেক্টর ৫',
      etaRange: '7–11 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 12s ago',
      freshnessLabelBn: 'লাইভ · ১২ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 91,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(false),
      driverId: 'DRV-PVT-201',
      driverName: 'Tarak Naskar',
      syndicateNameEn: 'Joint Council of Bus Syndicates',
      syndicateNameBn: 'জয়েন্ট কাউন্সিল অফ বাস সিন্ডিকেট',
      acceptsGovtPass: false
    });

    // 5. PRIVATE Syndicate Bus: 30B (Bengal Bus Syndicate - Conductor GPS: DRV-PVT-202 Swapan Ghoshal)
    this.busesState.set('bus-wb04-5510', {
      id: 'loc-6',
      tripId: 'trip-live-106',
      busId: 'bus-wb04-5510',
      registrationNumber: 'WB-04-C-5510',
      routeId: 'route-30b',
      routeNumber: '30B',
      operatorType: 'PRIVATE',
      sector: 'PRIVATE',
      isAC: false,
      direction: 'UP',
      latitude: 22.5852,
      longitude: 88.3592,
      bearing: 10,
      speedKmh: 18,
      accuracyMeters: 12,
      measuredTime: new Date(now.getTime() - 22 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 20 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Shyambazar 5-Point',
      nextStopNameBn: 'শ্যামবাজার পাঁচমাথার মোড়',
      destinationEn: 'Dum Dum Airport Gate 1',
      destinationBn: 'দমদম বিমানবন্দর ১ নং গেট',
      etaRange: '9–14 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · Conductor GPS 22s ago',
      freshnessLabelBn: 'লাইভ · কন্ডাক্টর জিপিএস ২২ সে. আগে',
      reliability: 'high',
      reliabilityPercentage: 88,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(false),
      driverId: 'DRV-PVT-202',
      driverName: 'Swapan Ghoshal',
      syndicateNameEn: 'Bengal Bus Syndicate',
      syndicateNameBn: 'বেঙ্গল বাস সিন্ডিকেট',
      acceptsGovtPass: false
    });

    // 6. PRIVATE Minibus: MB-8 (All Bengal Minibus Samity - Driver: DRV-MB-401 Gouranga Das)
    this.busesState.set('bus-wb07-3312', {
      id: 'loc-mb-109',
      tripId: 'trip-live-109',
      busId: 'bus-wb07-3312',
      registrationNumber: 'WB-07-G-3312',
      routeId: 'route-mb8',
      routeNumber: 'MB-8',
      operatorType: 'MINIBUS',
      sector: 'PRIVATE',
      isAC: false,
      direction: 'UP',
      latitude: 22.5186,
      longitude: 88.3653,
      bearing: 340,
      speedKmh: 31,
      accuracyMeters: 5,
      measuredTime: new Date(now.getTime() - 9 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 8 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Park Circus 7-Point',
      nextStopNameBn: 'পার্ক সার্কাস ৭-পয়েন্ট',
      destinationEn: 'Howrah Station',
      destinationBn: 'হাওড়া স্টেশন',
      etaRange: '6–10 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 9s ago',
      freshnessLabelBn: 'লাইভ · ৯ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 95,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(false),
      driverId: 'DRV-MB-401',
      driverName: 'Gouranga Das',
      syndicateNameEn: 'All Bengal Minibus Samity',
      syndicateNameBn: 'অল বেঙ্গল বাস ও মিনিবাস সমিতি',
      acceptsGovtPass: false
    });

    // 7. Government EB-1 (Barasat to Nabanna)
    this.busesState.set('bus-wb11-7788', {
      id: 'loc-7',
      tripId: 'trip-offroute-107',
      busId: 'bus-wb11-7788',
      registrationNumber: 'WB-11-D-7788',
      routeId: 'route-eb1',
      routeNumber: 'EB-1',
      operatorType: 'WBTC',
      sector: 'GOVERNMENT',
      isAC: true,
      direction: 'UP',
      latitude: 22.5600,
      longitude: 88.4200,
      bearing: 210,
      speedKmh: 24,
      accuracyMeters: 12,
      measuredTime: new Date(now.getTime() - 32 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 30 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Science City More',
      nextStopNameBn: 'সায়েন্স সিটি মোড়',
      destinationEn: 'Nabanna (State Secretariat)',
      destinationBn: 'নবান্ন (রাজ্য সচিবালয়)',
      etaRange: '22–30 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · 32s ago (Route deviation)',
      freshnessLabelBn: 'লাইভ · ৩২ সেকেন্ড আগে (রুট বিচ্যুতি)',
      reliability: 'medium',
      reliabilityPercentage: 55,
      isOffRoute: true,
      isStale: false,
      climate: this.getClimateForBus(true),
      driverId: 'DRV-WBTC-104',
      driverName: 'Bikash Paul',
      acceptsGovtPass: true
    });

    // 8. Government AC-43 (Howrah to Dakshineswar)
    this.busesState.set('bus-wb02-3344', {
      id: 'loc-8',
      tripId: 'trip-live-108',
      busId: 'bus-wb02-3344',
      registrationNumber: 'WB-02-AM-3344',
      routeId: 'route-ac43',
      routeNumber: 'AC-43',
      operatorType: 'WBTC',
      sector: 'GOVERNMENT',
      isAC: true,
      direction: 'UP',
      latitude: 22.6023,
      longitude: 88.3714,
      bearing: 15,
      speedKmh: 26,
      accuracyMeters: 5,
      measuredTime: new Date(now.getTime() - 12 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 11 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Dunlop Crossing',
      nextStopNameBn: 'ডানলপ মোড়',
      destinationEn: 'Dakshineswar Temple',
      destinationBn: 'দক্ষিণেশ্বর মন্দির',
      etaRange: '11–16 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 12s ago',
      freshnessLabelBn: 'লাইভ · ১২ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 92,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(true),
      driverId: 'DRV-WBTC-105',
      driverName: 'Arindam Banerjee',
      acceptsGovtPass: true
    });

    // 9. Calcutta Tramways Company (CTC): C-11 (Belgachia Depot to Domjur Stand)
    this.busesState.set('bus-wb04-c11', {
      id: 'loc-ctc-c11',
      tripId: 'trip-ctc-301',
      busId: 'bus-wb04-c11',
      registrationNumber: 'WB-04-H-1901',
      routeId: 'route_ctc_c_11_1',
      routeNumber: 'C-11',
      operatorType: 'CTC',
      sector: 'GOVERNMENT',
      isAC: false,
      direction: 'UP',
      latitude: 22.5830,
      longitude: 88.3550,
      bearing: 250,
      speedKmh: 24,
      accuracyMeters: 6,
      measuredTime: new Date(now.getTime() - 14 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 12 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Howrah Station / Brabourne',
      nextStopNameBn: 'হাওড়া স্টেশন / ব্র্যাবোর্ন',
      destinationEn: 'Domjur Stand (Howrah)',
      destinationBn: 'ডোমজুড় স্ট্যান্ড (হাওড়া)',
      etaRange: '15–22 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 14s ago',
      freshnessLabelBn: 'লাইভ · ১৪ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 93,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(false),
      driverId: 'DRV-CTC-301',
      driverName: 'Debabrata Sen',
      syndicateOrDepot: 'Belgachia Depot',
      acceptsGovtPass: true
    });

    // 10. Calcutta Tramways Company (CTC): T-AC-1 (Khidirpur Depot to Santragachi AC Express)
    this.busesState.set('bus-wb06-tac1', {
      id: 'loc-ctc-tac1',
      tripId: 'trip-ctc-303',
      busId: 'bus-wb06-tac1',
      registrationNumber: 'WB-06-B-8802',
      routeId: 'route_ctc_t_ac_1_12',
      routeNumber: 'T-AC-1',
      operatorType: 'CTC',
      sector: 'GOVERNMENT',
      isAC: true,
      direction: 'UP',
      latitude: 22.5510,
      longitude: 88.3380,
      bearing: 275,
      speedKmh: 34,
      accuracyMeters: 5,
      measuredTime: new Date(now.getTime() - 8 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 7 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'Vidyasagar Setu Toll Plaza',
      nextStopNameBn: 'বিদ্যাসাগর সেতু টোল প্লাজা',
      destinationEn: 'Santragachi Station',
      destinationBn: 'সাঁতরাগাছি স্টেশন',
      etaRange: '6–10 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 8s ago',
      freshnessLabelBn: 'লাইভ · ৮ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 96,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(true),
      driverId: 'DRV-CTC-303',
      driverName: 'Ashim Ghosh',
      syndicateOrDepot: 'Khidirpur Depot',
      acceptsGovtPass: true
    });

    // 11. Calcutta Tramways Company (CTC): C-23 (Park Circus to Dankuni)
    this.busesState.set('bus-wb02-c23', {
      id: 'loc-ctc-c23',
      tripId: 'trip-ctc-302',
      busId: 'bus-wb02-c23',
      registrationNumber: 'WB-02-AK-4412',
      routeId: 'route_ctc_c_23_10',
      routeNumber: 'C-23',
      operatorType: 'CTC',
      sector: 'GOVERNMENT',
      isAC: false,
      direction: 'UP',
      latitude: 22.5680,
      longitude: 88.4280,
      bearing: 40,
      speedKmh: 28,
      accuracyMeters: 7,
      measuredTime: new Date(now.getTime() - 18 * 1000).toISOString(),
      receivedTime: new Date(now.getTime() - 17 * 1000).toISOString(),
      source: 'driver_gps',
      isHistorical: false,
      nextStopNameEn: 'New Town Axis Bank / City Centre 2',
      nextStopNameBn: 'নিউ টাউন অ্যাক্সিস ব্যাংক / সিটি সেন্টার ২',
      destinationEn: 'Dankuni Junction',
      destinationBn: 'ডানকুনি জংশন',
      etaRange: '18–26 min',
      freshnessStatus: 'live',
      freshnessLabelEn: 'Live · updated 18s ago',
      freshnessLabelBn: 'লাইভ · ১৮ সেকেন্ড আগে আপডেট',
      reliability: 'high',
      reliabilityPercentage: 90,
      isOffRoute: false,
      isStale: false,
      climate: this.getClimateForBus(false),
      driverId: 'DRV-CTC-302',
      driverName: 'Somnath Roy',
      syndicateOrDepot: 'Park Circus Depot',
      acceptsGovtPass: true
    });
  }

  public startSimulation() {
    if (this.simulationTimer) return;

    this.simulationTimer = window.setInterval(() => {
      this.tickSimulation();
    }, 4000);
  }

  public stopSimulation() {
    if (this.simulationTimer) {
      clearInterval(this.simulationTimer);
      this.simulationTimer = null;
    }
  }

  private tickSimulation() {
    const now = new Date();

    this.busesState.forEach((bus) => {
      if (bus.freshnessStatus === 'live' && !bus.isOffRoute) {
        const route = KOLKATA_ROUTES.find(r => r.id === bus.routeId);
        if (route) {
          const jitterLat = (Math.random() - 0.48) * 0.0004;
          const jitterLon = (Math.random() - 0.48) * 0.0004;
          bus.latitude += jitterLat;
          bus.longitude += jitterLon;
          bus.measuredTime = new Date().toISOString();
          bus.receivedTime = new Date(Date.now() + 200).toISOString();
          bus.speedKmh = Math.floor(22 + Math.random() * 16);
          bus.freshnessLabelEn = 'Live · updated just now';
          bus.freshnessLabelBn = 'লাইভ · এইমাত্র আপডেট';
        }
      } else if (bus.freshnessStatus === 'stale') {
        const measured = new Date(bus.measuredTime).getTime();
        const diffMins = Math.floor((now.getTime() - measured) / 60000);
        bus.freshnessLabelEn = `Last seen ${diffMins}m ago`;
        bus.freshnessLabelBn = `${diffMins} মিনিট আগে দেখা গেছে`;
      }
    });

    this.notifyListeners();
  }

  public subscribe(callback: (buses: ActiveBusState[]) => void): () => void {
    this.listeners.add(callback);
    callback(this.getAllActiveBuses());
    return () => this.listeners.delete(callback);
  }

  private notifyListeners() {
    const list = this.getAllActiveBuses();
    this.listeners.forEach(cb => cb(list));
  }

  public getAllActiveBuses(): ActiveBusState[] {
    return Array.from(this.busesState.values());
  }

  public publishDriverLocation(
    report: LocationReport, 
    driverInfo?: { driverId: string; driverName: string; sector?: BusSector }
  ) {
    const now = new Date();
    const route = KOLKATA_ROUTES.find(r => r.id === report.routeId);
    const busFleet = SAMPLE_BUS_FLEET.find(b => b.id === report.busId);
    const isAC = busFleet?.isAC ?? false;
    const sector = driverInfo?.sector || busFleet?.sector || route?.sector || 'GOVERNMENT';

    const measuredDate = new Date(report.measuredTime);
    const ageSeconds = Math.floor((now.getTime() - measuredDate.getTime()) / 1000);
    const isStale = ageSeconds > 120;

    let freshnessStatus: FreshnessStatus = 'live';
    let labelEn = `Live · updated ${Math.max(1, ageSeconds)}s ago`;
    let labelBn = `লাইভ · ${Math.max(1, ageSeconds)} সেকেন্ড আগে আপডেট`;

    if (report.isHistorical) {
      freshnessStatus = 'stale';
      labelEn = `Delayed upload (Historical · ${Math.floor(ageSeconds / 60)}m old)`;
      labelBn = `দেরিতে আপলোড (ঐতিহাসিক · ${Math.floor(ageSeconds / 60)} মি. পুরনো)`;
    } else if (isStale) {
      freshnessStatus = 'stale';
      labelEn = `Last seen ${Math.floor(ageSeconds / 60)}m ago`;
      labelBn = `${Math.floor(ageSeconds / 60)} মিনিট আগে দেখা গেছে`;
    }

    const state: ActiveBusState = {
      ...report,
      registrationNumber: busFleet?.registrationNumber || 'WB-04-H-1842',
      routeNumber: route?.routeNumber || 'S-12',
      isAC,
      operatorType: busFleet?.operatorType || (sector === 'GOVERNMENT' ? 'WBTC' : 'PRIVATE'),
      sector,
      nextStopNameEn: 'Upcoming Kolkata Stop',
      nextStopNameBn: 'পরবর্তী বাস স্টপ',
      destinationEn: route?.directions[report.direction]?.destinationStopId ? (STOP_MAP.get(route.directions[report.direction].destinationStopId)?.nameEn || '') : '',
      destinationBn: route?.directions[report.direction]?.destinationStopId ? (STOP_MAP.get(route.directions[report.direction].destinationStopId)?.nameBn || '') : '',
      etaRange: '5–9 min',
      freshnessStatus,
      freshnessLabelEn: labelEn,
      freshnessLabelBn: labelBn,
      reliability: report.isHistorical ? 'uncertain' : (report.accuracyMeters < 15 ? 'high' : 'medium'),
      reliabilityPercentage: report.isHistorical ? 45 : (report.accuracyMeters < 15 ? 95 : 75),
      isOffRoute: false,
      isStale,
      climate: this.getClimateForBus(isAC),
      driverId: driverInfo?.driverId || 'DRV-WBTC-101',
      driverName: driverInfo?.driverName || 'Authorized Driver',
      syndicateNameEn: route?.syndicateNameEn,
      syndicateNameBn: route?.syndicateNameBn,
      acceptsGovtPass: route?.acceptsGovtPass ?? (sector === 'GOVERNMENT')
    };

    this.busesState.set(report.busId, state);
    this.notifyListeners();
  }

  public endDriverTrip(busId: string) {
    this.busesState.delete(busId);
    this.notifyListeners();
  }
}

export const telemetryEngine = new TelemetryEngine();
