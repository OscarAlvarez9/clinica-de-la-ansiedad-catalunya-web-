'use client';

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function ApproachSection() {
    const t = useTranslations('approach');
    const differentiators = t.raw('differentiators') as string[];

    return (
        <section id="enfoque" className="bg-navy py-24 px-6 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* Left Side: Texto y CTA (60%) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="text-gold text-sm tracking-widest uppercase font-bold">{t('eyebrow')}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white focus:outline-none">
                        {t.rich('h2', {
                            accent: (chunks) => <><br /><span className="text-gold italic">{chunks}</span></>
                        })}
                    </h2>

                    <div className="space-y-6 text-white/80 font-sans text-lg mb-10">
                        <p>
                            {t.rich('p1', {
                                strong_p: (chunks) => <strong className="font-bold text-white">{chunks}</strong>
                            })}
                        </p>
                        <p>
                            {t.rich('p2', {
                                strong_w: (chunks) => <strong className="text-white">{chunks}</strong>
                            })}
                        </p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {differentiators.map((diff, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                                <span className="text-white/90 text-lg">{diff}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Botón que redirige a la página completa de enfoque */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            href="/enfoque"
                            className="inline-block bg-transparent border-2 border-gold text-gold font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full hover:bg-gold hover:text-navy transition-all"
                        >
                            {t('cta')}
                        </Link>
                    </motion.div>

                </motion.div>

                {/* Right Side: Shadcn Accordion reemlpazando el gráfico AI (40%) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5"
                >
                    <div className="bg-navy-light/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                        <h3 className="font-serif text-2xl mb-6 text-white font-bold border-b border-white/10 pb-4">
                            {t('process_title')}
                        </h3>
                        <Accordion type="single" collapsible className="w-full text-white/90">
                            <AccordionItem value="item-1" className="border-b-white/10">
                                <AccordionTrigger className="hover:text-gold text-white text-lg font-serif">{t('steps.step1_title')}</AccordionTrigger>
                                <AccordionContent className="text-white/70 text-base leading-relaxed">
                                    {t('steps.step1_content')}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b-white/10">
                                <AccordionTrigger className="hover:text-gold text-white text-lg font-serif">{t('steps.step2_title')}</AccordionTrigger>
                                <AccordionContent className="text-white/70 text-base leading-relaxed">
                                    {t('steps.step2_content')}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-none">
                                <AccordionTrigger className="hover:text-gold text-white text-lg font-serif">{t('steps.step3_title')}</AccordionTrigger>
                                <AccordionContent className="text-white/70 text-base leading-relaxed">
                                    {t('steps.step3_content')}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
