import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://clinicadelansiedad.com';

    const staticPages = [
        '',
        '/terapia-individual',
        '/terapia-pareja',
        '/terapia-online',
        '/ansiedad',
        '/depresion',
        '/crisis-de-panico',
        '/blog',
        '/ca',
        '/ca/terapia-individual',
        '/ca/terapia-online'
    ];

    return staticPages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : path.startsWith('/ca') ? 0.8 : 0.9,
    }));
}
