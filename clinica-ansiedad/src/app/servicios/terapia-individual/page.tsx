import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Brain, Leaf, Quote } from 'lucide-react';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Terapia Individual para Ansiedad y Depresión en Catalunya | Consulta Psicológica',
    description: 'Terapia individual especializada en síntomas de ansiedad, depresión, hipocondría y TOC. Consulta psicológica presencial en Barcelona y online. Reserva tu primera visita y supera la ansiedad desde la raíz.',
};

export default function TerapiaIndividualPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        Psicoterapia Especializada
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-6">
                        Terapia <span className="italic text-sage">Individual</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>

                    <p className="text-xl text-navy/80 font-medium leading-relaxed mb-8">
                        La terapia individual es un espacio confidencial y seguro diseñado para explorar tus angustias personales, entender la raíz de tus síntomas y construir nuevos recursos emocionales estables.
                    </p>

                    <div className="text-left bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white shadow-glass mb-16">
                        <h2 className="font-serif text-3xl font-bold text-navy mb-6">¿Para quién es la Terapia Individual?</h2>
                        <p className="text-text/80 leading-relaxed mb-6 text-lg">
                            Este espacio está diseñado para personas que sienten que han perdido el control sobre sus emociones o que atraviesan situaciones que les superan en su día a día. Muchas personas acuden a nosotros cuando experimentan:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Crisis de ansiedad o ataques de pánico repentinos.",
                                "Sensación constante de inseguridad, miedo paralizante o fobia social.",
                                "Tristeza profunda prolongada, apatía o síntomas de depresión.",
                                "Pensamientos obsesivos, rumiación mental o hipocondría.",
                                "Dificultades de autoestima, dependencia emocional o bloqueos personales.",
                                "Estrés laboral crónico, Burnout o insatisfacción vital.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                                    <span className="text-text/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-navy/10 my-10"></div>

                        <h2 className="font-serif text-3xl font-bold text-navy mb-6">¿Cómo trabajamos? Nuestro Enfoque</h2>
                        <div className="space-y-6 text-text/80 leading-relaxed text-lg mb-8">
                            <p>
                                A diferencia de terapias que solo intentan "tapar" el síntoma a corto plazo, a través del Psicoanálisis Directo y terapias basadas en la evidencia, buscamos una <strong>comprensión profunda de aquello que origina tu sufrimiento emocional.</strong>
                            </p>
                            <p>
                                El proceso terapéutico se adapta a tu ritmo y necesidades específicas:
                            </p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li><strong>Evaluación Inicial:</strong> Una primera entrevista extensa para entender tu contexto, tu historia vital y el origen exacto del malestar.</li>
                                <li><strong>Identificación de Patrones:</strong> Localizamos las creencias limitantes, miedos inconscientes y patrones de conducta que alimentan la ansiedad o depresión.</li>
                                <li><strong>Estrategias de Regulación:</strong> Desarrollamos juntos herramientas prácticas para afrontar las crisis de ansiedad y recuperar tu funcionalidad en el día a día.</li>
                                <li><strong>Cambio Estructural:</strong> Trabajamos en la raíz del problema para prevenir recaídas, consolidar la autoestima y alcanzar un equilibrio emocional sólido y duradero.</li>
                            </ul>
                        </div>

                        <div className="bg-sage/10 rounded-2xl p-6 border border-sage/20">
                            <h3 className="font-serif text-xl font-bold text-navy mb-2">Resultados esperados</h3>
                            <p className="text-text/80">Recuperación de la tranquilidad, mayor seguridad en la toma de decisiones, mejora sustancial en las relaciones interpersonales y desaparición gradual de los síntomas incapacitantes.</p>
                        </div>
                    </div>

                </div>

                {/* Authority Section */}
                <div className="text-center bg-navy text-white p-6 md:p-16 rounded-3xl shadow-glass mb-12 md:mb-16 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-sage/20 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-gold/10 rounded-full blur-[80px] -z-10"></div>

                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 md:mb-6 text-white">Guiados por la Experiencia Clínica</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 max-w-sm text-center md:text-left">
                            <div className="font-serif text-5xl md:text-6xl font-extrabold text-gold opacity-80">+25</div>
                            <p className="text-white/80 leading-snug text-sm md:text-base">Años de experiencia en psicoterapia y psicoanálisis directo.</p>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-white/20"></div>
                        <div className="w-24 h-px bg-white/20 md:hidden"></div>
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 max-w-sm text-center md:text-left">
                            <div className="font-serif text-5xl md:text-6xl font-extrabold text-sage opacity-80">+1K</div>
                            <p className="text-white/80 leading-snug text-sm md:text-base">Pacientes acompañados hacia una vida libre de ansiedad y dependencias.</p>
                        </div>
                    </div>
                    <p className="mt-10 md:mt-12 text-white/70 max-w-2xl mx-auto italic text-sm md:text-base px-2">
                        "El síntoma es solo el mensajero continuo. Nuestro trabajo clínico es descifrar el mensaje en compañía del paciente para que deje de gritar a través de la ansiedad."
                        <br /><span className="not-italic font-bold text-gold mt-4 md:mt-6 block text-sm md:text-base">— Joan Ramon Soto Cifuente</span>
                    </p>
                </div>

                {/* Beneficios Profundos */}
                <section className="py-16 md:py-20 bg-cream relative">
                    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">
                                Una Transformación <span className="text-gold italic font-light">Estructural</span>
                            </h2>
                            <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                                Nuestro objetivo no es enseñarte a convivir con la ansiedad, sino construir los cimientos psíquicos para que no necesites recurrir a ella.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center sm:text-left">
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                                <ShieldCheck className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Autonomía Emocional</h3>
                                <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                    Dejarás de depender de técnicas de evitación o analgésicos mentales. Desarrollarás una fortaleza interna real frente a las adversidades.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                                <Brain className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Claridad Mental</h3>
                                <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                    Al desactivar los conflictos inconscientes, la rumiación obsesiva y el ruido mental disminuyen drásticamente, permitiendo mayor enfoque y paz.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                                <Leaf className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Relaciones Sanas</h3>
                                <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                    Aprenderás a transitar el vínculo con los demás desde la seguridad personal, estableciendo límites sin culpa ni miedo al abandono.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promesa de Valor / Filosofía */}
                <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden selection:bg-gold/30 selection:text-white">
                    <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-sage/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
                        <Quote className="w-12 h-12 md:w-16 md:h-16 text-gold/50 mx-auto mb-6 md:mb-8" />
                        <h2 className="font-serif text-2xl md:text-5xl font-medium leading-normal md:leading-tight mb-6 md:mb-8 text-white px-2">
                            "Dar el primer paso y pedir ayuda indica un acto de valentía extraordinario. Nuestro compromiso es recibir ese acto con rigor clínico y confidencialidad absoluta."
                        </h2>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-8 md:w-12 h-1 bg-gold mb-4"></div>
                            <p className="font-sans font-bold tracking-widest uppercase text-xs md:text-sm text-gold/90">
                                Tu Espacio Seguro
                            </p>
                            <p className="text-white/80 text-base md:text-xl mt-4 max-w-lg mx-auto font-light leading-relaxed px-4">
                                En la primera sesión no te someteremos a cuestionarios fríos ni tests mecánicos. Tendremos una conversación clínica profunda para entender tu visión y el origen de tu malestar.
                            </p>
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
