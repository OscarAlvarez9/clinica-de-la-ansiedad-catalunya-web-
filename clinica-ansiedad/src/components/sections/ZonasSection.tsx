"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, ArrowRight, Train } from "lucide-react";

// Mapa embebido de la consulta. Se carga en lazy para no penalizar el LCP de la home.
const MAP_SRC =
    "https://www.google.com/maps?q=Ronda+Doctor+Angl%C3%A8s+74,+08360+Canet+de+Mar,+Barcelona&output=embed";

export default function ZonasSection() {
    const t = useTranslations("zonas");
    const towns = t.raw("towns") as string[];

    return (
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-cream px-4 py-2 text-navy text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                            <MapPin className="w-3.5 h-3.5 text-gold" />
                            {t("eyebrow")}
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold text-navy mb-5 leading-tight">
                            {t.rich("h2", {
                                accent: (chunks) => <span className="text-gold italic font-light">{chunks}</span>,
                            })}
                        </h2>

                        <p className="text-navy/70 text-lg leading-relaxed mb-8">{t("p")}</p>

                        <ul className="flex flex-wrap gap-2.5 mb-8">
                            {towns.map((town) => (
                                <li
                                    key={town}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-cream px-3.5 py-2 text-navy/80 text-sm"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                                    {town}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-start gap-3 mb-8">
                            <Train className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <div>
                                <p className="text-navy/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                                    {t("address_label")}
                                </p>
                                <p className="text-navy font-medium">{t("address")}</p>
                            </div>
                        </div>

                        <Link
                            href={"/psicologo-maresme" as any}
                            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-navy/90 transition-colors"
                        >
                            {t("cta")}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden border border-navy/10 shadow-xl aspect-[4/3.4]">
                            <iframe
                                src={MAP_SRC}
                                title={t("map_title")}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full border-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
