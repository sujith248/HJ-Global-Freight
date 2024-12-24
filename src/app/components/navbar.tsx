'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    HomeIcon,
    InformationCircleIcon,
    TruckIcon,
    PhoneIcon,
    DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo.png';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Add background if scrolled > 50px
        };

        setMobileMenuOpen(false);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

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
                        src={Logo}
                        alt="HJ Global Freight Company - Logo"
                        className="h-[80px] w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg1050:flex lg1050:items-center lg1050:space-x-6 z">
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
                <div className="lg1050:hidden flex items-center">
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
                    <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg1100:hidden bg-[#faf8f7] shadow-md"
                        id="mobile-menu"
                    >
                        <div className="space-y-1 px-4 pb-4 pt-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center space-x-1 rounded px-3 py-2 text-base font-medium ${
                                        pathname === link.href
                                            ? 'text-brand bg-neutral-100'
                                            : 'text-neutral-800 hover:bg-neutral-100 hover:text-brand'
                                    } focus:outline-none focus:ring-2 focus:ring-brand transition-colors duration-200`}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
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
        </header>
    );
}
