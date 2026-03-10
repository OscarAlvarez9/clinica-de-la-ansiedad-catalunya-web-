"use client";
import { motion, type Variants } from "framer-motion";
import { Button } from "@heroui/react";
import { Star } from "lucide-react";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-[75vh] md:min-h-[70vh] flex items-center justify-center bg-cream overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-cream" />
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Organic abstract shapes - very subtle */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage/20 blur-[100px] mix-blend-multiply opacity-70" />
                <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-gold/15 blur-[100px] mix-blend-multiply opacity-60" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                {/* Left Content Area (60%) */}
                <motion.div
                    className="lg:col-span-12 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeUpVariant} className="mb-6 flex flex-wrap justify-center lg:justify-start gap-3">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-navy/10 bg-white/60 text-navy font-bold text-[11px] tracking-widest uppercase shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            Clínica Especializada
                        </span>
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-gold/20 bg-gold/5 text-navy font-bold text-[11px] tracking-widest uppercase">
                            Barcelona & Online
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-navy font-serif leading-[1.05] text-[2.75rem] md:text-6xl lg:text-[4.5rem] font-extrabold mb-6 max-w-3xl tracking-tight text-balance"
                    >
                        Síntomas de ansiedad: identifícalos y supéralos.
                        <span className="font-light italic text-gold text-4xl md:text-5xl lg:text-6xl mt-1 block">Tratamiento especializado que funciona.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariant}
                        className="text-text/80 font-sans text-lg md:text-xl leading-relaxed max-w-xl mb-8 font-light text-balance"
                    >
                        Desde 1993 tratamos las <strong className="font-bold text-navy">causas de la ansiedad</strong> con un abordaje profundo y personalizado. Terapia presencial en Barcelona y online para toda España. Reserva tu primera visita.
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 lg:mb-12"
                    >
                        <Button
                            as="a"
                            href="https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp"
                            className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white font-medium px-8 py-7 rounded-full text-[17px] shadow-xl shadow-navy/20 hover:shadow-navy/40 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Solicitar Valoración
                        </Button>
                        <Button
                            as="a"
                            href="/enfoque"
                            variant="light"
                            className="w-full sm:w-auto text-navy hover:bg-navy/5 font-bold px-6 py-7 rounded-full text-[15px] transition-all tracking-wide uppercase group"
                        >
                            Conocer Método <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                        </Button>
                    </motion.div>

                    {/* Trust Indicators (Compact layout to save vertical space) */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-6 border-t border-navy/10 w-full"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-cream bg-[#2C5F78] flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" className="w-full h-full object-cover" alt="Paciente" /></div>
                                <div className="w-10 h-10 rounded-full border-2 border-cream bg-[#7FB685] flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=5" className="w-full h-full object-cover" alt="Paciente" /></div>
                                <div className="w-10 h-10 rounded-full border-2 border-cream bg-[#E5DACE] flex items-center justify-center text-[10px] text-navy font-bold shadow-sm tracking-tighter">+1K</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-0.5 mb-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-3.5 h-3.5 fill-gold text-gold" />
                                    ))}
                                </div>
                                <p className="text-text/70 text-[11px] font-bold tracking-wider uppercase">
                                    130+ Reseñas Verificadas
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:block w-[1px] h-8 bg-navy/10"></div>

                        <div className="flex items-center gap-3">
                            <span className="font-serif text-3xl font-bold text-navy leading-none">+30</span>
                            <span className="text-text/70 text-[11px] font-bold uppercase tracking-wider leading-tight">Años de <br />experiencia</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual Area (40%) - More personal, less AI abstract */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="hidden xl:block xl:col-span-5 relative h-full flex items-center"
                >
                    <div className="relative w-full aspect-[4/5] max-h-[600px]">
                        {/* Solid backdrop frame */}
                        <div className="absolute top-6 -left-6 w-full h-full border border-navy/20 rounded-[2rem] -z-10 bg-cream/50"></div>

                        {/* Main Image Container */}
                        <div className="w-full h-full bg-navy rounded-[2rem] overflow-hidden shadow-2xl relative group">
                            {/* Placeholder for real photo of Joan Ramon Soto or clinic - using a sophisticated placeholder for now */}
                            <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                                alt="Dr. Joan Ramon Soto"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Overlay Gradient for readability of text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent pointer-events-none"></div>

                            {/* Personal Note / Signature element at bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-1 h-12 bg-gold mt-1"></div>
                                    <p className="font-serif text-xl italic font-light leading-snug">
                                        "El síntoma es solo el mensajero continuo. Nuestro trabajo es descifrar el mensaje."
                                    </p>
                                </div>
                                <div className="pl-5">
                                    <p className="font-bold tracking-widest uppercase text-xs text-gold">Joan Ramon Soto</p>
                                    <p className="text-[11px] text-white/70 tracking-widest uppercase mt-1">Psicólogo Fundador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Soft gradient to next section */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
        </section>
    );
}
