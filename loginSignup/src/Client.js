import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://oqzikufntbyqjgpcfzct.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xemlrdWZudGJ5cWpncGNmemN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NDA1NzgsImV4cCI6MjA1NDAxNjU3OH0.si78aLvr7pHEnyyB9LxqgcS6D4Ndx7yyS02rSJ24vl4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
