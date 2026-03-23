"use client";
import { motion, type Variants } from "framer-motion";
import { Button } from "@heroui/react";
import { Star, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden pt-32 pb-20">
            {/* Background Texture / Subtle Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#164E63 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Content Area (7 columns) */}
                <motion.div
                    className="lg:col-span-12 xl:col-span-7 flex flex-col"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeUpVariant} className="mb-8 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-navy/10 bg-white text-navy font-bold text-[10px] tracking-[0.15em] uppercase shadow-sm">
                            <ShieldCheck className="w-3 h-3 text-gold" />
                            Especialistas en Ansiedad
                        </span>
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-gold/20 bg-gold/5 text-navy font-bold text-[10px] tracking-[0.15em] uppercase">
                            Barcelona & Online
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-navy font-serif leading-tight lg:leading-[1.15] text-5xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-bold mb-10 tracking-tight pt-2"
                    >
                        Síntomas de ansiedad: identifícalos y <span className="text-gold italic font-medium">supéralos</span>.
                        <span className="font-light italic text-gold text-3xl md:text-5xl lg:text-5xl mt-4 block">Terapia rigurosa que funciona.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariant}
                        className="text-text/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
                    >
                        Desde 1993 resolvemos las <strong className="font-bold text-navy">causas de la ansiedad</strong> con un proceso clínico personalizado dirigido por el <strong className="font-semibold text-navy">Dr. Joan Ramon Soto</strong>. Psicólogo especialista en ansiedad en Barcelona. Terapia presencial en Canet de Mar (Maresme) y online para toda Catalunya y España.
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
                    >
                        <Button
                            as={Link}
                            href="#contacto"
                            className="w-full sm:w-auto bg-navy hover:bg-navy/95 text-white font-semibold px-10 py-8 rounded-xl text-lg shadow-2xl shadow-navy/20 transition-all duration-300 group"
                        >
                            Solicitar Valoración Primera
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            as="a"
                            href="/enfoque"
                            className="w-full sm:w-auto bg-white border border-navy/10 text-navy hover:bg-navy/5 font-bold px-8 py-8 rounded-xl text-md transition-all uppercase tracking-widest"
                        >
                            Nuestro Método
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-10 border-t border-navy/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-cream bg-slate-200 overflow-hidden relative">
                                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Paciente" fill className="object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-cream bg-gold flex items-center justify-center text-[11px] text-navy font-bold shadow-sm">+1K</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-0.5 mb-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                                    ))}
                                </div>
                                <p className="text-navy/70 text-[10px] font-bold tracking-[0.2em] uppercase">
                                    Pacientes recuperados
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-navy" />
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-bold text-navy leading-none">30+</p>
                                <p className="text-navy/70 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Años de Trayectoria</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual Area (5 columns) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden xl:block xl:col-span-5 relative"
                >
                    <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,78,99,0.2)]">
                        <Image
                            src="/images/joan-ramon-soto.png"
                            alt="Dr. Joan Ramon Soto"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Elegant Glass Card Overlay */}
                        <div className="absolute inset-x-6 bottom-6 p-8 bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-1 h-12 bg-gold flex-shrink-0" />
                                <p className="font-serif text-xl italic font-light leading-snug text-navy">
                                    "El síntoma es solo el mensajero continuo. Nuestro trabajo es descifrar el mensaje."
                                </p>
                            </div>
                            <div className="pl-5">
                                <p className="font-bold tracking-[0.2em] uppercase text-xs text-navy">Joan Ramon Soto</p>
                                <p className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase mt-1">Psicoanalítico</p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Detail Image - Clinic Interior */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-20 top-20 w-56 h-72 rounded-2xl overflow-hidden border-8 border-cream shadow-2xl hidden 2xl:block"
                    >
                        <Image
                            src="/images/clinic-interior.png"
                            alt="Interior de la clínica"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
