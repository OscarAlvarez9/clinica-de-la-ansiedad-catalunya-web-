'use client';

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2 } from 'lucide-react';
import { Card, CardBody } from '@heroui/react';

const credentials = [
    {
        icon: <Award className="w-8 h-8 text-gold" />,
        title: "Doctorado en Psicología Psicoanalítica",
        org: "Centro Internacional de Psicología (2001)"
    },
    {
        icon: <Shield className="w-8 h-8 text-sage" />,
        title: "Psicoanalista Directo",
        org: "The Direct Psychoanalytic Institute (EE.UU.)"
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-navy" />,
        title: "Fundador del Espacio EPDO",
        org: "Espacio Psicoanálisis Directo Online (2022)"
    }
];

export default function CredentialsSection() {
    return (
        <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-4">
                        Licencias y Certificados
                    </h2>
                    <p className="text-lg text-text/70">Avales profesionales clave que fundamentan mi práctica clínica.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {credentials.map((cred, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-glass bg-white/70 backdrop-blur-md">
                                <CardBody className="p-8 flex flex-col items-center text-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        {cred.icon}
                                    </div>
                                    <h3 className="font-serif text-xl text-navy font-bold">{cred.title}</h3>
                                    <p className="text-sm text-text/80">{cred.org}</p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
