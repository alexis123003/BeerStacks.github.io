import '../app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BeerStacks | News, stacked differently',
    description: 'Independent news for a complicated world.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" data-theme="light">
            <body>{children}</body>
        </html>
    );
};

export default Layout;