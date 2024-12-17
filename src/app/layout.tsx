import 'tailwindcss/tailwind.css';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from './components/navbar';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '700'],
});

export const metadata = {
    title: 'HJ Global Freight Company',
    description:
        'International Freight Forwarders - Global Logistics Solutions',
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
            </body>
        </html>
    );
}
