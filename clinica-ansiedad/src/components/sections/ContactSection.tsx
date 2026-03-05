"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea, Checkbox, Button, RadioGroup, Radio } from "@heroui/react";
import { Phone, Mail, MapPin, Map, ShieldCheck } from "lucide-react";

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Idealmente aquí se haría un post request o el Toast
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contacto" className="bg-cream py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Info Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-navy font-bold mb-4">
                            Hablemos
                        </h2>
                        <div className="w-16 h-1 bg-gold mb-6" />
                        <p className="text-navy/70 text-lg leading-relaxed max-w-md">
                            Si la ansiedad está limitando tu vida, no dudes en escribirnos o llamarnos. Estudiaremos tu caso de forma confidencial.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/30">
                                <Phone className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="text-navy font-bold mb-1">Teléfono Directo</h4>
                                <a href="tel:+34629794365" className="text-navy/80 hover:text-gold transition-colors text-lg">
                                    +34 629 79 43 65
                                </a>
                                <p className="text-navy/50 text-sm mt-1">Horario de atención: Lunes a Viernes de 9h a 20h.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/30">
                                <Mail className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="text-navy font-bold mb-1">Email Privado</h4>
                                <a href="mailto:joanramonsoto@gmail.com" className="text-navy/80 hover:text-gold transition-colors text-lg" style={{ wordBreak: 'break-all' }}>
                                    joanramonsoto@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/30">
                                <MapPin className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="text-navy font-bold mb-1">Consulta Presencial</h4>
                                <p className="text-navy/80 leading-relaxed max-w-xs">
                                    Ronda Dr. Anglès 74<br />
                                    08360 Canet de Mar<br />
                                    Barcelona (Maresme)
                                </p>
                                <a
                                    href="https://goo.gl/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-gold text-sm font-bold uppercase tracking-wider mt-2 hover:text-gold-light"
                                >
                                    <Map className="w-3 h-3" /> Ver en el mapa
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(44,95,120,0.1)] border border-navy/5 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-bl-full -z-0"></div>

                        <div className="relative z-10 flex items-center gap-2 mb-8 bg-sage/10 text-sage-dark w-fit px-4 py-2 rounded-full text-sm font-semibold border border-sage/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Confidencialidad absoluta</span>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <Input
                                isRequired
                                label="Nombre completo"
                                labelPlacement="outside"
                                placeholder="E.g. María García"
                                variant="bordered"
                                radius="md"
                                size="lg"
                                classNames={{
                                    label: "text-navy font-semibold text-sm pb-1",
                                    inputWrapper: "border-navy/20 hover:border-gold focus-within:!border-gold bg-white shadow-sm transition-colors",
                                    input: "text-navy placeholder:text-navy/30"
                                }}
                            />

                            <Input
                                isRequired
                                label="Teléfono o Email de contacto"
                                labelPlacement="outside"
                                placeholder="Donde prefiera que le contactemos"
                                variant="bordered"
                                radius="md"
                                size="lg"
                                classNames={{
                                    label: "text-navy font-semibold text-sm pb-1",
                                    inputWrapper: "border-navy/20 hover:border-gold focus-within:!border-gold bg-white shadow-sm transition-colors",
                                    input: "text-navy placeholder:text-navy/30"
                                }}
                            />

                            <RadioGroup
                                label="Modalidad preferida"
                                orientation="horizontal"
                                defaultValue="online"
                                classNames={{
                                    label: "text-navy font-semibold text-sm pb-1",
                                    wrapper: "gap-4"
                                }}
                            >
                                <Radio
                                    value="presencial"
                                    classNames={{
                                        base: "m-0 inline-flex items-center justify-between flex-row-reverse w-full max-w-[200px] cursor-pointer rounded-lg border-2 border-transparent bg-navy/5 p-4 hover:bg-navy/10 data-[selected=true]:border-gold shadow-sm",
                                        labelWrapper: "ml-0",
                                        label: "text-navy font-medium text-sm",
                                        control: "bg-white border-navy/30 text-gold"
                                    }}
                                >
                                    Presencial (Canet)
                                </Radio>
                                <Radio
                                    value="online"
                                    classNames={{
                                        base: "m-0 inline-flex items-center justify-between flex-row-reverse w-full max-w-[200px] cursor-pointer rounded-lg border-2 border-transparent bg-navy/5 p-4 hover:bg-navy/10 data-[selected=true]:border-gold shadow-sm",
                                        labelWrapper: "ml-0",
                                        label: "text-navy font-medium text-sm",
                                        control: "bg-white border-navy/30 text-gold"
                                    }}
                                >
                                    Online (Videollamada)
                                </Radio>
                            </RadioGroup>

                            <Textarea
                                label="Breve descripción del motivo de consulta (opcional)"
                                labelPlacement="outside"
                                placeholder="Si lo desea, puede explicar brevemente su situación general."
                                variant="bordered"
                                radius="md"
                                minRows={4}
                                classNames={{
                                    label: "text-navy font-semibold text-sm pb-1",
                                    inputWrapper: "border-navy/20 hover:border-gold focus-within:!border-gold bg-white shadow-sm transition-colors",
                                    input: "text-navy placeholder:text-navy/30"
                                }}
                            />

                            <div className="pt-2">
                                <Checkbox
                                    isRequired
                                    radius="sm"
                                    color="warning"
                                    classNames={{
                                        base: "items-start",
                                        label: "text-xs text-navy/70 leading-relaxed ml-1",
                                        wrapper: "mt-1 before:border-navy/30"
                                    }}
                                >
                                    He leído y acepto la Política de Privacidad y el tratamiento confidencial de mis datos.
                                </Checkbox>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-7 text-lg shadow-xl shadow-navy/20 hover:shadow-navy/40 transition-all duration-300 transform hover:-translate-y-1 rounded-xl mt-4"
                            >
                                Enviar solicitud protegida
                            </Button>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-sage/20 text-sage-dark border border-sage/30 rounded-xl text-center font-medium shadow-sm mt-4"
                                >
                                    Mensaje enviado correctamente. Le contactaremos en breve.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
