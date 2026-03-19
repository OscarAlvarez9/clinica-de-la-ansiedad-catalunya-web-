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
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Botón Presencial - Gold (Arriba) */}
            <button
                onClick={() => handleClick()}
                className="group relative bg-gold text-navy rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-gold/85 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-cream"
                aria-label="Reservar sesión presencial"
                title="Presencial"
            >
                <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                    Presencial
                </span>
            </button>

            {/* Botón Online - Sage (Abajo) */}
            <button
                onClick={() => handleClick()}
                className="group relative bg-sage text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-sage/85 focus:outline-none focus:ring-2 focus:ring-sage/60 focus:ring-offset-2 focus:ring-offset-cream"
                aria-label="Reservar sesión online"
                title="Online"
            >
                <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                    Online
                </span>
            </button>
        </div>
    );
}
