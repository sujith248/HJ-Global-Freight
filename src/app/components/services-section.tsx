'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FaPlane,
    FaShip,
    FaTruck,
    FaClock,
    FaLeaf,
    FaTasks,
    FaShieldAlt,
} from 'react-icons/fa';

export default function ServicesSection() {
    const services = [
        {
            title: 'Air Freight',
            icon: <FaPlane />,
            description:
                'Fast and reliable air freight solutions to get your cargo delivered globally on time.',
        },
        {
            title: 'Sea Freight',
            icon: <FaShip />,
            description:
                'Efficient and cost-effective shipping solutions for your international cargo.',
        },
        {
            title: 'Domestic Freight',
            icon: <FaTruck />,
            description:
                'Tailored domestic transportation services for businesses of all sizes.',
        },
        {
            title: 'Time Critical (AOG & Pharma)',
            icon: <FaClock />,
            description:
                'Specialized time-critical freight solutions for Aerospace and Pharma industries.',
        },
        {
            title: 'Perishable',
            icon: <FaLeaf />,
            description:
                'Temperature-controlled logistics for perishable goods, ensuring freshness.',
        },
        {
            title: 'Project Freight',
            icon: <FaTasks />,
            description:
                'Customized project cargo handling for oversized and complex shipments.',
        },
        {
            title: 'Customs & Quarantine',
            icon: <FaShieldAlt />,
            description:
                'Hassle-free customs clearance and quarantine solutions for your cargo.',
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
            className="relative w-full bg-gray-50 py-16 px-6 sm:px-12 lg:px-20"
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="text-4xl lg:text-5xl font-bold text-brand mb-6"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'easeInOut',
                    }}
                    className="text-lg text-neutral-700 mb-12"
                >
                    Delivering tailored logistics solutions for all your freight
                    needs.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: 'easeOut',
                            }}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
                        >
                            <div className="text-brand text-5xl mb-2">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">
                                {service.title}
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                {service.description}
                            </p>
                            <Link
                                href="/about"
                                className="inline-block mt-6 bg-brand text-white px-6 py-3 font-medium rounded hover:bg-brand-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                            >
                                Explore More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
