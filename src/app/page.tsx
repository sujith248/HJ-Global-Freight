'use client';

import ContactForm from './components/contact-form';
import LandingSection from './components/landing-section';
import PartnerSection from './components/partner-section';
import ServicesSection from './components/services-section';
import ContactCards from './components/contact-cards';
import FindUs from './components/find-us';

export default function HomePage() {
    return (
        <div className="relative w-full">
            <LandingSection />
            <PartnerSection />
            <ServicesSection />
            <ContactForm />
            <ContactCards />
            <FindUs />
        </div>
    );
}
