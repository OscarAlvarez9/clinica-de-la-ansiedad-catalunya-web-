import { buildMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/servicios/ServicesHero';
import Methodologies from '@/components/servicios/Methodologies';
import TreatmentModalities from '@/components/servicios/TreatmentModalities';
import SpecialtiesSection from '@/components/servicios/SpecialtiesSection';
import FAQSection from '@/components/sections/FAQSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
      title: 'Terapia de ansiedad, depresión y TOC en Canet de Mar (Maresme)',
      description: 'Psicoterapia para ansiedad, depresión, TOC, fobia social y agorafobia. Terapia individual, de pareja y familiar en Canet de Mar (Maresme) y online.',
      path: '/servicios',
      keywords: [
          'terapia ansiedad', 'trastorno de ansiedad generalizada', 'trastorno obsesivo compulsivo',
          'depresion ansiedad', 'fobia social', 'agorafobia', 'hipocondria',
          'terapia individual', 'terapia pareja', 'terapia familiar',
          'terapia ansiedad Barcelona', 'psicólogo Barcelona', 'terapia Catalunya',
          'tratamiento ansiedad Maresme', 'psicólogo Canet de Mar'
      ],
    lang: locale,
  });
}

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-24 pb-16">
                <ServicesHero />
                <Methodologies />
                <TreatmentModalities />
                <SpecialtiesSection />
                <section className="py-12 px-4 md:px-8 border-t border-navy/5">
                    <div className="container mx-auto max-w-4xl">
                        <p className="text-navy/50 text-sm leading-relaxed">
                            Además de la atención individual, de pareja y familiar, trabajamos con empresas a través de un{" "}
                            <a href="/taller-gestion-estres-empresas" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">taller práctico de gestión del estrés y la ansiedad para empresas</a>: un programa presencial de prevención y entrenamiento de herramientas para equipos, en grupos reducidos.
                            Consulta presencial en Canet de Mar (Maresme) y{" "}
                            <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a>:{" "}
                            <a href="/psicologo-maresme" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">psicoanalista en el Maresme</a>.
                            Más sobre la{" "}
                            <a href="/" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">Clínica de la Ansiedad</a>.
                        </p>
                    </div>
                </section>
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
