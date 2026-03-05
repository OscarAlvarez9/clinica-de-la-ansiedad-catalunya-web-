import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Terapia Individual en Catalunya | Clínica de la Ansiedad',
    description: 'Un espacio confidencial para explorar tus angustias personales, entender tus síntomas y construir nuevos recursos emocionales estables.',
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

                {/* Reserva Section */}
                <BookingOptions />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
