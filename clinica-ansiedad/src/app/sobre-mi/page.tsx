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
    title: 'Psicólogo Especialista en Ansiedad | Dr. Joan Ramon Soto | +30 Años de Experiencia',
    description: 'Conoce al Dr. Joan Ramon Soto, psicólogo especialista en ansiedad con más de 30 años de experiencia. Doctorado en Psicología Psicoanalítica, fundador de la Clínica de la Ansiedad Catalunya en Barcelona.',
    openGraph: {
        title: 'Dr. Joan Ramon Soto | Psicólogo Especialista en Ansiedad en Barcelona',
        description: 'Psicólogo con más de 30 años de experiencia en el tratamiento de la ansiedad, depresión y trastornos emocionales.',
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
