'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Brain, Activity, Compass, AlertCircle } from 'lucide-react';

const specialties = [
    {
        icon: <Brain className="w-6 h-6 text-navy" />,
        title: "Tratamiento de la Depresión",
        subtitle: "Psicoterapia Especializada en Catalunya",
        content: "La depresión se caracteriza por un estado de ánimo triste y una pérdida de interés que se mantiene en el tiempo, afectando la energía, la motivación y la capacidad de disfrutar. Puede aparecer cansancio, dificultad para concentrarse, alteraciones del sueño y una visión negativa de sí mismo y futuro."
    },
    {
        icon: <Activity className="w-6 h-6 text-sage" />,
        title: "Diagnóstico del trastorno de pánico",
        subtitle: "Evaluación y Tratamiento",
        content: "Con un diagnóstico correcto, el trastorno de pánico puede tratarse de forma eficaz mediante terapia psicológica especializada, y en algunos casos con apoyo farmacológico. En Clínica de la Ansietat Catalunya trabajamos con tratamientos basados en la evidencia para ayudarte a recuperar seguridad y reducir el miedo a nuevas crisis."
    },
    {
        icon: <Compass className="w-6 h-6 text-gold" />,
        title: "Agorafobia y pérdida de control",
        subtitle: "Tratamiento Integral",
        content: "La agorafobia aparece cuando el miedo a sufrir una crisis de ansiedad lleva a evitar transportes, espacios abiertos o lugares concurridos. En Clínica de la Ansietat Catalunya tratamos la agorafobia y el pánico con terapia especializada para recuperar seguridad, movilidad y calidad de vida con apoyo profesional siempre cercano hoy."
    },
    {
        icon: <AlertCircle className="w-6 h-6 text-navy" />,
        title: "Diferenciar el trastorno de pánico",
        subtitle: "Valoración Clínica Exhaustiva",
        content: "En Clínica de la Ansietat Catalunya realizamos valoraciones clínicas para identificar correctamente el origen de los síntomas y ofrecer un tratamiento ajustado a cada persona. Una evaluación rigurosa es el primer paso para reducir el miedo y recuperar sensación de control."
    }
];

export default function SpecialtiesSection() {
    return (
        <section className="py-24 bg-navy text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        Áreas de Intervención
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                        Especialidades Clínicas
                    </h2>
                    <div className="w-16 h-1 bg-sage mx-auto mb-8"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {specialties.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-none rounded-2xl">
                                <CardBody className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/10 rounded-xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-white/90 leading-tight">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                                                {item.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/70 leading-relaxed text-sm">
                                        {item.content}
                                    </p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
