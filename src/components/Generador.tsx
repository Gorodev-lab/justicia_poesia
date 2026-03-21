import React, { useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface GeneradorProps {
  imagenPrompt: string;
  setImagenPrompt: (val: string) => void;
  generateImage: () => void;
  imagenLoading: boolean;
  imagenResult: string | null;
  imagenBase64?: string | null;
  veoPrompt: string;
  setVeoPrompt: (val: string) => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  generateVideo: () => void;
  veoLoading: boolean;
  veoResult: string | null;
}

function GeneradorBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-5">
      <motion.div 
        style={{ y }}
        className="absolute -inset-[50%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDBGRjAwIi8+Cjwvc3ZnPg==')] bg-repeat"
      />
    </div>
  );
}

export function Generador({
  imagenPrompt,
  setImagenPrompt,
  generateImage,
  imagenLoading,
  imagenResult,
  veoPrompt,
  setVeoPrompt,
  selectedFile,
  setSelectedFile,
  generateVideo,
  veoLoading,
  veoResult,
  imagenBase64
}: GeneradorProps) {
  return (
    <motion.div 
      key="generador"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-16 relative"
    >
      <GeneradorBackground />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Generación de Visiones</h3>
          <p className="text-sm opacity-50 uppercase tracking-widest">Producción de memoria visual con pigmentos minerales</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text"
            placeholder="Orden de trazado (ej: Guerrero huchití cazando...)"
            className="flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all"
            value={imagenPrompt}
            onChange={(e) => setImagenPrompt(e.target.value)}
          />
          <button 
            onClick={generateImage}
            disabled={imagenLoading}
            className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30"
          >
            {imagenLoading ? <Loader2 className="animate-spin" /> : '[ TRAZAR ]'}
          </button>
        </div>
        {imagenResult && (
          <div className="space-y-6">
            <div className="p-6 border border-[var(--border)] bg-[var(--card-bg)] text-sm font-mono whitespace-pre-wrap leading-relaxed">
              [Visión Sintética Generada]:
              <br/><br/>
              {imagenResult}
            </div>
            <div className="border border-[var(--border)] relative overflow-hidden bg-black/80 aspect-video flex items-center justify-center group">
              <div className="absolute inset-0 bg-[var(--accent)]/5 animate-pulse" />
              {(() => {
                const cleanPrompt = imagenResult
                  .replace('[Visión Sintética Generada]:', '')
                  .replace(/\n+/g, ' ')
                  .trim()
                  .substring(0, 1000);
                
                const imgSrc = imagenBase64 
                  ? `data:image/jpeg;base64,${imagenBase64}`
                  : `https://image.pollinations.ai/prompt/${encodeURIComponent(
                      "Pintura rupestre ancestral huchití en cueva, gran mural, pigmentos minerales ocres y negros sobre piedra basalto, alta calidad. " + cleanPrompt
                    )}?width=1280&height=720&nologo=true&model=flux&seed=42`;

                return (
                  <img 
                    src={imgSrc} 
                    alt="Sintetizador Visual"
                    className="w-full h-full object-cover mix-blend-screen filter contrast-[1.1] grayscale-[10%] sepia-[30%] hue-rotate-[-10deg] transition-transform duration-[10s] group-hover:scale-110"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const pulse = parent.querySelector('.animate-pulse');
                        if (pulse) pulse.remove();
                      }
                    }}
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                );
              })()}
              <div className="absolute bottom-4 right-4 text-[10px] text-[#00FF00] font-mono opacity-60 bg-black/80 px-3 py-1 border border-[#00FF00]/30 backdrop-blur group-hover:opacity-100 transition-opacity">
                [ RENDERIZADO {imagenBase64 ? 'NATIVO' : 'ESTABLECIDO'} ]
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="h-px bg-[var(--border)] opacity-50" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Dinámica de Recuerdos</h3>
          <p className="text-sm opacity-50 uppercase tracking-widest">Procesamiento de movimiento ancestral</p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text"
              placeholder="Orden de movimiento..."
              className="flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all"
              value={veoPrompt}
              onChange={(e) => setVeoPrompt(e.target.value)}
            />
            <label className="cursor-pointer px-6 py-4 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors">
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} 
              />
              <span className="text-xs uppercase font-bold tracking-widest">
                {selectedFile ? '[ IMAGEN LISTA ]' : '[ SUBIR BASE ]'}
              </span>
            </label>
            <button 
              onClick={generateVideo}
              disabled={veoLoading}
              className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30"
            >
              {veoLoading ? <Loader2 className="animate-spin" /> : '[ ANIMAR ]'}
            </button>
          </div>
        </div>
        {veoResult && (
          <div className="p-6 border border-[var(--border)] bg-[var(--card-bg)] text-sm font-mono whitespace-pre-wrap leading-relaxed">
            {veoResult}
          </div>
        )}
      </section>
    </motion.div>
  );
}
