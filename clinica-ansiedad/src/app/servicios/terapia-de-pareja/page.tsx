import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { HeartHandshake, MessageCircle, Flame, Scale } from 'lucide-react';
import BookingOptions from '@/components/servicios/BookingOptions';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Terapia de Pareja en Catalunya | Clínica de la Ansiedad',
    description: 'Acompañamiento especializado para resolver dinámicas de conflicto, reproches o desconexión afectiva desde una perspectiva psicoanalítica.',
};

export default function TerapiaDeParejaPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        Resolución de Conflictos
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-6">
                        Terapia de <span className="italic text-sage">Pareja</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>

                    <p className="text-xl text-navy/80 font-medium leading-relaxed mb-8">
                        Un acompañamiento especializado diseñado para resolver dinámicas de conflicto, bloqueos en la comunicación y desconexión afectiva.
                    </p>
                </div>

                {/* Early CTA - Positioned after hero */}
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="text-left bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white shadow-glass mb-16">
                        <h2 className="font-serif text-3xl font-bold text-navy mb-6">¿Cuándo acudir a Terapia de Pareja?</h2>
                        <p className="text-text/80 leading-relaxed mb-6 text-lg">
                            Las crisis en las relaciones son dolorosas y desgastantes. Buscamos ayuda cuando el diálogo se ha roto y las discusiones se vuelven cíclicas. La terapia es especialmente efectiva cuando enfrentáis:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Problemas de comunicación o discusiones constantes sin resolución.",
                                "Infidelidades o pérdida de confianza en el otro.",
                                "Desconexión emocional, apatía o sensación de convivir con un desconocido.",
                                "Dificultades en la esfera sexual o falta de intimidad.",
                                "Conflictos sobre la crianza de los hijos o familias políticas.",
                                "Dudas serias sobre la continuidad de la relación.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <HeartHandshake className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                    <span className="text-text/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-navy/10 my-10"></div>

                        <h2 className="font-serif text-3xl font-bold text-navy mb-6">Reconstruir el vínculo</h2>
                        <div className="space-y-6 text-text/80 leading-relaxed text-lg mb-8">
                            <p>
                                Las crisis de pareja a menudo ocultan malestares individuales no resueltos o patrones de comunicación disfuncionales. Nuestro enfoque ayuda a <strong>desarticular los reproches cruzados</strong> para dar paso a un diálogo genuino.
                            </p>
                            <p>
                                En un ambiente neutral y sin juicios, el terapeuta actúa como facilitador para:
                            </p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li><strong>Traducir el conflicto:</strong> Identificamos las verdaderas necesidades emocionales que se esconden detrás de las discusiones superficiales o los silencios punitivos.</li>
                                <li><strong>Gestión Emocional Compartida:</strong> Enseñamos técnicas efectivas de comunicación no violenta y asertividad para romper dinámicas destructivas.</li>
                                <li><strong>Reparación del Daño:</strong> Trabajamos estratégicamente en la restauración de la confianza tras crisis severas (como la infidelidad).</li>
                                <li><strong>Acuerdos Estables:</strong> Consolidamos pautas de convivencia saludables que fomenten la intimidad, el respeto y la autonomía dentro de la pareja.</li>
                            </ul>
                        </div>

                        <div className="bg-gold/10 rounded-2xl p-6 border border-gold/20">
                            <h3 className="font-serif text-xl font-bold text-navy mb-2">Nuestro objetivo</h3>
                            <p className="text-text/80">Convertir la crisis en una oportunidad de crecimiento, construyendo una relación más madura, consciente y conectada, o facilitando una separación sana y respetuosa si ese es el camino elegido.</p>
                        </div>
                    </div>

                    {/* Authority Section */}
                    <div className="text-center bg-navy text-white p-6 md:p-16 rounded-3xl shadow-glass mb-12 md:mb-16 relative overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-sage/20 rounded-full blur-[80px] -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-gold/10 rounded-full blur-[80px] -z-10"></div>

                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 md:mb-6">Guiados por la Experiencia Clínica</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 max-w-sm text-center md:text-left">
                                <div className="font-serif text-5xl md:text-6xl font-extrabold text-gold opacity-80">+25</div>
                                <p className="text-white/80 leading-snug text-sm md:text-base">Años de experiencia en psicoterapia y psicoanálisis directo.</p>
                            </div>
                            <div className="hidden md:block w-px h-16 bg-white/20"></div>
                            <div className="w-24 h-px bg-white/20 md:hidden"></div>
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 max-w-sm text-center md:text-left">
                                <div className="font-serif text-5xl md:text-6xl font-extrabold text-sage opacity-80">+1K</div>
                                <p className="text-white/80 leading-snug text-sm md:text-base">Parejas y familias apoyadas en procesos de alta complejidad.</p>
                            </div>
                        </div>
                        <p className="mt-10 md:mt-12 text-white/70 max-w-2xl mx-auto italic text-sm md:text-base px-2">
                            "Intervenir en una crisis de pareja requiere neutralidad absoluta, pericia clínica para no caer en alianzas destructivas, y la empatía necesaria para validar el dolor de ambas partes."
                            <br /><span className="not-italic font-bold text-gold mt-4 md:mt-6 block text-sm md:text-base">— Joan Ramon Soto Cifuente</span>
                        </p>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/#contacto"
                            className="inline-block bg-navy text-white font-medium rounded-full px-8 py-4 text-lg hover:bg-navy/90 shadow-md transition-all cursor-pointer"
                        >
                            Solicitar Valoración
                        </Link>
                    </div>
                </div>
            </main>
            {/* Beneficios Profundos */}
            <section className="py-16 md:py-20 bg-cream relative">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">
                            Construyendo un <span className="text-gold italic font-light">Vínculo Sólido</span>
                        </h2>
                        <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                            Más allá de dejar de discutir, la verdadera meta es transformar cómo os relacionáis frente al desacuerdo y recuperar la intimidad funcional.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center sm:text-left">
                        <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                            <MessageCircle className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Comunicación Efectiva</h3>
                            <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                Desactivaréis la lectura de mentes y el rencor acumulado. Aprenderéis a solicitar lo que necesitáis sin ataques ni hostilidad.
                            </p>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                            <Flame className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Reconexión Íntima</h3>
                            <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                Al reducirse el resentimiento diario, vuelve a generarse el espacio psicológico necesario para la curiosidad, la admiración y la cercanía emocional.
                            </p>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                            <Scale className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                            <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Acuerdos Equitativos</h3>
                            <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                Estableceréis un reparto justo de responsabilidades invisibles, disolviendo la sensación de desequilibrio e invisibilidad en la pareja.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reserva Section */}
            <BookingOptions />
            <FAQSection />

            {/* Sticky Booking Button */}
            <StickyBookingButton />

            <Footer />
        </div>
    );
}
