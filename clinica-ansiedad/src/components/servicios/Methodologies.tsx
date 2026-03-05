'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse } from 'lucide-react';
import { Card, CardBody } from '@heroui/react';

export default function Methodologies() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-6 text-balance">
                        Qué nos diferencia en Clínica de la Ansietat Catalunya
                    </h2>
                    <div className="w-16 h-1 bg-sage mx-auto mb-6"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="h-full border-none shadow-glass bg-cream/30 hover:bg-cream/50 transition-colors">
                            <CardBody className="p-10 flex flex-col items-start gap-6">
                                <div className="p-4 rounded-full bg-white shadow-sm border border-sage/10">
                                    <ShieldCheck className="w-8 h-8 text-sage" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold">Clara y Cerca</h3>
                                <p className="text-text/80 leading-relaxed text-balance">
                                    Somos especialistas en el tratamiento de la ansiedad, con más de 25 años de experiencia y miles de personas atendidas. Aplicamos terapias basadas en la evidencia con un equipo profesional altamente cualificado, ofreciendo atención personalizada presencial y online.
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full border-none shadow-glass bg-cream/30 hover:bg-cream/50 transition-colors">
                            <CardBody className="p-10 flex flex-col items-start gap-6">
                                <div className="p-4 rounded-full bg-white shadow-sm border border-gold/10">
                                    <HeartPulse className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold">Recupera tu equilibrio emocional</h3>
                                <p className="text-text/80 leading-relaxed text-balance">
                                    Te ayudamos a superar la ansiedad con un tratamiento psicoterapéutico personalizado. Muchas personas llegan con dudas o miedo a no mejorar, pero con acompañamiento profesional es posible recuperar equilibrio y bienestar. Te ayudaremos a entender qué te ocurre, aprender estrategias eficaces y desarrollar herramientas para mantener cambios emocionales estables y prevenir recaídas.
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
