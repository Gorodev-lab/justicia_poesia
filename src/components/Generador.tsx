import React, { useRef } from 'react';
import { Loader2, Terminal } from 'lucide-react';
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
                const imgSrc = imagenBase64 
                  ? `data:image/jpeg;base64,${imagenBase64}`
                  : null;

                if (!imgSrc) {
                  // Arte rupestre procedural SVG — placeholder cultural auténtico
                  return (
                    <div className="absolute inset-0 overflow-hidden">
                      <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {/* Fondo basalto texturizado */}
                        <defs>
                          <filter id="grain">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
                            <feColorMatrix type="saturate" values="0"/>
                            <feBlend in="SourceGraphic" mode="multiply"/>
                          </filter>
                          <radialGradient id="caveLight" cx="50%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#3d1a00" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#000000" stopOpacity="0.95"/>
                          </radialGradient>
                          <linearGradient id="ocre" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c8560a"/>
                            <stop offset="100%" stopColor="#8b3a00"/>
                          </linearGradient>
                        </defs>
                        {/* Pared de cueva */}
                        <rect width="800" height="450" fill="#1a0a00"/>
                        <rect width="800" height="450" fill="url(#caveLight)" filter="url(#grain)"/>
                        {/* Figuras rupestres — guerrero */}
                        <g opacity="0.85" fill="url(#ocre)" stroke="#5a2000" strokeWidth="0.5">
                          {/* Cuerpo principal */}
                          <ellipse cx="200" cy="200" rx="12" ry="18" />
                          {/* Cabeza */}
                          <circle cx="200" cy="175" r="9" />
                          {/* Brazos */}
                          <line x1="188" y1="190" x2="165" y2="210" stroke="#c8560a" strokeWidth="4" strokeLinecap="round"/>
                          <line x1="212" y1="190" x2="240" y2="200" stroke="#c8560a" strokeWidth="4" strokeLinecap="round"/>
                          {/* Lanza */}
                          <line x1="240" y1="200" x2="285" y2="175" stroke="#8b3a00" strokeWidth="3" strokeLinecap="round"/>
                          <polygon points="285,175 278,168 292,170" fill="#c8560a"/>
                          {/* Piernas */}
                          <line x1="195" y1="218" x2="185" y2="245" stroke="#c8560a" strokeWidth="4" strokeLinecap="round"/>
                          <line x1="205" y1="218" x2="215" y2="245" stroke="#c8560a" strokeWidth="4" strokeLinecap="round"/>
                        </g>
                        {/* Venado */}
                        <g opacity="0.75" stroke="#8b3a00" strokeWidth="2" fill="none">
                          <ellipse cx="420" cy="220" rx="30" ry="18" fill="#9b4500" opacity="0.7"/>
                          <line x1="435" y1="205" x2="455" y2="190" strokeWidth="3"/>
                          {/* Astas */}
                          <line x1="455" y1="190" x2="448" y2="175"/>
                          <line x1="455" y1="190" x2="462" y2="178"/>
                          <line x1="448" y1="175" x2="443" y2="168"/>
                          <line x1="448" y1="175" x2="453" y2="169"/>
                          {/* Patas */}
                          <line x1="405" y1="235" x2="400" y2="258"/>
                          <line x1="415" y1="237" x2="412" y2="260"/>
                          <line x1="430" y1="237" x2="428" y2="260"/>
                          <line x1="440" y1="235" x2="438" y2="258"/>
                        </g>
                        {/* Mano negativa (huella) */}
                        <g opacity="0.6">
                          <circle cx="580" cy="160" r="35" fill="#3a0000" opacity="0.5"/>
                          <path d="M565,155 Q556,140 560,130 Q564,120 570,130 Q572,118 578,128 Q582,116 588,126 Q594,116 598,128 Q602,140 595,155 Q580,165 565,155 Z" fill="#2a0000" opacity="0.7"/>
                        </g>
                        {/* Símbolos solares */}
                        <g opacity="0.5" stroke="#c8560a" strokeWidth="1.5" fill="none">
                          <circle cx="650" cy="90" r="18"/>
                          <line x1="650" y1="65" x2="650" y2="115"/>
                          <line x1="625" y1="90" x2="675" y2="90"/>
                          <line x1="633" y1="73" x2="667" y2="107"/>
                          <line x1="667" y1="73" x2="633" y2="107"/>
                        </g>
                        {/* Puntos rituales */}
                        {[100, 160, 320, 500, 560, 700, 730].map((x, i) => (
                          <circle key={i} cx={x} cy={80 + (i % 3) * 20} r="3" fill="#c8560a" opacity="0.4 "/>
                        ))}
                        {/* Scan lines de cueva */}
                        {Array.from({length: 45}).map((_, i) => (
                          <line key={i} x1="0" y1={i * 10} x2="800" y2={i * 10} stroke="#000" strokeWidth="0.5" opacity="0.15"/>
                        ))}
                        {/* Viñeta */}
                        <rect width="800" height="450" fill="url(#caveLight)" opacity="0.4"/>
                      </svg>
                      {/* Texto soberano sobre el SVG */}
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="text-[10px] text-[#c8560a]/70 font-mono uppercase tracking-[0.3em] bg-black/60 px-3 py-1">
                          [ MURAL PROCEDURAL — MEMORIA TRAZADA ]
                        </span>
                      </div>
                    </div>
                  );
                }

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
                      e.currentTarget.style.filter = 'grayscale(1) brightness(0.2)';
                      console.error('IMAGEN FAIL');
                    }}
                  />
                );
              })()}
              <div className="absolute bottom-4 right-4 text-[10px] text-[#00FF00] font-mono opacity-60 bg-black/80 px-3 py-1 border border-[#00FF00]/30 backdrop-blur group-hover:opacity-100 transition-opacity">
                [ RENDERIZADO {imagenBase64 ? 'NATIVO' : 'RUPESTRE'} ]
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
