"use client";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        title: "¿Cuáles son los síntomas de ansiedad más comunes?",
        content: "Los síntomas de ansiedad más frecuentes incluyen palpitaciones, hiperventilación, hormigueo en la cara, presión en los oídos, necesidad constante de respirar profundo, pinchazos en el cuerpo, latidos en el estómago e insomnio. También pueden aparecer ataques de pánico con miedo intenso, dolor en el brazo izquierdo por estrés y sensación de pérdida de control. Si reconoces estos síntomas, buscar ayuda profesional es el primer paso."
    },
    {
        title: "¿Qué es el trastorno de ansiedad generalizada?",
        content: "El trastorno de ansiedad generalizada se caracteriza por preocupación excesiva y difícil de controlar que se mantiene durante meses, acompañada de tensión muscular, fatiga, dificultad de concentración y problemas de sueño. A diferencia de la ansiedad puntual, es un estado persistente que afecta la vida diaria. Nuestro tratamiento aborda las causas profundas de la ansiedad generalizada para lograr cambios estructurales duraderos."
    },
    {
        title: "¿Cómo se cura la ansiedad?",
        content: "La ansiedad se cura abordando sus causas de raíz, no solo gestionando los síntomas. Mediante el Psicoanálisis Directo identificamos los conflictos inconscientes que generan la angustia y trabajamos para desactivarlos. A diferencia de técnicas que solo enseñan a 'convivir' con la ansiedad, nuestro objetivo es que dejes de necesitarla. El tratamiento es personalizado y busca la autonomía emocional completa."
    },
    {
        title: "¿La terapia online para la ansiedad es efectiva?",
        content: "Sí, la terapia online para la ansiedad es igual de efectiva que la presencial. Llevamos más de 30 años ofreciendo terapia online, mucho antes de que se popularizara. Es especialmente útil para personas con agorafobia o fobia social, o que viven fuera de Barcelona. El vínculo terapéutico se construye de igual manera a través de videollamada."
    },
    {
        title: "¿Tratáis depresión, TOC, fobia social e hipocondría?",
        content: "Sí. Además de la ansiedad, tratamos la depresión y ansiedad combinadas, el trastorno obsesivo compulsivo (TOC), la fobia social, la hipocondría, la agorafobia, el estrés postraumático y la fobia de impulsión. Todos estos trastornos están interrelacionados y requieren un abordaje profundo que trate el origen común del sufrimiento."
    },
    {
        title: "¿Qué ocurre en la primera visita?",
        content: "En la primera consulta psicológica realizamos una entrevista clínica profunda — no tests mecánicos. Exploramos tu historia, identificamos los síntomas y sus posibles causas, y evaluamos el tipo de trastorno (ansiedad generalizada, crisis de pánico, depresión, etc.). Es un espacio confidencial donde diseñamos juntos el plan de tratamiento más adecuado para tu caso."
    },
    {
        title: "¿Cómo puedo ayudar a alguien con ansiedad?",
        content: "Para ayudar a alguien con ansiedad: escucha sin juzgar, no minimices lo que siente, acompáñale sin presionar y anímale a buscar ayuda profesional. Durante una crisis de ansiedad, mantén la calma y ayúdale a regular la respiración. Evita frases como 'cálmate' o 'no es para tanto'. En nuestra clínica también orientamos a familiares sobre cómo acompañar el proceso."
    },
    {
        title: "¿Atendéis en catalán y castellano?",
        content: "Sí, nuestro equipo es completamente bilingüe. Joan Ramon Soto y todo el equipo atienden indistintamente en catalán y castellano. Es fundamental que te expreses en tu lengua emocional, la que mejor conecta con tu historia de vida, para que la terapia sea lo más profunda y efectiva posible."
    }
];

export default function FAQSection() {
    return (
        <section id="faq" className="bg-cream py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-serif text-navy font-bold mb-4"
                    >
                        Preguntas frecuentes
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gold mx-auto"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border border-navy/10 rounded-xl px-6 data-[state=open]:border-gold/30 data-[state=open]:bg-cream/30 transition-all duration-300"
                            >
                                <AccordionTrigger className="text-navy font-bold font-sans text-base md:text-lg hover:text-gold hover:no-underline text-left">
                                    {faq.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-navy/70 leading-relaxed text-base pt-2 pb-6">
                                    {faq.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
