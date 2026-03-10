'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Brain, Activity, Compass, AlertCircle } from 'lucide-react';

const specialties = [
    {
        icon: <Brain className="w-6 h-6 text-navy" />,
        title: "Trastorno de Ansiedad Generalizada",
        subtitle: "Síntomas, Causas y Tratamiento",
        content: "El trastorno de ansiedad generalizada se manifiesta con preocupación constante, tensión muscular, dificultad para dormir y síntomas físicos como palpitaciones o hiperventilación. Tratamos las causas de la ansiedad desde su origen para lograr cambios profundos y duraderos."
    },
    {
        icon: <Activity className="w-6 h-6 text-sage" />,
        title: "Depresión y Ansiedad",
        subtitle: "Tratamiento Combinado Especializado",
        content: "La depresión y la ansiedad frecuentemente aparecen juntas, generando tristeza profunda, pérdida de interés, fatiga y angustia constante. Nuestro abordaje psicoanalítico trata ambas condiciones de forma integral, comprendiendo las causas comunes que las alimentan."
    },
    {
        icon: <Compass className="w-6 h-6 text-gold" />,
        title: "Trastorno Obsesivo Compulsivo (TOC) y Fobias",
        subtitle: "TOC, Fobia Social, Agorafobia e Hipocondría",
        content: "El trastorno obsesivo compulsivo, la fobia social, la agorafobia y la hipocondría son manifestaciones comunes de la ansiedad. Tratamos los pensamientos obsesivos, el miedo social y las conductas de evitación desde la raíz para recuperar la libertad y la calidad de vida."
    },
    {
        icon: <AlertCircle className="w-6 h-6 text-navy" />,
        title: "Crisis de Ansiedad y Ataques de Pánico",
        subtitle: "Intervención Urgente y Tratamiento de Raíz",
        content: "Los síntomas de una crisis de ansiedad incluyen palpitaciones, hiperventilación, hormigueo, dolor en el brazo izquierdo y miedo intenso. Realizamos una evaluación clínica exhaustiva para identificar el origen de las crisis y diseñar un tratamiento que detenga el ciclo del pánico."
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
