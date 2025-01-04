'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FaClock,
    FaHandshake,
    FaGlobe,
    FaPhoneAlt,
    FaShieldAlt,
    FaTruck,
} from 'react-icons/fa';

export default function AboutUs() {
    const features = [
        {
            title: 'Open 7 Days',
            icon: <FaClock size={40} />,
            description:
                'We are here for you every single day, ensuring your freight needs are addressed without delay, no matter the day of the week.',
            image: '/images/test.jpg',
        },
        {
            title: 'Customer Service',
            icon: <FaHandshake size={40} />,
            description:
                'Our dedicated team is committed to providing exceptional customer support, ensuring no request is too big or small.',
            image: '/images/test.jpg',
        },
        {
            title: 'Global Connectivity',
            icon: <FaGlobe size={40} />,
            description:
                'With a global network, we manage seamless freight movement across continents, tailoring services to your unique needs.',
            image: '/images/test.jpg',
        },
        {
            title: 'Reliability',
            icon: <FaShieldAlt size={40} />,
            description:
                'Our dependable solutions are designed to give you peace of mind, ensuring your supply chain is efficient and trustworthy.',
            image: '/images/test.jpg',
        },
        {
            title: 'Expertise',
            icon: <FaTruck size={40} />,
            description:
                'With decades of experience, we handle complex logistics challenges with precision and confidence, providing unmatched expertise.',
            image: '/images/test.jpg',
        },
        {
            title: 'Tailored Solutions',
            icon: <FaPhoneAlt size={40} />,
            description:
                'We develop bespoke freight solutions to meet your specific business requirements, no matter how unique they are.',
            image: '/images/test.jpg',
        },
    ];

    return (
        <div className="flex flex-col w-full">
            <section className="relative w-full h-screen">
                <div className="absolute inset-0">
                    <Image
                        src="/images/collage colour.png"
                        alt="About Us Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80 filter"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 sm:px-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white text-left space-y-6 max-w-lg p-6 md:p-12"
                    >
                        <h1 className="text-6xl font-extrabold">About Us</h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            HJ Global Freight Pty Ltd is a family-run
                            international freight forwarder, combining decades
                            of expertise and a commitment to excellence.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-white rounded-lg shadow-lg p-8 text-neutral-800 max-w-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-brand">
                            Our Story
                        </h2>
                        <p>
                            Since our inception, we have prioritized quality
                            customer service, addressing the unique needs of our
                            clients with passion and expertise. Our
                            comprehensive approach ensures your freight is
                            handled with care, whether it’s a small package or a
                            large shipment. With a door-to-door service model,
                            we aim to redefine logistics solutions, offering
                            unparalleled reliability and flexibility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        What Sets Us Apart
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative group overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                                <div className="inset-0 bg-black bg-opacity-40 group-hover:bg-brand transition-colors duration-500"></div>
                                <div className="inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="text-4xl mb-4"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold group-hover:opacity-100 transition-opacity">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
