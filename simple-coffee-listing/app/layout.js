import { DM_Sans } from 'next/font/google';
import './globals.css';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Simple Coffee Listing',
    description: 'Product list of a Cafe',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
