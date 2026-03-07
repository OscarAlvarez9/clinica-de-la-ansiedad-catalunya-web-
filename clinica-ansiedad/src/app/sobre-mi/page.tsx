import { buildMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sobre-mi/AboutHero';
import CredentialsSection from '@/components/sobre-mi/CredentialsSection';
import ExperienceSection from '@/components/sobre-mi/ExperienceSection';
import EducationTimeline from '@/components/sobre-mi/EducationTimeline';
import PublicationsSection from '@/components/sobre-mi/PublicationsSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = buildMetadata({
    title: 'Dr. Joan Ramon Soto | Psicólogo Psicoanalítico Barcelona',
    description: 'Dr. Joan Ramon Soto, psicólogo con 31 años de experiencia en psicoterapia psicoanalítica. Fundador de Clínica de la Ansiedad Catalunya. Especialista en ansiedad y depresión.',
    path: '/sobre-mi',
    keywords: [
        'Dr. Joan Ramon Soto',
        'psicólogo psicoanalítico Barcelona',
        'psicólogo ansiedad especialista',
        'Joan Ramon Soto psicólogo',
        'psicoterapia psicoanalítica',
        'psicólogo experiencia',
        'fundador clínica ansiedad'
    ],
    image: 'https://clinicadelansiedad.com/images/joan-ramon-soto.png',
    imageAlt: 'Dr. Joan Ramon Soto - Psicólogo Psicoanalítico'
});

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
