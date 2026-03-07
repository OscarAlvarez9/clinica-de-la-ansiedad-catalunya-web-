'use client';

// Metadata is now defined in ./metadata.ts (required for Server Component)
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';
import { motion } from 'framer-motion';
import { Network, BrainCircuit, Activity, ShieldCheck, ChevronRight } from 'lucide-react';
import { Variants } from 'framer-motion';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function EnfoquePage() {
    return (
        <div className="min-h-screen flex flex-col pt-20 bg-cream">
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero Flagship Section */}
                <section className="bg-navy pt-32 pb-24 px-4 md:px-8 text-white relative overflow-hidden flex items-center min-h-[70vh]">
                    {/* Abstract Orbs */}
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -z-10 animate-blob"></div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-4xl"
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-gold block"></span>
                                <span className="text-gold font-bold tracking-widest uppercase text-sm">
                                    Metodología Clínica · Psicoanálisis Directo
                                </span>
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[1.1] tracking-tight">
                                Ir a la raíz del síntoma,<br />
                                <span className="text-gold/90 font-light italic">no ponerle parche.</span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
                                Más de 30 años de experiencia clínica especializada nos permiten tratar la ansiedad desde su verdadero origen estructural, no desde la supresión superficial.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Filosofía / Quote grande */}
                <section className="py-24 px-4 md:px-8 bg-white relative">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <Network className="w-12 h-12 text-gold mx-auto mb-8 opacity-50" />
                            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-tight italic font-medium">
                                "La ansiedad rara vez es la enfermedad; suele ser el piloto de emergencia que parpadea indicando que el motor interno tiene un fallo. Si apagamos el piloto sin arreglar el motor, la angustia siempre volverá."
                            </h2>
                            <div className="mt-10 flex flex-col justify-center items-center">
                                <div className="w-16 h-[2px] bg-sage mb-4"></div>
                                <p className="text-navy font-bold uppercase tracking-widest text-sm">Joan Ramon Soto</p>
                                <p className="text-text/50 text-sm mt-1">Fundador & Psicoanalista Directo</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Comparativa: Paradigma Tradicional vs Directo */}
                <section className="py-24 px-4 md:px-8 bg-cream/50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">El Cambio de Paradigma</h2>
                            <p className="text-lg text-text/70 max-w-2xl mx-auto">
                                Por qué el Psicoanálisis Directo logra resultados donde otras metodologías se estancan tras meses de tratamiento.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Tradicional (Lo que no hacemos) */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 md:p-14 rounded-[2rem] shadow-sm border border-navy/5 relative"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Activity className="w-32 h-32" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-8 text-navy/60">Terapias Suprasintomáticas</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Se centran en el síntoma de forma aislada intentando reducirlo mecánicamente.",
                                        "Ofrecen 'tiritas' o herramientas de distracción (analgésicos mentales) que no resuelven la causa.",
                                        "Limitan las sesiones a charlas pasivas de desahogo emocional sin dirección clara.",
                                        "El paciente depende de la terapia durante años sin llegar al alta estructural."
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-4 items-start text-text/70">
                                            <div className="w-6 h-6 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                                            <span className="leading-relaxed">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Directo (Lo que hacemos) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-navy p-10 md:p-14 rounded-[2rem] shadow-glass border border-white/10 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[60px] -z-0"></div>
                                <div className="relative z-10">
                                    <h3 className="font-serif text-2xl font-bold mb-8 text-gold">Psicoanálisis Directo</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Interviene directamente en el núcleo inconsciente donde reside el conflicto original.",
                                            "Escucha clínica activa y directiva para desarticular los patrones que retroalimentan la ansiedad.",
                                            "Acorta radicalmente los tiempos frente al psicoanálisis pasivo ortodoxo.",
                                            "Genera un cambio estructural en la psique que previene las recaídas y otorga autonomía."
                                        ].map((text, i) => (
                                            <li key={i} className="flex gap-4 items-start text-white/80">
                                                <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5"><ShieldCheck className="w-4 h-4" /></div>
                                                <span className="leading-relaxed">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Timeline (Las 4 Fases) */}
                <section className="py-24 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="mb-20">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">El Proceso Terapéutico</h2>
                            <p className="text-lg text-text/70 max-w-2xl">
                                Un recorrido clínico estructurado en 4 fases, diseñado para llevarte desde la crisis inicial hasta la autonomía emocional completa.
                            </p>
                        </div>

                        <div className="space-y-12 md:space-y-0 relative">
                            {/* Línea vertical para desktop */}
                            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-[2px] bg-navy/5"></div>

                            {[
                                {
                                    num: "01",
                                    title: "Evaluación y Cartografía",
                                    desc: "No aplicamos tests estandarizados fríos. Realizamos entrevistas clínicas exhaustivas para mapear tu biografía, identificar la estructura de tu angustia y establecer un diagnóstico profundo más allá de las etiquetas psiquiátricas."
                                },
                                {
                                    num: "02",
                                    title: "Desarticulación del Patrón",
                                    desc: "Mediante la intervención directa, localizamos y desmontamos las 'trampas mentales' y mandatos inconscientes que te mantienen atado al sufrimiento. Es la fase de los grandes descubrimientos personales."
                                },
                                {
                                    num: "03",
                                    title: "Reestructuración Psíquica",
                                    desc: "Una vez la causa está expuesta y pierde su poder, trabajamos en consolidar nuevos mecanismos de defensa saludables, fortaleciendo la autoestima y la resiliencia natural de la mente."
                                },
                                {
                                    num: "04",
                                    title: "Autonomía Clínica (El Alta)",
                                    desc: "Nuestro objetivo final nunca es que dependas de la terapia para siempre. El tratamiento concluye cuando has interiorizado los cambios estructurales y recuperado el timón de tu vida."
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="relative md:pl-32 flex flex-col md:flex-row gap-6 md:gap-0 mt-12 md:mt-24 first:mt-0"
                                >
                                    {/* Number Badge */}
                                    <div className="md:absolute left-0 top-0 w-24 h-24 rounded-full bg-cream border border-navy/10 flex items-center justify-center font-serif text-3xl text-navy font-bold shadow-sm z-10 shrink-0">
                                        {step.num}
                                    </div>
                                    <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-navy/5 md:border-none shadow-sm md:shadow-none">
                                        <h3 className="font-serif text-2xl font-bold text-navy mb-4 pt-2">{step.title}</h3>
                                        <p className="text-text/70 text-lg leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reserva Section */}
                <BookingOptions />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
