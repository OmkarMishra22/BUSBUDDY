-- ========================================================================
-- BusBuddy Kolkata - PostgreSQL + PostGIS Database Schema & Supabase RLS
-- ========================================================================

-- 1. Enable PostGIS Extension for Geolocation queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Enumerated Types
CREATE TYPE user_role AS ENUM ('passenger', 'driver', 'operator');
CREATE TYPE operator_type AS ENUM ('WBTC', 'CSTC', 'CTC', 'PRIVATE');
CREATE TYPE trip_status AS ENUM ('scheduled', 'active', 'completed', 'cancelled');
CREATE TYPE update_source AS ENUM ('driver_gps', 'passenger_report', 'timetable_estimate');
CREATE TYPE direction_type AS ENUM ('UP', 'DOWN');

-- 3. Agencies / Operators Table
CREATE TABLE IF NOT EXISTS public.agencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code operator_type NOT NULL,
    name_en TEXT NOT NULL,
    name_bn TEXT NOT NULL,
    helpline TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Bus Fleet Table
CREATE TABLE IF NOT EXISTS public.buses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agency_id UUID REFERENCES public.agencies(id) ON DELETE CASCADE,
    registration_number TEXT UNIQUE NOT NULL,
    model TEXT,
    is_ac BOOLEAN DEFAULT false,
    capacity INT DEFAULT 45,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Bus Stops Table (with PostGIS Point Geometry)
CREATE TABLE IF NOT EXISTS public.stops (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_en TEXT NOT NULL,
    name_bn TEXT NOT NULL,
    landmark_en TEXT,
    landmark_bn TEXT,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    geom GEOMETRY(Point, 4326) GENERATED ALWAYS AS (ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)) STORED,
    is_terminal BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_stops_geom ON public.stops USING GIST (geom);

-- 6. Routes Table
CREATE TABLE IF NOT EXISTS public.routes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agency_id UUID REFERENCES public.agencies(id),
    route_number TEXT NOT NULL,
    name_en TEXT NOT NULL,
    name_bn TEXT NOT NULL,
    is_ac BOOLEAN DEFAULT false,
    color TEXT DEFAULT '#2563EB',
    fare_min INT DEFAULT 10,
    fare_max INT DEFAULT 30,
    frequency_minutes INT DEFAULT 12,
    via_en TEXT,
    via_bn TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Route Stops Sequence
CREATE TABLE IF NOT EXISTS public.route_stops (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    route_id UUID REFERENCES public.routes(id) ON DELETE CASCADE,
    stop_id UUID REFERENCES public.stops(id) ON DELETE CASCADE,
    direction direction_type NOT NULL DEFAULT 'UP',
    sequence_order INT NOT NULL,
    distance_km NUMERIC(5,2) DEFAULT 0,
    scheduled_minutes INT DEFAULT 0,
    UNIQUE(route_id, direction, sequence_order)
);

-- 8. Driver Trips Table
CREATE TABLE IF NOT EXISTS public.trips (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bus_id UUID REFERENCES public.buses(id) ON DELETE CASCADE,
    route_id UUID REFERENCES public.routes(id) ON DELETE CASCADE,
    driver_id UUID REFERENCES auth.users(id),
    direction direction_type NOT NULL DEFAULT 'UP',
    status trip_status NOT NULL DEFAULT 'scheduled',
    start_time TIMESTAMPTZ,
    end_time TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Location Reports Table
-- Crucial: Store GPS measured_time separately from server received_time!
CREATE TABLE IF NOT EXISTS public.location_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    trip_id UUID REFERENCES public.trips(id) ON DELETE CASCADE,
    bus_id UUID REFERENCES public.buses(id) ON DELETE CASCADE,
    route_id UUID REFERENCES public.routes(id) ON DELETE CASCADE,
    direction direction_type NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    geom GEOMETRY(Point, 4326) GENERATED ALWAYS AS (ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)) STORED,
    bearing NUMERIC(5,2) DEFAULT 0,
    speed_kmh NUMERIC(5,2) DEFAULT 0,
    accuracy_meters NUMERIC(5,2) DEFAULT 10,
    source update_source DEFAULT 'driver_gps',
    is_historical BOOLEAN DEFAULT false,
    measured_time TIMESTAMPTZ NOT NULL, -- Device GPS measurement time
    received_time TIMESTAMPTZ DEFAULT NOW(), -- Server receipt timestamp
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_loc_reports_geom ON public.location_reports USING GIST (geom);
CREATE INDEX IF NOT EXISTS idx_loc_reports_trip_time ON public.location_reports (trip_id, measured_time DESC);

-- 10. PostGIS Query Function: Find Nearby Buses within Radius (meters)
CREATE OR REPLACE FUNCTION find_nearby_buses(
    user_lat DOUBLE PRECISION,
    user_lon DOUBLE PRECISION,
    radius_meters DOUBLE PRECISION DEFAULT 2500
)
RETURNS TABLE (
    bus_id UUID,
    route_number TEXT,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    distance_meters DOUBLE PRECISION,
    speed_kmh NUMERIC,
    measured_time TIMESTAMPTZ,
    is_stale BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        lr.bus_id,
        r.route_number,
        lr.latitude,
        lr.longitude,
        ST_Distance(lr.geom::geography, ST_SetSRID(ST_MakePoint(user_lon, user_lat), 4326)::geography) AS distance_meters,
        lr.speed_kmh,
        lr.measured_time,
        (NOW() - lr.measured_time > INTERVAL '2 minutes') AS is_stale
    FROM public.location_reports lr
    JOIN public.routes r ON lr.route_id = r.id
    WHERE ST_DWithin(lr.geom::geography, ST_SetSRID(ST_MakePoint(user_lon, user_lat), 4326)::geography, radius_meters)
    ORDER BY lr.measured_time DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 11. Row Level Security (RLS)
ALTER TABLE public.agencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_stops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.location_reports ENABLE ROW LEVEL SECURITY;

-- Public/Passenger read access to transit info
CREATE POLICY "Public read access for agencies" ON public.agencies FOR SELECT USING (true);
CREATE POLICY "Public read access for buses" ON public.buses FOR SELECT USING (true);
CREATE POLICY "Public read access for stops" ON public.stops FOR SELECT USING (true);
CREATE POLICY "Public read access for routes" ON public.routes FOR SELECT USING (true);
CREATE POLICY "Public read access for route_stops" ON public.route_stops FOR SELECT USING (true);
CREATE POLICY "Public read access for active trips" ON public.trips FOR SELECT USING (status = 'active');
CREATE POLICY "Public read access for location reports" ON public.location_reports FOR SELECT USING (true);

-- Driver permissions: drivers can insert locations and update their own trips
CREATE POLICY "Drivers insert location reports" ON public.location_reports 
FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Drivers manage own trips" ON public.trips 
FOR ALL USING (auth.uid() = driver_id);
