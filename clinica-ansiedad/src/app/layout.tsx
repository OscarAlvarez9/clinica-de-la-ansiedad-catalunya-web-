import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';
import { medicalClinicSchema, faqSchema, personSchema } from '@/lib/schema';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Clínica de la Ansiedad Catalunya | Dr. Joan Ramon Soto',
    description: 'Tratamiento especializado de la ansiedad en Catalunya. Abordaje psicoanalítico para resolver las causas profundas de la angustia y el estrés. Sesiones presenciales en Barcelona y online.',
    keywords: ['clínica ansiedad', 'psicólogo barcelona', 'ansiedad catalunya', 'tratamiento ansiedad', 'joan ramon soto', 'psicoanálisis'],
    authors: [{ name: 'Joan Ramon Soto' }],
    robots: 'index, follow',
    alternates: {
        canonical: 'https://clinicadelansiedad.com',
        languages: {
            'es': 'https://clinicadelansiedad.com',
            'ca': 'https://clinicadelansiedad.com/ca',
            'x-default': 'https://clinicadelansiedad.com'
        }
    },
    openGraph: {
        title: 'Clínica de la Ansiedad Catalunya | Dr. Joan Ramon Soto',
        description: 'Tratamiento especializado de la ansiedad. Abordaje psicoanalítico para resolver las causas profundas.',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Clínica de la Ansiedad Catalunya',
        url: 'https://clinicadelansiedad.com'
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${playfair.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
            <head>
                <Script id="schema-clinic" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
                <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            </head>
            <body className="bg-cream text-text font-sans antialiased selection:bg-gold/20 selection:text-navy">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
