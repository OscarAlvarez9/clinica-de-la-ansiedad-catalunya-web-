"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandManifestoSection() {
    return (
        <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/brand-atmosphere.png"
                    alt="Sala de consulta Clínica de la Ansiedad Catalunya"
                    fill
                    className="object-cover"
                    priority={false}
                />
                {/* Dark navy overlay */}
                <div className="absolute inset-0 bg-navy/80" />
                {/* Gradient overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/40 to-transparent" />
            </div>

            {/* Subtle decorative grain texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
                <div className="max-w-3xl">

                    {/* Year anchor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-16 h-[1px] bg-gold" />
                        <span className="font-serif text-gold text-lg font-light tracking-[0.4em] uppercase">Desde 1993</span>
                    </motion.div>

                    {/* Main quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.25] mb-10"
                    >
                        &ldquo;La ansiedad no es el enemigo.<br />
                        Es un mensaje que espera<br />
                        <span className="text-gold not-italic font-bold">ser escuchado.</span>&rdquo;
                    </motion.blockquote>

                    {/* Attribution */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-5 mb-12"
                    >
                        <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                            <span className="font-serif text-gold font-bold text-lg">JRS</span>
                        </div>
                        <div>
                            <p className="text-white font-bold tracking-[0.2em] uppercase text-sm">Joan Ramon Soto</p>
                            <p className="text-gold/80 text-xs tracking-[0.2em] uppercase font-bold mt-0.5">Psicoterapeuta · Fundador</p>
                        </div>
                    </motion.div>

                    {/* Philosophy pillars */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        {[
                            "Rigor clínico",
                            "Escucha profunda",
                            "Sin parches temporales",
                            "Terapia personalizada",
                        ].map((pill) => (
                            <span
                                key={pill}
                                className="px-5 py-2 rounded-full border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase backdrop-blur-sm bg-white/5 hover:border-gold/40 hover:text-gold transition-colors duration-300"
                            >
                                {pill}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                    >
                        <Link
                            href="/enfoque"
                            className="inline-flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full transition-all duration-300 group"
                        >
                            Conoce nuestra filosofía
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
