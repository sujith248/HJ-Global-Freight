'use client';

const FindUs = () => {
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
                    <h3 className="text-3xl font-bold text-brand text-center lg:text-left">
                        Business Hours
                    </h3>
                    <ul className="text-neutral-700 text-lg space-y-4 bg-gray-100 rounded-lg p-6 shadow-lg">
                        {[
                            {
                                day: 'Monday',
                                time: '08:00 am – 08:00 pm',
                            },
                            {
                                day: 'Tuesday',
                                time: '08:00 am – 08:00 pm',
                            },
                            {
                                day: 'Wednesday',
                                time: '08:00 am – 08:00 pm',
                            },
                            {
                                day: 'Thursday',
                                time: '08:00 am – 08:00 pm',
                            },
                            {
                                day: 'Friday',
                                time: '08:00 am – 08:00 pm',
                            },
                            {
                                day: 'Saturday',
                                time: '08:00 am – 05:00 pm',
                            },
                            { day: 'Sunday', time: '08:00 am – 05:00 pm' },
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="flex justify-between border-b border-gray-200 pb-2"
                            >
                                <span>{item.day}</span>
                                <span>{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
