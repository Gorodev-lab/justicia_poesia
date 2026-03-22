import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronDown, ChevronUp, Globe, Layers, Hash, MapPin, Sparkles } from 'lucide-react';

// ── Datos del Glosario Uchití ──────────────────────────────────────────

const SISTEMA_FONOLOGICO = [
  { cat: 'Vocales', det: '5 vocales + 2 vocales dobles' },
  { cat: 'Consonantes', det: '14 consonantes + /tsch/ [ch] + dos dobles: /nn/, /mm/' },
  { cat: 'Inexistentes', det: 'F, G, L, X, Z' },
  { cat: 'Orden sintáctico', det: 'SOV (Sujeto-Objeto-Verbo)' },
  { cat: 'Sílabas', det: 'CV / CVV' },
  { cat: 'Acento', det: 'Llano' },
];

const PRONOMBRES = [
  { u: 'Be', e: 'Yo' }, { u: 'Eï', e: 'Tú' }, { u: 'Rutau / Tutau', e: 'Él' },
  { u: 'Caté', e: 'Nosotros' }, { u: 'Pete', e: 'Ustedes' }, { u: 'Tucáva', e: 'Ellos / Ella' },
];

const POSESIVOS = [
  { p: 'Mío', f: 'Be, Me, mi, m' }, { p: 'Tuyo', f: 'Ei, e, et' },
  { p: 'Suyo', f: 'T, ti, titsh' }, { p: 'Nuestro', f: 'Kepe, Kepé' },
];

const SUFIJOS_TEMPORALES = [
  { t: 'Presente', s: '-re, -reke', color: '#00ff88' },
  { t: 'Pasado', s: '-rujére, -raupe, -raúpere, -ríkiri', color: '#ff6600' },
  { t: 'Futuro', s: '-me, -meje, -éneme', color: '#00ccff' },
];

const CONJUGACIONES = [
  { raiz: 'Amukiri', esp: 'Jugar', pres: 'Amukirire', pas: 'Amukirikiri', fut: 'Amukirime' },
  { raiz: 'Atú', esp: 'Tener', pres: 'Atúre', pas: 'Atúrujére', fut: 'Atúmeje' },
  { raiz: 'Cuvu', esp: 'Querer', pres: 'Cuvure', pas: 'Cuvurujére', fut: 'Cuvume' },
  { raiz: 'Éte', esp: 'Ser/Estar', pres: 'Étere', pas: 'Éterujére', fut: 'Étemeje' },
  { raiz: 'Kên', esp: 'Dar', pres: 'Kenre', pas: 'Kenríkiri', fut: 'Kenme' },
  { raiz: 'Umutú', esp: 'Pensar', pres: 'Umutúre', pas: 'Umutúrujére', fut: 'Umutúmeje' },
  { raiz: 'Tuja', esp: 'Hacer', pres: 'Tujake', pas: 'Tujaríkiri', fut: 'Tujame' },
  { raiz: 'Pibi', esp: 'Morir', pres: 'Pibire', pas: 'Pibirikiri', fut: 'Pibime' },
  { raiz: 'Kukanja', esp: 'Proteger', pres: 'Kukanjare', pas: 'Kukanjaraupe', fut: 'Kukanjame' },
  { raiz: 'Tikakambá', esp: 'Ayudar', pres: 'Tikakambáre', pas: 'Tikakambárujére', fut: 'Tikakambámeje' },
];

const ADJETIVOS = [
  { u: 'Apánne', e: 'Grande', neg: 'Apánnera', negE: 'No grande' },
  { u: 'Atacámma', e: 'Buenos', neg: 'Atacámmara', negE: 'Malos' },
  { u: 'Cuncari', e: 'Mucho', neg: 'Cuncarira', negE: 'No mucho' },
  { u: 'Pari', e: 'Mucho', neg: 'Parira', negE: 'Poco' },
];

const REGLAS_MORFO = [
  { r: 'Negación', m: 'Sufijo -ra o -ja', ej: 'Atacámma → Atacámmara' },
  { r: 'Plural verbal', m: 'Prefijo k- o ku-', ej: 'Umutú → Kumutú' },
  { r: 'Posesión inalienable', m: 'Prefijos be-/e-/kepe-', ej: 'Áre → Bedáre' },
  { r: 'D/T eufónica', m: 'Cuando sustantivo empieza con vocal', ej: 'Áre → Dáre' },
];

const ENTIDADES = [
  { v: 'Guamongo', s: 'Espíritu del norte, creador' },
  { v: 'Gujiaqui', s: 'Espíritu enviado por Guamongo' },
  { v: 'Diocuinocho', s: 'Chamán' },
  { v: 'Taniti', s: 'Chamán' },
  { v: 'Emma', s: 'Demonio' },
  { v: 'Tiyeicha', s: 'Vara ceremonial ("puede hablar")' },
  { v: 'Joeminini Generis', s: 'Ave mitológica' },
];

const TOPONIMOS = [
  { u: 'Airapí', l: 'Bahía de La Paz' }, { u: 'Chirigaki', l: 'San Luis Gonzaga' },
  { u: 'Conchó', l: 'Loreto (mangle rojo)' }, { u: 'Tiá', l: 'Lugar de patos' },
  { u: 'Tiguana', l: '—' }, { u: 'Asembavichi', l: '—' },
];

const BANDAS = ['Uchití', 'Aripes', 'Callejúes', 'Cubíes', 'Ikas', 'Monquí', 'Cochimí'];

const VOCABULARIO: { letra: string; items: { v: string; s: string }[] }[] = [
  { letra: 'A', items: [
    { v: 'Aëna', s: 'Arriba, Cielo' }, { v: 'Agénari', s: 'Una danza' },
    { v: 'Airapí', s: 'Bahía de La Paz' }, { v: 'Akúnju', s: 'Tres' },
    { v: 'Anaï', s: 'Mujer' }, { v: 'Apánne', s: 'Grande' }, { v: 'Áre', s: 'Padre' },
    { v: 'Ambúja', s: 'Semana / casa' }, { v: 'Amukiri', s: 'Jugar' },
  ]},
  { letra: 'B', items: [
    { v: 'Be', s: 'Yo, mi, mío' }, { v: 'Bécue', s: 'Mi madre' },
    { v: 'Bedáre', s: 'Mi padre' }, { v: 'Búe', s: 'Alimento' }, { v: 'Búnju', s: 'Abajo' },
  ]},
  { letra: 'C', items: [
    { v: 'Caté', s: 'Nosotros' }, { v: 'Cochimí', s: 'Gente del norte' },
    { v: 'Conchó', s: 'Loreto' }, { v: 'Cuncari', s: 'Mucho' }, { v: 'Cue', s: 'Madre' },
  ]},
  { letra: 'D-E', items: [
    { v: 'Dai', s: 'Ser' }, { v: 'Dêi', s: 'Siempre' }, { v: 'Emma', s: 'Demonio' },
    { v: 'Ete', s: 'Hombre' }, { v: 'Epí', s: 'Haber' }, { v: 'Edú', s: 'Gente de otra lengua' },
  ]},
  { letra: 'G-K', items: [
    { v: 'Guamongo', s: 'Espíritu creador' }, { v: 'Jake', s: 'Platicar' },
    { v: 'Jaûpe', s: 'Aquí' }, { v: 'Kêa', s: 'Está bajo tierra' },
    { v: 'Kenyei', s: 'Mezcal' }, { v: 'Kumbáte', s: 'Odiar' }, { v: 'Kuitsharraké', s: 'Perdonar' },
  ]},
  { letra: 'M-P', items: [
    { v: 'Matanamu', s: 'Serpiente coralillo' }, { v: 'Notú', s: 'Cielo / en alto' },
    { v: 'Payró', s: 'Gracias' }, { v: 'Pibi', s: 'Morir' }, { v: 'Pu', s: 'Todos' },
    { v: 'Púa', s: 'Embarcación' }, { v: 'Pui', s: 'Agave' },
  ]},
  { letra: 'T-V', items: [
    { v: 'Tanía', s: 'Palabra' }, { v: 'Tepeka', s: 'Andar' },
    { v: 'Tikakambá', s: 'Ayudar' }, { v: 'Tiyeicha', s: 'Vara ceremonial' },
    { v: 'Tscha', s: 'Útil / sabio' }, { v: 'Tschumuge', s: 'Besar' },
    { v: 'Umutú', s: 'Pensar' }, { v: 'Vára', s: 'Nada / no' },
  ]},
];

// ── Componentes auxiliares ──────────────────────────────────────────────

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; id: string }> = ({ icon, title, id }) => (
  <div id={id} className="flex items-center gap-3 mb-6 border-b border-dashed border-[var(--border)] pb-3">
    <div className="w-8 h-8 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center flex-shrink-0">{icon}</div>
    <h2 className="text-lg font-bold uppercase tracking-[0.15em]">{title}</h2>
  </div>
);

const CollapsibleSection: React.FC<{ icon: React.ReactNode; title: string; id: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ icon, title, id, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border border-[var(--border)] bg-[var(--card-bg)] mb-6">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-[var(--accent-soft)] transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center flex-shrink-0 text-xs">{icon}</div>
          <span className="text-sm font-bold uppercase tracking-[0.12em]">{title}</span>
        </div>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div id={id} className="p-5 border-t border-[var(--border)]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const MiniTable: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-xs font-mono border-collapse">
      <thead>
        <tr>{headers.map((h, i) => <th key={i} className="text-left p-2 border-b border-[var(--accent)] text-[var(--accent)] uppercase tracking-widest text-[10px] font-bold">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className="hover:bg-[var(--accent-soft)] transition-colors">
            {row.map((cell, ci) => <td key={ci} className={`p-2 border-b border-[var(--border)] ${ci === 0 ? 'font-bold text-[var(--accent)]' : 'opacity-80'}`}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ── Componente Principal ────────────────────────────────────────────────

export const GlosarioInfografia: React.FC = () => {
  const [vocabFilter, setVocabFilter] = useState('');

  return (
    <motion.div key="glosario" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
      {/* Hero Banner */}
      <div className="border border-[var(--accent)] p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, var(--accent), var(--accent) 1px, transparent 1px, transparent 3px)' }} />
        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-2">Anexo Infográfico — Proyecto Datembà</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">GLOSARIO DE LA LENGUA <span className="text-[var(--accent)]">UCHITÍ</span></h1>
          <p className="text-xs opacity-60 max-w-2xl leading-relaxed">
            Compilado a partir de <em>El Uchití y sus reglas</em> — observaciones de Juan Jacobo Baegert (1751–1768) y Francisco Pimentel. Ref: Zamponi 2004.
          </p>
          <div className="mt-4 flex gap-6 text-[10px] uppercase tracking-[0.2em] opacity-40">
            <span>▸ Lengua Guaycura</span><span>▸ Península de Baja California</span><span>▸ ~1894 últimos hablantes</span>
          </div>
        </div>
      </div>

      {/* Contexto Histórico */}
      <div className="border-l-2 border-[var(--accent)] pl-5 mb-8 py-2">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--accent)] mb-2">Contexto Histórico</p>
        <p className="text-xs opacity-70 leading-relaxed">
          Se presume que en <strong>1894</strong> murieron los últimos hablantes de la lengua autóctona de la media Península. Desde 1800 la población se diezmó por enfermedades importadas y la rebelión indígena de 1734. El adoctrinamiento misional, el bautismo y la subordinación al sistema misional terminaron por desaparecer la lengua y la cultura.
        </p>
      </div>

      {/* Grid de secciones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sistema Fonológico */}
        <div className="border border-[var(--border)] p-5">
          <SectionHeader icon={<Layers size={16} />} title="Sistema Fonológico" id="sec-fono" />
          <div className="space-y-2">
            {SISTEMA_FONOLOGICO.map((s, i) => (
              <div key={i} className="flex gap-3 text-xs">
                <span className="font-bold text-[var(--accent)] min-w-[110px]">{s.cat}</span>
                <span className="opacity-70">{s.det}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pronombres Personales */}
        <div className="border border-[var(--border)] p-5">
          <SectionHeader icon={<Hash size={16} />} title="Pronombres Personales" id="sec-pron" />
          <div className="grid grid-cols-2 gap-2">
            {PRONOMBRES.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-xs p-2 border border-[var(--border)] hover:bg-[var(--accent-soft)] transition-colors">
                <span className="font-bold text-[var(--accent)]">{p.u}</span>
                <span className="opacity-50">→</span>
                <span className="opacity-70">{p.e}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--accent)] mb-2">Posesivos</p>
            {POSESIVOS.map((p, i) => (
              <div key={i} className="flex gap-3 text-xs mb-1">
                <span className="font-bold min-w-[60px]">{p.p}:</span>
                <span className="opacity-70">{p.f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sistema Verbal — Infografía de sufijos temporales */}
      <section className="border border-[var(--accent)] p-6 mb-8">
        <SectionHeader icon={<Sparkles size={16} />} title="El Verbo — Sufijos Temporales" id="sec-verb" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {SUFIJOS_TEMPORALES.map((st, i) => (
            <div key={i} className="text-center p-4 border border-[var(--border)] relative">
              <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: st.color }} />
              <p className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: st.color }}>{st.t}</p>
              <p className="text-sm font-bold">{st.s}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] opacity-50 mb-4">* En plural, en algunos casos se antepone <strong>k</strong> o <strong>ku</strong>: Umutú → Kumutú (pensadores)</p>
        <CollapsibleSection icon="⚙" title="Tabla de Conjugación Completa" id="sec-conj">
          <MiniTable
            headers={['Raíz', 'Español', 'Presente', 'Pasado', 'Futuro']}
            rows={CONJUGACIONES.map(c => [c.raiz, c.esp, c.pres, c.pas, c.fut])}
          />
        </CollapsibleSection>
      </section>

      {/* Adjetivos + Reglas Morfológicas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <CollapsibleSection icon="±" title="Adjetivos y Negación (-ra / -ja)" id="sec-adj" defaultOpen>
          <MiniTable
            headers={['Uchití', 'Español', 'Negación', 'Significado']}
            rows={ADJETIVOS.map(a => [a.u, a.e, a.neg, a.negE])}
          />
        </CollapsibleSection>
        <CollapsibleSection icon="⟁" title="Reglas Morfológicas Clave" id="sec-morfo" defaultOpen>
          <div className="space-y-3">
            {REGLAS_MORFO.map((r, i) => (
              <div key={i} className="p-3 border border-[var(--border)] text-xs">
                <span className="font-bold text-[var(--accent)]">{r.r}</span>
                <span className="opacity-50 mx-2">|</span>
                <span className="opacity-70">{r.m}</span>
                <p className="mt-1 text-[var(--accent)] opacity-80">{r.ej}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      </div>

      {/* Entidades Espirituales + Topónimos + Bandas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-[var(--border)] p-5">
          <SectionHeader icon={<Globe size={16} />} title="Entidades Espirituales" id="sec-ent" />
          <div className="space-y-2">
            {ENTIDADES.map((e, i) => (
              <div key={i} className="text-xs">
                <span className="font-bold text-[var(--accent)]">{e.v}</span>
                <span className="opacity-50 mx-1">—</span>
                <span className="opacity-70">{e.s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[var(--border)] p-5">
          <SectionHeader icon={<MapPin size={16} />} title="Topónimos" id="sec-topo" />
          <div className="space-y-2">
            {TOPONIMOS.map((t, i) => (
              <div key={i} className="text-xs flex gap-2">
                <span className="font-bold text-[var(--accent)] min-w-[90px]">{t.u}</span>
                <span className="opacity-70">{t.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[var(--border)] p-5">
          <SectionHeader icon={<Layers size={16} />} title="Bandas Guaycuras" id="sec-band" />
          <div className="flex flex-wrap gap-2">
            {BANDAS.map((b, i) => (
              <span key={i} className="px-3 py-1 border border-[var(--accent)] text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors cursor-default">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Vocabulario General — Búsqueda interactiva */}
      <section className="border border-[var(--accent)] p-6 mb-8">
        <SectionHeader icon={<BookOpen size={16} />} title="Vocabulario General (A–V)" id="sec-vocab" />
        <div className="relative mb-5">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--accent)] opacity-70 font-bold text-sm">{'>'}</span>
          <input
            type="text"
            placeholder="Filtrar vocablo..."
            value={vocabFilter}
            onChange={(e) => setVocabFilter(e.target.value)}
            className="w-full bg-[var(--input-bg)] border border-[var(--border)] py-3 pl-8 pr-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all text-sm font-mono"
          />
        </div>
        <div className="space-y-4">
          {VOCABULARIO.map((grupo) => {
            const filtered = grupo.items.filter(it =>
              it.v.toLowerCase().includes(vocabFilter.toLowerCase()) ||
              it.s.toLowerCase().includes(vocabFilter.toLowerCase())
            );
            if (vocabFilter && filtered.length === 0) return null;
            return (
              <div key={grupo.letra}>
                <p className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2 border-b border-dashed border-[var(--border)] pb-1">[{grupo.letra}]</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                  {(vocabFilter ? filtered : grupo.items).map((it, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs p-2 hover:bg-[var(--accent-soft)] transition-colors">
                      <span className="font-bold text-[var(--accent)]">{it.v}</span>
                      <span className="opacity-40">→</span>
                      <span className="opacity-70">{it.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer del glosario */}
      <div className="text-center py-6 opacity-40">
        <p className="text-[10px] uppercase tracking-[0.3em]">
          Fuentes: Juan Jacobo Baegert (1751–1768) · Francisco Pimentel · Zamponi (2004)
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] mt-1">
          Compilación del Proyecto Datembà / Uchití OS
        </p>
      </div>
    </motion.div>
  );
};
