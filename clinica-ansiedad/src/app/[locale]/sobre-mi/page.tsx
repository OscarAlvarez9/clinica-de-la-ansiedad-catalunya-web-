import { buildMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sobre-mi/AboutHero';
import CredentialsSection from '@/components/sobre-mi/CredentialsSection';
import ExperienceSection from '@/components/sobre-mi/ExperienceSection';
import EducationTimeline from '@/components/sobre-mi/EducationTimeline';
import PublicationsSection from '@/components/sobre-mi/PublicationsSection';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = buildMetadata({
    title: 'Dr. Joan Ramon Soto | Psicoanalista Ansiedad Barcelona',
    description: 'Psicoanalista con más de 30 años en psicoterapia psicoanalítica. Dr. Joan Ramon Soto, fundador de la Clínica de la Ansiedad Catalunya. Consulta en Barcelona y online.',
    path: '/sobre-mi',
    keywords: [
        'Dr. Joan Ramon Soto',
        'psicólogo ansiedad',
        'psicólogo Barcelona',
        'consulta psicologica',
        'psicólogo especialista ansiedad',
        'psicoterapia psicoanalítica',
        'clínica de la ansiedad director',
        'psicólogo ansiedad Barcelona', 'psicólogo Canet de Mar',
        'psicólogo Maresme', 'psicoterapeuta Catalunya'
    ],
    image: 'https://clinicadelansiedad.com/images/joan-ramon-soto.png',
    imageAlt: 'Dr. Joan Ramon Soto - Psicoanalista Ansiedad Barcelona'
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
                <StickyBookingButton />
            </main>
            <Footer />
        </div>
    );
}
