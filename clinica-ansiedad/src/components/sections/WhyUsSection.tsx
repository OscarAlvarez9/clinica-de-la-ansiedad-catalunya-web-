"use client";
import { motion } from "framer-motion";
import { Globe, ShieldQuestion, Handshake, MapPin } from "lucide-react";

const stats = [
    { num: "1993", label: "Año de fundación" },
    { num: "+30", label: "Años de trayectoria" },
    { num: "+1K", label: "Pacientes atendidos" },
    { num: "5.0★", label: "130+ reseñas Google" },
];

const differentiators = [
    {
        icon: <ShieldQuestion className="w-6 h-6" />,
        title: "Resolvemos causas, no síntomas",
        desc: "Vamos a la raíz psicológica del problema para evitar recaídas. Sin parches temporales.",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Pioneros en terapia online",
        desc: "+25 años de experiencia en terapia online para toda España, mucho antes del auge digital.",
    },
    {
        icon: <Handshake className="w-6 h-6" />,
        title: "Proceso humano y personalizado",
        desc: "Acompañamiento directo por Joan Ramon Soto. Ético, riguroso y continuo.",
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Presencia en Maresme y toda España",
        desc: "Consulta presencial en Canet de Mar (Barcelona) y terapia online para toda Catalunya y España.",
    },
];

export default function WhyUsSection() {
    return (
        <section className="bg-cream py-28 px-6 border-b border-navy/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Big stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-gold" />
                            <span className="text-gold text-sm tracking-widest uppercase font-bold">Por qué elegirnos</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
                            Treinta años de<br />
                            <span className="text-gold italic font-medium">historia y resultados</span>
                        </h2>
                        <p className="text-navy/70 text-lg leading-relaxed mb-12 font-light">
                            Somos una de las clínicas de referencia en psicología clínica especializada en ansiedad en Cataluña. Nuestra trayectoria habla por sí sola.
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="bg-white rounded-2xl px-6 py-5 border border-navy/5 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <p className="font-serif text-3xl md:text-4xl font-bold text-navy leading-none mb-1">{stat.num}</p>
                                    <p className="text-navy/50 text-[10px] font-bold tracking-[0.2em] uppercase">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Differentiators */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col gap-5"
                    >
                        {differentiators.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.12 }}
                                className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-navy/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300 cursor-default"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-navy font-bold mb-1">{item.title}</h3>
                                    <p className="text-navy/65 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
