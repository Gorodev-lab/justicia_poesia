import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SUPABASE_AVAILABLE = !!(supabaseUrl && supabaseAnonKey);

if (!SUPABASE_AVAILABLE) {
  console.warn('[Huchití OS] Supabase no configurado — modo standalone activo.');
}

// Usamos placeholders válidos para que createClient no lance un error URL
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder_key'
);

export { SUPABASE_AVAILABLE };
