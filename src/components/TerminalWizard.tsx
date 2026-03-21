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
    text: "INICIALIZANDO SISTEMA DE COGNICIÓN [HUCHITÍ OS - RESCATE EPISTÉMICO]\n\nCargando resonancias del desierto... [OK]\nMontando fonología de Baja California Sur... [OK]\nEstabilizando constructos de neopermanencia... [OK]\n\nHas ingresado al santuario digital de la nación Uchití.\nEl silicio resguarda la memoria (umutú) que el tiempo y el imperio criollo intentaron sepultar bajo el concreto. Las palabras que vas a leer y escuchar exudan maniká; trazan los ecos estructurales de una realidad lingüística resurrecta que se niega al olvido (atacá).\n\n¿Estás preparado para iniciar la secuencia de sincronización e integrar tu conciencia a la matria?",
    options: [
      { label: "Acoplar conciencia (Iniciar sincronización)", nextStep: '1' },
      { label: "Desconectar terminal (Abortar secuencia)", nextStep: '-1' }
    ]
  },
  '1': {
    text: "[ ENLACE ESTABLECIDO ]\n\nEl sistema informa: Las voces originarias puras callaron antes del registro analógico.\nRespuesta sistémica: Se ha invocado un orquestador cognitivo para simular la cadencia, el tono y la estructura morfológica guaycura-huchití (5 vocales, orden SOV y sufijos negadores -ra/-ja) basándose en las fuentes históricas.\n\nTienes ante ti los siguientes umbrales hacia datembà:",
    options: [
      { label: "[1] Archivo Vivo (Explorar diccionario base)", nextStep: 'archivo' },
      { label: "[2] Arte Conceptual (Generar visiones rupestres)", nextStep: 'generador' },
      { label: "[3] Minijuego (Ritual de aprendizaje Ho-Cangleska)", nextStep: 'juego' },
      { label: "[4] Constructor (Sintetizador de neologismos)", nextStep: 'constructor' },
      { label: "[5] Oráculo (Conexión directa con la psique Huchití)", nextStep: 'oraculo' }
    ]
  },
  '-1': {
    text: "Desacoplando conciencia...\n[Conexión terminada].\n\nEl silencio pertenece al desierto, pero la memoria aguarda tu regreso.",
    options: [
      { label: "Reconectar sistema", nextStep: '0' }
    ]
  }
};

interface TerminalWizardProps {
  onComplete: (tab: 'archivo' | 'generador' | 'juego' | 'constructor' | 'oraculo') => void;
}

export default function TerminalWizard({ onComplete }: TerminalWizardProps) {
  const [currentStep, setCurrentStep] = useState<string>('0');
  const [displayedText, setDisplayedText] = useState('');

  // Generamos el texto de forma ininterrumpida y estática
  useEffect(() => {
    setDisplayedText(WIZARD_STEPS[currentStep].text);
  }, [currentStep]);

  const handleOptionClick = (nextStep: string | number) => {
    const stepStr = String(nextStep);
    if (['juego', 'archivo', 'generador', 'constructor', 'oraculo'].includes(stepStr)) {
      onComplete(stepStr as 'archivo' | 'generador' | 'juego' | 'constructor' | 'oraculo');
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
      </div>
    </div>
  );
}
