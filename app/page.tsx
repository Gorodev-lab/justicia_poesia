'use client';
import App from '../src/App';
import { useEffect, useState } from 'react';

// Se crea un componente envuelto como cliente Next.js puro para evitar errores de hidratación de estados locales con Vite
export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--background)] text-[var(--accent)] text-xs font-mono uppercase tracking-[0.3em]">
        [ INICIANDO NÚCLEO HUCHITÍ ]
      </div>
    );
  }

  return (
    <main className="w-full relative overflow-x-hidden min-h-screen">
      <App />
    </main>
  );
}
