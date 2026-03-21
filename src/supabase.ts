import { createClient } from '@supabase/supabase-js';

const getEnvVar = (name: string) => {
  if (typeof process !== 'undefined' && process.env?.[name]) return process.env[name];
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env?.[name]) return import.meta.env[name];
  return undefined;
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL') || getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY') || getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');

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
