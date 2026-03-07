import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from '@/lib/blog-data';
import { buildMetadata } from '@/lib/metadata';
import { blogPostingSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';
import Script from 'next/script';
import BlogCard from '@/components/blog/BlogCard';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return buildMetadata({
        title: 'Post no encontrado',
        description: 'El artículo que buscas no existe o ha sido movido.',
        path: '/blog'
    });

    return buildMetadata({
        title: `${post.title} | Blog Clínica de la Ansiedad`,
        description: post.excerpt,
        path: `/blog/${slug}`,
        keywords: [
            post.category,
            'psicoanálisis',
            'ansiedad',
            'salud mental',
            'psicoterapia',
            post.title.toLowerCase().split(' ').slice(0, 3).join(' ')
        ],
        image: post.image,
        imageAlt: post.title,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.date
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.id);

    // Generate BlogPosting schema for SEO
    const postSchema = blogPostingSchema({
        title: post.title,
        description: post.excerpt,
        content: post.content,
        author: post.author.name,
        datePublished: post.date,
        dateModified: post.date,
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
            <main>
                {/* Post Header */}
                <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gold rounded-full blur-[100px]" />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-muted hover:text-navy transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Volver al Blog
                        </Link>

                        <div className="mb-10">
                            <span className="bg-navy/5 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-navy/10 mb-6 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif text-navy leading-tight mb-8">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-muted border-b border-navy/10 pb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <SafeImage src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-navy font-bold leading-none">{post.author.name}</p>
                                        <p className="text-[10px] uppercase tracking-widest mt-1">{post.author.role}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 ml-auto md:ml-0">
                                    <div className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium">
                                        <Calendar className="w-4 h-4 text-gold" />
                                        <span>{new Date(post.date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium">
                                        <Clock className="w-4 h-4 text-gold" />
                                        <span>{post.readTime} de lectura</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Image */}
                <section className="px-6 -mt-10 mb-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                            <SafeImage
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                fallbackSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                            />
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="px-6 mb-32 relative">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                        {/* Article Meta / Share (Side) */}
                        <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40 mb-6">Compartir artículo</h4>
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { icon: Facebook, label: 'Facebook' },
                                            { icon: Twitter, label: 'Twitter' },
                                            { icon: Linkedin, label: 'LinkedIn' }
                                        ].map((social, i) => (
                                            <button key={i} className="flex items-center gap-4 text-navy/60 hover:text-gold transition-colors duration-300 group">
                                                <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5">
                                                    <social.icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-bold uppercase tracking-widest">{social.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-navy/10">
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40 mb-6">Sobre el autor</h4>
                                    <p className="text-muted text-sm leading-relaxed mb-6 italic">
                                        "Mi práctica clínica se centra en la singularidad de cada paciente, buscando transformar el síntoma en una herramienta de crecimiento."
                                    </p>
                                    <Link href="/sobre-mi" className="text-gold font-bold text-xs uppercase tracking-widest border-b border-gold hover:border-gold-light transition-all">
                                        Ver biografía completa
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Article Body */}
                        <article className="lg:w-2/3">
                            <div
                                className="prose prose-lg prose-navy max-w-none 
              prose-headings:font-serif prose-headings:text-navy prose-headings:font-normal
              prose-p:text-muted prose-p:leading-relaxed prose-p:mb-8
              prose-strong:text-navy prose-strong:font-bold
              prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-navy
              prose-li:text-muted
              prose-img:rounded-3xl prose-img:shadow-lg"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-20 pt-12 border-t border-navy/10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-muted font-sans text-sm italic">Categoría:</span>
                                    <span className="bg-cream border border-navy/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold uppercase">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 lg:hidden">
                                    <Share2 className="w-5 h-5 text-muted" />
                                    <div className="flex gap-4">
                                        <Facebook className="w-5 h-5 text-muted hover:text-gold cursor-pointer" />
                                        <Twitter className="w-5 h-5 text-muted hover:text-gold cursor-pointer" />
                                        <Linkedin className="w-5 h-5 text-muted hover:text-gold cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="px-6 pb-40 bg-navy/5 pt-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between mb-16">
                                <h2 className="text-3xl md:text-5xl font-serif text-navy">Lecturas Recomendadas</h2>
                                <Link href="/blog" className="text-gold font-bold uppercase tracking-widest text-sm hover:text-gold-light transition-colors hidden md:block">
                                    Ver todo el blog
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {relatedPosts.map((relatedPost, index) => (
                                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="bg-white py-24 px-6">
                    <div className="max-w-4xl mx-auto bg-cream rounded-[40px] p-12 md:p-20 text-center border border-navy/5 shadow-glass relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <h3 className="text-3xl md:text-5xl font-serif text-navy mb-8">
                            ¿Buscas un espacio para hablar?
                        </h3>
                        <p className="text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                            Si te sientes identificado con alguno de estos temas o necesitas apoyo especializado para gestionar tu ansiedad, estoy aquí para escucharte.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/#contacto"
                                className="bg-gold text-white px-10 py-5 rounded-full font-bold hover:bg-gold-light transition-all shadow-lg text-lg uppercase tracking-widest"
                            >
                                Pedir cita ahora
                            </Link>
                            <Link
                                href="/servicios"
                                className="bg-navy text-white px-10 py-5 rounded-full font-bold hover:bg-navy-light transition-all shadow-lg text-lg uppercase tracking-widest"
                            >
                                Nuestros servicios
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
