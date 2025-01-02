import 'tailwindcss/tailwind.css';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from './components/navbar';
import WhatsAppChat from './components/whatsapp-chat';
import Footer from './components/footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '700'],
});

export const metadata = {
    title: 'HJ Global Freight',
    description: 'Seamless, efficient freight forwarding services worldwide.',
    openGraph: {
        title: 'HJ Global Freight',
        description:
            'Seamless, efficient freight forwarding services worldwide.',
        images: [
            {
                url: '/images/logo-black.webp',
                width: 800,
                height: 600,
                alt: 'HJ Global Freight Company Logo',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={montserrat.className}>
            <body className="bg-[#faf8f7] text-neutral-800 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow w-full">{children}</main>
                <WhatsAppChat />
                <Footer />
            </body>
        </html>
    );
}
