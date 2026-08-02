export interface MetadataProps {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    image?: string;
    imageAlt?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    lang?: string;
}

// Host canónico: www. El servidor redirige sin-www → www con un 308,
// así que canonical y hreflang deben apuntar SIEMPRE a www y con prefijo de idioma.
const BASE = 'https://www.clinicadelansiedad.com';

export function buildMetadata({
    title,
    description,
    path,
    keywords = [],
    image = `${BASE}/images/og-default.png`,
    imageAlt = 'Clínica de la Ansiedad Catalunya',
    type = 'website',
    publishedTime,
    modifiedTime,
    lang = 'es'
}: MetadataProps) {
    const locale = lang === 'ca' ? 'ca' : 'es';
    const ogConfig: any = {
        title,
        description,
        url: `${BASE}/${locale}${path}`,
        siteName: 'Clínica de la Ansiedad Catalunya',
        locale: lang === 'ca' ? 'ca_ES' : 'es_ES',
        type,
        images: [
            {
                url: image,
                width: 1200,
                height: 630,
                alt: imageAlt,
                type: 'image/png'
            }
        ]
    };

    if (type === 'article') {
        if (publishedTime) ogConfig.publishedTime = publishedTime;
        if (modifiedTime) ogConfig.modifiedTime = modifiedTime;
    }

    return {
        title,
        description,
        keywords: keywords.length > 0 ? keywords : ['clínica ansiedad', 'psicólogo barcelona', 'psicoterapia'],
        robots: 'index, follow',
        alternates: {
            // cada página canoniza a SÍ MISMA: www + prefijo de su idioma
            canonical: `${BASE}/${locale}${path}`,
            languages: {
                'es': `${BASE}/es${path}`,
                'ca': `${BASE}/ca${path}`,
                'x-default': `${BASE}/es${path}`
            }
        },
        openGraph: ogConfig,
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@clinicadelansiedad'
        }
    }
}
