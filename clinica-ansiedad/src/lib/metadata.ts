export interface MetadataProps {
    title: string;
    description: string;
    path: string;
    lang?: string;
}

export function buildMetadata({ title, description, path, lang = 'es' }: MetadataProps) {
    return {
        title,
        description,
        alternates: {
            canonical: `https://clinicadelansiedad.com${path}`,
            languages: {
                'es': `https://clinicadelansiedad.com${path}`,
                'ca': `https://clinicadelansiedad.com/ca${path}`
            }
        },
        openGraph: {
            title,
            description,
            url: `https://clinicadelansiedad.com${path}`,
            siteName: 'Clínica de la Ansiedad Catalunya',
            locale: lang === 'ca' ? 'ca_ES' : 'es_ES',
            type: 'website'
        }
    }
}
