import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://clinicadelansiedad.com';

    const staticPages = [
        { path: '', freq: 'weekly', priority: 1.0 },
        { path: '/ansiedad', freq: 'monthly', priority: 0.95 },
        { path: '/servicios', freq: 'monthly', priority: 0.95 },
        { path: '/crisis-de-panico', freq: 'monthly', priority: 0.9 },
        { path: '/depresion', freq: 'monthly', priority: 0.9 },
        { path: '/enfoque', freq: 'monthly', priority: 0.85 },
        { path: '/terapia-online', freq: 'monthly', priority: 0.9 },
        { path: '/terapia-individual', freq: 'monthly', priority: 0.85 },
        { path: '/servicios/terapia-individual', freq: 'monthly', priority: 0.85 },
        { path: '/servicios/terapia-de-pareja', freq: 'monthly', priority: 0.75 },
        { path: '/servicios/dimension-familiar', freq: 'monthly', priority: 0.7 },
        { path: '/terapia-pareja', freq: 'monthly', priority: 0.75 },
        { path: '/sobre-mi', freq: 'monthly', priority: 0.8 },
        { path: '/blog', freq: 'weekly', priority: 0.85 },
        { path: '/ca', freq: 'monthly', priority: 0.8 },
        { path: '/ca/terapia-individual', freq: 'monthly', priority: 0.7 },
        { path: '/ca/terapia-online', freq: 'monthly', priority: 0.7 }
    ];

    // Blog posts URLs
    const blogPosts = BLOG_POSTS.map((post) => ({
        path: `/blog/${post.slug}`,
        freq: 'monthly' as const,
        priority: 0.85
    }));

    // Combine all pages
    const allPages = [...staticPages, ...blogPosts];

    return allPages.map(({ path, freq, priority }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: freq as any,
        priority,
    }));
}
