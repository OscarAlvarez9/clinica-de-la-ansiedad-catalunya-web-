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
];

export default function EducationTimeline() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-4">
                        Trayectoria Académica
                    </h2>
                    <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-lg text-text/70">Una vida dedicada al aprendizaje continuo y la especialización terapéutica.</p>
                </motion.div>

                <div className="relative border-l-2 border-sage/30 ml-4 md:ml-0">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05 }}
                            className="mb-8 ml-8 relative"
                        >
                            <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-sage rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-navy rounded-full"></div>
                            </div>
                            <div className="bg-cream/30 p-4 rounded-lg border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                                <span className="font-bold text-sage block mb-1">{edu.year}</span>
                                <h3 className="text-navy font-medium text-balance">{edu.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
