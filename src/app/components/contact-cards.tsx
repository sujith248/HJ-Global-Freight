'use client';

import { motion } from 'framer-motion';
import { FaPhoneSquareAlt, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const ContactCards = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer"
                    onClick={() =>
                        window.open(
                            'https://maps.google.com/maps?q=-33.854674,151.084635',
                            '_blank',
                        )
                    }
                >
                    <div className="text-brand text-4xl mb-4">
                        <FaLocationDot />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p className="text-neutral-600">
                        Level 1/5 George Street, <br /> North Strathfield, NSW
                        2137
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer"
                >
                    <div className="text-brand text-4xl mb-4">
                        <FaPhoneSquareAlt />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <p className="text-neutral-600">
                        <a
                            href="tel:+61449115677"
                            className="hover:text-brand hover:underline"
                        >
                            +61 449115677
                        </a>
                        <br />
                        <a
                            href="mailto:sales@hjglobalfreight.com"
                            className="hover:text-brand hover:underline"
                        >
                            sales@hjglobalfreight.com
                        </a>
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer"
                >
                    <div className="text-brand text-4xl mb-4">
                        <FaLinkedin />
                    </div>
                    <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                    <a
                        href="https://www.linkedin.com/company/hj-global-freight-pty-ltd/"
                        target="_blank"
                        className="inline-block bg-brand text-white px-4 py-2 rounded hover:bg-brand-hover transition"
                    >
                        Visit Us on LinkedIn
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactCards;
