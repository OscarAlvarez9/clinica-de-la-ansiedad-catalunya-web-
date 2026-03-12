"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardBody, Chip } from "@heroui/react";

const specialities = [
    "Ansiedad", "Depresión", "Crisis de pánico",
    "Pensamientos obsesivos", "Celos", "Ludopatía"
];

const services = [
    {
        title: "Terapia Individual",
        desc: "Un espacio confidencial para explorar tus angustias personales, entender tus síntomas y construir nuevos recursos emocionales estables.",
        href: "/servicios/terapia-individual"
    },
    {
        title: "Terapia de Pareja",
        desc: "Acompañamiento especializado para resolver dinámicas de conflicto, reproches o desconexión afectiva desde una perspectiva psicoanalítica.",
        href: "/servicios/terapia-de-pareja"
    },
    {
        title: "Dimensión Familiar",
        desc: "Abordaje de la sintomatología que aparece en la red de vínculos familiares, facilitando un entorno más sano de convivencia.",
        href: "/servicios/dimension-familiar"
    }
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="bg-cream py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-serif text-navy font-bold mb-4"
                    >
                        ¿En qué podemos ayudarte?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gold mx-auto mb-10"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto"
                    >
                        {specialities.map((chip, i) => (
                            <Chip
                                key={i}
                                variant="flat"
                                className="bg-gold/10 text-gold font-medium text-sm px-2 border border-gold/20 cursor-default select-none"
                                radius="sm"
                            >
                                {chip}
                            </Chip>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <Card as={Link} href={service.href} isPressable className="h-full glass-panel border-none group text-left w-full hover:scale-[1.02] transition-transform cursor-pointer">
                                <CardHeader className="pt-10 px-8 pb-0">
                                    <h3 className="text-2xl font-serif font-bold text-navy w-full border-b border-navy/10 pb-4 group-hover:border-gold/30 transition-colors flex items-center justify-between">
                                        {service.title} <span className="text-gold text-xl transition-transform group-hover:translate-x-1">→</span>
                                    </h3>
                                </CardHeader>
                                <CardBody className="px-8 py-8 pt-6">
                                    <p className="text-text/80 leading-relaxed font-light">
                                        {service.desc}
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
