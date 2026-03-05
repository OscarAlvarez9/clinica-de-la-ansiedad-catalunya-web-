import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/servicios/ServicesHero';
import Methodologies from '@/components/servicios/Methodologies';
import TreatmentModalities from '@/components/servicios/TreatmentModalities';
import SpecialtiesSection from '@/components/servicios/SpecialtiesSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Tratamiento de la Ansiedad en Catalunya | Psicoterapia Presencial y Online',
    description: 'Especialistas exclusivos en el tratamiento de la ansiedad con más de 25 años de experiencia. Terapia para depresión, trastorno de pánico y agorafobia en Clínica de la Ansiedad Catalunya.',
    openGraph: {
        title: 'Tratamientos y Servicios | Clínica de la Ansiedad Catalunya',
        description: 'Especialistas exclusivos en el tratamiento de la ansiedad con más de 25 años de experiencia.',
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
