'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function EarlyBookingCTA() {
    const handleBooking = (type: 'presencial' | 'online') => {
        const message = type === 'presencial'
            ? 'Hola, quisiera agendar una sesión presencial'
            : 'Hola, quisiera agendar una sesión online';

        const whatsappUrl = `https://wa.me/34000000000?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-r from-navy via-navy/95 to-navy text-white relative overflow-hidden"
        >
            {/* Background gradient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-gold font-bold tracking-widest uppercase text-sm bg-gold/10 px-4 py-2 rounded-full">
                            Comienza hoy
                        </span>
                    </motion.div>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                        ¿Listo para tu transformación emocional?
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        La primera sesión es una conversación clínica profunda donde entendemos tu situación específica.
                        <span className="block mt-2 text-gold font-medium">Sin cuestionarios fríos, sin pretensiones.</span>
                    </p>
                </div>

                {/* Benefits row */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {[
                        { icon: Clock, text: '48h para confirmación' },
                        { icon: Calendar, text: 'Horarios flexibles' },
                        { icon: CheckCircle2, text: 'Confidencialidad 100%' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.1 }}
                            className="flex items-center gap-3 justify-center md:justify-start"
                        >
                            <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                            <span className="text-sm text-white/95 font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={() => handleBooking('presencial')}
                        className="group relative px-8 py-4 bg-gold text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold/50 hover:scale-105 hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-navy active:scale-95"
                    >
                        <span className="flex items-center gap-2 justify-center">
                            <span>Reservar Presencial</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                    <button
                        onClick={() => handleBooking('online')}
                        className="px-8 py-4 bg-white/15 text-white border-2 border-white/40 font-bold rounded-xl transition-all duration-200 hover:bg-white/25 hover:border-white/70 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-navy"
                    >
                        Sesión Online
                    </button>
                </motion.div>

                {/* Urgency indicator */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-white/70 text-sm mt-6 flex items-center justify-center gap-2"
                >
                    <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                    <span className="text-white/90 font-medium">3 citas disponibles para esta semana</span>
                </motion.p>
            </div>
        </motion.section>
    );
}
