"use client";
import { motion } from "framer-motion";
import { History, Globe, ShieldQuestion, Handshake } from "lucide-react";

export default function WhyUsSection() {
    const points = [
        {
            icon: <History className="w-8 h-8" />,
            title: "30 años de experiencia",
            desc: "Especializados en el tratamiento de la ansiedad desde 1993, acumulando miles de horas clínicas."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Pioneros Online",
            desc: "Más de 25 años perfeccionando la terapia telemática a nivel nacional mucho antes del auge digital."
        },
        {
            icon: <ShieldQuestion className="w-8 h-8" />,
            title: "Resolvemos causas",
            desc: "No aplicamos parches. Vamos a la raíz psicológica del síntoma para evitar recaídas futuras."
        },
        {
            icon: <Handshake className="w-8 h-8" />,
            title: "Atención directa",
            desc: "Acompañamiento por Joan Ramon Soto y su equipo especializado. Proceso humano, ético y personalizado."
        }
    ];

    return (
        <section className="bg-cream py-24 px-6 border-b border-navy/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-white border border-gold/20 flex items-center justify-center text-gold mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-serif text-navy font-bold mb-3">
                                {point.title}
                            </h3>
                            <p className="text-navy/70 leading-relaxed text-sm">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
