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

export function buildMetadata({
    title,
    description,
    path,
    keywords = [],
    image = 'https://clinicadelansiedad.com/images/og-default.png',
    imageAlt = 'Clínica de la Ansiedad Catalunya',
    type = 'website',
    publishedTime,
    modifiedTime,
    lang = 'es'
}: MetadataProps) {
    const ogConfig: any = {
        title,
        description,
        url: `https://clinicadelansiedad.com${path}`,
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
            canonical: `https://clinicadelansiedad.com${path}`,
            languages: {
                'es': `https://clinicadelansiedad.com${path}`,
                'ca': `https://clinicadelansiedad.com/ca${path}`,
                'x-default': `https://clinicadelansiedad.com${path}`
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
