import { getEntries, getEntryBySlug } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { buildMetadata } from '@/lib/metadata';
import { blogPostingSchema } from '@/lib/schema';
import Script from 'next/script';
import BlogCard from '@/components/blog/BlogCard';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogPost } from '@/lib/blog-data';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
    const entries = await getEntries('blogPost', false, ['-fields.fechaPublicacion']);
    return entries.map((entry: any) => ({
        slug: entry.fields.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const entry = await getEntryBySlug('blogPost', slug);

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
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const url = node.data.target.fields?.file?.url;
            const alt = node.data.target.fields?.title;
            if (url) {
                return (
                    <div className="my-10 w-full rounded-2xl overflow-hidden shadow-glass">
                        <img src={`https:${url}`} alt={alt || 'Blog Image'} className="w-full h-auto object-cover" />
                    </div>
                );
            }
            return null;
        },
    }
};

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const entry = await getEntryBySlug('blogPost', slug);

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
        readTime: '5 min de lectura',
        category: fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'Psicología',
        image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
        author: {
            name: fields.autor?.fields?.nombre || 'Dr. Joan Ramon Soto',
            role: 'Psicólogo Fundador',
            image: fields.autor?.fields?.avatar?.fields?.file?.url ? `https:${fields.autor.fields.avatar.fields.file.url}` : 'https://i.pravatar.cc/150?img=11',
        },
        slug: fields.slug || '',
    };

    // Grab latest 2 posts as related for now
    const allEntries = await getEntries('blogPost', false, ['-fields.fechaPublicacion']);
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
                readTime: '5 min de lectura',
                category: f.categoria && f.categoria[0]?.fields?.nombre ? f.categoria[0].fields.nombre : 'Psicología',
                image: f.imagenDestacada?.fields?.file?.url ? `https:${f.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
                author: {
                    name: f.autor?.fields?.nombre || 'Dr. Joan Ramon Soto',
                    role: 'Psicólogo Fundador',
                    image: f.autor?.fields?.avatar?.fields?.file?.url ? `https:${f.autor.fields.avatar.fields.file.url}` : 'https://i.pravatar.cc/150?img=11',
                },
                slug: f.slug || '',
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
                                        <span>{new Date(post.date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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
                    <div className="max-w-3xl mx-auto">
                        
                        {/* Intro / Excerpt */}
                        {post.excerpt && (
                            <p className="text-2xl md:text-3xl font-serif text-navy/90 leading-relaxed mb-16 italic border-l-4 border-gold pl-8 py-2 bg-gold/5 rounded-r-3xl">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Article Body */}
                        <article className="relative">
                            {/* Floating Share Buttons (Destkop Only, Side) */}
                            <div className="hidden xl:block absolute -left-24 top-20 h-full">
                                <div className="sticky top-40 flex flex-col gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/30 origin-left -rotate-90 translate-y-8 -translate-x-4 mb-8">Compartir</span>
                                    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                        <button key={i} className="w-10 h-10 rounded-full bg-white border border-navy/5 shadow-sm flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold/20 hover:bg-gold/5 transition-all group">
                                            <Icon className="w-4 h-4 group-hover:scale-110" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div
                              className="prose prose-xl prose-navy max-w-none 
                              prose-headings:font-serif prose-headings:text-navy prose-headings:font-normal prose-headings:mt-20 prose-headings:mb-8
                              prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:tracking-tight
                              prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-navy/80
                              prose-p:text-navy/80 prose-p:leading-[2] prose-p:mb-10 prose-p:font-light
                              prose-a:text-gold prose-a:font-medium hover:prose-a:text-navy prose-a:transition-colors prose-a:no-underline prose-a:border-b prose-a:border-gold/30 hover:prose-a:border-navy
                              prose-strong:text-navy prose-strong:font-bold
                              prose-blockquote:border-l-0 prose-blockquote:bg-navy/5 prose-blockquote:p-12 prose-blockquote:rounded-[32px] prose-blockquote:italic prose-blockquote:text-navy/90 prose-blockquote:text-2xl prose-blockquote:font-serif prose-blockquote:my-20 relative
                              prose-li:text-navy/80 prose-li:font-light prose-li:mb-4
                              prose-ul:list-none prose-ul:pl-0
                              prose-img:rounded-[40px] prose-img:shadow-2xl prose-img:my-20"
                            >
                                {/* Custom CSS for bullet points */}
                                <style dangerouslySetInnerHTML={{__html: `
                                  .prose-navy ul li { position: relative; padding-left: 2rem; }
                                  .prose-navy ul li::before { content: ""; position: absolute; left: 0; top: 0.85rem; width: 0.5rem; height: 0.5rem; border-radius: 50%; background-color: #D4AF37; }
                                `}} />
                                
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
                                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                                <button key={i} className="w-8 h-8 rounded-full bg-white border border-navy/5 shadow-sm flex items-center justify-center text-navy/40 hover:text-gold transition-colors">
                                                    <Icon className="w-3.5 h-3.5" />
                                                </button>
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
                              <Link
                                  href="https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp"
                                  className="bg-gold text-white px-10 py-5 rounded-full font-bold hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] text-sm uppercase tracking-[0.2em]"
                              >
                                  Pedir Cita Online
                              </Link>
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
