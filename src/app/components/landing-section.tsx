'use client';

import Link from 'next/link';

const LandingSection = () => {
    return (
        <section className="relative h-screen">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/background.mp4" type="video/mp4" />
                <track
                    src="/captions.vtt"
                    kind="captions"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 flex items-center justify-center h-full text-center">
                <div className="max-w-2xl px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Your Ultimate Global Freight Provider
                    </h1>
                    <p className="text-lg text-white mb-6">
                        We provide seamless, efficient freight forwarding
                        services worldwide, connecting your business with global
                        markets at unparalleled speed and reliability.
                    </p>
                    <Link
                        href="/quote"
                        className="inline-block rounded bg-brand text-white px-5 py-3 font-medium hover:bg-brand-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-5" />
        </section>
    );
};

export default LandingSection;
