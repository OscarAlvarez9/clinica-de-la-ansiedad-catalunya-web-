'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-navy tracking-tight mb-6">
                            ¿Quién <span className="italic text-sage">soy?</span>
                        </h1>
                        <div className="w-24 h-1 bg-gold mb-8"></div>
                        <p className="text-xl md:text-2xl text-navy/80 font-medium leading-relaxed text-balance">
                            Soy Joan Ramon Soto Cifuente, Fundador del Espacio Psicoanálisis Directo Online y Psicoterapeuta.
                        </p>
                        <p className="mt-6 text-lg text-text/80 leading-relaxed text-balance">
                            Trabajo desde el abordaje del Psicoanálisis Directo para comprender y resolver la raíz profunda del sufrimiento emocional, ofreciendo un acompañamiento cercano y riguroso.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] md:aspect-square bg-gradient-to-tr from-sage/20 to-gold/20 rounded-t-full rounded-b-3xl relative overflow-hidden border border-white/50 shadow-glass">
                            {/* Optional: Add actual image here later. For now, elegant placeholder styling */}
                            <div className="absolute inset-0 bg-navy/5 backdrop-blur-sm mix-blend-overlay"></div>
                            <div className="absolute inset-0 flex items-center justify-center flex-col text-navy/30">
                                <span className="font-serif text-4xl mb-2">JRS</span>
                                <span className="text-sm tracking-widest uppercase">Clínica de la Ansiedad</span>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-40 h-40 bg-sage/10 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
