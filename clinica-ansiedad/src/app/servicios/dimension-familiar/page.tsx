import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { Users, Network, Anchor, RefreshCw, Quote } from 'lucide-react';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Dimensión Familiar | Clínica de la Ansiedad Catalunya',
    description: 'Abordaje de la sintomatología que aparece en la red de vínculos familiares, facilitando un entorno más sano de convivencia.',
};

export default function DimensionFamiliarPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        Intervención Sistémica
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-6">
                        Dimensión <span className="italic text-sage">Familiar</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>

                    <p className="text-xl text-navy/80 font-medium leading-relaxed mb-8">
                        Abordamos la sintomatología emocional que aparece y se manifiesta dentro de la red de vínculos familiares para facilitar un entorno más sano de convivencia.
                    </p>

                    <div className="text-left bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white shadow-glass mb-16">
                        <h2 className="font-serif text-3xl font-bold text-navy mb-6">¿Cuándo plantear una intervención sistémica?</h2>
                        <p className="text-text/80 leading-relaxed mb-6 text-lg">
                            A menudo, un miembro de la familia expresa (mediante ansiedad, fobias o conductas disruptivas) tensiones latentes que pertenecen al sistema familiar completo. Trabajamos esta dimensión ante:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Conflictos intergeneracionales o problemas de convivencia con hijos adolescentes.",
                                "Duelos familiares no resueltos, pérdidas repentinas o enfermedades graves.",
                                "Desbordamiento emocional frente a trastornos incapacitantes de un familiar.",
                                "Transiciones vitales bruscas (nido vacío, jubilación, divorcios mal gestionados).",
                                "Secretos familiares, reproches históricos o ausencias que generan trauma.",
                                "Dificultades extremas en el establecimiento de límites y jerarquías saludables.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                                    <span className="text-text/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-navy/10 my-10"></div>

                        <h2 className="font-serif text-3xl font-bold text-navy mb-6">Sanar desde el núcleo</h2>
                        <div className="space-y-6 text-text/80 leading-relaxed text-lg mb-8">
                            <p>
                                La intervención en la dimensión familiar permite desactivar dinámicas tóxicas abordando el entorno completo, evitando así que el paciente individual asuma toda la carga del conflicto ("el paciente identificado").
                            </p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li><strong>Análisis Estructural:</strong> Evaluamos roles, coaliciones y jerarquías desequilibradas dentro del núcleo familiar.</li>
                                <li><strong>Resolución Práctica:</strong> Establecemos límites saludables y redefinimos las responsabilidades mutuas para evitar el exceso de presión sobre un único miembro.</li>
                                <li><strong>Estrategias de Apoyo:</strong> Psicoeducación y desarrollo de habilidades de afrontamiento colectivo para familias que conviven con ansiedad severa o depresión.</li>
                            </ul>
                        </div>

                        <div className="bg-sage/10 rounded-2xl p-6 border border-sage/20">
                            <h3 className="font-serif text-xl font-bold text-navy mb-2">Nuestro objetivo</h3>
                            <p className="text-text/80">Restaurar la funcionalidad del grupo familiar, transformando un entorno generador de estrés en una auténtica red de cuidado, comprensión y apoyo mutuo incondicional.</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/#contacto"
                            className="inline-block bg-navy text-white font-medium rounded-full px-8 py-4 text-lg hover:bg-navy/90 shadow-md transition-all cursor-pointer"
                        >
                            Pedir Cita Familiar
                        </Link>
                    </div>
                </div>
                {/* Beneficios Profundos */}
                <section className="py-16 md:py-20 bg-cream relative">
                    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">
                                Un Hogar <span className="text-gold italic font-light">Funcional y Sano</span>
                            </h2>
                            <p className="text-base md:text-lg text-navy/70 max-w-2xl mx-auto font-light">
                                Desarticular los patrones de conflicto colectivo permite que el entorno familiar deje de ser una fuente de angustia y vuelva a ser refugio.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center sm:text-left">
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                                <Network className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Descompresión del Sistema</h3>
                                <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                    Alivio sobre el miembro que carga el síntoma (quien canaliza la ansiedad de todos), repartiendo el peso emocional de forma sana.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                                <Anchor className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Límites Seguros</h3>
                                <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                    Recuperar la jerarquía intergeneracional. Los padres restauran su autoridad contenedora y los hijos se liberan de cargas adultas.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-glass border border-navy/5 hover:border-gold/30 transition-all hover:-translate-y-1">
                                <RefreshCw className="w-10 h-10 text-gold mb-4 md:mb-6 mx-auto sm:mx-0" />
                                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4">Afrontamiento Grupal</h3>
                                <p className="text-navy/70 leading-relaxed font-light text-sm md:text-base">
                                    Aprenderéis herramientas conjuntas para gestionar futuras crisis, decepciones, duelos o transiciones sin que la familia se fracture.
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
                            "Un síntoma de ansiedad extremo en un hijo o de dolor en un progenitor a menudo es la expresión de un malestar que pertenece a todo el ecosistema vivo."
                        </h2>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-8 md:w-12 h-1 bg-gold mb-4"></div>
                            <p className="font-sans font-bold tracking-widest uppercase text-xs md:text-sm text-gold/90">
                                Empatía Sistémica
                            </p>
                            <p className="text-white/80 text-base md:text-xl mt-4 max-w-lg mx-auto font-light leading-relaxed px-4">
                                Trabajamos desde la comprensión más profunda, asumiendo que cada miembro actúa como mejor sabe con los recursos que tiene. Transformamos la culpa en responsabilidad compartida.
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
