'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Briefcase, Lightbulb, Users } from 'lucide-react';

const expItems = [
    {
        icon: <Briefcase className="w-6 h-6 text-navy" />,
        title: "Clínica de la Ansiedad – Psicoterapia Breve",
        date: "1994 - Actualidad",
        desc: "Director y fundador. Departamento de investigación en comunicación no verbal y aplicación de terapias breves."
    },
    {
        icon: <Users className="w-6 h-6 text-sage" />,
        title: "Terapia Clínica Multidisciplinar",
        date: "Experiencia Continua",
        desc: "Terapia individual, de parejas y de grupo orientada a fobias, adicciones, ansiedad, estrés y depresión. Especialización en atención telefónica hispanohablante."
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-gold" />,
        title: "Consultoría Organizacional y Formación",
        date: "Experiencia Continua",
        desc: "Coaching de gestión del estrés en corporaciones. Experto en comunicación verbal/no verbal para selección de personal. Creador de talleres de productividad y Mindfulness para empresas."
    }
];

export default function ExperienceSection() {
    return (
        <section className="py-20 bg-cream/50 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-24"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-6">
                            Bagaje y Experiencia Profesional
                        </h2>
                        <div className="w-16 h-1 bg-sage mb-6"></div>
                        <p className="text-lg text-text/80 leading-relaxed text-balance mb-6">
                            Más de 30 años de experiencia clínica e investigación aplicando modelos de estrategia psicológica para la salud emocional, tanto a nivel individual como organizacional.
                        </p>
                        <p className="text-md text-text/70 leading-relaxed text-balance italic">
                            "Mi enfoque traspasa el diván clínico para aplicarse en ámbitos cotidianos, empresariales y organizacionales, optimizando resultados y bienestar."
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {expItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <Card className="border border-white shadow-glass bg-white/60 backdrop-blur-md hover:bg-white/80 transition-colors">
                                    <CardBody className="p-8">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-white shadow-sm shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-gold uppercase tracking-wider">{item.date}</span>
                                                <h3 className="font-serif text-xl font-bold text-navy mt-1 mb-2">{item.title}</h3>
                                                <p className="text-text/80 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
