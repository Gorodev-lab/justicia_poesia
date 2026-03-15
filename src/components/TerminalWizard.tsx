import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Option {
  label: string;
  nextStep: number | string;
}

interface Step {
  text: string;
  options: Option[];
}

const WIZARD_STEPS: Record<string, Step> = {
  '0': {
    text: "Iniciando Huchití OS v1.0.0...\nCargando módulos de memoria ancestral... [OK]\nMontando sistema de archivos lingüístico... [OK]\n\nBienvenido al Proyecto Huchití.\n¿Deseas iniciar la secuencia de sincronización?",
    options: [
      { label: "Iniciar sincronización", nextStep: '1' },
      { label: "Abortar secuencia", nextStep: '-1' }
    ]
  },
  '1': {
    text: "Sincronización iniciada.\nEstableciendo conexión con el Archivo Vivo...\n\nADVERTENCIA: Registros fonéticos originales no encontrados.\nINFO: Módulo de simulación acústica disponible.\n\nSelecciona el módulo de destino:",
    options: [
      { label: "Simular registros fonéticos originales", nextStep: '5' },
      { label: "Cargar Minijuego (Ho-Cangleska)", nextStep: '2' },
      { label: "Acceder al Archivo Vivo", nextStep: '3' },
      { label: "Sintetizar Frases (Constructor)", nextStep: '4' }
    ]
  },
  '2': {
    text: "Cargando entorno interactivo Ho-Cangleska...\nInicializando interfaz táctil... [OK]\nCargando paquetes de audio... [OK]\n\nEl sistema está listo. Que las voces te guíen.",
    options: [
      { label: "Ejecutar Minijuego", nextStep: 'juego' }
    ]
  },
  '3': {
    text: "Accediendo a la base de datos de vocablos...\nDesencriptando significados...\n\nMódulo de Archivo Vivo listo para consulta.",
    options: [
      { label: "Abrir Archivo Vivo", nextStep: 'archivo' },
      { label: "Volver al menú principal", nextStep: '1' }
    ]
  },
  '4': {
    text: "Iniciando módulo de síntesis descriptiva...\nCargando modelos de lenguaje generativo... [OK]\nEstableciendo parámetros de morfología lakota... [OK]\n\nConstructor de frases listo para recibir entrada.",
    options: [
      { label: "Abrir Constructor de Frases", nextStep: 'constructor' },
      { label: "Volver al menú principal", nextStep: '1' }
    ]
  },
  '5': {
    text: "Inicializando motor de reconstrucción acústica...\nAnalizando crónicas jesuitas del siglo XVIII... [OK]\nExtrapolando patrones fonológicos pericúes y guaicuras... [OK]\nSintetizando formantes vocálicos... [OK]\n\nRESULTADO: Registros fonéticos originales simulados con 87.4% de precisión teórica.\nLas voces han sido inyectadas en los módulos principales.",
    options: [
      { label: "Volver al menú principal", nextStep: '1' }
    ]
  },
  '-1': {
    text: "Secuencia abortada. Apagando el sistema...\n[Proceso terminado]\n\nPuedes reiniciar el sistema cuando estés listo.",
    options: [
      { label: "Reiniciar sistema", nextStep: '0' }
    ]
  }
};

interface TerminalWizardProps {
  onComplete: (tab: 'archivo' | 'generador' | 'juego' | 'constructor') => void;
}

export default function TerminalWizard({ onComplete }: TerminalWizardProps) {
  const [currentStep, setCurrentStep] = useState<string>('0');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    setDisplayedText('');
    const text = WIZARD_STEPS[currentStep].text;
    
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25); // Velocidad de escritura (ms por caracter)
    
    return () => clearInterval(interval);
  }, [currentStep]);

  const handleOptionClick = (nextStep: string | number) => {
    if (isTyping) return;
    const stepStr = String(nextStep);
    if (stepStr === 'juego' || stepStr === 'archivo' || stepStr === 'generador' || stepStr === 'constructor') {
      onComplete(stepStr as 'archivo' | 'generador' | 'juego' | 'constructor');
    } else {
      setCurrentStep(stepStr);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00FF00] font-mono p-6 md:p-12 flex flex-col selection:bg-[#00FF00] selection:text-black z-50 relative">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-6 opacity-70 text-sm md:text-base">
          <span className="text-[#00FF00]">root@huchiti:~#</span> <span className="ml-2 text-gray-300">./init_sequence.sh</span>
        </div>
        
        <div className="whitespace-pre-wrap leading-relaxed mb-8 text-sm md:text-base text-gray-200">
          {displayedText}
          <span className="inline-block w-2.5 h-5 bg-[#00FF00] align-middle ml-1 animate-terminal-blink" />
        </div>

        {!isTyping && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start gap-2"
          >
            {WIZARD_STEPS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt.nextStep)}
                className="group relative w-full max-w-lg text-left px-4 py-3 border border-transparent hover:border-[#00FF00] hover:bg-[#00FF00]/5 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] focus:border-[#00FF00] focus:bg-[#00FF00]/5 focus:shadow-[0_0_15px_rgba(0,255,0,0.2)] active:bg-[#00FF00]/20 active:scale-[0.99] transition-all duration-300 focus:outline-none rounded-sm"
              >
                <span className="opacity-50 group-hover:opacity-100 group-focus:opacity-100 mr-3 text-[#00FF00] transition-opacity">
                  [root@huchiti ~]#
                </span>
                <span className="text-[#00FF00] group-hover:text-[#fff] group-focus:text-[#fff] font-bold transition-colors group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] group-focus:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]">
                  {opt.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
