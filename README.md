# BusBuddy Kolkata (বাসবাডি কলকাতা)
> Live Bus Tracking, Real-Time Journey Planning, Stoppage Autocomplete & Fleet Telemetry for Kolkata Transit

BusBuddy is an offline-resilient, mobile-first bus tracking and journey-planning platform built specifically for commuters, drivers, and transport operators in Kolkata. It integrates government buses (**WBTC**, **CSTC**, **CTC Tramways 48 Routes**) and private syndicates (**Joint Council of Bus Syndicates**, **Minibus Samity**).

---

## 🌟 Key Features

### 1. Passenger Journey Planner
- **Real-Time Stoppage Autocomplete (870+ Kolkata Stoppages):**
  - Typing in Source or Destination (e.g. typing `Bi`) instantly displays matching options: `Birati`, `Birati Bus Stand`, `Bimanbandar (Airport Gate 1)`, `Bishnupur`, `Birla Planetarium`, `Bikash Bhavan`, `Bidhannagar Road Station (Ultadanga)`, `Bijoygarh`, etc.
  - Bilingual support with both English and Bengali names (e.g., `বিরাটি / Birati`).
- **Clean Progressive Disclosure:**
  - Initial view displays only the search inputs and quick popular terminus tags (no clutter or heavy maps).
  - Clicking **"Search Buses"** displays matching routes and sequential corridor stops to the destination.
- **Full-Day Chronological Departure Timetable:**
  - Clicking any bus reveals its complete schedule one by one ($06:00\text{ AM}, 06:12\text{ AM}, 06:24\text{ AM}, \dots$).
  - Highlights the **Immediate Next Bus** with countdown (e.g., `Next Bus in ~4 mins`), vehicle registration number, and driver ID.
  - **AC (❄️) and Non-AC (🌡️) Badges:** Clear indicator beside every individual bus timing across the timetable, route cards, and stop predictions.
- **Interactive Map on Demand:**
  - MapLibre GL map renders when a user inspects a bus, showing the route geometry, stops along the way, real-time GPS telemetry, and interior cabin temperature ($21.5^\circ\text{C}$ AC / $29.5^\circ\text{C}$ Standard).
- **Subtle Kolkata Transit Aesthetic:**
  - Designed with Kolkata Tramway Heritage Forest Green (`#143627` / `#1E4D38`), Howrah Bridge Ochre (`#D97706`), North Kolkata Terracotta (`#8C301D`), and warm vintage linen paper backgrounds (`#FAF7F2`). No generic AI neon gradients.

---

### 2. Driver Trip Mode
- **Designated Driver ID Authentication:** Drivers log in with their admin-provisioned ID (e.g. `DRV-WBTC-101`) and secure PIN.
- **Active Trip Telemetry HUD:** Live speedometer, next upcoming bus stop, live ping counter, and trip elapsed timer.
- **Strict Privacy Guarantee:** Location tracking is active **only** while the trip is running. Terminates immediately on "End Trip". No background tracking.
- **Offline Resilient Queue:** When device loses mobile data, location points are saved in IndexedDB. Upon reconnection, points are uploaded marked as `is_historical: true` (never misrepresented as live).

---

### 3. Operator Control Center & Admin Gateway
- **Protected by ID & Password Authentication:**
  - Secure gateway requiring Operator ID (`admin` or `WBTC-ADMIN`) and Password (`admin123` or `ctc2026`).
  - Includes quick demo credentials fill and session sign-out.
- **Pilot Metrics:** Monitored fleet count, active trips, stale updates (>2 min), off-route anomalies, and data freshness percentage.
- **Driver Provisioning:** Register new drivers and conductors for both Government (WBTC) and Private Syndicates, issue driver IDs, and manage permit status.
- **Route & Stop Management:** Create or modify routes and bus stops with geo-coordinates and bilingual metadata.

---

## 🚌 Authentic Kolkata Bus Dataset Included

- **Government WBTC & CSTC:** Routes like `S-12` (Howrah ⇌ New Town Ecospace), `AC-9` (Jadavpur ⇌ Karunamoyee), `V-1` (Tollygunge ⇌ Airport), `EB-1`, `AC-43`, `47/1`, etc.
- **Calcutta Tramways Company (CTC) 48 Routes:** Full scraped dataset from `https://www.calcuttatramways.com/bus-route/` covering all 7 depots (Belgachia, Rajabazar, Tollygunge, Khidirpur, Ghasbagan, Park Circus, Kalighat) and 870+ stops.
- **Private Syndicates:** `215A` (Howrah ⇌ Sector V), `30B` (Babughat ⇌ Dum Dum Airport), and Minibus networks.

---

## 🚀 How to Run the Project

### Option A: Quick Start (Windows)
Double-click:
```bat
start.bat
```
*(Located inside the `busbuddy/` directory).*

### Option B: Command Line (Node.js required)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Option C: Production Build
```bash
npm run build
npm run preview
```

---

## 🔑 Demo Access Credentials

| Portal | Identifier | Password / PIN | Description |
|---|---|---|---|
| **Passenger Portal** | *No login needed* | *N/A* | Instant search, autocomplete, schedules & maps |
| **Driver Portal** | `DRV-WBTC-101` | `1234` | Subhasish Mukherjee (Kasba CSTC Depot) |
| **Driver Portal (Pvt)** | `DRV-PVT-201` | `4321` | Tapan Das (Joint Council of Bus Syndicates) |
| **Admin Console** | `admin` | `admin123` | Official WBTC / Transit Operator Gateway |

---

## 🛠️ Technology Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons.
- **Mapping:** MapLibre GL JS with OpenStreetMap / CartoDB tiles.
- **Offline Storage:** IndexedDB (`busbuddy_offline_db`) with localStorage fallback.
- **Backend / Realtime:** Supabase client integration + PostgreSQL / PostGIS database schema (`supabase/schema.sql`).
- **Telemetry Engine:** Simulated and live GPS tracking with separate `measured_time` vs `received_time` recording.

---

## 📁 Project Structure

```
busbuddy/
├── src/
│   ├── components/
│   │   ├── common/         # Header, FreshnessBadge, ReliabilityBadge, OfflineBanner
│   │   ├── ctc/            # CTCRoutesCatalog (48 Tramway bus routes)
│   │   ├── driver/         # DriverPortal, DriverTripConsole
│   │   ├── map/            # KolkataTransitMap (MapLibre GL)
│   │   ├── operator/       # OperatorDashboard (ID & Password protected)
│   │   └── passenger/      # JourneyPlanner, StopAutocomplete, BusTimingsPanel, RouteCard, AccessibleListView
│   ├── context/            # TransitContext, LanguageContext
│   ├── data/               # ctcBusRoutes.ts, allStoppages.ts, kolkataRoutes.ts, kolkataDrivers.ts
│   ├── services/           # offlineStorage.ts, telemetryEngine.ts, supabaseClient.ts
│   ├── types/              # transit.ts
│   ├── utils/              # timetableGenerator.ts
│   ├── App.tsx             # Main application orchestrator
│   └── main.tsx            # Application root
├── public/                 # Static assets and icons
├── supabase/
│   └── schema.sql          # PostgreSQL + PostGIS schema for cloud deployment
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Kolkata transit theme configuration
├── vite.config.ts          # Vite build config
└── README.md               # Documentation
```

---
*Built for the Smart India Hackathon (SIH 2026) • Government of West Bengal Transport Department Initiative.*
