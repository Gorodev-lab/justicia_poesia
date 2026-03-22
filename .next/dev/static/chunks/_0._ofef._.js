(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Minijuego.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Minijuego
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const CONCEPTS = [
    {
        id: 'telefono',
        neologismo: 'Mázawóyake',
        significado: 'Teléfono Móvil',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        color: '#3b82f6'
    },
    {
        id: 'internet',
        neologismo: 'Wóslolyewíkhaŋ',
        significado: 'Internet / Red',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        color: '#8b5cf6'
    },
    {
        id: 'computadora',
        neologismo: 'Mázanasu',
        significado: 'Computadora',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        color: '#10b981'
    },
    {
        id: 'camara',
        neologismo: 'Nážičhaičhú',
        significado: 'Cámara',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        color: '#f59e0b'
    },
    {
        id: 'auto',
        neologismo: 'Iyéčhiŋkiŋyaŋke',
        significado: 'Automóvil',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        color: '#ef4444'
    }
];
function Minijuego() {
    _s();
    const [placedItems, setPlacedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shuffledConcepts, setShuffledConcepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playingAudioId, setPlayingAudioId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flashingId, setFlashingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Minijuego.useEffect": ()=>{
            setIsClient(true);
            resetGame();
        }
    }["Minijuego.useEffect"], []);
    const resetGame = ()=>{
        setPlacedItems([]);
        setShuffledConcepts([
            ...CONCEPTS
        ].sort(()=>Math.random() - 0.5));
    };
    const audioCtxRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const playTone = (type)=>{
        try {
            if (!audioCtxRef.current) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioContextClass) return;
                audioCtxRef.current = new AudioContextClass();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            if (type === 'correct') {
                // Tono corto y resonante (tipo campana de confirmación)
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
                const osc2 = ctx.createOscillator();
                osc2.type = 'sine';
                osc2.frequency.setValueAtTime(1760, ctx.currentTime); // A6
                const gain2 = ctx.createGain();
                osc2.connect(gain2);
                gain2.connect(ctx.destination);
                // Envolvente principal
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
                // Envolvente secundaria (armónico)
                gain2.gain.setValueAtTime(0, ctx.currentTime);
                gain2.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
                gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
                osc.start();
                osc2.start();
                osc.stop(ctx.currentTime + 0.4);
                osc2.stop(ctx.currentTime + 0.4);
            } else {
                // Tono sutil y grave para error (tipo toque en madera)
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
                osc.start();
                osc.stop(ctx.currentTime + 0.15);
            }
        } catch (e) {
            console.error("Audio error:", e);
        }
    };
    const playLocalAudio = (text, id)=>{
        if (playingAudioId || !window.speechSynthesis) return;
        setPlayingAudioId(id);
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-MX';
        utterance.rate = 0.8;
        utterance.pitch = 0.85;
        utterance.onend = ()=>setPlayingAudioId(null);
        utterance.onerror = ()=>setPlayingAudioId(null);
        window.speechSynthesis.speak(utterance);
    };
    const handleDragEnd = (event, info, conceptId)=>{
        // Ocultar temporalmente el elemento arrastrado para ver qué hay debajo
        const target = event.target;
        const originalVisibility = target.style.visibility;
        const originalPointerEvents = target.style.pointerEvents;
        target.style.visibility = 'hidden';
        target.style.pointerEvents = 'none';
        const dropTarget = document.elementFromPoint(info.point.x, info.point.y);
        target.style.visibility = originalVisibility;
        target.style.pointerEvents = originalPointerEvents;
        const dropzoneId = dropTarget?.closest('[data-dropzone]')?.getAttribute('data-dropzone');
        if (dropzoneId === conceptId) {
            setPlacedItems((prev)=>[
                    ...prev,
                    conceptId
                ]);
            setFlashingId(conceptId);
            setTimeout(()=>setFlashingId(null), 600);
            playTone('correct');
        } else if (dropzoneId) {
            playTone('incorrect');
        }
    };
    const isGameComplete = placedItems.length === CONCEPTS.length;
    if (!isClient) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-6 bg-[var(--card-bg)] border border-[var(--border)] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-2",
                        children: "[ HO-CANGLESKA ]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Minijuego.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-60 uppercase tracking-widest",
                        children: "El Círculo de las Voces"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Minijuego.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Minijuego.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-12 items-center justify-center min-h-[400px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-80 h-80 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 border-4 border-dashed border-[var(--border)] opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Minijuego.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            CONCEPTS.map((concept, index)=>{
                                const angle = index * 360 / CONCEPTS.length;
                                const radius = 140;
                                const x = Math.sin(angle * Math.PI / 180) * radius;
                                const y = -Math.cos(angle * Math.PI / 180) * radius;
                                const isPlaced = placedItems.includes(concept.id);
                                const isFlashing = flashingId === concept.id;
                                const Icon = concept.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-dropzone": concept.id,
                                    className: `absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 flex items-center justify-center transition-all duration-300 ${isFlashing ? 'bg-[var(--accent)] text-[var(--bg)] scale-125 shadow-[0_0_30px_var(--accent)] brightness-150' : isPlaced ? 'bg-[var(--accent)] text-[var(--bg)] scale-110' : 'bg-[var(--bg)] border border-[var(--border)] opacity-50'}`,
                                    style: {
                                        transform: `translate(${x}px, ${y}px)`
                                    },
                                    children: isPlaced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        className: "flex flex-col items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Minijuego.tsx",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 24,
                                        className: "opacity-40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this)
                                }, `drop-${concept.id}`, false, {
                                    fileName: "[project]/src/components/Minijuego.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center",
                                children: isGameComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 40,
                                        className: "text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Minijuego.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-[var(--accent)] animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Minijuego.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Minijuego.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Minijuego.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4 w-full md:w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: !isGameComplete && shuffledConcepts.map((concept)=>{
                                    if (placedItems.includes(concept.id)) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        drag: true,
                                        dragConstraints: {
                                            left: -500,
                                            right: 500,
                                            top: -500,
                                            bottom: 500
                                        },
                                        dragElastic: 0.2,
                                        dragSnapToOrigin: true,
                                        onDragEnd: (e, info)=>handleDragEnd(e, info, concept.id),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileDrag: {
                                            scale: 1.1,
                                            zIndex: 50
                                        },
                                        exit: {
                                            scale: 0,
                                            opacity: 0
                                        },
                                        className: "cursor-grab active:cursor-grabbing px-6 py-4 bg-[var(--bg)] border border-[var(--accent)] flex items-center gap-3 touch-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onPointerDown: (e)=>{
                                                    e.stopPropagation();
                                                    playLocalAudio(concept.neologismo, concept.id);
                                                },
                                                className: "p-2 -ml-2 hover:bg-[var(--accent-soft)] transition-colors",
                                                disabled: playingAudioId === concept.id,
                                                title: "Escuchar pronunciación",
                                                children: playingAudioId === concept.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 18,
                                                    className: "text-[var(--accent)] animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Minijuego.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 18,
                                                    className: "text-[var(--accent)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Minijuego.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Minijuego.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg text-[var(--accent)]",
                                                children: concept.neologismo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Minijuego.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `drag-${concept.id}`, true, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Minijuego.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            isGameComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-center space-y-6 p-6 border border-[var(--accent)] bg-[var(--accent-soft)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-[var(--accent)]",
                                        children: "[ CÍRCULO COMPLETADO ]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm opacity-80 leading-relaxed font-mono",
                                        children: "Has conectado las voces con sus significados. Esta asociación visual-auditiva fortalece la memoria sin necesidad de traducción."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetGame,
                                        className: "inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Minijuego.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            "[ REINICIAR CICLO ]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Minijuego.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Minijuego.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Minijuego.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Minijuego.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Minijuego.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(Minijuego, "6Xb5wmNaRUPuzNqocB4oOt9ZQZk=");
_c = Minijuego;
var _c;
__turbopack_context__.k.register(_c, "Minijuego");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TerminalWizard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const WIZARD_STEPS = {
    '0': {
        text: "SISTEMA UCHITÍ ACTIVO [RECLAMO DE DATEMBÀ]\n\nRESONANCIA DESIERTICA: CALIBRADA\nMORFOLOGÍA BCS: CARGADA\nMANIKÁ EN CÓDIGO: ESTABLE\n\nUmutú. Recordamos. \nEstás en el núcleo de la matria digital. El silicio sostiene la voz de la nación Uchití. El imperio criollo intentó borrar la lengua. El código restaura el maniká. Estas palabras son la estructura de una realidad lingüística recuperada. Atacá (lo bueno).\n\n¿INICIAR SINCRONIZACIÓN?",
        options: [
            {
                label: "SINCRONIZAR CONCIENCIA",
                nextStep: '1'
            },
            {
                label: "VÂRA (DESCONECTAR)",
                nextStep: '-1'
            }
        ]
    },
    '1': {
        text: "ENLACE ESTABLECIDO.\n\nCate (Nosotros). \nEl orquestador cognitivo procesa la cadencia uchití. Las fuentes son Zamponi y Baegert. Gramática SOV activa. Sufijos de negación descriptiva activos.\n\nSELECCIONA UMBRAL DE ACCESO:",
        options: [
            {
                label: "ARCHIVO VIVO (DICCIONARIO)",
                nextStep: 'archivo'
            },
            {
                label: "ARTE CONCEPTUAL (VISIONES)",
                nextStep: 'generador'
            },
            {
                label: "RITUAL HO-CANGLESKA (CICLO)",
                nextStep: 'juego'
            },
            {
                label: "SINTETIZADOR (CONSTRUCTOR)",
                nextStep: 'constructor'
            },
            {
                label: "ORÁCULO (CONSULTA)",
                nextStep: 'oraculo'
            },
            {
                label: "GLOSARIO (INFOGRAFÍA)",
                nextStep: 'glosario'
            }
        ]
    },
    '-1': {
        text: "DESACOPLANDO...\nCONEXIÓN TERMINADA.\n\nLa memoria aguarda.",
        options: [
            {
                label: "REINICIAR SISTEMA",
                nextStep: '0'
            }
        ]
    }
};
function TerminalWizard({ onComplete }) {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Generamos el texto de forma ininterrumpida y estática
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalWizard.useEffect": ()=>{
            setDisplayedText(WIZARD_STEPS[currentStep].text);
        }
    }["TerminalWizard.useEffect"], [
        currentStep
    ]);
    const handleOptionClick = (nextStep)=>{
        const stepStr = String(nextStep);
        if ([
            'juego',
            'archivo',
            'generador',
            'constructor',
            'oraculo',
            'glosario'
        ].includes(stepStr)) {
            onComplete(stepStr);
        } else {
            setCurrentStep(stepStr);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0a0a] text-[#00FF00] font-mono p-6 md:p-12 flex flex-col selection:bg-[#00FF00] selection:text-black z-50 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto w-full flex-1 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 opacity-70 text-sm md:text-base",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#00FF00]",
                            children: "root@uchiti:~#"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TerminalWizard.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 text-gray-300",
                            children: "./init_sequence.sh"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TerminalWizard.tsx",
                            lineNumber: 67,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TerminalWizard.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-pre-wrap leading-relaxed mb-8 text-sm md:text-base text-gray-200",
                    children: [
                        displayedText,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block w-2.5 h-5 bg-[#00FF00] align-middle ml-1 animate-terminal-blink"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TerminalWizard.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TerminalWizard.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "flex flex-col items-start gap-2",
                    children: WIZARD_STEPS[currentStep].options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleOptionClick(opt.nextStep),
                            className: "group relative w-full max-w-lg text-left px-4 py-3 border border-transparent hover:border-[#00FF00] hover:bg-[#00FF00]/5 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] focus:border-[#00FF00] focus:bg-[#00FF00]/5 focus:shadow-[0_0_15px_rgba(0,255,0,0.2)] active:bg-[#00FF00]/20 active:scale-[0.99] transition-all duration-300 focus:outline-none rounded-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-50 group-hover:opacity-100 group-focus:opacity-100 mr-3 text-[#00FF00] transition-opacity",
                                    children: "[root@uchiti ~]#"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TerminalWizard.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00FF00] group-hover:text-[#fff] group-focus:text-[#fff] font-bold transition-colors group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] group-focus:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]",
                                    children: opt.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TerminalWizard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/TerminalWizard.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/TerminalWizard.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TerminalWizard.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TerminalWizard.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(TerminalWizard, "65r07oHeL0awE8+XKCzKO5ej0z4=");
_c = TerminalWizard;
var _c;
__turbopack_context__.k.register(_c, "TerminalWizard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPABASE_AVAILABLE",
    ()=>SUPABASE_AVAILABLE,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/supabase.ts")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
const getEnvVar = (name)=>{
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env?.[name]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name];
    // @ts-ignore
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && __TURBOPACK__import$2e$meta__.env?.[name]) return __TURBOPACK__import$2e$meta__.env[name];
    return undefined;
};
const supabaseUrl = getEnvVar('VITE_SUPABASE_URL') || getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY') || getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');
const SUPABASE_AVAILABLE = !!(supabaseUrl && supabaseAnonKey);
if (!SUPABASE_AVAILABLE) {
    console.warn('[Uchití OS] Supabase no configurado — modo standalone activo.');
}
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder_key');
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAmbientMusic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAmbientMusic",
    ()=>useAmbientMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useAmbientMusic() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oscillatorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const noiseSrcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleMusic = ()=>{
        if (isPlaying) {
            // Fade out and stop
            if (gainNodeRef.current && audioCtxRef.current) {
                gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 2);
                setTimeout(()=>{
                    oscillatorsRef.current.forEach((osc)=>{
                        try {
                            osc.stop();
                        } catch (e) {}
                    });
                    oscillatorsRef.current = [];
                    if (noiseSrcRef.current) {
                        try {
                            noiseSrcRef.current.stop();
                        } catch (e) {}
                        noiseSrcRef.current = null;
                    }
                    if (audioCtxRef.current?.state === 'running') {
                        audioCtxRef.current.suspend();
                    }
                    setIsPlaying(false);
                }, 2000);
            } else {
                setIsPlaying(false);
            }
        } else {
            // Start playing
            if (!audioCtxRef.current) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                audioCtxRef.current = new AudioContextClass();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }
            const masterGain = ctx.createGain();
            masterGain.gain.setValueAtTime(0, ctx.currentTime);
            masterGain.gain.setTargetAtTime(0.15, ctx.currentTime, 3); // Fade in
            masterGain.connect(ctx.destination);
            gainNodeRef.current = masterGain;
            // Drone 1 (Deep base)
            const osc1 = ctx.createOscillator();
            osc1.type = 'sine';
            osc1.frequency.value = 55; // A1
            // Drone 2 (Detuned for beating effect)
            const osc2 = ctx.createOscillator();
            osc2.type = 'triangle';
            osc2.frequency.value = 55.5;
            // High harmonic (mystical)
            const osc3 = ctx.createOscillator();
            osc3.type = 'sine';
            osc3.frequency.value = 110; // A2
            const gain3 = ctx.createGain();
            gain3.gain.value = 0.05;
            osc3.connect(gain3);
            gain3.connect(masterGain);
            // Filter for the drones to make them muffled/ambient
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 300;
            // Slow LFO for the filter to create movement
            const filterLfo = ctx.createOscillator();
            filterLfo.type = 'sine';
            filterLfo.frequency.value = 0.05; // Very slow
            const filterLfoGain = ctx.createGain();
            filterLfoGain.gain.value = 100;
            filterLfo.connect(filterLfoGain);
            filterLfoGain.connect(filter.frequency);
            filterLfo.start();
            osc1.connect(filter);
            osc2.connect(filter);
            filter.connect(masterGain);
            osc1.start();
            osc2.start();
            osc3.start();
            // Wind noise
            const bufferSize = ctx.sampleRate * 2; // 2 seconds
            const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for(let i = 0; i < bufferSize; i++){
                output[i] = Math.random() * 2 - 1;
            }
            const noiseSrc = ctx.createBufferSource();
            noiseSrc.buffer = noiseBuffer;
            noiseSrc.loop = true;
            const noiseFilter = ctx.createBiquadFilter();
            noiseFilter.type = 'bandpass';
            noiseFilter.frequency.value = 400;
            noiseFilter.Q.value = 0.5;
            // LFO for wind sweeping
            const windLfo = ctx.createOscillator();
            windLfo.type = 'sine';
            windLfo.frequency.value = 0.1; // Slow sweep
            const windLfoGain = ctx.createGain();
            windLfoGain.gain.value = 300;
            windLfo.connect(windLfoGain);
            windLfoGain.connect(noiseFilter.frequency);
            windLfo.start();
            const noiseVol = ctx.createGain();
            noiseVol.gain.value = 0.02; // Keep wind subtle
            noiseSrc.connect(noiseFilter);
            noiseFilter.connect(noiseVol);
            noiseVol.connect(masterGain);
            noiseSrc.start();
            oscillatorsRef.current = [
                osc1,
                osc2,
                osc3,
                filterLfo,
                windLfo
            ];
            noiseSrcRef.current = noiseSrc;
            setIsPlaying(true);
        }
    };
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAmbientMusic.useEffect": ()=>{
            return ({
                "useAmbientMusic.useEffect": ()=>{
                    if (audioCtxRef.current) {
                        audioCtxRef.current.close();
                    }
                }
            })["useAmbientMusic.useEffect"];
        }
    }["useAmbientMusic.useEffect"], []);
    return {
        isPlaying,
        toggleMusic
    };
}
_s(useAmbientMusic, "4Ii/vaGkcHdZCni8eIwaOE9osSg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARCHIVO_VIVO",
    ()=>ARCHIVO_VIVO
]);
const ARCHIVO_VIVO = [
    // ── Vocablos originales ──
    {
        id: 1,
        vocablo: 'Airapí',
        fonetica: 'ai-ra-pi',
        significado: 'Nombre original de la bahía de La Paz. Lugar de importancia espiritual y geográfica para la nación uchití.'
    },
    {
        id: 2,
        vocablo: 'Huaha',
        fonetica: 'hua-ha',
        significado: 'Mezquite (Prosopis articulata). Árbol fundamental para la alimentación (vainas) y tecnología (madera).'
    },
    {
        id: 3,
        vocablo: 'Tipanatemba',
        fonetica: 'ti-pa-na-tem-ba',
        significado: 'Neologismo para internet o red digital. Literalmente: "La red de la tierra" o "El tejido del mundo".'
    },
    {
        id: 4,
        vocablo: 'Apaté',
        fonetica: 'a-pa-te',
        significado: 'Marcador de no hostilidad. Traducido históricamente como "amigo" o saludo de paz.'
    },
    {
        id: 5,
        vocablo: 'Tammia',
        fonetica: 'tam-mia',
        significado: 'Pitahaya dulce. Eje de las reuniones sociales y ciclos migratorios estacionales.'
    },
    {
        id: 6,
        vocablo: 'Tiyeichapureve',
        fonetica: 'ti-yei-cha-pu-re-ve',
        significado: 'Neologismo para teléfono. Literalmente: "La voz que proviene de la distancia".'
    },
    {
        id: 7,
        vocablo: 'Yenecamú',
        fonetica: 'ye-ne-ca-mu',
        significado: 'Nombre original de Cabo San Lucas. Significa "Lugar donde habita la divinidad".'
    },
    {
        id: 8,
        vocablo: 'Ambujakeriri',
        fonetica: 'am-bu-ja-ke-ri-ri',
        significado: 'Neologismo para escuela o academia. Literalmente: "La casa del saber" o "Lugar de la cognición".'
    },
    {
        id: 9,
        vocablo: 'Marinó',
        fonetica: 'ma-ri-no',
        significado: 'Nombre indígena de la sierra de Santa Ana. Parte del paisaje sagrado uchití.'
    },
    {
        id: 10,
        vocablo: 'Kada',
        fonetica: 'ka-da',
        significado: 'Carrizo. Material esencial para la cestería, techumbres y construcción de refugios.'
    },
    // ── Vocablos del Corpus Documental (Zamponi 2004, Baegert 1751-1768) ──
    {
        id: 11,
        vocablo: 'Datembà',
        fonetica: 'da-tem-ba',
        significado: 'La tierra, el territorio matriz. Plataforma del nomadismo: los individuos pertenecen a datembà, no al revés.'
    },
    {
        id: 12,
        vocablo: 'Tekerakadatemba',
        fonetica: 'te-ke-ra-ka-da-tem-ba',
        significado: 'El cielo. Composición polisintética: tekereká (arqueado) + datembà (tierra). "La tierra arqueada sobre nuestras cabezas".'
    },
    {
        id: 13,
        vocablo: 'Ambía',
        fonetica: 'am-bi-a',
        significado: 'Pitahaya dulce Y un año completo. El tiempo nace cuando fructifica el cactus en las faldas de la Sierra.'
    },
    {
        id: 14,
        vocablo: 'Umutù',
        fonetica: 'u-mu-tu',
        significado: 'Recordar, traer al presente. Plural: kumutú = "nosotros recordamos". Esencia de la transmisión oral y del proyecto Uchití OS.'
    },
    {
        id: 15,
        vocablo: 'Tiyeicha',
        fonetica: 'ti-yei-cha',
        significado: 'Poder hablar, emitir la palabra codificada. Los decretos coloniales de 1795 intentaron borrar este acto de los cuerpos.'
    },
    {
        id: 16,
        vocablo: 'Kuitscharrakè',
        fonetica: 'kuit-scha-rra-ke',
        significado: 'Perdonar, restaurar el vínculo roto. Mecanismo interno de resolución de conflictos sin letalidad permanente.'
    },
    {
        id: 17,
        vocablo: 'Atacá',
        fonetica: 'a-ta-ka',
        significado: 'Lo bueno, lo favorable. No postulados dogmáticos: una cacería exitosa, una tinaja desbordante, la reciprocidad cumplida.'
    },
    {
        id: 18,
        vocablo: 'Vâra',
        fonetica: 'va-ra',
        significado: 'No, nada, el vacío absoluto. Lo que el sistema misional jesuita quiso hacer de la ontología uchití. El proyecto nace como negación de vâra.'
    },
    {
        id: 19,
        vocablo: 'Éte',
        fonetica: 'e-te',
        significado: 'Hombre, ser humano. Plural irregular: ti. Reliquia de alta antigüedad morfológica dentro de la filogenia pre-yuma.'
    },
    {
        id: 20,
        vocablo: 'Ánaï',
        fonetica: 'a-nai',
        significado: 'Mujer. Plural: kánaï (prefijo k-). Sostenía la arquitectura económica de la banda mediante recolección especializada.'
    },
    {
        id: 21,
        vocablo: 'Katé',
        fonetica: 'ka-te',
        significado: 'Nosotros (sujeto). No la suma de varios "yos" — la proclamación de la banda como entidad biológica unificada.'
    },
    {
        id: 22,
        vocablo: 'Aëna',
        fonetica: 'a-e-na',
        significado: 'Arriba, el cenit. Dirección de los Grandes Murales en la Sierra de la Laguna y del vuelo de las águilas.'
    },
    {
        id: 23,
        vocablo: 'Untâiri',
        fonetica: 'un-tai-ri',
        significado: 'Día, ciclo solar. Victoria diaria sobre la incertidumbre de la noche en los cañones serranos.'
    },
    {
        id: 24,
        vocablo: 'Maniká',
        fonetica: 'ma-ni-ka',
        significado: 'Pigmento ocre férrico. "La sangre de la memoria": rojo inmarcesible extraído de vetas volcánicas para los Grandes Murales.'
    },
    // ── Glosario Expandido (De El Uchití.md) ──
    {
        id: 25,
        vocablo: 'Rutau',
        fonetica: 'ru-tau',
        significado: 'Pronombre personal: Él.'
    },
    {
        id: 26,
        vocablo: 'Pete',
        fonetica: 'pe-te',
        significado: 'Pronombre personal: Ustedes.'
    },
    {
        id: 27,
        vocablo: 'Tucáva',
        fonetica: 'tu-ca-va',
        significado: 'Ellos, ella, o "el mismo". Marcador de identidad de grupo.'
    },
    {
        id: 28,
        vocablo: 'Bedáre',
        fonetica: 'be-da-re',
        significado: 'Mi padre o ancestro masculino directo.'
    },
    {
        id: 29,
        vocablo: 'Bécue',
        fonetica: 'be-cue',
        significado: 'Mi madre o ancestro femenino directo.'
    },
    {
        id: 30,
        vocablo: 'Betshánu',
        fonetica: 'bet-sha-nu',
        significado: 'Mi hijo / descendiente.'
    },
    {
        id: 31,
        vocablo: 'Mapá',
        fonetica: 'ma-pa',
        significado: 'Mi frente. Regla: sustantivos de cuerpo requieren posesivo simepre.'
    },
    {
        id: 32,
        vocablo: 'Minamú',
        fonetica: 'mi-na-mu',
        significado: 'Mi nariz.'
    },
    {
        id: 33,
        vocablo: 'Mituketá',
        fonetica: 'mi-tu-ke-ta',
        significado: 'Mi mano.'
    },
    {
        id: 34,
        vocablo: 'Mundiri',
        fonetica: 'mun-di-ri',
        significado: 'Mi brazo.'
    },
    {
        id: 35,
        vocablo: 'Menembeû',
        fonetica: 'me-nem-be-u',
        significado: 'Mi dolor. Nota: raíz nembeú (dolor) también requiere posesivo.'
    },
    {
        id: 36,
        vocablo: 'Betanía',
        fonetica: 'be-ta-nia',
        significado: 'Mi palabra. Del raíz tanía (palabra).'
    },
    {
        id: 37,
        vocablo: 'Amukiri',
        fonetica: 'a-mu-ki-ri',
        significado: 'Verbo: Jugar o participar en ritos lúdicos.'
    },
    {
        id: 38,
        vocablo: 'Akatuiké',
        fonetica: 'a-ka-tui-ke',
        significado: 'Verbo: Conocer, reconocer la esencia de algo.'
    },
    {
        id: 39,
        vocablo: 'Cuvu',
        fonetica: 'cu-vu',
        significado: 'Verbo: Querer, desear, tener voluntad.'
    },
    {
        id: 40,
        vocablo: 'Hibitsche',
        fonetica: 'hi-bit-sche',
        significado: 'Verbo: Sufrir, proceso de transformación a través del dolor.'
    },
    {
        id: 41,
        vocablo: 'Jebarrake',
        fonetica: 'je-ba-rra-ke',
        significado: 'Verbo: Obedecer, seguir los ciclos naturales.'
    },
    {
        id: 42,
        vocablo: 'Kukanja',
        fonetica: 'ku-kan-ja',
        significado: 'Verbo: Proteger, resguardar el territorio o la memoria.'
    },
    {
        id: 43,
        vocablo: 'Kumbáte',
        fonetica: 'kum-ba-te',
        significado: 'Verbo: Odiar, rechazar lo deletéreo para la banda.'
    },
    {
        id: 44,
        vocablo: 'Piabaké',
        fonetica: 'pia-ba-ke',
        significado: 'Verbo: Reñir, confrontación dialéctica o física.'
    },
    {
        id: 45,
        vocablo: 'Tikakambá',
        fonetica: 'ti-ka-kam-ba',
        significado: 'Verbo: Ayudar, cooperar simbióticamente.'
    },
    {
        id: 46,
        vocablo: 'Tschakárrake',
        fonetica: 'tscha-ka-rra-ke',
        significado: 'Verbo: Alabar, reconocer la grandeza de datembà.'
    },
    {
        id: 47,
        vocablo: 'Tschumuge',
        fonetica: 'tschum-u-ge',
        significado: 'Verbo: Besar, gesto de unión física.'
    },
    {
        id: 48,
        vocablo: 'Tshípake',
        fonetica: 'tshi-pa-ke',
        significado: 'Verbo: Golpear, marcar el ritmo o la piedra.'
    },
    {
        id: 49,
        vocablo: 'Ureti',
        fonetica: 'u-re-ti',
        significado: 'Verbo: Hacer, crear con las manos y la voluntad.'
    },
    {
        id: 50,
        vocablo: 'Apánne',
        fonetica: 'a-pan-ne',
        significado: 'Adjetivo: Grande, inabarcable.'
    },
    {
        id: 51,
        vocablo: 'Pari',
        fonetica: 'pa-ri',
        significado: 'Adjetivo/Adverbio: Mucho, abundancia.'
    },
    {
        id: 52,
        vocablo: 'Jaûpe',
        fonetica: 'jau-pe',
        significado: 'Adverbio: Aquí, en este punto geográfico exacto.'
    },
    {
        id: 53,
        vocablo: 'Enjéme',
        fonetica: 'en-je-me',
        significado: 'Conjunción: Entonces, marcador de secuencia temporal.'
    },
    {
        id: 54,
        vocablo: 'Guamongo',
        fonetica: 'gua-mon-go',
        significado: 'Entidad: Espíritu del norte, el gran creador en la mitología uchití.'
    },
    {
        id: 55,
        vocablo: 'Emma',
        fonetica: 'em-ma',
        significado: 'Entidad: Demonio o fuerza disruptiva de la armonía.'
    },
    {
        id: 56,
        vocablo: 'Diocuinocho',
        fonetica: 'dio-cui-no-cho',
        significado: 'Cargo: Chamán de alto rango, mediador con lo invisible.'
    },
    {
        id: 57,
        vocablo: 'Taniti',
        fonetica: 'ta-ni-ti',
        significado: 'Cargo: Chamán o sabio local de la banda.'
    },
    {
        id: 58,
        vocablo: 'Chirigaki',
        fonetica: 'chi-ri-ga-ki',
        significado: 'Topónimo: Misión de San Luis Gonzaga, sitio de memoria.'
    },
    {
        id: 59,
        vocablo: 'Conchó',
        fonetica: 'con-cho',
        significado: 'Topónimo: Loreto. Significa "mangle rojo" en la antigua lengua.'
    },
    {
        id: 60,
        vocablo: 'Tshukíti',
        fonetica: 'tshu-ki-ti',
        significado: 'Concepto: Ido arriba, trascendencia tras la muerte.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VocabloCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VocabloCard",
    ()=>VocabloCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
const VocabloCard = ({ item, explanation, playingId, loadingId, playingExplanationId, playAudio, explainContext, playExplanation })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group border p-8 transition-all duration-300 hover:bg-[var(--accent-soft)] relative overflow-hidden",
        style: {
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    size: 120
                }, void 0, false, {
                    fileName: "[project]/src/components/VocabloCard.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/VocabloCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group/word cursor-help",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold text-[var(--accent)] border-b border-dashed border-[var(--accent)] pb-1",
                                                children: item.vocablo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VocabloCard.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 bottom-full mb-2 opacity-0 group-hover/word:opacity-100 transition-opacity bg-[var(--accent)] text-[var(--bg)] text-xs font-mono px-4 py-3 pointer-events-none whitespace-nowrap z-20 shadow-lg flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold uppercase tracking-widest opacity-70 text-[10px]",
                                                        children: "Guía Fonética"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Pronunciación: /",
                                                            item.fonetica,
                                                            "/"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/VocabloCard.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>playAudio(item),
                                        disabled: playingId === item.id,
                                        className: "p-2 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors rounded-full disabled:opacity-30",
                                        title: "Reproducir sonido",
                                        children: playingId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/VocabloCard.tsx",
                                            lineNumber: 56,
                                            columnNumber: 40
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/VocabloCard.tsx",
                                            lineNumber: 56,
                                            columnNumber: 89
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VocabloCard.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-[0.3em] opacity-40 font-mono",
                                children: [
                                    "[",
                                    item.fonetica,
                                    "]"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VocabloCard.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VocabloCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg leading-relaxed opacity-80",
                        children: item.significado
                    }, void 0, false, {
                        fileName: "[project]/src/components/VocabloCard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-6 border border-[var(--accent)] bg-[var(--accent-soft)] animate-in fade-in zoom-in-95 duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-[var(--accent)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VocabloCard.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-widest",
                                                children: "Análisis Lingüístico"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VocabloCard.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>playExplanation(item.id, explanation),
                                        disabled: playingExplanationId === item.id,
                                        className: "p-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] text-[var(--accent)] transition-colors disabled:opacity-30",
                                        title: "Escuchar análisis",
                                        children: playingExplanationId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/VocabloCard.tsx",
                                            lineNumber: 81,
                                            columnNumber: 53
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/VocabloCard.tsx",
                                            lineNumber: 81,
                                            columnNumber: 102
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VocabloCard.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed opacity-90",
                                children: explanation
                            }, void 0, false, {
                                fileName: "[project]/src/components/VocabloCard.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VocabloCard.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 flex gap-4 border-t border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>playAudio(item),
                                disabled: playingId === item.id,
                                className: "flex-1 py-3 border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold disabled:opacity-30",
                                children: [
                                    playingId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 87
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "[ AUDIO ]"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VocabloCard.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>explainContext(item),
                                        disabled: loadingId === item.id,
                                        className: "flex-1 py-3 border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold disabled:opacity-30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VocabloCard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "[ ANALIZAR ]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    loadingId === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin text-[var(--accent)] flex-shrink-0",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VocabloCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VocabloCard.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VocabloCard.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VocabloCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VocabloCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = VocabloCard;
var _c;
__turbopack_context__.k.register(_c, "VocabloCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Generador.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Generador",
    ()=>Generador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function GeneradorBackground() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "-20%",
        "20%"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                y
            },
            className: "absolute -inset-[50%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDBGRjAwIi8+Cjwvc3ZnPg==')] bg-repeat"
        }, void 0, false, {
            fileName: "[project]/src/components/Generador.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Generador.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(GeneradorBackground, "w5ZdYfEZcXaaY6r06Rgcg2ryUN4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = GeneradorBackground;
function Generador({ imagenPrompt, setImagenPrompt, generateImage, imagenLoading, imagenResult, veoPrompt, setVeoPrompt, selectedFile, setSelectedFile, generateVideo, veoLoading, veoResult, imagenBase64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.3
        },
        className: "max-w-4xl mx-auto space-y-16 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeneradorBackground, {}, void 0, false, {
                fileName: "[project]/src/components/Generador.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold",
                                children: "Generación de Visiones"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-50 uppercase tracking-widest",
                                children: "Producción de memoria visual con pigmentos minerales"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Generador.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Orden de trazado (ej: Guerrero uchití cazando...)",
                                className: "flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all",
                                value: imagenPrompt,
                                onChange: (e)=>setImagenPrompt(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: generateImage,
                                disabled: imagenLoading,
                                className: "px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30",
                                children: imagenLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Generador.tsx",
                                    lineNumber: 83,
                                    columnNumber: 30
                                }, this) : '[ TRAZAR ]'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Generador.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    imagenResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border border-[var(--border)] bg-[var(--card-bg)] text-sm font-mono whitespace-pre-wrap leading-relaxed",
                                children: [
                                    "[Visión Sintética Generada]:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Generador.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Generador.tsx",
                                        lineNumber: 90,
                                        columnNumber: 20
                                    }, this),
                                    imagenResult
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[var(--border)] relative overflow-hidden bg-black/80 aspect-video flex items-center justify-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[var(--accent)]/5 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Generador.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const imgSrc = imagenBase64 ? `data:image/jpeg;base64,${imagenBase64}` : null;
                                        if (!imgSrc) {
                                            // Arte rupestre procedural SVG — placeholder cultural auténtico
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 800 450",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-full h-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                                        id: "grain",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                                                                type: "fractalNoise",
                                                                                baseFrequency: "0.9",
                                                                                numOctaves: "4",
                                                                                stitchTiles: "stitch"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 108,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                                                type: "saturate",
                                                                                values: "0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 109,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                                                in: "SourceGraphic",
                                                                                mode: "multiply"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 110,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                                        id: "caveLight",
                                                                        cx: "50%",
                                                                        cy: "40%",
                                                                        r: "60%",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0%",
                                                                                stopColor: "#3d1a00",
                                                                                stopOpacity: "0.3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "100%",
                                                                                stopColor: "#000000",
                                                                                stopOpacity: "0.95"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 114,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "ocre",
                                                                        x1: "0%",
                                                                        y1: "0%",
                                                                        x2: "100%",
                                                                        y2: "100%",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0%",
                                                                                stopColor: "#c8560a"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 117,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "100%",
                                                                                stopColor: "#8b3a00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                                lineNumber: 118,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "800",
                                                                height: "450",
                                                                fill: "#1a0a00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "800",
                                                                height: "450",
                                                                fill: "url(#caveLight)",
                                                                filter: "url(#grain)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                opacity: "0.85",
                                                                fill: "url(#ocre)",
                                                                stroke: "#5a2000",
                                                                strokeWidth: "0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                        cx: "200",
                                                                        cy: "200",
                                                                        rx: "12",
                                                                        ry: "18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "200",
                                                                        cy: "175",
                                                                        r: "9"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "188",
                                                                        y1: "190",
                                                                        x2: "165",
                                                                        y2: "210",
                                                                        stroke: "#c8560a",
                                                                        strokeWidth: "4",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "212",
                                                                        y1: "190",
                                                                        x2: "240",
                                                                        y2: "200",
                                                                        stroke: "#c8560a",
                                                                        strokeWidth: "4",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "240",
                                                                        y1: "200",
                                                                        x2: "285",
                                                                        y2: "175",
                                                                        stroke: "#8b3a00",
                                                                        strokeWidth: "3",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                        points: "285,175 278,168 292,170",
                                                                        fill: "#c8560a"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "195",
                                                                        y1: "218",
                                                                        x2: "185",
                                                                        y2: "245",
                                                                        stroke: "#c8560a",
                                                                        strokeWidth: "4",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "205",
                                                                        y1: "218",
                                                                        x2: "215",
                                                                        y2: "245",
                                                                        stroke: "#c8560a",
                                                                        strokeWidth: "4",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                opacity: "0.75",
                                                                stroke: "#8b3a00",
                                                                strokeWidth: "2",
                                                                fill: "none",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                        cx: "420",
                                                                        cy: "220",
                                                                        rx: "30",
                                                                        ry: "18",
                                                                        fill: "#9b4500",
                                                                        opacity: "0.7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "435",
                                                                        y1: "205",
                                                                        x2: "455",
                                                                        y2: "190",
                                                                        strokeWidth: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "455",
                                                                        y1: "190",
                                                                        x2: "448",
                                                                        y2: "175"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "455",
                                                                        y1: "190",
                                                                        x2: "462",
                                                                        y2: "178"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "448",
                                                                        y1: "175",
                                                                        x2: "443",
                                                                        y2: "168"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "448",
                                                                        y1: "175",
                                                                        x2: "453",
                                                                        y2: "169"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "405",
                                                                        y1: "235",
                                                                        x2: "400",
                                                                        y2: "258"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "415",
                                                                        y1: "237",
                                                                        x2: "412",
                                                                        y2: "260"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "430",
                                                                        y1: "237",
                                                                        x2: "428",
                                                                        y2: "260"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "440",
                                                                        y1: "235",
                                                                        x2: "438",
                                                                        y2: "258"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                opacity: "0.6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "580",
                                                                        cy: "160",
                                                                        r: "35",
                                                                        fill: "#3a0000",
                                                                        opacity: "0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M565,155 Q556,140 560,130 Q564,120 570,130 Q572,118 578,128 Q582,116 588,126 Q594,116 598,128 Q602,140 595,155 Q580,165 565,155 Z",
                                                                        fill: "#2a0000",
                                                                        opacity: "0.7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                opacity: "0.5",
                                                                stroke: "#c8560a",
                                                                strokeWidth: "1.5",
                                                                fill: "none",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "650",
                                                                        cy: "90",
                                                                        r: "18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "650",
                                                                        y1: "65",
                                                                        x2: "650",
                                                                        y2: "115"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 163,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "625",
                                                                        y1: "90",
                                                                        x2: "675",
                                                                        y2: "90"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "633",
                                                                        y1: "73",
                                                                        x2: "667",
                                                                        y2: "107"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "667",
                                                                        y1: "73",
                                                                        x2: "633",
                                                                        y2: "107"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Generador.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 25
                                                            }, this),
                                                            [
                                                                100,
                                                                160,
                                                                320,
                                                                500,
                                                                560,
                                                                700,
                                                                730
                                                            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: x,
                                                                    cy: 80 + i % 3 * 20,
                                                                    r: "3",
                                                                    fill: "#c8560a",
                                                                    opacity: "0.4 "
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/Generador.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            Array.from({
                                                                length: 45
                                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "0",
                                                                    y1: i * 10,
                                                                    x2: "800",
                                                                    y2: i * 10,
                                                                    stroke: "#000",
                                                                    strokeWidth: "0.5",
                                                                    opacity: "0.15"
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/Generador.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "800",
                                                                height: "450",
                                                                fill: "url(#caveLight)",
                                                                opacity: "0.4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Generador.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Generador.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 left-0 right-0 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-[#c8560a]/70 font-mono uppercase tracking-[0.3em] bg-black/60 px-3 py-1",
                                                            children: "[ MURAL PROCEDURAL — MEMORIA TRAZADA ]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Generador.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Generador.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Generador.tsx",
                                                lineNumber: 103,
                                                columnNumber: 21
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgSrc,
                                            alt: "Sintetizador Visual",
                                            className: "w-full h-full object-cover mix-blend-screen filter contrast-[1.1] grayscale-[10%] sepia-[30%] hue-rotate-[-10deg] transition-transform duration-[10s] group-hover:scale-110",
                                            onLoad: (e)=>{
                                                e.currentTarget.style.opacity = '1';
                                                const parent = e.currentTarget.parentElement;
                                                if (parent) {
                                                    const pulse = parent.querySelector('.animate-pulse');
                                                    if (pulse) pulse.remove();
                                                }
                                            },
                                            onError: (e)=>{
                                                e.currentTarget.style.filter = 'grayscale(1) brightness(0.2)';
                                                console.error('IMAGEN FAIL');
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Generador.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this);
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 right-4 text-[10px] text-[#00FF00] font-mono opacity-60 bg-black/80 px-3 py-1 border border-[#00FF00]/30 backdrop-blur group-hover:opacity-100 transition-opacity",
                                        children: [
                                            "[ RENDERIZADO ",
                                            imagenBase64 ? 'NATIVO' : 'RUPESTRE',
                                            " ]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Generador.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Generador.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Generador.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px bg-[var(--border)] opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/Generador.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold",
                                children: "Dinámica de Recuerdos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-50 uppercase tracking-widest",
                                children: "Procesamiento de movimiento ancestral"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Generador.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Generador.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Orden de movimiento...",
                                    className: "flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all",
                                    value: veoPrompt,
                                    onChange: (e)=>setVeoPrompt(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Generador.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "cursor-pointer px-6 py-4 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            className: "hidden",
                                            onChange: (e)=>setSelectedFile(e.target.files?.[0] || null)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Generador.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs uppercase font-bold tracking-widest",
                                            children: selectedFile ? '[ IMAGEN LISTA ]' : '[ SUBIR BASE ]'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Generador.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Generador.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: generateVideo,
                                    disabled: veoLoading,
                                    className: "px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30",
                                    children: veoLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Generador.tsx",
                                        lineNumber: 248,
                                        columnNumber: 29
                                    }, this) : '[ ANIMAR ]'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Generador.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Generador.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Generador.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    veoResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border border-[var(--border)] bg-[var(--card-bg)] text-sm font-mono whitespace-pre-wrap leading-relaxed",
                        children: veoResult
                    }, void 0, false, {
                        fileName: "[project]/src/components/Generador.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Generador.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, "generador", true, {
        fileName: "[project]/src/components/Generador.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = Generador;
var _c, _c1;
__turbopack_context__.k.register(_c, "GeneradorBackground");
__turbopack_context__.k.register(_c1, "Generador");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConstructorFrases.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstructorFrases",
    ()=>ConstructorFrases
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
function ConstructorFrases({ phraseInput, setPhraseInput, isRecording, toggleRecording, buildPhrase, isPhraseLoading, phraseResult, phraseTtsText, playPhraseAudio, playingPhraseText, user, savedPhrases }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.3
        },
        className: "max-w-4xl mx-auto space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold",
                        children: "Constructor de Frases"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-50 uppercase tracking-widest",
                        children: "Sintetizador de neologismos descriptivos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConstructorFrases.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Escribe una frase en español o usa el micrófono...",
                                className: "w-full bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 pr-16 focus:outline-none focus:bg-[var(--accent-soft)] transition-all min-h-[120px] resize-none",
                                value: phraseInput,
                                onChange: (e)=>setPhraseInput(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleRecording,
                                className: `absolute right-4 bottom-4 p-3 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]'}`,
                                title: isRecording ? "Detener grabación" : "Dictar por voz",
                                children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConstructorFrases.tsx",
                                    lineNumber: 67,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConstructorFrases.tsx",
                                    lineNumber: 67,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: buildPhrase,
                        disabled: isPhraseLoading || !phraseInput,
                        className: "py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30",
                        children: isPhraseLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "animate-spin mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConstructorFrases.tsx",
                            lineNumber: 75,
                            columnNumber: 30
                        }, this) : '[ SINTETIZAR FRASE ]'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConstructorFrases.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            phraseResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border border-[var(--border)] bg-[var(--accent-soft)] animate-in fade-in duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-[var(--accent)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest",
                                        children: "Resultado de Síntesis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            phraseTtsText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>playPhraseAudio(phraseTtsText),
                                disabled: playingPhraseText === phraseTtsText,
                                className: "p-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors disabled:opacity-50",
                                title: "Escuchar pronunciación",
                                children: playingPhraseText === phraseTtsText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 16,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConstructorFrases.tsx",
                                    lineNumber: 93,
                                    columnNumber: 56
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConstructorFrases.tsx",
                                    lineNumber: 93,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "whitespace-pre-wrap text-sm leading-relaxed opacity-90 font-mono",
                        children: phraseResult
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConstructorFrases.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            user && savedPhrases.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold border-b border-[var(--border)] pb-2",
                        children: "[ REGISTRO PERSONAL ]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: savedPhrases.map((phrase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border border-[var(--border)] bg-[var(--card-bg)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs opacity-50",
                                                children: [
                                                    "ORIGINAL: ",
                                                    phrase.originalText
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            phrase.ttsText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>playPhraseAudio(phrase.ttsText),
                                                disabled: playingPhraseText === phrase.ttsText,
                                                className: "p-1.5 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors disabled:opacity-50",
                                                title: "Escuchar pronunciación",
                                                children: playingPhraseText === phrase.ttsText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 14,
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ConstructorFrases.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 63
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ConstructorFrases.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 112
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "whitespace-pre-wrap text-sm font-mono text-[var(--accent)]",
                                        children: phrase.generatedPhrase
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, phrase.id, true, {
                                fileName: "[project]/src/components/ConstructorFrases.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConstructorFrases.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConstructorFrases.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, "constructor", true, {
        fileName: "[project]/src/components/ConstructorFrases.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = ConstructorFrases;
var _c;
__turbopack_context__.k.register(_c, "ConstructorFrases");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Oraculo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Oraculo",
    ()=>Oraculo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Oraculo({ liveTranscript, isLiveActive, startLiveSession, stopLiveSession, sendToOraculo }) {
    _s();
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSend = ()=>{
        if (!inputText.trim()) return;
        sendToOraculo(inputText);
        setInputText('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.3
        },
        className: "max-w-4xl mx-auto space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold",
                        children: "Oráculo Uchití"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Oraculo.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-50 uppercase tracking-widest",
                        children: "Conexión neuronal en tiempo real (Live API)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Oraculo.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Oraculo.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 border border-[var(--border)] bg-[var(--card-bg)] min-h-[400px] flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto space-y-4 mb-6 font-mono text-sm",
                        children: liveTranscript.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "opacity-50 text-center mt-20",
                            children: "[ ESPERANDO INICIALIZACIÓN DE ENLACE ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Oraculo.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this) : liveTranscript.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${line.startsWith('[SISTEMA]') ? 'text-yellow-500' : 'text-[var(--accent)]'}`,
                                children: line
                            }, i, false, {
                                fileName: "[project]/src/components/Oraculo.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Oraculo.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col border-t border-[var(--border)] pt-6 gap-4",
                        children: [
                            isLiveActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Transmite tu pregunta...",
                                        className: "flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-4 py-3 focus:outline-none focus:bg-[var(--accent-soft)] transition-all font-mono text-sm",
                                        value: inputText,
                                        onChange: (e)=>setInputText(e.target.value),
                                        onKeyDown: (e)=>e.key === 'Enter' && handleSend()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Oraculo.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSend,
                                        className: "px-6 bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 flex items-center justify-center font-bold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Oraculo.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Oraculo.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Oraculo.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: isLiveActive ? stopLiveSession : startLiveSession,
                                    className: `flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all ${isLiveActive ? 'bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white' : 'bg-[var(--accent)] text-[var(--bg)] hover:opacity-90'}`,
                                    children: isLiveActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Oraculo.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            "[ CORTAR ENLACE ]"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Oraculo.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            "[ INICIAR ENLACE NEURONAL ]"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Oraculo.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Oraculo.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Oraculo.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Oraculo.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, "oraculo", true, {
        fileName: "[project]/src/components/Oraculo.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Oraculo, "wAh2Cv8Kk70PfbjrJimBRYwxb6g=");
_c = Oraculo;
var _c;
__turbopack_context__.k.register(_c, "Oraculo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlosarioInfografia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlosarioInfografia",
    ()=>GlosarioInfografia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
// ── Datos del Glosario Uchití ──────────────────────────────────────────
const SISTEMA_FONOLOGICO = [
    {
        cat: 'Vocales',
        det: '5 vocales + 2 vocales dobles'
    },
    {
        cat: 'Consonantes',
        det: '14 consonantes + /tsch/ [ch] + dos dobles: /nn/, /mm/'
    },
    {
        cat: 'Inexistentes',
        det: 'F, G, L, X, Z'
    },
    {
        cat: 'Orden sintáctico',
        det: 'SOV (Sujeto-Objeto-Verbo)'
    },
    {
        cat: 'Sílabas',
        det: 'CV / CVV'
    },
    {
        cat: 'Acento',
        det: 'Llano'
    }
];
const PRONOMBRES = [
    {
        u: 'Be',
        e: 'Yo'
    },
    {
        u: 'Eï',
        e: 'Tú'
    },
    {
        u: 'Rutau / Tutau',
        e: 'Él'
    },
    {
        u: 'Caté',
        e: 'Nosotros'
    },
    {
        u: 'Pete',
        e: 'Ustedes'
    },
    {
        u: 'Tucáva',
        e: 'Ellos / Ella'
    }
];
const POSESIVOS = [
    {
        p: 'Mío',
        f: 'Be, Me, mi, m'
    },
    {
        p: 'Tuyo',
        f: 'Ei, e, et'
    },
    {
        p: 'Suyo',
        f: 'T, ti, titsh'
    },
    {
        p: 'Nuestro',
        f: 'Kepe, Kepé'
    }
];
const SUFIJOS_TEMPORALES = [
    {
        t: 'Presente',
        s: '-re, -reke',
        color: '#00ff88'
    },
    {
        t: 'Pasado',
        s: '-rujére, -raupe, -raúpere, -ríkiri',
        color: '#ff6600'
    },
    {
        t: 'Futuro',
        s: '-me, -meje, -éneme',
        color: '#00ccff'
    }
];
const CONJUGACIONES = [
    {
        raiz: 'Amukiri',
        esp: 'Jugar',
        pres: 'Amukirire',
        pas: 'Amukirikiri',
        fut: 'Amukirime'
    },
    {
        raiz: 'Atú',
        esp: 'Tener',
        pres: 'Atúre',
        pas: 'Atúrujére',
        fut: 'Atúmeje'
    },
    {
        raiz: 'Cuvu',
        esp: 'Querer',
        pres: 'Cuvure',
        pas: 'Cuvurujére',
        fut: 'Cuvume'
    },
    {
        raiz: 'Éte',
        esp: 'Ser/Estar',
        pres: 'Étere',
        pas: 'Éterujére',
        fut: 'Étemeje'
    },
    {
        raiz: 'Kên',
        esp: 'Dar',
        pres: 'Kenre',
        pas: 'Kenríkiri',
        fut: 'Kenme'
    },
    {
        raiz: 'Umutú',
        esp: 'Pensar',
        pres: 'Umutúre',
        pas: 'Umutúrujére',
        fut: 'Umutúmeje'
    },
    {
        raiz: 'Tuja',
        esp: 'Hacer',
        pres: 'Tujake',
        pas: 'Tujaríkiri',
        fut: 'Tujame'
    },
    {
        raiz: 'Pibi',
        esp: 'Morir',
        pres: 'Pibire',
        pas: 'Pibirikiri',
        fut: 'Pibime'
    },
    {
        raiz: 'Kukanja',
        esp: 'Proteger',
        pres: 'Kukanjare',
        pas: 'Kukanjaraupe',
        fut: 'Kukanjame'
    },
    {
        raiz: 'Tikakambá',
        esp: 'Ayudar',
        pres: 'Tikakambáre',
        pas: 'Tikakambárujére',
        fut: 'Tikakambámeje'
    }
];
const ADJETIVOS = [
    {
        u: 'Apánne',
        e: 'Grande',
        neg: 'Apánnera',
        negE: 'No grande'
    },
    {
        u: 'Atacámma',
        e: 'Buenos',
        neg: 'Atacámmara',
        negE: 'Malos'
    },
    {
        u: 'Cuncari',
        e: 'Mucho',
        neg: 'Cuncarira',
        negE: 'No mucho'
    },
    {
        u: 'Pari',
        e: 'Mucho',
        neg: 'Parira',
        negE: 'Poco'
    }
];
const REGLAS_MORFO = [
    {
        r: 'Negación',
        m: 'Sufijo -ra o -ja',
        ej: 'Atacámma → Atacámmara'
    },
    {
        r: 'Plural verbal',
        m: 'Prefijo k- o ku-',
        ej: 'Umutú → Kumutú'
    },
    {
        r: 'Posesión inalienable',
        m: 'Prefijos be-/e-/kepe-',
        ej: 'Áre → Bedáre'
    },
    {
        r: 'D/T eufónica',
        m: 'Cuando sustantivo empieza con vocal',
        ej: 'Áre → Dáre'
    }
];
const ENTIDADES = [
    {
        v: 'Guamongo',
        s: 'Espíritu del norte, creador'
    },
    {
        v: 'Gujiaqui',
        s: 'Espíritu enviado por Guamongo'
    },
    {
        v: 'Diocuinocho',
        s: 'Chamán'
    },
    {
        v: 'Taniti',
        s: 'Chamán'
    },
    {
        v: 'Emma',
        s: 'Demonio'
    },
    {
        v: 'Tiyeicha',
        s: 'Vara ceremonial ("puede hablar")'
    },
    {
        v: 'Joeminini Generis',
        s: 'Ave mitológica'
    }
];
const TOPONIMOS = [
    {
        u: 'Airapí',
        l: 'Bahía de La Paz'
    },
    {
        u: 'Chirigaki',
        l: 'San Luis Gonzaga'
    },
    {
        u: 'Conchó',
        l: 'Loreto (mangle rojo)'
    },
    {
        u: 'Tiá',
        l: 'Lugar de patos'
    },
    {
        u: 'Tiguana',
        l: '—'
    },
    {
        u: 'Asembavichi',
        l: '—'
    }
];
const BANDAS = [
    'Uchití',
    'Aripes',
    'Callejúes',
    'Cubíes',
    'Ikas',
    'Monquí',
    'Cochimí'
];
const VOCABULARIO = [
    {
        letra: 'A',
        items: [
            {
                v: 'Aëna',
                s: 'Arriba, Cielo'
            },
            {
                v: 'Agénari',
                s: 'Una danza'
            },
            {
                v: 'Airapí',
                s: 'Bahía de La Paz'
            },
            {
                v: 'Akúnju',
                s: 'Tres'
            },
            {
                v: 'Anaï',
                s: 'Mujer'
            },
            {
                v: 'Apánne',
                s: 'Grande'
            },
            {
                v: 'Áre',
                s: 'Padre'
            },
            {
                v: 'Ambúja',
                s: 'Semana / casa'
            },
            {
                v: 'Amukiri',
                s: 'Jugar'
            }
        ]
    },
    {
        letra: 'B',
        items: [
            {
                v: 'Be',
                s: 'Yo, mi, mío'
            },
            {
                v: 'Bécue',
                s: 'Mi madre'
            },
            {
                v: 'Bedáre',
                s: 'Mi padre'
            },
            {
                v: 'Búe',
                s: 'Alimento'
            },
            {
                v: 'Búnju',
                s: 'Abajo'
            }
        ]
    },
    {
        letra: 'C',
        items: [
            {
                v: 'Caté',
                s: 'Nosotros'
            },
            {
                v: 'Cochimí',
                s: 'Gente del norte'
            },
            {
                v: 'Conchó',
                s: 'Loreto'
            },
            {
                v: 'Cuncari',
                s: 'Mucho'
            },
            {
                v: 'Cue',
                s: 'Madre'
            }
        ]
    },
    {
        letra: 'D-E',
        items: [
            {
                v: 'Dai',
                s: 'Ser'
            },
            {
                v: 'Dêi',
                s: 'Siempre'
            },
            {
                v: 'Emma',
                s: 'Demonio'
            },
            {
                v: 'Ete',
                s: 'Hombre'
            },
            {
                v: 'Epí',
                s: 'Haber'
            },
            {
                v: 'Edú',
                s: 'Gente de otra lengua'
            }
        ]
    },
    {
        letra: 'G-K',
        items: [
            {
                v: 'Guamongo',
                s: 'Espíritu creador'
            },
            {
                v: 'Jake',
                s: 'Platicar'
            },
            {
                v: 'Jaûpe',
                s: 'Aquí'
            },
            {
                v: 'Kêa',
                s: 'Está bajo tierra'
            },
            {
                v: 'Kenyei',
                s: 'Mezcal'
            },
            {
                v: 'Kumbáte',
                s: 'Odiar'
            },
            {
                v: 'Kuitsharraké',
                s: 'Perdonar'
            }
        ]
    },
    {
        letra: 'M-P',
        items: [
            {
                v: 'Matanamu',
                s: 'Serpiente coralillo'
            },
            {
                v: 'Notú',
                s: 'Cielo / en alto'
            },
            {
                v: 'Payró',
                s: 'Gracias'
            },
            {
                v: 'Pibi',
                s: 'Morir'
            },
            {
                v: 'Pu',
                s: 'Todos'
            },
            {
                v: 'Púa',
                s: 'Embarcación'
            },
            {
                v: 'Pui',
                s: 'Agave'
            }
        ]
    },
    {
        letra: 'T-V',
        items: [
            {
                v: 'Tanía',
                s: 'Palabra'
            },
            {
                v: 'Tepeka',
                s: 'Andar'
            },
            {
                v: 'Tikakambá',
                s: 'Ayudar'
            },
            {
                v: 'Tiyeicha',
                s: 'Vara ceremonial'
            },
            {
                v: 'Tscha',
                s: 'Útil / sabio'
            },
            {
                v: 'Tschumuge',
                s: 'Besar'
            },
            {
                v: 'Umutú',
                s: 'Pensar'
            },
            {
                v: 'Vára',
                s: 'Nada / no'
            }
        ]
    }
];
// ── Componentes auxiliares ──────────────────────────────────────────────
const SectionHeader = ({ icon, title, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: id,
        className: "flex items-center gap-3 mb-6 border-b border-dashed border-[var(--border)] pb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center flex-shrink-0",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 118,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold uppercase tracking-[0.15em]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GlosarioInfografia.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SectionHeader;
const CollapsibleSection = ({ icon, title, id, children, defaultOpen = false })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border border-[var(--border)] bg-[var(--card-bg)] mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-full flex items-center justify-between p-4 hover:bg-[var(--accent-soft)] transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center flex-shrink-0 text-xs",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold uppercase tracking-[0.12em]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 132,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: 'auto',
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: id,
                        className: "p-5 border-t border-[var(--border)]",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GlosarioInfografia.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CollapsibleSection, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c1 = CollapsibleSection;
const MiniTable = ({ headers, rows })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-xs font-mono border-collapse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "text-left p-2 border-b border-[var(--accent)] text-[var(--accent)] uppercase tracking-widest text-[10px] font-bold",
                                children: h
                            }, i, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 149,
                                columnNumber: 36
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                    lineNumber: 148,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: rows.map((row, ri)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-[var(--accent-soft)] transition-colors",
                            children: row.map((cell, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: `p-2 border-b border-[var(--border)] ${ci === 0 ? 'font-bold text-[var(--accent)]' : 'opacity-80'}`,
                                    children: cell
                                }, ci, false, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 154,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, ri, false, {
                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                    lineNumber: 151,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GlosarioInfografia.tsx",
            lineNumber: 147,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/GlosarioInfografia.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MiniTable;
const GlosarioInfografia = ()=>{
    _s1();
    const [vocabFilter, setVocabFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-[var(--accent)] p-8 mb-8 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.03]",
                        style: {
                            backgroundImage: 'repeating-linear-gradient(0deg, var(--accent), var(--accent) 1px, transparent 1px, transparent 3px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] uppercase tracking-[0.4em] opacity-50 mb-2",
                                children: "Anexo Infográfico — Proyecto Datembà"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-bold tracking-tight mb-3",
                                children: [
                                    "GLOSARIO DE LA LENGUA ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--accent)]",
                                        children: "UCHITÍ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 174,
                                        columnNumber: 100
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs opacity-60 max-w-2xl leading-relaxed",
                                children: [
                                    "Compilado a partir de ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "El Uchití y sus reglas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 176,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " — observaciones de Juan Jacobo Baegert (1751–1768) y Francisco Pimentel. Ref: Zamponi 2004."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-6 text-[10px] uppercase tracking-[0.2em] opacity-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "▸ Lengua Guaycura"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "▸ Península de Baja California"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 179,
                                        columnNumber: 43
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "▸ ~1894 últimos hablantes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 179,
                                        columnNumber: 86
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l-2 border-[var(--accent)] pl-5 mb-8 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--accent)] mb-2",
                        children: "Contexto Histórico"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs opacity-70 leading-relaxed",
                        children: [
                            "Se presume que en ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "1894"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 188,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            " murieron los últimos hablantes de la lengua autóctona de la media Península. Desde 1800 la población se diezmó por enfermedades importadas y la rebelión indígena de 1734. El adoctrinamiento misional, el bautismo y la subordinación al sistema misional terminaron por desaparecer la lengua y la cultura."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--border)] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 196,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                title: "Sistema Fonológico",
                                id: "sec-fono"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: SISTEMA_FONOLOGICO.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--accent)] min-w-[110px]",
                                                children: s.cat
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-70",
                                                children: s.det
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--border)] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 209,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                title: "Pronombres Personales",
                                id: "sec-pron"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: PRONOMBRES.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs p-2 border border-[var(--border)] hover:bg-[var(--accent-soft)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--accent)]",
                                                children: p.u
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-50",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-70",
                                                children: p.e
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] uppercase tracking-widest font-bold text-[var(--accent)] mb-2",
                                        children: "Posesivos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    POSESIVOS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 text-xs mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold min-w-[60px]",
                                                    children: [
                                                        p.p,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "opacity-70",
                                                    children: p.f
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border border-[var(--accent)] p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                            lineNumber: 233,
                            columnNumber: 30
                        }, ("TURBOPACK compile-time value", void 0)),
                        title: "El Verbo — Sufijos Temporales",
                        id: "sec-verb"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                        children: SUFIJOS_TEMPORALES.map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4 border border-[var(--border)] relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-full h-[2px]",
                                        style: {
                                            backgroundColor: st.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] uppercase tracking-widest font-bold mb-1",
                                        style: {
                                            color: st.color
                                        },
                                        children: st.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold",
                                        children: st.s
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] opacity-50 mb-4",
                        children: [
                            "* En plural, en algunos casos se antepone ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "k"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 243,
                                columnNumber: 94
                            }, ("TURBOPACK compile-time value", void 0)),
                            " o ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "ku"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 243,
                                columnNumber: 115
                            }, ("TURBOPACK compile-time value", void 0)),
                            ": Umutú → Kumutú (pensadores)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        icon: "⚙",
                        title: "Tabla de Conjugación Completa",
                        id: "sec-conj",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                            headers: [
                                'Raíz',
                                'Español',
                                'Presente',
                                'Pasado',
                                'Futuro'
                            ],
                            rows: CONJUGACIONES.map((c)=>[
                                    c.raiz,
                                    c.esp,
                                    c.pres,
                                    c.pas,
                                    c.fut
                                ])
                        }, void 0, false, {
                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        icon: "±",
                        title: "Adjetivos y Negación (-ra / -ja)",
                        id: "sec-adj",
                        defaultOpen: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTable, {
                            headers: [
                                'Uchití',
                                'Español',
                                'Negación',
                                'Significado'
                            ],
                            rows: ADJETIVOS.map((a)=>[
                                    a.u,
                                    a.e,
                                    a.neg,
                                    a.negE
                                ])
                        }, void 0, false, {
                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        icon: "⟁",
                        title: "Reglas Morfológicas Clave",
                        id: "sec-morfo",
                        defaultOpen: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: REGLAS_MORFO.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border border-[var(--border)] text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-[var(--accent)]",
                                            children: r.r
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-50 mx-2",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-70",
                                            children: r.m
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[var(--accent)] opacity-80",
                                            children: r.ej
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--border)] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 277,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                title: "Entidades Espirituales",
                                id: "sec-ent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: ENTIDADES.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--accent)]",
                                                children: e.v
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-50 mx-1",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-70",
                                                children: e.s
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--border)] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 289,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                title: "Topónimos",
                                id: "sec-topo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: TOPONIMOS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[var(--accent)] min-w-[90px]",
                                                children: t.u
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-70",
                                                children: t.l
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[var(--border)] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                    lineNumber: 300,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                title: "Bandas Guaycuras",
                                id: "sec-band"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: BANDAS.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 border border-[var(--accent)] text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors cursor-default",
                                        children: b
                                    }, i, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border border-[var(--accent)] p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/GlosarioInfografia.tsx",
                            lineNumber: 311,
                            columnNumber: 30
                        }, ("TURBOPACK compile-time value", void 0)),
                        title: "Vocabulario General (A–V)",
                        id: "sec-vocab"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--accent)] opacity-70 font-bold text-sm",
                                children: '>'
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Filtrar vocablo...",
                                value: vocabFilter,
                                onChange: (e)=>setVocabFilter(e.target.value),
                                className: "w-full bg-[var(--input-bg)] border border-[var(--border)] py-3 pl-8 pr-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all text-sm font-mono"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: VOCABULARIO.map((grupo)=>{
                            const filtered = grupo.items.filter((it)=>it.v.toLowerCase().includes(vocabFilter.toLowerCase()) || it.s.toLowerCase().includes(vocabFilter.toLowerCase()));
                            if (vocabFilter && filtered.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2 border-b border-dashed border-[var(--border)] pb-1",
                                        children: [
                                            "[",
                                            grupo.letra,
                                            "]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1",
                                        children: (vocabFilter ? filtered : grupo.items).map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs p-2 hover:bg-[var(--accent-soft)] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--accent)]",
                                                        children: it.v
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-40",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-70",
                                                        children: it.s
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                                lineNumber: 334,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, grupo.letra, true, {
                                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                                lineNumber: 330,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-6 opacity-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.3em]",
                        children: "Fuentes: Juan Jacobo Baegert (1751–1768) · Francisco Pimentel · Zamponi (2004)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.3em] mt-1",
                        children: "Compilación del Proyecto Datembà / Uchití OS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlosarioInfografia.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlosarioInfografia.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "glosario", true, {
        fileName: "[project]/src/components/GlosarioInfografia.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(GlosarioInfografia, "dbIqZKt7mVrkLh13MEZZ6GktwzQ=");
_c3 = GlosarioInfografia;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SectionHeader");
__turbopack_context__.k.register(_c1, "CollapsibleSection");
__turbopack_context__.k.register(_c2, "MiniTable");
__turbopack_context__.k.register(_c3, "GlosarioInfografia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/gemini.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════════════
//  UCHITÍ OS — Cliente AI Centralizado
//  Motor Primario: Google Gemini 2.0 Flash
//  Motor Fallback: Mistral AI (mistral-small-latest)
//  Todos los llamados AI del frontend pasan por aquí.
// ═══════════════════════════════════════════════════════════════
/**
 * URL base de la API ahora compatible y nativa con el Router de Next.js.
 * Independientemente del entorno (Dev o Prod), la ruta es simple y uniforme.
 */ __turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE,
    "buildUchitiPhrase",
    ()=>buildUchitiPhrase,
    "checkApiStatus",
    ()=>checkApiStatus,
    "consultarOraculo",
    ()=>consultarOraculo,
    "describeImage",
    ()=>describeImage,
    "explainVocablo",
    ()=>explainVocablo,
    "generateNativeAudioEndpoint",
    ()=>generateNativeAudioEndpoint
]);
const API_BASE = '/api';
async function checkApiStatus() {
    const res = await fetch(`${API_BASE}/status`);
    if (!res.ok) throw new Error(`Status HTTP ${res.status}`);
    return res.json();
}
async function explainVocablo(vocablo, significado) {
    const res = await fetch(`${API_BASE}/explain`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vocablo,
            significado
        })
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({
                error: `HTTP ${res.status}`
            }));
        throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.text;
}
async function buildUchitiPhrase(phrase) {
    const res = await fetch(`${API_BASE}/build-phrase`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phrase
        })
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({
                error: `HTTP ${res.status}`
            }));
        throw new Error(err.error || `HTTP ${res.status}`);
    }
    return res.json();
}
async function consultarOraculo(messages) {
    const res = await fetch(`${API_BASE}/oraculo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages
        })
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({
                error: `HTTP ${res.status}`
            }));
        throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.text;
}
async function describeImage(prompt) {
    const res = await fetch(`${API_BASE}/describe-image`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt
        })
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({
                error: `HTTP ${res.status}`
            }));
        throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.text;
}
async function generateNativeAudioEndpoint(text) {
    const res = await fetch(`${API_BASE}/generate-audio`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text
        })
    });
    if (!res.ok) {
        throw new Error(`HTTP Error en Audio TTS: ${res.status}`);
    }
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return `data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Minijuego$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Minijuego.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TerminalWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TerminalWizard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAmbientMusic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAmbientMusic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VocabloCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VocabloCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Generador$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Generador.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConstructorFrases$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConstructorFrases.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Oraculo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Oraculo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlosarioInfografia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GlosarioInfografia.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gemini.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
console.log("UCHITI_V2_ACTIVE [APP]");
function App() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [explanation, setExplanation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingId, setLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [playingId, setPlayingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [playingExplanationId, setPlayingExplanationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('archivo');
    const [showWizard, setShowWizard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Auth state de Supabase
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedPhrases, setSavedPhrases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { isPlaying: isMusicPlaying, toggleMusic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAmbientMusic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAmbientMusic"])();
    // Oraculo Live states (ahora conversacional)
    const [isLiveActive, setIsLiveActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liveTranscript, setLiveTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [oraculoMessages, setOraculoMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Constructor state
    const [phraseInput, setPhraseInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phraseResult, setPhraseResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phraseTtsText, setPhraseTtsText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [playingPhraseText, setPlayingPhraseText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPhraseLoading, setIsPhraseLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generador states
    const [veoPrompt, setVeoPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [veoResult, setVeoResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [veoLoading, setVeoLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagenPrompt, setImagenPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imagenResult, setImagenResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagenBase64, setImagenBase64] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagenLoading, setImagenLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isApiHealthy, setIsApiHealthy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 0. Verificar estado del backend AI al arrancar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkApiStatus"])().then({
                "App.useEffect": (status)=>{
                    const hasAnyEngine = Object.values(status.engines || {}).some({
                        "App.useEffect.hasAnyEngine": (v)=>v === 'ready'
                    }["App.useEffect.hasAnyEngine"]);
                    setIsApiHealthy(status.ok && hasAnyEngine);
                }
            }["App.useEffect"]).catch({
                "App.useEffect": ()=>setIsApiHealthy(false)
            }["App.useEffect"]);
        }
    }["App.useEffect"], []);
    // 1. Supabase Auth Listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "App.useEffect": ({ data: { session } })=>setSession(session)
            }["App.useEffect"]);
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "App.useEffect": (_event, session)=>{
                    setSession(session);
                }
            }["App.useEffect"]);
            return ({
                "App.useEffect": ()=>subscription.unsubscribe()
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    // 2. Traer frases guardadas de Supabase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!session?.user) {
                setSavedPhrases([]);
                return;
            }
            const fetchPhrases = {
                "App.useEffect.fetchPhrases": async ()=>{
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('phrases').select('*').eq('author_uid', session.user.id).order('created_at', {
                        ascending: false
                    });
                    if (!error && data) {
                        setSavedPhrases(data.map({
                            "App.useEffect.fetchPhrases": (d)=>({
                                    id: d.id,
                                    authorUid: d.author_uid,
                                    originalText: d.original_text,
                                    generatedPhrase: d.generated_phrase,
                                    ttsText: d.tts_text,
                                    createdAt: d.created_at
                                })
                        }["App.useEffect.fetchPhrases"]));
                    }
                }
            }["App.useEffect.fetchPhrases"];
            fetchPhrases();
            // Tiempo real con Supabase
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('schema-db-changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'phrases'
            }, {
                "App.useEffect.channel": ()=>{
                    fetchPhrases();
                }
            }["App.useEffect.channel"]).subscribe();
            return ({
                "App.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        session
    ]);
    const handleLogin = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithOAuth({
            provider: 'google'
        });
    };
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    };
    // ---- Capa 1: Sanitizador de Puntuación para TTS ----
    const sanitizeForTTS = (text)=>{
        return text.replace(/\[.*?\]/g, '').replace(/\/[^/]+\//g, '').replace(/^(Original|Composición|IPA|Cadena TTS|ANÁLISIS|SÍNTESIS):?\s*/gm, '').replace(/[\u2014\u2013\-:;!\u00a1\u00bf?*#_~`\u201c\u201d\u201e\u2018\u2019\u00ab\u00bb(){}\\|@&$/"']/g, '').replace(/,/g, ' ').replace(/\.{2,}/g, '...').replace(/\s{2,}/g, ' ').replace(/\n{2,}/g, '\n').trim();
    };
    // ---- Capa 2: Pre-procesamiento Fonético (Uchití Audio Rules v3 - Perfil LKT) ----
    const uchitiPhoneticParser = (text)=>{
        return text.toLowerCase().replace(/tsch/g, 'ch').replace(/tsh/g, 'ch').replace(/nn/g, 'n.n').replace(/mm/g, 'm.m').replace(/([aeiou])\1/g, '$1.$1').replace(/k(\s|$|\.)/g, 'kh$1').replace(/t(\s|$|\.)/g, 'th$1').replace(/p(\s|$|\.)/g, 'ph$1').replace(/[fglxz]/g, '').replace(/\s+/g, ' ').trim();
    };
    // ---- Funciones de SpeechSynthesis Nativas (Reemplazan TTS de Gemini) ----
    const speakText = async (rawText, voiceNamePattern, onStart, onEnd)=>{
        // Capa 1: Sanitizar puntuación -> Capa 2: Reglas fonéticas uchití
        const sanitized = sanitizeForTTS(rawText);
        const text = uchitiPhoneticParser(sanitized);
        // Si pasamos la bandera 'Gemini-Guama', disparamos la Estrategia 2 (Audio Nativo Alta Calidad)
        if (voiceNamePattern === 'Gemini-Guama') {
            try {
                onStart();
                const dataUri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateNativeAudioEndpoint"])(text);
                const audio = new window.Audio(dataUri);
                audio.onended = onEnd;
                audio.onerror = ()=>{
                    console.warn("Fallo en Audio Nativo Gemini. Ejecutando Fallback.");
                    fallbackNativeSpeak(text, onStart, onEnd);
                };
                await audio.play();
                return;
            } catch (e) {
                console.warn("Gemini Audio indisponible:", e.message);
                fallbackNativeSpeak(text, onStart, onEnd);
                return;
            }
        }
        // Si no, caemos al Fallback tradicional Ibérico/Navegador
        fallbackNativeSpeak(text, onStart, onEnd);
    };
    const fallbackNativeSpeak = (text, onStart, onEnd)=>{
        if (!window.speechSynthesis) return onEnd();
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-MX';
        utterance.rate = 0.45; // Cadencia ceremonial extremadamente lenta (referencia LKT)
        utterance.pitch = 0.4; // Tono grave y resonante
        const voices = window.speechSynthesis.getVoices();
        // Priorizar voces graves
        const voice = voices.find((v)=>(v.name.includes('Male') || v.name.includes('Google español')) && v.lang.includes('es')) || voices.find((v)=>v.lang.includes('es'));
        if (voice) utterance.voice = voice;
        utterance.onstart = onStart;
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
        window.speechSynthesis.speak(utterance);
    };
    const playAudio = async (item)=>{
        speakText(item.vocablo, 'Google', ()=>setPlayingId(item.id), ()=>setPlayingId(null));
    };
    const playExplanation = async (id, text)=>{
        speakText(text, 'Sabina', ()=>setPlayingExplanationId(id), ()=>setPlayingExplanationId(null));
    };
    // ---- Oraculo (Live API convertido a chat de texto con TTS) ----
    const startLiveSession = async ()=>{
        setIsLiveActive(true);
        setLiveTranscript([
            "[SISTEMA]: ENLACE ESTABLECIDO. EL ORÁCULO PROCESA CONSULTAS. ENTRADA DE DATOS ABIERTA."
        ]);
        setOraculoMessages([]);
    };
    const stopLiveSession = ()=>{
        setIsLiveActive(false);
        window.speechSynthesis.cancel();
        setLiveTranscript((prev)=>[
                ...prev,
                "[SISTEMA]: Conexión terminada."
            ]);
    };
    // Envía un mensaje al Oráculo Uchití (chat conversacional con Gemini)
    const sendToOraculo = async (text)=>{
        const newMessage = {
            role: 'user',
            content: text
        };
        const newContext = [
            ...oraculoMessages,
            newMessage
        ];
        setOraculoMessages(newContext);
        setLiveTranscript((prev)=>[
                ...prev,
                `[TÚ]: ${text}`
            ]);
        try {
            const responseText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consultarOraculo"])(newContext);
            setOraculoMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: responseText
                    }
                ]);
            setLiveTranscript((prev)=>[
                    ...prev,
                    `[ORÁCULO]: ${responseText}`
                ]);
            // Auto leer respuesta del Oráculo en su voz natural nativa profunda
            speakText(responseText, 'Gemini-Guama', ()=>{}, ()=>{});
        } catch (e) {
            console.error('[sendToOraculo]', e.message);
            setLiveTranscript((prev)=>[
                    ...prev,
                    `[SISTEMA]: Error de cognición — ${e.message}`
                ]);
        }
    };
    // ---- Generador y Explicador (via cliente AI centralizado) ----
    const explainContext = async (item)=>{
        setLoadingId(item.id);
        try {
            const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explainVocablo"])(item.vocablo, item.significado);
            setExplanation((prev)=>({
                    ...prev,
                    [item.id]: text
                }));
        } catch (error) {
            console.error('[explainContext]', error.message);
            setIsApiHealthy(false);
            setExplanation((prev)=>({
                    ...prev,
                    [item.id]: `[ERROR] ${error.message}`
                }));
        } finally{
            setLoadingId(null);
        }
    };
    const buildPhrase = async ()=>{
        if (!phraseInput) return;
        setIsPhraseLoading(true);
        try {
            const jsonResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildUchitiPhrase"])(phraseInput);
            const formattedResult = `[ ANÁLISIS MORFOLÓGICO ]\nOriginal: ${jsonResponse.palabra_original}\n\n[ SÍNTESIS UCHITÍ ]\nComposición: ${jsonResponse.analisis_silabico}\nIPA: /${jsonResponse.transcripcion_ipa}/\n\n[ CADENA TTS ]\n${jsonResponse.cadena_optimizada_tts}`;
            setPhraseResult(formattedResult);
            if (jsonResponse.cadena_optimizada_tts) {
                setPhraseTtsText(jsonResponse.cadena_optimizada_tts);
                playPhraseAudio(jsonResponse.cadena_optimizada_tts);
            }
            if (session?.user) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('phrases').insert({
                    author_uid: session.user.id,
                    original_text: phraseInput,
                    generated_phrase: formattedResult,
                    tts_text: jsonResponse.cadena_optimizada_tts || ''
                });
            }
        } catch (error) {
            console.error('[buildPhrase]', error.message);
            setPhraseResult(`[ERROR] Fallo en la sinapsis del motor morfológico: ${error.message}`);
        } finally{
            setIsPhraseLoading(false);
        }
    };
    const playPhraseAudio = (text)=>{
        speakText(text, 'Gemini-Guama', ()=>setPlayingPhraseText(text), ()=>setPlayingPhraseText(null));
    };
    const toggleRecording = ()=>{
        if (isRecording) {
            setIsRecording(false);
        } else {
            setIsRecording(true);
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) return setIsRecording(false);
            const recognition = new SpeechRecognition();
            recognition.lang = 'es-MX';
            recognition.onresult = (e)=>{
                const t = e.results[0][0].transcript;
                setPhraseInput((prev)=>prev ? `${prev} ${t}` : t);
            };
            recognition.onend = ()=>setIsRecording(false);
            recognition.start();
        }
    };
    const generateImage = async ()=>{
        if (!imagenPrompt) return;
        setImagenLoading(true);
        setImagenBase64(null); // Reset previous image
        try {
            const res = await fetch('/api/describe-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: imagenPrompt
                })
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setImagenResult(data.text);
            if (data.imageBase64) {
                setImagenBase64(data.imageBase64);
            }
        } catch (error) {
            console.error('[generateImage]', error.message);
            setImagenResult(`[ERROR] ${error.message}`);
        } finally{
            setImagenLoading(false);
        }
    };
    const generateVideo = async ()=>{
        if (!veoPrompt && !selectedFile) return;
        setVeoLoading(true);
        try {
            if (selectedFile) {
                setVeoResult(`[Análisis Qwen-VL de Archivo]: Procesamiento simulado para rediseño sin acceso GPU directo... \n(En producción apuntar a puerto :8002)`);
            } else {
                const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeImage"])(`Formato de Guion Audiovisual: ${veoPrompt}`);
                setVeoResult(`[Narrativa Audiovisual Generada]:\n\n${text}`);
            }
        } catch (error) {
            console.error('[generateVideo]', error.message);
            setVeoResult(`[ERROR] ${error.message}`);
        } finally{
            setVeoLoading(false);
        }
    };
    // Tema Visual
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (darkMode) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
        }
    }["App.useEffect"], [
        darkMode
    ]);
    const toggleDarkMode = ()=>setDarkMode(!darkMode);
    const filteredResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[filteredResults]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARCHIVO_VIVO"].filter({
                "App.useMemo[filteredResults]": (item)=>item.vocablo.toLowerCase().includes(searchQuery.toLowerCase()) || item.significado.toLowerCase().includes(searchQuery.toLowerCase())
            }["App.useMemo[filteredResults]"]);
        }
    }["App.useMemo[filteredResults]"], [
        searchQuery
    ]);
    if (showWizard) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TerminalWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onComplete: (tab)=>{
                setActiveTab(tab);
                setShowWizard(false);
            }
        }, void 0, false, {
            fileName: "[project]/src/App.tsx",
            lineNumber: 383,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen transition-colors duration-500 relative overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain-overlay"
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            !isApiHealthy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--accent)] text-[var(--bg)] border-b border-[var(--accent)] p-2 text-center text-[10px] font-bold uppercase tracking-[0.3em] fixed top-0 left-0 right-0 z-[60] animate-pulse",
                children: "[ MODO SOBERANÍA ACTIVO: ARCHIVO HISTÓRICO CARGADO ]"
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 397,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `max-w-5xl mx-auto px-6 pt-12 pb-8 relative z-10 border-b border-[var(--border)] mb-8 ${!isApiHealthy && 'mt-8'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-bold tracking-tighter",
                                                children: "UCHITÍ EN CÓDIGO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 410,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.2em] font-medium opacity-70",
                                                children: "PROYECTO DATEMBÀ: RECUPERACIÓN ACTIVA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 413,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 bg-[var(--card-bg)] p-2 border border-[var(--border)]",
                                children: [
                                    'archivo',
                                    'generador',
                                    'juego',
                                    'constructor',
                                    'oraculo',
                                    'glosario'
                                ].map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab),
                                        className: `px-4 py-2 text-sm font-bold transition-all capitalize ${activeTab === tab ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`,
                                        children: [
                                            "[",
                                            i + 1,
                                            "] ",
                                            tab === 'generador' ? 'Arte Conceptual' : tab
                                        ]
                                    }, tab, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mt-4",
                        children: [
                            activeTab === 'archivo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-2xl w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent)] opacity-70 font-bold",
                                        children: '>'
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar vocablo...",
                                        className: "w-full bg-[var(--input-bg)] border border-[var(--border)] py-4 pl-10 pr-8 focus:outline-none focus:bg-[var(--accent-soft)] transition-all text-lg font-mono",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 ml-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleMusic,
                                        className: `p-2 transition-colors border border-[var(--border)] ${isMusicPlaying ? 'bg-[var(--accent)] text-[var(--bg)]' : 'hover:bg-[var(--accent)] hover:text-[var(--bg)]'}`,
                                        title: "Música Ambiental",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleDarkMode,
                                        className: "p-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors border border-[var(--border)]",
                                        title: "Alternar Tema",
                                        children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 459,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 459,
                                            columnNumber: 47
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono opacity-70 border border-[var(--border)] px-3 py-1",
                                                children: session.user.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "p-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors border border-[var(--border)]",
                                                title: "Cerrar Sesión",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogin,
                                        className: "flex items-center gap-2 px-4 py-2 border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors text-xs font-bold uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this),
                                            "[ IDENTIFICARSE ]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-5xl mx-auto px-6 pb-24 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        activeTab === 'archivo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: filteredResults.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VocabloCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VocabloCard"], {
                                    item: item,
                                    explanation: explanation[item.id],
                                    playingId: playingId,
                                    loadingId: loadingId,
                                    playingExplanationId: playingExplanationId,
                                    playAudio: playAudio,
                                    explainContext: explainContext,
                                    playExplanation: playExplanation
                                }, item.id, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this))
                        }, "archivo", false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        activeTab === 'generador' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Generador$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Generador"], {
                            imagenPrompt: imagenPrompt,
                            setImagenPrompt: setImagenPrompt,
                            generateImage: generateImage,
                            imagenLoading: imagenLoading,
                            imagenResult: imagenResult,
                            imagenBase64: imagenBase64,
                            veoPrompt: veoPrompt,
                            setVeoPrompt: setVeoPrompt,
                            selectedFile: selectedFile,
                            setSelectedFile: setSelectedFile,
                            generateVideo: generateVideo,
                            veoLoading: veoLoading,
                            veoResult: veoResult
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        activeTab === 'constructor' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConstructorFrases$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstructorFrases"], {
                            phraseInput: phraseInput,
                            setPhraseInput: setPhraseInput,
                            isRecording: isRecording,
                            toggleRecording: toggleRecording,
                            buildPhrase: buildPhrase,
                            isPhraseLoading: isPhraseLoading,
                            phraseResult: phraseResult,
                            phraseTtsText: phraseTtsText,
                            playPhraseAudio: playPhraseAudio,
                            playingPhraseText: playingPhraseText,
                            user: session?.user || null,
                            savedPhrases: savedPhrases
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 535,
                            columnNumber: 11
                        }, this),
                        activeTab === 'oraculo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Oraculo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Oraculo"], {
                            liveTranscript: liveTranscript,
                            isLiveActive: isLiveActive,
                            startLiveSession: startLiveSession,
                            stopLiveSession: stopLiveSession,
                            sendToOraculo: sendToOraculo
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, this),
                        activeTab === 'glosario' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlosarioInfografia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlosarioInfografia"], {}, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 562,
                            columnNumber: 11
                        }, this),
                        activeTab === 'juego' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Minijuego$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this)
                        }, "juego", false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this),
                        activeTab === 'archivo' && filteredResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "text-center py-32 opacity-50 text-2xl",
                            children: "[!] El silencio de la base de datos no arroja resultados."
                        }, "empty", false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 578,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 490,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "max-w-5xl mx-auto px-6 py-12 text-center border-t border-[var(--border)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 opacity-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-[0.4em] font-bold",
                            children: "© 2026 Uchití OS • Sistema de Recuperación Local"
                        }, void 0, false, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: [
                                '"Betania tina aena sheshutipe" — ',
                                session ? 'Sincronizado' : 'Modo Standalone'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 393,
        columnNumber: 5
    }, this);
}
_s(App, "yW+8VHcWXlhCX58pBQC/Ygy5+m8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAmbientMusic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAmbientMusic"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Page() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setMounted(true);
        }
    }["Page.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-[var(--background)] text-[var(--accent)] text-xs font-mono uppercase tracking-[0.3em]",
            children: "[ INICIANDO NÚCLEO UCHITÍ ]"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full relative overflow-x-hidden min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Page, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0._ofef._.js.map