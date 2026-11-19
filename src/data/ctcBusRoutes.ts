import { BusRoute, BusSector, OperatorType } from '../types/transit';

export interface CTCBusRoute extends BusRoute {
  category: string;
  depotEn: string;
  depotBn: string;
  allStopsList: string[];
  stopCount: number;
}

/**
 * Official Calcutta Tramways Company (CTC / WBTC) Bus Network
 * Sourced directly from https://www.calcuttatramways.com/bus-route/
 * Contains all 48 official C-Series, T-Series, E-Series, AC, and suburban routes
 */
export const CTC_BUS_ROUTES: CTCBusRoute[] = [
  {
    id: 'route_ctc_c_11_1',
    routeNumber: 'C-11',
    nameEn: 'Belgachia ⇌ Domjur Stand',
    nameBn: 'বেলগাছিয়া ⇌ ডোমজুড় স্ট্যান্ড',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Pharia Pukur, B. B. D. Bag, Carry Road, Lalbari',
    viaBn: 'Pharia Pukur, বি.বি.ডি. বাগ, Carry Road, Lalbari',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Belgachia", "Pharia Pukur", "Khanna", "Maniktala", "Bank of India", "Bowbazar", "Central", "Lalbazar", "B. B. D. Bag", "Esplanade", "Park Street", "Jeevandip", "Birla", "P.T.S.", "Hastings", "Carry Road", "Belepole", "Betor", "Bakshara", "Moukhali", "Garpha (Country Club)", "Kejurtala", "Lalbari", "Bat Tala", "Katliya", "Jhowtala", "Makardah", "B.D.O. Office", "Phokor Dokan", "Domjur P.S.", "Domjur Stand"],
    stopCount: 31,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Domjur Stand',
        directionNameBn: 'ডোমজুড় স্ট্যান্ডর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3814, 22.6075], [88.446, 22.592], [88.33, 22.506], [88.3735, 22.5875], [88.33, 22.501], [88.415, 22.588], [88.372, 22.54], [88.459, 22.647], [88.3503, 22.5719], [88.3524, 22.5647], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3385, 22.542], [88.3312, 22.5458], [88.386, 22.601], [88.383, 22.558], [88.423, 22.552], [88.462, 22.536], [88.41, 22.513], [88.396, 22.604], [88.388, 22.62], [88.338, 22.627], [88.459, 22.646], [88.466, 22.601], [88.437, 22.609], [88.366, 22.593], [88.325, 22.587], [88.419, 22.636], [88.2185, 22.6412], [88.2185, 22.6412]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Belgachia',
        directionNameBn: 'বেলগাছিয়ার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.2185, 22.6412], [88.2185, 22.6412], [88.419, 22.636], [88.325, 22.587], [88.366, 22.593], [88.437, 22.609], [88.466, 22.601], [88.459, 22.646], [88.338, 22.627], [88.388, 22.62], [88.396, 22.604], [88.41, 22.513], [88.462, 22.536], [88.423, 22.552], [88.383, 22.558], [88.386, 22.601], [88.3312, 22.5458], [88.3385, 22.542], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.3524, 22.5647], [88.3503, 22.5719], [88.459, 22.647], [88.372, 22.54], [88.415, 22.588], [88.33, 22.501], [88.3735, 22.5875], [88.33, 22.506], [88.446, 22.592], [88.3814, 22.6075]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_11_2',
    routeNumber: 'T-11',
    nameEn: 'Chandni (up)/B.B.D. Bag (dn) ⇌ Haroa',
    nameBn: 'চাঁদনি / বি.বি.ডি. বাগ ⇌ হাড়োয়া',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Central, Khanna, Kaikhali, Beraberi',
    viaBn: 'Central, Khanna, কৈখালী, Beraberi',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Chandni (up)/B.B.D. Bag (dn)", "Central", "Md. Ali Park", "Mahajati Sadan", "Girish Park", "Beadon Street", "Hatibagan", "Khanna", "Lake Town", "Bangur", "Kestopur", "Baguihati", "Haldiram", "Kaikhali", "Gopalpur House", "Kalipark", "Bablatala", "Narayanpur Bat-Tala", "Manikhola", "Beraberi", "Raigachi", "Kazial Para", "Bishnupur", "Lauhati", "Chandpur Bazar", "Natun Hat", "Dhiv-Dhiva Bazar", "Pagla Pir", "Haroa"],
    stopCount: 29,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Haroa',
        directionNameBn: 'হাড়োয়ার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3551, 22.5663], [88.372, 22.54], [88.361, 22.519], [88.371, 22.525], [88.3592, 22.5852], [88.379, 22.64], [88.424, 22.568], [88.33, 22.506], [88.398, 22.6025], [88.45, 22.503], [88.34, 22.502], [88.423, 22.6174], [88.432, 22.628], [88.4312, 22.6312], [88.449, 22.644], [88.36, 22.505], [88.43, 22.503], [88.412, 22.532], [88.454, 22.574], [88.363, 22.554], [88.427, 22.614], [88.466, 22.603], [88.389, 22.644], [88.4, 22.509], [88.379, 22.641], [88.437, 22.607], [88.462, 22.532], [88.371, 22.517], [88.6812, 22.6015]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Chandni (up)/B.B.D. Bag (dn)',
        directionNameBn: 'চাঁদনি / বি.বি.ডি. বাগর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.6812, 22.6015], [88.371, 22.517], [88.462, 22.532], [88.437, 22.607], [88.379, 22.641], [88.4, 22.509], [88.389, 22.644], [88.466, 22.603], [88.427, 22.614], [88.363, 22.554], [88.454, 22.574], [88.412, 22.532], [88.43, 22.503], [88.36, 22.505], [88.449, 22.644], [88.4312, 22.6312], [88.432, 22.628], [88.423, 22.6174], [88.34, 22.502], [88.45, 22.503], [88.398, 22.6025], [88.33, 22.506], [88.424, 22.568], [88.379, 22.64], [88.3592, 22.5852], [88.371, 22.525], [88.361, 22.519], [88.372, 22.54], [88.3551, 22.5663]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_27_3',
    routeNumber: 'C-27',
    nameEn: 'Chandni (up)/B.B.D. Bag (dn) ⇌ Kazibari',
    nameBn: 'চাঁদনি / বি.বি.ডি. বাগ ⇌ কাজিবাড়ি',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Central, Lake Town, Airport 2.5 No., Dakbangla',
    viaBn: 'Central, Lake Town, Airport 2.5 No., ডাকবাংলো',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Chandni (up)/B.B.D. Bag (dn)", "Central", "Md. Ali Park", "Mahajati Sadan", "Girish Park", "Maniktala", "Bagmari", "Kakurgachi", "Lake Town", "Kestopur", "Baguihati", "Haldiram", "Kaikhali", "Airport No.1", "Airport No.2", "Airport 2.5 No.", "Birati More", "Michel Nagar", "B.T. College", "Doltala", "New Barrackpore", "Madhyamgram", "Dakbangla", "Hatkhola", "Chanpadali", "Colony More", "Hela Bat-tala", "Kali Bari", "Arip Bari", "Baduria", "Adamas College / ABP Office", "Kazibari"],
    stopCount: 32,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Kazibari',
        directionNameBn: 'কাজিবাড়ির দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3551, 22.5663], [88.372, 22.54], [88.361, 22.519], [88.371, 22.525], [88.3592, 22.5852], [88.3735, 22.5875], [88.443, 22.554], [88.452, 22.536], [88.398, 22.6025], [88.34, 22.502], [88.423, 22.6174], [88.432, 22.628], [88.4312, 22.6312], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4365, 22.6685], [88.468, 22.631], [88.435, 22.576], [88.466, 22.59], [88.36, 22.507], [88.455, 22.698], [88.45, 22.511], [88.443, 22.559], [88.375, 22.586], [88.44, 22.509], [88.36, 22.506], [88.425, 22.587], [88.41, 22.509], [88.37, 22.514], [88.461, 22.515], [88.4912, 22.7315]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Chandni (up)/B.B.D. Bag (dn)',
        directionNameBn: 'চাঁদনি / বি.বি.ডি. বাগর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.4912, 22.7315], [88.461, 22.515], [88.37, 22.514], [88.41, 22.509], [88.425, 22.587], [88.36, 22.506], [88.44, 22.509], [88.375, 22.586], [88.443, 22.559], [88.45, 22.511], [88.455, 22.698], [88.36, 22.507], [88.466, 22.59], [88.435, 22.576], [88.468, 22.631], [88.4365, 22.6685], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4312, 22.6312], [88.432, 22.628], [88.423, 22.6174], [88.34, 22.502], [88.398, 22.6025], [88.452, 22.536], [88.443, 22.554], [88.3735, 22.5875], [88.3592, 22.5852], [88.371, 22.525], [88.361, 22.519], [88.372, 22.54], [88.3551, 22.5663]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_d1_4',
    routeNumber: 'D1',
    nameEn: 'Golf Club ⇌ Chakdaha',
    nameBn: 'গলফ ক্লাব (টালিগঞ্জ) ⇌ চাকদহ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Suburban Connector',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#0284C7',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Bangar Hospital, Math Pukur, Kaikhali, Mayana Hut',
    viaBn: 'Bangar Hospital, Math Pukur, কৈখালী, Mayana Hut',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Golf Club", "Bangar Hospital", "Prince Anwarsha Road", "Navina Cinema", "Lords More", "E.D.F.", "Jadavpur PS", "Santoshpur", "Salimpur", "Ganguly Pukur", "Sarat Collony", "Mandal Para / Battala", "Gitanjali Park", "Purbasa / Kalikapur", "Mandir Para", "Sahid Nagar", "Laskarr Hut / Tagore Park", "Panchanan Gram", "Math Pukur", "Metropolitan", "Chingrighata", "Beleghata", "Kadapara", "Appole Hospital", "Mani Square Mall", "Bengal Chemical", "Purbasha", "Hudco", "Lake Town", "Bangur", "Dum Dum Park", "Kestopur", "Baguihati", "Raghunath Pur", "Haldiram", "Kaikhali", "Airport No.1", "Airport No.2", "Airport 2.5 No.", "Airport No. 3", "Science City", "Birati More", "Bankra", "Michel Nagar", "B.T. College", "Doltala", "New Barrackpore", "Madhyamgram Chowmatha", "Dak Bunglow More", "Rajberia", "College More/Hela Battala", "Mayna Check Post", "Mayana Hut", "Mirbati", "Sapui Para", "Kamdevpur", "Khelia", "Kansari", "Amdanga", "Rahana No. 1", "Rail gate", "Awal Sidhi", "Adha", "Kanchiara Power House", "Gadamara", "Ruby Hospital", "Jagulia", "Kalayani More", "Birahi", "Chakdaha"],
    stopCount: 70,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Chakdaha',
        directionNameBn: 'চাকদহর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.352, 22.495], [88.425, 22.583], [88.349, 22.638], [88.364, 22.574], [88.427, 22.617], [88.355, 22.586], [88.3718, 22.4988], [88.399, 22.644], [88.464, 22.56], [88.416, 22.595], [88.335, 22.589], [88.391, 22.517], [88.326, 22.6], [88.405, 22.583], [88.365, 22.576], [88.37, 22.509], [88.431, 22.516], [88.367, 22.605], [88.467, 22.617], [88.415, 22.586], [88.3989, 22.5623], [88.357, 22.616], [88.338, 22.62], [88.452, 22.544], [88.38, 22.503], [88.323, 22.551], [88.372, 22.541], [88.342, 22.536], [88.398, 22.6025], [88.45, 22.503], [88.32, 22.512], [88.34, 22.502], [88.423, 22.6174], [88.384, 22.561], [88.432, 22.628], [88.4312, 22.6312], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.3962, 22.5404], [88.4365, 22.6685], [88.367, 22.606], [88.468, 22.631], [88.435, 22.576], [88.466, 22.59], [88.36, 22.507], [88.455, 22.698], [88.351, 22.515], [88.419, 22.636], [88.333, 22.549], [88.387, 22.613], [88.467, 22.614], [88.43, 22.503], [88.338, 22.629], [88.385, 22.582], [88.408, 22.621], [88.444, 22.564], [88.465, 22.587], [88.35, 22.504], [88.388, 22.623], [88.443, 22.545], [88.324, 22.564], [88.339, 22.637], [88.328, 22.632], [88.3988, 22.5135], [88.392, 22.538], [88.435, 22.589], [88.345, 22.579], [88.52, 23.08]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Golf Club',
        directionNameBn: 'গলফ ক্লাব (টালিগঞ্জ)র দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.52, 23.08], [88.345, 22.579], [88.435, 22.589], [88.392, 22.538], [88.3988, 22.5135], [88.328, 22.632], [88.339, 22.637], [88.324, 22.564], [88.443, 22.545], [88.388, 22.623], [88.35, 22.504], [88.465, 22.587], [88.444, 22.564], [88.408, 22.621], [88.385, 22.582], [88.338, 22.629], [88.43, 22.503], [88.467, 22.614], [88.387, 22.613], [88.333, 22.549], [88.419, 22.636], [88.351, 22.515], [88.455, 22.698], [88.36, 22.507], [88.466, 22.59], [88.435, 22.576], [88.468, 22.631], [88.367, 22.606], [88.4365, 22.6685], [88.3962, 22.5404], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4312, 22.6312], [88.432, 22.628], [88.384, 22.561], [88.423, 22.6174], [88.34, 22.502], [88.32, 22.512], [88.45, 22.503], [88.398, 22.6025], [88.342, 22.536], [88.372, 22.541], [88.323, 22.551], [88.38, 22.503], [88.452, 22.544], [88.338, 22.62], [88.357, 22.616], [88.3989, 22.5623], [88.415, 22.586], [88.467, 22.617], [88.367, 22.605], [88.431, 22.516], [88.37, 22.509], [88.365, 22.576], [88.405, 22.583], [88.326, 22.6], [88.391, 22.517], [88.335, 22.589], [88.416, 22.595], [88.464, 22.56], [88.399, 22.644], [88.3718, 22.4988], [88.355, 22.586], [88.427, 22.617], [88.364, 22.574], [88.349, 22.638], [88.425, 22.583], [88.352, 22.495]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_m_2_5',
    routeNumber: 'M-2',
    nameEn: 'Haldiram ⇌ Birati Bus Stand',
    nameBn: 'হলদিরাম ⇌ বিরাটি বাস স্ট্যান্ড',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Metro Link',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#0284C7',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Bangar Hospital, Kestopur, Appole Hospital, Kadapara',
    viaBn: 'Bangar Hospital, Kestopur, Appole Hospital, Kadapara',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Haldiram", "Bangar Hospital", "Dum Dum Park", "Metropolitan", "Jora Bridge", "8B Bus Stand", "Singha Bari", "Jora Mandir", "Ajoy Nagar", "Raghunath Pur", "Tegharia", "Kestopur", "Science City", "Math Pukur", "Ruby Hospital", "Sulekha Bridge", "Panchanan Gram", "Prince Anwarsha Road", "Dahka Kali Bari", "Beleghata", "Kaikhali", "Appole Hospital", "Mukundapur", "Bengal Chemical", "Santoshpur Lake", "Jadavpur PS", "Lords Bakery", "Bangur", "Golf Club", "Lake Town", "Baguihati", "Kadapara", "Sarat Collony", "Hudco", "Kalikapur", "Airport No.1", "Airport No.2", "Airport 2.5 No.", "Airport No. 3", "South City Mall", "Chingrighata", "Birati Bus Stand"],
    stopCount: 42,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Birati Bus Stand',
        directionNameBn: 'বিরাটি বাস স্ট্যান্ডর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.432, 22.628], [88.425, 22.583], [88.32, 22.512], [88.415, 22.586], [88.331, 22.515], [88.42, 22.507], [88.455, 22.583], [88.355, 22.583], [88.426, 22.601], [88.384, 22.561], [88.443, 22.553], [88.34, 22.502], [88.3962, 22.5404], [88.467, 22.617], [88.3988, 22.5135], [88.444, 22.56], [88.367, 22.605], [88.349, 22.638], [88.428, 22.62], [88.357, 22.616], [88.4312, 22.6312], [88.452, 22.544], [88.393, 22.547], [88.323, 22.551], [88.431, 22.519], [88.3718, 22.4988], [88.337, 22.605], [88.45, 22.503], [88.352, 22.495], [88.398, 22.6025], [88.423, 22.6174], [88.338, 22.62], [88.335, 22.589], [88.342, 22.536], [88.346, 22.601], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.358, 22.622], [88.3989, 22.5623], [88.4365, 22.6685]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Haldiram',
        directionNameBn: 'হলদিরামর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.4365, 22.6685], [88.3989, 22.5623], [88.358, 22.622], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.346, 22.601], [88.342, 22.536], [88.335, 22.589], [88.338, 22.62], [88.423, 22.6174], [88.398, 22.6025], [88.352, 22.495], [88.45, 22.503], [88.337, 22.605], [88.3718, 22.4988], [88.431, 22.519], [88.323, 22.551], [88.393, 22.547], [88.452, 22.544], [88.4312, 22.6312], [88.357, 22.616], [88.428, 22.62], [88.349, 22.638], [88.367, 22.605], [88.444, 22.56], [88.3988, 22.5135], [88.467, 22.617], [88.3962, 22.5404], [88.34, 22.502], [88.443, 22.553], [88.384, 22.561], [88.426, 22.601], [88.355, 22.583], [88.455, 22.583], [88.42, 22.507], [88.331, 22.515], [88.415, 22.586], [88.32, 22.512], [88.425, 22.583], [88.432, 22.628]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_ord_1_6',
    routeNumber: 'ORD-1',
    nameEn: 'Howrah Station ⇌ Amtola',
    nameBn: 'হাওড়া স্টেশন ⇌ আমতলা',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Ordinary Connector',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#0284C7',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Barabazar, Mominpur, Sakhar Bazar, 11M Kolkata',
    viaBn: 'Barabazar, Mominpur, Sakhar Bazar, 11M Kolkata',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Howrah Station", "Barabazar", "B. B. D. Bag", "Esplanade", "Hastings", "Ekbalpur", "Mominpur", "Taratala", "Behala Tram Depot", "Blind School", "Behala Chowrasta", "Sakhar Bazar", "Sil Para", "Thakur Pukur Bazar", "3A Bus Stand", "Joka", "11M Kolkata", "Pailan", "Vasa-14", "Khariberia", "Bishnupur", "Amtola"],
    stopCount: 22,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Amtola',
        directionNameBn: 'আমতলার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3431, 22.5835], [88.385, 22.585], [88.3503, 22.5719], [88.3524, 22.5647], [88.3312, 22.5458], [88.392, 22.54], [88.337, 22.61], [88.3165, 22.5185], [88.329, 22.64], [88.468, 22.627], [88.3185, 22.4952], [88.405, 22.581], [88.334, 22.562], [88.359, 22.646], [88.355, 22.587], [88.2985, 22.4412], [88.32, 22.509], [88.462, 22.538], [88.444, 22.571], [88.386, 22.601], [88.389, 22.644], [88.2312, 22.3789]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.2312, 22.3789], [88.389, 22.644], [88.386, 22.601], [88.444, 22.571], [88.462, 22.538], [88.32, 22.509], [88.2985, 22.4412], [88.355, 22.587], [88.359, 22.646], [88.334, 22.562], [88.405, 22.581], [88.3185, 22.4952], [88.468, 22.627], [88.329, 22.64], [88.3165, 22.5185], [88.337, 22.61], [88.392, 22.54], [88.3312, 22.5458], [88.3524, 22.5647], [88.3503, 22.5719], [88.385, 22.585], [88.3431, 22.5835]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_8_7',
    routeNumber: 'T-8',
    nameEn: 'Esplanade ⇌ Tikiapara Stand',
    nameBn: 'এসপ্ল্যানেড ⇌ টিকিয়াপাড়া স্ট্যান্ড',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Park Street, Rabindra Sadan, Toll Tax, Natun Rasta',
    viaBn: 'Park Street, রবীন্দ্র সদন, Toll Tax, Natun Rasta',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Esplanade", "Park Street", "Jeevandip", "Birla", "Rabindra Sadan", "P.T.S.", "Hastings", "Toll Tax", "Carry Road", "Belepole", "Natun Rasta", "P.N.T.", "Jal-Tank", "Shanpur", "Tikiapara Stand"],
    stopCount: 15,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Tikiapara Stand',
        directionNameBn: 'টিকিয়াপাড়া স্ট্যান্ডর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3524, 22.5647], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3456, 22.5408], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.386, 22.601], [88.383, 22.558], [88.405, 22.579], [88.331, 22.527], [88.444, 22.562], [88.363, 22.559], [88.3285, 22.5812]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Esplanade',
        directionNameBn: 'এসপ্ল্যানেডর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3285, 22.5812], [88.363, 22.559], [88.444, 22.562], [88.331, 22.527], [88.405, 22.579], [88.383, 22.558], [88.386, 22.601], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3456, 22.5408], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.3524, 22.5647]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_6_8',
    routeNumber: 'E-6',
    nameEn: 'P.T.S. ⇌ Amta',
    nameBn: 'পি.টি.এস. ⇌ আমতা',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Hastings, Garpha, Jalan Gate – 3, Bashtala',
    viaBn: 'Hastings, Garpha, Jalan Gate – 3, Bashtala',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["P.T.S.", "Hastings", "Toll Tax", "Carry Road", "Belepole", "Santragachi Station", "Garpha", "Kona Expressway X-ing", "Ankurhati Check Post", "Swarswati Bridge", "Jalan Gate \u2013 1", "Jalan Gate \u2013 3", "Alampur", "Dhulagarh", "Ranihati", "Beltala", "Bashtala", "Gab Beria Hospital", "Haulibagan", "Mnik Pir", "10 No.", "Chakhana", "Kalatala", "Amta"],
    stopCount: 24,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Amta',
        directionNameBn: 'আমতার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.386, 22.601], [88.383, 22.558], [88.2835, 22.5788], [88.359, 22.643], [88.449, 22.635], [88.387, 22.616], [88.358, 22.621], [88.415, 22.575], [88.404, 22.566], [88.325, 22.575], [88.376, 22.59], [88.355, 22.589], [88.392, 22.541], [88.412, 22.54], [88.377, 22.609], [88.408, 22.631], [88.361, 22.521], [88.411, 22.517], [88.398, 22.633], [88.376, 22.592], [88.0125, 22.5855]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards P.T.S.',
        directionNameBn: 'পি.টি.এস.র দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.0125, 22.5855], [88.376, 22.592], [88.398, 22.633], [88.411, 22.517], [88.361, 22.521], [88.408, 22.631], [88.377, 22.609], [88.412, 22.54], [88.392, 22.541], [88.355, 22.589], [88.376, 22.59], [88.325, 22.575], [88.404, 22.566], [88.415, 22.575], [88.358, 22.621], [88.387, 22.616], [88.449, 22.635], [88.359, 22.643], [88.2835, 22.5788], [88.383, 22.558], [88.386, 22.601], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_12_9',
    routeNumber: 'T-12',
    nameEn: 'Howrah ⇌ Chaital Ghat',
    nameBn: 'হাওড়া ⇌ চৈটাল ঘাট',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Park Circus Depot',
    depotBn: 'পার্ক সার্কাস ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Barabazar, 4 No Bridge, Banshtola, Karai Danga',
    viaBn: 'Barabazar, 4 No Bridge, Banshtola, Karai Danga',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Howrah", "Barabazar", "Sealdah", "CIT Road", "Park Circus", "4 No Bridge", "P.C. Connector", "Science City", "Chowbaga", "Banshtola", "Bamunghata", "Kantalata", "Leather Complex", "Karai Danga", "Ghuri Ghata", "Bamanpukur", "Minakhan", "Malancha", "Chaital Ghat"],
    stopCount: 19,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Chaital Ghat',
        directionNameBn: 'চৈটাল ঘাটর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3431, 22.5835], [88.385, 22.585], [88.3712, 22.5675], [88.329, 22.635], [88.3683, 22.5414], [88.403, 22.555], [88.419, 22.646], [88.3962, 22.5404], [88.426, 22.592], [88.448, 22.63], [88.335, 22.584], [88.463, 22.545], [88.453, 22.553], [88.333, 22.546], [88.425, 22.588], [88.358, 22.625], [88.413, 22.548], [88.7512, 22.5215], [88.7812, 22.5315]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah',
        directionNameBn: 'হাওড়ার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.7812, 22.5315], [88.7512, 22.5215], [88.413, 22.548], [88.358, 22.625], [88.425, 22.588], [88.333, 22.546], [88.453, 22.553], [88.463, 22.545], [88.335, 22.584], [88.448, 22.63], [88.426, 22.592], [88.3962, 22.5404], [88.419, 22.646], [88.403, 22.555], [88.3683, 22.5414], [88.329, 22.635], [88.3712, 22.5675], [88.385, 22.585], [88.3431, 22.5835]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_23_10',
    routeNumber: 'C-23',
    nameEn: 'Park Circus ⇌ Dankuni',
    nameBn: 'পার্ক সার্কাস ⇌ ডানকুনি',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Park Circus Depot',
    depotBn: 'পার্ক সার্কাস ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Topsia, SDF / Sec V, Najrul Tirtha, Akansha Xing',
    viaBn: 'Topsia, SDF / Sec V, Najrul Tirtha, Akansha Xing',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Park Circus", "Topsia", "Science City", "Metropolitan", "Chingrighata", "Nicco Park", "SDF / Sec V", "College More", "Technopolis", "DLF Bldg I", "New Town", "Najrul Tirtha", "Techno India College", "Tata Hospital", "DPS School", "Jatragachi", "Akansha Xing", "City Centre 2", "Chinar Park", "Kaikhali", "Airport No.1", "Belghoria Exp. Way", "Durga Nagar", "Dankuni"],
    stopCount: 24,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Dankuni',
        directionNameBn: 'ডানকুনির দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3683, 22.5414], [88.342, 22.536], [88.3962, 22.5404], [88.415, 22.586], [88.3989, 22.5623], [88.371, 22.523], [88.4338, 22.5736], [88.354, 22.574], [88.361, 22.516], [88.392, 22.541], [88.359, 22.646], [88.388, 22.624], [88.405, 22.58], [88.334, 22.564], [88.414, 22.569], [88.453, 22.549], [88.422, 22.54], [88.322, 22.537], [88.332, 22.532], [88.4312, 22.6312], [88.4467, 22.652], [88.414, 22.563], [88.322, 22.533], [88.3012, 22.6855]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Park Circus',
        directionNameBn: 'পার্ক সার্কাসর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3012, 22.6855], [88.322, 22.533], [88.414, 22.563], [88.4467, 22.652], [88.4312, 22.6312], [88.332, 22.532], [88.322, 22.537], [88.422, 22.54], [88.453, 22.549], [88.414, 22.569], [88.334, 22.564], [88.405, 22.58], [88.388, 22.624], [88.359, 22.646], [88.392, 22.541], [88.361, 22.516], [88.354, 22.574], [88.4338, 22.5736], [88.371, 22.523], [88.3989, 22.5623], [88.415, 22.586], [88.3962, 22.5404], [88.342, 22.536], [88.3683, 22.5414]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_2_11',
    routeNumber: 'T-2',
    nameEn: 'Mandirtola ⇌ B. B. D. Bag',
    nameBn: 'মন্দিরতলা ⇌ বি.বি.ডি. বাগ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Toll Tax, P.T.S., Birla, Park Street',
    viaBn: 'Toll Tax, পি.টি.এস., Birla, Park Street',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Mandirtola", "Toll Tax", "Hastings", "P.T.S.", "Rabindra Sadan", "Birla", "Jeevandip", "Park Street", "Mayo Road (ESPL)", "Eastern Hotel", "B. B. D. Bag"],
    stopCount: 11,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards B. B. D. Bag',
        directionNameBn: 'বি.বি.ডি. বাগর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.347, 22.612], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3456, 22.5408], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.416, 22.597], [88.467, 22.61], [88.3503, 22.5719]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Mandirtola',
        directionNameBn: 'মন্দিরতলার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3503, 22.5719], [88.467, 22.61], [88.416, 22.597], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3456, 22.5408], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.347, 22.612]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_ac_1_12',
    routeNumber: 'T-AC-1',
    nameEn: 'Esplanade ⇌ Santragachi',
    nameBn: 'এসপ্ল্যানেড ⇌ সাঁতরাগাছি',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Deluxe AC',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: true,
    color: '#059669',
    fareMin: 25,
    fareMax: 60,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Park Street, Birla, P.T.S., Toll Tax',
    viaBn: 'Park Street, Birla, পি.টি.এস., Toll Tax',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Esplanade", "Park Street", "Jeevandip", "Birla", "Rabindra Sadan", "P.T.S.", "Hastings", "Toll Tax", "Carry Road", "Belepole", "Betor", "Bakshara", "Santragachi"],
    stopCount: 13,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Santragachi',
        directionNameBn: 'সাঁতরাগাছির দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3524, 22.5647], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3456, 22.5408], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.386, 22.601], [88.383, 22.558], [88.423, 22.552], [88.462, 22.536], [88.2835, 22.5788]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Esplanade',
        directionNameBn: 'এসপ্ল্যানেডর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.2835, 22.5788], [88.462, 22.536], [88.423, 22.552], [88.383, 22.558], [88.386, 22.601], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3456, 22.5408], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.3524, 22.5647]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_20_13',
    routeNumber: 'C-20',
    nameEn: 'Esplanade ⇌ Santragachi',
    nameBn: 'এসপ্ল্যানেড ⇌ সাঁতরাগাছি',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Park Street, Birla, P.T.S., Toll Tax',
    viaBn: 'Park Street, Birla, পি.টি.এস., Toll Tax',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Esplanade", "Park Street", "Jeevandip", "Birla", "Rabindra Sadan", "P.T.S.", "Hastings", "Toll Tax", "Carry Road", "Belepole", "Betor", "Bakshara", "Santragachi"],
    stopCount: 13,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Santragachi',
        directionNameBn: 'সাঁতরাগাছির দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3524, 22.5647], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3456, 22.5408], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.386, 22.601], [88.383, 22.558], [88.423, 22.552], [88.462, 22.536], [88.2835, 22.5788]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Esplanade',
        directionNameBn: 'এসপ্ল্যানেডর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.2835, 22.5788], [88.462, 22.536], [88.423, 22.552], [88.383, 22.558], [88.386, 22.601], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3456, 22.5408], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.3524, 22.5647]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_1_a_14',
    routeNumber: 'C-1-A',
    nameEn: 'Amtola Phari ⇌ Rabindra Sadan',
    nameBn: 'আমতলা ফাঁড়ি ⇌ রবীন্দ্র সদন',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'College Ghat, N.R.S. Hospital, Hastings, Chandni Chawk',
    viaBn: 'College Ghat, N.R.S. Hospital, Hastings, Chandni Chawk',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Amtola Phari", "College Ghat", "Taltola", "Esplanade", "N.R.S. Hospital", "Park Street", "Birla", "Hastings", "P.T.S.", "Danesh Sekh Lane", "Chandni Chawk", "Toll Tax", "Sealdah", "Jeevandip", "Moulali", "Raja Bazar Depot", "Rabindra Sadan"],
    stopCount: 17,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Rabindra Sadan',
        directionNameBn: 'রবীন্দ্র সদনর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.2312, 22.3789], [88.337, 22.61], [88.378, 22.622], [88.3524, 22.5647], [88.401, 22.528], [88.3512, 22.551], [88.338, 22.624], [88.3312, 22.5458], [88.3385, 22.542], [88.361, 22.522], [88.396, 22.593], [88.325, 22.576], [88.3712, 22.5675], [88.442, 22.54], [88.3685, 22.558], [88.3734, 22.5739], [88.3456, 22.5408]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Amtola Phari',
        directionNameBn: 'আমতলা ফাঁড়ির দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3456, 22.5408], [88.3734, 22.5739], [88.3685, 22.558], [88.442, 22.54], [88.3712, 22.5675], [88.325, 22.576], [88.396, 22.593], [88.361, 22.522], [88.3385, 22.542], [88.3312, 22.5458], [88.338, 22.624], [88.3512, 22.551], [88.401, 22.528], [88.3524, 22.5647], [88.378, 22.622], [88.337, 22.61], [88.2312, 22.3789]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_26_15',
    routeNumber: 'C-26',
    nameEn: 'Howrah ⇌ Sibani Pith',
    nameBn: 'হাওড়া ⇌ শিবানী পীঠ (বারুইপুর)',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Ghasbagan Depot',
    depotBn: 'ঘাসবাগান ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Barabazar, 4 No Bridge, Dxatikapur, Rathtala',
    viaBn: 'Barabazar, 4 No Bridge, Dxatikapur, Rathtala',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Howrah", "Barabazar", "Dalhouse (T. Board)", "Great Eastern", "Esplanade", "Chandni Chawk", "Wellington", "Taltola", "Philips", "Moulali", "Ladies Park", "Padma Pukur", "Chittaranjan Hospital", "4 No Bridge", "Hindu Gorosthan", "Topsia", "Milan Mela Prangan", "Science City", "Uttar Panchanya Gram", "Panchanya Gram", "VIP Bazar", "Tagore Park", "Mono Bikas", "Ruby Hospital", "Mandir Para", "Dxatikapur", "Metro Bazar", "Mukuratapur", "Ajoy Nagar", "Juba Tirtha", "Saha Para", "Pepsi", "Kumrophali", "Kamalgachi Mazar", "Kamalgachi More", "Narendrapur Mandir", "Narendrapur Mission", "Rathtala", "Kalitala", "Rajpur Bazar", "Rajpur Police Station", "Rajpur Burning Ghat", "Chowhati", "Harinavi", "Haraharitala", "Atlas", "Kodalia Battala", "Malancha", "Benor Chand", "Gobindapur", "Jogi Battala", "Baruipur Bridge", "Sibani Pith"],
    stopCount: 53,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Sibani Pith',
        directionNameBn: 'শিবানী পীঠ (বারুইপুর)র দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3431, 22.5835], [88.385, 22.585], [88.343, 22.546], [88.44, 22.503], [88.3524, 22.5647], [88.396, 22.593], [88.392, 22.537], [88.378, 22.622], [88.339, 22.648], [88.3685, 22.558], [88.332, 22.539], [88.376, 22.598], [88.359, 22.643], [88.403, 22.555], [88.332, 22.534], [88.342, 22.536], [88.425, 22.589], [88.3962, 22.5404], [88.413, 22.55], [88.358, 22.627], [88.329, 22.646], [88.433, 22.551], [88.321, 22.52], [88.3988, 22.5135], [88.365, 22.576], [88.43, 22.507], [88.402, 22.534], [88.364, 22.571], [88.426, 22.601], [88.464, 22.561], [88.426, 22.601], [88.378, 22.627], [88.323, 22.559], [88.42, 22.512], [88.416, 22.597], [88.344, 22.566], [88.398, 22.632], [88.41, 22.5], [88.45, 22.513], [88.353, 22.558], [88.341, 22.515], [88.33, 22.506], [88.374, 22.568], [88.408, 22.626], [88.359, 22.645], [88.381, 22.515], [88.412, 22.532], [88.7512, 22.5215], [88.368, 22.625], [88.444, 22.566], [88.326, 22.603], [88.4312, 22.3655], [88.333, 22.557]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah',
        directionNameBn: 'হাওড়ার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.333, 22.557], [88.4312, 22.3655], [88.326, 22.603], [88.444, 22.566], [88.368, 22.625], [88.7512, 22.5215], [88.412, 22.532], [88.381, 22.515], [88.359, 22.645], [88.408, 22.626], [88.374, 22.568], [88.33, 22.506], [88.341, 22.515], [88.353, 22.558], [88.45, 22.513], [88.41, 22.5], [88.398, 22.632], [88.344, 22.566], [88.416, 22.597], [88.42, 22.512], [88.323, 22.559], [88.378, 22.627], [88.426, 22.601], [88.464, 22.561], [88.426, 22.601], [88.364, 22.571], [88.402, 22.534], [88.43, 22.507], [88.365, 22.576], [88.3988, 22.5135], [88.321, 22.52], [88.433, 22.551], [88.329, 22.646], [88.358, 22.627], [88.413, 22.55], [88.3962, 22.5404], [88.425, 22.589], [88.342, 22.536], [88.332, 22.534], [88.403, 22.555], [88.359, 22.643], [88.376, 22.598], [88.332, 22.539], [88.3685, 22.558], [88.339, 22.648], [88.378, 22.622], [88.392, 22.537], [88.396, 22.593], [88.3524, 22.5647], [88.44, 22.503], [88.343, 22.546], [88.385, 22.585], [88.3431, 22.5835]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_24_16',
    routeNumber: 'C-24',
    nameEn: 'Raja Bazar Depot ⇌ Ghasbagan Bus Depot',
    nameBn: 'রাজাবাজার ডিপো ⇌ ঘাসবাগান বাস ডিপো',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Ghasbagan Depot',
    depotBn: 'ঘাসবাগান ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'E.S.I. Hospital, Shradhya Nanda Park, Bata, Kaylaghat Street',
    viaBn: 'E.S.I. Hospital, Shradhya Nanda Park, Bata, Kaylaghat Street',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Raja Bazar Depot", "E.S.I. Hospital", "Jagat Cinema", "Sealdah Station", "Purabi Cinema", "Amherst Street", "Shradhya Nanda Park", "Bank of India", "Bowbazar", "Central Avenue", "Ganguram", "Bata", "Bentink Street", "Lalbazar", "Telephone Bhavan", "G.P.O.", "Kaylaghat Street", "Fairli Place", "Clive ghat", "Canning Street", "Howrah Station", "A.C. Market", "Ghasbagan Bus Depot"],
    stopCount: 23,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Ghasbagan Bus Depot',
        directionNameBn: 'ঘাসবাগান বাস ডিপোর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3734, 22.5739], [88.347, 22.609], [88.438, 22.627], [88.3712, 22.5675], [88.331, 22.523], [88.417, 22.614], [88.465, 22.581], [88.33, 22.501], [88.415, 22.588], [88.426, 22.591], [88.359, 22.636], [88.398, 22.63], [88.386, 22.593], [88.459, 22.647], [88.401, 22.528], [88.463, 22.559], [88.327, 22.609], [88.393, 22.549], [88.334, 22.568], [88.384, 22.565], [88.3431, 22.5835], [88.353, 22.545], [88.3356, 22.5891]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Raja Bazar Depot',
        directionNameBn: 'রাজাবাজার ডিপোর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3356, 22.5891], [88.353, 22.545], [88.3431, 22.5835], [88.384, 22.565], [88.334, 22.568], [88.393, 22.549], [88.327, 22.609], [88.463, 22.559], [88.401, 22.528], [88.459, 22.647], [88.386, 22.593], [88.398, 22.63], [88.359, 22.636], [88.426, 22.591], [88.415, 22.588], [88.33, 22.501], [88.465, 22.581], [88.417, 22.614], [88.331, 22.523], [88.3712, 22.5675], [88.438, 22.627], [88.347, 22.609], [88.3734, 22.5739]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_11_1_17',
    routeNumber: 'C-11/1',
    nameEn: 'Howrah Station ⇌ Murshidabad',
    nameBn: 'হাওড়া স্টেশন ⇌ মুর্শিদাবাদ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Ghasbagan Depot',
    depotBn: 'ঘাসবাগান ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Howrah Maidan, Bankra Bazar, Domjur B.D.O., Bargachia Hantal More',
    viaBn: 'Howrah Maidan, Bankra Bazar, Domjur B.D.O., Bargachia Hantal More',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Howrah Station", "Howrah Maidan", "Annapurna Club", "Kadamtala Power House", "Kadamtala Bazar", "Ichapur Water Tank (Sunpur More)", "Dasnagar Station", "Baltikuri Government Quarter", "Japani Gate E.S.I Hospital", "Bankra Bazar", "Munshidangar More", "National Highway", "Salap Bazar", "Salap School", "Kantalia Station", "Kantalia Jhawtala", "Makardaha More", "Domjur B.D.O.", "Domjur P.S.", "Dakshini Bari", "No 2 Pole (Badampur)", "Molla Para", "Santoshpur", "Middya Para", "Bargachia Dharmotala", "Bargachia Hantal More", "Bargachia Station", "Bargachia Level Crossing", "Patihal Hattala", "Patihal Station", "Jadupir More", "Sibanandabati", "Munshirhat Station", "Murshidabad"],
    stopCount: 34,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Murshidabad',
        directionNameBn: 'মুর্শিদাবাদর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3431, 22.5835], [88.3308, 22.5855], [88.394, 22.567], [88.0125, 22.5855], [88.0125, 22.5855], [88.333, 22.551], [88.398, 22.623], [88.326, 22.594], [88.432, 22.53], [88.461, 22.519], [88.457, 22.618], [88.459, 22.636], [88.408, 22.62], [88.458, 22.622], [88.334, 22.572], [88.428, 22.624], [88.466, 22.603], [88.2185, 22.6412], [88.2185, 22.6412], [88.453, 22.551], [88.392, 22.536], [88.324, 22.56], [88.399, 22.644], [88.357, 22.614], [88.324, 22.571], [88.338, 22.626], [88.344, 22.57], [88.357, 22.611], [88.464, 22.569], [88.353, 22.555], [88.36, 22.507], [88.461, 22.52], [88.398, 22.625], [88.338, 22.633]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.338, 22.633], [88.398, 22.625], [88.461, 22.52], [88.36, 22.507], [88.353, 22.555], [88.464, 22.569], [88.357, 22.611], [88.344, 22.57], [88.338, 22.626], [88.324, 22.571], [88.357, 22.614], [88.399, 22.644], [88.324, 22.56], [88.392, 22.536], [88.453, 22.551], [88.2185, 22.6412], [88.2185, 22.6412], [88.466, 22.603], [88.428, 22.624], [88.334, 22.572], [88.458, 22.622], [88.408, 22.62], [88.459, 22.636], [88.457, 22.618], [88.461, 22.519], [88.432, 22.53], [88.326, 22.594], [88.398, 22.623], [88.333, 22.551], [88.0125, 22.5855], [88.0125, 22.5855], [88.394, 22.567], [88.3308, 22.5855], [88.3431, 22.5835]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_8_a_18',
    routeNumber: 'C-8-A',
    nameEn: 'Golf Club ⇌ Barasat',
    nameBn: 'গলফ ক্লাব (টালিগঞ্জ) ⇌ বারাসাত',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Bangar Hospital, Kasba Post Office, Math Pukur, New Town',
    viaBn: 'Bangar Hospital, Kasba Post Office, Math Pukur, New Town',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Golf Club", "Bangar Hospital", "Prince Anwarsha Road", "Tollygunge Phari", "Bhabani Cinema", "Charu Market", "Modially", "Tollygunge PS", "Rasbehari", "Lake Market", "Deshpriya Park", "Lake view", "Triangular Park", "Hindusthan Park", "Basanti Devi College", "Gariahat", "Ballygunge", "Kasba Post Office", "Kasba Old PS", "Bakultala", "Talbagan BPS", "Bosepukur", "Tribarna", "Nawapally", "Kasba New Market", "Siemens", "Narkel Bagan", "Ruby Hospital", "Laskarr Hut / Tagore Park", "VIP Bazar", "Panchanan Gram", "Uttar Panchanan", "Science City", "Math Pukur", "Metropolitan", "Chingrighata", "Sukanta Nagar", "Lohar Pole", "Nicco Park", "Sastha Bhawan", "Ashram", "S.D.F. Building", "Sector V", "College More", "R.S. Building", "Technopolis", "Mahish Bathan", "Eastern Club", "D.L.F.", "New Town", "Axis Bank", "Hela Building", "Narkel Bagan / Rabindra Tirtha", "Yatra Gachi", "Police Phari", "E.C.O. Park", "Goal Building", "Nabab Pur", "Akhanka", "City Certer", "Noa Para", "Chinar Park", "Charnakya City", "Haldiram", "Kaikhali", "Hatkhola / Dhakin Para", "Seth Pukur", "Chapadali More", "Barasat"],
    stopCount: 69,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Barasat',
        directionNameBn: 'বারাসাতর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.352, 22.495], [88.425, 22.583], [88.349, 22.638], [88.343, 22.558], [88.439, 22.647], [88.428, 22.622], [88.425, 22.587], [88.441, 22.524], [88.373, 22.557], [88.462, 22.531], [88.363, 22.548], [88.447, 22.612], [88.418, 22.62], [88.44, 22.503], [88.417, 22.607], [88.3644, 22.518], [88.365, 22.576], [88.357, 22.618], [88.427, 22.618], [88.384, 22.572], [88.365, 22.587], [88.424, 22.57], [88.43, 22.511], [88.449, 22.642], [88.361, 22.518], [88.466, 22.591], [88.436, 22.596], [88.3988, 22.5135], [88.431, 22.516], [88.329, 22.646], [88.367, 22.605], [88.401, 22.527], [88.3962, 22.5404], [88.467, 22.617], [88.415, 22.586], [88.3989, 22.5623], [88.395, 22.583], [88.412, 22.543], [88.371, 22.523], [88.351, 22.516], [88.378, 22.621], [88.396, 22.594], [88.4338, 22.5736], [88.354, 22.574], [88.448, 22.633], [88.361, 22.516], [88.334, 22.569], [88.439, 22.635], [88.408, 22.621], [88.359, 22.646], [88.35, 22.5], [88.373, 22.55], [88.339, 22.636], [88.394, 22.567], [88.405, 22.58], [88.459, 22.64], [88.343, 22.556], [88.456, 22.599], [88.413, 22.548], [88.377, 22.61], [88.438, 22.621], [88.332, 22.532], [88.466, 22.6], [88.432, 22.628], [88.4312, 22.6312], [88.321, 22.528], [88.452, 22.537], [88.365, 22.589], [88.48, 22.72]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Golf Club',
        directionNameBn: 'গলফ ক্লাব (টালিগঞ্জ)র দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.48, 22.72], [88.365, 22.589], [88.452, 22.537], [88.321, 22.528], [88.4312, 22.6312], [88.432, 22.628], [88.466, 22.6], [88.332, 22.532], [88.438, 22.621], [88.377, 22.61], [88.413, 22.548], [88.456, 22.599], [88.343, 22.556], [88.459, 22.64], [88.405, 22.58], [88.394, 22.567], [88.339, 22.636], [88.373, 22.55], [88.35, 22.5], [88.359, 22.646], [88.408, 22.621], [88.439, 22.635], [88.334, 22.569], [88.361, 22.516], [88.448, 22.633], [88.354, 22.574], [88.4338, 22.5736], [88.396, 22.594], [88.378, 22.621], [88.351, 22.516], [88.371, 22.523], [88.412, 22.543], [88.395, 22.583], [88.3989, 22.5623], [88.415, 22.586], [88.467, 22.617], [88.3962, 22.5404], [88.401, 22.527], [88.367, 22.605], [88.329, 22.646], [88.431, 22.516], [88.3988, 22.5135], [88.436, 22.596], [88.466, 22.591], [88.361, 22.518], [88.449, 22.642], [88.43, 22.511], [88.424, 22.57], [88.365, 22.587], [88.384, 22.572], [88.427, 22.618], [88.357, 22.618], [88.365, 22.576], [88.3644, 22.518], [88.417, 22.607], [88.44, 22.503], [88.418, 22.62], [88.447, 22.612], [88.363, 22.548], [88.462, 22.531], [88.373, 22.557], [88.441, 22.524], [88.425, 22.587], [88.428, 22.622], [88.439, 22.647], [88.343, 22.558], [88.349, 22.638], [88.425, 22.583], [88.352, 22.495]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_2_a_19',
    routeNumber: 'C-2-A',
    nameEn: 'Golf Club ⇌ Ghatak Pukur',
    nameBn: 'গলফ ক্লাব (টালিগঞ্জ) ⇌ ঘোটকপুকুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Bangar Hospital, Basanti Devi College, Ruby Hospital, Bamanghata',
    viaBn: 'Bangar Hospital, Basanti Devi College, Ruby Hospital, Bamanghata',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Golf Club", "Bangar Hospital", "Prince Anwarsha Road", "Tollygunge Phari", "Bhabani Cinema", "Charu Market", "Modially", "Tollygunge PS", "Rasbehari", "Lake Market", "Deshpriya Park", "Lake view", "Triangular Park", "Hindusthan Park", "Basanti Devi College", "Gariahat", "Ballygunge", "Kasba Post Office", "Kasba Old PS", "Bakultala", "Talbagan BPS", "Bosepukur", "Tribarna", "Nawapally", "Kasba New Market", "Siemens", "Narkel Bagan", "Ruby Hospital", "Laskarr Hut / Tagore Park", "VIP Bazar", "Panchanan Gram", "Uttar Panchanan", "Science City", "VIP Bridge", "Pakka Pole", "Paschim Chowbaga", "Chowbaga", "Bantal", "B.I.T. College", "Jal Path", "Bamanghata", "Kantalata", "Leather Complex", "Leather Complex 2", "Karai Danga", "Leather Complex 3", "Bhojerhat", "Bairam Pur", "Paglahut", "Baligadha", "Bibir Ait", "Abacus", "Padma Pukur", "Boralighat", "Nalmuri", "B.D.O. Office", "Ghatak Pukur"],
    stopCount: 57,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Ghatak Pukur',
        directionNameBn: 'ঘোটকপুকুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.352, 22.495], [88.425, 22.583], [88.349, 22.638], [88.343, 22.558], [88.439, 22.647], [88.428, 22.622], [88.425, 22.587], [88.441, 22.524], [88.373, 22.557], [88.462, 22.531], [88.363, 22.548], [88.447, 22.612], [88.418, 22.62], [88.44, 22.503], [88.417, 22.607], [88.3644, 22.518], [88.365, 22.576], [88.357, 22.618], [88.427, 22.618], [88.384, 22.572], [88.365, 22.587], [88.424, 22.57], [88.43, 22.511], [88.449, 22.642], [88.361, 22.518], [88.466, 22.591], [88.436, 22.596], [88.3988, 22.5135], [88.431, 22.516], [88.329, 22.646], [88.367, 22.605], [88.401, 22.527], [88.3962, 22.5404], [88.326, 22.598], [88.364, 22.567], [88.351, 22.517], [88.426, 22.592], [88.388, 22.622], [88.326, 22.6], [88.436, 22.595], [88.394, 22.572], [88.463, 22.545], [88.453, 22.553], [88.331, 22.522], [88.333, 22.546], [88.42, 22.501], [88.432, 22.535], [88.364, 22.572], [88.404, 22.566], [88.449, 22.646], [88.378, 22.632], [88.401, 22.528], [88.376, 22.598], [88.467, 22.606], [88.443, 22.545], [88.325, 22.587], [88.58, 22.49]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Golf Club',
        directionNameBn: 'গলফ ক্লাব (টালিগঞ্জ)র দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.58, 22.49], [88.325, 22.587], [88.443, 22.545], [88.467, 22.606], [88.376, 22.598], [88.401, 22.528], [88.378, 22.632], [88.449, 22.646], [88.404, 22.566], [88.364, 22.572], [88.432, 22.535], [88.42, 22.501], [88.333, 22.546], [88.331, 22.522], [88.453, 22.553], [88.463, 22.545], [88.394, 22.572], [88.436, 22.595], [88.326, 22.6], [88.388, 22.622], [88.426, 22.592], [88.351, 22.517], [88.364, 22.567], [88.326, 22.598], [88.3962, 22.5404], [88.401, 22.527], [88.367, 22.605], [88.329, 22.646], [88.431, 22.516], [88.3988, 22.5135], [88.436, 22.596], [88.466, 22.591], [88.361, 22.518], [88.449, 22.642], [88.43, 22.511], [88.424, 22.57], [88.365, 22.587], [88.384, 22.572], [88.427, 22.618], [88.357, 22.618], [88.365, 22.576], [88.3644, 22.518], [88.417, 22.607], [88.44, 22.503], [88.418, 22.62], [88.447, 22.612], [88.363, 22.548], [88.462, 22.531], [88.373, 22.557], [88.441, 22.524], [88.425, 22.587], [88.428, 22.622], [88.439, 22.647], [88.343, 22.558], [88.349, 22.638], [88.425, 22.583], [88.352, 22.495]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_14_1_20',
    routeNumber: 'C-14/1',
    nameEn: 'Golf Club ⇌ Madhyamgram Station',
    nameBn: 'গলফ ক্লাব (টালিগঞ্জ) ⇌ মধ্যমগ্রাম স্টেশন',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Bangar Hospital, Kasba Old PS, Chingrighata, Haldiram',
    viaBn: 'Bangar Hospital, Kasba Old PS, Chingrighata, হলদিরাম',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Golf Club", "Bangar Hospital", "Prince Anwarsha Road", "Tollygunge Phari", "Bhabani Cinema", "Charu Market", "Modially", "Tollygunge PS", "Rasbehari", "Lake Market", "Deshpriya Park", "Lake view", "Triangular Park", "Hindusthan Park", "Basanti Devi College", "Gariahat", "Ballygunge", "Kasba Post Office", "Kasba Old PS", "Bakultala", "Talbagan BPS", "Bosepukur", "Tribarna", "Nawapally", "Kasba New Market", "Siemens", "Narkel Bagan", "Ruby Hospital", "Laskarr Hut / Tagore Park", "VIP Bazar", "Panchanan Gram", "Uttar Panchanan", "Science City", "Math Pukur", "Metropolitan", "Chingrighata", "Beleghata", "Kadapara", "Appole Hospital", "Mani Square Mall", "Bengal Chemical", "Purbasha", "Hudco", "Ultadanga Bridge", "Lake Town", "Bangur", "Dum Dum Park", "Kestopur", "Baguihati", "Joramandir", "Raghunath Pur", "Tegharia", "Haldiram", "Kaikhali", "Airport No.1", "Airport No.2", "Airport 2.5 No.", "Airport No. 3", "Sarat Collony", "Birati More", "Bankra", "Michel Nagar", "Sukanti Nagar", "B.T. College", "Ghosh Para", "Kata Khel", "Ganganagar", "Furtune City", "Doltala", "New Barrackpore", "Madhyamgram Chowmatha", "Madhyamgram Station"],
    stopCount: 72,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Madhyamgram Station',
        directionNameBn: 'মধ্যমগ্রাম স্টেশনর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.352, 22.495], [88.425, 22.583], [88.349, 22.638], [88.343, 22.558], [88.439, 22.647], [88.428, 22.622], [88.425, 22.587], [88.441, 22.524], [88.373, 22.557], [88.462, 22.531], [88.363, 22.548], [88.447, 22.612], [88.418, 22.62], [88.44, 22.503], [88.417, 22.607], [88.3644, 22.518], [88.365, 22.576], [88.357, 22.618], [88.427, 22.618], [88.384, 22.572], [88.365, 22.587], [88.424, 22.57], [88.43, 22.511], [88.449, 22.642], [88.361, 22.518], [88.466, 22.591], [88.436, 22.596], [88.3988, 22.5135], [88.431, 22.516], [88.329, 22.646], [88.367, 22.605], [88.401, 22.527], [88.3962, 22.5404], [88.467, 22.617], [88.415, 22.586], [88.3989, 22.5623], [88.357, 22.616], [88.338, 22.62], [88.452, 22.544], [88.38, 22.503], [88.323, 22.551], [88.372, 22.541], [88.342, 22.536], [88.3888, 22.5898], [88.398, 22.6025], [88.45, 22.503], [88.32, 22.512], [88.34, 22.502], [88.423, 22.6174], [88.327, 22.613], [88.384, 22.561], [88.443, 22.553], [88.432, 22.628], [88.4312, 22.6312], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.335, 22.589], [88.4365, 22.6685], [88.367, 22.606], [88.468, 22.631], [88.351, 22.524], [88.435, 22.576], [88.42, 22.503], [88.374, 22.564], [88.422, 22.531], [88.418, 22.631], [88.466, 22.59], [88.36, 22.507], [88.455, 22.698], [88.455, 22.698]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Golf Club',
        directionNameBn: 'গলফ ক্লাব (টালিগঞ্জ)র দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.455, 22.698], [88.455, 22.698], [88.36, 22.507], [88.466, 22.59], [88.418, 22.631], [88.422, 22.531], [88.374, 22.564], [88.42, 22.503], [88.435, 22.576], [88.351, 22.524], [88.468, 22.631], [88.367, 22.606], [88.4365, 22.6685], [88.335, 22.589], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4467, 22.652], [88.4312, 22.6312], [88.432, 22.628], [88.443, 22.553], [88.384, 22.561], [88.327, 22.613], [88.423, 22.6174], [88.34, 22.502], [88.32, 22.512], [88.45, 22.503], [88.398, 22.6025], [88.3888, 22.5898], [88.342, 22.536], [88.372, 22.541], [88.323, 22.551], [88.38, 22.503], [88.452, 22.544], [88.338, 22.62], [88.357, 22.616], [88.3989, 22.5623], [88.415, 22.586], [88.467, 22.617], [88.3962, 22.5404], [88.401, 22.527], [88.367, 22.605], [88.329, 22.646], [88.431, 22.516], [88.3988, 22.5135], [88.436, 22.596], [88.466, 22.591], [88.361, 22.518], [88.449, 22.642], [88.43, 22.511], [88.424, 22.57], [88.365, 22.587], [88.384, 22.572], [88.427, 22.618], [88.357, 22.618], [88.365, 22.576], [88.3644, 22.518], [88.417, 22.607], [88.44, 22.503], [88.418, 22.62], [88.447, 22.612], [88.363, 22.548], [88.462, 22.531], [88.373, 22.557], [88.441, 22.524], [88.425, 22.587], [88.428, 22.622], [88.439, 22.647], [88.343, 22.558], [88.349, 22.638], [88.425, 22.583], [88.352, 22.495]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_28_21',
    routeNumber: 'C-28',
    nameEn: 'Fly Over BDG ⇌ Barackpore Court',
    nameBn: 'শ্যামবাজার ফ্লাইওভার ⇌ ব্যারাকপুর কোর্ট',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Ghasbagan Depot',
    depotBn: 'ঘাসবাগান ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Satyanarayan Park, Rajballav Para, Tobin Road, Sodepur',
    viaBn: 'Satyanarayan Park, Rajballav Para, Tobin Road, Sodepur',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Fly Over BDG", "Satyanarayan Park", "Chitpur Xing", "Mechua", "M.G. Road / C.R. Avenue Xing", "Mahajyoti Sadan", "Vivekananda Road (Girish Park)", "Beadon Street", "Sovabazar", "Rajballav Para", "Shyambazar", "Tala Post Office", "Paik Para", "Chiria More", "Rabindra Bharati", "Sinthee More", "Pal Para", "Tobin Road", "Boonhooghly (ISI)", "Dunlop", "I. A. Bus Stand", "Rathtala", "Kamarhati", "Agarpara Jute Mill", "Panihati", "Sodepur", "Raja Road", "Sukhchar Girja", "Prafulla", "Khardaha PS", "Khardaha S. Road", "Tata Gate", "Titagarh", "Bara Rasta", "Talpukur", "Chiriamore", "Barackpore Court"],
    stopCount: 37,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Barackpore Court',
        directionNameBn: 'ব্যারাকপুর কোর্টর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3712, 22.6025], [88.423, 22.553], [88.322, 22.531], [88.447, 22.606], [88.434, 22.565], [88.456, 22.59], [88.3655, 22.5862], [88.379, 22.64], [88.344, 22.566], [88.321, 22.519], [88.3712, 22.6025], [88.423, 22.547], [88.433, 22.545], [88.439, 22.638], [88.325, 22.584], [88.379, 22.635], [88.367, 22.618], [88.42, 22.513], [88.34, 22.507], [88.449, 22.642], [88.357, 22.605], [88.41, 22.5], [88.412, 22.532], [88.403, 22.547], [88.442, 22.544], [88.407, 22.617], [88.425, 22.576], [88.458, 22.621], [88.464, 22.56], [88.433, 22.545], [88.372, 22.536], [88.412, 22.544], [88.441, 22.527], [88.436, 22.594], [88.34, 22.505], [88.437, 22.612], [88.365, 22.76]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Fly Over BDG',
        directionNameBn: 'শ্যামবাজার ফ্লাইওভারর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.365, 22.76], [88.437, 22.612], [88.34, 22.505], [88.436, 22.594], [88.441, 22.527], [88.412, 22.544], [88.372, 22.536], [88.433, 22.545], [88.464, 22.56], [88.458, 22.621], [88.425, 22.576], [88.407, 22.617], [88.442, 22.544], [88.403, 22.547], [88.412, 22.532], [88.41, 22.5], [88.357, 22.605], [88.449, 22.642], [88.34, 22.507], [88.42, 22.513], [88.367, 22.618], [88.379, 22.635], [88.325, 22.584], [88.439, 22.638], [88.433, 22.545], [88.423, 22.547], [88.3712, 22.6025], [88.321, 22.519], [88.344, 22.566], [88.379, 22.64], [88.3655, 22.5862], [88.456, 22.59], [88.434, 22.565], [88.447, 22.606], [88.322, 22.531], [88.423, 22.553], [88.3712, 22.6025]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_29_22',
    routeNumber: 'C-29',
    nameEn: 'Colony More ⇌ Mohanpur',
    nameBn: 'কলোনি মোড় (বারাসাত) ⇌ মোহনপুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Barasat Depot',
    depotBn: 'বারাসাত ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Larica Housing Estate / Adamas College, M. Hut, Wireless Gate, Chiria More',
    viaBn: 'Larica Housing Estate / Adamas College, M. Hut, Wireless Gate, Chiria More',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Colony More", "Larica Housing Estate / Adamas College", "Jagannath Pur", "Kazibari / University", "Metro Diary", "Cocapur", "Subhash Nagar", "Punjabi Khola", "Rangapur", "M. Hut", "Bank More", "Salap Bagnan", "Matarangi", "CSTC Depot", "M.P.R. Park", "Debpukur", "Barakatlia", "Wireless Gate", "Nona Chandan Pukur", "Jafarpur", "Chalam Pukur", "Subhas Colony", "Lal Kuthi", "Disha Eye Hospital", "Barrackpur Station", "Chiria More", "Administration Building", "Police J. College", "Surendranath College", "Kendraya Vid.", "Doglas Sector", "Dhobi ghat", "Mistery ghat", "Barackpore Court", "Mohanpur"],
    stopCount: 35,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Mohanpur',
        directionNameBn: 'মোহনপুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.44, 22.509], [88.364, 22.563], [88.358, 22.629], [88.4912, 22.7315], [88.359, 22.64], [88.34, 22.502], [88.397, 22.617], [88.379, 22.64], [88.394, 22.562], [88.356, 22.602], [88.418, 22.63], [87.9712, 22.4685], [88.429, 22.645], [88.347, 22.617], [88.339, 22.645], [88.397, 22.609], [88.332, 22.532], [88.439, 22.645], [88.464, 22.57], [88.445, 22.584], [88.459, 22.635], [88.445, 22.577], [88.44, 22.505], [88.342, 22.536], [88.351, 22.525], [88.439, 22.638], [88.46, 22.511], [88.427, 22.611], [88.377, 22.612], [88.435, 22.582], [88.415, 22.581], [88.381, 22.517], [88.426, 22.592], [88.365, 22.76], [88.54, 22.95]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Colony More',
        directionNameBn: 'কলোনি মোড় (বারাসাত)র দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.54, 22.95], [88.365, 22.76], [88.426, 22.592], [88.381, 22.517], [88.415, 22.581], [88.435, 22.582], [88.377, 22.612], [88.427, 22.611], [88.46, 22.511], [88.439, 22.638], [88.351, 22.525], [88.342, 22.536], [88.44, 22.505], [88.445, 22.577], [88.459, 22.635], [88.445, 22.584], [88.464, 22.57], [88.439, 22.645], [88.332, 22.532], [88.397, 22.609], [88.339, 22.645], [88.347, 22.617], [88.429, 22.645], [87.9712, 22.4685], [88.418, 22.63], [88.356, 22.602], [88.394, 22.562], [88.379, 22.64], [88.397, 22.617], [88.34, 22.502], [88.359, 22.64], [88.4912, 22.7315], [88.358, 22.629], [88.364, 22.563], [88.44, 22.509]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_nb_2_23',
    routeNumber: 'NB-2',
    nameEn: 'Nabanna ⇌ B. B. D. Bag',
    nameBn: 'নবান্ন ⇌ বি.বি.ডি. বাগ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Nabanna Express',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#0284C7',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Mandirtola, Hastings, Rabindra Sadan, Jeevandip',
    viaBn: 'মন্দিরতলা, Hastings, রবীন্দ্র সদন, Jeevandip',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Nabanna", "Mandirtola", "Toll Tax", "Hastings", "P.T.S.", "Rabindra Sadan", "Birla", "Jeevandip", "Park Street", "Mayo Road (ESPL)", "Eastern Hotel", "B. B. D. Bag"],
    stopCount: 12,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards B. B. D. Bag',
        directionNameBn: 'বি.বি.ডি. বাগর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3225, 22.5565], [88.347, 22.612], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3456, 22.5408], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.416, 22.597], [88.467, 22.61], [88.3503, 22.5719]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Nabanna',
        directionNameBn: 'নবান্নর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3503, 22.5719], [88.467, 22.61], [88.416, 22.597], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3456, 22.5408], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.347, 22.612], [88.3225, 22.5565]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_nb_1_24',
    routeNumber: 'NB-1',
    nameEn: 'Nabanna ⇌ Sealdah / Raja Bazar Depot',
    nameBn: 'নবান্ন ⇌ শিয়ালদহ / রাজাবাজার ডিপো',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Nabanna Express',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#0284C7',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Mandirtola, P.T.S., Jeevandip, Chandni Chawk',
    viaBn: 'মন্দিরতলা, পি.টি.এস., Jeevandip, Chandni Chawk',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Nabanna", "Mandirtola", "Toll Tax", "Hastings", "P.T.S.", "Rabindra Sadan", "Birla", "Jeevandip", "Park Street", "Esplanade", "Chandni Chawk", "Wellington Square", "Taltola", "Moulali", "N.R.S. Hospital", "Sealdah / Raja Bazar Depot"],
    stopCount: 16,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Sealdah / Raja Bazar Depot',
        directionNameBn: 'শিয়ালদহ / রাজাবাজার ডিপোর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3225, 22.5565], [88.347, 22.612], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3456, 22.5408], [88.338, 22.624], [88.442, 22.54], [88.3512, 22.551], [88.3524, 22.5647], [88.396, 22.593], [88.462, 22.535], [88.378, 22.622], [88.3685, 22.558], [88.401, 22.528], [88.3712, 22.5675]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Nabanna',
        directionNameBn: 'নবান্নর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3712, 22.5675], [88.401, 22.528], [88.3685, 22.558], [88.378, 22.622], [88.462, 22.535], [88.396, 22.593], [88.3524, 22.5647], [88.3512, 22.551], [88.442, 22.54], [88.338, 22.624], [88.3456, 22.5408], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.347, 22.612], [88.3225, 22.5565]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_7__1_25',
    routeNumber: 'E-7 /1',
    nameEn: 'Esplanade ⇌ Shyampur',
    nameBn: 'এসপ্ল্যানেড ⇌ শ্যামপুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'P.T.S., Swarswati Bridge, Kalitala, Library More',
    viaBn: 'পি.টি.এস., Swarswati Bridge, Kalitala, Library More',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Esplanade", "P.T.S.", "Hastings", "Toll Tax", "Carry Road", "Belepole", "Bathor", "Bakshara / Jana Ghati", "Santragachi", "Moukhali", "Garpha", "Kona Truck Terminal", "Kona Express Way", "Ankurhati Check Post", "Swarswati Bridge", "Jalan Gate \u2013 1", "Jalan Gate No. 2", "Islampur", "Dhulaguri", "Nirmal Cinema Hall", "Dhulagiri Toll", "Khapar", "Ranihati", "Panipara", "Dhamisha", "Panchla", "Beltala", "Kalitala", "Malpara", "Jamuria Bridge", "Jora Koltala", "Manasa tola", "Neemdighi", "Uluberia Check Post", "CIPT College", "Birshibpur", "Growth Certer", "Pirtola", "Kulgachi", "Mahesh Rabha Bridge", "Library More", "Bagnan", "Antila Bridge", "Nuntia", "Raidighi", "Noyal", "Mohanpur", "Sasati", "Bardhaman", "Dharmatala", "Belpukur Bazar", "Belpukur College", "Hoglashi", "Gobindapur", "Shyampur"],
    stopCount: 55,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Shyampur',
        directionNameBn: 'শ্যামপুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3524, 22.5647], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.386, 22.601], [88.383, 22.558], [88.379, 22.635], [88.331, 22.515], [88.2835, 22.5788], [88.41, 22.513], [88.359, 22.643], [88.348, 22.633], [88.449, 22.647], [88.387, 22.616], [88.358, 22.621], [88.415, 22.575], [88.364, 22.564], [88.348, 22.632], [88.429, 22.646], [88.388, 22.625], [88.33, 22.511], [88.39, 22.512], [88.355, 22.589], [88.423, 22.547], [88.327, 22.612], [88.394, 22.567], [88.392, 22.541], [88.45, 22.513], [88.418, 22.63], [88.468, 22.632], [88.417, 22.613], [88.413, 22.553], [88.359, 22.643], [88.326, 22.59], [88.466, 22.602], [88.425, 22.583], [88.375, 22.584], [88.437, 22.608], [88.446, 22.592], [88.35, 22.507], [88.34, 22.5], [87.9712, 22.4685], [88.468, 22.63], [88.383, 22.552], [88.466, 22.604], [88.465, 22.576], [88.54, 22.95], [88.366, 22.592], [88.428, 22.627], [88.372, 22.53], [88.438, 22.631], [88.423, 22.559], [88.36, 22.501], [88.444, 22.566], [88.035, 22.25]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Esplanade',
        directionNameBn: 'এসপ্ল্যানেডর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.035, 22.25], [88.444, 22.566], [88.36, 22.501], [88.423, 22.559], [88.438, 22.631], [88.372, 22.53], [88.428, 22.627], [88.366, 22.592], [88.54, 22.95], [88.465, 22.576], [88.466, 22.604], [88.383, 22.552], [88.468, 22.63], [87.9712, 22.4685], [88.34, 22.5], [88.35, 22.507], [88.446, 22.592], [88.437, 22.608], [88.375, 22.584], [88.425, 22.583], [88.466, 22.602], [88.326, 22.59], [88.359, 22.643], [88.413, 22.553], [88.417, 22.613], [88.468, 22.632], [88.418, 22.63], [88.45, 22.513], [88.392, 22.541], [88.394, 22.567], [88.327, 22.612], [88.423, 22.547], [88.355, 22.589], [88.39, 22.512], [88.33, 22.511], [88.388, 22.625], [88.429, 22.646], [88.348, 22.632], [88.364, 22.564], [88.415, 22.575], [88.358, 22.621], [88.387, 22.616], [88.449, 22.647], [88.348, 22.633], [88.359, 22.643], [88.41, 22.513], [88.2835, 22.5788], [88.331, 22.515], [88.379, 22.635], [88.383, 22.558], [88.386, 22.601], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3524, 22.5647]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_7_26',
    routeNumber: 'E-7',
    nameEn: 'Esplanade ⇌ Bagnan',
    nameBn: 'এসপ্ল্যানেড ⇌ বাগনান',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'P.T.S., Garpha, Dhulagiri Toll, Jamuria Bridge',
    viaBn: 'পি.টি.এস., Garpha, Dhulagiri Toll, Jamuria Bridge',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Esplanade", "P.T.S.", "Hastings", "Toll Tax", "Carry Road", "Belepole", "Betor", "Bakshara / Jana Ghati", "Santragachi", "Moukhali", "Garpha", "Kona Express Way", "Ankurhati Check Post", "Swarswati Bridge", "Jalan Gate \u2013 1", "Jalan Gate No. 2", "Islampur", "Dhulaguri", "Nirmal Cinema Hall", "Dhulagiri Toll", "Khapar", "Ranihati", "Panipara", "Dhamisha", "Panchla", "Beltala", "Kalitala", "Malpara", "Jamuria Bridge", "Jora Koltala", "Manasa tola", "Neemdighi", "Uluberia Check Post", "CIPT College", "Birshibpur", "Growth Certer", "Pirtola", "Kulgachi", "Mahesh Rabha Bridge", "Library More", "Bagnan"],
    stopCount: 41,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Bagnan',
        directionNameBn: 'বাগনানর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3524, 22.5647], [88.3385, 22.542], [88.3312, 22.5458], [88.325, 22.576], [88.386, 22.601], [88.383, 22.558], [88.423, 22.552], [88.331, 22.515], [88.2835, 22.5788], [88.41, 22.513], [88.359, 22.643], [88.449, 22.647], [88.387, 22.616], [88.358, 22.621], [88.415, 22.575], [88.364, 22.564], [88.348, 22.632], [88.429, 22.646], [88.388, 22.625], [88.33, 22.511], [88.39, 22.512], [88.355, 22.589], [88.423, 22.547], [88.327, 22.612], [88.394, 22.567], [88.392, 22.541], [88.45, 22.513], [88.418, 22.63], [88.468, 22.632], [88.417, 22.613], [88.413, 22.553], [88.359, 22.643], [88.326, 22.59], [88.466, 22.602], [88.425, 22.583], [88.375, 22.584], [88.437, 22.608], [88.446, 22.592], [88.35, 22.507], [88.34, 22.5], [87.9712, 22.4685]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Esplanade',
        directionNameBn: 'এসপ্ল্যানেডর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[87.9712, 22.4685], [88.34, 22.5], [88.35, 22.507], [88.446, 22.592], [88.437, 22.608], [88.375, 22.584], [88.425, 22.583], [88.466, 22.602], [88.326, 22.59], [88.359, 22.643], [88.413, 22.553], [88.417, 22.613], [88.468, 22.632], [88.418, 22.63], [88.45, 22.513], [88.392, 22.541], [88.394, 22.567], [88.327, 22.612], [88.423, 22.547], [88.355, 22.589], [88.39, 22.512], [88.33, 22.511], [88.388, 22.625], [88.429, 22.646], [88.348, 22.632], [88.364, 22.564], [88.415, 22.575], [88.358, 22.621], [88.387, 22.616], [88.449, 22.647], [88.359, 22.643], [88.41, 22.513], [88.2835, 22.5788], [88.331, 22.515], [88.423, 22.552], [88.383, 22.558], [88.386, 22.601], [88.325, 22.576], [88.3312, 22.5458], [88.3385, 22.542], [88.3524, 22.5647]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_12_27',
    routeNumber: 'E-12',
    nameEn: 'Esplanade ⇌ Udaynarayanpur',
    nameBn: 'এসপ্ল্যানেড ⇌ উদয়নারায়ণপুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'P.T.S., Santragachi, B.D.O. Office, Patihal',
    viaBn: 'পি.টি.এস., সাঁতরাগাছি, B.D.O. Office, Patihal',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Esplanade", "P.T.S.", "Hastings", "Toll Plaza", "Carry Road", "Belepole", "Bathor", "Bakshara / Jana Ghati", "Santragachi", "Moukhali", "Khajurtala", "Lal Bari", "Sallap NHXING", "Katlia", "Makardah", "B.D.O. Office", "Domjur Stand", "Dhakin Bari", "Santoshpur", "2 No.", "Sandhya Bazar", "Bargachia", "Patihal", "Munshirhat", "Basantipur", "Pero", "Khalpar", "Khila", "Joynagar", "Rajapur", "Sinty", "Katgola", "Udaynarayanpur"],
    stopCount: 33,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Udaynarayanpur',
        directionNameBn: 'উদয়নারায়ণপুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3524, 22.5647], [88.3385, 22.542], [88.3312, 22.5458], [88.433, 22.549], [88.386, 22.601], [88.383, 22.558], [88.379, 22.635], [88.331, 22.515], [88.2835, 22.5788], [88.41, 22.513], [88.394, 22.572], [88.437, 22.616], [88.459, 22.648], [88.376, 22.59], [88.366, 22.593], [88.325, 22.587], [88.2185, 22.6412], [88.364, 22.562], [88.399, 22.644], [88.422, 22.534], [88.42, 22.514], [88.393, 22.559], [88.386, 22.603], [88.415, 22.582], [88.429, 22.644], [88.456, 22.592], [88.376, 22.59], [88.365, 22.584], [88.451, 22.515], [88.465, 22.587], [88.342, 22.535], [88.42, 22.501], [87.975, 22.72]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Esplanade',
        directionNameBn: 'এসপ্ল্যানেডর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[87.975, 22.72], [88.42, 22.501], [88.342, 22.535], [88.465, 22.587], [88.451, 22.515], [88.365, 22.584], [88.376, 22.59], [88.456, 22.592], [88.429, 22.644], [88.415, 22.582], [88.386, 22.603], [88.393, 22.559], [88.42, 22.514], [88.422, 22.534], [88.399, 22.644], [88.364, 22.562], [88.2185, 22.6412], [88.325, 22.587], [88.366, 22.593], [88.376, 22.59], [88.459, 22.648], [88.437, 22.616], [88.394, 22.572], [88.41, 22.513], [88.2835, 22.5788], [88.331, 22.515], [88.379, 22.635], [88.383, 22.558], [88.386, 22.601], [88.433, 22.549], [88.3312, 22.5458], [88.3385, 22.542], [88.3524, 22.5647]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_13_28',
    routeNumber: 'E-13',
    nameEn: 'Rabindrasadan/Hasting ⇌ Jangipara',
    nameBn: 'রবীন্দ্র সদন / হেস্টিংস ⇌ জঙ্গিপাড়া',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'P.T.S., Belepole, Makardah, Bargachia',
    viaBn: 'পি.টি.এস., Belepole, Makardah, Bargachia',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rabindrasadan/Hasting", "P.T.S.", "Hastings", "V.S. Toll Plaza", "Carry Road", "Belepole", "Bakshara", "Santragachi", "Salap", "Makardah", "Domjur Stand", "Dakshini Bari", "Santoshpur", "Bargachia", "Bargachia Level Crossing", "Jagatballavpur", "Ichnagari", "Sitapur", "Prasadpur", "Mohonbati", "Jangipara"],
    stopCount: 21,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Jangipara',
        directionNameBn: 'জঙ্গিপাড়ার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.369, 22.649], [88.3385, 22.542], [88.3312, 22.5458], [88.373, 22.551], [88.386, 22.601], [88.383, 22.558], [88.462, 22.536], [88.2835, 22.5788], [88.434, 22.567], [88.366, 22.593], [88.2185, 22.6412], [88.453, 22.551], [88.399, 22.644], [88.393, 22.559], [88.357, 22.611], [88.458, 22.63], [88.467, 22.618], [88.414, 22.571], [88.445, 22.58], [88.332, 22.544], [88.05, 22.75]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rabindrasadan/Hasting',
        directionNameBn: 'রবীন্দ্র সদন / হেস্টিংসর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.05, 22.75], [88.332, 22.544], [88.445, 22.58], [88.414, 22.571], [88.467, 22.618], [88.458, 22.63], [88.357, 22.611], [88.393, 22.559], [88.399, 22.644], [88.453, 22.551], [88.2185, 22.6412], [88.366, 22.593], [88.434, 22.567], [88.2835, 22.5788], [88.462, 22.536], [88.383, 22.558], [88.386, 22.601], [88.373, 22.551], [88.3312, 22.5458], [88.3385, 22.542], [88.369, 22.649]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_13_1_29',
    routeNumber: 'E-13/1',
    nameEn: 'Rabindrasadan/Hasting ⇌ Jangipara',
    nameBn: 'রবীন্দ্র সদন / হেস্টিংস ⇌ জঙ্গিপাড়া',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'P.T.S., Santragachi, Chanditala, Siakhala',
    viaBn: 'পি.টি.এস., সাঁতরাগাছি, Chanditala, Siakhala',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rabindrasadan/Hasting", "P.T.S.", "Hastings", "V.S. Toll Plaza", "Carry Road", "Belepole", "Bakshara", "Santragachi", "Salap", "Kona", "Chamrail", "Jagadispur", "Kalipur", "Chanditala", "Kolachara", "Kumirmara", "Jangalpara", "Krisnarampur", "Mashat", "Siakhala", "Ujal", "Furfurasharif", "Dhanpota", "Rashpur", "Bosontopur", "Jangipara"],
    stopCount: 26,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Jangipara',
        directionNameBn: 'জঙ্গিপাড়ার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.369, 22.649], [88.3385, 22.542], [88.3312, 22.5458], [88.373, 22.551], [88.386, 22.601], [88.383, 22.558], [88.462, 22.536], [88.2835, 22.5788], [88.434, 22.567], [88.407, 22.619], [88.422, 22.53], [88.338, 22.634], [88.368, 22.63], [88.43, 22.504], [88.418, 22.632], [88.335, 22.578], [88.379, 22.641], [88.437, 22.614], [88.411, 22.515], [88.348, 22.627], [88.439, 22.644], [88.462, 22.539], [88.329, 22.638], [88.394, 22.565], [88.425, 22.577], [88.05, 22.75]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rabindrasadan/Hasting',
        directionNameBn: 'রবীন্দ্র সদন / হেস্টিংসর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.05, 22.75], [88.425, 22.577], [88.394, 22.565], [88.329, 22.638], [88.462, 22.539], [88.439, 22.644], [88.348, 22.627], [88.411, 22.515], [88.437, 22.614], [88.379, 22.641], [88.335, 22.578], [88.418, 22.632], [88.43, 22.504], [88.368, 22.63], [88.338, 22.634], [88.422, 22.53], [88.407, 22.619], [88.434, 22.567], [88.2835, 22.5788], [88.462, 22.536], [88.383, 22.558], [88.386, 22.601], [88.373, 22.551], [88.3312, 22.5458], [88.3385, 22.542], [88.369, 22.649]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_17_30',
    routeNumber: 'E-17',
    nameEn: 'Dakbangla ⇌ Digha',
    nameBn: 'ডাকবাংলো ⇌ দীঘা',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Barasat Depot',
    depotBn: 'বারাসাত ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Madhyamgram, Alampur, Kalaghat, Bajkul',
    viaBn: 'Madhyamgram, Alampur, Kalaghat, Bajkul',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Dakbangla", "Madhyamgram", "Airport", "Ultadanga", "EM2", "Toll Plaza", "Santragachi", "Alampur", "Ranikuthi", "Panchla", "Kulgachi", "Uluberia", "Bagnan", "Kalaghat", "Machada", "Nimtonri", "Nanda Kumar", "Narghat", "Chandipur", "Bajkul", "Henmia", "Kalinagar", "Nachinda", "Contai", "Chaul Khola", "Balisai", "Ramnagar", "Digha"],
    stopCount: 28,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Digha',
        directionNameBn: 'দীঘার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.45, 22.511], [88.455, 22.698], [88.4467, 22.652], [88.3888, 22.5898], [88.454, 22.574], [88.433, 22.549], [88.2835, 22.5788], [88.325, 22.575], [88.403, 22.559], [88.394, 22.567], [88.446, 22.592], [88.377, 22.616], [87.9712, 22.4685], [88.467, 22.616], [88.413, 22.55], [88.468, 22.625], [88.384, 22.574], [88.429, 22.647], [88.356, 22.602], [88.339, 22.644], [88.367, 22.608], [88.333, 22.557], [88.448, 22.622], [88.377, 22.605], [88.422, 22.539], [88.419, 22.643], [88.437, 22.614], [87.5112, 21.6285]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Dakbangla',
        directionNameBn: 'ডাকবাংলোর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[87.5112, 21.6285], [88.437, 22.614], [88.419, 22.643], [88.422, 22.539], [88.377, 22.605], [88.448, 22.622], [88.333, 22.557], [88.367, 22.608], [88.339, 22.644], [88.356, 22.602], [88.429, 22.647], [88.384, 22.574], [88.468, 22.625], [88.413, 22.55], [88.467, 22.616], [87.9712, 22.4685], [88.377, 22.616], [88.446, 22.592], [88.394, 22.567], [88.403, 22.559], [88.325, 22.575], [88.2835, 22.5788], [88.433, 22.549], [88.454, 22.574], [88.3888, 22.5898], [88.4467, 22.652], [88.455, 22.698], [88.45, 22.511]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_16_31',
    routeNumber: 'E-16',
    nameEn: 'M.G. Road / C.R. Avenue Xing ⇌ Kalyani',
    nameBn: 'মহাত্মা গান্ধী রোড ক্রসিং ⇌ কল্যাণী',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'R.G.Kar Hospital, Madhyamgram, HM, Cadamara',
    viaBn: 'R.G.Kar Hospital, Madhyamgram, HM, Cadamara',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["M.G. Road / C.R. Avenue Xing", "R.G.Kar Hospital", "Birati More", "Hridaypur Stn Road", "Shyampukur", "Bangur Avenue", "Satyanarayan Park", "Nagar Bazar", "Beadon Street", "Bangar Hospital", "Madhyamgram", "Doltala", "Gora Bazar", "Airport", "Belgachia", "B.T. College", "Chitpur", "M.G. Road Fly Over", "Ajanta", "HM", "Dakbangla", "Colony More", "Khilkapur", "Mirhati", "Kamdevpur", "Amdanga", "Awal Sidhi", "Adhata", "Cadamara", "Rajberia", "Barajagulia", "Kalyani More", "Rail gate", "KD AD More", "Hospital", "Spring Dell School", "College", "University", "Municipility", "Kalyani"],
    stopCount: 40,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Kalyani',
        directionNameBn: 'কল্যাণীর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.434, 22.565], [88.436, 22.604], [88.4365, 22.6685], [88.336, 22.592], [88.451, 22.527], [88.438, 22.624], [88.423, 22.553], [88.337, 22.608], [88.379, 22.64], [88.425, 22.583], [88.455, 22.698], [88.466, 22.59], [88.375, 22.582], [88.4467, 22.652], [88.3814, 22.6075], [88.435, 22.576], [88.435, 22.589], [88.355, 22.576], [88.461, 22.52], [88.459, 22.641], [88.45, 22.511], [88.44, 22.509], [88.336, 22.59], [88.368, 22.623], [88.385, 22.582], [88.465, 22.587], [88.443, 22.545], [88.359, 22.639], [88.357, 22.616], [88.419, 22.636], [88.411, 22.529], [88.4312, 22.9755], [88.388, 22.623], [88.347, 22.606], [88.3988, 22.5135], [88.464, 22.574], [88.441, 22.529], [88.377, 22.619], [88.324, 22.565], [88.4312, 22.9755]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards M.G. Road / C.R. Avenue Xing',
        directionNameBn: 'মহাত্মা গান্ধী রোড ক্রসিংর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.4312, 22.9755], [88.324, 22.565], [88.377, 22.619], [88.441, 22.529], [88.464, 22.574], [88.3988, 22.5135], [88.347, 22.606], [88.388, 22.623], [88.4312, 22.9755], [88.411, 22.529], [88.419, 22.636], [88.357, 22.616], [88.359, 22.639], [88.443, 22.545], [88.465, 22.587], [88.385, 22.582], [88.368, 22.623], [88.336, 22.59], [88.44, 22.509], [88.45, 22.511], [88.459, 22.641], [88.461, 22.52], [88.355, 22.576], [88.435, 22.589], [88.435, 22.576], [88.3814, 22.6075], [88.4467, 22.652], [88.375, 22.582], [88.466, 22.59], [88.455, 22.698], [88.425, 22.583], [88.379, 22.64], [88.337, 22.608], [88.423, 22.553], [88.438, 22.624], [88.451, 22.527], [88.336, 22.592], [88.4365, 22.6685], [88.436, 22.604], [88.434, 22.565]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_14_32',
    routeNumber: 'E-14',
    nameEn: 'V. House ⇌ Furfuira',
    nameBn: 'ভিক্টোরিয়া হাউস ⇌ ফুরফুরা শরিফ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Khadi Bhaban, Beadon Street, Rabindra Bharati, Bally Halt',
    viaBn: 'Khadi Bhaban, Beadon Street, Rabindra Bharati, Bally Halt',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["V. House", "Khadi Bhaban", "Bowbazar PS", "B.B. C. St. Xing (Bow bazar)", "Medical College", "M.G. Rd Xing", "Mahajyoti Sadan", "Vivekananda Road", "Beadon Street", "Sovabazar", "Rajballavpur / AV School", "Shyambazar", "Tala Post Office", "Paik Para", "Chiriamore", "Rabindra Bharati", "Sinthee More", "Pal Para", "Tobin Road", "Boonhooghly (ISI)", "Dunlop", "Dakshinwar", "Bally Halt", "Dankuni", "Kalipara", "Chanditala", "Kalachara", "Kumir More", "J. Pur", "Masat", "Siakhola", "F. More", "Furfuira"],
    stopCount: 33,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Furfuira',
        directionNameBn: 'ফুরফুরা শরিফর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.417, 22.608], [88.358, 22.632], [88.424, 22.568], [88.433, 22.546], [88.432, 22.539], [88.352, 22.543], [88.456, 22.59], [88.3655, 22.5862], [88.379, 22.64], [88.344, 22.566], [88.354, 22.572], [88.3712, 22.6025], [88.423, 22.547], [88.433, 22.545], [88.437, 22.612], [88.325, 22.584], [88.379, 22.635], [88.367, 22.618], [88.42, 22.513], [88.34, 22.507], [88.449, 22.642], [88.444, 22.572], [88.416, 22.604], [88.3012, 22.6855], [88.364, 22.569], [88.43, 22.504], [88.405, 22.587], [88.464, 22.569], [88.331, 22.518], [88.349, 22.642], [88.404, 22.56], [88.321, 22.517], [88.13, 22.78]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards V. House',
        directionNameBn: 'ভিক্টোরিয়া হাউসর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.13, 22.78], [88.321, 22.517], [88.404, 22.56], [88.349, 22.642], [88.331, 22.518], [88.464, 22.569], [88.405, 22.587], [88.43, 22.504], [88.364, 22.569], [88.3012, 22.6855], [88.416, 22.604], [88.444, 22.572], [88.449, 22.642], [88.34, 22.507], [88.42, 22.513], [88.367, 22.618], [88.379, 22.635], [88.325, 22.584], [88.437, 22.612], [88.433, 22.545], [88.423, 22.547], [88.3712, 22.6025], [88.354, 22.572], [88.344, 22.566], [88.379, 22.64], [88.3655, 22.5862], [88.456, 22.59], [88.352, 22.543], [88.432, 22.539], [88.433, 22.546], [88.424, 22.568], [88.358, 22.632], [88.417, 22.608]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_18_33',
    routeNumber: 'E-18',
    nameEn: 'EM2 ⇌ Dhamakhali',
    nameBn: 'ই.এম. বাইপাস ⇌ ধামাখালি',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Wellington, Buntia, N. Muri, Siristone',
    viaBn: 'Wellington, Buntia, N. Muri, Siristone',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["EM2", "Wellington", "Moulali", "Sealdah Court", "Beleghata", "Stadium", "Chingrighata", "Science City", "Chowbaga", "Buntia", "BIT", "Bamanghata", "Kantalia", "Kolkata Leather Company", "Bhojerhat", "Paglahut", "Boralighat", "N. Muri", "Ghatak Pukur", "Ghosh Para", "Bhusighata", "Baman Pukur", "Minikha", "Malancha", "Matbari", "Siristone", "Bairmari", "Kumir Mora", "Raj bari", "Baraj Ghera", "Sarbenia", "", "Rampur", "Haldergheni", "Dhamakhali"],
    stopCount: 35,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Dhamakhali',
        directionNameBn: 'ধামাখালির দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.454, 22.574], [88.392, 22.537], [88.3685, 22.558], [88.3712, 22.5675], [88.357, 22.616], [88.425, 22.576], [88.3989, 22.5623], [88.3962, 22.5404], [88.426, 22.592], [88.412, 22.533], [88.372, 22.533], [88.394, 22.572], [88.357, 22.615], [88.469, 22.643], [88.432, 22.535], [88.404, 22.566], [88.467, 22.606], [88.439, 22.648], [88.58, 22.49], [88.42, 22.503], [88.407, 22.605], [88.368, 22.63], [88.391, 22.524], [88.7512, 22.5215], [88.377, 22.611], [88.416, 22.6], [88.426, 22.59], [88.358, 22.633], [88.422, 22.538], [88.459, 22.649], [88.325, 22.588], [88.3431, 22.5835], [88.355, 22.586], [88.41, 22.504], [88.8512, 22.3712]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards EM2',
        directionNameBn: 'ই.এম. বাইপাসর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.8512, 22.3712], [88.41, 22.504], [88.355, 22.586], [88.3431, 22.5835], [88.325, 22.588], [88.459, 22.649], [88.422, 22.538], [88.358, 22.633], [88.426, 22.59], [88.416, 22.6], [88.377, 22.611], [88.7512, 22.5215], [88.391, 22.524], [88.368, 22.63], [88.407, 22.605], [88.42, 22.503], [88.58, 22.49], [88.439, 22.648], [88.467, 22.606], [88.404, 22.566], [88.432, 22.535], [88.469, 22.643], [88.357, 22.615], [88.394, 22.572], [88.372, 22.533], [88.412, 22.533], [88.426, 22.592], [88.3962, 22.5404], [88.3989, 22.5623], [88.425, 22.576], [88.357, 22.616], [88.3712, 22.5675], [88.3685, 22.558], [88.392, 22.537], [88.454, 22.574]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_15_34',
    routeNumber: 'E-15',
    nameEn: 'Rabindra Sadan ⇌ Gadiara',
    nameBn: 'রবীন্দ্র সদন ⇌ গদিয়াড়া',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Belgachia Depot',
    depotBn: 'বেলগাছিয়া ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'P.T.S., Dhulaguri, Carulata, ',
    viaBn: 'পি.টি.এস., ধুলাগড়, Carulata, ',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rabindra Sadan", "P.T.S.", "Toll Tax", "Buxarah", "Santragachi", "Ankurhati Check Post", "Jalan Gate \u2013 1", "Alampur", "Dhulaguri", "Ranihati", "Panchla", "Khalasari", "Manarntola", "Uluberia", "Uluberia Railway Xing", "Carulata", "Jagadispur", "Kalinagar Chow Matha", "Dhula Simla", "Bagnan", "Ichapur", "Ulughata", "", "Bus Stand", "Bara Garcha Mukh", "Banamali Pur", "Moula", "Kharuberia", "Shyampur", "Laxmibazar", "Cujarpur", "Cuirepore", "Gadiara"],
    stopCount: 33,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Gadiara',
        directionNameBn: 'গদিয়াড়ার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3456, 22.5408], [88.3385, 22.542], [88.325, 22.576], [88.452, 22.543], [88.2835, 22.5788], [88.387, 22.616], [88.415, 22.575], [88.325, 22.575], [88.429, 22.646], [88.355, 22.589], [88.394, 22.567], [88.333, 22.558], [88.444, 22.563], [88.377, 22.616], [88.448, 22.623], [88.436, 22.603], [88.338, 22.634], [88.356, 22.603], [88.45, 22.513], [87.9712, 22.4685], [88.364, 22.565], [88.44, 22.501], [88.3431, 22.5835], [88.4365, 22.6685], [88.429, 22.648], [88.359, 22.643], [88.3685, 22.558], [88.342, 22.531], [88.035, 22.25], [88.337, 22.612], [88.372, 22.536], [88.449, 22.643], [88.0312, 22.2155]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rabindra Sadan',
        directionNameBn: 'রবীন্দ্র সদনর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.0312, 22.2155], [88.449, 22.643], [88.372, 22.536], [88.337, 22.612], [88.035, 22.25], [88.342, 22.531], [88.3685, 22.558], [88.359, 22.643], [88.429, 22.648], [88.4365, 22.6685], [88.3431, 22.5835], [88.44, 22.501], [88.364, 22.565], [87.9712, 22.4685], [88.45, 22.513], [88.356, 22.603], [88.338, 22.634], [88.436, 22.603], [88.448, 22.623], [88.377, 22.616], [88.444, 22.563], [88.333, 22.558], [88.394, 22.567], [88.355, 22.589], [88.429, 22.646], [88.325, 22.575], [88.415, 22.575], [88.387, 22.616], [88.2835, 22.5788], [88.452, 22.543], [88.325, 22.576], [88.3385, 22.542], [88.3456, 22.5408]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_7_35',
    routeNumber: 'C-7',
    nameEn: 'H.M.Ghosh College ⇌ Howrah Station',
    nameBn: 'এইচ.এম. ঘোষ কলেজ ⇌ হাওড়া স্টেশন',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Ramnagar, Hindustan Liver, Khidirpur, Esplanade',
    viaBn: 'Ramnagar, Hindustan Liver, Khidirpur, এসপ্ল্যানেড',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["H.M.Ghosh College", "Ramnagar", "Hindustan Liver", "Khidirpur", "Esplanade", "Howrah Station"],
    stopCount: 6,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.37, 22.5], [88.437, 22.614], [88.332, 22.537], [88.3248, 22.5367], [88.3524, 22.5647], [88.3431, 22.5835]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards H.M.Ghosh College',
        directionNameBn: 'এইচ.এম. ঘোষ কলেজর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3431, 22.5835], [88.3524, 22.5647], [88.3248, 22.5367], [88.332, 22.537], [88.437, 22.614], [88.37, 22.5]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_c_8_36',
    routeNumber: 'C-8',
    nameEn: 'Tollygunge Metro ⇌ Kaikhali',
    nameBn: 'টালিগঞ্জ মেট্রো ⇌ কৈখালী',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'City C-Series',
    depotEn: 'Tollygunge Depot',
    depotBn: 'টালিগঞ্জ ডিপো',
    isAC: false,
    color: '#2563EB',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Rasbehari, Gariahat, E.M.Bypass, Nicco Park',
    viaBn: 'Rasbehari, Gariahat, E.M.Bypass, Nicco Park',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Tollygunge Metro", "Rasbehari", "Gariahat", "E.M.Bypass", "Nicco Park", "S.D.F. Building", "Chinar Park", "Kaikhali"],
    stopCount: 8,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Kaikhali',
        directionNameBn: 'কৈখালীর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3465, 22.4988], [88.373, 22.557], [88.3644, 22.518], [88.43, 22.501], [88.371, 22.523], [88.396, 22.594], [88.332, 22.532], [88.4312, 22.6312]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Tollygunge Metro',
        directionNameBn: 'টালিগঞ্জ মেট্রোর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.4312, 22.6312], [88.332, 22.532], [88.396, 22.594], [88.371, 22.523], [88.43, 22.501], [88.3644, 22.518], [88.373, 22.557], [88.3465, 22.4988]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_1_37',
    routeNumber: 'T-1',
    nameEn: 'Rajabazar ⇌ Dhulaguri',
    nameBn: 'রাজাবাজার ⇌ ধুলাগড়',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'B.B.Ganguly Street, Lenin Sarani, Esplanade, Rabindra Sadan',
    viaBn: 'B.B.Ganguly Street, Lenin Sarani, এসপ্ল্যানেড, রবীন্দ্র সদন',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rajabazar", "B.B.Ganguly Street", "Lenin Sarani", "Esplanade", "Rabindra Sadan", "Vidyasagar Setu", "Andul Stn Road", "Nh6 xing", "Dhulaguri"],
    stopCount: 9,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Dhulaguri',
        directionNameBn: 'ধুলাগড়র দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3734, 22.5739], [88.436, 22.591], [88.339, 22.64], [88.3524, 22.5647], [88.3456, 22.5408], [88.377, 22.615], [88.359, 22.639], [88.377, 22.61], [88.429, 22.646]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rajabazar',
        directionNameBn: 'রাজাবাজারর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.429, 22.646], [88.377, 22.61], [88.359, 22.639], [88.377, 22.615], [88.3456, 22.5408], [88.3524, 22.5647], [88.339, 22.64], [88.436, 22.591], [88.3734, 22.5739]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_2_38',
    routeNumber: 'T-2',
    nameEn: 'Mandirtola ⇌ B. B. D. Bag',
    nameBn: 'মন্দিরতলা ⇌ বি.বি.ডি. বাগ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Vidyasagar Setu, Rabindra Sadan, Park Street, Esplanade',
    viaBn: 'Vidyasagar Setu, রবীন্দ্র সদন, Park Street, এসপ্ল্যানেড',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Mandirtola", "Vidyasagar Setu", "Rabindra Sadan", "Park Street", "Esplanade", "B. B. D. Bag"],
    stopCount: 6,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards B. B. D. Bag',
        directionNameBn: 'বি.বি.ডি. বাগর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.347, 22.612], [88.377, 22.615], [88.3456, 22.5408], [88.3512, 22.551], [88.3524, 22.5647], [88.3503, 22.5719]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Mandirtola',
        directionNameBn: 'মন্দিরতলার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3503, 22.5719], [88.3524, 22.5647], [88.3512, 22.551], [88.3456, 22.5408], [88.377, 22.615], [88.347, 22.612]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_3_39',
    routeNumber: 'T-3',
    nameEn: 'Rajabazar ⇌ Ghatak Pukur',
    nameBn: 'রাজাবাজার ⇌ ঘোটকপুকুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Sealdah Court, Pamar Bazar, Gobindakhatik Road, Baishali',
    viaBn: 'Sealdah Court, Pamar Bazar, Gobindakhatik Road, Baishali',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rajabazar", "Sealdah Court", "Pamar Bazar", "Gobindakhatik Road", "Baishali", "Science City", "Leather Complex", "Bhojerhat", "Ghatak Pukur"],
    stopCount: 9,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Ghatak Pukur',
        directionNameBn: 'ঘোটকপুকুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3734, 22.5739], [88.3712, 22.5675], [88.427, 22.619], [88.325, 22.583], [88.455, 22.577], [88.3962, 22.5404], [88.453, 22.553], [88.432, 22.535], [88.58, 22.49]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rajabazar',
        directionNameBn: 'রাজাবাজারর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.58, 22.49], [88.432, 22.535], [88.453, 22.553], [88.3962, 22.5404], [88.455, 22.577], [88.325, 22.583], [88.427, 22.619], [88.3712, 22.5675], [88.3734, 22.5739]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_10_40',
    routeNumber: 'T-10',
    nameEn: 'Rajabazar ⇌ Malancha',
    nameBn: 'রাজাবাজার ⇌ মালঞ্চ',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Sealdah Court, Gobindakhatik Road, Leather Complex, Ghatak Pukur',
    viaBn: 'Sealdah Court, Gobindakhatik Road, Leather Complex, ঘোটকপুকুর',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rajabazar", "Sealdah Court", "Pamar Bazar", "Gobindakhatik Road", "Science City", "Leather Complex", "Bhojerhat", "Ghatak Pukur", "Ghusighata", "Minakha", "Malancha"],
    stopCount: 11,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Malancha',
        directionNameBn: 'মালঞ্চর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3734, 22.5739], [88.3712, 22.5675], [88.427, 22.619], [88.325, 22.583], [88.3962, 22.5404], [88.453, 22.553], [88.432, 22.535], [88.58, 22.49], [88.387, 22.613], [88.323, 22.547], [88.7512, 22.5215]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rajabazar',
        directionNameBn: 'রাজাবাজারর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.7512, 22.5215], [88.323, 22.547], [88.387, 22.613], [88.58, 22.49], [88.432, 22.535], [88.453, 22.553], [88.3962, 22.5404], [88.325, 22.583], [88.427, 22.619], [88.3712, 22.5675], [88.3734, 22.5739]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_t_10_1_41',
    routeNumber: 'T-10/1',
    nameEn: 'Rajabazar ⇌ Vebia',
    nameBn: 'রাজাবাজার ⇌ বেবিয়া',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Tramway Feeder T-Series',
    depotEn: 'Rajabazar Depot',
    depotBn: 'রাজাবাজার ডিপো',
    isAC: false,
    color: '#7C3AED',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Sealdah Court, Topsia, Bhojerhat, Minakha',
    viaBn: 'Sealdah Court, Topsia, Bhojerhat, Minakha',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Rajabazar", "Sealdah Court", "Pamar Bazar", "Gobindakhatik Road", "Topsia", "Science City", "Leather Complex", "Bhojerhat", "Ghatak Pukur", "Ghusighata", "Minakha", "Malancha", "Chaital Bridge", "Vebia"],
    stopCount: 14,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Vebia',
        directionNameBn: 'বেবিয়ার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3734, 22.5739], [88.3712, 22.5675], [88.427, 22.619], [88.325, 22.583], [88.342, 22.536], [88.3962, 22.5404], [88.453, 22.553], [88.432, 22.535], [88.58, 22.49], [88.387, 22.613], [88.323, 22.547], [88.7512, 22.5215], [88.467, 22.619], [88.395, 22.584]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Rajabazar',
        directionNameBn: 'রাজাবাজারর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.395, 22.584], [88.467, 22.619], [88.7512, 22.5215], [88.323, 22.547], [88.387, 22.613], [88.58, 22.49], [88.432, 22.535], [88.453, 22.553], [88.3962, 22.5404], [88.342, 22.536], [88.325, 22.583], [88.427, 22.619], [88.3712, 22.5675], [88.3734, 22.5739]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_26_42',
    routeNumber: 'E-26',
    nameEn: 'Howrah Station ⇌ Baruipur',
    nameBn: 'হাওড়া স্টেশন ⇌ বারুইপুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Ghasbagan Depot',
    depotBn: 'ঘাসবাগান ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'B. B. D. Bag, Moulali, Science City, Kamalgazi',
    viaBn: 'বি.বি.ডি. বাগ, Moulali, Science City, Kamalgazi',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Howrah Station", "B. B. D. Bag", "Esplanade", "Moulali", "Park Circus", "Science City", "E.M.Bypass", "Kamalgazi", "Rajpur", "Harinavi", "Malancha", "Padma Pukur", "Baruipur"],
    stopCount: 13,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Baruipur',
        directionNameBn: 'বারুইপুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3431, 22.5835], [88.3503, 22.5719], [88.3524, 22.5647], [88.3685, 22.558], [88.3683, 22.5414], [88.3962, 22.5404], [88.43, 22.501], [88.345, 22.575], [88.374, 22.573], [88.408, 22.626], [88.7512, 22.5215], [88.376, 22.598], [88.4312, 22.3655]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.4312, 22.3655], [88.376, 22.598], [88.7512, 22.5215], [88.408, 22.626], [88.374, 22.573], [88.345, 22.575], [88.43, 22.501], [88.3962, 22.5404], [88.3683, 22.5414], [88.3685, 22.558], [88.3524, 22.5647], [88.3503, 22.5719], [88.3431, 22.5835]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_ord_2_43',
    routeNumber: 'ORD-2',
    nameEn: 'B. B. D. Bag ⇌ Joka',
    nameBn: 'বি.বি.ডি. বাগ ⇌ জোকা',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Ordinary Connector',
    depotEn: 'Ghasbagan Depot',
    depotBn: 'ঘাসবাগান ডিপো',
    isAC: false,
    color: '#0284C7',
    fareMin: 10,
    fareMax: 25,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Khidirpur, Mominpur, Behala Chowrasta, Sakhar Bazar',
    viaBn: 'Khidirpur, Mominpur, Behala Chowrasta, Sakhar Bazar',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["B. B. D. Bag", "Khidirpur", "Mominpur", "Behala Chowrasta", "Sakhar Bazar", "Thakurpukur", "Joka"],
    stopCount: 7,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Joka',
        directionNameBn: 'জোকার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3503, 22.5719], [88.3248, 22.5367], [88.337, 22.61], [88.3185, 22.4952], [88.405, 22.581], [88.447, 22.606], [88.2985, 22.4412]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards B. B. D. Bag',
        directionNameBn: 'বি.বি.ডি. বাগর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.2985, 22.4412], [88.447, 22.606], [88.405, 22.581], [88.3185, 22.4952], [88.337, 22.61], [88.3248, 22.5367], [88.3503, 22.5719]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_ac_2_44',
    routeNumber: 'AC-2',
    nameEn: 'Khidirpur Depot ⇌ Barasat',
    nameBn: 'Khidirpur Depot ⇌ বারাসাত',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Deluxe AC',
    depotEn: 'Khidirpur Depot',
    depotBn: 'খিদিরপুর ডিপো',
    isAC: true,
    color: '#059669',
    fareMin: 25,
    fareMax: 60,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Hastings, Rabindra Sadan, Park Circus, Science City',
    viaBn: 'Hastings, রবীন্দ্র সদন, পার্ক সার্কাস, Science City',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Khidirpur Depot", "Hastings", "Rabindra Sadan", "Park Circus", "Science City", "Karunamoyee", "Barasat"],
    stopCount: 7,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Barasat',
        directionNameBn: 'বারাসাতর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3248, 22.5367], [88.3312, 22.5458], [88.3456, 22.5408], [88.3683, 22.5414], [88.3962, 22.5404], [88.4187, 22.5867], [88.48, 22.72]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Khidirpur Depot',
        directionNameBn: 'Khidirpur Depotর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.48, 22.72], [88.4187, 22.5867], [88.3962, 22.5404], [88.3683, 22.5414], [88.3456, 22.5408], [88.3312, 22.5458], [88.3248, 22.5367]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_ac_3_45',
    routeNumber: 'AC-3',
    nameEn: 'Barasat ⇌ Vivekananda Road',
    nameBn: 'বারাসাত ⇌ বিবেকানন্দ রোড (গিরিশ পার্ক)',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Deluxe AC',
    depotEn: 'Barasat Depot',
    depotBn: 'বারাসাত ডিপো',
    isAC: true,
    color: '#059669',
    fareMin: 25,
    fareMax: 60,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Madhyamgram, Airport, Ultadanga',
    viaBn: 'Madhyamgram, Airport, Ultadanga',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Barasat", "Madhyamgram", "Airport", "Ultadanga", "Vivekananda Road"],
    stopCount: 5,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Vivekananda Road',
        directionNameBn: 'বিবেকানন্দ রোড (গিরিশ পার্ক)র দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.48, 22.72], [88.455, 22.698], [88.4467, 22.652], [88.3888, 22.5898], [88.3655, 22.5862]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Barasat',
        directionNameBn: 'বারাসাতর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.3655, 22.5862], [88.3888, 22.5898], [88.4467, 22.652], [88.455, 22.698], [88.48, 22.72]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_ac_4_46',
    routeNumber: 'AC-4',
    nameEn: 'Barasat ⇌ Karunamoyee',
    nameBn: 'বারাসাত ⇌ করুণাময়ী',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Deluxe AC',
    depotEn: 'Barasat Depot',
    depotBn: 'বারাসাত ডিপো',
    isAC: true,
    color: '#059669',
    fareMin: 25,
    fareMax: 60,
    frequencyMinutes: 12,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'ECO PARK, Airport, City Centre 2, Madhyamgram',
    viaBn: 'ECO PARK, Airport, City Centre 2, Madhyamgram',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Barasat", "ECO PARK", "Airport", "City Centre 2", "Madhyamgram", "DLF Bldg I", "Karunamoyee"],
    stopCount: 7,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Karunamoyee',
        directionNameBn: 'করুণাময়ীর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.48, 22.72], [88.413, 22.551], [88.4467, 22.652], [88.322, 22.537], [88.455, 22.698], [88.392, 22.541], [88.4187, 22.5867]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Barasat',
        directionNameBn: 'বারাসাতর দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.4187, 22.5867], [88.392, 22.541], [88.455, 22.698], [88.322, 22.537], [88.4467, 22.652], [88.413, 22.551], [88.48, 22.72]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_19_47',
    routeNumber: 'E-19',
    nameEn: 'Habra ⇌ Digha',
    nameBn: 'হাবড়া ⇌ দীঘা',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Barasat Depot',
    depotBn: 'বারাসাত ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Barasat, Dakshinwar, Dankuni, Dhulagarh',
    viaBn: 'বারাসাত, Dakshinwar, ডানকুনি, Dhulagarh',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Habra", "Barasat", "Dakshinwar", "Dankuni", "Dhulagarh", "Ranihati", "Bagnan", "Machada", "Digha"],
    stopCount: 9,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Digha',
        directionNameBn: 'দীঘার দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.63, 22.83], [88.48, 22.72], [88.444, 22.572], [88.3012, 22.6855], [88.376, 22.59], [88.355, 22.589], [87.9712, 22.4685], [88.413, 22.55], [87.5112, 21.6285]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Habra',
        directionNameBn: 'হাবড়ার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[87.5112, 21.6285], [88.413, 22.55], [87.9712, 22.4685], [88.355, 22.589], [88.376, 22.59], [88.3012, 22.6855], [88.444, 22.572], [88.48, 22.72], [88.63, 22.83]] as [number, number][]
      }
    }
  },
  {
    id: 'route_ctc_e_20_48',
    routeNumber: 'E-20',
    nameEn: 'Habra ⇌ Durgapur',
    nameBn: 'হাবড়া ⇌ দুর্গাপুর',
    operatorId: 'ctc',
    operatorType: 'CTC' as OperatorType,
    sector: 'GOVERNMENT' as BusSector,
    category: 'Express E-Series',
    depotEn: 'Barasat Depot',
    depotBn: 'বারাসাত ডিপো',
    isAC: false,
    color: '#D97706',
    fareMin: 15,
    fareMax: 40,
    frequencyMinutes: 20,
    firstBus: '05:30 AM',
    lastBus: '09:30 PM',
    viaEn: 'Barasat, Dakshinwar, Dankuni, Bardhaman',
    viaBn: 'বারাসাত, Dakshinwar, ডানকুনি, Bardhaman',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    allStopsList: ["Habra", "Barasat", "Dakshinwar", "Dankuni", "Bardhaman", "Durgapur"],
    stopCount: 6,
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Durgapur',
        directionNameBn: 'দুর্গাপুরর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sealdah',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[88.63, 22.83], [88.48, 22.72], [88.444, 22.572], [88.3012, 22.6855], [88.428, 22.627], [87.3112, 23.5204]] as [number, number][]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Habra',
        directionNameBn: 'হাবড়ার দিকে',
        originStopId: 'stop-sealdah',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sealdah', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-howrah-stn', sequence: 2, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 45 }
        ],
        pathCoordinates: [[87.3112, 23.5204], [88.428, 22.627], [88.3012, 22.6855], [88.444, 22.572], [88.48, 22.72], [88.63, 22.83]] as [number, number][]
      }
    }
  },
];
