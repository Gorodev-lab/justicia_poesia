import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HUCHITÍ: PROYECTO DATEMBÀ',
  description: 'RECUPERACIÓN LINGÜÍSTICA ACTIVA',
};

// Optimización nativa y fluida para el entorno móvil, que evite el zooming y permita una UI como App Nativas
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased font-sans text-[var(--foreground)] bg-[var(--background)] min-h-screen relative max-w-[100vw] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
