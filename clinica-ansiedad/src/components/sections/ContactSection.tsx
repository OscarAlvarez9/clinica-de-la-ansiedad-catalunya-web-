"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Sparkles, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "34613916079";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me gustaría solicitar una valoración.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function ContactSection() {
    return (
        <section id="contacto" className="relative bg-[#FAFAFA] py-32 lg:py-48 px-6 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-navy/5 blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20 lg:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-navy/5 text-navy text-sm font-bold mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        Atención personalizada y bilingüe
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-serif text-navy font-bold mb-8 tracking-tight"
                    >
                        Demos el primer paso <span className="text-primary italic font-light">juntos</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-navy/60 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Si la ansiedad está limitando tu vida, estudiaremos tu caso de forma confidencial.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-stretch">

                    {/* WhatsApp CTA Card */}
                    <motion.a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:row-span-2 relative bg-[#0f1f2e] p-10 lg:p-16 rounded-[3rem] overflow-hidden flex flex-col justify-between min-h-[420px] group"
                    >
                        {/* Background glow */}
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#25D366]/10 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs font-bold uppercase tracking-widest mb-10">
                                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                                Disponible ahora
                            </div>

                            <h3 className="text-4xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6">
                                Escríbenos por<br />
                                <span className="text-[#25D366]">WhatsApp</span>
                            </h3>

                            <p className="text-white/50 text-lg max-w-md leading-relaxed">
                                Cuéntanos tu caso y te responderemos lo antes posible. Primera valoración sin compromiso.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-12">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Teléfono</p>
                                    <p className="text-white text-2xl font-bold tracking-wide">613 91 60 79</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-[#25D366] text-black px-8 py-4 rounded-full font-bold text-base group-hover:scale-105 transition-transform">
                                <MessageCircle className="w-5 h-5" />
                                Iniciar conversación
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Contact Tiles */}
                    <div className="lg:col-span-2 lg:row-span-2 flex flex-col">
                        <motion.a
                            href="https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="bg-navy p-10 lg:p-12 rounded-[2.5rem] border border-navy/5 shadow-xl shadow-navy/[0.02] group text-left w-full h-full flex flex-col justify-between min-h-[420px]"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <Calendar className="w-7 h-7 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <span className="text-white/40 text-xs font-black uppercase tracking-widest block mb-3">Reserva tu cita</span>
                                <span className="text-white text-3xl lg:text-4xl font-serif font-bold block mb-4 leading-tight">Agenda una sesión</span>
                                <p className="text-white/50 text-base leading-relaxed mb-8">Elige el horario que mejor se adapte a ti. Consulta presencial u online.</p>
                                <div className="flex items-center gap-3 bg-primary text-black px-6 py-3 rounded-full font-bold text-sm w-fit group-hover:scale-105 transition-transform">
                                    Ver disponibilidad <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.a>
                    </div>

                    {/* Wide Location Tile */}
                    <motion.a
                        href="https://www.google.com/maps/place/Cl%C3%ADnica+de+la+Ansiedad+Catalunya/@41.5955262,2.5789221,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-white p-8 lg:p-12 rounded-[3rem] border border-navy/5 shadow-xl shadow-navy/[0.02] flex flex-col md:flex-row items-center justify-between gap-8 group"
                    >
                        <div className="flex items-center gap-8">
                            <div className="w-20 h-20 rounded-[1.5rem] bg-navy/5 flex items-center justify-center shrink-0">
                                <MapPin className="w-10 h-10 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-navy/40 text-xs font-black uppercase tracking-widest mb-1">Presencial</h4>
                                <p className="text-navy text-2xl lg:text-3xl font-bold leading-tight">Ronda Dr. Anglès 74, Canet de Mar</p>
                                <p className="text-navy/50 mt-1">Maresme, Barcelona</p>
                            </div>
                        </div>
                        <div className="px-8 py-5 rounded-full bg-navy text-white font-bold text-lg flex items-center gap-4 group-hover:bg-primary transition-colors">
                            Google Maps <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
