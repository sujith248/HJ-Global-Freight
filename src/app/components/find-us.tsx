'use client';

import { useState, useEffect } from 'react';

const FindUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const businessHours: Array<{ day: string; open: string; close: string }> = [
        { day: 'Monday', open: '08:00', close: '20:00' },
        { day: 'Tuesday', open: '08:00', close: '20:00' },
        { day: 'Wednesday', open: '08:00', close: '20:00' },
        { day: 'Thursday', open: '08:00', close: '20:00' },
        { day: 'Friday', open: '08:00', close: '20:00' },
        { day: 'Saturday', open: '08:00', close: '17:00' },
        { day: 'Sunday', open: '08:00', close: '17:00' },
    ];

    useEffect(() => {
        const checkIfOpen = () => {
            const now = new Date();
            const day = now.toLocaleString('en-AU', { weekday: 'long' });
            const currentTime = now.getHours() * 60 + now.getMinutes();
            const todayHours = businessHours.find((d) => d.day === day);

            if (todayHours) {
                const [openHour, openMinute] = todayHours.open
                    .split(':')
                    .map(Number);
                const [closeHour, closeMinute] = todayHours.close
                    .split(':')
                    .map(Number);
                const openTime = openHour * 60 + openMinute;
                const closeTime = closeHour * 60 + closeMinute;

                setIsOpen(currentTime >= openTime && currentTime <= closeTime);
            }
        };

        checkIfOpen();
        const interval = setInterval(checkIfOpen, 3600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-center lg:text-left mb-6 text-brand">
                        Find Us
                    </h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.045651869336!2d151.08732!3d-33.863349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb6d029658ad%3A0x773527f159362c83!2s5%20George%20St%2C%20North%20Strathfield%20NSW%202137%2C%20Australia!5e0!3m2!1sen!2sus!4v1690472953218!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg border"
                        title="Our Office Location"
                    ></iframe>
                </div>

                <div className="bg-white flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-3xl font-bold text-brand text-center lg:text-left">
                            Business Hours
                        </h3>
                        <span
                            className={`px-4 py-1 text-sm font-bold rounded-full shadow-lg ${
                                isOpen
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                            }`}
                        >
                            {isOpen ? 'Open' : 'Closed'}
                        </span>
                    </div>
                    <ul className="text-neutral-700 text-lg space-y-4 bg-gray-100 rounded-lg p-6 shadow-lg">
                        {businessHours.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex justify-between border-b border-gray-200 pb-2"
                            >
                                <span
                                    className={`${item.day === 'Thursday' ? 'font-bold' : 'font-normal'}`}
                                >
                                    {item.day}
                                </span>
                                <span
                                    className={`${item.day === 'Thursday' ? 'font-bold' : 'font-normal'}`}
                                >
                                    {`${item.open} am - ${Number(item.close.split(':')[0]) - 12}:00 pm`}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
