import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';
import { medicalClinicSchema, faqSchema, personSchema, organizationSchema, websiteSchema } from '@/lib/schema';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const titles: Record<string, string> = {
        es: 'Psicólogo Ansiedad Barcelona | Clínica de la Ansiedad Catalunya',
        ca: 'Psicòleg Ansietat Barcelona | Clínica de l\'Ansietat Catalunya'
    };

    const descriptions: Record<string, string> = {
        es: 'Tratamiento de síntomas de ansiedad, depresión y crisis de pánico en Barcelona. Psicoterapia psicoanalítica con más de 30 años de experiencia. Presencial y online.',
        ca: 'Tractament de símptomes d\'ansietat, depressió i crisis de pànic a Barcelona. Psicoteràpia psicoanalítica amb més de 30 anys d\'experiència. Presencial i online.'
    };

    return {
        metadataBase: new URL('https://clinicadelansiedad.com'),
        title: titles[locale] || titles.es,
        description: descriptions[locale] || descriptions.es,
        authors: [{ name: 'Joan Ramon Soto' }],
        robots: 'index, follow',
        alternates: {
            canonical: `https://clinicadelansiedad.com/${locale}`,
            languages: {
                'es': 'https://clinicadelansiedad.com/es',
                'ca': 'https://clinicadelansiedad.com/ca',
                'x-default': 'https://clinicadelansiedad.com/es'
            }
        },
        openGraph: {
            title: titles[locale] || titles.es,
            description: descriptions[locale] || descriptions.es,
            type: 'website',
            locale: locale === 'ca' ? 'ca_ES' : 'es_ES',
            siteName: 'Clínica de la Ansiedad Catalunya',
            url: `https://clinicadelansiedad.com/${locale}`,
            images: [
                {
                    url: 'https://clinicadelansiedad.com/images/og-clinic-hero.png',
                    width: 1200,
                    height: 630,
                    alt: 'Clínica de la Ansiedad Catalunya'
                }
            ]
        }
    };
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${figtree.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
            <head>
                <Script id="schema-clinic" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
                <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
                <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            </head>
            <body suppressHydrationWarning className="bg-cream text-text font-sans antialiased selection:bg-gold/20 selection:text-navy">
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        {children}
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
