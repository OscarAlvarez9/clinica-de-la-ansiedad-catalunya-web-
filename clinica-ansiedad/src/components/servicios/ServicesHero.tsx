'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b border-navy/5">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
                        Clínica de la Ansiedad Maresme
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-navy tracking-tight mb-8">
                        Tratamiento de la Ansiedad, <span className="italic text-sage">Depresión y TOC</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold mb-10"></div>

                    <p className="text-xl md:text-2xl text-navy/80 font-medium leading-relaxed max-w-4xl text-balance mb-6">
                        En Clínica de la Ansiedad Catalunya estamos especializados en el tratamiento del trastorno de ansiedad generalizada, crisis de pánico, depresión, trastorno obsesivo compulsivo (TOC), fobia social y agorafobia. Combinamos psicoterapia psicoanalítica y métodos basados en la evidencia.
                    </p>

                    <p className="text-lg text-text/80 leading-relaxed max-w-3xl text-balance mb-6">
                        Desde hace más de 30 años acompañamos a personas que buscan comprender los síntomas de ansiedad, sus causas y cómo se cura la ansiedad desde la raíz. Ofrecemos consulta psicológica presencial en Barcelona y terapia online para toda España.
                    </p>

                    <p className="text-lg text-text/80 leading-relaxed max-w-3xl text-balance">
                        Nuestro equipo diseña intervenciones personalizadas que no solo alivian los síntomas físicos de la ansiedad — palpitaciones, hiperventilación, insomnio — sino que generan cambios estructurales profundos y duraderos.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-sage/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
}
