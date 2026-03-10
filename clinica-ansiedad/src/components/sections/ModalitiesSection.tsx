"use client";
import { MapPin, Globe, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@heroui/react";
import { useRef } from "react";
import SafeImage from "@/components/ui/SafeImage";

export default function ModalitiesSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const modalities = [
        {
            id: "presencial",
            title: "Consulta",
            titleAccent: "Presencial",
            description: "Te recibimos en nuestro espacio diseñado para la pausa y la contención en el centro de Canet de Mar. Un entorno íntimo, seguro y confidencial.",
            icon: MapPin,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Centro propio en Canet de Mar",
                "Fácil acceso desde el Maresme",
                "A 35 min de Barcelona ciudad"
            ],
            buttonText: "Agendar Cita Presencial",
            theme: "gold",
            gradient: "from-gold/20 via-transparent to-transparent"
        },
        {
            id: "online",
            title: "Sesión",
            titleAccent: "Online",
            description: "La distancia no es una barrera para el inconsciente. Ofrecemos el mismo rigor clínico con la comodidad y privacidad de tu propio espacio.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
            features: [
                "Cobertura en toda España",
                "Sin desplazamientos físicos",
                "Plataformas de alta seguridad"
            ],
            buttonText: "Solicitar Sesión Online",
            theme: "sage",
            gradient: "from-sage/20 via-transparent to-transparent"
        }
    ];

    return (
        <section ref={containerRef} className="bg-[#0B1D26] py-24 md:py-40 relative overflow-hidden text-white">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-gold/10 rounded-full blur-[150px] pointer-events-none opacity-40 animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-navy-light/10 rounded-full blur-[150px] pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <span className="w-12 h-px bg-gold/50" />
                        <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase flex items-center gap-2">
                            <Sparkles className="w-3 h-3" /> Canales de Atención
                        </span>
                        <span className="w-12 h-px bg-gold/50" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight"
                    >
                        Diferentes caminos, <br />
                        <span className="text-gold italic font-light">la misma profundidad</span>
                    </motion.h2>
                </div>

                {/* Modalities Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {modalities.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            style={{ y: index === 0 ? y1 : y2 }}
                            className="group relative"
                        >
                            {/* Card Background (Glassmorphism) */}
                            <div className="relative h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] overflow-hidden p-8 md:p-12 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl">

                                {/* Background Image with Parallax & Hover Effect */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                                    <SafeImage
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0B1D26] via-[#0B1D26]/60 to-transparent`} />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Header */}
                                    <div className="mb-12 flex justify-between items-start">
                                        <div className={`w-16 h-16 rounded-2xl bg-${item.theme === 'gold' ? 'gold' : 'navy'}/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                            <item.icon className={`w-8 h-8 text-${item.theme === 'gold' ? 'gold' : 'white'}`} />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase vertical-text">
                                            {item.id} mode
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                        {item.title} <br />
                                        <span className="text-gold italic font-light">{item.titleAccent}</span>
                                    </h3>

                                    <p className="text-white/60 text-lg mb-10 leading-relaxed font-light max-w-sm">
                                        {item.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-4 mb-12">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-gold" />
                                                </div>
                                                <span className="text-sm text-white/70 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Dynamic Button */}
                                    <div className="mt-auto">
                                        <Button
                                            as="a"
                                            href="https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp"
                                            className={`
                                                w-full py-8 rounded-2xl flex items-center justify-between px-8 text-lg font-bold transition-all duration-300
                                                ${item.theme === 'gold'
                                                    ? 'bg-gold text-navy hover:bg-gold-light'
                                                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}
                                            `}
                                        >
                                            <span>{item.buttonText}</span>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.theme === 'gold' ? 'bg-navy/10' : 'bg-white/10'}`}>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className={`absolute -inset-1 rounded-[42px] bg-gradient-to-r ${item.theme === 'gold' ? 'from-gold/20 to-transparent' : 'from-navy-light/20 to-transparent'} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>

                {/* Footer Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-32 text-center"
                >
                    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.5em] mb-4">Integridad Clínica</p>
                    <p className="text-white/60 font-serif italic max-w-xl mx-auto">
                        "En el espacio analítico, la palabra circula libre de barreras físicas. Lo esencial es el deseo de saber sobre uno mismo."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
