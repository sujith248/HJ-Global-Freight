'use client';

import { useState, useEffect } from 'react';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaLinkedin,
    FaMapMarkerAlt,
    FaClock,
} from 'react-icons/fa';
import Link from 'next/link';
import { navLinks } from '../constants/navbar-links';
import { businessHours, contacts, Contacts } from '../constants/contacts';

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);
    const [todayHours, setTodayHours] = useState('');
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const checkBusinessStatus = () => {
            const now = new Date();
            const day = now.toLocaleString('en-US', { weekday: 'long' });
            const currentTime = now.getHours() * 60 + now.getMinutes();
            const today = businessHours.find((item) => item.day === day);

            if (today) {
                const [openHour, openMinute] = today.open
                    .split(':')
                    .map(Number);
                const [closeHour, closeMinute] = today.close
                    .split(':')
                    .map(Number);
                const openTime = openHour * 60 + openMinute;
                const closeTime = closeHour * 60 + closeMinute;

                const formatTime = (hour: number, minute: number) => {
                    const isPM = hour >= 12;
                    const formattedHour = hour % 12 || 12;
                    return `${formattedHour}:${minute
                        .toString()
                        .padStart(2, '0')} ${isPM ? 'pm' : 'am'}`;
                };

                setTodayHours(
                    `${formatTime(openHour, openMinute)} – ${formatTime(
                        closeHour,
                        closeMinute,
                    )}`,
                );

                setIsBusinessOpen(
                    currentTime >= openTime && currentTime <= closeTime,
                );
            }
        };

        checkBusinessStatus();
        const interval = setInterval(checkBusinessStatus, 3600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold text-brand mb-4 flex items-center gap-2">
                        <FaClock className="text-brand" />
                        Business Hours
                    </h3>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-gray-200 px-4 py-3 rounded-lg text-sm font-medium">
                            <span
                                className={`px-2 py-1 rounded-full font-semibold ${
                                    isBusinessOpen
                                        ? 'bg-green-500 text-white'
                                        : 'bg-red-500 text-white'
                                }`}
                            >
                                {isBusinessOpen ? 'Open' : 'Closed'}
                            </span>
                            <span>Today: {todayHours}</span>
                        </div>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-sm text-brand mt-2 underline hover:text-brand-hover"
                        >
                            {isDropdownOpen ? 'Hide Hours' : 'View All Hours'}
                        </button>
                        {isDropdownOpen && (
                            <ul className="mt-2 bg-white shadow-lg rounded-lg p-4 text-sm text-neutral-800">
                                {businessHours.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`flex justify-between py-1 ${
                                            new Date().toLocaleString('en-AU', {
                                                weekday: 'long',
                                            }) === item.day
                                                ? 'font-bold text-brand'
                                                : ''
                                        }`}
                                    >
                                        <span>{item.day}</span>
                                        <span>
                                            {item.open} am –{' '}
                                            {Number(item.close.split(':')[0]) %
                                                12 || 12}
                                            :00 pm
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-brand mb-4 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-brand" />
                        Find Us
                    </h3>
                    <p className="text-neutral-700 mb-2 flex items-center gap-2">
                        <a
                            href={contacts[Contacts.ADDRESS].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {contacts[Contacts.ADDRESS].label}
                        </a>
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.045651869336!2d151.08732!3d-33.863349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb6d029658ad%3A0x773527f159362c83!2s5%20George%20St%2C%20North%20Strathfield%20NSW%202137%2C%20Australia!5e0!3m2!1sen!2sus!4v1690472953218!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        className="rounded-lg border"
                        loading="lazy"
                        title="Our Office Location"
                    ></iframe>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-brand mb-4">
                        Contact Us
                    </h3>
                    <p className="text-md flex items-center gap-2">
                        <FaPhoneAlt className="text-brand" />
                        <a
                            href={contacts[Contacts.PHONE].href}
                            className="hover:underline"
                        >
                            {contacts[Contacts.PHONE].label}
                        </a>
                    </p>
                    <p className="text-md flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-brand" />
                        <a
                            href={contacts[Contacts.SALES_EMAIL].href}
                            className="hover:underline"
                        >
                            {contacts[Contacts.SALES_EMAIL].label}
                        </a>
                    </p>
                    <p className="text-md flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-brand" />
                        <a
                            href={contacts[Contacts.PERSONAL_EMAIL].href}
                            className="hover:underline"
                        >
                            {contacts[Contacts.PERSONAL_EMAIL].label}
                        </a>
                    </p>
                    <p className="text-md flex items-center gap-2 mt-2">
                        <FaLinkedin className="text-brand" />
                        <a
                            href={contacts[Contacts.LINKEDIN].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {contacts[Contacts.LINKEDIN].label}
                        </a>
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center text-sm text-neutral-600 border-t border-gray-300 pt-4">
                <p>
                    &copy; {currentYear} HJ Global Freight. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    {navLinks.map((link, idx) => (
                        <Link
                            href={link.href}
                            key={idx}
                            className="hover:underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
