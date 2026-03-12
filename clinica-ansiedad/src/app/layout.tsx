import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';
import { medicalClinicSchema, faqSchema, personSchema, organizationSchema, websiteSchema } from '@/lib/schema';

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://clinicadelansiedad.com'),
    title: 'Psicólogo Ansiedad Barcelona | Clínica de la Ansiedad Catalunya',
    description: 'Tratamiento de síntomas de ansiedad, depresión y crisis de pánico en Barcelona. Psicoterapia psicoanalítica con más de 30 años de experiencia. Presencial y online.',
    keywords: ['síntomas de ansiedad', 'ansiedad sintomas', 'trastorno de ansiedad generalizada', 'que es ansiedad', 'causas de la ansiedad', 'psicólogo ansiedad', 'clínica ansiedad barcelona', 'terapia online ansiedad', 'crisis de ansiedad sintomas', 'terapia ansiedad', 'psicoterapia psicoanalítica', 'Dr. Joan Ramon Soto', 'psicólogo ansiedad Barcelona', 'psicólogo Barcelona', 'clínica ansiedad Catalunya', 'psicólogo Maresme', 'terapia ansiedad Canet de Mar'],
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
        title: 'Psicólogo Ansiedad Barcelona | Clínica de la Ansiedad Catalunya',
        description: 'Tratamiento especializado de ansiedad, depresión y crisis de pánico. +30 años de experiencia con psicoterapia psicoanalítica. Barcelona y online.',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Clínica de la Ansiedad Catalunya',
        url: 'https://clinicadelansiedad.com',
        images: [
            {
                url: 'https://clinicadelansiedad.com/images/og-clinic-hero.png',
                width: 1200,
                height: 630,
                alt: 'Clínica de la Ansiedad Catalunya - Psicólogo ansiedad Barcelona'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Psicólogo Ansiedad Barcelona | Clínica de la Ansiedad Catalunya',
        description: 'Tratamiento especializado de ansiedad, depresión y crisis de pánico. +30 años de experiencia.',
        images: ['https://clinicadelansiedad.com/images/og-clinic-hero.png'],
        creator: '@clinicadelansiedad'
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${figtree.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
            <head>
                <Script id="schema-clinic" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
                <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
                <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            </head>
            <body className="bg-cream text-text font-sans antialiased selection:bg-gold/20 selection:text-navy">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
