-- Create role enum
CREATE TYPE public.app_role AS ENUM ('principal', 'teacher', 'class_teacher');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  username TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create activities table
CREATE TABLE public.activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- sports, clubs, societies, house, cultural, competitions, events
  date DATE NOT NULL,
  description TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create student participation records table
CREATE TABLE public.student_participations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id UUID REFERENCES public.activities(id) ON DELETE CASCADE,
  student_intex_no TEXT NOT NULL,
  student_name TEXT NOT NULL,
  level TEXT NOT NULL, -- school, zonal, provincial, national
  achievement TEXT, -- position/achievement
  certificate_note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create event gallery table
CREATE TABLE public.event_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  event_date DATE,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create upcoming events table
CREATE TABLE public.upcoming_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  venue TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- zonal, provincial, national, certificate, sports_day
  description TEXT,
  student_intex_no TEXT,
  student_name TEXT,
  achievement_date DATE,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_participations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.upcoming_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Security definer function to check if user is teacher or principal
CREATE OR REPLACE FUNCTION public.is_staff(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role IN ('teacher', 'principal', 'class_teacher')
  )
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own role"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

-- RLS Policies for activities (staff can manage, public can view)
CREATE POLICY "Anyone can view activities"
ON public.activities FOR SELECT
USING (true);

CREATE POLICY "Staff can insert activities"
ON public.activities FOR INSERT
WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Staff can update activities"
ON public.activities FOR UPDATE
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can delete activities"
ON public.activities FOR DELETE
USING (public.is_staff(auth.uid()));

-- RLS Policies for student_participations
CREATE POLICY "Anyone can view participations"
ON public.student_participations FOR SELECT
USING (true);

CREATE POLICY "Staff can insert participations"
ON public.student_participations FOR INSERT
WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Staff can update participations"
ON public.student_participations FOR UPDATE
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can delete participations"
ON public.student_participations FOR DELETE
USING (public.is_staff(auth.uid()));

-- RLS Policies for event_gallery
CREATE POLICY "Anyone can view gallery"
ON public.event_gallery FOR SELECT
USING (true);

CREATE POLICY "Staff can insert gallery"
ON public.event_gallery FOR INSERT
WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Staff can update gallery"
ON public.event_gallery FOR UPDATE
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can delete gallery"
ON public.event_gallery FOR DELETE
USING (public.is_staff(auth.uid()));

-- RLS Policies for upcoming_events
CREATE POLICY "Anyone can view upcoming events"
ON public.upcoming_events FOR SELECT
USING (true);

CREATE POLICY "Staff can insert upcoming events"
ON public.upcoming_events FOR INSERT
WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Staff can update upcoming events"
ON public.upcoming_events FOR UPDATE
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can delete upcoming events"
ON public.upcoming_events FOR DELETE
USING (public.is_staff(auth.uid()));

-- RLS Policies for achievements
CREATE POLICY "Anyone can view achievements"
ON public.achievements FOR SELECT
USING (true);

CREATE POLICY "Staff can insert achievements"
ON public.achievements FOR INSERT
WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Staff can update achievements"
ON public.achievements FOR UPDATE
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can delete achievements"
ON public.achievements FOR DELETE
USING (public.is_staff(auth.uid()));

-- Trigger function to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_activities_updated_at
BEFORE UPDATE ON public.activities
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_student_participations_updated_at
BEFORE UPDATE ON public.student_participations
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_upcoming_events_updated_at
BEFORE UPDATE ON public.upcoming_events
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();