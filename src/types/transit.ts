export type UserRole = 'passenger' | 'driver' | 'operator';

export type BusSector = 'GOVERNMENT' | 'PRIVATE';

export type OperatorType = 'WBTC' | 'CSTC' | 'CTC' | 'PRIVATE' | 'MINIBUS';

export interface Agency {
  id: string;
  nameEn: string;
  nameBn: string;
  code: OperatorType;
  sector: BusSector;
  helpline: string;
  descriptionEn: string;
  descriptionBn: string;
}

export interface BusStop {
  id: string;
  nameEn: string;
  nameBn: string;
  latitude: number;
  longitude: number;
  landmarkEn: string;
  landmarkBn: string;
  isTerminal?: boolean;
}

export interface RouteStop {
  stopId: string;
  sequence: number;
  distanceFromStartKm: number;
  scheduledMinutesFromStart: number;
}

export interface RouteDirection {
  directionId: 'UP' | 'DOWN';
  directionNameEn: string;
  directionNameBn: string;
  originStopId: string;
  destinationStopId: string;
  stops: RouteStop[];
  pathCoordinates: [number, number][]; // [longitude, latitude] for GeoJSON LineString
}

export interface BusRoute {
  id: string;
  routeNumber: string;
  nameEn: string;
  nameBn: string;
  operatorId: string;
  operatorType: OperatorType;
  sector: BusSector; // Crucial: GOVERNMENT vs PRIVATE
  isAC: boolean;
  color: string;
  fareMin: number;
  fareMax: number;
  frequencyMinutes: number;
  firstBus: string;
  lastBus: string;
  viaEn: string;
  viaBn: string;
  syndicateNameEn?: string;
  syndicateNameBn?: string;
  permitNumber?: string;
  acceptsGovtPass: boolean;
  paymentModes: ('cash' | 'upi' | 'smart_card' | 'govt_pass')[];
  classification?: string;
  allStopsList?: string[];
  stopCount?: number;
  directions: {
    UP: RouteDirection;
    DOWN: RouteDirection;
  };
}

export interface BusVehicle {
  id: string;
  registrationNumber: string;
  routeId: string;
  operatorType: OperatorType;
  sector: BusSector;
  model: string;
  isAC: boolean;
  syndicateOrDepot: string;
  busBodyType: 'standard_city' | 'low_floor_ac' | 'minibus' | 'electric_city';
  permitNumber?: string;
  assignedDriverName?: string;
  assignedDriverId?: string;
}

export interface BusClimate {
  interiorTempC: number;
  exteriorTempC: number;
  humidityPercent: number;
  acStatus: 'active_cooling' | 'ambient_fan' | 'off';
  comfortDescriptionEn: string;
  comfortDescriptionBn: string;
}

export interface KolkataWeather {
  temperatureC: number;
  conditionEn: string;
  conditionBn: string;
  humidity: number;
  feelsLikeC: number;
  lastUpdated: string;
}

export interface RegisteredDriver {
  id: string; // Internal UUID
  driverId: string; // Designated official ID e.g. "DRV-WBTC-101" or "DRV-SYND-201"
  sector: BusSector; // 'GOVERNMENT' or 'PRIVATE'
  roleInBus: 'driver' | 'conductor'; // Private buses often track conductor phone!
  nameEn: string;
  nameBn: string;
  phone: string;
  licenseNumber: string;
  pin: string; // 4-digit security PIN
  assignedDepot: string; // Depot for Govt, Syndicate/Stand for Private
  assignedBusId: string;
  assignedRouteId: string;
  status: 'active' | 'suspended' | 'off_duty';
  registeredAt: string;
  registeredByAdmin: string;
  busOwnerName?: string;
  permitNumber?: string;
}

export type UpdateSource = 'driver_gps' | 'passenger_report' | 'timetable_estimate';

export type ReliabilityScore = 'high' | 'medium' | 'low' | 'uncertain';

export type FreshnessStatus = 'live' | 'stale' | 'none';

export interface LocationReport {
  id: string;
  tripId: string;
  busId: string;
  routeId: string;
  direction: 'UP' | 'DOWN';
  latitude: number;
  longitude: number;
  bearing: number;
  speedKmh: number;
  accuracyMeters: number;
  measuredTime: string; // ISO String (when recorded on GPS)
  receivedTime: string; // ISO String (when received on server)
  source: UpdateSource;
  isHistorical: boolean;
}

export interface ActiveBusState extends LocationReport {
  registrationNumber: string;
  routeNumber: string;
  isAC: boolean;
  operatorType: OperatorType;
  sector: BusSector;
  nextStopNameEn: string;
  nextStopNameBn: string;
  destinationEn: string;
  destinationBn: string;
  etaRange: string; // e.g. "7–12 min"
  freshnessStatus: FreshnessStatus;
  freshnessLabelEn: string; // e.g. "Live · updated 8s ago"
  freshnessLabelBn: string;
  reliability: ReliabilityScore;
  reliabilityPercentage: number;
  isOffRoute: boolean;
  isStale: boolean;
  climate: BusClimate;
  driverId?: string;
  driverName?: string;
  syndicateNameEn?: string;
  syndicateNameBn?: string;
  syndicateOrDepot?: string;
  permitNumber?: string;
  model?: string;
  acceptsGovtPass?: boolean;
}

export interface DriverTripSession {
  tripId: string;
  busId: string;
  registrationNumber: string;
  routeId: string;
  routeNumber: string;
  sector: BusSector;
  direction: 'UP' | 'DOWN';
  driverName: string;
  driverId: string; // Designated official Driver ID
  startTime: string;
  endTime?: string;
  isActive: boolean;
  pointsRecorded: number;
  queuedPointsCount: number;
  lastPingTime?: string;
  currentSpeedKmh: number;
  interiorTempC: number;
}

export interface QueuedLocationPoint {
  id: string;
  tripId: string;
  busId: string;
  latitude: number;
  longitude: number;
  bearing: number;
  speedKmh: number;
  accuracyMeters: number;
  measuredTime: string;
  queuedAt: string;
}

export interface PilotMetrics {
  totalBuses: number;
  govtBusesCount: number;
  privateBusesCount: number;
  activeTrips: number;
  liveReportingCount: number;
  staleReportingCount: number;
  offRouteCount: number;
  averageFreshnessSeconds: number;
  totalPassengersHelpedToday: number;
}
