'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-neutral-800 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-8xl font-extrabold text-brand mb-4"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-lg sm:text-xl text-neutral-600 mb-6 text-center max-w-xl"
            >
                Oops! We can’t seem to find the page you’re looking for. It
                might have been moved, deleted, or doesn’t exist.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
                <Link
                    href="/"
                    className="inline-block bg-brand text-white px-6 py-3 rounded font-semibold hover:bg-brand-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </main>
    );
}
