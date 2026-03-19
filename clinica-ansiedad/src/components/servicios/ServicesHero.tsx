'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FDFBF7]">
            {/* Subtle Dynamic Immersive Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/15 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-[#164E63]/10 rounded-full blur-[150px] mix-blend-multiply" />
                <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#164E63 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.04 }} />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="bg-white/60 backdrop-blur-md border border-navy/10 text-navy text-xs font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm mb-8 inline-block">
                        Especialidades Clínicas
                    </span>
                    
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-navy tracking-tight leading-[1.1] mb-10">
                        Tratamiento de la Ansiedad, <br />
                        <span className="italic text-gold font-serif">Depresión y TOC</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed max-w-4xl text-balance mb-12">
                        En Clínica de la Ansiedad Catalunya estamos especializados en el tratamiento del trastorno de ansiedad generalizada, crisis de pánico, depresión, trastorno obsesivo compulsivo, fobia social y agorafobia. 
                        <strong> Combinamos psicoterapia psicoanalítica y métodos basados en la evidencia.</strong>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl w-full">
                        <div className="bg-white/50 backdrop-blur-sm border border-navy/5 rounded-[32px] p-8 shadow-glass-light hover:shadow-glass hover:-translate-y-1 transition-all duration-500">
                            <h3 className="text-navy font-bold font-serif text-2xl mb-4 italic">El Origen del Síntoma</h3>
                            <p className="text-navy/70 leading-relaxed font-light">
                                Desde hace más de 30 años acompañamos a personas que buscan comprender los síntomas de ansiedad, sus causas y cómo se cura desde la raíz. Ofrecemos consulta psicológica presencial en Barcelona y toda Catalunya, así como terapia online.
                            </p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-navy/5 rounded-[32px] p-8 shadow-glass-light hover:shadow-glass hover:-translate-y-1 transition-all duration-500">
                            <h3 className="text-navy font-bold font-serif text-2xl mb-4 italic">Cambio Estructural</h3>
                            <p className="text-navy/70 leading-relaxed font-light">
                                Diseñamos intervenciones personalizadas que no solo alivian los síntomas físicos de la ansiedad — palpitaciones, hiperventilación, insomnio — sino que generan cambios estructurales profundos y duraderos.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
