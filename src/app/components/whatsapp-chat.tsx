'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function WhatsAppChat() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white text-neutral-700 shadow-lg px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold"
                    >
                        <span>Need Help? Chat with us</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleModal}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
                aria-label={
                    isOpen ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'
                }
            >
                {isOpen ? (
                    <FaTimes className="text-2xl" />
                ) : (
                    <FaWhatsapp className="text-2xl" />
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-[5.5rem] right-6 bg-white rounded-lg shadow-lg p-6 w-80"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div>
                                <h2 className="text-lg font-bold text-green-500">
                                    Start a Conversation
                                </h2>
                                <p className="text-sm text-neutral-700">
                                    Hi! Click below to chat with us on WhatsApp.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://api.whatsapp.com/send/?phone=61449115677&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 text-xl"
                            aria-label="Chat with HJ Global Freight on WhatsApp"
                        >
                            <div className="bg-gray-200 rounded-lg p-4 flex items-center justify-center gap-3 shadow-md mb-4">
                                <div className="w-12 h-12 flex items-center">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Company Logo"
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-brand">
                                        HJ Global Freight
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        Owner
                                    </p>
                                </div>
                                <FaWhatsapp />
                            </div>
                        </a>

                        <p className="text-xs text-brand text-center">
                            The team typically replies in a few minutes.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
