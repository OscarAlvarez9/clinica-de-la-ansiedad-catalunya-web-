import { buildMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/servicios/ServicesHero';
import Methodologies from '@/components/servicios/Methodologies';
import TreatmentModalities from '@/components/servicios/TreatmentModalities';
import SpecialtiesSection from '@/components/servicios/SpecialtiesSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = buildMetadata({
    title: 'Terapia Ansiedad, Depresión y TOC | Clínica Ansiedad Catalunya',
    description: 'Psicoterapia para ansiedad generalizada, depresión, TOC, fobia social y agorafobia. Terapia individual, de pareja y familiar en Barcelona, el Maresme y online.',
    path: '/servicios',
    keywords: [
        'terapia ansiedad', 'trastorno de ansiedad generalizada', 'trastorno obsesivo compulsivo',
        'depresion ansiedad', 'fobia social', 'agorafobia', 'hipocondria',
        'terapia individual', 'terapia pareja', 'terapia familiar',
        'terapia ansiedad Barcelona', 'psicólogo Barcelona', 'terapia Catalunya',
        'tratamiento ansiedad Maresme', 'psicólogo Canet de Mar'
    ]
});

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-24 pb-16">
                <ServicesHero />
                <Methodologies />
                <TreatmentModalities />
                <SpecialtiesSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
