import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBox, FaClock, FaHandshake, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const PartnerSection = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 },
                },
            }}
            className="relative w-full min-h-[calc(100vh-112px)] bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20"
        >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between  gap-16 w-full ">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 space-y-6"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-brand">
                        Your Partner in Freight Forwarding
                    </h2>
                    <p className="text-lg text-neutral-800 leading-relaxed">
                        Proudly Australian-owned, HJ Global Freight leverages
                        over 60 years of combined experience to deliver tailored
                        freight solutions. With proven expertise, we ensure your
                        cargo arrives at the right place, at the right time.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <FaBox className="text-brand h-6 w-6" />
                            <span>
                                Tailored freight movements to meet your needs
                            </span>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaClock className="text-brand h-6 w-6" />
                            <span>Proven solutions for timely deliveries</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaHandshake className="text-brand h-6 w-6" />
                            <span>Exceptional client relationships</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaGlobe className="text-brand h-6 w-6" />
                            <span>
                                Extensive experience for reliable results
                            </span>
                        </li>
                    </ul>
                    <Link
                        href="/about"
                        className="inline-block mt-6 bg-brand text-white px-6 py-3 font-medium rounded hover:bg-brand-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                    >
                        Learn More
                    </Link>
                </motion.div>

                <motion.div
                    className="lg:w-1/2 flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Image
                        src="/test.jpg"
                        alt="Freight Forwarding"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default PartnerSection;
