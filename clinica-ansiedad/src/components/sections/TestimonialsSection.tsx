"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@heroui/react";
import { useAnimatedNumber } from "../../hooks/useAnimatedNumber";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        text: "Después de años medicada por la ansiedad y sin ver mejoría real, decidí probar aquí. En pocos meses entendí por qué me pasaba; y al entenderlo bien y trabajarlo desde la raíz, pude ir dejando atrás la medicación.",
        author: "Marta C.",
        time: "Hace 3 meses"
    },
    {
        text: "Joan Ramon es un profesional extraordinario. Sentí que su aproximación no era de 'arreglar lo que estaba roto' rápido, sino de ayudarme verdaderamente a comprenderme. Me devolvió la tranquilidad que creía perdida.",
        author: "David R.",
        time: "Hace 6 meses"
    },
    {
        text: "Llegué a la clínica con ataques de pánico que no me permitían llevar una vida normal. El trato cálido y a la vez riguroso de Joan Ramon ha sido definitivo. La opción online es comodísima y me hace sentir arropada a la distancia.",
        author: "Laura V.",
        time: "Hace 1 año"
    }
];

export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const reviewCount = useAnimatedNumber(130, 2, isInView);

    return (
        <section className="bg-navy-light py-24 px-6 border-t border-white/5" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex flex-col items-center justify-center"
                    >
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-8 h-8 fill-gold text-gold" />
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-2">
                            <span className="text-gold">5.0</span> ★
                        </h2>
                        <p className="text-white/70 tracking-widest uppercase text-sm font-bold">
                            {reviewCount} reseñas verificadas en Google
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((testimonio, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="bg-navy p-8 rounded-2xl border border-white/10 shadow-xl relative"
                        >
                            <Star className="w-5 h-5 fill-gold text-gold mb-6 opacity-50" />
                            <p className="text-white/80 leading-relaxed font-sans mb-8">
                                "{testimonio.text}"
                            </p>
                            <div className="mt-auto border-t border-white/10 pt-4 flex justify-between items-center">
                                <div>
                                    <p className="text-white font-serif font-bold">{testimonio.author}</p>
                                    <p className="text-white/40 text-xs">{testimonio.time}</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-gold text-gold" />)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        as="a"
                        href="https://www.google.com/search?q=Cl%C3%ADnica+de+la+Ansiedad+Catalunya+Canet+de+Mar&ludocid=reseñas"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="bordered"
                        className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-6 rounded-full font-bold uppercase tracking-widest text-xs transition-colors"
                    >
                        Ver todas las reseñas en Google
                    </Button>
                </div>
            </div>
        </section>
    );
}
