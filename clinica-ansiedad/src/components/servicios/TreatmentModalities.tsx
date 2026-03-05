'use client';

import { motion } from 'framer-motion';
import { Building2, Laptop } from 'lucide-react';

export default function TreatmentModalities() {
    return (
        <section className="py-20 bg-cream relative">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        Nuestros Formatos
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-6">
                        Dos modalidades, idéntico rigor clínico
                    </h2>
                    <div className="w-16 h-1 bg-gold mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Presencial */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-glass transform transition-transform group-hover:scale-[1.02]"></div>
                        <div className="relative p-10 flex flex-col items-start gap-6 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-sage/20 flex items-center justify-center text-sage">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl text-navy font-bold">Psicoterapia Presencial</h3>
                            <div className="text-text/80 leading-relaxed space-y-4">
                                <p>
                                    El tratamiento presencial de la ansiedad permite trabajar de forma cercana y personalizada los síntomas que afectan al día a día: inquietud, miedo, bloqueo emocional o sensación de pérdida de control.
                                </p>
                                <p>
                                    En Clínica de la Ansietat Catalunya, diseñamos planes terapéuticos adaptados a cada persona para lograr mejoras reales y sostenidas. Nuestro enfoque combina evaluación clínica, psicoterapia especializada y estrategias prácticas orientadas a reducir la ansiedad y prevenir recaídas.
                                </p>
                                <p>
                                    El contacto directo en consulta favorece un trabajo profundo que ayuda a comprender el origen del malestar y a recuperar estabilidad emocional y calidad de vida.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Online */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-glass transform transition-transform group-hover:scale-[1.02]"></div>
                        <div className="relative p-10 flex flex-col items-start gap-6 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
                                <Laptop className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl text-navy font-bold">Psicoterapia Online</h3>
                            <div className="text-text/80 leading-relaxed space-y-4">
                                <p>
                                    El tratamiento online de la ansiedad permite iniciar un proceso terapéutico cómodo, flexible y eficaz desde casa.
                                </p>
                                <p>
                                    En Clínica de la Ansietat Catalunya, ofrecemos tratamientos online personalizados para reducir la ansiedad, mejorar la regulación emocional y recuperar estabilidad personal. La terapia online sigue el mismo proceso clínico que la presencial: evaluación individual, objetivos terapéuticos claros y estrategias prácticas adaptadas a cada persona.
                                </p>
                                <p>
                                    Esta modalidad facilita la continuidad del tratamiento y se adapta a ritmos de vida exigentes sin perder calidad terapéutica.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
