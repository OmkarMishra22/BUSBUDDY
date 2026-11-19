import { BusRoute } from '../types/transit';

/**
 * Kolkata Bus Routes Directory (Official, Community-Listed & Minibuses)
 * Transcribed from authentic Kolkata Transit cards (kolkata.datacarta.in)
 * Captured November 2026
 */
export const DIRECTORY_BUS_ROUTES: BusRoute[] = [
  {
    "id": "route-dir-12n",
    "routeNumber": "12N",
    "nameEn": "N ⇌ Nabanna",
    "nameBn": "N ⇌ Nabanna",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Thakurpukur, D.H. Road, Monirampore, Hastings",
    "viaBn": "Thakurpukur, D.H. Road, Monirampore, Hastings",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "N",
      "Thakurpukur",
      "Thakurpukur 3A",
      "D.H. Road",
      "Taratala Xing",
      "Monirampore",
      "Kidderpore",
      "Hastings",
      "Vidyasagar Setu",
      "Nabanna"
    ],
    "stopCount": 10,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nabanna",
        "directionNameBn": "Nabannaর দিকে",
        "originStopId": "stop-n",
        "destinationStopId": "stop-nabanna",
        "stops": [
          {
            "stopId": "stop-n",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-thakurpukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-thakurpukur-3a",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-d-h-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-monirampore",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kidderpore",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-hastings",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-vidyasagar-setu",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-nabanna",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.304,
            22.461
          ],
          [
            88.309,
            22.466
          ],
          [
            88.315,
            22.515
          ],
          [
            88.32,
            22.52
          ],
          [
            88.324,
            22.536
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.328,
            22.553
          ],
          [
            88.3112,
            22.5562
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards N",
        "directionNameBn": "Nর দিকে",
        "originStopId": "stop-nabanna",
        "destinationStopId": "stop-n",
        "stops": [
          {
            "stopId": "stop-nabanna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-vidyasagar-setu",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-hastings",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kidderpore",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-monirampore",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-d-h-road",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-thakurpukur-3a",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-thakurpukur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-n",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.3112,
            22.5562
          ],
          [
            88.328,
            22.553
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.324,
            22.536
          ],
          [
            88.32,
            22.52
          ],
          [
            88.315,
            22.515
          ],
          [
            88.309,
            22.466
          ],
          [
            88.304,
            22.461
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-11a",
    "routeNumber": "11A",
    "nameEn": "A ⇌ Howrah",
    "nameBn": "A ⇌ Howrah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Dum Dum, Manicktala, Howrah Station",
    "viaBn": "দমদম, মানিকতলা, হাওড়া স্টেশন",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "A",
      "Dum Dum",
      "Manicktala",
      "Howrah Station",
      "Howrah"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-a",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-a",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-dum-dum",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-howrah",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3968,
            22.6217
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards A",
        "directionNameBn": "Aর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-a",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dum-dum",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-a",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3968,
            22.6217
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-14a",
    "routeNumber": "14A",
    "nameEn": "A ⇌ Bikash Bhavan",
    "nameBn": "A ⇌ Bikash Bhavan",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Bichali Ghat, Ramnagar More, J.K. Island, Sealdah",
    "viaBn": "বিচালি ঘাট, Ramnagar More, J.K. Island, Sealdah",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "A",
      "Bichali Ghat",
      "H.M.G. College",
      "Metiabruj",
      "Haldar Para",
      "Abostes More",
      "Ramnagar More",
      "Dockyard",
      "Kidderpore",
      "Fancy Market",
      "Hastings",
      "J.K. Island",
      "Mayo Road",
      "Esplanade",
      "S.K. Mallick Road",
      "Moulali",
      "Sealdah",
      "Canal Bridge",
      "Rashmoni Bazar",
      "Joramandir",
      "Belaghata Main Road",
      "Central Park",
      "Karunamoyee Unnayan Bhavan",
      "Bikash Bhavan"
    ],
    "stopCount": 24,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bikash Bhavan",
        "directionNameBn": "Bikash Bhavanর দিকে",
        "originStopId": "stop-a",
        "destinationStopId": "stop-bikash-bhavan",
        "stops": [
          {
            "stopId": "stop-a",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bichali-ghat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-h-m-g-college",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-metiabruj",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-haldar-para",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-abostes-more",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ramnagar-more",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-dockyard",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kidderpore",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-fancy-market",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-hastings",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-j-k-island",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-mayo-road",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-s-k-mallick-road",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-moulali",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-canal-bridge",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-rashmoni-bazar",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-joramandir",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-belaghata-main-road",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-central-park",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-karunamoyee-unnayan-bhavan",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-bikash-bhavan",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.258,
            22.538
          ],
          [
            88.268,
            22.542
          ],
          [
            88.265,
            22.541
          ],
          [
            88.272,
            22.541
          ],
          [
            88.276,
            22.54
          ],
          [
            88.285,
            22.539
          ],
          [
            88.301,
            22.542
          ],
          [
            88.324,
            22.536
          ],
          [
            88.326,
            22.538
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.3362,
            22.5508
          ],
          [
            88.3412,
            22.5558
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3574,
            22.5697
          ],
          [
            88.368,
            22.561
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3762,
            22.5725
          ],
          [
            88.387,
            22.566
          ],
          [
            88.433,
            22.631
          ],
          [
            88.391,
            22.568
          ],
          [
            88.415,
            22.588
          ],
          [
            88.4187,
            22.5867
          ],
          [
            88.416,
            22.589
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards A",
        "directionNameBn": "Aর দিকে",
        "originStopId": "stop-bikash-bhavan",
        "destinationStopId": "stop-a",
        "stops": [
          {
            "stopId": "stop-bikash-bhavan",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-karunamoyee-unnayan-bhavan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-central-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belaghata-main-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-joramandir",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rashmoni-bazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-canal-bridge",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-moulali",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-s-k-mallick-road",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-mayo-road",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-j-k-island",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-hastings",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-fancy-market",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-kidderpore",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-dockyard",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-ramnagar-more",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-abostes-more",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-haldar-para",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-metiabruj",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-h-m-g-college",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-bichali-ghat",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-a",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          }
        ],
        "pathCoordinates": [
          [
            88.416,
            22.589
          ],
          [
            88.4187,
            22.5867
          ],
          [
            88.415,
            22.588
          ],
          [
            88.391,
            22.568
          ],
          [
            88.433,
            22.631
          ],
          [
            88.387,
            22.566
          ],
          [
            88.3762,
            22.5725
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.368,
            22.561
          ],
          [
            88.3574,
            22.5697
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3412,
            22.5558
          ],
          [
            88.3362,
            22.5508
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.326,
            22.538
          ],
          [
            88.324,
            22.536
          ],
          [
            88.301,
            22.542
          ],
          [
            88.285,
            22.539
          ],
          [
            88.276,
            22.54
          ],
          [
            88.272,
            22.541
          ],
          [
            88.265,
            22.541
          ],
          [
            88.268,
            22.542
          ],
          [
            88.258,
            22.538
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-15",
    "routeNumber": "15",
    "nameEn": "Ultadanga ⇌ Howrah",
    "nameBn": "Ultadanga ⇌ Howrah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Nimtala Ghat St",
    "viaBn": "Nimtala Ghat St",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Ultadanga",
      "Nimtala Ghat St",
      "Howrah"
    ],
    "stopCount": 3,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-ultadanga",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-ultadanga",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-nimtala-ghat-st",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-howrah",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3888,
            22.5898
          ],
          [
            88.375,
            22.608
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Ultadanga",
        "directionNameBn": "Ultadangaর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-ultadanga",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-nimtala-ghat-st",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.375,
            22.608
          ],
          [
            88.3888,
            22.5898
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-3",
    "routeNumber": "3",
    "nameEn": "Mominpur ⇌ Sealdah",
    "nameBn": "Mominpur ⇌ Sealdah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Hazra, Elgin Road, Subod Mallick Squre",
    "viaBn": "Hazra, এলগিন রোড, Subod Mallick Squre",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Mominpur",
      "Hazra",
      "Elgin Road",
      "Subod Mallick Squre",
      "Sealdah"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Sealdah",
        "directionNameBn": "Sealdahর দিকে",
        "originStopId": "stop-mominpur",
        "destinationStopId": "stop-sealdah",
        "stops": [
          {
            "stopId": "stop-mominpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hazra",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-elgin-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-subod-mallick-squre",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.321,
            22.527
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.348,
            22.537
          ],
          [
            88.353,
            22.542
          ],
          [
            88.3712,
            22.5675
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Mominpur",
        "directionNameBn": "Mominpurর দিকে",
        "originStopId": "stop-sealdah",
        "destinationStopId": "stop-mominpur",
        "stops": [
          {
            "stopId": "stop-sealdah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-subod-mallick-squre",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-elgin-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hazra",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3712,
            22.5675
          ],
          [
            88.353,
            22.542
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.321,
            22.527
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-33",
    "routeNumber": "33",
    "nameEn": "Chetla ⇌ Paikpara",
    "nameBn": "চেতলা ⇌ পাইকপাড়া",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Kalighat, Darga Road, Manicktala, Shyambazar",
    "viaBn": "কালীঘাট, Darga Road, মানিকতলা, Shyambazar",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Chetla",
      "Kalighat",
      "Darga Road",
      "Manicktala",
      "Shyambazar",
      "Paikpara"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Paikpara",
        "directionNameBn": "পাইকপাড়ার দিকে",
        "originStopId": "stop-chetla",
        "destinationStopId": "stop-paikpara",
        "stops": [
          {
            "stopId": "stop-chetla",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kalighat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-darga-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-paikpara",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.341,
            22.516
          ],
          [
            88.3478,
            22.526
          ],
          [
            88.3528,
            22.531
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.379,
            22.612
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Chetla",
        "directionNameBn": "চেতলার দিকে",
        "originStopId": "stop-paikpara",
        "destinationStopId": "stop-chetla",
        "stops": [
          {
            "stopId": "stop-paikpara",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-darga-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kalighat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chetla",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.379,
            22.612
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3528,
            22.531
          ],
          [
            88.3478,
            22.526
          ],
          [
            88.341,
            22.516
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-5n",
    "routeNumber": "5-N",
    "nameEn": "-N ⇌ Howrah",
    "nameBn": "-N ⇌ Howrah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Gariahat",
    "viaBn": "Gariahat",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "-N",
      "Gariahat",
      "Howrah"
    ],
    "stopCount": 3,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-n",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-n",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-howrah",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards -N",
        "directionNameBn": "-Nর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-n",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-n",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-6n",
    "routeNumber": "6-N",
    "nameEn": "-N ⇌ Nabanna",
    "nameBn": "-N ⇌ Nabanna",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Garia, Naktala, Regentpark, Ranikuthi",
    "viaBn": "গড়িয়া, Naktala, Regentpark, Ranikuthi",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "-N",
      "Garia",
      "Naktala",
      "Regentpark",
      "Ranikuthi",
      "Hazra",
      "Elgin",
      "Exide",
      "Nabanna"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nabanna",
        "directionNameBn": "Nabannaর দিকে",
        "originStopId": "stop-n",
        "destinationStopId": "stop-nabanna",
        "stops": [
          {
            "stopId": "stop-n",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-garia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-naktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-regentpark",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranikuthi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-hazra",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-elgin",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-exide",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-nabanna",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3812,
            22.4645
          ],
          [
            88.375,
            22.608
          ],
          [
            88.38,
            22.613
          ],
          [
            88.385,
            22.618
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3112,
            22.5562
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards -N",
        "directionNameBn": "-Nর দিকে",
        "originStopId": "stop-nabanna",
        "destinationStopId": "stop-n",
        "stops": [
          {
            "stopId": "stop-nabanna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-elgin",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hazra",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranikuthi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-regentpark",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-naktala",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-garia",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-n",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3112,
            22.5562
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.385,
            22.618
          ],
          [
            88.38,
            22.613
          ],
          [
            88.375,
            22.608
          ],
          [
            88.3812,
            22.4645
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-7a",
    "routeNumber": "7A",
    "nameEn": "Sarsuna ⇌ Bakultala",
    "nameBn": "সরশুনা ⇌ Bakultala",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "A, Sarsuna Bus terminus Secotdomahied, Bakultala beast",
    "viaBn": "A, সরশুনা, বকুলতলা",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Sarsuna",
      "A",
      "Sarsuna Bus terminus Secotdomahied",
      "Bakultala beast",
      "Bakultala"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bakultala",
        "directionNameBn": "Bakultalaর দিকে",
        "originStopId": "stop-sarsuna",
        "destinationStopId": "stop-bakultala",
        "stops": [
          {
            "stopId": "stop-sarsuna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-a",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sarsuna-bus-terminus-secotdomahied",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bakultala-beast",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bakultala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.288,
            22.478
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.288,
            22.478
          ],
          [
            88.375,
            22.608
          ],
          [
            88.311,
            22.478
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Sarsuna",
        "directionNameBn": "সরশুনার দিকে",
        "originStopId": "stop-bakultala",
        "destinationStopId": "stop-sarsuna",
        "stops": [
          {
            "stopId": "stop-bakultala",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bakultala-beast",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sarsuna-bus-terminus-secotdomahied",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-a",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.311,
            22.478
          ],
          [
            88.375,
            22.608
          ],
          [
            88.288,
            22.478
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.288,
            22.478
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac1",
    "routeNumber": "AC-1",
    "nameEn": "Jadavpur ⇌ Howrah Station",
    "nameBn": "Jadavpur ⇌ হাওড়া স্টেশন",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Rashbihari, Kalighat, Hazra More, Bhowanipore",
    "viaBn": "Rashbihari, কালীঘাট, হাজরা, Bhowanipore",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Jadavpur",
      "Rashbihari",
      "Kalighat",
      "Hazra More",
      "Bhowanipore",
      "Esplanade",
      "Dalhousie",
      "Burrabazar",
      "Howrah Station"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-rashbihari",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kalighat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hazra-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bhowanipore",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.3768,
            22.5038
          ],
          [
            88.3478,
            22.526
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.347,
            22.532
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bhowanipore",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-hazra-more",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kalighat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-rashbihari",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.347,
            22.532
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.3478,
            22.526
          ],
          [
            88.3768,
            22.5038
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac12",
    "routeNumber": "AC-12",
    "nameEn": "Newtown ⇌ Exide",
    "nameBn": "নিউ টাউন ⇌ এক্সাইড",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Newtown to Exide Direct Corridor",
    "viaBn": "নিউ টাউন",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Newtown",
      "Exide"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Exide",
        "directionNameBn": "এক্সাইডর দিকে",
        "originStopId": "stop-newtown",
        "destinationStopId": "stop-exide",
        "stops": [
          {
            "stopId": "stop-newtown",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.46,
            22.58
          ],
          [
            88.3478,
            22.5398
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Newtown",
        "directionNameBn": "নিউ টাউনর দিকে",
        "originStopId": "stop-exide",
        "destinationStopId": "stop-newtown",
        "stops": [
          {
            "stopId": "stop-exide",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-newtown",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3478,
            22.5398
          ],
          [
            88.46,
            22.58
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac12d",
    "routeNumber": "AC-12D",
    "nameEn": "Taratala ⇌ Shipping",
    "nameBn": "Taratala ⇌ Shipping",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Taratala to Shipping Direct Corridor",
    "viaBn": "তারাতলা",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Taratala",
      "Shipping"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Shipping",
        "directionNameBn": "Shippingর দিকে",
        "originStopId": "stop-taratala",
        "destinationStopId": "stop-shipping",
        "stops": [
          {
            "stopId": "stop-taratala",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-shipping",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.315,
            22.515
          ],
          [
            88.32,
            22.52
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Taratala",
        "directionNameBn": "Taratalaর দিকে",
        "originStopId": "stop-shipping",
        "destinationStopId": "stop-taratala",
        "stops": [
          {
            "stopId": "stop-shipping",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-taratala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.32,
            22.52
          ],
          [
            88.315,
            22.515
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac14",
    "routeNumber": "AC-14",
    "nameEn": "Baruipur New Terminus ⇌ Karunamoyee (Salt Lake)",
    "nameBn": "বারুইপুর ⇌ করুণাময়ী",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Baruipur Fultala Bazar, Gobindopur, Hiland Park, Mukundapur",
    "viaBn": "বারুইপুর, Gobindopur, হাইল্যান্ড পার্ক, Mukundapur",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Baruipur New Terminus",
      "Baruipur Fultala Bazar",
      "Baruipur Hospital",
      "Gobindopur",
      "Patuli",
      "Hiland Park",
      "Alaynagar",
      "Mukundapur",
      "Fortis hospital",
      "Uttar Panchannagram",
      "Chingrighata",
      "Building More",
      "Karunamoyee (Salt Lake)"
    ],
    "stopCount": 13,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Karunamoyee (Salt Lake)",
        "directionNameBn": "করুণাময়ীর দিকে",
        "originStopId": "stop-baruipur-new-terminus",
        "destinationStopId": "stop-karunamoyee-salt-lake",
        "stops": [
          {
            "stopId": "stop-baruipur-new-terminus",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-baruipur-fultala-bazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-baruipur-hospital",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-gobindopur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-patuli",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-hiland-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-alaynagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-mukundapur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-fortis-hospital",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-building-more",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-karunamoyee-salt-lake",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.433,
            22.365
          ],
          [
            88.435,
            22.362
          ],
          [
            88.431,
            22.368
          ],
          [
            88.436,
            22.373
          ],
          [
            88.388,
            22.472
          ],
          [
            88.391,
            22.478
          ],
          [
            88.394,
            22.485
          ],
          [
            88.398,
            22.492
          ],
          [
            88.397,
            22.518
          ],
          [
            88.399,
            22.531
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.398,
            22.535
          ],
          [
            88.4187,
            22.5867
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Baruipur New Terminus",
        "directionNameBn": "বারুইপুরর দিকে",
        "originStopId": "stop-karunamoyee-salt-lake",
        "destinationStopId": "stop-baruipur-new-terminus",
        "stops": [
          {
            "stopId": "stop-karunamoyee-salt-lake",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-building-more",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-fortis-hospital",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-mukundapur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-alaynagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-hiland-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-patuli",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-gobindopur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-baruipur-hospital",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-baruipur-fultala-bazar",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-baruipur-new-terminus",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.4187,
            22.5867
          ],
          [
            88.398,
            22.535
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.399,
            22.531
          ],
          [
            88.397,
            22.518
          ],
          [
            88.398,
            22.492
          ],
          [
            88.394,
            22.485
          ],
          [
            88.391,
            22.478
          ],
          [
            88.388,
            22.472
          ],
          [
            88.436,
            22.373
          ],
          [
            88.431,
            22.368
          ],
          [
            88.435,
            22.362
          ],
          [
            88.433,
            22.365
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac2",
    "routeNumber": "AC-2",
    "nameEn": "Barasat ⇌ Howrah",
    "nameBn": "Barasat ⇌ Howrah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Michael Nagar, Kaikhali, Bangur, Manicktala",
    "viaBn": "Michael Nagar, Kaikhali, Bangur, মানিকতলা",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Barasat",
      "Michael Nagar",
      "Birati More",
      "Kaikhali",
      "Haldiram",
      "Bangur",
      "Kankurgachi",
      "Manicktala",
      "Girish Park",
      "Howrah"
    ],
    "stopCount": 10,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-michael-nagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-birati-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kaikhali",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bangur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-howrah",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.443,
            22.678
          ],
          [
            88.435,
            22.668
          ],
          [
            88.444,
            22.647
          ],
          [
            88.441,
            22.643
          ],
          [
            88.409,
            22.607
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bangur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kaikhali",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-birati-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-michael-nagar",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-barasat",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.409,
            22.607
          ],
          [
            88.441,
            22.643
          ],
          [
            88.444,
            22.647
          ],
          [
            88.435,
            22.668
          ],
          [
            88.443,
            22.678
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac20",
    "routeNumber": "AC-20",
    "nameEn": "Tobin Road ⇌ Hastings",
    "nameBn": "Tobin Road ⇌ Hastings",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sinthi, Maidan",
    "viaBn": "সাঁথি, ময়দান",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Tobin Road",
      "Sinthi",
      "Maidan",
      "Hastings"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Hastings",
        "directionNameBn": "Hastingsর দিকে",
        "originStopId": "stop-tobin-road",
        "destinationStopId": "stop-hastings",
        "stops": [
          {
            "stopId": "stop-tobin-road",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-maidan",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hastings",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.38,
            22.639
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.347,
            22.553
          ],
          [
            88.3312,
            22.5458
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Tobin Road",
        "directionNameBn": "Tobin Roadর দিকে",
        "originStopId": "stop-hastings",
        "destinationStopId": "stop-tobin-road",
        "stops": [
          {
            "stopId": "stop-hastings",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-maidan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-tobin-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3312,
            22.5458
          ],
          [
            88.347,
            22.553
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.38,
            22.639
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac23a",
    "routeNumber": "AC-23A",
    "nameEn": "Saltlake Karunamoyee ⇌ Rajchandrapur (Ballyhalt)",
    "nameBn": "সল্টলেক করুণাময়ী ⇌ রাজচন্দ্রপুর",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Wipro, Newtown, Eco Park, Durganagar",
    "viaBn": "উইপ্রো, নিউ টাউন, ECO PARK, Durganagar",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Saltlake Karunamoyee",
      "Wipro",
      "RS Software",
      "Technopolis",
      "DLF1",
      "Newtown",
      "Axis Mall",
      "Unitech Gate 2",
      "Aliah University",
      "Eco Park",
      "City Centre 2",
      "Haldiram",
      "Airport",
      "Durganagar",
      "Birati",
      "Dunlop",
      "Ballyhalt",
      "Rajchandrapur (Ballyhalt)"
    ],
    "stopCount": 18,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Rajchandrapur (Ballyhalt)",
        "directionNameBn": "রাজচন্দ্রপুরর দিকে",
        "originStopId": "stop-saltlake-karunamoyee",
        "destinationStopId": "stop-rajchandrapur-ballyhalt",
        "stops": [
          {
            "stopId": "stop-saltlake-karunamoyee",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-wipro",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-rs-software",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-newtown",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-axis-mall",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-unitech-gate-2",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-aliah-university",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-airport",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-durganagar",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-birati",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-ballyhalt",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-rajchandrapur-ballyhalt",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          }
        ],
        "pathCoordinates": [
          [
            88.4187,
            22.5867
          ],
          [
            88.435,
            22.578
          ],
          [
            88.44,
            22.583
          ],
          [
            88.438,
            22.583
          ],
          [
            88.455,
            22.584
          ],
          [
            88.46,
            22.58
          ],
          [
            88.462,
            22.583
          ],
          [
            88.475,
            22.586
          ],
          [
            88.471,
            22.591
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.453,
            22.625
          ],
          [
            88.441,
            22.643
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.421,
            22.658
          ],
          [
            88.435,
            22.668
          ],
          [
            88.377,
            22.653
          ],
          [
            88.341,
            22.649
          ],
          [
            88.341,
            22.649
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Saltlake Karunamoyee",
        "directionNameBn": "সল্টলেক করুণাময়ীর দিকে",
        "originStopId": "stop-rajchandrapur-ballyhalt",
        "destinationStopId": "stop-saltlake-karunamoyee",
        "stops": [
          {
            "stopId": "stop-rajchandrapur-ballyhalt",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ballyhalt",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-birati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-durganagar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-aliah-university",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-unitech-gate-2",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-axis-mall",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-newtown",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-rs-software",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-wipro",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-saltlake-karunamoyee",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          }
        ],
        "pathCoordinates": [
          [
            88.341,
            22.649
          ],
          [
            88.341,
            22.649
          ],
          [
            88.377,
            22.653
          ],
          [
            88.435,
            22.668
          ],
          [
            88.421,
            22.658
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.441,
            22.643
          ],
          [
            88.453,
            22.625
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.471,
            22.591
          ],
          [
            88.475,
            22.586
          ],
          [
            88.462,
            22.583
          ],
          [
            88.46,
            22.58
          ],
          [
            88.455,
            22.584
          ],
          [
            88.438,
            22.583
          ],
          [
            88.44,
            22.583
          ],
          [
            88.435,
            22.578
          ],
          [
            88.4187,
            22.5867
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac24",
    "routeNumber": "AC-24",
    "nameEn": "Tollygunge ⇌ Howrah",
    "nameBn": "Tollygunge ⇌ Howrah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Tollygunge to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Tollygunge",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-tollygunge",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-tollygunge",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Tollygunge",
        "directionNameBn": "Tollygungeর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-tollygunge",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac24a",
    "routeNumber": "AC-24A",
    "nameEn": "Ballygunge Station ⇌ GPO",
    "nameBn": "বালিগঞ্জ স্টেশন ⇌ GPO",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ballygunge Station to GPO Direct Corridor",
    "viaBn": "বালিগঞ্জ স্টেশন",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Ballygunge Station",
      "GPO"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards GPO",
        "directionNameBn": "GPOর দিকে",
        "originStopId": "stop-ballygunge-station",
        "destinationStopId": "stop-gpo",
        "stops": [
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-gpo",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.368,
            22.525
          ],
          [
            88.275,
            22.468
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Ballygunge Station",
        "directionNameBn": "বালিগঞ্জ স্টেশনর দিকে",
        "originStopId": "stop-gpo",
        "destinationStopId": "stop-ballygunge-station",
        "stops": [
          {
            "stopId": "stop-gpo",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.275,
            22.468
          ],
          [
            88.368,
            22.525
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac30",
    "routeNumber": "AC-30",
    "nameEn": "Lake Town (Jaya Cinema) ⇌ Howrah Station",
    "nameBn": "লেক টাউন ⇌ হাওড়া স্টেশন",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "HUDCO, Ultadanga, Kankurgachi, Manicktala",
    "viaBn": "Hudco, Ultadanga, Kankurgachi, মানিকতলা",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Lake Town (Jaya Cinema)",
      "HUDCO",
      "Ultadanga",
      "Kankurgachi",
      "Manicktala",
      "Girish Park",
      "Barabazar",
      "Howrah Station"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-lake-town-jaya-cinema",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-lake-town-jaya-cinema",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hudco",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barabazar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.401,
            22.602
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.363,
            22.588
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Lake Town (Jaya Cinema)",
        "directionNameBn": "লেক টাউনর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-lake-town-jaya-cinema",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-hudco",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-lake-town-jaya-cinema",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.401,
            22.602
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e1",
    "routeNumber": "E-1",
    "nameEn": "Jadavpur ⇌ Howrah",
    "nameBn": "Jadavpur ⇌ Howrah",
    "operatorId": "wbtc",
    "operatorType": "WBTC",
    "sector": "GOVERNMENT",
    "classification": "Government / Official",
    "isAC": false,
    "color": "#2563EB",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jadavpur 8B, Southern Avenue, Bhowanipore, Esplanade",
    "viaBn": "যাদবপুর ৮বি, Southern Avenue, Bhowanipore, Esplanade",
    "acceptsGovtPass": true,
    "paymentModes": [
      "cash",
      "smart_card",
      "govt_pass"
    ],
    "allStopsList": [
      "Jadavpur",
      "Jadavpur 8B",
      "Jadavpur University",
      "Dhakuria",
      "Golpark",
      "Southern Avenue",
      "Rashbihari",
      "Kalighat",
      "Hazra More",
      "Bhowanipore",
      "Rabindra Sadan",
      "Maidan",
      "Park Street",
      "Esplanade",
      "Dalhousie",
      "Burrabazar",
      "Howrah Station",
      "Howrah"
    ],
    "stopCount": 18,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur-8b",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-jadavpur-university",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dhakuria",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-golpark",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-southern-avenue",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-rashbihari",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kalighat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-hazra-more",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-bhowanipore",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-maidan",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-park-street",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-howrah",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3668,
            22.5085
          ],
          [
            88.365,
            22.513
          ],
          [
            88.361,
            22.515
          ],
          [
            88.366,
            22.52
          ],
          [
            88.3478,
            22.526
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.347,
            22.532
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.347,
            22.553
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-park-street",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-maidan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-bhowanipore",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-hazra-more",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-kalighat",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-rashbihari",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-southern-avenue",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-golpark",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-dhakuria",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-jadavpur-university",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-jadavpur-8b",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.347,
            22.553
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.347,
            22.532
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.3478,
            22.526
          ],
          [
            88.366,
            22.52
          ],
          [
            88.361,
            22.515
          ],
          [
            88.365,
            22.513
          ],
          [
            88.3668,
            22.5085
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e32",
    "routeNumber": "E-32",
    "nameEn": "Nilgunj ⇌ Howrah",
    "nameBn": "নীলগঞ্জ ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Lalkuthi, Titagarh PS, Sinthee More, Howrah Bridge East",
    "viaBn": "Lalkuthi, Titagarh PS, Sinthee More, হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Nilgunj",
      "Lalkuthi",
      "Chiria More",
      "Talpukur",
      "Titagarh PS",
      "Panihati",
      "Kamarhati",
      "Sinthee More",
      "Vivekananda Road",
      "MG. Road",
      "Howrah Bridge East",
      "Howrah Station",
      "Community-listed routes (private status unconfirmed)",
      "Howrah"
    ],
    "stopCount": 14,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-nilgunj",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-nilgunj",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-lalkuthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-chiria-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-talpukur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-titagarh-ps",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-panihati",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-sinthee-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-vivekananda-road",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah-bridge-east",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-community-listed-routes-private-status-unconfirmed",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-howrah",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.395,
            22.782
          ],
          [
            88.36,
            22.775
          ],
          [
            88.378,
            22.621
          ],
          [
            88.371,
            22.752
          ],
          [
            88.375,
            22.738
          ],
          [
            88.379,
            22.688
          ],
          [
            88.375,
            22.671
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.3845,
            22.636
          ],
          [
            88.3895,
            22.641
          ],
          [
            88.351,
            22.585
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3481,
            22.5885
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Nilgunj",
        "directionNameBn": "নীলগঞ্জর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-nilgunj",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-community-listed-routes-private-status-unconfirmed",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-howrah-bridge-east",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-vivekananda-road",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sinthee-more",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-panihati",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-titagarh-ps",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-talpukur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-chiria-more",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-lalkuthi",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-nilgunj",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3481,
            22.5885
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.351,
            22.585
          ],
          [
            88.3895,
            22.641
          ],
          [
            88.3845,
            22.636
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.375,
            22.671
          ],
          [
            88.379,
            22.688
          ],
          [
            88.375,
            22.738
          ],
          [
            88.371,
            22.752
          ],
          [
            88.378,
            22.621
          ],
          [
            88.36,
            22.775
          ],
          [
            88.395,
            22.782
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac10",
    "routeNumber": "AC10",
    "nameEn": "Howrah Station ⇌ Nilgunge Depot",
    "nameBn": "হাওড়া স্টেশন ⇌ Nilgunge Depot",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah Station to Nilgunge Depot Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Station",
      "Nilgunge Depot"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nilgunge Depot",
        "directionNameBn": "Nilgunge Depotর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-nilgunge-depot",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-nilgunge-depot",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.395,
            22.782
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-nilgunge-depot",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-nilgunge-depot",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.395,
            22.782
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac30sitspl",
    "routeNumber": "AC-30S(ITSpl)",
    "nameEn": "Saltlake Stadium ⇌ Tata Cancer Hospital",
    "nameBn": "সল্টলেক স্টেডিয়াম ⇌ টাটা ক্যান্সার হাসপাতাল",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Saltlake Stadium to Tata Cancer Hospital Direct Corridor",
    "viaBn": "সল্টলেক স্টেডিয়াম",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Saltlake Stadium",
      "Tata Cancer Hospital"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Tata Cancer Hospital",
        "directionNameBn": "টাটা ক্যান্সার হাসপাতালর দিকে",
        "originStopId": "stop-saltlake-stadium",
        "destinationStopId": "stop-tata-cancer-hospital",
        "stops": [
          {
            "stopId": "stop-saltlake-stadium",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-tata-cancer-hospital",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.405,
            22.569
          ],
          [
            88.487,
            22.578
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Saltlake Stadium",
        "directionNameBn": "সল্টলেক স্টেডিয়ামর দিকে",
        "originStopId": "stop-tata-cancer-hospital",
        "destinationStopId": "stop-saltlake-stadium",
        "stops": [
          {
            "stopId": "stop-tata-cancer-hospital",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-saltlake-stadium",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.487,
            22.578
          ],
          [
            88.405,
            22.569
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac31",
    "routeNumber": "AC-31",
    "nameEn": "Behala Chowrasta ⇌ Jadavpur",
    "nameBn": "বেহালা চৌরাস্তা ⇌ Jadavpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Janakalyan, James long Crossing, Tollygunge Metro, Jogesh Chandra College",
    "viaBn": "Janakalyan, James long Crossing, Tollygunge Metro, Jogesh Chandra College",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Behala Chowrasta",
      "Janakalyan",
      "Sakher Bazar",
      "James long Crossing",
      "Ramkrishna",
      "Tollygunge Metro",
      "M.R Bangur Hospital",
      "Jogesh Chandra College",
      "Lords More",
      "South City",
      "Jadavpur 8B",
      "Jadavpur"
    ],
    "stopCount": 12,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-behala-chowrasta",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-janakalyan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sakher-bazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-james-long-crossing",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ramkrishna",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-m-r-bangur-hospital",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-jogesh-chandra-college",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-lords-more",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-south-city",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-jadavpur-8b",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.3182,
            22.4936
          ],
          [
            88.3232,
            22.4986
          ],
          [
            88.314,
            22.482
          ],
          [
            88.319,
            22.487
          ],
          [
            88.324,
            22.492
          ],
          [
            88.329,
            22.497
          ],
          [
            88.409,
            22.607
          ],
          [
            88.414,
            22.612
          ],
          [
            88.419,
            22.617
          ],
          [
            88.424,
            22.622
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Behala Chowrasta",
        "directionNameBn": "বেহালা চৌরাস্তার দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-behala-chowrasta",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur-8b",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-south-city",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-lords-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-jogesh-chandra-college",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-m-r-bangur-hospital",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ramkrishna",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-james-long-crossing",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-sakher-bazar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-janakalyan",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.424,
            22.622
          ],
          [
            88.419,
            22.617
          ],
          [
            88.414,
            22.612
          ],
          [
            88.409,
            22.607
          ],
          [
            88.329,
            22.497
          ],
          [
            88.324,
            22.492
          ],
          [
            88.319,
            22.487
          ],
          [
            88.314,
            22.482
          ],
          [
            88.3232,
            22.4986
          ],
          [
            88.3182,
            22.4936
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac36",
    "routeNumber": "AC-36",
    "nameEn": "Garia ⇌ Airport",
    "nameBn": "গড়িয়া ⇌ Airport",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Garia to Airport Direct Corridor",
    "viaBn": "গড়িয়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Garia",
      "Airport"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Airport",
        "directionNameBn": "Airportর দিকে",
        "originStopId": "stop-garia",
        "destinationStopId": "stop-airport",
        "stops": [
          {
            "stopId": "stop-garia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.4467,
            22.652
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Garia",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-airport",
        "destinationStopId": "stop-garia",
        "stops": [
          {
            "stopId": "stop-airport",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-garia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.4467,
            22.652
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac37",
    "routeNumber": "AC-37",
    "nameEn": "Airport ⇌ Science City",
    "nameBn": "Airport ⇌ সায়েন্স সিটি",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Airport to Science City Direct Corridor",
    "viaBn": "বিমানবন্দর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Airport",
      "Science City"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Science City",
        "directionNameBn": "সায়েন্স সিটির দিকে",
        "originStopId": "stop-airport",
        "destinationStopId": "stop-science-city",
        "stops": [
          {
            "stopId": "stop-airport",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-science-city",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.4467,
            22.652
          ],
          [
            88.3962,
            22.5404
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Airport",
        "directionNameBn": "Airportর দিকে",
        "originStopId": "stop-science-city",
        "destinationStopId": "stop-airport",
        "stops": [
          {
            "stopId": "stop-science-city",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3962,
            22.5404
          ],
          [
            88.4467,
            22.652
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac37a",
    "routeNumber": "AC-37A",
    "nameEn": "Newtown ⇌ Garia Bus Stand",
    "nameBn": "নিউ টাউন ⇌ গড়িয়া",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "SDF, Ajaynagar",
    "viaBn": "এসডিএফ, অজয়নগর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Newtown",
      "SDF",
      "Ajaynagar",
      "Garia Bus Stand"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Garia Bus Stand",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-newtown",
        "destinationStopId": "stop-garia-bus-stand",
        "stops": [
          {
            "stopId": "stop-newtown",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sdf",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ajaynagar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-garia-bus-stand",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.46,
            22.58
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.394,
            22.485
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Newtown",
        "directionNameBn": "নিউ টাউনর দিকে",
        "originStopId": "stop-garia-bus-stand",
        "destinationStopId": "stop-newtown",
        "stops": [
          {
            "stopId": "stop-garia-bus-stand",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ajaynagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sdf",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-newtown",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.394,
            22.485
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.46,
            22.58
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac37c",
    "routeNumber": "AC-37C",
    "nameEn": "Salt Lake ⇌ Jadavpur",
    "nameBn": "Salt Lake ⇌ Jadavpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Salt Lake to Jadavpur Direct Corridor",
    "viaBn": "যাদবপুর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Salt Lake",
      "Jadavpur"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-salt-lake",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-salt-lake",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Salt Lake",
        "directionNameBn": "Salt Lakeর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-salt-lake",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-salt-lake",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac38",
    "routeNumber": "AC-38",
    "nameEn": "Aliah University ⇌ Saltlake Karunamoyee",
    "nameBn": "Aliah University ⇌ সল্টলেক করুণাময়ী",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Aliah University to Saltlake Karunamoyee Direct Corridor",
    "viaBn": "সল্টলেক করুণাময়ী",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Aliah University",
      "Saltlake Karunamoyee"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Saltlake Karunamoyee",
        "directionNameBn": "সল্টলেক করুণাময়ীর দিকে",
        "originStopId": "stop-aliah-university",
        "destinationStopId": "stop-saltlake-karunamoyee",
        "stops": [
          {
            "stopId": "stop-aliah-university",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-saltlake-karunamoyee",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.471,
            22.591
          ],
          [
            88.4187,
            22.5867
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Aliah University",
        "directionNameBn": "Aliah Universityর দিকে",
        "originStopId": "stop-saltlake-karunamoyee",
        "destinationStopId": "stop-aliah-university",
        "stops": [
          {
            "stopId": "stop-saltlake-karunamoyee",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-aliah-university",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.4187,
            22.5867
          ],
          [
            88.471,
            22.591
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac39",
    "routeNumber": "AC-39",
    "nameEn": "Howrah ⇌ Airport",
    "nameBn": "Howrah ⇌ Airport",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Kaikhali, Baguihati, Laketown, Girish Park",
    "viaBn": "Kaikhali, Baguihati, Laketown, গিরিশ পার্ক",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Kaikhali",
      "Haldiram",
      "Teghoria",
      "Baguihati",
      "Kestopur",
      "Dumdum Park",
      "Laketown",
      "Ultadanga HUDCO",
      "Kankurgachi",
      "Girish Park",
      "Central",
      "BBD Bag",
      "Burrabazar",
      "Howrah Station",
      "Airport"
    ],
    "stopCount": 16,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Airport",
        "directionNameBn": "Airportর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-airport",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kaikhali",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-teghoria",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-baguihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-dumdum-park",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-laketown",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-ultadanga-hudco",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-central",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-airport",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.444,
            22.647
          ],
          [
            88.441,
            22.643
          ],
          [
            88.437,
            22.637
          ],
          [
            88.442,
            22.642
          ],
          [
            88.423,
            22.618
          ],
          [
            88.416,
            22.613
          ],
          [
            88.401,
            22.602
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.363,
            22.588
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.4467,
            22.652
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-airport",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-airport",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-central",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ultadanga-hudco",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-laketown",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-dumdum-park",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-baguihati",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-teghoria",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-kaikhali",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-howrah",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          }
        ],
        "pathCoordinates": [
          [
            88.4467,
            22.652
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.358,
            22.574
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.401,
            22.602
          ],
          [
            88.416,
            22.613
          ],
          [
            88.423,
            22.618
          ],
          [
            88.442,
            22.642
          ],
          [
            88.437,
            22.637
          ],
          [
            88.441,
            22.643
          ],
          [
            88.444,
            22.647
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac4",
    "routeNumber": "AC-4",
    "nameEn": "Parnasree ⇌ Howrah",
    "nameBn": "পর্ণশ্রী ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Taratala Xing, Khiddirpur, PTS, Park Street",
    "viaBn": "তারাতলা, Khiddirpur, পিটিএস, Park Street",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Parnasree",
      "Taratala Xing",
      "Mominpur",
      "Khiddirpur",
      "Hastings",
      "PTS",
      "Rabindra Sadan",
      "Park Street",
      "Esplanade",
      "BBD Bag",
      "Howrah"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-parnasree",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-parnasree",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-khiddirpur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-hastings",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-pts",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-park-street",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.305,
            22.502
          ],
          [
            88.315,
            22.515
          ],
          [
            88.321,
            22.527
          ],
          [
            88.324,
            22.536
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Parnasree",
        "directionNameBn": "পর্ণশ্রীর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-parnasree",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-park-street",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-pts",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-hastings",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-khiddirpur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-parnasree",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.324,
            22.536
          ],
          [
            88.321,
            22.527
          ],
          [
            88.315,
            22.515
          ],
          [
            88.305,
            22.502
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac40",
    "routeNumber": "AC-40",
    "nameEn": "Howrah ⇌ Dunlop",
    "nameBn": "Howrah ⇌ Dunlop",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah to Dunlop Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Dunlop"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Dunlop",
        "directionNameBn": "Dunlopর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-dunlop",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.377,
            22.653
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-dunlop",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-dunlop",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.377,
            22.653
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac41",
    "routeNumber": "AC-41",
    "nameEn": "Howrah ⇌ Barasat",
    "nameBn": "Howrah ⇌ Barasat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah to Barasat Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Barasat"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barasat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.481,
            22.723
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac43",
    "routeNumber": "AC-43",
    "nameEn": "Science City ⇌ City Centre 2",
    "nameBn": "সায়েন্স সিটি ⇌ City Centre 2",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Science City to City Centre 2 Direct Corridor",
    "viaBn": "সায়েন্স সিটি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Science City",
      "City Centre 2"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards City Centre 2",
        "directionNameBn": "City Centre 2র দিকে",
        "originStopId": "stop-science-city",
        "destinationStopId": "stop-city-centre-2",
        "stops": [
          {
            "stopId": "stop-science-city",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3962,
            22.5404
          ],
          [
            88.453,
            22.625
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Science City",
        "directionNameBn": "সায়েন্স সিটির দিকে",
        "originStopId": "stop-city-centre-2",
        "destinationStopId": "stop-science-city",
        "stops": [
          {
            "stopId": "stop-city-centre-2",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-science-city",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.453,
            22.625
          ],
          [
            88.3962,
            22.5404
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac47",
    "routeNumber": "AC-47",
    "nameEn": "Narkelbagan ⇌ Ballygunge Station",
    "nameBn": "Narkelbagan ⇌ বালিগঞ্জ স্টেশন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Narkelbagan to Ballygunge Station Direct Corridor",
    "viaBn": "বালিগঞ্জ স্টেশন",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Narkelbagan",
      "Ballygunge Station"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Ballygunge Station",
        "directionNameBn": "বালিগঞ্জ স্টেশনর দিকে",
        "originStopId": "stop-narkelbagan",
        "destinationStopId": "stop-ballygunge-station",
        "stops": [
          {
            "stopId": "stop-narkelbagan",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.468,
            22.582
          ],
          [
            88.368,
            22.525
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Narkelbagan",
        "directionNameBn": "Narkelbaganর দিকে",
        "originStopId": "stop-ballygunge-station",
        "destinationStopId": "stop-narkelbagan",
        "stops": [
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.368,
            22.525
          ],
          [
            88.468,
            22.582
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-aca9",
    "routeNumber": "ACA9",
    "nameEn": "Eden City ⇌ Airport Domestic Terminus",
    "nameBn": "ইডেন সিটি ⇌ বিমানবন্দর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jhinjira Bazar, Chetla, Uttar Panchannagram, DLF1",
    "viaBn": "Jhinjira Bazar, চেতলা, Uttar Panchannagram, DLF1",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Eden City",
      "Jhinjira Bazar",
      "State Garage",
      "Taratala",
      "New Alipore",
      "Chetla",
      "Rashbehari",
      "Gariahat",
      "Acropolis Mall",
      "Uttar Panchannagram",
      "Central Park",
      "Wipro",
      "Technopolis",
      "DLF1",
      "Newtown",
      "Axis Mall",
      "Jatragachi",
      "Westin",
      "Eco Park",
      "Chinar Park",
      "Airport Domestic Terminus"
    ],
    "stopCount": 21,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Airport Domestic Terminus",
        "directionNameBn": "বিমানবন্দরর দিকে",
        "originStopId": "stop-eden-city",
        "destinationStopId": "stop-airport-domestic-terminus",
        "stops": [
          {
            "stopId": "stop-eden-city",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jhinjira-bazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-state-garage",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-taratala",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-new-alipore",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chetla",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-rashbehari",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-acropolis-mall",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-central-park",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-wipro",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-newtown",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-axis-mall",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-jatragachi",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-westin",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-airport-domestic-terminus",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          }
        ],
        "pathCoordinates": [
          [
            88.285,
            22.495
          ],
          [
            88.295,
            22.502
          ],
          [
            88.305,
            22.508
          ],
          [
            88.315,
            22.515
          ],
          [
            88.331,
            22.512
          ],
          [
            88.341,
            22.516
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.392,
            22.514
          ],
          [
            88.399,
            22.531
          ],
          [
            88.415,
            22.588
          ],
          [
            88.435,
            22.578
          ],
          [
            88.438,
            22.583
          ],
          [
            88.455,
            22.584
          ],
          [
            88.46,
            22.58
          ],
          [
            88.462,
            22.583
          ],
          [
            88.459,
            22.575
          ],
          [
            88.462,
            22.601
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.448,
            22.628
          ],
          [
            88.4467,
            22.652
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Eden City",
        "directionNameBn": "ইডেন সিটির দিকে",
        "originStopId": "stop-airport-domestic-terminus",
        "destinationStopId": "stop-eden-city",
        "stops": [
          {
            "stopId": "stop-airport-domestic-terminus",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-westin",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-jatragachi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-axis-mall",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-newtown",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-wipro",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-central-park",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-acropolis-mall",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-rashbehari",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-chetla",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-new-alipore",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-taratala",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-state-garage",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-jhinjira-bazar",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-eden-city",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          }
        ],
        "pathCoordinates": [
          [
            88.4467,
            22.652
          ],
          [
            88.448,
            22.628
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.462,
            22.601
          ],
          [
            88.459,
            22.575
          ],
          [
            88.462,
            22.583
          ],
          [
            88.46,
            22.58
          ],
          [
            88.455,
            22.584
          ],
          [
            88.438,
            22.583
          ],
          [
            88.435,
            22.578
          ],
          [
            88.415,
            22.588
          ],
          [
            88.399,
            22.531
          ],
          [
            88.392,
            22.514
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.349,
            22.52
          ],
          [
            88.341,
            22.516
          ],
          [
            88.331,
            22.512
          ],
          [
            88.315,
            22.515
          ],
          [
            88.305,
            22.508
          ],
          [
            88.295,
            22.502
          ],
          [
            88.285,
            22.495
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac4a",
    "routeNumber": "AC-4A",
    "nameEn": "Parnasree ⇌ Howrah",
    "nameBn": "পর্ণশ্রী ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Parnasree to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Parnasree",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-parnasree",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-parnasree",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.305,
            22.502
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Parnasree",
        "directionNameBn": "পর্ণশ্রীর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-parnasree",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-parnasree",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.305,
            22.502
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac4b",
    "routeNumber": "AC-4B",
    "nameEn": "Joka ⇌ New Town",
    "nameBn": "Joka ⇌ New Town",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Thakurpukur, Haridevpur, Tollygunge Metro, Gariahat",
    "viaBn": "Thakurpukur, Haridevpur, Tollygunge Metro, Gariahat",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Joka",
      "Thakurpukur",
      "Haridevpur",
      "Tollygunge Metro",
      "Gariahat",
      "Ruby",
      "College More",
      "Newtown",
      "New Town"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards New Town",
        "directionNameBn": "New Townর দিকে",
        "originStopId": "stop-joka",
        "destinationStopId": "stop-new-town",
        "stops": [
          {
            "stopId": "stop-joka",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-thakurpukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-haridevpur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ruby",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-college-more",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-newtown",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-new-town",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.298,
            22.441
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.3125,
            22.47
          ],
          [
            88.3175,
            22.475
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.398,
            22.513
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.46,
            22.58
          ],
          [
            88.465,
            22.585
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Joka",
        "directionNameBn": "Jokaর দিকে",
        "originStopId": "stop-new-town",
        "destinationStopId": "stop-joka",
        "stops": [
          {
            "stopId": "stop-new-town",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-newtown",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-college-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ruby",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-haridevpur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-thakurpukur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-joka",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.465,
            22.585
          ],
          [
            88.46,
            22.58
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.398,
            22.513
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.3175,
            22.475
          ],
          [
            88.3125,
            22.47
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.298,
            22.441
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac5",
    "routeNumber": "AC-5",
    "nameEn": "Garia ⇌ Howrah",
    "nameBn": "গড়িয়া ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Garia to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Garia",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-garia",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-garia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Garia",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-garia",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-garia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac50",
    "routeNumber": "AC-50",
    "nameEn": "Garia ⇌ Airport",
    "nameBn": "গড়িয়া ⇌ Airport",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Garia to Airport Direct Corridor",
    "viaBn": "গড়িয়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Garia",
      "Airport"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Airport",
        "directionNameBn": "Airportর দিকে",
        "originStopId": "stop-garia",
        "destinationStopId": "stop-airport",
        "stops": [
          {
            "stopId": "stop-garia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.4467,
            22.652
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Garia",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-airport",
        "destinationStopId": "stop-garia",
        "stops": [
          {
            "stopId": "stop-airport",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-garia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.4467,
            22.652
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac50a",
    "routeNumber": "AC-50A",
    "nameEn": "Rajpur ⇌ Airport",
    "nameBn": "Rajpur ⇌ Airport",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Rajpur to Airport Direct Corridor",
    "viaBn": "বিমানবন্দর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Rajpur",
      "Airport"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Airport",
        "directionNameBn": "Airportর দিকে",
        "originStopId": "stop-rajpur",
        "destinationStopId": "stop-airport",
        "stops": [
          {
            "stopId": "stop-rajpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.395,
            22.398
          ],
          [
            88.4467,
            22.652
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Rajpur",
        "directionNameBn": "Rajpurর দিকে",
        "originStopId": "stop-airport",
        "destinationStopId": "stop-rajpur",
        "stops": [
          {
            "stopId": "stop-airport",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-rajpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.4467,
            22.652
          ],
          [
            88.395,
            22.398
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac52",
    "routeNumber": "AC-52",
    "nameEn": "Howrah ⇌ Barasat",
    "nameBn": "Howrah ⇌ Barasat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah to Barasat Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Barasat"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barasat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.481,
            22.723
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac54",
    "routeNumber": "AC-54",
    "nameEn": "Kamarhati Rathtala ⇌ Howrah Station",
    "nameBn": "কামারহাটি ⇌ হাওড়া স্টেশন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Kamarhati, Tobin Road, Shyambazar, Girish Park",
    "viaBn": "Kamarhati, Tobin Road, Shyambazar, গিরিশ পার্ক",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Kamarhati Rathtala",
      "Kamarhati",
      "Dunlop",
      "Tobin Road",
      "Sinthi",
      "Shyambazar",
      "Sovabazar",
      "Girish Park",
      "MG. Road",
      "Burrabazar",
      "Howrah Station"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-kamarhati-rathtala",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-kamarhati-rathtala",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-tobin-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sovabazar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.375,
            22.608
          ],
          [
            88.375,
            22.671
          ],
          [
            88.377,
            22.653
          ],
          [
            88.38,
            22.639
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.368,
            22.596
          ],
          [
            88.363,
            22.588
          ],
          [
            88.368,
            22.593
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Kamarhati Rathtala",
        "directionNameBn": "কামারহাটির দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-kamarhati-rathtala",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sovabazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-tobin-road",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-kamarhati-rathtala",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.368,
            22.593
          ],
          [
            88.363,
            22.588
          ],
          [
            88.368,
            22.596
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.38,
            22.639
          ],
          [
            88.377,
            22.653
          ],
          [
            88.375,
            22.671
          ],
          [
            88.375,
            22.608
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac55",
    "routeNumber": "AC-55",
    "nameEn": "Ultadanga HUDCO ⇌ Gariahat",
    "nameBn": "উল্টোডাঙা ⇌ Gariahat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga HUDCO to Gariahat Direct Corridor",
    "viaBn": "উল্টোডাঙা",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Ultadanga HUDCO",
      "Gariahat"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Gariahat",
        "directionNameBn": "Gariahatর দিকে",
        "originStopId": "stop-ultadanga-hudco",
        "destinationStopId": "stop-gariahat",
        "stops": [
          {
            "stopId": "stop-ultadanga-hudco",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3888,
            22.5898
          ],
          [
            88.3653,
            22.5186
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Ultadanga HUDCO",
        "directionNameBn": "উল্টোডাঙার দিকে",
        "originStopId": "stop-gariahat",
        "destinationStopId": "stop-ultadanga-hudco",
        "stops": [
          {
            "stopId": "stop-gariahat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga-hudco",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3653,
            22.5186
          ],
          [
            88.3888,
            22.5898
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac59",
    "routeNumber": "AC-59",
    "nameEn": "Howrah ⇌ Newtown",
    "nameBn": "Howrah ⇌ নিউ টাউন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah to Newtown Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Newtown"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Newtown",
        "directionNameBn": "নিউ টাউনর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-newtown",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-newtown",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.46,
            22.58
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-newtown",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-newtown",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.46,
            22.58
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac6",
    "routeNumber": "AC-6",
    "nameEn": "Garia ⇌ Howrah",
    "nameBn": "গড়িয়া ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Naktala, Tollygunge Metro, Elgin Road, Raj Bhawan",
    "viaBn": "Naktala, Tollygunge Metro, এলগিন রোড, Raj Bhawan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Garia",
      "Naktala",
      "Bansdroni",
      "Ranikuthi",
      "Tollygunge Metro",
      "Rashbehari Xing",
      "Hazra xing",
      "Elgin Road",
      "Exide",
      "Park Street",
      "Raj Bhawan",
      "Dalhousie",
      "GPO",
      "Burrabazar",
      "Howrah Station",
      "Howrah"
    ],
    "stopCount": 16,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-garia",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-garia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-naktala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bansdroni",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ranikuthi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rashbehari-xing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-hazra-xing",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-elgin-road",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-exide",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-park-street",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-raj-bhawan",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-gpo",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-howrah",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.375,
            22.608
          ],
          [
            88.38,
            22.613
          ],
          [
            88.385,
            22.618
          ],
          [
            88.39,
            22.623
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3562,
            22.556
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.275,
            22.468
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Garia",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-garia",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-gpo",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-raj-bhawan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-park-street",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-exide",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-elgin-road",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-hazra-xing",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-rashbehari-xing",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-ranikuthi",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-bansdroni",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-naktala",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-garia",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.275,
            22.468
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3562,
            22.556
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.349,
            22.52
          ],
          [
            88.39,
            22.623
          ],
          [
            88.385,
            22.618
          ],
          [
            88.38,
            22.613
          ],
          [
            88.375,
            22.608
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac9",
    "routeNumber": "AC-9",
    "nameEn": "Jadavpur ⇌ Saltlake Karunamoyee",
    "nameBn": "Jadavpur ⇌ সল্টলেক করুণাময়ী",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sulekha, Kalikapur, Science City, Central Park",
    "viaBn": "Sulekha, Kalikapur, সায়েন্স সিটি, Central Park",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Jadavpur",
      "Sulekha",
      "Santoshpur",
      "Alaynagar",
      "Mukundapur",
      "Kalikapur",
      "Ruby Crossing",
      "Fortis",
      "Uttar Panchannagram",
      "Science City",
      "Chingrighata",
      "Building More",
      "Stadium Island",
      "Central Park",
      "City Centre",
      "Bikash Bhawan",
      "Mayukh Bhaban",
      "Bidyut Bhawan",
      "Saltlake Karunamoyee"
    ],
    "stopCount": 19,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Saltlake Karunamoyee",
        "directionNameBn": "সল্টলেক করুণাময়ীর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-saltlake-karunamoyee",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sulekha",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-santoshpur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-alaynagar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mukundapur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kalikapur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ruby-crossing",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-fortis",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-science-city",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-building-more",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-stadium-island",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-central-park",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-city-centre",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-bikash-bhawan",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-mayukh-bhaban",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-bidyut-bhawan",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-saltlake-karunamoyee",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.375,
            22.492
          ],
          [
            88.382,
            22.495
          ],
          [
            88.394,
            22.485
          ],
          [
            88.398,
            22.492
          ],
          [
            88.397,
            22.502
          ],
          [
            88.398,
            22.513
          ],
          [
            88.397,
            22.518
          ],
          [
            88.399,
            22.531
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.398,
            22.535
          ],
          [
            88.405,
            22.569
          ],
          [
            88.415,
            22.588
          ],
          [
            88.406,
            22.588
          ],
          [
            88.411,
            22.593
          ],
          [
            88.417,
            22.5875
          ],
          [
            88.418,
            22.586
          ],
          [
            88.4187,
            22.5867
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-saltlake-karunamoyee",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-saltlake-karunamoyee",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bidyut-bhawan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mayukh-bhaban",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bikash-bhawan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-city-centre",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-central-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-stadium-island",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-building-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-science-city",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-fortis",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-ruby-crossing",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-kalikapur",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-mukundapur",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-alaynagar",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-santoshpur",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-sulekha",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          }
        ],
        "pathCoordinates": [
          [
            88.4187,
            22.5867
          ],
          [
            88.418,
            22.586
          ],
          [
            88.417,
            22.5875
          ],
          [
            88.411,
            22.593
          ],
          [
            88.406,
            22.588
          ],
          [
            88.415,
            22.588
          ],
          [
            88.405,
            22.569
          ],
          [
            88.398,
            22.535
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.399,
            22.531
          ],
          [
            88.397,
            22.518
          ],
          [
            88.398,
            22.513
          ],
          [
            88.397,
            22.502
          ],
          [
            88.398,
            22.492
          ],
          [
            88.394,
            22.485
          ],
          [
            88.382,
            22.495
          ],
          [
            88.375,
            22.492
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-ac9b",
    "routeNumber": "AC-9B",
    "nameEn": "Jadavpur ⇌ Ecospace",
    "nameBn": "Jadavpur ⇌ ইকোস্পেস",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": true,
    "color": "#059669",
    "fareMin": 25,
    "fareMax": 50,
    "frequencyMinutes": 15,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jadavpur to Ecospace Direct Corridor",
    "viaBn": "যাদবপুর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Jadavpur",
      "Ecospace"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Ecospace",
        "directionNameBn": "ইকোস্পেসর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-ecospace",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.4842,
            22.5815
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-ecospace",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-ecospace",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.4842,
            22.5815
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c11",
    "routeNumber": "C11",
    "nameEn": "Belgachia ⇌ Domjur",
    "nameBn": "Belgachia ⇌ ডোমজুড়",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Belgachia to Domjur Direct Corridor",
    "viaBn": "ডোমজুড়",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Belgachia",
      "Domjur"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Domjur",
        "directionNameBn": "ডোমজুড়র দিকে",
        "originStopId": "stop-belgachia",
        "destinationStopId": "stop-domjur",
        "stops": [
          {
            "stopId": "stop-belgachia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-domjur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3814,
            22.6075
          ],
          [
            88.2185,
            22.6412
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Belgachia",
        "directionNameBn": "Belgachiaর দিকে",
        "originStopId": "stop-domjur",
        "destinationStopId": "stop-belgachia",
        "stops": [
          {
            "stopId": "stop-domjur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-belgachia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.2185,
            22.6412
          ],
          [
            88.3814,
            22.6075
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c111",
    "routeNumber": "C11/1",
    "nameEn": "Howrah Station ⇌ Munshirhat",
    "nameBn": "হাওড়া স্টেশন ⇌ Munshirhat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah Maidan, Dasnagar, Baltikuri more, Makardaha",
    "viaBn": "Howrah Maidan, Dasnagar, Baltikuri more, Makardaha",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Station",
      "Howrah Maidan",
      "Dasnagar",
      "Baltikuri more",
      "Makardaha",
      "Bargachia",
      "Pantihal",
      "Munshirhat"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Munshirhat",
        "directionNameBn": "Munshirhatর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-munshirhat",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-maidan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dasnagar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-baltikuri-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-makardaha",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-pantihal",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-munshirhat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.331,
            22.583
          ],
          [
            88.302,
            22.592
          ],
          [
            88.285,
            22.605
          ],
          [
            88.245,
            22.625
          ],
          [
            88.155,
            22.658
          ],
          [
            88.085,
            22.635
          ],
          [
            88.112,
            22.645
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-munshirhat",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-munshirhat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-pantihal",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-makardaha",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-baltikuri-more",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dasnagar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-howrah-maidan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.112,
            22.645
          ],
          [
            88.085,
            22.635
          ],
          [
            88.155,
            22.658
          ],
          [
            88.245,
            22.625
          ],
          [
            88.285,
            22.605
          ],
          [
            88.302,
            22.592
          ],
          [
            88.331,
            22.583
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c141",
    "routeNumber": "C14/1",
    "nameEn": "Tollygunge ⇌ Nabanna",
    "nameBn": "Tollygunge ⇌ Nabanna",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Tollygunge to Nabanna Direct Corridor",
    "viaBn": "নবান্ন",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Tollygunge",
      "Nabanna"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nabanna",
        "directionNameBn": "Nabannaর দিকে",
        "originStopId": "stop-tollygunge",
        "destinationStopId": "stop-nabanna",
        "stops": [
          {
            "stopId": "stop-tollygunge",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-nabanna",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3112,
            22.5562
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Tollygunge",
        "directionNameBn": "Tollygungeর দিকে",
        "originStopId": "stop-nabanna",
        "destinationStopId": "stop-tollygunge",
        "stops": [
          {
            "stopId": "stop-nabanna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3112,
            22.5562
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c20",
    "routeNumber": "C20",
    "nameEn": "Fort William ⇌ Carry Road",
    "nameBn": "Fort William ⇌ Carry Road",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Fort William to Carry Road Direct Corridor",
    "viaBn": "ক্যারী রোড",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Fort William",
      "Carry Road"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Carry Road",
        "directionNameBn": "Carry Roadর দিকে",
        "originStopId": "stop-fort-william",
        "destinationStopId": "stop-carry-road",
        "stops": [
          {
            "stopId": "stop-fort-william",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.338,
            22.554
          ],
          [
            88.305,
            22.582
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Fort William",
        "directionNameBn": "Fort Williamর দিকে",
        "originStopId": "stop-carry-road",
        "destinationStopId": "stop-fort-william",
        "stops": [
          {
            "stopId": "stop-carry-road",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-fort-william",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.305,
            22.582
          ],
          [
            88.338,
            22.554
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c23",
    "routeNumber": "C23",
    "nameEn": "Park Circus ⇌ Dankuni",
    "nameBn": "Park Circus ⇌ Dankuni",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Park Circus to Dankuni Direct Corridor",
    "viaBn": "ডানকুনি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Park Circus",
      "Dankuni"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Dankuni",
        "directionNameBn": "Dankuniর দিকে",
        "originStopId": "stop-park-circus",
        "destinationStopId": "stop-dankuni",
        "stops": [
          {
            "stopId": "stop-park-circus",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.368,
            22.544
          ],
          [
            88.291,
            22.678
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Park Circus",
        "directionNameBn": "Park Circusর দিকে",
        "originStopId": "stop-dankuni",
        "destinationStopId": "stop-park-circus",
        "stops": [
          {
            "stopId": "stop-dankuni",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.291,
            22.678
          ],
          [
            88.368,
            22.544
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c23a",
    "routeNumber": "C23A",
    "nameEn": "Park Circus ⇌ Chanditala",
    "nameBn": "Park Circus ⇌ Chanditala",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Park Circus to Chanditala Direct Corridor",
    "viaBn": "Park Circus to Chanditala Direct Corridor",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Park Circus",
      "Chanditala"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Chanditala",
        "directionNameBn": "Chanditalaর দিকে",
        "originStopId": "stop-park-circus",
        "destinationStopId": "stop-chanditala",
        "stops": [
          {
            "stopId": "stop-park-circus",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-chanditala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.368,
            22.544
          ],
          [
            88.255,
            22.685
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Park Circus",
        "directionNameBn": "Park Circusর দিকে",
        "originStopId": "stop-chanditala",
        "destinationStopId": "stop-park-circus",
        "stops": [
          {
            "stopId": "stop-chanditala",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.255,
            22.685
          ],
          [
            88.368,
            22.544
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c24",
    "routeNumber": "C24",
    "nameEn": "Rajabazar ⇌ Howrah",
    "nameBn": "Rajabazar ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "College Street, MG. Road, Central, Burrabazar",
    "viaBn": "College Street, MG. Road, Central, Burrabazar",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Rajabazar",
      "College Street",
      "MG. Road",
      "Central",
      "Burrabazar",
      "Howrah"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-rajabazar",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-rajabazar",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-college-street",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-central",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-howrah",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3638,
            22.5768
          ],
          [
            88.3688,
            22.5818
          ],
          [
            88.358,
            22.574
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Rajabazar",
        "directionNameBn": "Rajabazarর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-rajabazar",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-central",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-college-street",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rajabazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3688,
            22.5818
          ],
          [
            88.3638,
            22.5768
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c26",
    "routeNumber": "C26",
    "nameEn": "Howrah ⇌ Barasat",
    "nameBn": "Howrah ⇌ Barasat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah to Barasat Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Barasat"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barasat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.481,
            22.723
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c26a",
    "routeNumber": "C26A",
    "nameEn": "Entally ⇌ Patuli",
    "nameBn": "Entally ⇌ Patuli",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Fortis hospital, Hiland Park",
    "viaBn": "ফর্টিস, হাইল্যান্ড পার্ক",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Entally",
      "Fortis hospital",
      "Hiland Park",
      "Patuli"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Patuli",
        "directionNameBn": "Patuliর দিকে",
        "originStopId": "stop-entally",
        "destinationStopId": "stop-patuli",
        "stops": [
          {
            "stopId": "stop-entally",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-fortis-hospital",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-hiland-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-patuli",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.397,
            22.518
          ],
          [
            88.391,
            22.478
          ],
          [
            88.388,
            22.472
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Entally",
        "directionNameBn": "Entallyর দিকে",
        "originStopId": "stop-patuli",
        "destinationStopId": "stop-entally",
        "stops": [
          {
            "stopId": "stop-patuli",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hiland-park",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-fortis-hospital",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-entally",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.388,
            22.472
          ],
          [
            88.391,
            22.478
          ],
          [
            88.397,
            22.518
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c28",
    "routeNumber": "C28",
    "nameEn": "Barrackpur ⇌ Howrah",
    "nameBn": "ব্যারাকপুর ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah Station, Girish Park, Sinthi, Kamarhati",
    "viaBn": "হাওড়া স্টেশন, গিরিশ পার্ক, সাঁথি, Kamarhati",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barrackpur",
      "Howrah Station",
      "MG. Road",
      "Girish Park",
      "Shyambazar",
      "Sinthi",
      "Dunlop",
      "Kamarhati",
      "Sodepur",
      "Khardaha",
      "Barrackpore Court",
      "Howrah"
    ],
    "stopCount": 12,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-barrackpur",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-barrackpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-sodepur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-khardaha",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-barrackpore-court",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-howrah",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3481,
            22.5885
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.377,
            22.653
          ],
          [
            88.375,
            22.671
          ],
          [
            88.383,
            22.698
          ],
          [
            88.381,
            22.721
          ],
          [
            88.362,
            22.768
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barrackpur",
        "directionNameBn": "ব্যারাকপুরর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-barrackpur",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barrackpore-court",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-khardaha",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sodepur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-barrackpur",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.362,
            22.768
          ],
          [
            88.381,
            22.721
          ],
          [
            88.383,
            22.698
          ],
          [
            88.375,
            22.671
          ],
          [
            88.377,
            22.653
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3481,
            22.5885
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c29",
    "routeNumber": "C29",
    "nameEn": "Barrackpur ⇌ Barasat",
    "nameBn": "ব্যারাকপুর ⇌ Barasat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Barrackpore Station, Mathran, Rangapur, Kolkapur",
    "viaBn": "ব্যারাকপুর স্টেশন, Mathran, Rangapur, Kolkapur",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barrackpur",
      "Barrackpore Station",
      "Mathran",
      "Rangapur",
      "Kolkapur",
      "Jagannathpur",
      "Barasat"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-barrackpur",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-barrackpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barrackpore-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mathran",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-rangapur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kolkapur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-jagannathpur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barasat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.365,
            22.765
          ],
          [
            88.37,
            22.77
          ],
          [
            88.375,
            22.775
          ],
          [
            88.38,
            22.78
          ],
          [
            88.385,
            22.785
          ],
          [
            88.481,
            22.723
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barrackpur",
        "directionNameBn": "ব্যারাকপুরর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-barrackpur",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jagannathpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolkapur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-rangapur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mathran",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-barrackpore-station",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barrackpur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.385,
            22.785
          ],
          [
            88.38,
            22.78
          ],
          [
            88.375,
            22.775
          ],
          [
            88.37,
            22.77
          ],
          [
            88.365,
            22.765
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c2a",
    "routeNumber": "C2A",
    "nameEn": "Tollygunge ⇌ Howrah",
    "nameBn": "Tollygunge ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Tollygunge to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Tollygunge",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-tollygunge",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-tollygunge",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Tollygunge",
        "directionNameBn": "Tollygungeর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-tollygunge",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c30",
    "routeNumber": "C30",
    "nameEn": "Rajabazar Tram Depot ⇌ Sankrail Station",
    "nameBn": "রাজাবাজার ট্রাম ডিপো ⇌ সাঁকরাইল স্টেশন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sealdah Station, BBD Bag, Esplanade, Rabindra Sadan",
    "viaBn": "শিয়ালদহ স্টেশন, বি.বি.ডি. বাগ, Esplanade, Rabindra Sadan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Rajabazar Tram Depot",
      "Sealdah Station",
      "BBD Bag",
      "Esplanade",
      "Rabindra Sadan",
      "PTS",
      "Hastings",
      "Sankrail Station"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Sankrail Station",
        "directionNameBn": "সাঁকরাইল স্টেশনর দিকে",
        "originStopId": "stop-rajabazar-tram-depot",
        "destinationStopId": "stop-sankrail-station",
        "stops": [
          {
            "stopId": "stop-rajabazar-tram-depot",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-pts",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-hastings",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-sankrail-station",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.241,
            22.562
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Rajabazar Tram Depot",
        "directionNameBn": "রাজাবাজার ট্রাম ডিপোর দিকে",
        "originStopId": "stop-sankrail-station",
        "destinationStopId": "stop-rajabazar-tram-depot",
        "stops": [
          {
            "stopId": "stop-sankrail-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hastings",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-pts",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sealdah-station",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-rajabazar-tram-depot",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.241,
            22.562
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c31",
    "routeNumber": "C31",
    "nameEn": "Karunamoyee ⇌ Bhattanagar",
    "nameBn": "Karunamoyee ⇌ Bhattanagar",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "SDF, Rabindra Tirtha, Chinar Park, Durganagar",
    "viaBn": "এসডিএফ, Rabindra Tirtha, Chinar Park, Durganagar",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Karunamoyee",
      "SDF",
      "Technopolis",
      "Rabindra Tirtha",
      "Nawabpur",
      "Chinar Park",
      "Airport",
      "Durganagar",
      "Nimta",
      "Dakshineswar",
      "Ballyghat",
      "Belurmath",
      "Bhattanagar"
    ],
    "stopCount": 13,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bhattanagar",
        "directionNameBn": "Bhattanagarর দিকে",
        "originStopId": "stop-karunamoyee",
        "destinationStopId": "stop-bhattanagar",
        "stops": [
          {
            "stopId": "stop-karunamoyee",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sdf",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-rabindra-tirtha",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-nawabpur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-airport",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-durganagar",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-nimta",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-dakshineswar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-ballyghat",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-belurmath",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-bhattanagar",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.4187,
            22.5867
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.438,
            22.583
          ],
          [
            88.465,
            22.595
          ],
          [
            88.47,
            22.6
          ],
          [
            88.448,
            22.628
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.421,
            22.658
          ],
          [
            88.405,
            22.662
          ],
          [
            88.361,
            22.656
          ],
          [
            88.348,
            22.651
          ],
          [
            88.351,
            22.631
          ],
          [
            88.318,
            22.618
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Karunamoyee",
        "directionNameBn": "Karunamoyeeর দিকে",
        "originStopId": "stop-bhattanagar",
        "destinationStopId": "stop-karunamoyee",
        "stops": [
          {
            "stopId": "stop-bhattanagar",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-belurmath",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ballyghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dakshineswar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-nimta",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-durganagar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-airport",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-nawabpur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-rabindra-tirtha",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-sdf",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-karunamoyee",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.318,
            22.618
          ],
          [
            88.351,
            22.631
          ],
          [
            88.348,
            22.651
          ],
          [
            88.361,
            22.656
          ],
          [
            88.405,
            22.662
          ],
          [
            88.421,
            22.658
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.448,
            22.628
          ],
          [
            88.47,
            22.6
          ],
          [
            88.465,
            22.595
          ],
          [
            88.438,
            22.583
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.4187,
            22.5867
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c36",
    "routeNumber": "C36",
    "nameEn": "Barasat ⇌ Howrah",
    "nameBn": "Barasat ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Barasat to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barasat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c37",
    "routeNumber": "C37",
    "nameEn": "Amtala ⇌ Howrah",
    "nameBn": "আমতলা ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Amtala to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Amtala",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-amtala",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-amtala",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.255,
            22.385
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Amtala",
        "directionNameBn": "আমতলার দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-amtala",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-amtala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.255,
            22.385
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c38",
    "routeNumber": "C38",
    "nameEn": "Jadavpur ⇌ Howrah",
    "nameBn": "Jadavpur ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jadavpur to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Jadavpur",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c39",
    "routeNumber": "C39",
    "nameEn": "Rajabazar Tram Depot ⇌ Nabanna Bus Terminus",
    "nameBn": "রাজাবাজার ট্রাম ডিপো ⇌ নবান্ন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sealdah Station, Esplanade, Park Street, Rabindra Sadan",
    "viaBn": "শিয়ালদহ স্টেশন, Esplanade, Park Street, Rabindra Sadan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Rajabazar Tram Depot",
      "Sealdah Station",
      "Esplanade",
      "Park Street",
      "Rabindra Sadan",
      "PTS",
      "Hastings",
      "Nabanna Bus Terminus"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nabanna Bus Terminus",
        "directionNameBn": "নবান্নর দিকে",
        "originStopId": "stop-rajabazar-tram-depot",
        "destinationStopId": "stop-nabanna-bus-terminus",
        "stops": [
          {
            "stopId": "stop-rajabazar-tram-depot",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-park-street",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-pts",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-hastings",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-nabanna-bus-terminus",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.3112,
            22.5562
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Rajabazar Tram Depot",
        "directionNameBn": "রাজাবাজার ট্রাম ডিপোর দিকে",
        "originStopId": "stop-nabanna-bus-terminus",
        "destinationStopId": "stop-rajabazar-tram-depot",
        "stops": [
          {
            "stopId": "stop-nabanna-bus-terminus",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hastings",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-pts",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-park-street",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sealdah-station",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-rajabazar-tram-depot",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3112,
            22.5562
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c42",
    "routeNumber": "C42",
    "nameEn": "Rajabazar ⇌ BBD Bag",
    "nameBn": "Rajabazar ⇌ বি.বি.ডি. বাগ",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Birati, Baguiati, Bank of India",
    "viaBn": "বিরাটি, বাগুইআটি, Bank of India",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Rajabazar",
      "Birati",
      "Baguiati",
      "Bank of India",
      "BBD Bag"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards BBD Bag",
        "directionNameBn": "বি.বি.ডি. বাগর দিকে",
        "originStopId": "stop-rajabazar",
        "destinationStopId": "stop-bbd-bag",
        "stops": [
          {
            "stopId": "stop-rajabazar",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-birati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bank-of-india",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.435,
            22.668
          ],
          [
            88.431,
            22.627
          ],
          [
            88.436,
            22.632
          ],
          [
            88.3498,
            22.5716
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Rajabazar",
        "directionNameBn": "Rajabazarর দিকে",
        "originStopId": "stop-bbd-bag",
        "destinationStopId": "stop-rajabazar",
        "stops": [
          {
            "stopId": "stop-bbd-bag",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bank-of-india",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-birati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-rajabazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3498,
            22.5716
          ],
          [
            88.436,
            22.632
          ],
          [
            88.431,
            22.627
          ],
          [
            88.435,
            22.668
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c43",
    "routeNumber": "C43",
    "nameEn": "Habra ⇌ Garia",
    "nameBn": "Habra ⇌ গড়িয়া",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Habra Rail station, Birati More, DLF1, Fortis",
    "viaBn": "হাবড়া, বিরাটি মোড়, DLF1, ফর্টিস",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Habra Rail station",
      "Ashoknagar",
      "Guma",
      "Bira",
      "Duttapukur",
      "Barasat Champadali",
      "Hridaypur",
      "Madhyamgram",
      "Birati More",
      "Airport Gate 1",
      "Haldiram",
      "Chinar Park",
      "City Centre 2",
      "Eco Park",
      "Narkelbagan",
      "Newtown",
      "DLF1",
      "Technopolis",
      "College More",
      "SDF",
      "Chingrighata",
      "Dhapa Mathpukur",
      "Science City",
      "Uttar Panchannagram",
      "Fortis",
      "Ruby",
      "Kalikapur",
      "Ajoynagar",
      "Hiland Park",
      "Patuli",
      "45 bus stand",
      "Garia Bus Stand",
      "Garia"
    ],
    "stopCount": 34,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Garia",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-garia",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-habra-rail-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-guma",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bira",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barasat-champadali",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-hridaypur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-birati-more",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-airport-gate-1",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-newtown",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-college-more",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-sdf",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-dhapa-mathpukur",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-science-city",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 25,
            "distanceFromStartKm": 43.2,
            "scheduledMinutesFromStart": 144
          },
          {
            "stopId": "stop-fortis",
            "sequence": 26,
            "distanceFromStartKm": 45.0,
            "scheduledMinutesFromStart": 150
          },
          {
            "stopId": "stop-ruby",
            "sequence": 27,
            "distanceFromStartKm": 46.8,
            "scheduledMinutesFromStart": 156
          },
          {
            "stopId": "stop-kalikapur",
            "sequence": 28,
            "distanceFromStartKm": 48.6,
            "scheduledMinutesFromStart": 162
          },
          {
            "stopId": "stop-ajoynagar",
            "sequence": 29,
            "distanceFromStartKm": 50.4,
            "scheduledMinutesFromStart": 168
          },
          {
            "stopId": "stop-hiland-park",
            "sequence": 30,
            "distanceFromStartKm": 52.2,
            "scheduledMinutesFromStart": 174
          },
          {
            "stopId": "stop-patuli",
            "sequence": 31,
            "distanceFromStartKm": 54.0,
            "scheduledMinutesFromStart": 180
          },
          {
            "stopId": "stop-45-bus-stand",
            "sequence": 32,
            "distanceFromStartKm": 55.8,
            "scheduledMinutesFromStart": 186
          },
          {
            "stopId": "stop-garia-bus-stand",
            "sequence": 33,
            "distanceFromStartKm": 57.6,
            "scheduledMinutesFromStart": 192
          },
          {
            "stopId": "stop-garia",
            "sequence": 34,
            "distanceFromStartKm": 59.4,
            "scheduledMinutesFromStart": 198
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.598,
            22.808
          ],
          [
            88.575,
            22.795
          ],
          [
            88.541,
            22.775
          ],
          [
            88.481,
            22.723
          ],
          [
            88.468,
            22.712
          ],
          [
            88.455,
            22.7
          ],
          [
            88.435,
            22.668
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.441,
            22.643
          ],
          [
            88.448,
            22.628
          ],
          [
            88.453,
            22.625
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.468,
            22.582
          ],
          [
            88.46,
            22.58
          ],
          [
            88.455,
            22.584
          ],
          [
            88.438,
            22.583
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.398,
            22.548
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.399,
            22.531
          ],
          [
            88.397,
            22.518
          ],
          [
            88.398,
            22.513
          ],
          [
            88.397,
            22.502
          ],
          [
            88.402,
            22.507
          ],
          [
            88.391,
            22.478
          ],
          [
            88.388,
            22.472
          ],
          [
            88.393,
            22.477
          ],
          [
            88.3812,
            22.4645
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-garia",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-garia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-garia-bus-stand",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-45-bus-stand",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-patuli",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-hiland-park",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ajoynagar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kalikapur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ruby",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-fortis",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-science-city",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-dhapa-mathpukur",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-sdf",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-college-more",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-newtown",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-airport-gate-1",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          },
          {
            "stopId": "stop-birati-more",
            "sequence": 25,
            "distanceFromStartKm": 43.2,
            "scheduledMinutesFromStart": 144
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 26,
            "distanceFromStartKm": 45.0,
            "scheduledMinutesFromStart": 150
          },
          {
            "stopId": "stop-hridaypur",
            "sequence": 27,
            "distanceFromStartKm": 46.8,
            "scheduledMinutesFromStart": 156
          },
          {
            "stopId": "stop-barasat-champadali",
            "sequence": 28,
            "distanceFromStartKm": 48.6,
            "scheduledMinutesFromStart": 162
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 29,
            "distanceFromStartKm": 50.4,
            "scheduledMinutesFromStart": 168
          },
          {
            "stopId": "stop-bira",
            "sequence": 30,
            "distanceFromStartKm": 52.2,
            "scheduledMinutesFromStart": 174
          },
          {
            "stopId": "stop-guma",
            "sequence": 31,
            "distanceFromStartKm": 54.0,
            "scheduledMinutesFromStart": 180
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 32,
            "distanceFromStartKm": 55.8,
            "scheduledMinutesFromStart": 186
          },
          {
            "stopId": "stop-habra-rail-station",
            "sequence": 33,
            "distanceFromStartKm": 57.6,
            "scheduledMinutesFromStart": 192
          },
          {
            "stopId": "stop-habra",
            "sequence": 34,
            "distanceFromStartKm": 59.4,
            "scheduledMinutesFromStart": 198
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.3812,
            22.4645
          ],
          [
            88.393,
            22.477
          ],
          [
            88.388,
            22.472
          ],
          [
            88.391,
            22.478
          ],
          [
            88.402,
            22.507
          ],
          [
            88.397,
            22.502
          ],
          [
            88.398,
            22.513
          ],
          [
            88.397,
            22.518
          ],
          [
            88.399,
            22.531
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.398,
            22.548
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.438,
            22.583
          ],
          [
            88.455,
            22.584
          ],
          [
            88.46,
            22.58
          ],
          [
            88.468,
            22.582
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.453,
            22.625
          ],
          [
            88.448,
            22.628
          ],
          [
            88.441,
            22.643
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.435,
            22.668
          ],
          [
            88.455,
            22.7
          ],
          [
            88.468,
            22.712
          ],
          [
            88.481,
            22.723
          ],
          [
            88.541,
            22.775
          ],
          [
            88.575,
            22.795
          ],
          [
            88.598,
            22.808
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c46",
    "routeNumber": "C46",
    "nameEn": "Hastings ⇌ Nabanna",
    "nameBn": "Hastings ⇌ Nabanna",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Watgunge More, Sakher Bazar",
    "viaBn": "Watgunge More, Sakher Bazar",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Hastings",
      "Watgunge More",
      "Sakher Bazar",
      "Nabanna"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nabanna",
        "directionNameBn": "Nabannaর দিকে",
        "originStopId": "stop-hastings",
        "destinationStopId": "stop-nabanna",
        "stops": [
          {
            "stopId": "stop-hastings",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-watgunge-more",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sakher-bazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-nabanna",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3312,
            22.5458
          ],
          [
            88.321,
            22.541
          ],
          [
            88.314,
            22.482
          ],
          [
            88.3112,
            22.5562
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Hastings",
        "directionNameBn": "Hastingsর দিকে",
        "originStopId": "stop-nabanna",
        "destinationStopId": "stop-hastings",
        "stops": [
          {
            "stopId": "stop-nabanna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sakher-bazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-watgunge-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hastings",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3112,
            22.5562
          ],
          [
            88.314,
            22.482
          ],
          [
            88.321,
            22.541
          ],
          [
            88.3312,
            22.5458
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c48",
    "routeNumber": "C48",
    "nameEn": "Barasat / Ecospace ⇌ Baruipur",
    "nameBn": "বারাসাত ⇌ Baruipur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Madhyamgram, Ecospace, Chingrighata, Peerless",
    "viaBn": "Madhyamgram, ইকোস্পেস, Chingrighata, Peerless",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat / Ecospace",
      "Madhyamgram",
      "Airport",
      "Chinar Park",
      "Aliah",
      "Ecospace",
      "Narkelbagan",
      "Newtown",
      "Sector 5",
      "Chingrighata",
      "Science City",
      "Ruby",
      "Ajoynagar",
      "Peerless",
      "Garia",
      "Narendrapur",
      "Harinavi",
      "Baruipur"
    ],
    "stopCount": 18,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Baruipur",
        "directionNameBn": "Baruipurর দিকে",
        "originStopId": "stop-barasat-ecospace",
        "destinationStopId": "stop-baruipur",
        "stops": [
          {
            "stopId": "stop-barasat-ecospace",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-aliah",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-newtown",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-sector-5",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-science-city",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-ruby",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-ajoynagar",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-peerless",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-garia",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-narendrapur",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-harinavi",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-baruipur",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.448,
            22.628
          ],
          [
            88.471,
            22.591
          ],
          [
            88.4842,
            22.5815
          ],
          [
            88.468,
            22.582
          ],
          [
            88.46,
            22.58
          ],
          [
            88.465,
            22.585
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.398,
            22.513
          ],
          [
            88.403,
            22.518
          ],
          [
            88.392,
            22.481
          ],
          [
            88.3812,
            22.4645
          ],
          [
            88.385,
            22.441
          ],
          [
            88.391,
            22.415
          ],
          [
            88.433,
            22.365
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat / Ecospace",
        "directionNameBn": "বারাসাতর দিকে",
        "originStopId": "stop-baruipur",
        "destinationStopId": "stop-barasat-ecospace",
        "stops": [
          {
            "stopId": "stop-baruipur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-harinavi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-narendrapur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-garia",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-peerless",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ajoynagar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ruby",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-science-city",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-sector-5",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-newtown",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-aliah",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-airport",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-barasat-ecospace",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          }
        ],
        "pathCoordinates": [
          [
            88.433,
            22.365
          ],
          [
            88.391,
            22.415
          ],
          [
            88.385,
            22.441
          ],
          [
            88.3812,
            22.4645
          ],
          [
            88.392,
            22.481
          ],
          [
            88.403,
            22.518
          ],
          [
            88.398,
            22.513
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.465,
            22.585
          ],
          [
            88.46,
            22.58
          ],
          [
            88.468,
            22.582
          ],
          [
            88.4842,
            22.5815
          ],
          [
            88.471,
            22.591
          ],
          [
            88.448,
            22.628
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c7",
    "routeNumber": "C7",
    "nameEn": "Howrah ⇌ Garden Reach",
    "nameBn": "Howrah ⇌ Garden Reach",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Barabazar, Babughat, Princep Ghat, Hastings",
    "viaBn": "Barabazar, Babughat, Princep Ghat, Hastings",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Barabazar",
      "Babughat",
      "Princep Ghat",
      "Hastings",
      "Babubazar",
      "Garden Reach"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Garden Reach",
        "directionNameBn": "Garden Reachর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-garden-reach",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-babughat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-princep-ghat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-hastings",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-babubazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-garden-reach",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.36,
            22.589
          ],
          [
            88.365,
            22.594
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.305,
            22.541
          ],
          [
            88.291,
            22.545
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-garden-reach",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-garden-reach",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-babubazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-hastings",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-princep-ghat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-babughat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-barabazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-howrah",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.291,
            22.545
          ],
          [
            88.305,
            22.541
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.365,
            22.594
          ],
          [
            88.36,
            22.589
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-c8",
    "routeNumber": "C8",
    "nameEn": "Barasat ⇌ Joka",
    "nameBn": "Barasat ⇌ Joka",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Champadali, City Centre 2, Dhapa Mathpukur, Ballygunge Station",
    "viaBn": "Champadali, City Centre 2, Dhapa Mathpukur, বালিগঞ্জ স্টেশন",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Champadali",
      "Dakbungalow More",
      "Hridaypur",
      "Madhyamgram",
      "Airport Gate No.1",
      "Haldiram",
      "Chinar Park",
      "City Centre 2",
      "Eco Park",
      "Narkelbagan",
      "Axis Mall",
      "DLF",
      "Technopolis",
      "College More",
      "Dhapa Mathpukur",
      "Science City",
      "Uttar Panchannagram",
      "VIP Bazar",
      "Fortis hospital",
      "Ruby",
      "Acropolis",
      "Ballygunge Station",
      "Gariahat",
      "Deshapriya Park",
      "Rashbihari Crossing",
      "Bangur hospital",
      "Tollygunge Tram Depot",
      "Thakurpukur cancer hospital",
      "Thakurpukur 3A",
      "Joka"
    ],
    "stopCount": 31,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Joka",
        "directionNameBn": "Jokaর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-joka",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-champadali",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dakbungalow-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hridaypur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport-gate-no-1",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-axis-mall",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-dlf",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-college-more",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-dhapa-mathpukur",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-science-city",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-vip-bazar",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-fortis-hospital",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-ruby",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-acropolis",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          },
          {
            "stopId": "stop-deshapriya-park",
            "sequence": 25,
            "distanceFromStartKm": 43.2,
            "scheduledMinutesFromStart": 144
          },
          {
            "stopId": "stop-rashbihari-crossing",
            "sequence": 26,
            "distanceFromStartKm": 45.0,
            "scheduledMinutesFromStart": 150
          },
          {
            "stopId": "stop-bangur-hospital",
            "sequence": 27,
            "distanceFromStartKm": 46.8,
            "scheduledMinutesFromStart": 156
          },
          {
            "stopId": "stop-tollygunge-tram-depot",
            "sequence": 28,
            "distanceFromStartKm": 48.6,
            "scheduledMinutesFromStart": 162
          },
          {
            "stopId": "stop-thakurpukur-cancer-hospital",
            "sequence": 29,
            "distanceFromStartKm": 50.4,
            "scheduledMinutesFromStart": 168
          },
          {
            "stopId": "stop-thakurpukur-3a",
            "sequence": 30,
            "distanceFromStartKm": 52.2,
            "scheduledMinutesFromStart": 174
          },
          {
            "stopId": "stop-joka",
            "sequence": 31,
            "distanceFromStartKm": 54.0,
            "scheduledMinutesFromStart": 180
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.481,
            22.723
          ],
          [
            88.483,
            22.728
          ],
          [
            88.468,
            22.712
          ],
          [
            88.455,
            22.7
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.441,
            22.643
          ],
          [
            88.448,
            22.628
          ],
          [
            88.453,
            22.625
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.468,
            22.582
          ],
          [
            88.462,
            22.583
          ],
          [
            88.455,
            22.584
          ],
          [
            88.438,
            22.583
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.398,
            22.548
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.399,
            22.531
          ],
          [
            88.398,
            22.525
          ],
          [
            88.397,
            22.518
          ],
          [
            88.398,
            22.513
          ],
          [
            88.392,
            22.514
          ],
          [
            88.368,
            22.525
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.358,
            22.52
          ],
          [
            88.363,
            22.525
          ],
          [
            88.409,
            22.607
          ],
          [
            88.414,
            22.612
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.304,
            22.461
          ],
          [
            88.298,
            22.441
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-joka",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-joka",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-thakurpukur-3a",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-thakurpukur-cancer-hospital",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-tollygunge-tram-depot",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bangur-hospital",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rashbihari-crossing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-deshapriya-park",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-acropolis",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-ruby",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-fortis-hospital",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-vip-bazar",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-uttar-panchannagram",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-science-city",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-dhapa-mathpukur",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-college-more",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-technopolis",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-dlf",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-axis-mall",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-city-centre-2",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          },
          {
            "stopId": "stop-haldiram",
            "sequence": 25,
            "distanceFromStartKm": 43.2,
            "scheduledMinutesFromStart": 144
          },
          {
            "stopId": "stop-airport-gate-no-1",
            "sequence": 26,
            "distanceFromStartKm": 45.0,
            "scheduledMinutesFromStart": 150
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 27,
            "distanceFromStartKm": 46.8,
            "scheduledMinutesFromStart": 156
          },
          {
            "stopId": "stop-hridaypur",
            "sequence": 28,
            "distanceFromStartKm": 48.6,
            "scheduledMinutesFromStart": 162
          },
          {
            "stopId": "stop-dakbungalow-more",
            "sequence": 29,
            "distanceFromStartKm": 50.4,
            "scheduledMinutesFromStart": 168
          },
          {
            "stopId": "stop-champadali",
            "sequence": 30,
            "distanceFromStartKm": 52.2,
            "scheduledMinutesFromStart": 174
          },
          {
            "stopId": "stop-barasat",
            "sequence": 31,
            "distanceFromStartKm": 54.0,
            "scheduledMinutesFromStart": 180
          }
        ],
        "pathCoordinates": [
          [
            88.298,
            22.441
          ],
          [
            88.304,
            22.461
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.414,
            22.612
          ],
          [
            88.409,
            22.607
          ],
          [
            88.363,
            22.525
          ],
          [
            88.358,
            22.52
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.368,
            22.525
          ],
          [
            88.392,
            22.514
          ],
          [
            88.398,
            22.513
          ],
          [
            88.397,
            22.518
          ],
          [
            88.398,
            22.525
          ],
          [
            88.399,
            22.531
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.398,
            22.548
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.438,
            22.583
          ],
          [
            88.455,
            22.584
          ],
          [
            88.462,
            22.583
          ],
          [
            88.468,
            22.582
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.453,
            22.625
          ],
          [
            88.448,
            22.628
          ],
          [
            88.441,
            22.643
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.455,
            22.7
          ],
          [
            88.468,
            22.712
          ],
          [
            88.483,
            22.728
          ],
          [
            88.481,
            22.723
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d11",
    "routeNumber": "D11",
    "nameEn": "Esplanade ⇌ Baduria",
    "nameBn": "Esplanade ⇌ Baduria",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Shyambazar, Laketown, Airport, Barasat",
    "viaBn": "Shyambazar, Laketown, Airport, Barasat",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Shyambazar",
      "Laketown",
      "Airport",
      "Barasat",
      "Kadambagachi",
      "Deganga",
      "Baduria"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Baduria",
        "directionNameBn": "Baduriaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-baduria",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-laketown",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-barasat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kadambagachi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-deganga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-baduria",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.401,
            22.602
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.525,
            22.735
          ],
          [
            88.615,
            22.712
          ],
          [
            88.795,
            22.742
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-baduria",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-baduria",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-deganga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kadambagachi",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-barasat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-laketown",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.795,
            22.742
          ],
          [
            88.615,
            22.712
          ],
          [
            88.525,
            22.735
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.401,
            22.602
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d17",
    "routeNumber": "D17",
    "nameEn": "Garia ⇌ Kwic",
    "nameBn": "গড়িয়া ⇌ Kwic",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jadavpur, Hazra xing, PTS, Belepole",
    "viaBn": "Jadavpur, হাজরা, পিটিএস, Belepole",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Garia",
      "Jadavpur",
      "Anwar Shah Road",
      "Hazra xing",
      "Rabindra Sadan",
      "PTS",
      "Carry Road",
      "Belepole",
      "Santragachi",
      "Kona Express",
      "Kwic"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Kwic",
        "directionNameBn": "Kwicর দিকে",
        "originStopId": "stop-garia",
        "destinationStopId": "stop-kwic",
        "stops": [
          {
            "stopId": "stop-garia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-anwar-shah-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hazra-xing",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-pts",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-belepole",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kona-express",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-kwic",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3812,
            22.4645
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3768,
            22.5038
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.305,
            22.582
          ],
          [
            88.295,
            22.581
          ],
          [
            88.281,
            22.581
          ],
          [
            88.275,
            22.583
          ],
          [
            88.28,
            22.588
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Garia",
        "directionNameBn": "গড়িয়ার দিকে",
        "originStopId": "stop-kwic",
        "destinationStopId": "stop-garia",
        "stops": [
          {
            "stopId": "stop-kwic",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kona-express",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belepole",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-pts",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-hazra-xing",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-anwar-shah-road",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-garia",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.28,
            22.588
          ],
          [
            88.275,
            22.583
          ],
          [
            88.281,
            22.581
          ],
          [
            88.295,
            22.581
          ],
          [
            88.305,
            22.582
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.3768,
            22.5038
          ],
          [
            88.3718,
            22.4988
          ],
          [
            88.3812,
            22.4645
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d1a",
    "routeNumber": "D1A",
    "nameEn": "Barasat ⇌ Tollygunge",
    "nameBn": "Barasat ⇌ Tollygunge",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Madhyamgram, Baguiati, Laketown, Belaghata",
    "viaBn": "Madhyamgram, বাগুইআটি, Laketown, Belaghata",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Madhyamgram",
      "Airport",
      "Baguiati",
      "Kestopur",
      "Laketown",
      "Ultadanga",
      "Belaghata",
      "Chingrighata",
      "Science City",
      "Ruby",
      "Rashbihari",
      "Tollygunge"
    ],
    "stopCount": 13,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Tollygunge",
        "directionNameBn": "Tollygungeর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-tollygunge",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-laketown",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-belaghata",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-science-city",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-ruby",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-rashbihari",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.431,
            22.627
          ],
          [
            88.423,
            22.618
          ],
          [
            88.401,
            22.602
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.391,
            22.568
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.398,
            22.513
          ],
          [
            88.403,
            22.518
          ],
          [
            88.408,
            22.523
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-tollygunge",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-tollygunge",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-rashbihari",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ruby",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-science-city",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-belaghata",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-laketown",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-airport",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-barasat",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.408,
            22.523
          ],
          [
            88.403,
            22.518
          ],
          [
            88.398,
            22.513
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.391,
            22.568
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.401,
            22.602
          ],
          [
            88.423,
            22.618
          ],
          [
            88.431,
            22.627
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d2",
    "routeNumber": "D2",
    "nameEn": "Habra ⇌ Naihati",
    "nameBn": "Habra ⇌ Naihati",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Kalyangarh More, Beledanga, Adhata, Hamidpur",
    "viaBn": "Kalyangarh More, Beledanga, Adhata, Hamidpur",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Kalyangarh More",
      "Beledanga",
      "Adhata",
      "Hamidpur",
      "Boro Talikhola",
      "Saheb Colony More",
      "Naihati Station",
      "Naihati"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Naihati",
        "directionNameBn": "Naihatiর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-naihati",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kalyangarh-more",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-beledanga",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-adhata",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-hamidpur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-boro-talikhola",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-saheb-colony-more",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-naihati-station",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-naihati",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.636,
            22.847
          ],
          [
            88.641,
            22.852
          ],
          [
            88.646,
            22.857
          ],
          [
            88.651,
            22.862
          ],
          [
            88.656,
            22.867
          ],
          [
            88.661,
            22.872
          ],
          [
            88.425,
            22.895
          ],
          [
            88.425,
            22.895
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-naihati",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-naihati",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-naihati-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-saheb-colony-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-boro-talikhola",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-hamidpur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-adhata",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-beledanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kalyangarh-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-habra",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.425,
            22.895
          ],
          [
            88.425,
            22.895
          ],
          [
            88.661,
            22.872
          ],
          [
            88.656,
            22.867
          ],
          [
            88.651,
            22.862
          ],
          [
            88.646,
            22.857
          ],
          [
            88.641,
            22.852
          ],
          [
            88.636,
            22.847
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d20",
    "routeNumber": "D20",
    "nameEn": "Esplanade ⇌ Basirhat",
    "nameBn": "Esplanade ⇌ বসিরহাট",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga, Airport, Kholapota, Berachampa",
    "viaBn": "Ultadanga, Airport, খোলাপোতা, বেড়াচাঁপা",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Ultadanga",
      "Airport",
      "Kholapota",
      "Berachampa",
      "Basirhat"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Basirhat",
        "directionNameBn": "বসিরহাটর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-basirhat",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kholapota",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-basirhat",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.815,
            22.675
          ],
          [
            88.681,
            22.695
          ],
          [
            88.864,
            22.661
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-basirhat",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-basirhat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kholapota",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.864,
            22.661
          ],
          [
            88.681,
            22.695
          ],
          [
            88.815,
            22.675
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d21",
    "routeNumber": "D21",
    "nameEn": "Howrah Station ⇌ Nazat",
    "nameBn": "হাওড়া স্টেশন ⇌ Nazat",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sealdah Court, Building More, Ghatakpukur, Minakhan",
    "viaBn": "Sealdah Court, Building More, Ghatakpukur, Minakhan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Station",
      "Sealdah Court",
      "Building More",
      "Ghatakpukur",
      "Minakhan",
      "Malancha",
      "Nazat"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Nazat",
        "directionNameBn": "Nazatর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-nazat",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah-court",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-building-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-malancha",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-nazat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.369,
            22.567
          ],
          [
            88.398,
            22.535
          ],
          [
            88.585,
            22.485
          ],
          [
            88.705,
            22.492
          ],
          [
            88.745,
            22.482
          ],
          [
            88.75,
            22.487
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-nazat",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-nazat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-malancha",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-building-more",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sealdah-court",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.75,
            22.487
          ],
          [
            88.745,
            22.482
          ],
          [
            88.705,
            22.492
          ],
          [
            88.585,
            22.485
          ],
          [
            88.398,
            22.535
          ],
          [
            88.369,
            22.567
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d23",
    "routeNumber": "D23",
    "nameEn": "Esplanade ⇌ Kaljuri Bazar",
    "nameBn": "Esplanade ⇌ Kaljuri Bazar",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Central Avenue, Belgachia, Nagerbazar, Barasat",
    "viaBn": "Central Avenue, Belgachia, Nagerbazar, Barasat",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Central Avenue",
      "Shyambazar",
      "Belgachia",
      "Laketown",
      "Nagerbazar",
      "Airport",
      "Barasat",
      "Deganga",
      "Berachampa",
      "Baduria",
      "Kaljuri Bazar"
    ],
    "stopCount": 12,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Kaljuri Bazar",
        "directionNameBn": "Kaljuri Bazarর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-kaljuri-bazar",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belgachia",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-laketown",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-nagerbazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-airport",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-barasat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-deganga",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-baduria",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-kaljuri-bazar",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3814,
            22.6075
          ],
          [
            88.401,
            22.602
          ],
          [
            88.411,
            22.626
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.615,
            22.712
          ],
          [
            88.681,
            22.695
          ],
          [
            88.795,
            22.742
          ],
          [
            88.8,
            22.747
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-kaljuri-bazar",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-kaljuri-bazar",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-baduria",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-deganga",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-barasat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-nagerbazar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-laketown",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-belgachia",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.8,
            22.747
          ],
          [
            88.795,
            22.742
          ],
          [
            88.681,
            22.695
          ],
          [
            88.615,
            22.712
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.411,
            22.626
          ],
          [
            88.401,
            22.602
          ],
          [
            88.3814,
            22.6075
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d26",
    "routeNumber": "D26",
    "nameEn": "Park Circus ⇌ Hakimpur",
    "nameBn": "Park Circus ⇌ হাকিমপুর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Science City, Sector V, Barasat, Swarupnagar",
    "viaBn": "সায়েন্স সিটি, Sector V, Barasat, স্বরূপনগর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Park Circus",
      "Science City",
      "Chingrighata",
      "Karunamoyee",
      "Sector V",
      "Newtown Bus Terminus",
      "Chinar Park",
      "Barasat",
      "Berachampa",
      "Baduria",
      "Swarupnagar",
      "Nirman",
      "Bithari",
      "Hakimpur"
    ],
    "stopCount": 14,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Hakimpur",
        "directionNameBn": "হাকিমপুরর দিকে",
        "originStopId": "stop-park-circus",
        "destinationStopId": "stop-hakimpur",
        "stops": [
          {
            "stopId": "stop-park-circus",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-science-city",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-karunamoyee",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sector-v",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-newtown-bus-terminus",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-barasat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-baduria",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-swarupnagar",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-nirman",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-bithari",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-hakimpur",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.368,
            22.544
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.4187,
            22.5867
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.46,
            22.58
          ],
          [
            88.448,
            22.628
          ],
          [
            88.481,
            22.723
          ],
          [
            88.681,
            22.695
          ],
          [
            88.795,
            22.742
          ],
          [
            88.875,
            22.825
          ],
          [
            88.88,
            22.83
          ],
          [
            88.885,
            22.835
          ],
          [
            88.945,
            22.865
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Park Circus",
        "directionNameBn": "Park Circusর দিকে",
        "originStopId": "stop-hakimpur",
        "destinationStopId": "stop-park-circus",
        "stops": [
          {
            "stopId": "stop-hakimpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bithari",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-nirman",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-swarupnagar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-baduria",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barasat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-chinar-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-newtown-bus-terminus",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-sector-v",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-karunamoyee",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-science-city",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.945,
            22.865
          ],
          [
            88.885,
            22.835
          ],
          [
            88.88,
            22.83
          ],
          [
            88.875,
            22.825
          ],
          [
            88.795,
            22.742
          ],
          [
            88.681,
            22.695
          ],
          [
            88.481,
            22.723
          ],
          [
            88.448,
            22.628
          ],
          [
            88.46,
            22.58
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.4187,
            22.5867
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.368,
            22.544
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d314",
    "routeNumber": "D31/4",
    "nameEn": "Esplanade ⇌ Srinathpur",
    "nameBn": "Esplanade ⇌ Srinathpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Central Avenue, Nagerbazar, Madhyamgram, Habra",
    "viaBn": "Central Avenue, Nagerbazar, Madhyamgram, Habra",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Central Avenue",
      "Shyambazar",
      "Nagerbazar",
      "Airport",
      "Madhyamgram",
      "Ashoknagar",
      "Habra",
      "Charghat",
      "Kapileswarpur",
      "Srinathpur"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Srinathpur",
        "directionNameBn": "Srinathpurর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-srinathpur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-nagerbazar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-habra",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-charghat",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kapileswarpur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-srinathpur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.411,
            22.626
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.455,
            22.7
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ],
          [
            88.636,
            22.847
          ],
          [
            88.641,
            22.852
          ],
          [
            88.646,
            22.857
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-srinathpur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-srinathpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kapileswarpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-charghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-habra",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-airport",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-nagerbazar",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.646,
            22.857
          ],
          [
            88.641,
            22.852
          ],
          [
            88.636,
            22.847
          ],
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.455,
            22.7
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.411,
            22.626
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d32",
    "routeNumber": "D32",
    "nameEn": "Deganga ⇌ Dulduli",
    "nameBn": "দেগঙ্গা ⇌ Dulduli",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Berachampa, Basirhat",
    "viaBn": "বেড়াচাঁপা, বসিরহাট",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Deganga",
      "Berachampa",
      "Basirhat",
      "Dulduli"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Dulduli",
        "directionNameBn": "Dulduliর দিকে",
        "originStopId": "stop-deganga",
        "destinationStopId": "stop-dulduli",
        "stops": [
          {
            "stopId": "stop-deganga",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-basirhat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dulduli",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.615,
            22.712
          ],
          [
            88.681,
            22.695
          ],
          [
            88.864,
            22.661
          ],
          [
            88.869,
            22.666
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Deganga",
        "directionNameBn": "দেগঙ্গার দিকে",
        "originStopId": "stop-dulduli",
        "destinationStopId": "stop-deganga",
        "stops": [
          {
            "stopId": "stop-dulduli",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-basirhat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-deganga",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.869,
            22.666
          ],
          [
            88.864,
            22.661
          ],
          [
            88.681,
            22.695
          ],
          [
            88.615,
            22.712
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d7",
    "routeNumber": "D7",
    "nameEn": "Barasat ⇌ Bagdah",
    "nameBn": "Barasat ⇌ Bagdah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Duttapukur, Bira, Habra, Chandpara More",
    "viaBn": "দত্তপুকুর, Bira, Habra, Chandpara More",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Duttapukur",
      "Bira",
      "Habra",
      "Chandpara More",
      "Gaighata",
      "Bongaon",
      "Bagdah"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bagdah",
        "directionNameBn": "Bagdahর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-bagdah",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bira",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-habra",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-chandpara-more",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-gaighata",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-bongaon",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bagdah",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.541,
            22.775
          ],
          [
            88.575,
            22.795
          ],
          [
            88.631,
            22.842
          ],
          [
            88.636,
            22.847
          ],
          [
            88.725,
            22.925
          ],
          [
            88.825,
            23.045
          ],
          [
            88.885,
            23.205
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-bagdah",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-bagdah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bongaon",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-gaighata",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-chandpara-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-habra",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bira",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-barasat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.885,
            23.205
          ],
          [
            88.825,
            23.045
          ],
          [
            88.725,
            22.925
          ],
          [
            88.636,
            22.847
          ],
          [
            88.631,
            22.842
          ],
          [
            88.575,
            22.795
          ],
          [
            88.541,
            22.775
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-db",
    "routeNumber": "DB",
    "nameEn": "Barasat ⇌ Baduria",
    "nameBn": "Barasat ⇌ Baduria",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Kadambagachi, Deganga, Kaukepara, Nagar Kachua",
    "viaBn": "Kadambagachi, দেগঙ্গা, Kaukepara, Nagar Kachua",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Kadambagachi",
      "Deganga",
      "Kaukepara",
      "Nagar Kachua",
      "Jadurhati",
      "Baduria"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Baduria",
        "directionNameBn": "Baduriaর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-baduria",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kadambagachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-deganga",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kaukepara",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-nagar-kachua",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-jadurhati",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-baduria",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.525,
            22.735
          ],
          [
            88.615,
            22.712
          ],
          [
            88.62,
            22.717
          ],
          [
            88.625,
            22.722
          ],
          [
            88.63,
            22.727
          ],
          [
            88.795,
            22.742
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-baduria",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-baduria",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadurhati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-nagar-kachua",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kaukepara",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-deganga",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kadambagachi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barasat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.795,
            22.742
          ],
          [
            88.63,
            22.727
          ],
          [
            88.625,
            22.722
          ],
          [
            88.62,
            22.717
          ],
          [
            88.615,
            22.712
          ],
          [
            88.525,
            22.735
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-d9",
    "routeNumber": "D9",
    "nameEn": "Barasat ⇌ Hakimpur",
    "nameBn": "Barasat ⇌ হাকিমপুর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Duttapukur, Guma, Habra, Swarupnagar",
    "viaBn": "দত্তপুকুর, Guma, Habra, স্বরূপনগর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Duttapukur",
      "Bira",
      "Guma",
      "Ashoknagar",
      "Habra",
      "Tentulia",
      "Swarupnagar",
      "Nirman",
      "Bithari",
      "Hakimpur"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Hakimpur",
        "directionNameBn": "হাকিমপুরর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-hakimpur",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bira",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-guma",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-habra",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-tentulia",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-swarupnagar",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-nirman",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-bithari",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-hakimpur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.541,
            22.775
          ],
          [
            88.575,
            22.795
          ],
          [
            88.598,
            22.808
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ],
          [
            88.636,
            22.847
          ],
          [
            88.875,
            22.825
          ],
          [
            88.88,
            22.83
          ],
          [
            88.885,
            22.835
          ],
          [
            88.945,
            22.865
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-hakimpur",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-hakimpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bithari",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-nirman",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-swarupnagar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-tentulia",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-habra",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-guma",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-bira",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-barasat",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.945,
            22.865
          ],
          [
            88.885,
            22.835
          ],
          [
            88.88,
            22.83
          ],
          [
            88.875,
            22.825
          ],
          [
            88.636,
            22.847
          ],
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.598,
            22.808
          ],
          [
            88.575,
            22.795
          ],
          [
            88.541,
            22.775
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e12",
    "routeNumber": "E12",
    "nameEn": "Esplanade ⇌ Udaynarayanpur",
    "nameBn": "Esplanade ⇌ Udaynarayanpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Bargachia, Munshirhat",
    "viaBn": "Santragachi, Bargachia, Munshirhat",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Bargachia",
      "Munshirhat",
      "Udaynarayanpur"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Udaynarayanpur",
        "directionNameBn": "Udaynarayanpurর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-udaynarayanpur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-munshirhat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-udaynarayanpur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            88.155,
            22.658
          ],
          [
            88.112,
            22.645
          ],
          [
            87.975,
            22.721
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-udaynarayanpur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-udaynarayanpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-munshirhat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            87.975,
            22.721
          ],
          [
            88.112,
            22.645
          ],
          [
            88.155,
            22.658
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e13",
    "routeNumber": "E13",
    "nameEn": "Esplanade ⇌ Jangipara",
    "nameBn": "Esplanade ⇌ Jangipara",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Bargachia",
    "viaBn": "Bargachia",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Bargachia",
      "Jangipara"
    ],
    "stopCount": 3,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jangipara",
        "directionNameBn": "Jangiparaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-jangipara",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-jangipara",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.155,
            22.658
          ],
          [
            88.045,
            22.745
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-jangipara",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-jangipara",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.045,
            22.745
          ],
          [
            88.155,
            22.658
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e14",
    "routeNumber": "E14",
    "nameEn": "Esplanade ⇌ Furfura Sharif",
    "nameBn": "Esplanade ⇌ ফুরফুরা শরীফ",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Central Avenue, Shyambazar, Dunlop, Ballyghat",
    "viaBn": "Central Avenue, Shyambazar, Dunlop, বালিঘাট",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Central Avenue",
      "Shyambazar",
      "Dunlop",
      "Ballyghat",
      "Chanditala",
      "Sheakhala",
      "Furfura Sharif"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Furfura Sharif",
        "directionNameBn": "ফুরফুরা শরীফর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-furfura-sharif",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ballyghat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chanditala",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-furfura-sharif",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.377,
            22.653
          ],
          [
            88.348,
            22.651
          ],
          [
            88.255,
            22.685
          ],
          [
            88.185,
            22.735
          ],
          [
            88.145,
            22.755
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-furfura-sharif",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-furfura-sharif",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-chanditala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ballyghat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.145,
            22.755
          ],
          [
            88.185,
            22.735
          ],
          [
            88.255,
            22.685
          ],
          [
            88.348,
            22.651
          ],
          [
            88.377,
            22.653
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e15",
    "routeNumber": "E15",
    "nameEn": "Esplanade ⇌ Gadiara",
    "nameBn": "Esplanade ⇌ Gadiara",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Ranihati, 58 Gate, Garchumuk",
    "viaBn": "Santragachi, Ranihati, 58 Gate, Garchumuk",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Ranihati",
      "58 Gate",
      "Garchumuk",
      "Shyampur",
      "Gadiara"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Gadiara",
        "directionNameBn": "Gadiaraর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-gadiara",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-58-gate",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-garchumuk",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-shyampur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-gadiara",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            88.165,
            22.548
          ],
          [
            88.125,
            22.385
          ],
          [
            88.085,
            22.285
          ],
          [
            88.055,
            22.255
          ],
          [
            88.035,
            22.215
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-gadiara",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-gadiara",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-shyampur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-garchumuk",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-58-gate",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.035,
            22.215
          ],
          [
            88.055,
            22.255
          ],
          [
            88.085,
            22.285
          ],
          [
            88.125,
            22.385
          ],
          [
            88.165,
            22.548
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e17",
    "routeNumber": "E17",
    "nameEn": "Barasat ⇌ Digha",
    "nameBn": "Barasat ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Airport, Esplanade, Ranihati, Kolaghat",
    "viaBn": "Airport, Esplanade, Ranihati, কোলাঘাট",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Airport",
      "VIP Road",
      "Esplanade",
      "Santragachi",
      "Ranihati",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 10,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-vip-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-digha",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            88.165,
            22.548
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-vip-road",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-airport",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-barasat",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.165,
            22.548
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e171",
    "routeNumber": "E17/1",
    "nameEn": "Barasat ⇌ Digha",
    "nameBn": "Barasat ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Airport, Belgharia Expressway, Ranihati, Bagnan",
    "viaBn": "Airport, Belgharia Expressway, Ranihati, Bagnan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Airport",
      "Belgharia Expressway",
      "Ranihati",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-digha",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            88.165,
            22.548
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-airport",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-barasat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.165,
            22.548
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e18",
    "routeNumber": "E18",
    "nameEn": "Esplanade ⇌ Dhamakhali",
    "nameBn": "Esplanade ⇌ Dhamakhali",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sealdah, Science City, Ghatakpukur, Minakhan",
    "viaBn": "Sealdah, সায়েন্স সিটি, Ghatakpukur, Minakhan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Sealdah",
      "Science City",
      "Ghatakpukur",
      "Minakhan",
      "Malancha",
      "Dhamakhali"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Dhamakhali",
        "directionNameBn": "Dhamakhaliর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-dhamakhali",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-science-city",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-malancha",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-dhamakhali",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.585,
            22.485
          ],
          [
            88.705,
            22.492
          ],
          [
            88.745,
            22.482
          ],
          [
            88.875,
            22.365
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-dhamakhali",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-dhamakhali",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-malancha",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-science-city",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.875,
            22.365
          ],
          [
            88.745,
            22.482
          ],
          [
            88.705,
            22.492
          ],
          [
            88.585,
            22.485
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e19",
    "routeNumber": "E19",
    "nameEn": "Habra ⇌ Digha",
    "nameBn": "Habra ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Duttapukur, Airport, Dunlop, Bagnan",
    "viaBn": "দত্তপুকুর, Airport, Dunlop, Bagnan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Duttapukur",
      "Barasat",
      "Airport",
      "Belgharia Expressway",
      "Dunlop",
      "Ranihati",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-barasat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-digha",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.541,
            22.775
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            88.377,
            22.653
          ],
          [
            88.165,
            22.548
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-airport",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-barasat",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-habra",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.165,
            22.548
          ],
          [
            88.377,
            22.653
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.541,
            22.775
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e21",
    "routeNumber": "E21",
    "nameEn": "Esplanade ⇌ Shikharpur",
    "nameBn": "Esplanade ⇌ Shikharpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga, Airport",
    "viaBn": "Ultadanga, Airport",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Ultadanga",
      "Airport",
      "Shikharpur"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Shikharpur",
        "directionNameBn": "Shikharpurর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-shikharpur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-shikharpur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.4517,
            22.657
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-shikharpur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-shikharpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.4517,
            22.657
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e22",
    "routeNumber": "E22",
    "nameEn": "Esplanade ⇌ Shikharpur",
    "nameBn": "Esplanade ⇌ Shikharpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga, Airport, Barasat",
    "viaBn": "Ultadanga, Airport, Barasat",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Ultadanga",
      "Airport",
      "Barasat",
      "Shikharpur"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Shikharpur",
        "directionNameBn": "Shikharpurর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-shikharpur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-barasat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-shikharpur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.486,
            22.728
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-shikharpur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-shikharpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barasat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.486,
            22.728
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e24",
    "routeNumber": "E24",
    "nameEn": "Esplanade ⇌ Palashipara",
    "nameBn": "Esplanade ⇌ Palashipara",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga, Airport, Barasat, Jagulia",
    "viaBn": "Ultadanga, Airport, Barasat, Jagulia",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Ultadanga",
      "Airport",
      "Barasat",
      "Jagulia",
      "Ranaghat",
      "Krishnanagar",
      "Palashipara"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Palashipara",
        "directionNameBn": "Palashiparaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-palashipara",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-barasat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-jagulia",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ranaghat",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-krishnanagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-palashipara",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.486,
            22.728
          ],
          [
            88.581,
            23.181
          ],
          [
            88.502,
            23.401
          ],
          [
            88.455,
            23.785
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-palashipara",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-palashipara",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-krishnanagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ranaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-jagulia",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-barasat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.455,
            23.785
          ],
          [
            88.502,
            23.401
          ],
          [
            88.581,
            23.181
          ],
          [
            88.486,
            22.728
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e28",
    "routeNumber": "E28",
    "nameEn": "Esplanade ⇌ Bakshi",
    "nameBn": "Esplanade ⇌ Bakshi",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Bagnan, Mankur More",
    "viaBn": "Santragachi, Bagnan, Mankur More",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Bagnan",
      "Mankur More",
      "Bakshi"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bakshi",
        "directionNameBn": "Bakshiর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-bakshi",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-mankur-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bakshi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            87.971,
            22.467
          ],
          [
            87.976,
            22.472
          ],
          [
            87.981,
            22.477
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-bakshi",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-bakshi",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-mankur-more",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            87.981,
            22.477
          ],
          [
            87.976,
            22.472
          ],
          [
            87.971,
            22.467
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e29",
    "routeNumber": "E29",
    "nameEn": "Esplanade ⇌ Fatikgachi",
    "nameBn": "Esplanade ⇌ Fatikgachi",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Exide",
    "viaBn": "এক্সাইড",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Exide",
      "Fatikgachi"
    ],
    "stopCount": 3,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Fatikgachi",
        "directionNameBn": "Fatikgachiর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-fatikgachi",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-fatikgachi",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3528,
            22.5448
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-fatikgachi",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-fatikgachi",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3528,
            22.5448
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e31",
    "routeNumber": "E31",
    "nameEn": "Esplanade ⇌ Garh Bhawanipur",
    "nameBn": "Esplanade ⇌ Garh Bhawanipur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Alampur, Ranihati, Kalatala",
    "viaBn": "Santragachi, Alampur, Ranihati, Kalatala",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Alampur",
      "Ranihati",
      "Kalatala",
      "Amta",
      "Sehagori",
      "Shaoraberia More",
      "Garh Bhawanipur"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Garh Bhawanipur",
        "directionNameBn": "Garh Bhawanipurর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-garh-bhawanipur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-alampur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kalatala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-amta",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sehagori",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-shaoraberia-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-garh-bhawanipur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            88.286,
            22.586
          ],
          [
            88.165,
            22.548
          ],
          [
            88.375,
            22.608
          ],
          [
            88.015,
            22.585
          ],
          [
            88.02,
            22.59
          ],
          [
            88.025,
            22.595
          ],
          [
            88.03,
            22.6
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-garh-bhawanipur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-garh-bhawanipur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-shaoraberia-more",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sehagori",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-amta",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kalatala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-alampur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.03,
            22.6
          ],
          [
            88.025,
            22.595
          ],
          [
            88.02,
            22.59
          ],
          [
            88.015,
            22.585
          ],
          [
            88.375,
            22.608
          ],
          [
            88.165,
            22.548
          ],
          [
            88.286,
            22.586
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e311",
    "routeNumber": "E31/1",
    "nameEn": "Howrah Station ⇌ Jhikira",
    "nameBn": "হাওড়া স্টেশন ⇌ Jhikira",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Foreshore Road, Avani Mall, Ranihati, Kalatala",
    "viaBn": "Foreshore Road, Avani Mall, Ranihati, Kalatala",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Station",
      "Foreshore Road",
      "Avani Mall",
      "Ranihati",
      "Kalatala",
      "Jhikira"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jhikira",
        "directionNameBn": "Jhikiraর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-jhikira",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-foreshore-road",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-avani-mall",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kalatala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-jhikira",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.335,
            22.571
          ],
          [
            88.328,
            22.568
          ],
          [
            88.165,
            22.548
          ],
          [
            88.375,
            22.608
          ],
          [
            88.38,
            22.613
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-jhikira",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-jhikira",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kalatala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-avani-mall",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-foreshore-road",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.38,
            22.613
          ],
          [
            88.375,
            22.608
          ],
          [
            88.165,
            22.548
          ],
          [
            88.328,
            22.568
          ],
          [
            88.335,
            22.571
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e32-2",
    "routeNumber": "E32",
    "nameEn": "Nilgunj Depot ⇌ Howrah Station",
    "nameBn": "নীলগঞ্জ ⇌ হাওড়া স্টেশন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Lalkuthi, Titagarh PS, Kamarhati, Sinthi",
    "viaBn": "Lalkuthi, Titagarh PS, Kamarhati, সাঁথি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Nilgunj Depot",
      "Lalkuthi",
      "Barrackpore Station",
      "Chiria More",
      "Titagarh PS",
      "Sodepur",
      "Panihati",
      "Kamarhati",
      "Dunlop",
      "Tobin Road",
      "Sinthi",
      "Shyambazar",
      "Sovabazar",
      "Girish Park",
      "MG. Road",
      "Burrabazar",
      "Howrah Station"
    ],
    "stopCount": 17,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-nilgunj-depot",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-nilgunj-depot",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-lalkuthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-barrackpore-station",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-chiria-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-titagarh-ps",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sodepur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-panihati",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-tobin-road",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-sovabazar",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          }
        ],
        "pathCoordinates": [
          [
            88.395,
            22.782
          ],
          [
            88.36,
            22.775
          ],
          [
            88.365,
            22.765
          ],
          [
            88.378,
            22.621
          ],
          [
            88.375,
            22.738
          ],
          [
            88.383,
            22.698
          ],
          [
            88.379,
            22.688
          ],
          [
            88.375,
            22.671
          ],
          [
            88.377,
            22.653
          ],
          [
            88.38,
            22.639
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.368,
            22.596
          ],
          [
            88.363,
            22.588
          ],
          [
            88.368,
            22.593
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Nilgunj Depot",
        "directionNameBn": "নীলগঞ্জর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-nilgunj-depot",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sovabazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sinthi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-tobin-road",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kamarhati",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-panihati",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-sodepur",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-titagarh-ps",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-chiria-more",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-barrackpore-station",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-lalkuthi",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-nilgunj-depot",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.368,
            22.593
          ],
          [
            88.363,
            22.588
          ],
          [
            88.368,
            22.596
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3795,
            22.631
          ],
          [
            88.38,
            22.639
          ],
          [
            88.377,
            22.653
          ],
          [
            88.375,
            22.671
          ],
          [
            88.379,
            22.688
          ],
          [
            88.383,
            22.698
          ],
          [
            88.375,
            22.738
          ],
          [
            88.378,
            22.621
          ],
          [
            88.365,
            22.765
          ],
          [
            88.36,
            22.775
          ],
          [
            88.395,
            22.782
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e35",
    "routeNumber": "E35",
    "nameEn": "Esplanade ⇌ Jayrambati",
    "nameBn": "Esplanade ⇌ Jayrambati",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Shyambazar, Dankuni, Sheakhala",
    "viaBn": "Shyambazar, Dankuni, শিয়াখালা",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Shyambazar",
      "Dankuni",
      "Sheakhala",
      "Jayrambati"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jayrambati",
        "directionNameBn": "Jayrambatiর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-jayrambati",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-jayrambati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.291,
            22.678
          ],
          [
            88.185,
            22.735
          ],
          [
            87.615,
            22.925
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-jayrambati",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-jayrambati",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            87.615,
            22.925
          ],
          [
            88.185,
            22.735
          ],
          [
            88.291,
            22.678
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e36",
    "routeNumber": "E36",
    "nameEn": "Habra ⇌ Santragachi",
    "nameBn": "Habra ⇌ Santragachi",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ashoknagar, Duttapukur, Baguiati, Ultadanga",
    "viaBn": "অশোকনগর, দত্তপুকুর, বাগুইআটি, Ultadanga",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Ashoknagar",
      "Guma",
      "Bira",
      "Duttapukur",
      "Barasat",
      "Airport",
      "Baguiati",
      "Kestopur",
      "Laketown",
      "Ultadanga",
      "Maniktala",
      "Girish Park",
      "Esplanade",
      "PTS",
      "Carry Road",
      "Santragachi"
    ],
    "stopCount": 17,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Santragachi",
        "directionNameBn": "Santragachiর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-santragachi",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-guma",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bira",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-barasat",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-airport",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-laketown",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-maniktala",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-pts",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.598,
            22.808
          ],
          [
            88.575,
            22.795
          ],
          [
            88.541,
            22.775
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.431,
            22.627
          ],
          [
            88.423,
            22.618
          ],
          [
            88.401,
            22.602
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.375,
            22.608
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.305,
            22.582
          ],
          [
            88.281,
            22.581
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-santragachi",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-santragachi",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-pts",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-maniktala",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-laketown",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-airport",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-barasat",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-bira",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-guma",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-habra",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          }
        ],
        "pathCoordinates": [
          [
            88.281,
            22.581
          ],
          [
            88.305,
            22.582
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.363,
            22.588
          ],
          [
            88.375,
            22.608
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.401,
            22.602
          ],
          [
            88.423,
            22.618
          ],
          [
            88.431,
            22.627
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.541,
            22.775
          ],
          [
            88.575,
            22.795
          ],
          [
            88.598,
            22.808
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e36spl",
    "routeNumber": "E36Spl",
    "nameEn": "Barasat ⇌ Santragachi",
    "nameBn": "Barasat ⇌ Santragachi",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Madhyamgram, Baguiati, Ultadanga, Esplanade",
    "viaBn": "Madhyamgram, বাগুইআটি, Ultadanga, Esplanade",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Madhyamgram",
      "Birati",
      "Airport",
      "Baguiati",
      "Kestopur",
      "Laketown",
      "Ultadanga",
      "Maniktala",
      "Girish Park",
      "Esplanade",
      "PTS",
      "Carry Road",
      "Belepole",
      "Santragachi"
    ],
    "stopCount": 15,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Santragachi",
        "directionNameBn": "Santragachiর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-santragachi",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-birati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-laketown",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-maniktala",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-pts",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-belepole",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.435,
            22.668
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.431,
            22.627
          ],
          [
            88.423,
            22.618
          ],
          [
            88.401,
            22.602
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.375,
            22.608
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.305,
            22.582
          ],
          [
            88.295,
            22.581
          ],
          [
            88.281,
            22.581
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-santragachi",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-santragachi",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-belepole",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-carry-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-pts",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-maniktala",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-laketown",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kestopur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-airport",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-birati",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-barasat",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          }
        ],
        "pathCoordinates": [
          [
            88.281,
            22.581
          ],
          [
            88.295,
            22.581
          ],
          [
            88.305,
            22.582
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.363,
            22.588
          ],
          [
            88.375,
            22.608
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.401,
            22.602
          ],
          [
            88.423,
            22.618
          ],
          [
            88.431,
            22.627
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.435,
            22.668
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e37a",
    "routeNumber": "E37A",
    "nameEn": "Barasat ⇌ Esplanade",
    "nameBn": "Barasat ⇌ Esplanade",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Madhyamgram, Birati, Airport, Baguiati",
    "viaBn": "Madhyamgram, বিরাটি, Airport, বাগুইআটি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Madhyamgram",
      "Birati",
      "Airport",
      "Baguiati",
      "Laketown",
      "Maniktala",
      "Girish Park",
      "Esplanade"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-birati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-laketown",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-maniktala",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.435,
            22.668
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.431,
            22.627
          ],
          [
            88.401,
            22.602
          ],
          [
            88.375,
            22.608
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-maniktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-laketown",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-baguiati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-birati",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-barasat",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.363,
            22.588
          ],
          [
            88.375,
            22.608
          ],
          [
            88.401,
            22.602
          ],
          [
            88.431,
            22.627
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.435,
            22.668
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e38",
    "routeNumber": "E38",
    "nameEn": "Esplanade ⇌ Mayapur",
    "nameBn": "Esplanade ⇌ মায়াপুর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sealdah Station, Kankurgachi, Jagulia, Krishnanagar",
    "viaBn": "শিয়ালদহ স্টেশন, Kankurgachi, Jagulia, কৃষ্ণনগর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Sealdah Station",
      "Manicktala",
      "Kankurgachi",
      "Airport Gate",
      "Jagulia",
      "Ranaghat",
      "Krishnanagar",
      "Bamanpukur",
      "Mayapur"
    ],
    "stopCount": 10,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Mayapur",
        "directionNameBn": "মায়াপুরর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-mayapur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport-gate",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-jagulia",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ranaghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-krishnanagar",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-bamanpukur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-mayapur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.581,
            23.181
          ],
          [
            88.502,
            23.401
          ],
          [
            88.507,
            23.406
          ],
          [
            88.391,
            23.424
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-mayapur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-mayapur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bamanpukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-krishnanagar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ranaghat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-jagulia",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport-gate",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-manicktala",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-sealdah-station",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.391,
            23.424
          ],
          [
            88.507,
            23.406
          ],
          [
            88.502,
            23.401
          ],
          [
            88.581,
            23.181
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.3846,
            22.5768
          ],
          [
            88.3735,
            22.5875
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e4",
    "routeNumber": "E-4",
    "nameEn": "Parnasree ⇌ Howrah",
    "nameBn": "পর্ণশ্রী ⇌ Howrah",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Majherhat, Mominpore, Hastings, Fort William",
    "viaBn": "মাঝেরহাট, Mominpore, Hastings, Fort William",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Parnasree",
      "Majherhat",
      "Mominpore",
      "Hastings",
      "Fort William",
      "Curzon Park",
      "Dalhousie",
      "Howrah bus stand",
      "Howrah"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-parnasree",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-parnasree",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-majherhat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mominpore",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hastings",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-fort-william",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-curzon-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-howrah-bus-stand",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-howrah",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.305,
            22.502
          ],
          [
            88.32,
            22.518
          ],
          [
            88.321,
            22.527
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.338,
            22.554
          ],
          [
            88.351,
            22.565
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Parnasree",
        "directionNameBn": "পর্ণশ্রীর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-parnasree",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-bus-stand",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-curzon-park",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-fort-william",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-hastings",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-mominpore",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-majherhat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-parnasree",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.351,
            22.565
          ],
          [
            88.338,
            22.554
          ],
          [
            88.3312,
            22.5458
          ],
          [
            88.321,
            22.527
          ],
          [
            88.32,
            22.518
          ],
          [
            88.305,
            22.502
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e40",
    "routeNumber": "E40",
    "nameEn": "Esplanade ⇌ Digha",
    "nameBn": "Esplanade ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Bagnan, Kolaghat, Kanthi",
    "viaBn": "Santragachi, Bagnan, কোলাঘাট, কাঁথি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-digha",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e401",
    "routeNumber": "E40/1",
    "nameEn": "Esplanade ⇌ Digha",
    "nameBn": "Esplanade ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Kolaghat, Kanthi",
    "viaBn": "Santragachi, কোলাঘাট, কাঁথি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-digha",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e41",
    "routeNumber": "E41",
    "nameEn": "Habra ⇌ Asansol",
    "nameBn": "Habra ⇌ আসানসোল",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ashoknagar, Airport, Belgharia Expressway, Dunlop",
    "viaBn": "অশোকনগর, Airport, Belgharia Expressway, Dunlop",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Ashoknagar",
      "Airport",
      "Belgharia Expressway",
      "Dunlop",
      "Raniganj",
      "Asansol"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Asansol",
        "directionNameBn": "আসানসোলর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-asansol",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-raniganj",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-asansol",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            88.377,
            22.653
          ],
          [
            87.135,
            23.625
          ],
          [
            86.981,
            23.688
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-asansol",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-asansol",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-raniganj",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-habra",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            86.981,
            23.688
          ],
          [
            87.135,
            23.625
          ],
          [
            88.377,
            22.653
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e43a",
    "routeNumber": "E43A",
    "nameEn": "Howrah ⇌ Bhebia",
    "nameBn": "Howrah ⇌ Bhebia",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Dalhousie, Topsia More, Ghatakpukur, Minakhan",
    "viaBn": "ডালহৌসি, Topsia More, Ghatakpukur, Minakhan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah",
      "Dalhousie",
      "Esplanade",
      "Park Circus",
      "Topsia More",
      "Science City",
      "Bantala",
      "Ghatakpukur",
      "Chandipur",
      "Bamanpukur",
      "Minakhan",
      "Malancha",
      "Chaital",
      "Bhebia"
    ],
    "stopCount": 14,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bhebia",
        "directionNameBn": "Bhebiaর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-bhebia",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-topsia-more",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-science-city",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-bantala",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-chandipur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-bamanpukur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-malancha",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-chaital",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-bhebia",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.368,
            22.544
          ],
          [
            88.385,
            22.541
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.445,
            22.521
          ],
          [
            88.585,
            22.485
          ],
          [
            88.59,
            22.49
          ],
          [
            88.595,
            22.495
          ],
          [
            88.705,
            22.492
          ],
          [
            88.745,
            22.482
          ],
          [
            88.75,
            22.487
          ],
          [
            88.755,
            22.492
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-bhebia",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-bhebia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-chaital",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-malancha",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-bamanpukur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chandipur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bantala",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-science-city",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-topsia-more",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-howrah",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.755,
            22.492
          ],
          [
            88.75,
            22.487
          ],
          [
            88.745,
            22.482
          ],
          [
            88.705,
            22.492
          ],
          [
            88.595,
            22.495
          ],
          [
            88.59,
            22.49
          ],
          [
            88.585,
            22.485
          ],
          [
            88.445,
            22.521
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.385,
            22.541
          ],
          [
            88.368,
            22.544
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e44",
    "routeNumber": "E44",
    "nameEn": "Esplanade ⇌ Radhanagar",
    "nameBn": "Esplanade ⇌ Radhanagar",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Santragachi, Dankuni, Sheakhala, Champadanga",
    "viaBn": "Santragachi, Dankuni, শিয়াখালা, Champadanga",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Santragachi",
      "Dankuni",
      "Sheakhala",
      "Champadanga",
      "Gourangapur",
      "Radhanagar"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Radhanagar",
        "directionNameBn": "Radhanagarর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-radhanagar",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-champadanga",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-gourangapur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-radhanagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.281,
            22.581
          ],
          [
            88.291,
            22.678
          ],
          [
            88.185,
            22.735
          ],
          [
            88.015,
            22.825
          ],
          [
            88.02,
            22.83
          ],
          [
            87.945,
            22.845
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-radhanagar",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-radhanagar",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-gourangapur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-champadanga",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            87.945,
            22.845
          ],
          [
            88.02,
            22.83
          ],
          [
            88.015,
            22.825
          ],
          [
            88.185,
            22.735
          ],
          [
            88.291,
            22.678
          ],
          [
            88.281,
            22.581
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e45",
    "routeNumber": "E45",
    "nameEn": "Joka ⇌ Digha",
    "nameBn": "Joka ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Tollygunge, Exide, Ranihati",
    "viaBn": "Tollygunge, এক্সাইড, Ranihati",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Joka",
      "Tollygunge",
      "Exide",
      "Ranihati",
      "Digha"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-joka",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-joka",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-exide",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-digha",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.298,
            22.441
          ],
          [
            88.303,
            22.446
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.165,
            22.548
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Joka",
        "directionNameBn": "Jokaর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-joka",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-exide",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-joka",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            88.165,
            22.548
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.303,
            22.446
          ],
          [
            88.298,
            22.441
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e46",
    "routeNumber": "E46",
    "nameEn": "Karunamoyee ⇌ Digha",
    "nameBn": "Karunamoyee ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga, VIP Road, Dunlop, Ranihati",
    "viaBn": "Ultadanga, VIP Road, Dunlop, Ranihati",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Karunamoyee",
      "Ultadanga",
      "VIP Road",
      "Dunlop",
      "Ranihati",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-karunamoyee",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-karunamoyee",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-vip-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-digha",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.4187,
            22.5867
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3938,
            22.5948
          ],
          [
            88.377,
            22.653
          ],
          [
            88.165,
            22.548
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Karunamoyee",
        "directionNameBn": "Karunamoyeeর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-karunamoyee",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-vip-road",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-karunamoyee",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.165,
            22.548
          ],
          [
            88.377,
            22.653
          ],
          [
            88.3938,
            22.5948
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4187,
            22.5867
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e47",
    "routeNumber": "E47",
    "nameEn": "Howrah Station ⇌ Gaighata",
    "nameBn": "হাওড়া স্টেশন ⇌ গাইঘাটা",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Burrabazar, Girish Park, Duttapukur, Habra Station",
    "viaBn": "Burrabazar, গিরিশ পার্ক, দত্তপুকুর, হাবড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Station",
      "Burrabazar",
      "MG. Road",
      "Girish Park",
      "Ultadanga",
      "Duttapukur",
      "Ashoknagar",
      "Habra Station",
      "Joygacchi More",
      "Jaleswar",
      "Gaighata"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Gaighata",
        "directionNameBn": "গাইঘাটার দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-gaighata",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-habra-station",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-joygacchi-more",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-jaleswar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-gaighata",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.36,
            22.589
          ],
          [
            88.363,
            22.588
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.541,
            22.775
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ],
          [
            88.636,
            22.847
          ],
          [
            88.641,
            22.852
          ],
          [
            88.725,
            22.925
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-gaighata",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-gaighata",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jaleswar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-joygacchi-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-habra-station",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-girish-park",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.725,
            22.925
          ],
          [
            88.641,
            22.852
          ],
          [
            88.636,
            22.847
          ],
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.541,
            22.775
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.363,
            22.588
          ],
          [
            88.36,
            22.589
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e51",
    "routeNumber": "E51",
    "nameEn": "Esplanade ⇌ Bishnupur",
    "nameBn": "Esplanade ⇌ বিষ্ণুপুর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Central Avenue, Shyambazar, Dunlop, Sheakhala",
    "viaBn": "Central Avenue, Shyambazar, Dunlop, শিয়াখালা",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Central Avenue",
      "Shyambazar",
      "Dunlop",
      "Sheakhala",
      "Arambagh",
      "Bishnupur"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bishnupur",
        "directionNameBn": "বিষ্ণুপুরর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-bishnupur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-arambagh",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-bishnupur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.377,
            22.653
          ],
          [
            88.185,
            22.735
          ],
          [
            87.781,
            22.883
          ],
          [
            87.32,
            23.075
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-bishnupur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-bishnupur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-arambagh",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            87.32,
            23.075
          ],
          [
            87.781,
            22.883
          ],
          [
            88.185,
            22.735
          ],
          [
            88.377,
            22.653
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e51a",
    "routeNumber": "E51A",
    "nameEn": "Habra ⇌ Bishnupur",
    "nameBn": "Habra ⇌ বিষ্ণুপুর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Airport, Belgharia Expressway, Dunlop, Dankuni",
    "viaBn": "Airport, Belgharia Expressway, Dunlop, Dankuni",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Airport",
      "Belgharia Expressway",
      "Dunlop",
      "Dankuni",
      "Arambagh",
      "Bishnupur"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bishnupur",
        "directionNameBn": "বিষ্ণুপুরর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-bishnupur",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-arambagh",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-bishnupur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            88.377,
            22.653
          ],
          [
            88.291,
            22.678
          ],
          [
            87.781,
            22.883
          ],
          [
            87.32,
            23.075
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-bishnupur",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-bishnupur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-arambagh",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-habra",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            87.32,
            23.075
          ],
          [
            87.781,
            22.883
          ],
          [
            88.291,
            22.678
          ],
          [
            88.377,
            22.653
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e55",
    "routeNumber": "E55",
    "nameEn": "Barasat ⇌ Digha",
    "nameBn": "Barasat ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Madhyamgram, Nimta, Ranihati, Kolaghat",
    "viaBn": "Madhyamgram, Nimta, Ranihati, কোলাঘাট",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Madhyamgram",
      "Birati",
      "Nimta",
      "Dunlop",
      "Ranihati",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 10,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-birati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-nimta",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-digha",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.435,
            22.668
          ],
          [
            88.405,
            22.662
          ],
          [
            88.377,
            22.653
          ],
          [
            88.165,
            22.548
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-nimta",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-birati",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-barasat",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.165,
            22.548
          ],
          [
            88.377,
            22.653
          ],
          [
            88.405,
            22.662
          ],
          [
            88.435,
            22.668
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e56",
    "routeNumber": "E56",
    "nameEn": "Baduria ⇌ Digha",
    "nameBn": "Baduria ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jadurhati, Deganga, Barasat Champadali, Airport",
    "viaBn": "Jadurhati, দেগঙ্গা, বারাসাত চম্পাদালী, Airport",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Baduria",
      "Jadurhati",
      "Berachampa",
      "Deganga",
      "Kadambagachi",
      "Barasat Champadali",
      "Madhyamgram Chowmatha",
      "Airport",
      "Belgharia Expressway",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 12,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-baduria",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-baduria",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadurhati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-deganga",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-kadambagachi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-barasat-champadali",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-madhyamgram-chowmatha",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-airport",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-digha",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.795,
            22.742
          ],
          [
            88.8,
            22.747
          ],
          [
            88.681,
            22.695
          ],
          [
            88.615,
            22.712
          ],
          [
            88.525,
            22.735
          ],
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Baduria",
        "directionNameBn": "Baduriaর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-baduria",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-madhyamgram-chowmatha",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-barasat-champadali",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kadambagachi",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-deganga",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-berachampa",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-jadurhati",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-baduria",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ],
          [
            88.525,
            22.735
          ],
          [
            88.615,
            22.712
          ],
          [
            88.681,
            22.695
          ],
          [
            88.8,
            22.747
          ],
          [
            88.795,
            22.742
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e57",
    "routeNumber": "E57",
    "nameEn": "Esplanade ⇌ Karimpur",
    "nameBn": "Esplanade ⇌ করিমপুর",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ultadanga, Amdanga, Chakdah, Phulia",
    "viaBn": "Ultadanga, Amdanga, Chakdah, Phulia",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Ultadanga",
      "Airport",
      "Amdanga",
      "Awalsiddhi",
      "Chakdah",
      "Ranaghat",
      "Phulia",
      "Shantipur",
      "Krishnanagar",
      "Karimpur"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Karimpur",
        "directionNameBn": "করিমপুরর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-karimpur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-amdanga",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-awalsiddhi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chakdah",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ranaghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-phulia",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-shantipur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-krishnanagar",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-karimpur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.4567,
            22.662
          ],
          [
            88.4617,
            22.667
          ],
          [
            88.581,
            23.181
          ],
          [
            88.495,
            23.215
          ],
          [
            88.435,
            23.255
          ],
          [
            88.502,
            23.401
          ],
          [
            88.625,
            23.975
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-karimpur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-karimpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-krishnanagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-shantipur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-phulia",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ranaghat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-chakdah",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-awalsiddhi",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-amdanga",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-airport",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.625,
            23.975
          ],
          [
            88.502,
            23.401
          ],
          [
            88.435,
            23.255
          ],
          [
            88.495,
            23.215
          ],
          [
            88.581,
            23.181
          ],
          [
            88.4617,
            22.667
          ],
          [
            88.4567,
            22.662
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e59",
    "routeNumber": "E59",
    "nameEn": "Naihati ⇌ Digha",
    "nameBn": "Naihati ⇌ Digha",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Bhatpara, Palta, Sodepur, Dunlop",
    "viaBn": "Bhatpara, Palta, Sodepur, Dunlop",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Naihati",
      "Bhatpara",
      "Palta",
      "Sodepur",
      "Dunlop",
      "Bagnan",
      "Kolaghat",
      "Kanthi",
      "Digha"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Digha",
        "directionNameBn": "Dighaর দিকে",
        "originStopId": "stop-naihati",
        "destinationStopId": "stop-digha",
        "stops": [
          {
            "stopId": "stop-naihati",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bhatpara",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-palta",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sodepur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-digha",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.425,
            22.895
          ],
          [
            88.415,
            22.871
          ],
          [
            88.385,
            22.788
          ],
          [
            88.383,
            22.698
          ],
          [
            88.377,
            22.653
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.751,
            21.778
          ],
          [
            87.521,
            21.626
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Naihati",
        "directionNameBn": "Naihatiর দিকে",
        "originStopId": "stop-digha",
        "destinationStopId": "stop-naihati",
        "stops": [
          {
            "stopId": "stop-digha",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kanthi",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sodepur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-palta",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bhatpara",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-naihati",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            87.521,
            21.626
          ],
          [
            87.751,
            21.778
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.377,
            22.653
          ],
          [
            88.383,
            22.698
          ],
          [
            88.385,
            22.788
          ],
          [
            88.415,
            22.871
          ],
          [
            88.425,
            22.895
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e6",
    "routeNumber": "E6",
    "nameEn": "Esplanade ⇌ Amta",
    "nameBn": "Esplanade ⇌ Amta",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Exide, Ranihati",
    "viaBn": "এক্সাইড, Ranihati",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Exide",
      "Ranihati",
      "Amta"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Amta",
        "directionNameBn": "Amtaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-amta",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-amta",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.165,
            22.548
          ],
          [
            88.015,
            22.585
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-amta",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-amta",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-exide",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.015,
            22.585
          ],
          [
            88.165,
            22.548
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e61",
    "routeNumber": "E61",
    "nameEn": "Habra ⇌ Bakkhali",
    "nameBn": "Habra ⇌ বকখালি",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ashoknagar, Science City, Taratala, Sarisha",
    "viaBn": "অশোকনগর, সায়েন্স সিটি, Taratala, সরিষা",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Ashoknagar",
      "Duttapukur",
      "Barasat",
      "Airport",
      "VIP Road",
      "Ultadanga",
      "Science City",
      "Ruby Hospital",
      "Ballygunge Station",
      "Gariahat",
      "Rashbehari",
      "New Alipore",
      "Taratala",
      "Behala",
      "Thakurpukur",
      "Joka",
      "Amtala",
      "Shirakole",
      "Sarisha",
      "Diamond Harbour",
      "Kulpi",
      "Nischintapur",
      "Kakdwip",
      "Namkhana",
      "Frasergunj",
      "Bakkhali"
    ],
    "stopCount": 27,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bakkhali",
        "directionNameBn": "বকখালির দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-bakkhali",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-barasat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-vip-road",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-science-city",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-ruby-hospital",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-rashbehari",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-new-alipore",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-taratala",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-behala",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-thakurpukur",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-joka",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-amtala",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-shirakole",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-sarisha",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-diamond-harbour",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-kulpi",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-nischintapur",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-kakdwip",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          },
          {
            "stopId": "stop-namkhana",
            "sequence": 25,
            "distanceFromStartKm": 43.2,
            "scheduledMinutesFromStart": 144
          },
          {
            "stopId": "stop-frasergunj",
            "sequence": 26,
            "distanceFromStartKm": 45.0,
            "scheduledMinutesFromStart": 150
          },
          {
            "stopId": "stop-bakkhali",
            "sequence": 27,
            "distanceFromStartKm": 46.8,
            "scheduledMinutesFromStart": 156
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.541,
            22.775
          ],
          [
            88.481,
            22.723
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.398,
            22.513
          ],
          [
            88.368,
            22.525
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.349,
            22.52
          ],
          [
            88.331,
            22.512
          ],
          [
            88.315,
            22.515
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.298,
            22.441
          ],
          [
            88.255,
            22.385
          ],
          [
            88.225,
            22.315
          ],
          [
            88.205,
            22.265
          ],
          [
            88.191,
            22.191
          ],
          [
            88.235,
            22.082
          ],
          [
            88.215,
            21.982
          ],
          [
            88.185,
            21.875
          ],
          [
            88.235,
            21.765
          ],
          [
            88.252,
            21.585
          ],
          [
            88.256,
            21.564
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-bakkhali",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-bakkhali",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-frasergunj",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-namkhana",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-kakdwip",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-nischintapur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kulpi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-diamond-harbour",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-sarisha",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-shirakole",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-amtala",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-joka",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-thakurpukur",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-behala",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-taratala",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-new-alipore",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          },
          {
            "stopId": "stop-rashbehari",
            "sequence": 16,
            "distanceFromStartKm": 27.0,
            "scheduledMinutesFromStart": 90
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 17,
            "distanceFromStartKm": 28.8,
            "scheduledMinutesFromStart": 96
          },
          {
            "stopId": "stop-ballygunge-station",
            "sequence": 18,
            "distanceFromStartKm": 30.6,
            "scheduledMinutesFromStart": 102
          },
          {
            "stopId": "stop-ruby-hospital",
            "sequence": 19,
            "distanceFromStartKm": 32.4,
            "scheduledMinutesFromStart": 108
          },
          {
            "stopId": "stop-science-city",
            "sequence": 20,
            "distanceFromStartKm": 34.2,
            "scheduledMinutesFromStart": 114
          },
          {
            "stopId": "stop-ultadanga",
            "sequence": 21,
            "distanceFromStartKm": 36.0,
            "scheduledMinutesFromStart": 120
          },
          {
            "stopId": "stop-vip-road",
            "sequence": 22,
            "distanceFromStartKm": 37.8,
            "scheduledMinutesFromStart": 126
          },
          {
            "stopId": "stop-airport",
            "sequence": 23,
            "distanceFromStartKm": 39.6,
            "scheduledMinutesFromStart": 132
          },
          {
            "stopId": "stop-barasat",
            "sequence": 24,
            "distanceFromStartKm": 41.4,
            "scheduledMinutesFromStart": 138
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 25,
            "distanceFromStartKm": 43.2,
            "scheduledMinutesFromStart": 144
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 26,
            "distanceFromStartKm": 45.0,
            "scheduledMinutesFromStart": 150
          },
          {
            "stopId": "stop-habra",
            "sequence": 27,
            "distanceFromStartKm": 46.8,
            "scheduledMinutesFromStart": 156
          }
        ],
        "pathCoordinates": [
          [
            88.256,
            21.564
          ],
          [
            88.252,
            21.585
          ],
          [
            88.235,
            21.765
          ],
          [
            88.185,
            21.875
          ],
          [
            88.215,
            21.982
          ],
          [
            88.235,
            22.082
          ],
          [
            88.191,
            22.191
          ],
          [
            88.205,
            22.265
          ],
          [
            88.225,
            22.315
          ],
          [
            88.255,
            22.385
          ],
          [
            88.298,
            22.441
          ],
          [
            88.3075,
            22.465
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.315,
            22.515
          ],
          [
            88.331,
            22.512
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.368,
            22.525
          ],
          [
            88.398,
            22.513
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.3888,
            22.5898
          ],
          [
            88.4517,
            22.657
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.481,
            22.723
          ],
          [
            88.541,
            22.775
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e62",
    "routeNumber": "E62",
    "nameEn": "Esplanade ⇌ Sitalia",
    "nameBn": "Esplanade ⇌ Sitalia",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sealdah, Science City, Minakhan, Malancha",
    "viaBn": "Sealdah, সায়েন্স সিটি, Minakhan, Malancha",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Sealdah",
      "Science City",
      "Minakhan",
      "Malancha",
      "Hasnabad Station",
      "Sitalia"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Sitalia",
        "directionNameBn": "Sitaliaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-sitalia",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-science-city",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-malancha",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-hasnabad-station",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sitalia",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.705,
            22.492
          ],
          [
            88.745,
            22.482
          ],
          [
            88.915,
            22.581
          ],
          [
            88.92,
            22.586
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-sitalia",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-sitalia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hasnabad-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-malancha",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-science-city",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.92,
            22.586
          ],
          [
            88.915,
            22.581
          ],
          [
            88.745,
            22.482
          ],
          [
            88.705,
            22.492
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e66",
    "routeNumber": "E66",
    "nameEn": "Habra ⇌ Rampurhat",
    "nameBn": "Habra ⇌ রামপুরহাট",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Airport, Belgharia Expressway, Dunlop, Budhigram",
    "viaBn": "Airport, Belgharia Expressway, Dunlop, Budhigram",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Airport",
      "Belgharia Expressway",
      "Dunlop",
      "Budhigram",
      "Rampurhat"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Rampurhat",
        "directionNameBn": "রামপুরহাটর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-rampurhat",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-airport",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-budhigram",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rampurhat",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            88.377,
            22.653
          ],
          [
            88.382,
            22.658
          ],
          [
            87.785,
            24.165
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-rampurhat",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-rampurhat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-budhigram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-airport",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-habra",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            87.785,
            24.165
          ],
          [
            88.382,
            22.658
          ],
          [
            88.377,
            22.653
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e67",
    "routeNumber": "E67",
    "nameEn": "Habra ⇌ Purulia",
    "nameBn": "Habra ⇌ পুরুলিয়া",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Duttapukur, Belgharia Expressway, Dunlop, Durgapur Station",
    "viaBn": "দত্তপুকুর, Belgharia Expressway, Dunlop, দুর্গাপুর",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Duttapukur",
      "Belgharia Expressway",
      "Dunlop",
      "Durgapur Station",
      "Kamalpur",
      "Purulia"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Purulia",
        "directionNameBn": "পুরুলিয়ার দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-purulia",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-durgapur-station",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-kamalpur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-purulia",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.541,
            22.775
          ],
          [
            88.415,
            22.665
          ],
          [
            88.377,
            22.653
          ],
          [
            87.311,
            23.52
          ],
          [
            87.316,
            23.525
          ],
          [
            86.365,
            23.335
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-purulia",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-purulia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-kamalpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-durgapur-station",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-duttapukur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-habra",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            86.365,
            23.335
          ],
          [
            87.316,
            23.525
          ],
          [
            87.311,
            23.52
          ],
          [
            88.377,
            22.653
          ],
          [
            88.415,
            22.665
          ],
          [
            88.541,
            22.775
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e68",
    "routeNumber": "E68",
    "nameEn": "Habra ⇌ Haldia",
    "nameBn": "Habra ⇌ হলদিয়া",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ashoknagar, Dunlop, Bagnan, Chaitanyapur",
    "viaBn": "অশোকনগর, Dunlop, Bagnan, Chaitanyapur",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Ashoknagar",
      "Airport",
      "Belgharia Expressway",
      "Dunlop",
      "Ranihati",
      "Uluberia",
      "Bagnan",
      "Kolaghat",
      "Brajalalchak",
      "Chaitanyapur",
      "Sutahata",
      "Durgachak",
      "Haldia Township",
      "Haldia"
    ],
    "stopCount": 15,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Haldia",
        "directionNameBn": "হলদিয়ার দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-haldia",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-airport",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-uluberia",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-brajalalchak",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-chaitanyapur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-sutahata",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-durgachak",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-haldia-township",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-haldia",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.62,
            22.825
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.415,
            22.665
          ],
          [
            88.377,
            22.653
          ],
          [
            88.165,
            22.548
          ],
          [
            88.115,
            22.475
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            88.135,
            22.235
          ],
          [
            88.125,
            22.185
          ],
          [
            88.115,
            22.145
          ],
          [
            88.095,
            22.115
          ],
          [
            88.065,
            22.062
          ],
          [
            88.065,
            22.062
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-haldia",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-haldia",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-haldia-township",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-durgachak",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sutahata",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-chaitanyapur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-brajalalchak",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-uluberia",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-belgharia-expressway",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-airport",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-ashoknagar",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-habra",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          }
        ],
        "pathCoordinates": [
          [
            88.065,
            22.062
          ],
          [
            88.065,
            22.062
          ],
          [
            88.095,
            22.115
          ],
          [
            88.115,
            22.145
          ],
          [
            88.125,
            22.185
          ],
          [
            88.135,
            22.235
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.115,
            22.475
          ],
          [
            88.165,
            22.548
          ],
          [
            88.377,
            22.653
          ],
          [
            88.415,
            22.665
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.62,
            22.825
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e7",
    "routeNumber": "E7",
    "nameEn": "Esplanade ⇌ Bagnan",
    "nameBn": "Esplanade ⇌ Bagnan",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Exide, Ranihati",
    "viaBn": "এক্সাইড, Ranihati",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Exide",
      "Ranihati",
      "Bagnan"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Bagnan",
        "directionNameBn": "Bagnanর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-bagnan",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.165,
            22.548
          ],
          [
            87.971,
            22.467
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-bagnan",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-bagnan",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ranihati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-exide",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            87.971,
            22.467
          ],
          [
            88.165,
            22.548
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e70",
    "routeNumber": "E70",
    "nameEn": "Habra ⇌ Jhargram",
    "nameBn": "Habra ⇌ ঝাড়গ্রাম",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Barasat, Madhyamgram, Airport, Dunlop",
    "viaBn": "Barasat, Madhyamgram, Airport, Dunlop",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Habra",
      "Barasat",
      "Madhyamgram",
      "Airport",
      "Dunlop",
      "Bagnan",
      "Kolaghat",
      "Basantapur",
      "Jhargram"
    ],
    "stopCount": 9,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jhargram",
        "directionNameBn": "ঝাড়গ্রামর দিকে",
        "originStopId": "stop-habra",
        "destinationStopId": "stop-jhargram",
        "stops": [
          {
            "stopId": "stop-habra",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-barasat",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-basantapur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-jhargram",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            88.631,
            22.842
          ],
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.377,
            22.653
          ],
          [
            87.971,
            22.467
          ],
          [
            87.871,
            22.428
          ],
          [
            87.876,
            22.433
          ],
          [
            86.985,
            22.455
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Habra",
        "directionNameBn": "Habraর দিকে",
        "originStopId": "stop-jhargram",
        "destinationStopId": "stop-habra",
        "stops": [
          {
            "stopId": "stop-jhargram",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-basantapur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-kolaghat",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bagnan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-airport",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-barasat",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-habra",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          }
        ],
        "pathCoordinates": [
          [
            86.985,
            22.455
          ],
          [
            87.876,
            22.433
          ],
          [
            87.871,
            22.428
          ],
          [
            87.971,
            22.467
          ],
          [
            88.377,
            22.653
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ],
          [
            88.631,
            22.842
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e71",
    "routeNumber": "E71",
    "nameEn": "Esplanade ⇌ Udaynarayanpur",
    "nameBn": "Esplanade ⇌ Udaynarayanpur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Bargachia",
    "viaBn": "Bargachia",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Bargachia",
      "Udaynarayanpur"
    ],
    "stopCount": 3,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Udaynarayanpur",
        "directionNameBn": "Udaynarayanpurর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-udaynarayanpur",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-udaynarayanpur",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.155,
            22.658
          ],
          [
            87.975,
            22.721
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-udaynarayanpur",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-udaynarayanpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          }
        ],
        "pathCoordinates": [
          [
            87.975,
            22.721
          ],
          [
            88.155,
            22.658
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e72",
    "routeNumber": "E72",
    "nameEn": "Esplanade ⇌ Jangipara",
    "nameBn": "Esplanade ⇌ Jangipara",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Exide, Bargachia",
    "viaBn": "এক্সাইড, Bargachia",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Exide",
      "Bargachia",
      "Jangipara"
    ],
    "stopCount": 4,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Jangipara",
        "directionNameBn": "Jangiparaর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-jangipara",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-exide",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-jangipara",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.155,
            22.658
          ],
          [
            88.045,
            22.745
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-jangipara",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-jangipara",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bargachia",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-exide",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          }
        ],
        "pathCoordinates": [
          [
            88.045,
            22.745
          ],
          [
            88.155,
            22.658
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e73",
    "routeNumber": "E73",
    "nameEn": "Howrah Station ⇌ Basirhat",
    "nameBn": "হাওড়া স্টেশন ⇌ বসিরহাট",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Dalhousie, Park Circus, Ghatakpukur, Malancha",
    "viaBn": "ডালহৌসি, Park Circus, Ghatakpukur, Malancha",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Station",
      "Dalhousie",
      "Esplanade",
      "Park Circus",
      "Science City",
      "Ghatakpukur",
      "Minakhan",
      "Malancha",
      "Chaital",
      "Bhyabla Halt",
      "Basirhat"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Basirhat",
        "directionNameBn": "বসিরহাটর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-basirhat",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-science-city",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-malancha",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-chaital",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-bhyabla-halt",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-basirhat",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.368,
            22.544
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.585,
            22.485
          ],
          [
            88.705,
            22.492
          ],
          [
            88.745,
            22.482
          ],
          [
            88.75,
            22.487
          ],
          [
            88.755,
            22.492
          ],
          [
            88.864,
            22.661
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-basirhat",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-basirhat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bhyabla-halt",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-chaital",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-malancha",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-minakhan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-science-city",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-dalhousie",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.864,
            22.661
          ],
          [
            88.755,
            22.492
          ],
          [
            88.75,
            22.487
          ],
          [
            88.745,
            22.482
          ],
          [
            88.705,
            22.492
          ],
          [
            88.585,
            22.485
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.368,
            22.544
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e74",
    "routeNumber": "E74",
    "nameEn": "Esplanade ⇌ Basubati Darbar Sharif",
    "nameBn": "Esplanade ⇌ Basubati Darbar Sharif",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Central Avenue, Dunlop, Dankuni, Paschim Tajpur",
    "viaBn": "Central Avenue, Dunlop, Dankuni, Paschim Tajpur",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Central Avenue",
      "Shyambazar",
      "Dunlop",
      "Ballyghat",
      "Dankuni",
      "Sheakhala",
      "Paschim Tajpur",
      "Azabnagar",
      "Basubati",
      "Basubati Darbar Sharif"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Basubati Darbar Sharif",
        "directionNameBn": "Basubati Darbar Sharifর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-basubati-darbar-sharif",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ballyghat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-paschim-tajpur",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-azabnagar",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-basubati",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-basubati-darbar-sharif",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.377,
            22.653
          ],
          [
            88.348,
            22.651
          ],
          [
            88.291,
            22.678
          ],
          [
            88.185,
            22.735
          ],
          [
            88.19,
            22.74
          ],
          [
            88.195,
            22.745
          ],
          [
            88.2,
            22.75
          ],
          [
            88.205,
            22.755
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-basubati-darbar-sharif",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-basubati-darbar-sharif",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-basubati",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-azabnagar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-paschim-tajpur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sheakhala",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dankuni",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-ballyghat",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-dunlop",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-shyambazar",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-central-avenue",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.205,
            22.755
          ],
          [
            88.2,
            22.75
          ],
          [
            88.195,
            22.745
          ],
          [
            88.19,
            22.74
          ],
          [
            88.185,
            22.735
          ],
          [
            88.291,
            22.678
          ],
          [
            88.348,
            22.651
          ],
          [
            88.377,
            22.653
          ],
          [
            88.3714,
            22.6023
          ],
          [
            88.358,
            22.574
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e75",
    "routeNumber": "E75",
    "nameEn": "Barasat ⇌ Baruipur",
    "nameBn": "Barasat ⇌ Baruipur",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Madhyamgram, Airport, Narkelbagan, Chingrighata",
    "viaBn": "Madhyamgram, Airport, Narkelbagan, Chingrighata",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Madhyamgram",
      "Birati",
      "Airport",
      "Eco Park",
      "Narkelbagan",
      "Newtown",
      "Chingrighata",
      "Bantala",
      "Ghatakpukur",
      "Baruipur"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Baruipur",
        "directionNameBn": "Baruipurর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-baruipur",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-birati",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-airport",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-newtown",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-bantala",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-baruipur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.455,
            22.7
          ],
          [
            88.435,
            22.668
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.468,
            22.582
          ],
          [
            88.46,
            22.58
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.445,
            22.521
          ],
          [
            88.585,
            22.485
          ],
          [
            88.433,
            22.365
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-baruipur",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-baruipur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ghatakpukur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-bantala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-newtown",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-airport",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-birati",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-madhyamgram",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-barasat",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.433,
            22.365
          ],
          [
            88.585,
            22.485
          ],
          [
            88.445,
            22.521
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.46,
            22.58
          ],
          [
            88.468,
            22.582
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.4467,
            22.652
          ],
          [
            88.435,
            22.668
          ],
          [
            88.455,
            22.7
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-e77",
    "routeNumber": "E77",
    "nameEn": "Esplanade ⇌ Sukanta Park",
    "nameBn": "Esplanade ⇌ সুকান্ত পার্ক",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Rabindra Sadan, Belepole, Makardah, Dakshinbari",
    "viaBn": "Rabindra Sadan, Belepole, Makardah, Dakshinbari",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Esplanade",
      "Rabindra Sadan",
      "PTS",
      "Belepole",
      "Santragachi",
      "Makardah",
      "Domjur",
      "Dakshinbari",
      "Ichanagari",
      "Sukanta Park"
    ],
    "stopCount": 10,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Sukanta Park",
        "directionNameBn": "সুকান্ত পার্কর দিকে",
        "originStopId": "stop-esplanade",
        "destinationStopId": "stop-sukanta-park",
        "stops": [
          {
            "stopId": "stop-esplanade",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-pts",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-belepole",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-makardah",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-domjur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-dakshinbari",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-ichanagari",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-sukanta-park",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.3524,
            22.5647
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.295,
            22.581
          ],
          [
            88.281,
            22.581
          ],
          [
            88.245,
            22.625
          ],
          [
            88.2185,
            22.6412
          ],
          [
            88.2235,
            22.6462
          ],
          [
            88.2285,
            22.6512
          ],
          [
            88.265,
            22.592
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Esplanade",
        "directionNameBn": "Esplanadeর দিকে",
        "originStopId": "stop-sukanta-park",
        "destinationStopId": "stop-esplanade",
        "stops": [
          {
            "stopId": "stop-sukanta-park",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ichanagari",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-dakshinbari",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-domjur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-makardah",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-belepole",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-pts",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          }
        ],
        "pathCoordinates": [
          [
            88.265,
            22.592
          ],
          [
            88.2285,
            22.6512
          ],
          [
            88.2235,
            22.6462
          ],
          [
            88.2185,
            22.6412
          ],
          [
            88.245,
            22.625
          ],
          [
            88.281,
            22.581
          ],
          [
            88.295,
            22.581
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3524,
            22.5647
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-eb1",
    "routeNumber": "EB-1",
    "nameEn": "Nabanna ⇌ Newtown",
    "nameBn": "Nabanna ⇌ নিউ টাউন",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Mandirtala, Rabindra Sadan, Park Circus, Wipro More",
    "viaBn": "Mandirtala, Rabindra Sadan, Park Circus, উইপ্রো মোড়",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Nabanna",
      "Mandirtala",
      "Vidyasagar Setu",
      "PTS More",
      "Rabindra Sadan",
      "Minto Park",
      "Beckbagan",
      "Park Circus",
      "Science City",
      "Chingrighata",
      "Wipro More",
      "College More",
      "DLF",
      "Newtown"
    ],
    "stopCount": 14,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Newtown",
        "directionNameBn": "নিউ টাউনর দিকে",
        "originStopId": "stop-nabanna",
        "destinationStopId": "stop-newtown",
        "stops": [
          {
            "stopId": "stop-nabanna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-mandirtala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-vidyasagar-setu",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-pts-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-minto-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-beckbagan",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-science-city",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-wipro-more",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-college-more",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-dlf",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-newtown",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.3112,
            22.5562
          ],
          [
            88.315,
            22.554
          ],
          [
            88.328,
            22.553
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.355,
            22.54
          ],
          [
            88.362,
            22.541
          ],
          [
            88.368,
            22.544
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.435,
            22.578
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.455,
            22.584
          ],
          [
            88.46,
            22.58
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Nabanna",
        "directionNameBn": "Nabannaর দিকে",
        "originStopId": "stop-newtown",
        "destinationStopId": "stop-nabanna",
        "stops": [
          {
            "stopId": "stop-newtown",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-dlf",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-college-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-wipro-more",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-chingrighata",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-science-city",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-park-circus",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-beckbagan",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-minto-park",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-pts-more",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-vidyasagar-setu",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-mandirtala",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-nabanna",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.46,
            22.58
          ],
          [
            88.455,
            22.584
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.435,
            22.578
          ],
          [
            88.4024,
            22.5629
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.368,
            22.544
          ],
          [
            88.362,
            22.541
          ],
          [
            88.355,
            22.54
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.328,
            22.553
          ],
          [
            88.315,
            22.554
          ],
          [
            88.3112,
            22.5562
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-eb12",
    "routeNumber": "EB-12",
    "nameEn": "Barasat ⇌ Ecospace",
    "nameBn": "Barasat ⇌ ইকোস্পেস",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Hridaypur, Eco Park, Aliah University",
    "viaBn": "হৃদয়পুর, ECO PARK, Aliah University",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Barasat",
      "Hridaypur",
      "Eco Park",
      "Aliah University",
      "Ecospace"
    ],
    "stopCount": 5,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Ecospace",
        "directionNameBn": "ইকোস্পেসর দিকে",
        "originStopId": "stop-barasat",
        "destinationStopId": "stop-ecospace",
        "stops": [
          {
            "stopId": "stop-barasat",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-hridaypur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-aliah-university",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.481,
            22.723
          ],
          [
            88.468,
            22.712
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.471,
            22.591
          ],
          [
            88.4842,
            22.5815
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Barasat",
        "directionNameBn": "Barasatর দিকে",
        "originStopId": "stop-ecospace",
        "destinationStopId": "stop-barasat",
        "stops": [
          {
            "stopId": "stop-ecospace",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-aliah-university",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-eco-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-hridaypur",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-barasat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          }
        ],
        "pathCoordinates": [
          [
            88.4842,
            22.5815
          ],
          [
            88.471,
            22.591
          ],
          [
            88.4682,
            22.6074
          ],
          [
            88.468,
            22.712
          ],
          [
            88.481,
            22.723
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-eb14",
    "routeNumber": "EB-14",
    "nameEn": "Santragachi ⇌ Eco Space",
    "nameBn": "Santragachi ⇌ Eco Space",
    "operatorId": "jcbs_pvt",
    "operatorType": "PRIVATE",
    "sector": "PRIVATE",
    "classification": "Community-listed",
    "isAC": false,
    "color": "#D97706",
    "fareMin": 10,
    "fareMax": 30,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Mandirtala, Rabindra Sadan, Topsia Road Xing, College More",
    "viaBn": "Mandirtala, Rabindra Sadan, Topsia Road Xing, College More",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Santragachi",
      "Mandirtala",
      "PTS",
      "Rabindra Sadan",
      "Beckbagan",
      "Topsia Road Xing",
      "Nicco Park",
      "College More",
      "Newtown",
      "Unitech",
      "Ecospace",
      "Eco Space"
    ],
    "stopCount": 12,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Eco Space",
        "directionNameBn": "Eco Spaceর দিকে",
        "originStopId": "stop-santragachi",
        "destinationStopId": "stop-eco-space",
        "stops": [
          {
            "stopId": "stop-santragachi",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-mandirtala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-pts",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-beckbagan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-topsia-road-xing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-nicco-park",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-college-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-newtown",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-unitech",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-eco-space",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.281,
            22.581
          ],
          [
            88.315,
            22.554
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.362,
            22.541
          ],
          [
            88.367,
            22.546
          ],
          [
            88.425,
            22.571
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.46,
            22.58
          ],
          [
            88.475,
            22.586
          ],
          [
            88.4842,
            22.5815
          ],
          [
            88.4892,
            22.5865
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Santragachi",
        "directionNameBn": "Santragachiর দিকে",
        "originStopId": "stop-eco-space",
        "destinationStopId": "stop-santragachi",
        "stops": [
          {
            "stopId": "stop-eco-space",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-unitech",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-newtown",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-college-more",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-nicco-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-topsia-road-xing",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-beckbagan",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-rabindra-sadan",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-pts",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-mandirtala",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-santragachi",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.4892,
            22.5865
          ],
          [
            88.4842,
            22.5815
          ],
          [
            88.475,
            22.586
          ],
          [
            88.46,
            22.58
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.425,
            22.571
          ],
          [
            88.367,
            22.546
          ],
          [
            88.362,
            22.541
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3385,
            22.542
          ],
          [
            88.315,
            22.554
          ],
          [
            88.281,
            22.581
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-eb3",
    "routeNumber": "EB-3",
    "nameEn": "Tollygunge ⇌ Eco Space",
    "nameBn": "Tollygunge ⇌ Eco Space",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Rashbehari, Mathpukur, SDF More, Narkelbagan",
    "viaBn": "রাসবিহারী, Mathpukur, SDF More, Narkelbagan",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Tollygunge",
      "Rashbehari",
      "Deshapriya Park",
      "Science City",
      "Mathpukur",
      "Nicco Park",
      "Wipro More",
      "SDF More",
      "College More",
      "DLF1",
      "Narkelbagan",
      "Unitech Gate 2",
      "Ecospace",
      "Minibuses",
      "Eco Space"
    ],
    "stopCount": 15,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Eco Space",
        "directionNameBn": "Eco Spaceর দিকে",
        "originStopId": "stop-tollygunge",
        "destinationStopId": "stop-eco-space",
        "stops": [
          {
            "stopId": "stop-tollygunge",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-rashbehari",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-deshapriya-park",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-science-city",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mathpukur",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-nicco-park",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-wipro-more",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-sdf-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-college-more",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-unitech-gate-2",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-minibuses",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-eco-space",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.349,
            22.52
          ],
          [
            88.358,
            22.52
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.398,
            22.548
          ],
          [
            88.425,
            22.571
          ],
          [
            88.435,
            22.578
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.455,
            22.584
          ],
          [
            88.468,
            22.582
          ],
          [
            88.475,
            22.586
          ],
          [
            88.4842,
            22.5815
          ],
          [
            88.4892,
            22.5865
          ],
          [
            88.4942,
            22.5915
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Tollygunge",
        "directionNameBn": "Tollygungeর দিকে",
        "originStopId": "stop-eco-space",
        "destinationStopId": "stop-tollygunge",
        "stops": [
          {
            "stopId": "stop-eco-space",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-minibuses",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-ecospace",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-unitech-gate-2",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-narkelbagan",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-dlf1",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-college-more",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-sdf-more",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-wipro-more",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-nicco-park",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-mathpukur",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-science-city",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-deshapriya-park",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-rashbehari",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          },
          {
            "stopId": "stop-tollygunge",
            "sequence": 15,
            "distanceFromStartKm": 25.2,
            "scheduledMinutesFromStart": 84
          }
        ],
        "pathCoordinates": [
          [
            88.4942,
            22.5915
          ],
          [
            88.4892,
            22.5865
          ],
          [
            88.4842,
            22.5815
          ],
          [
            88.475,
            22.586
          ],
          [
            88.468,
            22.582
          ],
          [
            88.455,
            22.584
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.4338,
            22.5736
          ],
          [
            88.435,
            22.578
          ],
          [
            88.425,
            22.571
          ],
          [
            88.398,
            22.548
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.358,
            22.52
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m14",
    "routeNumber": "M-14",
    "nameEn": "Behala ⇌ New Town",
    "nameBn": "বেহালা ⇌ New Town",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Chetla, Rashbehari Xing, Gariahat, Science City",
    "viaBn": "চেতলা, রাসবিহারী, Gariahat, সায়েন্স সিটি",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Behala",
      "Chetla",
      "Rashbehari Xing",
      "Gariahat",
      "Science City",
      "College More",
      "Newtown",
      "New Town"
    ],
    "stopCount": 8,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards New Town",
        "directionNameBn": "New Townর দিকে",
        "originStopId": "stop-behala",
        "destinationStopId": "stop-new-town",
        "stops": [
          {
            "stopId": "stop-behala",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-chetla",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-rashbehari-xing",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-science-city",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-college-more",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-newtown",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-new-town",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.3182,
            22.4936
          ],
          [
            88.341,
            22.516
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.46,
            22.58
          ],
          [
            88.465,
            22.585
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Behala",
        "directionNameBn": "বেহালার দিকে",
        "originStopId": "stop-new-town",
        "destinationStopId": "stop-behala",
        "stops": [
          {
            "stopId": "stop-new-town",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-newtown",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-college-more",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-science-city",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-gariahat",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rashbehari-xing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-chetla",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-behala",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          }
        ],
        "pathCoordinates": [
          [
            88.465,
            22.585
          ],
          [
            88.46,
            22.58
          ],
          [
            88.4302,
            22.5798
          ],
          [
            88.3962,
            22.5404
          ],
          [
            88.3653,
            22.5186
          ],
          [
            88.349,
            22.52
          ],
          [
            88.341,
            22.516
          ],
          [
            88.3182,
            22.4936
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m24",
    "routeNumber": "M-24",
    "nameEn": "Shibtala Math ⇌ Howrah Station",
    "nameBn": "শিবতলা মাঠ ⇌ হাওড়া স্টেশন",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Ananda Palit, Sealdah, MG. Road, Burrabazar",
    "viaBn": "আনন্দ পালিত, Sealdah, MG. Road, Burrabazar",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Shibtala Math",
      "Ananda Palit",
      "Sealdah",
      "MG. Road",
      "Burrabazar",
      "Howrah Station"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-shibtala-math",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-shibtala-math",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-ananda-palit",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.371,
            22.558
          ],
          [
            88.372,
            22.556
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3762,
            22.5725
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Shibtala Math",
        "directionNameBn": "শিবতলা মাঠর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-shibtala-math",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mg-road",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-ananda-palit",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-shibtala-math",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3762,
            22.5725
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.372,
            22.556
          ],
          [
            88.371,
            22.558
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m7b",
    "routeNumber": "M-7B",
    "nameEn": "Shibrampur ⇌ Howrah Station",
    "nameBn": "শিবরামপুর ⇌ হাওড়া স্টেশন",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Bakultala, Raja Rammohan Roy Rd, Rashbehari Xing, Park Street",
    "viaBn": "Bakultala, Raja Rammohan Roy Rd, রাসবিহারী, Park Street",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Shibrampur",
      "Bakultala",
      "Behala Chowrasta",
      "Raja Rammohan Roy Rd",
      "Tollygunge Metro",
      "Rashbehari Xing",
      "Exide",
      "Park Street",
      "Esplanade",
      "Mission Row Xing",
      "BBD Bag",
      "Howrah Station"
    ],
    "stopCount": 12,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah Station",
        "directionNameBn": "হাওড়া স্টেশনর দিকে",
        "originStopId": "stop-shibrampur",
        "destinationStopId": "stop-howrah-station",
        "stops": [
          {
            "stopId": "stop-shibrampur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bakultala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-raja-rammohan-roy-rd",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rashbehari-xing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-exide",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-park-street",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-mission-row-xing",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.295,
            22.485
          ],
          [
            88.311,
            22.478
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.3232,
            22.4986
          ],
          [
            88.3282,
            22.5036
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3574,
            22.5697
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Shibrampur",
        "directionNameBn": "শিবরামপুরর দিকে",
        "originStopId": "stop-howrah-station",
        "destinationStopId": "stop-shibrampur",
        "stops": [
          {
            "stopId": "stop-howrah-station",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-mission-row-xing",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-park-street",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-exide",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-rashbehari-xing",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-tollygunge-metro",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-raja-rammohan-roy-rd",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-bakultala",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-shibrampur",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3574,
            22.5697
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3478,
            22.5398
          ],
          [
            88.349,
            22.52
          ],
          [
            88.3282,
            22.5036
          ],
          [
            88.3232,
            22.4986
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.311,
            22.478
          ],
          [
            88.295,
            22.485
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m7c",
    "routeNumber": "M-7C",
    "nameEn": "Sasthir More ⇌ Howrah",
    "nameBn": "Sasthir More ⇌ Howrah",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Bakultala, Manton, Taratala Xing, Casurina Ave",
    "viaBn": "Bakultala, Manton, তারাতলা, Casurina Ave",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Sasthir More",
      "Bakultala",
      "Chowrasta",
      "Manton",
      "Behala PS",
      "Taratala Xing",
      "Mominpur",
      "Casurina Ave",
      "Esplanade",
      "BBD Bag",
      "Howrah Bridge East",
      "Howrah Station",
      "Howrah"
    ],
    "stopCount": 13,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-sasthir-more",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-sasthir-more",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-bakultala",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-chowrasta",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-manton",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-behala-ps",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-casurina-ave",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah-bridge-east",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-howrah",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.3639,
            22.5726
          ],
          [
            88.311,
            22.478
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.316,
            22.489
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.315,
            22.515
          ],
          [
            88.321,
            22.527
          ],
          [
            88.326,
            22.532
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.351,
            22.585
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Sasthir More",
        "directionNameBn": "Sasthir Moreর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-sasthir-more",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-howrah-bridge-east",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-casurina-ave",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-behala-ps",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-manton",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-chowrasta",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-bakultala",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-sasthir-more",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.351,
            22.585
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.326,
            22.532
          ],
          [
            88.321,
            22.527
          ],
          [
            88.315,
            22.515
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.316,
            22.489
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.311,
            22.478
          ],
          [
            88.3639,
            22.5726
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m7d",
    "routeNumber": "M-7D",
    "nameEn": "Sonamukhi Bazar ⇌ Kankurgachi",
    "nameBn": "সোনামুখী বাজার ⇌ Kankurgachi",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sarsuna, Mint, Elgin, Sealdah",
    "viaBn": "সরশুনা, Mint, Elgin, Sealdah",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Sonamukhi Bazar",
      "Sarsuna",
      "Behala Chowrasta",
      "Behala Tram Depot",
      "Mint",
      "Mominpur",
      "Hazra",
      "Elgin",
      "Park Street",
      "Esplanade",
      "Sealdah",
      "Rashmoni Bazar",
      "Phoolbagan",
      "Kankurgachi"
    ],
    "stopCount": 14,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Kankurgachi",
        "directionNameBn": "Kankurgachiর দিকে",
        "originStopId": "stop-sonamukhi-bazar",
        "destinationStopId": "stop-kankurgachi",
        "stops": [
          {
            "stopId": "stop-sonamukhi-bazar",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-behala-tram-depot",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mint",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-hazra",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-elgin",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-park-street",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-rashmoni-bazar",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-phoolbagan",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-kankurgachi",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.281,
            22.472
          ],
          [
            88.288,
            22.478
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.355,
            22.54
          ],
          [
            88.321,
            22.527
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.387,
            22.566
          ],
          [
            88.387,
            22.571
          ],
          [
            88.3846,
            22.5768
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Sonamukhi Bazar",
        "directionNameBn": "সোনামুখী বাজারর দিকে",
        "originStopId": "stop-kankurgachi",
        "destinationStopId": "stop-sonamukhi-bazar",
        "stops": [
          {
            "stopId": "stop-kankurgachi",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-phoolbagan",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-rashmoni-bazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-park-street",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-elgin",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-hazra",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-mominpur",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-mint",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-behala-tram-depot",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 12,
            "distanceFromStartKm": 19.8,
            "scheduledMinutesFromStart": 66
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 13,
            "distanceFromStartKm": 21.6,
            "scheduledMinutesFromStart": 72
          },
          {
            "stopId": "stop-sonamukhi-bazar",
            "sequence": 14,
            "distanceFromStartKm": 23.4,
            "scheduledMinutesFromStart": 78
          }
        ],
        "pathCoordinates": [
          [
            88.3846,
            22.5768
          ],
          [
            88.387,
            22.571
          ],
          [
            88.387,
            22.566
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.348,
            22.537
          ],
          [
            88.3475,
            22.5285
          ],
          [
            88.321,
            22.527
          ],
          [
            88.355,
            22.54
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.288,
            22.478
          ],
          [
            88.281,
            22.472
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m7e",
    "routeNumber": "M-7E",
    "nameEn": "Bagpota ⇌ Howrah",
    "nameBn": "বাগপোতা ⇌ Howrah",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sarsuna, Taratala Xing, Khidirpore, BBD Bag",
    "viaBn": "সরশুনা, তারাতলা, Khidirpore, বি.বি.ডি. বাগ",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Bagpota",
      "Sarsuna",
      "Behala",
      "Taratala Xing",
      "Mominpore",
      "Khidirpore",
      "Esplanade",
      "BBD Bag",
      "Howrah Bridge East",
      "Howrah Station",
      "Howrah"
    ],
    "stopCount": 11,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-bagpota",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-bagpota",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-behala",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-mominpore",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-khidirpore",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-howrah-bridge-east",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-howrah",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.275,
            22.468
          ],
          [
            88.288,
            22.478
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.315,
            22.515
          ],
          [
            88.321,
            22.527
          ],
          [
            88.326,
            22.532
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.351,
            22.585
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Bagpota",
        "directionNameBn": "বাগপোতার দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-bagpota",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-howrah-bridge-east",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-bbd-bag",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-khidirpore",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-mominpore",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          },
          {
            "stopId": "stop-taratala-xing",
            "sequence": 8,
            "distanceFromStartKm": 12.6,
            "scheduledMinutesFromStart": 42
          },
          {
            "stopId": "stop-behala",
            "sequence": 9,
            "distanceFromStartKm": 14.4,
            "scheduledMinutesFromStart": 48
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 10,
            "distanceFromStartKm": 16.2,
            "scheduledMinutesFromStart": 54
          },
          {
            "stopId": "stop-bagpota",
            "sequence": 11,
            "distanceFromStartKm": 18.0,
            "scheduledMinutesFromStart": 60
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.351,
            22.585
          ],
          [
            88.3498,
            22.5716
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.326,
            22.532
          ],
          [
            88.321,
            22.527
          ],
          [
            88.315,
            22.515
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.288,
            22.478
          ],
          [
            88.275,
            22.468
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-m7k",
    "routeNumber": "M-7K",
    "nameEn": "Khudiram Park (Sarsuna) ⇌ Sealdah (Rajabazar T.D.)",
    "nameBn": "সরশুনা ⇌ শিয়ালদহ",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Sarsuna, Behala Chowrasta, Karunamoyee (Tollygunge), Park Street",
    "viaBn": "সরশুনা, বেহালা চৌরাস্তা, করুণাময়ী, Park Street",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Khudiram Park (Sarsuna)",
      "Sarsuna",
      "Behala Chowrasta",
      "Karunamoyee (Tollygunge)",
      "Park Street",
      "Esplanade",
      "Sealdah (Rajabazar T.D.)"
    ],
    "stopCount": 7,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Sealdah (Rajabazar T.D.)",
        "directionNameBn": "শিয়ালদহর দিকে",
        "originStopId": "stop-khudiram-park-sarsuna",
        "destinationStopId": "stop-sealdah-rajabazar-t-d",
        "stops": [
          {
            "stopId": "stop-khudiram-park-sarsuna",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-karunamoyee-tollygunge",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-park-street",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-sealdah-rajabazar-t-d",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.288,
            22.478
          ],
          [
            88.288,
            22.478
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.4187,
            22.5867
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3712,
            22.5675
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Khudiram Park (Sarsuna)",
        "directionNameBn": "সরশুনার দিকে",
        "originStopId": "stop-sealdah-rajabazar-t-d",
        "destinationStopId": "stop-khudiram-park-sarsuna",
        "stops": [
          {
            "stopId": "stop-sealdah-rajabazar-t-d",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-esplanade",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-park-street",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-karunamoyee-tollygunge",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-behala-chowrasta",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-sarsuna",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          },
          {
            "stopId": "stop-khudiram-park-sarsuna",
            "sequence": 7,
            "distanceFromStartKm": 10.8,
            "scheduledMinutesFromStart": 36
          }
        ],
        "pathCoordinates": [
          [
            88.3712,
            22.5675
          ],
          [
            88.3524,
            22.5647
          ],
          [
            88.3512,
            22.551
          ],
          [
            88.4187,
            22.5867
          ],
          [
            88.3182,
            22.4936
          ],
          [
            88.288,
            22.478
          ],
          [
            88.288,
            22.478
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-mb2",
    "routeNumber": "MB-2",
    "nameEn": "Jadavpur ⇌ Howrah",
    "nameBn": "Jadavpur ⇌ Howrah",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Jadavpur to Howrah Direct Corridor",
    "viaBn": "হাওড়া",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Jadavpur",
      "Howrah"
    ],
    "stopCount": 2,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Howrah",
        "directionNameBn": "Howrahর দিকে",
        "originStopId": "stop-jadavpur",
        "destinationStopId": "stop-howrah",
        "stops": [
          {
            "stopId": "stop-jadavpur",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3718,
            22.4988
          ],
          [
            88.3431,
            22.5835
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Jadavpur",
        "directionNameBn": "Jadavpurর দিকে",
        "originStopId": "stop-howrah",
        "destinationStopId": "stop-jadavpur",
        "stops": [
          {
            "stopId": "stop-howrah",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-jadavpur",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          }
        ],
        "pathCoordinates": [
          [
            88.3431,
            22.5835
          ],
          [
            88.3718,
            22.4988
          ]
        ]
      }
    }
  },
  {
    "id": "route-dir-midi1",
    "routeNumber": "MIDI-1",
    "nameEn": "Howrah Maidan ⇌ Rajabazar Tram Depot",
    "nameBn": "Howrah Maidan ⇌ রাজাবাজার ট্রাম ডিপো",
    "operatorId": "minibus_samity",
    "operatorType": "MINIBUS",
    "sector": "PRIVATE",
    "classification": "Minibus",
    "isAC": false,
    "color": "#8C301D",
    "fareMin": 12,
    "fareMax": 25,
    "frequencyMinutes": 10,
    "firstBus": "06:00 AM",
    "lastBus": "09:30 PM",
    "viaEn": "Howrah Station, Burrabazar, College Street, Sealdah",
    "viaBn": "হাওড়া স্টেশন, Burrabazar, College Street, Sealdah",
    "acceptsGovtPass": false,
    "paymentModes": [
      "cash",
      "upi"
    ],
    "allStopsList": [
      "Howrah Maidan",
      "Howrah Station",
      "Burrabazar",
      "College Street",
      "Sealdah",
      "Rajabazar Tram Depot"
    ],
    "stopCount": 6,
    "directions": {
      "UP": {
        "directionId": "UP",
        "directionNameEn": "Towards Rajabazar Tram Depot",
        "directionNameBn": "রাজাবাজার ট্রাম ডিপোর দিকে",
        "originStopId": "stop-howrah-maidan",
        "destinationStopId": "stop-rajabazar-tram-depot",
        "stops": [
          {
            "stopId": "stop-howrah-maidan",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-college-street",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-rajabazar-tram-depot",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.331,
            22.583
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3638,
            22.5768
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3762,
            22.5725
          ]
        ]
      },
      "DOWN": {
        "directionId": "DOWN",
        "directionNameEn": "Towards Howrah Maidan",
        "directionNameBn": "Howrah Maidanর দিকে",
        "originStopId": "stop-rajabazar-tram-depot",
        "destinationStopId": "stop-howrah-maidan",
        "stops": [
          {
            "stopId": "stop-rajabazar-tram-depot",
            "sequence": 1,
            "distanceFromStartKm": 0.0,
            "scheduledMinutesFromStart": 0
          },
          {
            "stopId": "stop-sealdah",
            "sequence": 2,
            "distanceFromStartKm": 1.8,
            "scheduledMinutesFromStart": 6
          },
          {
            "stopId": "stop-college-street",
            "sequence": 3,
            "distanceFromStartKm": 3.6,
            "scheduledMinutesFromStart": 12
          },
          {
            "stopId": "stop-burrabazar",
            "sequence": 4,
            "distanceFromStartKm": 5.4,
            "scheduledMinutesFromStart": 18
          },
          {
            "stopId": "stop-howrah-station",
            "sequence": 5,
            "distanceFromStartKm": 7.2,
            "scheduledMinutesFromStart": 24
          },
          {
            "stopId": "stop-howrah-maidan",
            "sequence": 6,
            "distanceFromStartKm": 9.0,
            "scheduledMinutesFromStart": 30
          }
        ],
        "pathCoordinates": [
          [
            88.3762,
            22.5725
          ],
          [
            88.3712,
            22.5675
          ],
          [
            88.3638,
            22.5768
          ],
          [
            88.355,
            22.584
          ],
          [
            88.3431,
            22.5835
          ],
          [
            88.331,
            22.583
          ]
        ]
      }
    }
  }
];
