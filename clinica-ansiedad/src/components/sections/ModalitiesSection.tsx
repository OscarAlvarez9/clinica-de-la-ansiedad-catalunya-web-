"use client";
import { MapPin, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

export default function ModalitiesSection() {
    return (
        <section className="bg-navy py-24 md:py-32 relative overflow-hidden text-white border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] mix-blend-screen opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage/5 rounded-full blur-[120px] mix-blend-screen opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-xs font-bold tracking-widest text-gold uppercase">Cobertura Total</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
                    >
                        Elige tu formato de atención
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light"
                    >
                        El mismo rigor clínico y compromiso terapéutico, adaptado a tu ubicación y estilo de vida para garantizar resultados.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">

                    {/* Terapia Presencial - Split Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=1200&auto=format&fit=crop"
                                alt="Clínica Presencial"
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <div className="w-16 h-16 rounded-full bg-navy/80 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <MapPin className="w-8 h-8 text-gold" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col"
                        >
                            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Consulta <span className="text-gold italic font-light">Presencial</span>
                            </h3>
                            <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed font-light">
                                Te recibimos en nuestro espacio diseñado para la pausa y la contención en el centro de Canet de Mar. Un entorno íntimo, seguro y confidencial donde podrás desconectar del ruido exterior.
                            </p>

                            <ul className="space-y-5 mb-10">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                    </div>
                                    <span className="text-lg text-white/90">Instalaciones propias en el centro de <strong className="text-white font-normal">Canet de Mar</strong></span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                    </div>
                                    <span className="text-lg text-white/90">Excelente conexión y fácil acceso desde todo el <strong className="text-white font-normal">Maresme</strong></span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                    </div>
                                    <span className="text-lg text-white/90">A solo 35 minutos de <strong className="text-white font-normal">Barcelona ciudad</strong></span>
                                </li>
                            </ul>

                            <div>
                                <Button
                                    as="a"
                                    href="#contacto"
                                    size="lg"
                                    className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full text-lg shadow-[0_10px_30px_rgba(201,169,110,0.2)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                                    endContent={<ArrowRight className="w-5 h-5" />}
                                >
                                    Agendar Cita Presencial
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Terapia Online - Split Layout (Reversed) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col lg:order-1 order-2"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-sage/20 border border-sage/30 w-fit mb-6">
                                <span className="text-xs font-bold tracking-widest text-sage-light uppercase">Misma Eficacia Clínica</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Sesión <span className="text-gold italic font-light">Online</span>
                            </h3>
                            <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed font-light">
                                La distancia no es una barrera para el inconsciente. Llevamos más de 25 años perfeccionando el abordaje terapéutico a distancia con resultados clínicos totalmente homologables al formato presencial.
                            </p>

                            <ul className="space-y-5 mb-10">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                    </div>
                                    <span className="text-lg text-white/90">Cobertura total para pacientes en toda <strong className="text-white font-normal">Catalunya y España</strong></span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                    </div>
                                    <span className="text-lg text-white/90">Flexibilidad horaria y <strong className="text-white font-normal">sin desplazamientos físicos</strong></span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-gold" />
                                    </div>
                                    <span className="text-lg text-white/90">Plataformas de videollamada de <strong className="text-white font-normal">alta seguridad y privacidad</strong></span>
                                </li>
                            </ul>

                            <div>
                                <Button
                                    as="a"
                                    href="#contacto"
                                    size="lg"
                                    className="bg-transparent border border-white/30 hover:bg-white/5 text-white font-bold px-8 py-6 rounded-full text-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                                    endContent={<ArrowRight className="w-5 h-5" />}
                                >
                                    Solicitar Sesión Online
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 lg:order-2 order-1"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                                alt="Terapia Online"
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-bl from-navy/80 via-transparent to-transparent"></div>
                            <div className="absolute top-8 right-8">
                                <div className="w-16 h-16 rounded-full bg-navy/80 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <Globe className="w-8 h-8 text-gold" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
