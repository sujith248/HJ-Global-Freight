'use client';

import LandingSection from './components/landing-section';
import PartnerSection from './components/partner-section';
import ServicesSection from './components/services-section';

export default function HomePage() {
    return (
        <div className="relative w-full">
            <LandingSection />
            <PartnerSection />
            <ServicesSection />
        </div>
    );
}
