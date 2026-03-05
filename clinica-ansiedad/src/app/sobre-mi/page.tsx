import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sobre-mi/AboutHero';
import CredentialsSection from '@/components/sobre-mi/CredentialsSection';
import ExperienceSection from '@/components/sobre-mi/ExperienceSection';
import EducationTimeline from '@/components/sobre-mi/EducationTimeline';
import PublicationsSection from '@/components/sobre-mi/PublicationsSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Sobre Mí | Dr. Joan Ramon Soto | Clínica de la Ansiedad',
    description: 'Conoce a Joan Ramon Soto Cifuente, Fundador del Espacio Psicoanálisis Directo Online, Doctorado en Psicología Psicoanalítica y experto en comunicación no verbal.',
    openGraph: {
        title: 'Sobre Mí | Dr. Joan Ramon Soto',
        description: 'Conoce al experto detrás de la Clínica de la Ansiedad.',
    }
};

export default function SobreMiPage() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main className="pt-24 pb-16">
                <AboutHero />
                <CredentialsSection />
                <ExperienceSection />
                <EducationTimeline />
                <PublicationsSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
