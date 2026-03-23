'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Newspaper, Quote, ArrowRight } from 'lucide-react';
import { Card, CardBody } from '@heroui/react';

const publications = [
    {
        title: "¿Por qué tenemos miedo al Coronavirus? Claves para manejarlo",
        year: "2020",
        source: "Mundopsicologos",
        category: "Análisis Social"
    },
    {
        title: "El sexo tras la cuarentena: nuevas dinámicas vinculares",
        year: "2020",
        source: "Vogue",
        category: "Psicología de Pareja"
    },
    {
        title: "Los famosos y temidos gatillazos: ¿por qué se producen y cómo evitarlos?",
        year: "2019",
        source: "Huffington Post",
        category: "Salud Mental"
    },
    {
        title: "Por qué los españoles acatan tan bien las órdenes e ignoran los consejos",
        year: "2021",
        source: "Mundopsicologos",
        category: "Psicomorfología"
    },
    {
        title: "Qué es la ansiedad anticipatoria: el mecanismo que puede paralizarte",
        year: "2022",
        source: "Grupo Cero",
        category: "Trastornos de Ansiedad"
    }
];

export default function PublicationsSection() {
    return (
        <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[100px] -z-0 -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
                        >
                            <BookOpen className="w-4 h-4 text-gold" />
                            <span className="text-[10px] font-black tracking-[0.3em] text-gold uppercase">Divulgación Clínica</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter"
                        >
                            Voz de autoridad en <span className="text-gold italic font-light">primeros medios</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:pb-4"
                    >
                        <p className="text-white/50 text-xl font-light leading-relaxed max-w-md border-l border-gold/30 pl-8">
                            Colaboraciones habituales aportando la perspectiva del psicoanálisis directo a los conflictos de la vida contemporánea.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {publications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 relative flex flex-col">
                                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Quote className="w-10 h-10 text-gold" />
                                </div>
                                
                                <div className="mb-8">
                                    <span className="text-gold text-[10px] font-black tracking-[0.2em] uppercase bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
                                        {item.source}
                                    </span>
                                </div>

                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{item.category}</span>
                                        <span className="text-white/20 text-xs font-serif italic mt-1">{item.year}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Final CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="h-full bg-gold border border-gold p-10 rounded-[2rem] flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-gold/90 transition-all shadow-xl shadow-gold/10">
                            <Newspaper className="w-12 h-12 text-navy mb-6" />
                            <h3 className="font-serif text-3xl font-bold text-navy mb-4">Sala de Prensa</h3>
                            <p className="text-navy/70 text-sm font-medium mb-8">Accede a nuestro archivo completo de intervenciones en radio, prensa y TV.</p>
                            <div className="flex items-center gap-2 text-navy font-black text-[10px] tracking-widest uppercase border-b-2 border-navy/20 pb-1 group-hover:border-navy transition-all">
                                Ver todo <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
