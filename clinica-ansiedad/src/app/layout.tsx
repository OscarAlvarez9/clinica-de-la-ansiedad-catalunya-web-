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
    title: 'Síntomas de Ansiedad y Tratamiento Especializado | Clínica de la Ansiedad Catalunya',
    description: 'Clínica especializada en el tratamiento de la ansiedad en Barcelona y Catalunya. Identificamos los síntomas de ansiedad, sus causas y ofrecemos terapia presencial y online con más de 30 años de experiencia. Reserva tu primera visita.',
    keywords: ['síntomas de ansiedad', 'tratamiento ansiedad', 'psicólogo ansiedad', 'clínica ansiedad barcelona', 'terapia online ansiedad', 'causas de la ansiedad', 'trastorno de ansiedad generalizada', 'crisis de ansiedad', 'consulta psicológica', 'psicólogo catalunya'],
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
        description: 'Clínica especializada en síntomas de ansiedad, trastorno de ansiedad generalizada y depresión. Terapia presencial en Barcelona y online en toda España.',
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
