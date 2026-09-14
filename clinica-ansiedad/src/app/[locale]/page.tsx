import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import CredentialsBanner from '@/components/sections/CredentialsBanner';
import ProblemSection from '@/components/sections/ProblemSection';
import ApproachSection from '@/components/sections/ApproachSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ModalitiesSection from '@/components/sections/ModalitiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import FAQSection from '@/components/sections/FAQSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BrandManifestoSection from '@/components/sections/BrandManifestoSection';
import ContactSection from '@/components/sections/ContactSection';
import ZonasSection from '@/components/sections/ZonasSection';
import InlineBookingCTA from '@/components/sections/InlineBookingCTA';
import Footer from '@/components/layout/Footer';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';

export default function Home() {
    return (
        <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
            <Navbar />
            <main>
                <Hero />
                <CredentialsBanner />
                <ProblemSection />
                <ApproachSection />
                <ServicesSection />
                <ZonasSection />
                <InlineBookingCTA ctaLocation="home-servicios" />
                <ModalitiesSection />
                <TestimonialsSection />
                <InlineBookingCTA ctaLocation="home-testimonios" />
                <WhyUsSection />
                <ProcessSection />
                <BrandManifestoSection />
                <ContactSection />
                <FAQSection />
                <StickyBookingButton />
            </main>
            <Footer />
        </div>
    );
}


