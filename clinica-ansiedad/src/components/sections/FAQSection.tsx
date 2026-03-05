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
        title: "¿Qué es la psicoterapia psicoanalítica y en qué se diferencia de otras terapias?",
        content: "La psicoterapia psicoanalítica no busca silenciar el síntoma (la ansiedad) de forma rápida o conductual con parches. Busca entender qué es lo que tu síntoma está intentando comunicar. Trabajamos en el origen inconsciente del conflicto para que, al resolver la causa profunda, el síntoma desaparezca de forma duradera y natural, sin riesgo de recaídas constantes."
    },
    {
        title: "¿La terapia online es igual de efectiva que la presencial?",
        content: "Absolutamente sí. Nuestro equipo fue pionero en implementar la terapia telemática hace más de 25 años, mucho antes de que se popularizara. La eficacia clínica es idéntica; lo fundamental en el psicoanálisis es la palabra y el establecimiento del vínculo terapéutico, lo cual se logra perfectamente a través de un entorno online seguro."
    },
    {
        title: "¿Cuánto tiempo dura el tratamiento de la ansiedad?",
        content: "No establecemos protocolos cerrados o mágicos de 'X sesiones'. Dado que trabajamos sobre las causas profundas y personales de la singularidad de cada individuo, la duración del proceso es completamente a medida. Depende de la historia, las defensas y el compromiso de la persona. Lo que sí garantizamos es un abordaje ético sin alargar la terapia más de lo estrictamente necesario."
    },
    {
        title: "¿Atendéis tanto en català como en castellano?",
        content: "Sí. Todo nuestro equipo, y en especial su fundador Joan Ramon Soto, es completamente bilingüe. Consideramos que la herramienta clave de trabajo es tu propio idioma emocional, por lo que te atenderemos en el idioma en el que te sientas más cómodo/a expresándote, ya sea en castellano o en catalán."
    },
    {
        title: "¿Cómo sé si la terapia psicoanalítica es adecuada para mí?",
        content: "Si sientes que llevas tiempo lidiando con angustia, miedos o patrones repetitivos que no logras comprender; si has probado otros abordajes que solo te han funcionado superficialmente o te sientes dependiente a medicación sin resolver la base... el psicoanálisis suele ser el enfoque indicado. Trabajar en el 'por qué' real es transformar tu vida desde los cimientos."
    },
    {
        title: "¿Qué pasa en la primera consulta?",
        content: "La primera entrevista es una toma de contacto relajada y confidencial. Exploramos qué te trae a consulta, hablamos sobre tu sufrimiento actual y empezamos a esbozar las bases del tratamiento. También aprovechamos para aclarar la metodología, la frecuencia y cualquier duda que tengas antes de comprometerte con el proceso."
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
