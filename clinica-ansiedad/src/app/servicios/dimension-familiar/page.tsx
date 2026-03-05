import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { Users } from 'lucide-react';
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
                {/* Reserva Section */}
                <BookingOptions />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
