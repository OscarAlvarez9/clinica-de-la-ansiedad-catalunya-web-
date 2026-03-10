import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://clinicadelansiedad.com';

    const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
        // Home - máxima prioridad
        { path: '', priority: 1.0, changeFrequency: 'weekly' },

        // Páginas core de tratamiento (keywords TOP)
        { path: '/ansiedad', priority: 0.95, changeFrequency: 'monthly' },
        { path: '/servicios', priority: 0.95, changeFrequency: 'monthly' },
        { path: '/crisis-de-panico', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/depresion', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/enfoque', priority: 0.85, changeFrequency: 'monthly' },

        // Servicios (keywords ALTA)
        { path: '/terapia-online', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/terapia-individual', priority: 0.85, changeFrequency: 'monthly' },
        { path: '/servicios/terapia-individual', priority: 0.85, changeFrequency: 'monthly' },
        { path: '/servicios/terapia-de-pareja', priority: 0.75, changeFrequency: 'monthly' },
        { path: '/servicios/dimension-familiar', priority: 0.7, changeFrequency: 'monthly' },
        { path: '/terapia-pareja', priority: 0.75, changeFrequency: 'monthly' },

        // Sobre mí y blog
        { path: '/sobre-mi', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/blog', priority: 0.85, changeFrequency: 'weekly' },

        // Versiones catalán
        { path: '/ca', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/ca/terapia-individual', priority: 0.7, changeFrequency: 'monthly' },
        { path: '/ca/terapia-online', priority: 0.7, changeFrequency: 'monthly' },
    ];

    return pages.map(({ path, priority, changeFrequency }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    }));
}
