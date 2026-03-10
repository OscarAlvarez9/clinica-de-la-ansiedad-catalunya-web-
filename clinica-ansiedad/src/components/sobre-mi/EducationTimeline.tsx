'use client';

import { motion } from 'framer-motion';

const education = [
    { year: "2020", title: "Postgrado En Duelo y Acompañamiento" },
    { year: "2012", title: "Community Manager (U.O.C)" },
    { year: "2010", title: "Máster en Hipno-Psicoterapeuta" },
    { year: "2010", title: "Certificado American Association of Professional Hypnotherapist" },
    { year: "2010", title: "Postgrado en Coaching Personal Profesional (Centro Mitikum)" },
    { year: "2006", title: "P.N.L. Aplicada a las ventas" },
    { year: "2001", title: "Dr. Psicología Psicoanalítica (C.I.D)" },
    { year: "2001", title: "Psicoanalista Directo" },
    { year: "2000", title: "Seminarios Sigmund Freud & Jacques Lacan (Ibiza)" },
    { year: "1999", title: "Psicoterapeuta (C.I.D)" },
    { year: "1996", title: "Training in Ericksonian Hypnotherapy con Jeffrey k Zeig" },
    { year: "1995", title: "Máster en Programación Neuro Lingüística" },
    { year: "1993", title: "Máster en Psicología Analógica e Hipnosis Dinámica" },
    { year: "1991", title: "Master en Psicoterapia Integral por el Estudio de Bioinformación" },
].reverse();

export default function EducationTimeline() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-cream/30">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-4">
                        Trayectoria Académica
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold to-sage mx-auto mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">Una vida dedicada al aprendizaje continuo y la especialización terapéutica. Más de 30 años de formación y crecimiento profesional.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: (index % 2) * 0.08 }}
                            className="group"
                        >
                            <div className="h-full bg-white backdrop-blur-sm p-6 md:p-7 rounded-2xl border border-sage/20 shadow-sm hover:shadow-xl hover:border-sage/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                {/* Gradient accent top-right */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:from-gold/20 transition-all"></div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="flex-shrink-0 pt-1">
                                        <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl border border-gold/30 group-hover:border-gold/50 group-hover:from-gold/30 transition-all">
                                            <span className="font-bold text-gold text-sm text-center">{edu.year}</span>
                                        </span>
                                    </div>
                                    <div className="flex-grow pt-1.5">
                                        <h3 className="text-navy font-semibold text-balance leading-snug group-hover:text-gold transition-colors duration-300">
                                            {edu.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
