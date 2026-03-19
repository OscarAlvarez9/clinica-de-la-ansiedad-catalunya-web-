'use client';

import { useState, useEffect } from 'react';

export default function StickyBookingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Mostrar después de scrollear 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        const bookingUrl = "https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp";
        window.open(bookingUrl, '_blank');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Botón Presencial - Gold (Arriba) */}
            <button
                onClick={() => handleClick()}
                className="group relative bg-gold text-navy rounded-full p-5 md:p-6 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-110 hover:bg-gold-light focus:outline-none focus:ring-4 focus:ring-gold/30"
                aria-label="Reservar sesión presencial"
                title="Cita Presencial"
            >
                <svg className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-navy/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl border border-white/10">
                    Cita Presencial
                </div>
            </button>

            {/* Botón Online - Sage (Abajo) */}
            <button
                onClick={() => handleClick()}
                className="group relative bg-sage text-white rounded-full p-5 md:p-6 shadow-[0_10px_40px_-10px_rgba(107,158,139,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(107,158,139,0.7)] transition-all duration-300 hover:scale-110 hover:bg-sage/90 focus:outline-none focus:ring-4 focus:ring-sage/30"
                aria-label="Reservar sesión online"
                title="Cita Online"
            >
                <svg className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-navy/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl border border-white/10">
                    Cita Online
                </div>
            </button>
        </div>
    );
}
