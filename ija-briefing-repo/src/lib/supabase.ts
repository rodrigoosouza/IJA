import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ofxchwdlxheiozjkaopz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9meGNod2RseGhlaW96amthb3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MDc0MjEsImV4cCI6MjA4NzA4MzQyMX0.-k6W1IU6c1jjmP5vRpk4sqgsVnwgg4MnwGnTqRD5bxU'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
