'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HomeIcon,
    InformationCircleIcon,
    TruckIcon,
    PhoneIcon,
    DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Logo from '../../../public/logo.png';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <header className="relative z-50">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
            >
                Skip to main content
            </a>
            <nav
                aria-label="Main Navigation"
                role="navigation"
                className="flex-shrink-0 bg-[#faf8f7] text-neutral-800 border-b border-neutral-200"
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex-shrink-0">
                        <Link href="/" aria-label="Go to homepage">
                            <Image
                                src={Logo}
                                alt="HJ Global Freight Company - Logo"
                                width={120}
                                height={40}
                                className="h-auto w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-1 px-3 py-2 text-base font-medium hover:text-brand transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand hover:scale-105"
                        >
                            <HomeIcon className="h-5 w-5" />
                            <span>Home</span>
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center space-x-1 px-3 py-2 text-base font-medium hover:text-brand transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand hover:scale-105"
                        >
                            <InformationCircleIcon className="h-5 w-5" />
                            <span>About Us</span>
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center space-x-1 px-3 py-2 text-base font-medium hover:text-brand transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand hover:scale-105"
                        >
                            <TruckIcon className="h-5 w-5" />
                            <span>Services</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center space-x-1 px-3 py-2 text-base font-medium hover:text-brand transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand hover:scale-105"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            <span>Contact Us</span>
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <Link
                            href="/quote"
                            className="inline-flex items-center space-x-2 rounded bg-brand px-4 py-2 text-white font-semibold shadow-md hover:bg-brand-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
                        >
                            <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                            <span>Get a Quote</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-neutral-800 hover:text-brand focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {mobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={mobileMenuVariants}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden"
                            id="mobile-menu"
                        >
                            <div className="space-y-1 px-4 pb-4 pt-2">
                                <Link
                                    href="/"
                                    className="flex items-center space-x-1 rounded px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand transition-colors duration-200"
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    <span>Home</span>
                                </Link>
                                <Link
                                    href="/about"
                                    className="flex items-center space-x-1 rounded px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand transition-colors duration-200"
                                >
                                    <InformationCircleIcon className="h-5 w-5" />
                                    <span>About Us</span>
                                </Link>
                                <Link
                                    href="/services"
                                    className="flex items-center space-x-1 rounded px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand transition-colors duration-200"
                                >
                                    <TruckIcon className="h-5 w-5" />
                                    <span>Services</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex items-center space-x-1 rounded px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand transition-colors duration-200"
                                >
                                    <PhoneIcon className="h-5 w-5" />
                                    <span>Contact Us</span>
                                </Link>
                                <Link
                                    href="/quote"
                                    className="mt-2 flex items-center justify-center space-x-1 rounded bg-brand px-3 py-2 text-white font-semibold shadow hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover transition-colors duration-200"
                                >
                                    <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                                    <span>Get a Quote</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
