'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HomeIcon,
    InformationCircleIcon,
    TruckIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import LogoBlack from '../../../public/images/logo black.png';
import LogoWhite from '../../../public/images/logo white.png';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hydrated, setHydrated] = useState(false); // Track hydration
    const pathname = usePathname();

    useEffect(() => {
        setHydrated(true); // Mark hydration complete
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logo = hydrated
        ? scrolled || pathname !== '/'
            ? LogoBlack
            : LogoWhite
        : LogoWhite;

    const navLinks = [
        { href: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
        {
            href: '/about',
            label: 'About Us',
            icon: <InformationCircleIcon className="h-5 w-5" />,
        },
        {
            href: '/services',
            label: 'Services',
            icon: <TruckIcon className="h-5 w-5" />,
        },
        {
            href: '/contact',
            label: 'Contact Us',
            icon: <PhoneIcon className="h-5 w-5" />,
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled || pathname !== '/'
                    ? 'bg-brand-light text-neutral-800 shadow-md'
                    : 'bg-transparent text-white'
            }`}
        >
            <nav
                aria-label="Main Navigation"
                className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
            >
                <Link href="/" aria-label="Go to homepage">
                    <Image
                        src={logo}
                        alt="HJ Global Freight Company - Logo"
                        className="h-[80px] w-auto"
                        priority
                    />
                </Link>
                <div className="hidden lg920:flex lg920:items-center lg920:space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`inline-flex items-center space-x-1 px-3 py-2 text-base font-medium ${
                                pathname === link.href
                                    ? 'text-brand border-b-2 border-brand'
                                    : 'hover:text-brand'
                            } transition-colors duration-200`}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg920:hidden flex items-center">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 hover:text-brand focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
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
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.aside
                        key="mobile-menu"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-40"
                    >
                        <div className="flex flex-col h-full">
                            <button
                                type="button"
                                className="p-4 text-left text-brand font-semibold focus:outline-none"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Close
                            </button>
                            <ul className="flex-grow space-y-1 px-4 py-2">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded ${
                                                pathname === link.href
                                                    ? 'text-brand bg-neutral-100'
                                                    : 'text-neutral-800 hover:text-brand hover:bg-neutral-100'
                                            }`}
                                        >
                                            {link.icon}
                                            <span>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </header>
    );
}
