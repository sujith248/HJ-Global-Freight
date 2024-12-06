// src/app/layout.tsx
import ChakraProviderWrapper from './chakra-provider';
import './globals.css';

export const metadata = {
    title: 'My Next.js Website',
    description: 'A website built with Next.js, TypeScript, and Chakra UI',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
            </body>
        </html>
    );
}
