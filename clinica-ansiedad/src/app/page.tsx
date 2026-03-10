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
import ContactSection from '@/components/sections/ContactSection';
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
                <ModalitiesSection />
                <TestimonialsSection />
                <WhyUsSection />
                <ProcessSection />
                <ContactSection />
                <FAQSection />
                <StickyBookingButton />
            </main>
            <Footer />
        </div>
    );
}
