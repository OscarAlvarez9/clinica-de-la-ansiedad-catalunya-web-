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
    title: 'Síntomas de Ansiedad y Tratamiento Especializado | Clínica de la Ansiedad Catalunya',
    description: 'Clínica especializada en el tratamiento de la ansiedad en Barcelona y Catalunya. Psicoterapia psicoanalítica con el Dr. Joan Ramon Soto para resolver las causas profundas. Sesiones presenciales y online.',
    keywords: ['síntomas de ansiedad', 'tratamiento ansiedad', 'psicólogo ansiedad', 'clínica ansiedad barcelona', 'terapia online ansiedad', 'causas de la ansiedad', 'trastorno de ansiedad generalizada', 'crisis de ansiedad', 'psicoterapia psicoanalítica', 'Dr. Joan Ramon Soto'],
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
        title: 'Síntomas de Ansiedad y Tratamiento Especializado | Clínica de la Ansiedad Catalunya',
        description: 'Especialistas en psicoterapia psicoanalítica para ansiedad, depresión y crisis de pánico. 31 años de experiencia. Barcelona y online para toda España.',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Clínica de la Ansiedad Catalunya',
        url: 'https://clinicadelansiedad.com',
        images: [
            {
                url: 'https://clinicadelansiedad.com/images/og-clinic-hero.png',
                width: 1200,
                height: 630,
                alt: 'Clínica de la Ansiedad Catalunya - Tratamiento psicoterapéutico'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Clínica de la Ansiedad Catalunya',
        description: 'Psicoterapia psicoanalítica especializada en ansiedad, depresión y crisis de pánico.',
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
