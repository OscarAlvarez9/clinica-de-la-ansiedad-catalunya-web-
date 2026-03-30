import { getEntries, getEntryBySlug } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { buildMetadata } from '@/lib/metadata';
import { blogPostingSchema } from '@/lib/schema';
import Script from 'next/script';
import BlogCard from '@/components/blog/BlogCard';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogPost } from '@/lib/blog-data';
import { calculateReadingTime, extractHeadings } from '@/lib/blog-utils';
import OptimizedImage from '@/components/OptimizedImage';

interface PageProps {
    params: Promise<{ locale: string, slug: string }>;
}

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
    const entries = await getEntries('blogPost', false, ['-fields.fechaPublicacion']);
    const locales = ['es', 'ca'];
    
    return entries.flatMap((entry: any) => 
        locales.map(locale => ({
            locale,
            slug: (entry.fields.slug || '').replace(/^\/|\/$/g, ''),
        }))
    );
}

export async function generateMetadata({ params }: PageProps) {
    const { slug: rawSlug, locale } = await params;
    const slug = (rawSlug || '').replace(/^\/|\/$/g, '');

    // Safety guard: if slug is somehow empty or "blog" at this level, 
    // it shouldn't be matching here, but we return early to help Next.js.
    if (!slug || slug === 'blog') return {};

    const entry = await getEntryBySlug('blogPost', slug, false, locale);

    if (!entry) return buildMetadata({
        title: 'Post no encontrado',
        description: 'El artículo que buscas no existe o ha sido movido.',
        path: '/blog'
    });

    const fields = entry.fields as any;

    return buildMetadata({
        title: `${fields.titulo} | Blog Clínica de la Ansiedad`,
        description: fields.metaDescripcion || '',
        path: `/blog/${slug}`,
        keywords: [
            fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'psicología',
            'psicoanálisis',
            'ansiedad',
            'salud mental',
            'psicoterapia',
        ],
        image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : undefined,
        imageAlt: fields.titulo,
        type: 'article',
        publishedTime: fields.fechaPublicacion || entry.sys.createdAt,
        modifiedTime: entry.sys.updatedAt
    });
}

// Custom Rich Text Render Options
const renderOptions = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node: any, children: any) => {
            const text = children[0];
            const id = typeof text === 'string' ? text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : undefined;
            return (
                <h2 id={id} className="text-3xl md:text-5xl font-serif text-navy mt-24 mb-12 leading-tight tracking-tight scroll-mt-32">
                    {children}
                </h2>
            );
        },
        [BLOCKS.HEADING_3]: (node: any, children: any) => {
            const text = children[0];
            const id = typeof text === 'string' ? text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : undefined;
            return (
                <h3 id={id} className="text-2xl md:text-3xl font-serif text-navy/90 mt-18 mb-8 leading-snug scroll-mt-32">
                    {children}
                </h3>
            );
        },
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <p className="text-navy/80 text-lg md:text-xl leading-[2.2] mb-14 font-light">
                {children}
            </p>
        ),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
            <ul className="list-none pl-0 mb-14 flex flex-col gap-6">
                {children}
            </ul>
        ),
        [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
            <li className="relative pl-10 text-navy/80 text-lg md:text-xl leading-relaxed font-light before:content-[''] before:absolute before:left-0 before:top-[0.85rem] before:w-2 before:h-2 before:rounded-full before:bg-gold">
                {children}
            </li>
        ),
        [BLOCKS.QUOTE]: (node: any, children: any) => (
            <blockquote className="border-l-0 bg-navy/5 p-12 md:p-16 rounded-[40px] italic text-navy/90 text-2xl md:text-3xl font-serif my-20 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/30" />
                <span className="absolute top-4 left-6 text-6xl text-gold/20 font-serif">"</span>
                {children}
            </blockquote>
        ),
        [INLINES.HYPERLINK]: (node: any, children: any) => (
            <a 
                href={node.data.uri} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold font-medium border-b border-gold/30 hover:text-navy hover:border-navy transition-all no-underline"
            >
                {children}
            </a>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const asset = node.data.target;
            const url = asset?.fields?.file?.url;
            const title = asset?.fields?.title || 'Imagen del artículo';
            
            if (!url) return null;

            return (
                <div className="my-20 w-full rounded-[40px] overflow-hidden shadow-2xl bg-white p-2 text-center">
                    <OptimizedImage 
                        src={`https:${url}`} 
                        alt={title} 
                        width={1200} 
                        height={675} 
                        className="w-full h-auto object-cover rounded-[32px]" 
                    />
                </div>
            );
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            const contentType = node.data.target?.sys?.contentType?.sys?.id;
            const fields = node.data.target?.fields;

            if (!fields) return null;

            if (contentType === 'blogPost') {
                return (
                    <div className="my-16 border border-navy/10 rounded-[32px] p-8 bg-white shadow-sm flex flex-col md:flex-row gap-8 items-center no-prose">
                        <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden shadow-md">
                             <SafeImage src={`https:${fields.imagenDestacada?.fields?.file?.url}`} alt={fields.titulo} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow text-left">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">Artículo Relacionado</span>
                            <h4 className="font-serif text-2xl text-navy mb-4 leading-tight">{fields.titulo}</h4>
                            <Link href={{ pathname: '/blog/[slug]', params: { slug: fields.slug || '' } }} className="text-navy font-bold text-xs uppercase tracking-widest hover:text-gold transition-all inline-flex items-center gap-2 group">
                                Continuar leyendo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                );
            }
            return null;
        }
    }
};

export default async function BlogPostPage({ params }: PageProps) {
    const { slug: rawSlug, locale } = await params;
    const slug = (rawSlug || '').replace(/^\/|\/$/g, '');

    if (!slug || slug === 'blog') notFound();

    const entry = await getEntryBySlug('blogPost', slug, false, locale);

    if (!entry) {
        notFound();
    }

    const fields = entry.fields as any;
    
    // Map to normalized structure
    const post = {
        id: entry.sys.id,
        title: fields.titulo || 'Sin título',
        excerpt: fields.metaDescripcion || '',
        content: documentToReactComponents(fields.contenido, renderOptions), // Pre-render Rich Text
        rawContent: fields.contenido, // Keep for schema
        date: fields.fechaPublicacion || entry.sys.createdAt,
        readTime: calculateReadingTime(fields.contenido),
        category: fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'Psicología',
        image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
        author: {
            name: fields.autor?.fields?.nombre || 'Dr. Joan Ramon Soto',
            role: 'Psicoanalítico',
            image: fields.author?.fields?.avatar?.fields?.file?.url ? `https:${fields.author.fields.avatar.fields.file.url}` : 'https://i.pravatar.cc/150?img=11',
        },
        slug: (fields.slug || '').replace(/^\/|\/$/g, ''),
    };

    // TOC Headings
    const headings = extractHeadings(fields.contenido);

    // Grab latest 2 posts as related for now
    const allEntries = await getEntries('blogPost', false, ['-fields.fechaPublicacion'], locale);
    
    // Find neighbors for next/prev
    const currentIndex = allEntries.findIndex((e) => e.sys.id === post.id);
    const prevEntry = currentIndex > 0 ? (allEntries[currentIndex - 1] as any) : null;
    const nextEntry = currentIndex < allEntries.length - 1 ? (allEntries[currentIndex + 1] as any) : null;

    const relatedPosts: BlogPost[] = allEntries
        .filter((e) => e.sys.id !== post.id)
        .slice(0, 2)
        .map((e) => {
            const f = e.fields as any;
            return {
                id: e.sys.id,
                title: f.titulo || 'Sin título',
                excerpt: f.metaDescripcion || '',
                content: '',
                date: f.fechaPublicacion || e.sys.createdAt,
                readTime: calculateReadingTime(f.contenido),
                category: f.categoria && f.categoria[0]?.fields?.nombre ? f.categoria[0].fields.nombre : 'Psicología',
                image: f.imagenDestacada?.fields?.file?.url ? `https:${f.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
                author: {
                    name: f.autor?.fields?.nombre || 'Dr. Joan Ramon Soto',
                    role: 'Psicoanalítico',
                    image: f.author?.fields?.avatar?.fields?.file?.url ? `https:${f.author.fields.avatar.fields.file.url}` : 'https://i.pravatar.cc/150?img=11',
                },
                slug: (f.slug || '').replace(/^\/|\/$/g, ''),
                featured: false,
            };
        });

    // Generate BlogPosting schema for SEO
    const postSchema = blogPostingSchema({
        title: post.title,
        description: post.excerpt,
        content: typeof post.rawContent === 'string' ? post.rawContent : post.excerpt, // Fallback string for schema
        author: post.author.name,
        datePublished: post.date,
        dateModified: entry.sys.updatedAt,
        image: post.image,
        url: `https://clinicadelansiedad.com/blog/${slug}`
    });

    // Social Sharing Intents
    const shareUrl = `https://clinicadelansiedad.com/blog/${slug}`;
    const shareTitle = post.title;
    const socialLinks = [
        { Icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
        { Icon: Twitter, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}` },
        { Icon: Linkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    ];

    return (
        <div className="min-h-screen bg-cream">
            <Script
                id={`blog-schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
                strategy="afterInteractive"
            />
            <Navbar />
            <main className="bg-[#FDFBF7]">
                {/* Post Header (Hero) */}
                <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                    {/* Subtle Dynamic Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[120px] mix-blend-multiply" />
                        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-[#164E63]/5 rounded-full blur-[150px] mix-blend-multiply" />
                        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#164E63 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.03 }} />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors mb-12 group uppercase tracking-widest text-xs font-bold"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Volver a la Biblioteca
                        </Link>

                        <div className="mb-10 w-full flex flex-col items-center">
                            <span className="bg-white/60 backdrop-blur-md border border-navy/10 text-navy text-xs font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm mb-8 inline-block">
                                {post.category}
                            </span>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-navy leading-[1.1] tracking-tight mb-10 max-w-5xl">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-navy/70 border-t border-navy/10 pt-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-white">
                                        <SafeImage src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-navy font-bold text-sm leading-none mb-1">{post.author.name}</p>
                                        <p className="text-[10px] uppercase tracking-[0.15em]">{post.author.role}</p>
                                    </div>
                                </div>

                                <div className="hidden md:block w-px h-8 bg-navy/10"></div>

                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium">
                                        <Calendar className="w-4 h-4 text-gold/80" />
                                        <span>{new Date(post.date).toLocaleDateString(locale === 'ca' ? 'ca-ES' : 'es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium">
                                        <Clock className="w-4 h-4 text-gold/80" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Image */}
                <section className="px-6 -mt-4 mb-24 relative z-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="aspect-[16/7] md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-glass-hover bg-white p-2 md:p-4">
                            <div className="w-full h-full rounded-[32px] overflow-hidden">
                                <SafeImage
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    fallbackSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content Section - Centered Reading Experience */}
                <section className="px-6 pb-32 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        
                        {/* Intro / Excerpt */}
                        {post.excerpt && (
                            <p className="text-2xl md:text-3xl font-serif text-navy/90 leading-relaxed mb-20 italic border-l-4 border-gold pl-8 py-2 bg-gold/5 rounded-r-3xl">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Article Body */}
                        <article className="relative">
                            {/* Table of Contents (Floating or Top) */}
                            {headings.length > 0 && (
                                <div className="mb-16 p-8 bg-gold/5 rounded-[32px] border border-gold/10">
                                    <h4 className="font-serif text-xl text-navy mb-6">En este artículo</h4>
                                    <nav className="flex flex-col gap-3">
                                        {headings.map((heading) => (
                                            <a 
                                                key={heading.id} 
                                                href={`#${heading.id}`}
                                                className={`text-navy/70 hover:text-gold transition-colors text-sm ${heading.level === 3 ? 'pl-4' : 'font-medium'}`}
                                            >
                                                {heading.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Floating Share Buttons (Destkop Only, Side) */}
                            <div className="hidden xl:block absolute -left-24 top-20 h-full">
                                <div className="sticky top-40 flex flex-col gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/30 origin-left -rotate-90 translate-y-8 -translate-x-4 mb-8">Compartir</span>
                                    {socialLinks.map(({ Icon, url }, i) => (
                                        <a 
                                            key={i} 
                                            href={url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white border border-navy/5 shadow-sm flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold/20 hover:bg-gold/5 transition-all group"
                                        >
                                            <Icon className="w-4 h-4 group-hover:scale-110" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="prose-xl max-w-none">
                                {post.content}
                            </div>

                            {/* Post Footer: Categories & Author Bio */}
                            <div className="mt-24 pt-16 border-t border-navy/10">
                                <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
                                    <div className="flex items-center gap-4">
                                        <span className="text-navy/40 font-bold text-[10px] uppercase tracking-widest">Publicado en</span>
                                        <span className="bg-gold/10 text-gold px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-gold/20">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-navy/40 font-bold text-[10px] uppercase tracking-widest">Compartir</span>
                                        <div className="flex gap-3">
                                            {socialLinks.map(({ Icon, url }, i) => (
                                                <a 
                                                    key={i} 
                                                    href={url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-full bg-white border border-navy/5 shadow-sm flex items-center justify-center text-navy/40 hover:text-gold transition-colors"
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Author Signature Card */}
                                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-glass border border-navy/5 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-gold/10 transition-colors" />
                                    
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl border-4 border-white shrink-0">
                                        <SafeImage src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-2 font-sans">{post.author.role}</p>
                                        <h4 className="font-serif text-3xl text-navy mb-4">{post.author.name}</h4>
                                        <p className="text-muted text-lg leading-relaxed italic mb-6">
                                            "Acompaño a las personas en el proceso de descifrar el mensaje oculto tras sus síntomas, transformando la ansiedad en una vía hacia el autoconocimiento."
                                        </p>
                                        <Link href="/sobre-mi" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-gold transition-all shadow-lg hover:shadow-gold/20">
                                            Leer biografía completa <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Next/Previous Article Navigation */}
                            {(prevEntry || nextEntry) && (
                                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-navy/10 pt-16">
                                    {prevEntry ? (
                                        <Link 
                                            href={{ pathname: '/blog/[slug]', params: { slug: prevEntry.fields.slug || '' } }}
                                            className="group p-8 rounded-[32px] bg-white border border-navy/5 hover:border-gold/30 transition-all text-left flex flex-col gap-2"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40 flex items-center gap-2">
                                                <ArrowLeft className="w-3.5 h-3.5" /> Anterior
                                            </span>
                                            <span className="font-serif text-lg text-navy group-hover:text-gold transition-colors line-clamp-1">{prevEntry.fields.titulo}</span>
                                        </Link>
                                    ) : <div />}
                                    
                                    {nextEntry ? (
                                        <Link 
                                            href={{ pathname: '/blog/[slug]', params: { slug: nextEntry.fields.slug || '' } }}
                                            className="group p-8 rounded-[32px] bg-white border border-navy/5 hover:border-gold/30 transition-all text-right flex flex-col items-end gap-2"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40 flex items-center gap-2">
                                                Siguiente <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                            <span className="font-serif text-lg text-navy group-hover:text-gold transition-colors line-clamp-1">{nextEntry.fields.titulo}</span>
                                        </Link>
                                    ) : <div />}
                                </div>
                            )}
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="px-6 pb-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Continuar Leyendo</h2>
                                    <div className="h-1.5 w-24 bg-gold rounded-full" />
                                </div>
                                <Link href="/blog" className="inline-flex flex-shrink-0 items-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white border border-navy/10 transition-all shadow-sm uppercase tracking-widest text-xs group">
                                    Ver biblioteca <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                {relatedPosts.map((relatedPost, index) => (
                                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA */}
                <section className="px-6 pb-32">
                    <div className="max-w-5xl mx-auto">
                       <div className="bg-navy rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                          {/* Inner glow */}
                          <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                              <div className="absolute top-[-50%] right-[-10%] w-[70%] h-[70%] bg-gold rounded-full blur-[120px]" />
                          </div>
                          
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 relative z-10 leading-tight">
                              ¿Buscas un espacio <span className="italic text-gold">para hablar?</span>
                          </h3>
                          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light relative z-10">
                              Si te sientes identificado con alguno de estos temas o necesitas apoyo especializado para gestionar tu ansiedad, estoy aquí para escucharte y ayudarte a dar sentido a este escenario.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                              <a
                                  href="https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-gold text-white px-10 py-5 rounded-full font-bold hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] text-sm uppercase tracking-[0.2em]"
                              >
                                  Pedir Cita Online
                              </a>
                              <Link
                                  href="/servicios"
                                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-sm uppercase tracking-[0.2em]"
                              >
                                  Ver Tratamientos
                              </Link>
                          </div>
                       </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
