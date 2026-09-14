"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { bookingUrl, whatsappUrl } from "@/lib/constants";

// Banda de conversión intermedia. La home mide ~19.500 px en móvil y solo tenía
// CTA en el hero (px 880) y en contacto (px 15.400): unas 18 pantallas seguidas
// sin forma de dar el paso. Esta banda se intercala entre secciones.

const content = {
    es: {
        eyebrow: "Sin compromiso",
        title: "¿Prefieres contarlo antes de reservar?",
        text: "Escríbenos por WhatsApp y valoramos tu caso, o reserva directamente tu primera sesión.",
        book: "Reservar cita · 75 €",
        wa: "Escríbenos por WhatsApp",
        waMessage: "Hola, me gustaría solicitar una valoración.",
    },
    ca: {
        eyebrow: "Sense compromís",
        title: "Prefereixes explicar-ho abans de reservar?",
        text: "Escriu-nos per WhatsApp i valorem el teu cas, o reserva directament la primera sessió.",
        book: "Reservar cita · 75 €",
        wa: "Escriu-nos per WhatsApp",
        waMessage: "Hola, m'agradaria sol·licitar una valoració.",
    },
} as const;

export default function InlineBookingCTA({ ctaLocation }: { ctaLocation: string }) {
    const locale = (useLocale() === "ca" ? "ca" : "es") as "es" | "ca";
    const t = content[locale];

    return (
        <section className="px-6 py-16 lg:py-20 bg-cream">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-5xl mx-auto bg-white border border-navy/10 rounded-[2.5rem] shadow-[0_20px_60px_-30px_rgba(22,78,99,0.35)] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-8"
            >
                <div className="flex-1 min-w-0">
                    <span className="inline-block text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                        {t.eyebrow}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight mb-3">
                        {t.title}
                    </h2>
                    <p className="text-navy/60 text-lg font-light leading-relaxed max-w-xl">{t.text}</p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                    <a
                        href={bookingUrl(ctaLocation)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 bg-navy text-white font-bold rounded-full px-8 py-4 text-xs uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                    >
                        <Calendar className="w-4 h-4 text-gold-light" />
                        {t.book}
                    </a>
                    <a
                        href={whatsappUrl(t.waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 bg-white border border-navy/20 text-navy font-bold rounded-full px-8 py-4 text-xs uppercase tracking-widest hover:bg-navy/5 transition-all"
                    >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        {t.wa}
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
