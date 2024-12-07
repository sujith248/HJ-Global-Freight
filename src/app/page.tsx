'use client';

export default function HomePage() {
    return (
        <main
            id="main-content"
            className="relative w-full h-screen flex flex-col items-center justify-center"
        >
            <div className="max-w-2xl text-center px-4">
                <h1 className="text-5xl font-bold mb-4">
                    Global Solutions, Delivered
                </h1>
                <p className="text-lg mb-6">
                    We provide seamless, efficient freight forwarding services
                    worldwide, connecting your business with global markets at
                    unparalleled speed and reliability.
                </p>
                <a
                    href="/quote"
                    className="inline-block rounded bg-brand text-white px-5 py-3 font-medium hover:bg-brand-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
                >
                    Get a Quote
                </a>
            </div>
        </main>
    );
}
