"use client";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Card, CardHeader, CardBody, Chip } from "@heroui/react";

export default function ServicesSection() {
    const t = useTranslations('services');
    const specialities = t.raw('specialities') as string[];
    const services = t.raw('list') as Array<{ title: string, desc: string }>;

    // Mapping of titles to hrefs to maintain routing logic
    const hrefMap: Record<string, string> = {
        "Terapia Individual": "/servicios/terapia-individual",
        "Teràpia Individual": "/servicios/terapia-individual",
        "Terapia de Pareja": "/servicios/terapia-de-pareja",
        "Teràpia de Parella": "/servicios/terapia-de-pareja",
        "Dimensión Familiar": "/servicios/dimension-familiar",
        "Dimensió Familiar": "/servicios/dimension-familiar"
    };

    return (
        <section id="servicios" className="bg-cream py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-serif text-navy font-bold mb-4"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gold mx-auto mb-10"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto"
                    >
                        {specialities.map((chip, i) => (
                            <Chip
                                key={i}
                                variant="flat"
                                className="bg-gold/10 text-gold font-medium text-sm px-2 border border-gold/20 cursor-default select-none"
                                radius="sm"
                            >
                                {chip}
                            </Chip>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <Card 
                                as={Link} 
                                href={(hrefMap[service.title] || "/servicios") as any} 
                                isPressable 
                                className="h-full glass-panel border-none group text-left w-full hover:scale-[1.02] transition-transform cursor-pointer"
                            >
                                <CardHeader className="pt-10 px-8 pb-0">
                                    <h3 className="text-2xl font-serif font-bold text-navy w-full border-b border-navy/10 pb-4 group-hover:border-gold/30 transition-colors flex items-center justify-between">
                                        {service.title} <span className="text-gold text-xl transition-transform group-hover:translate-x-1">→</span>
                                    </h3>
                                </CardHeader>
                                <CardBody className="px-8 py-8 pt-6">
                                    <p className="text-text/80 leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
