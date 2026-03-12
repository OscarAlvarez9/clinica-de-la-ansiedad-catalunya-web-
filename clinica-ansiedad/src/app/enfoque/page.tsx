'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ArrowRight, 
    Layers, 
    Fingerprint, 
    ShieldCheck, 
    BrainCircuit, 
    Sparkles, 
    Search, 
    Hammer, 
    HeartPulse, 
    Compass,
    Minus,
    Plus
} from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';

const PILLARS = [
    {
        title: "Diagnóstico Estructural",
        subtitle: "Más allá de la superficie",
        icon: <Fingerprint className="w-8 h-8 text-gold" />,
        desc: "No nos quedamos en las etiquetas. Realizamos una cartografía clínica de tu biografía para entender la arquitectura de tu ansiedad. Buscamos el origen, no solo el síntoma.",
        details: "Identificamos los mandatos inconscientes y los patrones que sostienen tu angustia."
    },
    {
        title: "Desarticulación",
        subtitle: "Romper el ciclo",
        icon: <Hammer className="w-8 h-8 text-gold" />,
        desc: "Intervenimos directamente en los mecanismos que mantienen viva la ansiedad. No se trata solo de hablar, sino de desarmar la estructura del conflicto interno.",
        details: "A través del psicoanálisis directo, las causas profundas pierden su poder paralizante."
    },
    {
        title: "Soberanía Emocional",
        subtitle: "Autonomía real",
        icon: <ShieldCheck className="w-8 h-8 text-gold" />,
        desc: "El objetivo final es que recuperes el timón de tu vida. Consolidamos cambios estructurales que previenen recaídas y fortalecen tu equilibrio natural a largo plazo.",
        details: "Un cambio profundo que te permite vivir sin depender de la terapia indefinidamente."
    }
];

const CLINICAL_PATH = [
    {
        num: "01",
        title: "Apertura y Escucha",
        desc: "Las primeras sesiones son fundamentales para establecer un espacio de seguridad absoluta. Escuchamos lo que tu síntoma intenta decirnos sin juzgar ni etiquetar.",
        subtext: "Establecimiento del vínculo clínico y diagnóstico inicial."
    },
    {
        num: "02",
        title: "Cartografía de Angustia",
        desc: "Mapeamos tu historia personal. Identificamos los eventos y mandatos que configuraron tu respuesta ante la vida y que hoy se manifiestan como ansiedad.",
        subtext: "Localización de los ejes del conflicto inconsciente."
    },
    {
        num: "03",
        title: "Intervención Directa",
        desc: "El núcleo del tratamiento. Confrontamos los patrones repetitivos. Aquí es donde empiezas a sentir que la ansiedad ya no domina tu narrativa diaria.",
        subtext: "Desarticulación activa de las defensas patológicas."
    },
    {
        num: "04",
        title: "Reorganización Mental",
        desc: "Tu psique empieza a estructurarse de una forma nueva. Los mecanismos de defensa saludables sustituyen al dolor y la parálisis de la ansiedad.",
        subtext: "Consolidación de las nuevas herramientas emocionales."
    },
    {
        num: "05",
        title: "Integración Vital",
        desc: "Aplicas los cambios a tu realidad cotidiana: relaciones, trabajo, soledad. Confirmamos que la transformación es sólida y resistente a los retos externos.",
        subtext: "Verificación de la autonomía en contextos reales."
    },
    {
        num: "06",
        title: "Soberanía y Alta",
        desc: "El tratamiento termina cuando has recuperado tu plenitud. Te llevas un conocimiento profundo de ti mismo que te protege de futuras crisis.",
        subtext: "Cierre del proceso y alta clínica definitiva."
    }
];

export default function EnfoquePage() {
    const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-gold/20 selection:text-navy">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* ===== HERO: The Architecture of the Mind ===== */}
                <section className="relative pt-32 pb-40 px-6 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-navy/5 blur-[120px]" />
                        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gold/10 blur-[100px]" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-navy/5 text-navy text-xs font-black uppercase tracking-[0.2em] mb-8">
                                    <BrainCircuit className="w-4 h-4 text-gold" />
                                    Psicoanálisis Directo Especializado
                                </span>
                                <h1 className="text-6xl md:text-8xl font-serif text-navy font-bold leading-[0.95] mb-10 tracking-tighter">
                                    La Arquitectura de tu <span className="text-gold italic font-light">bienestar</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-navy/60 leading-relaxed max-w-xl font-medium mb-10">
                                    No buscamos silenciar los síntomas, buscamos entender por qué están ahí. Transformamos la estructura de la ansiedad desde su raíz más profunda.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button 
                                        onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="h-16 px-10 rounded-full bg-navy text-white font-bold flex items-center gap-3 hover:bg-navy/90 transition-all shadow-xl shadow-navy/10"
                                    >
                                        Explorar metodología <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <Link 
                                        href="/sobre-mi"
                                        className="h-16 px-10 rounded-full bg-white border border-navy/10 text-navy font-bold flex items-center gap-3 hover:bg-navy/5 transition-all"
                                    >
                                        Sobre Joan Ramon
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative aspect-square max-w-lg mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-gold/20 rounded-[4rem] rotate-6 border border-white/50 backdrop-blur-3xl animate-pulse-slow" />
                                    <div className="absolute inset-0 bg-white/40 rounded-[4rem] -rotate-3 border border-white/80 backdrop-blur-3xl shadow-2xl flex items-center justify-center p-12">
                                        <div className="space-y-8 w-full">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className={`h-4 bg-navy/${i*10} rounded-full w-${12-i}/12 animate-pulse`} />
                                            ))}
                                            <div className="w-20 h-20 rounded-3xl bg-gold flex items-center justify-center shadow-lg shadow-gold/30">
                                                <Sparkles className="w-10 h-10 text-white" />
                                            </div>
                                            {[4, 5].map((i) => (
                                                <div key={i} className={`h-4 bg-navy/10 rounded-full w-${i+5}/12 animate-pulse`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== THE CORE METHOD: Bento Pillars ===== */}
                <section id="metodo" className="py-24 lg:py-40 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-serif text-navy font-bold mb-8">Los Pilares del Cambio</h2>
                            <p className="text-lg text-navy/50 leading-relaxed">
                                Nuestro método es un proceso riguroso y evolutivo diseñado para proporcionar no solo alivio, sino una transformación mental duradera.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {PILLARS.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    onMouseEnter={() => setHoveredPillar(idx)}
                                    onMouseLeave={() => setHoveredPillar(null)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-10 lg:p-12 rounded-[2.5rem] bg-[#FAFAFA] border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 flex flex-col items-start"
                                >
                                    <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                                        <div className="group-hover:text-white transition-colors duration-500">
                                            {pillar.icon}
                                        </div>
                                    </div>
                                    <span className="text-gold text-xs font-black uppercase tracking-widest mb-3">{pillar.subtitle}</span>
                                    <h3 className="text-3xl font-serif text-navy font-bold mb-6">{pillar.title}</h3>
                                    <p className="text-navy/60 leading-relaxed mb-8 flex-grow">
                                        {pillar.desc}
                                    </p>
                                    <div className="pt-6 border-t border-navy/5 w-full">
                                        <p className="text-sm font-medium text-navy/40 italic">
                                            {pillar.details}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== EL CAMINO CLÍNICO: Visual Timeline ===== */}
                <section className="py-24 lg:py-40 px-6 bg-cream/40 text-navy relative overflow-hidden">
                    {/* Background Texture - very subtle */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2C6E8A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 lg:mb-32">
                            <div className="max-w-2xl">
                                <span className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Patient Journey</span>
                                <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">Tu recorrido hacia la <span className="text-gold italic font-light">libertad</span></h2>
                            </div>
                            <div className="lg:pb-4">
                                <p className="text-navy/40 text-lg max-w-sm">
                                    Un proceso estructurado en 6 etapas clínicas, desde el primer contacto hasta el alta definitiva.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-navy/10">
                            {CLINICAL_PATH.map((stage, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 lg:p-14 border-r border-b border-navy/10 hover:bg-white/60 transition-colors group bg-white/20 backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-4xl font-serif text-navy/5 group-hover:text-gold/30 transition-colors duration-500">{stage.num}</span>
                                        <div className="w-2 h-2 rounded-full bg-gold" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-4">{stage.title}</h3>
                                    <p className="text-navy/60 mb-8 leading-relaxed">
                                        {stage.desc}
                                    </p>
                                    <p className="text-gold text-xs font-black uppercase tracking-widest bg-gold/5 w-fit px-3 py-1 rounded-full border border-gold/10">
                                        {stage.subtext}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== THE CONTRAST: Symptomatic vs Structural ===== */}
                <section className="py-24 lg:py-40 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-serif text-navy font-bold leading-tight">
                                    ¿Por qué <span className="text-gold italic">funciona</span> donde otros fallan?
                                </h2>
                                <p className="text-lg text-navy/60 leading-relaxed">
                                    Muchos pacientes llegan a nuestra clínica tras haber probado terapias centradas solo en técnicas de relajación o gestión de pensamientos. El psicoanálisis directo no busca que "gestiones" tu ansiedad, busca que ya no la necesites.
                                </p>
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                            <Minus className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy">Alivio Sintomático</h4>
                                            <p className="text-navy/50 text-sm">Se centra en silenciar la alarma. Los cambios suelen ser temporales y la ansiedad suele reaparecer en otros momentos de estrés.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                                            <Plus className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy">Cambio Estructural</h4>
                                            <p className="text-navy/50 text-sm">Resolvemos el conflicto que genera la alarma. El cambio es permanente porque la arquitectura de tu respuesta emocional se transforma.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-navy/5 p-12 lg:p-16 rounded-[4rem] text-center">
                                <HeartPulse className="w-20 h-20 text-gold mx-auto mb-10" />
                                <h3 className="text-4xl font-serif text-navy font-bold mb-6">Eficiencia Clínica</h3>
                                <p className="text-navy/40 mb-10 text-lg">
                                    Más de 30 años de especialización exclusiva en trastornos de ansiedad nos permiten identificar el núcleo del problema con precisión clínica.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-5xl font-serif text-gold font-bold mb-2">+mil</p>
                                        <p className="text-xs font-black uppercase tracking-widest text-navy/40">Pacientes</p>
                                    </div>
                                    <div>
                                        <p className="text-5xl font-serif text-gold font-bold mb-2">95%</p>
                                        <p className="text-xs font-black uppercase tracking-widest text-navy/40">Efectividad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== BOOKING & FAQ ===== */}
                <BookingOptions />
                <FAQSection />
                <StickyBookingButton />
            </main>

            <Footer />
        </div>
    );
}
