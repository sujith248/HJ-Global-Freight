'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { Contacts, contacts } from '../constants/contacts';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                resetForm();
            }, 3000);
        },
    });

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-6 sm:px-12 lg:px-20 bg-white flex flex-col lg:flex-row items-center gap-12 w-full mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:w-1/2 items-start gap-6 md:gap-3 text-center lg:text-left"
            >
                <Image
                    src="/images/handshake1.webp"
                    alt="Freight Solutions"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover hidden lg:block"
                    loading="lazy"
                />
                <p className="text-lg text-neutral-700">
                    For any freight enquiries, please fill out the form or call
                    us at:{' '}
                    <a
                        href={contacts[Contacts.PHONE].href}
                        className="text-brand text-xl font-semibold hover:underline"
                        aria-label={`Call us at ${contacts[Contacts.PHONE].label}`}
                    >
                        {contacts[Contacts.PHONE].label}
                    </a>
                </p>
                <p className="text-neutral-700 md:font-bold">
                    Let us work together to achieve the best possible solution
                    for your freight movements.
                </p>
            </motion.div>

            <div className="lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-6">
                <h2
                    className="text-3xl font-bold text-brand text-center mb-6"
                    id="contact-us-heading"
                >
                    Contact Us
                </h2>
                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center flex flex-col items-center text-green-600 font-semibold"
                    >
                        <FaCheck className="text-5xl mb-4" />
                        <p>We’ve received your message!</p>
                        <p>We’ll get back to you within 48 hours.</p>
                    </motion.div>
                ) : (
                    <form
                        onSubmit={formik.handleSubmit}
                        className="space-y-6"
                        aria-labelledby="contact-us-heading"
                    >
                        <div className="relative">
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <FaUser
                                className="absolute left-3 top-3.5 text-brand"
                                aria-hidden="true"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className={`w-full pl-10 py-3 rounded-lg bg-gray-50 border ${
                                    formik.touched.name && formik.errors.name
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                                aria-invalid={
                                    formik.touched.name && formik.errors.name
                                        ? 'true'
                                        : 'false'
                                }
                                aria-describedby="name-error"
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div
                                    id="name-error"
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {formik.errors.name}
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <FaEnvelope
                                className="absolute left-3 top-3.5 text-brand"
                                aria-hidden="true"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={`w-full pl-10 py-3 rounded-lg bg-gray-50 border ${
                                    formik.touched.email && formik.errors.email
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                                aria-invalid={
                                    formik.touched.email && formik.errors.email
                                        ? 'true'
                                        : 'false'
                                }
                                aria-describedby="email-error"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div
                                    id="email-error"
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {formik.errors.email}
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="How can we help?"
                                rows={4}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className={`w-full pl-4 py-3 rounded-lg bg-gray-50 border ${
                                    formik.touched.message &&
                                    formik.errors.message
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                                aria-invalid={
                                    formik.touched.message &&
                                    formik.errors.message
                                        ? 'true'
                                        : 'false'
                                }
                                aria-describedby="message-error"
                            />
                            {formik.touched.message &&
                                formik.errors.message && (
                                    <div
                                        id="message-error"
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {formik.errors.message}
                                    </div>
                                )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-hover transition"
                            aria-label="Send your message"
                        >
                            <FaPaperPlane />
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </motion.section>
    );
}
