import { BusRoute, ActiveBusState } from '../types/transit';

export interface TimetableSlot {
  timeStr: string;          // e.g. "08:15 AM"
  departureMinutes: number; // minutes from midnight (e.g. 495)
  status: 'departed' | 'next' | 'upcoming';
  minutesUntil: number;     // e.g. 4 or -15
  busPlate?: string;        // e.g. "WB04-1842"
  driverId?: string;        // e.g. "DRV-WBTC-101"
  isLive: boolean;          // true if associated with a live active bus
  isAC: boolean;
}

export interface StopArrivalPrediction {
  stopNameEn: string;
  stopNameBn: string;
  sequence: number;
  distanceKm: number;
  scheduledTimeStr: string;
  minutesFromStart: number;
}

/**
 * Parses time string like "05:30 AM" or "09:45 PM" into minutes from midnight (0..1439)
 */
export function parseTimeToMinutes(timeStr: string): number {
  const match = timeStr.trim().match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (!match) return 8 * 60; // default 08:00 AM
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridiem = match[3]?.toUpperCase();

  if (meridiem === 'PM' && hours < 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

/**
 * Formats minutes from midnight into "HH:MM AM/PM"
 */
export function formatMinutesToTime(totalMinutes: number): string {
  const norm = ((totalMinutes % 1440) + 1440) % 1440;
  let hours = Math.floor(norm / 60);
  const minutes = norm % 60;
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const padMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const padHr = hours < 10 ? `0${hours}` : `${hours}`;
  return `${padHr}:${padMin} ${meridiem}`;
}

/**
 * Generates full day schedule for a route based on firstBus, lastBus and frequency
 */
export function generateRouteTimetable(
  route: BusRoute,
  activeBusesOnRoute: ActiveBusState[] = []
): {
  slots: TimetableSlot[];
  nextBusSlot: TimetableSlot | null;
  totalDepartures: number;
  stopArrivals: StopArrivalPrediction[];
} {
  const startMin = parseTimeToMinutes(route.firstBus || '05:30 AM');
  const endMin = parseTimeToMinutes(route.lastBus || '09:45 PM');
  const freq = Math.max(route.frequencyMinutes || 12, 6);

  // Get current simulated/real minutes from midnight
  const now = new Date();
  const currentMin = now.getHours() * 60 + now.getMinutes();

  const slots: TimetableSlot[] = [];
  let nextBusSlot: TimetableSlot | null = null;

  // Active buses for assignment
  const liveBuses = activeBusesOnRoute.filter(b => b.freshnessStatus === 'live');

  for (let m = startMin; m <= endMin; m += freq) {
    const diff = m - currentMin;
    let status: 'departed' | 'next' | 'upcoming';

    if (diff < -5) {
      status = 'departed';
    } else if (diff >= -5 && !nextBusSlot) {
      status = 'next';
    } else {
      status = 'upcoming';
    }

    // Determine whether this particular departure slot is AC or Non-AC:
    // If route is explicitly AC (e.g. AC-9, AC-12, VS-1, isAC=true): all slots are AC.
    // If route is a government corridor (WBTC/CSTC): alternate between Non-AC and AC electric/Volvo runs
    // Otherwise standard Non-AC
    const slotIndex = Math.floor((m - startMin) / freq);
    let slotIsAC = route.isAC;
    if (!slotIsAC && route.sector === 'GOVERNMENT' && !route.routeNumber.startsWith('T-')) {
      // Alternating mixed services on WBTC corridors: every 2nd departure is AC
      if (slotIndex % 2 === 1) {
        slotIsAC = true;
      }
    }

    // Vehicle & Driver assignment
    let busPlate = undefined;
    let driverId = undefined;
    let isLive = false;

    if (status === 'next' && liveBuses.length > 0) {
      busPlate = liveBuses[0].busId.replace('bus-', '').toUpperCase();
      driverId = liveBuses[0].driverId;
      isLive = true;
    } else if (status === 'upcoming' && (m - currentMin) < 30 && liveBuses.length > 1) {
      busPlate = liveBuses[1].busId.replace('bus-', '').toUpperCase();
      driverId = liveBuses[1].driverId;
      isLive = true;
    } else {
      // Deterministic plate generation based on route & slot
      const rCode = route.routeNumber.replace(/[^A-Za-z0-9]/g, '');
      const seed = (m * 17) % 9000 + 1000;
      busPlate = `WB-${slotIsAC ? '06' : '04'}-${rCode.slice(0, 2)}-${seed}`;
    }

    const slot: TimetableSlot = {
      timeStr: formatMinutesToTime(m),
      departureMinutes: m,
      status,
      minutesUntil: diff,
      busPlate,
      driverId,
      isLive,
      isAC: slotIsAC
    };

    if (status === 'next' && !nextBusSlot) {
      nextBusSlot = slot;
    }

    slots.push(slot);
  }

  // Fallback if late night: next slot is tomorrow's first bus
  if (!nextBusSlot && slots.length > 0) {
    nextBusSlot = {
      ...slots[0],
      status: 'upcoming',
      minutesUntil: (1440 - currentMin) + startMin
    };
  }

  // Generate intermediate stop arrival times for the next bus
  const refMin = nextBusSlot ? Math.max(nextBusSlot.departureMinutes, currentMin) : currentMin;
  const dirStops = route.directions.UP.stops || [];
  const stopArrivals: StopArrivalPrediction[] = dirStops.map((st, idx) => {
    const minFromStart = st.scheduledMinutesFromStart || (idx * 5);
    const stopTime = formatMinutesToTime(refMin + minFromStart);
    return {
      stopNameEn: st.stopId.replace('stop-', '').replace(/-/g, ' ').toUpperCase(),
      stopNameBn: st.stopId.replace('stop-', '').replace(/-/g, ' '),
      sequence: st.sequence,
      distanceKm: st.distanceFromStartKm || (idx * 1.8),
      scheduledTimeStr: stopTime,
      minutesFromStart: minFromStart
    };
  });

  return {
    slots,
    nextBusSlot,
    totalDepartures: slots.length,
    stopArrivals
  };
}
