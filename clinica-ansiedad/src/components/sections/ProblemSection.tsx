"use client";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

const situations = [
    "Crisis de ansiedad y ataques de pánico",
    "Ansiedad generalizada y angustia constante",
    "Pensamientos obsesivos (TOC)",
    "Palpitaciones y síntomas físicos por ansiedad",
    "Depresión y ansiedad combinadas",
    "Insomnio, hiperventilación y estrés crónico",
];

export default function ProblemSection() {
    return (
        <section className="bg-cream py-24 px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-3xl md:text-5xl font-serif text-navy font-bold mb-4 text-balance"
                >
                    ¿Reconoces estos síntomas de ansiedad?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-gold mx-auto"
                />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {situations.map((situation, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="glass-panel h-full border-none">
                            <CardBody className="py-10 px-6 text-center flex items-center justify-center">
                                <p className="text-navy font-bold text-lg leading-snug">
                                    {situation}
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="max-w-3xl mx-auto mt-24 text-center"
            >
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gold/20 shadow-sm inline-block">
                    <p className="text-xl md:text-2xl font-serif text-navy font-bold italic text-balance">
                        "No estás solo/a. Lo que sientes tiene nombre y tiene solución terapéutica."
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
