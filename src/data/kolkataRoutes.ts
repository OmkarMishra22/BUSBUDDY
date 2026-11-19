import { BusRoute, BusVehicle, Agency } from '../types/transit';
import { CTC_BUS_ROUTES } from './ctcBusRoutes';
import { DIRECTORY_BUS_ROUTES } from './kolkataDirectoryRoutes';

export const AGENCIES: Agency[] = [
  {
    id: 'wbtc',
    nameEn: 'West Bengal Transport Corporation (WBTC)',
    nameBn: 'পশ্চিমবঙ্গ পরিবহন নিগম (WBTC)',
    code: 'WBTC',
    sector: 'GOVERNMENT',
    helpline: '1800-345-3925',
    descriptionEn: 'Official state government transit corporation managing AC & Non-AC city fleets.',
    descriptionBn: 'রাজ্য সরকারি পরিবহন নিগম, এসি ও সাধারণ বাস পরিষেবা।'
  },
  {
    id: 'cstc',
    nameEn: 'Calcutta State Transport Corporation (CSTC)',
    nameBn: 'ক্যালকাটা স্টেট ট্রান্সপোর্ট কর্পোরেশন (CSTC)',
    code: 'CSTC',
    sector: 'GOVERNMENT',
    helpline: '033-2283-3333',
    descriptionEn: 'State government fleet serving south, central and suburban Kolkata routes.',
    descriptionBn: 'কলকাতা ও সংলগ্ন শহরতলির ঐতিহ্যবাহী সরকারি বাস সেবা।'
  },
  {
    id: 'ctc',
    nameEn: 'Calcutta Tramways Company (CTC / WBTC)',
    nameBn: 'ক্যালকাটা ট্রামওয়েজ কোম্পানি (CTC / WBTC)',
    code: 'CTC',
    sector: 'GOVERNMENT',
    helpline: '033-2236-8201',
    descriptionEn: 'Historic tram and bus division running iconic C-series, T-series, and Express routes.',
    descriptionBn: 'ঐতিহাসিক ট্রাম ও বাস বিভাগ, সি ও টি সিরিজের বিশেষ রুট পরিচালনাকারী।'
  },
  {
    id: 'jcbs_pvt',
    nameEn: 'Joint Council of Bus Syndicates (Private)',
    nameBn: 'জয়েন্ট কাউন্সিল অফ বাস সিন্ডিকেট (বেসরকারি)',
    code: 'PRIVATE',
    sector: 'PRIVATE',
    helpline: '033-2212-0055',
    descriptionEn: 'Apex confederation of private bus owners across Kolkata & Bengal.',
    descriptionBn: 'কলকাতার বেসরকারি বাস মালিকদের যৌথ শীর্ষ সংস্থা।'
  },
  {
    id: 'bbs_pvt',
    nameEn: 'Bengal Bus Syndicate (Private)',
    nameBn: 'বেঙ্গল বাস সিন্ডিকেট (বেসরকারি)',
    code: 'PRIVATE',
    sector: 'PRIVATE',
    helpline: '033-2237-7788',
    descriptionEn: 'One of the oldest private route operator unions in Kolkata.',
    descriptionBn: 'কলকাতার প্রাচীনতম বেসরকারি বাস অপারেটর ইউনিয়ন।'
  },
  {
    id: 'minibus_samity',
    nameEn: 'All Bengal Bus & Minibus Samity',
    nameBn: 'অল বেঙ্গল বাস ও মিনিবাস সমিতি',
    code: 'MINIBUS',
    sector: 'PRIVATE',
    helpline: '033-2248-1122',
    descriptionEn: 'Agile 28-seater maroon-and-white city minibus operators.',
    descriptionBn: 'দ্রুতগামী মিনিবাস অপারেটরদের সংগঠন।'
  }
];

export const KOLKATA_ROUTES: BusRoute[] = [
  // ==========================================
  // GOVERNMENT BUSES (WBTC / CSTC)
  // ==========================================
  {
    id: 'route-s12',
    routeNumber: 'S-12',
    nameEn: 'Howrah Station ⇌ New Town Ecospace',
    nameBn: 'হাওড়া স্টেশন ⇌ নিউ টাউন ইকোস্পেস',
    operatorId: 'wbtc',
    operatorType: 'WBTC',
    sector: 'GOVERNMENT',
    isAC: false,
    color: '#2563EB',
    fareMin: 12,
    fareMax: 25,
    frequencyMinutes: 10,
    firstBus: '05:30 AM',
    lastBus: '09:45 PM',
    viaEn: 'Sealdah, Ultadanga, Karunamoyee, Sector V',
    viaBn: 'শিয়ালদহ, উল্টোডাঙা, করুণাময়ী, সেক্টর ৫',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards New Town Ecospace',
        directionNameBn: 'নিউ টাউন ইকোস্পেসের দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-newtown-ecospace',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sealdah', sequence: 2, distanceFromStartKm: 4.8, scheduledMinutesFromStart: 18 },
          { stopId: 'stop-kankurgachi', sequence: 3, distanceFromStartKm: 8.1, scheduledMinutesFromStart: 30 },
          { stopId: 'stop-ultadanga', sequence: 4, distanceFromStartKm: 10.3, scheduledMinutesFromStart: 38 },
          { stopId: 'stop-saltlake-karunamoyee', sequence: 5, distanceFromStartKm: 13.9, scheduledMinutesFromStart: 49 },
          { stopId: 'stop-sector-v-college-more', sequence: 6, distanceFromStartKm: 15.5, scheduledMinutesFromStart: 55 },
          { stopId: 'stop-sector-v-sdf', sequence: 7, distanceFromStartKm: 16.8, scheduledMinutesFromStart: 60 },
          { stopId: 'stop-newtown-ecospace', sequence: 8, distanceFromStartKm: 22.4, scheduledMinutesFromStart: 75 }
        ],
        pathCoordinates: [
          [88.3431, 22.5835],
          [88.3540, 22.5810],
          [88.3712, 22.5675],
          [88.3846, 22.5768],
          [88.3888, 22.5898],
          [88.4060, 22.5880],
          [88.4187, 22.5867],
          [88.4302, 22.5798],
          [88.4338, 22.5736],
          [88.4600, 22.5800],
          [88.4842, 22.5815]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনের দিকে',
        originStopId: 'stop-newtown-ecospace',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-newtown-ecospace', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sector-v-sdf', sequence: 2, distanceFromStartKm: 5.6, scheduledMinutesFromStart: 15 },
          { stopId: 'stop-sector-v-college-more', sequence: 3, distanceFromStartKm: 6.9, scheduledMinutesFromStart: 20 },
          { stopId: 'stop-saltlake-karunamoyee', sequence: 4, distanceFromStartKm: 8.5, scheduledMinutesFromStart: 26 },
          { stopId: 'stop-ultadanga', sequence: 5, distanceFromStartKm: 12.1, scheduledMinutesFromStart: 37 },
          { stopId: 'stop-kankurgachi', sequence: 6, distanceFromStartKm: 14.3, scheduledMinutesFromStart: 45 },
          { stopId: 'stop-sealdah', sequence: 7, distanceFromStartKm: 17.6, scheduledMinutesFromStart: 57 },
          { stopId: 'stop-howrah-stn', sequence: 8, distanceFromStartKm: 22.4, scheduledMinutesFromStart: 75 }
        ],
        pathCoordinates: [
          [88.4842, 22.5815],
          [88.4600, 22.5800],
          [88.4338, 22.5736],
          [88.4302, 22.5798],
          [88.4187, 22.5867],
          [88.4060, 22.5880],
          [88.3888, 22.5898],
          [88.3846, 22.5768],
          [88.3712, 22.5675],
          [88.3540, 22.5810],
          [88.3431, 22.5835]
        ]
      }
    }
  },
  {
    id: 'route-ac9',
    routeNumber: 'AC-9',
    nameEn: 'Jadavpur 8B ⇌ Salt Lake Karunamoyee',
    nameBn: 'যাদবপুর ৮বি ⇌ সল্টলেক করুণাময়ী',
    operatorId: 'wbtc',
    operatorType: 'WBTC',
    sector: 'GOVERNMENT',
    isAC: true,
    color: '#059669',
    fareMin: 25,
    fareMax: 45,
    frequencyMinutes: 12,
    firstBus: '06:15 AM',
    lastBus: '09:30 PM',
    viaEn: 'Dhakuria, Gariahat, Science City, Chingrighata, Sector V',
    viaBn: 'ঢাকুড়িয়া, গড়িয়াহাট, সায়েন্স সিটি, চিংড়িঘাটা, সেক্টর ৫',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Salt Lake Karunamoyee',
        directionNameBn: 'সল্টলেক করুণাময়ীর দিকে',
        originStopId: 'stop-jadavpur-8b',
        destinationStopId: 'stop-saltlake-karunamoyee',
        stops: [
          { stopId: 'stop-jadavpur-8b', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-dhakuria', sequence: 2, distanceFromStartKm: 1.8, scheduledMinutesFromStart: 8 },
          { stopId: 'stop-gariahat', sequence: 3, distanceFromStartKm: 3.2, scheduledMinutesFromStart: 15 },
          { stopId: 'stop-science-city', sequence: 4, distanceFromStartKm: 6.9, scheduledMinutesFromStart: 28 },
          { stopId: 'stop-chingrighata', sequence: 5, distanceFromStartKm: 9.7, scheduledMinutesFromStart: 38 },
          { stopId: 'stop-sector-v-sdf', sequence: 6, distanceFromStartKm: 12.1, scheduledMinutesFromStart: 47 },
          { stopId: 'stop-sector-v-college-more', sequence: 7, distanceFromStartKm: 13.4, scheduledMinutesFromStart: 52 },
          { stopId: 'stop-saltlake-karunamoyee', sequence: 8, distanceFromStartKm: 15.0, scheduledMinutesFromStart: 60 }
        ],
        pathCoordinates: [
          [88.3718, 22.4988],
          [88.3668, 22.5085],
          [88.3653, 22.5186],
          [88.3850, 22.5280],
          [88.3962, 22.5404],
          [88.4024, 22.5629],
          [88.4338, 22.5736],
          [88.4302, 22.5798],
          [88.4187, 22.5867]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Jadavpur 8B',
        directionNameBn: 'যাদবপুর ৮বি-র দিকে',
        originStopId: 'stop-saltlake-karunamoyee',
        destinationStopId: 'stop-jadavpur-8b',
        stops: [
          { stopId: 'stop-saltlake-karunamoyee', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sector-v-college-more', sequence: 2, distanceFromStartKm: 1.6, scheduledMinutesFromStart: 6 },
          { stopId: 'stop-sector-v-sdf', sequence: 3, distanceFromStartKm: 2.9, scheduledMinutesFromStart: 12 },
          { stopId: 'stop-chingrighata', sequence: 4, distanceFromStartKm: 5.3, scheduledMinutesFromStart: 21 },
          { stopId: 'stop-science-city', sequence: 5, distanceFromStartKm: 8.1, scheduledMinutesFromStart: 31 },
          { stopId: 'stop-gariahat', sequence: 6, distanceFromStartKm: 11.8, scheduledMinutesFromStart: 44 },
          { stopId: 'stop-dhakuria', sequence: 7, distanceFromStartKm: 13.2, scheduledMinutesFromStart: 51 },
          { stopId: 'stop-jadavpur-8b', sequence: 8, distanceFromStartKm: 15.0, scheduledMinutesFromStart: 60 }
        ],
        pathCoordinates: [
          [88.4187, 22.5867],
          [88.4302, 22.5798],
          [88.4338, 22.5736],
          [88.4024, 22.5629],
          [88.3962, 22.5404],
          [88.3850, 22.5280],
          [88.3653, 22.5186],
          [88.3668, 22.5085],
          [88.3718, 22.4988]
        ]
      }
    }
  },
  {
    id: 'route-v1',
    routeNumber: 'V-1',
    nameEn: 'Tollygunge Metro ⇌ Kolkata Airport',
    nameBn: 'টালিগঞ্জ মেট্রো ⇌ কলকাতা বিমানবন্দর',
    operatorId: 'wbtc',
    operatorType: 'WBTC',
    sector: 'GOVERNMENT',
    isAC: true,
    color: '#7C3AED',
    fareMin: 35,
    fareMax: 60,
    frequencyMinutes: 15,
    firstBus: '05:00 AM',
    lastBus: '10:00 PM',
    viaEn: 'Rashbehari, Science City, Ultadanga, VIP Road',
    viaBn: 'রাসবিহারী, সায়েন্স সিটি, উল্টোডাঙা, ভিআইপি রোড',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Kolkata Airport',
        directionNameBn: 'কলকাতা বিমানবন্দরের দিকে',
        originStopId: 'stop-tollygunge',
        destinationStopId: 'stop-airport-gate-1',
        stops: [
          { stopId: 'stop-tollygunge', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-rashbehari', sequence: 2, distanceFromStartKm: 2.3, scheduledMinutesFromStart: 10 },
          { stopId: 'stop-gariahat', sequence: 3, distanceFromStartKm: 4.1, scheduledMinutesFromStart: 18 },
          { stopId: 'stop-science-city', sequence: 4, distanceFromStartKm: 7.9, scheduledMinutesFromStart: 30 },
          { stopId: 'stop-chingrighata', sequence: 5, distanceFromStartKm: 10.8, scheduledMinutesFromStart: 40 },
          { stopId: 'stop-ultadanga', sequence: 6, distanceFromStartKm: 14.5, scheduledMinutesFromStart: 52 },
          { stopId: 'stop-airport-gate-1', sequence: 7, distanceFromStartKm: 24.2, scheduledMinutesFromStart: 80 }
        ],
        pathCoordinates: [
          [88.3462, 22.4996],
          [88.3503, 22.5188],
          [88.3653, 22.5186],
          [88.3962, 22.5404],
          [88.4024, 22.5629],
          [88.3888, 22.5898],
          [88.4100, 22.6100],
          [88.4467, 22.6520]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Tollygunge Metro',
        directionNameBn: 'টালিগঞ্জ মেট্রোর দিকে',
        originStopId: 'stop-airport-gate-1',
        destinationStopId: 'stop-tollygunge',
        stops: [
          { stopId: 'stop-airport-gate-1', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-ultadanga', sequence: 2, distanceFromStartKm: 9.7, scheduledMinutesFromStart: 28 },
          { stopId: 'stop-chingrighata', sequence: 3, distanceFromStartKm: 13.4, scheduledMinutesFromStart: 40 },
          { stopId: 'stop-science-city', sequence: 4, distanceFromStartKm: 16.3, scheduledMinutesFromStart: 50 },
          { stopId: 'stop-gariahat', sequence: 5, distanceFromStartKm: 20.1, scheduledMinutesFromStart: 62 },
          { stopId: 'stop-rashbehari', sequence: 6, distanceFromStartKm: 21.9, scheduledMinutesFromStart: 70 },
          { stopId: 'stop-tollygunge', sequence: 7, distanceFromStartKm: 24.2, scheduledMinutesFromStart: 80 }
        ],
        pathCoordinates: [
          [88.4467, 22.6520],
          [88.4100, 22.6100],
          [88.3888, 22.5898],
          [88.4024, 22.5629],
          [88.3962, 22.5404],
          [88.3653, 22.5186],
          [88.3503, 22.5188],
          [88.3462, 22.4996]
        ]
      }
    }
  },
  {
    id: 'route-eb1',
    routeNumber: 'EB-1',
    nameEn: 'Barasat ⇌ Nabanna (Express)',
    nameBn: 'বারাসাত ⇌ নবান্ন (এক্সপ্রেস)',
    operatorId: 'wbtc',
    operatorType: 'WBTC',
    sector: 'GOVERNMENT',
    isAC: true,
    color: '#0284C7',
    fareMin: 30,
    fareMax: 65,
    frequencyMinutes: 20,
    firstBus: '06:30 AM',
    lastBus: '08:30 PM',
    viaEn: 'Airport, New Town, Science City, Vidyasagar Setu',
    viaBn: 'বিমানবন্দর, নিউ টাউন, সায়েন্স সিটি, দ্বিতীয় হুগলি সেতু',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card', 'govt_pass'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Nabanna',
        directionNameBn: 'নবান্নের দিকে',
        originStopId: 'stop-barasat',
        destinationStopId: 'stop-nabanna',
        stops: [
          { stopId: 'stop-barasat', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-airport-gate-1', sequence: 2, distanceFromStartKm: 11.5, scheduledMinutesFromStart: 25 },
          { stopId: 'stop-newtown-ecopark', sequence: 3, distanceFromStartKm: 17.8, scheduledMinutesFromStart: 38 },
          { stopId: 'stop-sector-v-sdf', sequence: 4, distanceFromStartKm: 23.2, scheduledMinutesFromStart: 50 },
          { stopId: 'stop-science-city', sequence: 5, distanceFromStartKm: 29.5, scheduledMinutesFromStart: 65 },
          { stopId: 'stop-park-circus', sequence: 6, distanceFromStartKm: 33.1, scheduledMinutesFromStart: 74 },
          { stopId: 'stop-rabindra-sadan', sequence: 7, distanceFromStartKm: 36.4, scheduledMinutesFromStart: 82 },
          { stopId: 'stop-nabanna', sequence: 8, distanceFromStartKm: 41.0, scheduledMinutesFromStart: 95 }
        ],
        pathCoordinates: [
          [88.4839, 22.7214],
          [88.4467, 22.6520],
          [88.4682, 22.6074],
          [88.4338, 22.5736],
          [88.3962, 22.5404],
          [88.3658, 22.5413],
          [88.3478, 22.5398],
          [88.3188, 22.5562]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Barasat',
        directionNameBn: 'বারাসাতের দিকে',
        originStopId: 'stop-nabanna',
        destinationStopId: 'stop-barasat',
        stops: [
          { stopId: 'stop-nabanna', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-rabindra-sadan', sequence: 2, distanceFromStartKm: 4.6, scheduledMinutesFromStart: 13 },
          { stopId: 'stop-park-circus', sequence: 3, distanceFromStartKm: 7.9, scheduledMinutesFromStart: 21 },
          { stopId: 'stop-science-city', sequence: 4, distanceFromStartKm: 11.5, scheduledMinutesFromStart: 30 },
          { stopId: 'stop-sector-v-sdf', sequence: 5, distanceFromStartKm: 17.8, scheduledMinutesFromStart: 45 },
          { stopId: 'stop-newtown-ecopark', sequence: 6, distanceFromStartKm: 23.2, scheduledMinutesFromStart: 57 },
          { stopId: 'stop-airport-gate-1', sequence: 7, distanceFromStartKm: 29.5, scheduledMinutesFromStart: 70 },
          { stopId: 'stop-barasat', sequence: 8, distanceFromStartKm: 41.0, scheduledMinutesFromStart: 95 }
        ],
        pathCoordinates: [
          [88.3188, 22.5562],
          [88.3478, 22.5398],
          [88.3658, 22.5413],
          [88.3962, 22.5404],
          [88.4338, 22.5736],
          [88.4682, 22.6074],
          [88.4467, 22.6520],
          [88.4839, 22.7214]
        ]
      }
    }
  },
  {
    id: 'route-ac43',
    routeNumber: 'AC-43',
    nameEn: 'Howrah Station ⇌ Dakshineswar Temple',
    nameBn: 'হাওড়া স্টেশন ⇌ দক্ষিণেশ্বর মন্দির',
    operatorId: 'wbtc',
    operatorType: 'WBTC',
    sector: 'GOVERNMENT',
    isAC: true,
    color: '#0891B2',
    fareMin: 25,
    fareMax: 40,
    frequencyMinutes: 15,
    firstBus: '06:00 AM',
    lastBus: '09:00 PM',
    viaEn: 'Girish Park, Shyambazar, Sinthee, Dunlop',
    viaBn: 'গিরিশ পার্ক, শ্যামবাজার, সিঁথি, ডানলপ',
    acceptsGovtPass: true,
    paymentModes: ['cash', 'smart_card'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Dakshineswar Temple',
        directionNameBn: 'দক্ষিণেশ্বর মন্দিরের দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-dakshineswar',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-girish-park', sequence: 2, distanceFromStartKm: 3.5, scheduledMinutesFromStart: 14 },
          { stopId: 'stop-shyambazar', sequence: 3, distanceFromStartKm: 6.1, scheduledMinutesFromStart: 25 },
          { stopId: 'stop-dunlop', sequence: 4, distanceFromStartKm: 12.3, scheduledMinutesFromStart: 48 },
          { stopId: 'stop-dakshineswar', sequence: 5, distanceFromStartKm: 15.0, scheduledMinutesFromStart: 58 }
        ],
        pathCoordinates: [
          [88.3431, 22.5835],
          [88.3592, 22.5852],
          [88.3714, 22.6023],
          [88.3776, 22.6515],
          [88.3582, 22.6558]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনের দিকে',
        originStopId: 'stop-dakshineswar',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-dakshineswar', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-dunlop', sequence: 2, distanceFromStartKm: 2.7, scheduledMinutesFromStart: 10 },
          { stopId: 'stop-shyambazar', sequence: 3, distanceFromStartKm: 8.9, scheduledMinutesFromStart: 33 },
          { stopId: 'stop-girish-park', sequence: 4, distanceFromStartKm: 11.5, scheduledMinutesFromStart: 44 },
          { stopId: 'stop-howrah-stn', sequence: 5, distanceFromStartKm: 15.0, scheduledMinutesFromStart: 58 }
        ],
        pathCoordinates: [
          [88.3582, 22.6558],
          [88.3776, 22.6515],
          [88.3714, 22.6023],
          [88.3592, 22.5852],
          [88.3431, 22.5835]
        ]
      }
    }
  },

  // ==========================================
  // PRIVATE BUSES (SYNDICATES & MINIBUSES)
  // ==========================================
  {
    id: 'route-215a',
    routeNumber: '215A',
    nameEn: 'Howrah Station ⇌ Salt Lake Sector V',
    nameBn: 'হাওড়া স্টেশন ⇌ সল্টলেক সেক্টর ৫',
    operatorId: 'jcbs_pvt',
    operatorType: 'PRIVATE',
    sector: 'PRIVATE',
    isAC: false,
    color: '#D97706',
    fareMin: 10,
    fareMax: 20,
    frequencyMinutes: 8,
    firstBus: '06:00 AM',
    lastBus: '09:15 PM',
    viaEn: 'Girish Park, Maniktala, Ultadanga, Karunamoyee',
    viaBn: 'গিরিশ পার্ক, মানিকতলা, উল্টোডাঙা, করুণাময়ী',
    syndicateNameEn: 'Joint Council of Bus Syndicates',
    syndicateNameBn: 'জয়েন্ট কাউন্সিল অফ বাস সিন্ডিকেট',
    permitNumber: 'P.St.P./WB/215A-KOL',
    acceptsGovtPass: false,
    paymentModes: ['cash', 'upi'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Salt Lake Sector V',
        directionNameBn: 'সল্টলেক সেক্টর ৫-এর দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-sector-v-sdf',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-girish-park', sequence: 2, distanceFromStartKm: 3.5, scheduledMinutesFromStart: 15 },
          { stopId: 'stop-maniktala', sequence: 3, distanceFromStartKm: 5.2, scheduledMinutesFromStart: 23 },
          { stopId: 'stop-ultadanga', sequence: 4, distanceFromStartKm: 7.6, scheduledMinutesFromStart: 33 },
          { stopId: 'stop-saltlake-karunamoyee', sequence: 5, distanceFromStartKm: 11.2, scheduledMinutesFromStart: 44 },
          { stopId: 'stop-sector-v-college-more', sequence: 6, distanceFromStartKm: 12.8, scheduledMinutesFromStart: 50 },
          { stopId: 'stop-sector-v-sdf', sequence: 7, distanceFromStartKm: 14.2, scheduledMinutesFromStart: 56 }
        ],
        pathCoordinates: [
          [88.3431, 22.5835],
          [88.3592, 22.5852],
          [88.3732, 22.5831],
          [88.3888, 22.5898],
          [88.4187, 22.5867],
          [88.4302, 22.5798],
          [88.4338, 22.5736]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনের দিকে',
        originStopId: 'stop-sector-v-sdf',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-sector-v-sdf', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-sector-v-college-more', sequence: 2, distanceFromStartKm: 1.4, scheduledMinutesFromStart: 6 },
          { stopId: 'stop-saltlake-karunamoyee', sequence: 3, distanceFromStartKm: 3.0, scheduledMinutesFromStart: 12 },
          { stopId: 'stop-ultadanga', sequence: 4, distanceFromStartKm: 6.6, scheduledMinutesFromStart: 23 },
          { stopId: 'stop-maniktala', sequence: 5, distanceFromStartKm: 9.0, scheduledMinutesFromStart: 33 },
          { stopId: 'stop-girish-park', sequence: 6, distanceFromStartKm: 10.7, scheduledMinutesFromStart: 41 },
          { stopId: 'stop-howrah-stn', sequence: 7, distanceFromStartKm: 14.2, scheduledMinutesFromStart: 56 }
        ],
        pathCoordinates: [
          [88.4338, 22.5736],
          [88.4302, 22.5798],
          [88.4187, 22.5867],
          [88.3888, 22.5898],
          [88.3732, 22.5831],
          [88.3592, 22.5852],
          [88.3431, 22.5835]
        ]
      }
    }
  },
  {
    id: 'route-30b',
    routeNumber: '30B',
    nameEn: 'Babughat ⇌ Dum Dum Airport Gate 1',
    nameBn: 'বাবুঘাট ⇌ দমদম বিমানবন্দর ১ নং গেট',
    operatorId: 'bbs_pvt',
    operatorType: 'PRIVATE',
    sector: 'PRIVATE',
    isAC: false,
    color: '#0D9488',
    fareMin: 12,
    fareMax: 22,
    frequencyMinutes: 12,
    firstBus: '05:45 AM',
    lastBus: '09:00 PM',
    viaEn: 'Esplanade, Girish Park, Shyambazar, Nagerbazar',
    viaBn: 'ধর্মতলা, গিরিশ পার্ক, শ্যামবাজার, নাগেরবাজার',
    syndicateNameEn: 'Bengal Bus Syndicate',
    syndicateNameBn: 'বেঙ্গল বাস সিন্ডিকেট',
    permitNumber: 'P.St.P./WB/30B-KOL',
    acceptsGovtPass: false,
    paymentModes: ['cash', 'upi'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Dum Dum Airport',
        directionNameBn: 'দমদম বিমানবন্দরের দিকে',
        originStopId: 'stop-babughat',
        destinationStopId: 'stop-airport-gate-1',
        stops: [
          { stopId: 'stop-babughat', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-esplanade', sequence: 2, distanceFromStartKm: 1.8, scheduledMinutesFromStart: 8 },
          { stopId: 'stop-girish-park', sequence: 3, distanceFromStartKm: 4.6, scheduledMinutesFromStart: 20 },
          { stopId: 'stop-shyambazar', sequence: 4, distanceFromStartKm: 7.2, scheduledMinutesFromStart: 32 },
          { stopId: 'stop-nagerbazar', sequence: 5, distanceFromStartKm: 12.5, scheduledMinutesFromStart: 50 },
          { stopId: 'stop-airport-gate-1', sequence: 6, distanceFromStartKm: 17.8, scheduledMinutesFromStart: 68 }
        ],
        pathCoordinates: [
          [88.3415, 22.5640],
          [88.3524, 22.5647],
          [88.3592, 22.5852],
          [88.3714, 22.6023],
          [88.4116, 22.6272],
          [88.4467, 22.6520]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Babughat',
        directionNameBn: 'বাবুঘাটের দিকে',
        originStopId: 'stop-airport-gate-1',
        destinationStopId: 'stop-babughat',
        stops: [
          { stopId: 'stop-airport-gate-1', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-nagerbazar', sequence: 2, distanceFromStartKm: 5.3, scheduledMinutesFromStart: 18 },
          { stopId: 'stop-shyambazar', sequence: 3, distanceFromStartKm: 10.6, scheduledMinutesFromStart: 36 },
          { stopId: 'stop-girish-park', sequence: 4, distanceFromStartKm: 13.2, scheduledMinutesFromStart: 48 },
          { stopId: 'stop-esplanade', sequence: 5, distanceFromStartKm: 16.0, scheduledMinutesFromStart: 60 },
          { stopId: 'stop-babughat', sequence: 6, distanceFromStartKm: 17.8, scheduledMinutesFromStart: 68 }
        ],
        pathCoordinates: [
          [88.4467, 22.6520],
          [88.4116, 22.6272],
          [88.3714, 22.6023],
          [88.3592, 22.5852],
          [88.3524, 22.5647],
          [88.3415, 22.5640]
        ]
      }
    }
  },
  {
    id: 'route-47_1',
    routeNumber: '47/1',
    nameEn: 'Karunamoyee ⇌ Behala Sakherbazar',
    nameBn: 'করুণাময়ী ⇌ বেহালা সখেরবাজার',
    operatorId: 'jcbs_pvt',
    operatorType: 'PRIVATE',
    sector: 'PRIVATE',
    isAC: false,
    color: '#DC2626',
    fareMin: 12,
    fareMax: 24,
    frequencyMinutes: 10,
    firstBus: '05:40 AM',
    lastBus: '09:20 PM',
    viaEn: 'Ultadanga, Sealdah, Park Circus, Exide, Taratala, Behala',
    viaBn: 'উল্টোডাঙা, শিয়ালদহ, পার্ক সার্কাস, এক্সাইড, তারাতলা, বেহালা',
    syndicateNameEn: 'Joint Council of Bus Syndicates',
    syndicateNameBn: 'জয়েন্ট কাউন্সিল অফ বাস সিন্ডিকেট',
    permitNumber: 'P.St.P./WB/47-1-KOL',
    acceptsGovtPass: false,
    paymentModes: ['cash', 'upi'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Behala Sakherbazar',
        directionNameBn: 'বেহালা সখেরবাজারের দিকে',
        originStopId: 'stop-saltlake-karunamoyee',
        destinationStopId: 'stop-behala-sakherbazar',
        stops: [
          { stopId: 'stop-saltlake-karunamoyee', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-ultadanga', sequence: 2, distanceFromStartKm: 3.6, scheduledMinutesFromStart: 12 },
          { stopId: 'stop-kankurgachi', sequence: 3, distanceFromStartKm: 5.8, scheduledMinutesFromStart: 20 },
          { stopId: 'stop-sealdah', sequence: 4, distanceFromStartKm: 9.1, scheduledMinutesFromStart: 32 },
          { stopId: 'stop-park-circus', sequence: 5, distanceFromStartKm: 12.7, scheduledMinutesFromStart: 44 },
          { stopId: 'stop-rabindra-sadan', sequence: 6, distanceFromStartKm: 15.8, scheduledMinutesFromStart: 55 },
          { stopId: 'stop-behala-chowrasta', sequence: 7, distanceFromStartKm: 21.2, scheduledMinutesFromStart: 72 },
          { stopId: 'stop-behala-sakherbazar', sequence: 8, distanceFromStartKm: 23.5, scheduledMinutesFromStart: 80 }
        ],
        pathCoordinates: [
          [88.4187, 22.5867],
          [88.3888, 22.5898],
          [88.3846, 22.5768],
          [88.3712, 22.5675],
          [88.3658, 22.5413],
          [88.3478, 22.5398],
          [88.3129, 22.4846],
          [88.3082, 22.4741]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Karunamoyee',
        directionNameBn: 'করুণাময়ীর দিকে',
        originStopId: 'stop-behala-sakherbazar',
        destinationStopId: 'stop-saltlake-karunamoyee',
        stops: [
          { stopId: 'stop-behala-sakherbazar', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-behala-chowrasta', sequence: 2, distanceFromStartKm: 2.3, scheduledMinutesFromStart: 8 },
          { stopId: 'stop-rabindra-sadan', sequence: 3, distanceFromStartKm: 7.7, scheduledMinutesFromStart: 25 },
          { stopId: 'stop-park-circus', sequence: 4, distanceFromStartKm: 10.8, scheduledMinutesFromStart: 36 },
          { stopId: 'stop-sealdah', sequence: 5, distanceFromStartKm: 14.4, scheduledMinutesFromStart: 48 },
          { stopId: 'stop-kankurgachi', sequence: 6, distanceFromStartKm: 17.7, scheduledMinutesFromStart: 60 },
          { stopId: 'stop-ultadanga', sequence: 7, distanceFromStartKm: 19.9, scheduledMinutesFromStart: 68 },
          { stopId: 'stop-saltlake-karunamoyee', sequence: 8, distanceFromStartKm: 23.5, scheduledMinutesFromStart: 80 }
        ],
        pathCoordinates: [
          [88.3082, 22.4741],
          [88.3129, 22.4846],
          [88.3478, 22.5398],
          [88.3658, 22.5413],
          [88.3712, 22.5675],
          [88.3846, 22.5768],
          [88.3888, 22.5898],
          [88.4187, 22.5867]
        ]
      }
    }
  },
  {
    id: 'route-mb8',
    routeNumber: 'MB-8',
    nameEn: 'Jadavpur 8B ⇌ Howrah Station (Minibus)',
    nameBn: 'যাদবপুর ৮বি ⇌ হাওড়া স্টেশন (মিনিবাস)',
    operatorId: 'minibus_samity',
    operatorType: 'MINIBUS',
    sector: 'PRIVATE',
    isAC: false,
    color: '#991B1B', // Maroon Minibus Color
    fareMin: 14,
    fareMax: 22,
    frequencyMinutes: 7,
    firstBus: '06:00 AM',
    lastBus: '09:30 PM',
    viaEn: 'Gariahat, Park Circus, Exide, Esplanade, Howrah Bridge',
    viaBn: 'গড়িয়াহাট, পার্ক সার্কাস, এক্সাইড, ধর্মতলা, হাওড়া ব্রিজ',
    syndicateNameEn: 'All Bengal Bus & Minibus Samity',
    syndicateNameBn: 'অল বেঙ্গল বাস ও মিনিবাস সমিতি',
    permitNumber: 'P.St.P./WB/MB-8-KOL',
    acceptsGovtPass: false,
    paymentModes: ['cash', 'upi'],
    directions: {
      UP: {
        directionId: 'UP',
        directionNameEn: 'Towards Howrah Station',
        directionNameBn: 'হাওড়া স্টেশনের দিকে',
        originStopId: 'stop-jadavpur-8b',
        destinationStopId: 'stop-howrah-stn',
        stops: [
          { stopId: 'stop-jadavpur-8b', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-dhakuria', sequence: 2, distanceFromStartKm: 1.8, scheduledMinutesFromStart: 8 },
          { stopId: 'stop-gariahat', sequence: 3, distanceFromStartKm: 3.2, scheduledMinutesFromStart: 15 },
          { stopId: 'stop-park-circus', sequence: 4, distanceFromStartKm: 6.5, scheduledMinutesFromStart: 27 },
          { stopId: 'stop-rabindra-sadan', sequence: 5, distanceFromStartKm: 9.2, scheduledMinutesFromStart: 38 },
          { stopId: 'stop-esplanade', sequence: 6, distanceFromStartKm: 12.0, scheduledMinutesFromStart: 50 },
          { stopId: 'stop-howrah-stn', sequence: 7, distanceFromStartKm: 15.2, scheduledMinutesFromStart: 65 }
        ],
        pathCoordinates: [
          [88.3718, 22.4988],
          [88.3668, 22.5085],
          [88.3653, 22.5186],
          [88.3658, 22.5413],
          [88.3478, 22.5398],
          [88.3524, 22.5647],
          [88.3431, 22.5835]
        ]
      },
      DOWN: {
        directionId: 'DOWN',
        directionNameEn: 'Towards Jadavpur 8B',
        directionNameBn: 'যাদবপুর ৮বি-র দিকে',
        originStopId: 'stop-howrah-stn',
        destinationStopId: 'stop-jadavpur-8b',
        stops: [
          { stopId: 'stop-howrah-stn', sequence: 1, distanceFromStartKm: 0, scheduledMinutesFromStart: 0 },
          { stopId: 'stop-esplanade', sequence: 2, distanceFromStartKm: 3.2, scheduledMinutesFromStart: 15 },
          { stopId: 'stop-rabindra-sadan', sequence: 3, distanceFromStartKm: 6.0, scheduledMinutesFromStart: 27 },
          { stopId: 'stop-park-circus', sequence: 4, distanceFromStartKm: 8.7, scheduledMinutesFromStart: 38 },
          { stopId: 'stop-gariahat', sequence: 5, distanceFromStartKm: 12.0, scheduledMinutesFromStart: 50 },
          { stopId: 'stop-dhakuria', sequence: 6, distanceFromStartKm: 13.4, scheduledMinutesFromStart: 57 },
          { stopId: 'stop-jadavpur-8b', sequence: 7, distanceFromStartKm: 15.2, scheduledMinutesFromStart: 65 }
        ],
        pathCoordinates: [
          [88.3431, 22.5835],
          [88.3524, 22.5647],
          [88.3478, 22.5398],
          [88.3658, 22.5413],
          [88.3653, 22.5186],
          [88.3668, 22.5085],
          [88.3718, 22.4988]
        ]
      }
    }
  },
  // Calcutta Tramways Company (CTC) Official Routes from https://www.calcuttatramways.com/bus-route/
  ...CTC_BUS_ROUTES,
  // Kolkata Bus Routes Directory (Official Government, Community-listed & Minibuses from datacarta.in)
  ...DIRECTORY_BUS_ROUTES
];

export const SAMPLE_BUS_FLEET: BusVehicle[] = [
  // Government Buses (WBTC)
  { 
    id: 'bus-wb04-1842', 
    registrationNumber: 'WB-04-H-1842', 
    routeId: 'route-s12', 
    operatorType: 'WBTC', 
    sector: 'GOVERNMENT', 
    model: 'Tata Marcopolo BS-VI', 
    isAC: false, 
    syndicateOrDepot: 'Kasba CSTC Depot',
    busBodyType: 'standard_city',
    assignedDriverName: 'Rajesh Das (রাজেশ দাস)',
    assignedDriverId: 'DRV-WBTC-101'
  },
  { 
    id: 'bus-wb02-9921', 
    registrationNumber: 'WB-02-AK-9921', 
    routeId: 'route-ac9', 
    operatorType: 'WBTC', 
    sector: 'GOVERNMENT', 
    model: 'Volvo 8400 Low-Floor AC', 
    isAC: true, 
    syndicateOrDepot: 'Jadavpur 8B Depot',
    busBodyType: 'low_floor_ac',
    assignedDriverName: 'Prabir Mukherjee (প্রবীর মুখার্জি)',
    assignedDriverId: 'DRV-WBTC-102'
  },
  { 
    id: 'bus-wb19-4530', 
    registrationNumber: 'WB-19-E-4530', 
    routeId: 'route-v1', 
    operatorType: 'WBTC', 
    sector: 'GOVERNMENT', 
    model: 'Volvo B8R Airport AC', 
    isAC: true, 
    syndicateOrDepot: 'Tollygunge Tram Depot',
    busBodyType: 'low_floor_ac',
    assignedDriverName: 'Anup Roy (অনুপ রায়)',
    assignedDriverId: 'DRV-WBTC-103'
  },
  { 
    id: 'bus-wb11-7788', 
    registrationNumber: 'WB-11-D-7788', 
    routeId: 'route-eb1', 
    operatorType: 'WBTC', 
    sector: 'GOVERNMENT', 
    model: 'Volvo 8400 Green AC Express', 
    isAC: true, 
    syndicateOrDepot: 'Barasat Central Depot',
    busBodyType: 'low_floor_ac',
    assignedDriverName: 'Bikash Paul',
    assignedDriverId: 'DRV-WBTC-104'
  },
  { 
    id: 'bus-wb02-3344', 
    registrationNumber: 'WB-02-AM-3344', 
    routeId: 'route-ac43', 
    operatorType: 'WBTC', 
    sector: 'GOVERNMENT', 
    model: 'Volvo 8400 AC Low-Floor', 
    isAC: true, 
    syndicateOrDepot: 'Belghoria Depot',
    busBodyType: 'low_floor_ac',
    assignedDriverName: 'Arindam Banerjee',
    assignedDriverId: 'DRV-WBTC-105'
  },

  // Private Buses (Syndicates & Minibuses)
  { 
    id: 'bus-wb06-2041', 
    registrationNumber: 'WB-06-B-2041', 
    routeId: 'route-215a', 
    operatorType: 'PRIVATE', 
    sector: 'PRIVATE', 
    model: 'Ashok Leyland Falcon (Yellow-Blue)', 
    isAC: false, 
    syndicateOrDepot: 'Joint Council Bus Stand, Howrah',
    busBodyType: 'standard_city',
    permitNumber: 'P.St.P./WB/215A-04',
    assignedDriverName: 'Tarak Naskar',
    assignedDriverId: 'DRV-PVT-201'
  },
  { 
    id: 'bus-wb04-5510', 
    registrationNumber: 'WB-04-C-5510', 
    routeId: 'route-30b', 
    operatorType: 'PRIVATE', 
    sector: 'PRIVATE', 
    model: 'Eicher Starline 24 (Private)', 
    isAC: false, 
    syndicateOrDepot: 'Bengal Bus Syndicate Babughat',
    busBodyType: 'standard_city',
    permitNumber: 'P.St.P./WB/30B-18',
    assignedDriverName: 'Swapan Ghoshal',
    assignedDriverId: 'DRV-PVT-202'
  },
  { 
    id: 'bus-wb01-6119', 
    registrationNumber: 'WB-01-F-6119', 
    routeId: 'route-47_1', 
    operatorType: 'PRIVATE', 
    sector: 'PRIVATE', 
    model: 'Tata LP-909 City Bus', 
    isAC: false, 
    syndicateOrDepot: 'Joint Council Syndicate Karunamoyee',
    busBodyType: 'standard_city',
    permitNumber: 'P.St.P./WB/47-1-29',
    assignedDriverName: 'Samir Ghosh',
    assignedDriverId: 'DRV-PVT-203'
  },
  { 
    id: 'bus-wb07-3312', 
    registrationNumber: 'WB-07-G-3312', 
    routeId: 'route-mb8', 
    operatorType: 'MINIBUS', 
    sector: 'PRIVATE', 
    model: 'Swaraj Mazda 28-Seater Minibus', 
    isAC: false, 
    syndicateOrDepot: 'All Bengal Minibus Samity, Jadavpur',
    busBodyType: 'minibus',
    permitNumber: 'P.St.P./WB/MB8-11',
    assignedDriverName: 'Gouranga Das',
    assignedDriverId: 'DRV-MB-401'
  },
  // Calcutta Tramways Company (CTC) Fleet
  {
    id: 'bus-wb04-c11',
    registrationNumber: 'WB-04-H-1901',
    routeId: 'route_ctc_c_11_1',
    operatorType: 'CTC',
    sector: 'GOVERNMENT',
    model: 'Tata Marcopolo City Transit (CTC)',
    isAC: false,
    syndicateOrDepot: 'Belgachia Depot',
    busBodyType: 'standard_city',
    assignedDriverName: 'Debabrata Sen',
    assignedDriverId: 'DRV-CTC-301'
  },
  {
    id: 'bus-wb02-c23',
    registrationNumber: 'WB-02-AK-4412',
    routeId: 'route_ctc_c_23_10',
    operatorType: 'CTC',
    sector: 'GOVERNMENT',
    model: 'Ashok Leyland Viking BS-VI',
    isAC: false,
    syndicateOrDepot: 'Park Circus Depot',
    busBodyType: 'standard_city',
    assignedDriverName: 'Somnath Roy',
    assignedDriverId: 'DRV-CTC-302'
  },
  {
    id: 'bus-wb06-tac1',
    registrationNumber: 'WB-06-B-8802',
    routeId: 'route_ctc_t_ac_1_12',
    operatorType: 'CTC',
    sector: 'GOVERNMENT',
    model: 'Volvo 8400 Low-Floor AC',
    isAC: true,
    syndicateOrDepot: 'Khidirpur Depot',
    busBodyType: 'low_floor_ac',
    assignedDriverName: 'Ashim Ghosh',
    assignedDriverId: 'DRV-CTC-303'
  },
  {
    id: 'bus-wb01-m2',
    registrationNumber: 'WB-01-D-5120',
    routeId: 'route_ctc_m_2_5',
    operatorType: 'CTC',
    sector: 'GOVERNMENT',
    model: 'Eicher Skyline City Pro',
    isAC: false,
    syndicateOrDepot: 'Tollygunge Depot',
    busBodyType: 'standard_city',
    assignedDriverName: 'Tapan Mondal',
    assignedDriverId: 'DRV-CTC-304'
  },
  {
    id: 'bus-wb03-nb1',
    registrationNumber: 'WB-03-C-7210',
    routeId: 'route_ctc_nb_1_24',
    operatorType: 'CTC',
    sector: 'GOVERNMENT',
    model: 'Ashok Leyland Falcon Non-AC',
    isAC: false,
    syndicateOrDepot: 'Rajabazar Depot',
    busBodyType: 'standard_city',
    assignedDriverName: 'Bikas Nandi',
    assignedDriverId: 'DRV-CTC-305'
  }
];

export const ROUTE_MAP = new Map(KOLKATA_ROUTES.map(r => [r.id, r]));
