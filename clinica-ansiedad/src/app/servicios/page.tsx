import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/servicios/ServicesHero';
import Methodologies from '@/components/servicios/Methodologies';
import TreatmentModalities from '@/components/servicios/TreatmentModalities';
import SpecialtiesSection from '@/components/servicios/SpecialtiesSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Terapia de Ansiedad, Depresión y TOC en Catalunya | Psicoterapia Presencial y Online',
    description: 'Servicios de psicoterapia para ansiedad generalizada, depresión, trastorno obsesivo compulsivo, agorafobia y fobia social. Terapia individual, de pareja y familiar. Consulta presencial en Barcelona y terapia online en toda España.',
    openGraph: {
        title: 'Servicios de Psicoterapia | Clínica de la Ansiedad Catalunya',
        description: 'Tratamiento especializado para ansiedad generalizada, depresión, TOC, fobia social y agorafobia. Más de 30 años de experiencia.',
    }
};

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
