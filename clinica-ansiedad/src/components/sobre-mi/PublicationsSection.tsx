'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Card, CardBody } from '@heroui/react';

const publications = [
    "¿Por qué tenemos miedo al Coronavirus? Claves para manejarlo (2020)",
    "El sexo tras la cuarentena",
    "Los famosos y temidos gatillazos, ¿por qué se producen y cómo se pueden evitar?",
    "Por qué los españoles acatan tan bien las órdenes e ignoran los consejos",
    "Qué es la ansiedad anticipatoria (y cómo puede estar paralizándote)"
];

const medios = ["Mundopsicologos", "Vogue", "Huffingtonpost", "Grupo Cero Barcelona"];

export default function PublicationsSection() {
    return (
        <section className="py-20 bg-navy text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[80px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-5"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                            <BookOpen className="w-4 h-4 text-gold" />
                            <span className="text-xs font-bold tracking-widest text-gold uppercase">Divulgación</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
                            Publicaciones y Medios
                        </h2>
                        <p className="text-white/70 text-lg mb-8 leading-relaxed">
                            Colaborador habitual en medios de comunicación de primer nivel, aportando perspectiva psicoanalítica a problemas sociales contemporáneos.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {medios.map((medio, i) => (
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90">
                                    {medio}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 flex flex-col gap-4"
                    >
                        {publications.map((pub, index) => (
                            <Card key={index} className="bg-white/5 border-none shadow-none hover:bg-white/10 transition-colors rounded-xl">
                                <CardBody className="py-4 px-6 flex flex-row items-start gap-4">
                                    <span className="text-gold font-serif text-xl font-bold opacity-50 mt-1">{index + 1}.</span>
                                    <p className="text-white/90 font-medium leading-relaxed">{pub}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
