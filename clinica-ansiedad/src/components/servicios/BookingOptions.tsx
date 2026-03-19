import { motion } from "framer-motion";
import { Card, CardBody } from '@heroui/react';
import { Calendar, MonitorSmartphone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function BookingOptions() {
    return (
        <section className="py-20 bg-cream/30">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        Reserva tu cita
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-6">
                        Comienza tu proceso terapéutico
                    </h2>
                    <div className="w-16 h-1 bg-sage mx-auto mb-6"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        Elige la modalidad que mejor se adapte a tu situación. Ofrecemos el mismo rigor clínico y atención personalizada tanto en nuestro centro como a distancia.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Presencial */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border border-navy/10 shadow-glass bg-white hover:border-gold/30 transition-colors">
                            <CardBody className="p-8 md:p-12 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold mb-4">Consulta Presencial</h3>
                                <p className="text-text/80 mb-6 flex-grow">
                                    Atención directa en nuestra clínica en la comarca del Maresme (Catalunya). Un espacio seguro, tranquilo y confidencial, diseñado para trabajar desde la cercanía personal.
                                </p>
                                <div className="space-y-4 mb-8 text-sm text-text/70">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-gold" />
                                        <span>Lunes a Viernes con cita previa</span>
                                    </div>
                                </div>
                                <Link
                                    href="/#contacto"
                                    className="w-full inline-block text-center bg-navy text-white font-medium rounded-xl py-4 hover:bg-navy/90 transition-all shadow-md cursor-pointer"
                                >
                                    Reservar Presencial
                                </Link>
                            </CardBody>
                        </Card>
                    </motion.div>

                    {/* Online */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border border-navy/10 shadow-glass bg-white hover:border-gold/30 transition-colors">
                            <CardBody className="p-8 md:p-12 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                                    <MonitorSmartphone className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold mb-4">Terapia Online</h3>
                                <p className="text-text/80 mb-6 flex-grow">
                                    Desde cualquier lugar del mundo. El mismo proceso clínico y rigor que la terapia presencial, adaptado a tu ritmo de vida y horarios mediante videollamada o atención telefónica.
                                </p>
                                <div className="space-y-4 mb-8 text-sm text-text/70">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-gold" />
                                        <span>Horarios flexibles adaptados a tu zona horaria</span>
                                    </div>
                                </div>
                                <Link
                                    href="/#contacto"
                                    className="w-full inline-block text-center bg-navy text-white font-medium rounded-xl py-4 hover:bg-navy/90 transition-all shadow-md cursor-pointer"
                                >
                                    Reservar Online
                                </Link>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
