import { buildMetadata } from '@/lib/metadata';
import { collectionSchema } from '@/lib/schema';
import { BLOG_POSTS as FALLBACK_POSTS, BlogPost } from '@/lib/blog-data';
import { getEntries } from '@/lib/contentful';
import Script from 'next/script';
import BlogCard from '@/components/blog/BlogCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = buildMetadata({
  title: 'Blog sobre Ansiedad y Salud Mental | Clínica de la Ansiedad Catalunya',
  description: 'Artículos sobre síntomas de ansiedad, crisis de pánico, depresión y tratamiento psicológico por el Dr. Joan Ramon Soto.',
  path: '/blog',
  keywords: [
    'blog ansiedad',
    'artículos psicología',
    'psicoterapia psicoanalítica blog',
    'salud mental recursos',
    'Dr. Joan Ramon Soto blog',
    'tratamiento ansiedad artículos'
  ]
});

export const revalidate = 3600; // Revalidate every hour

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  // Fetch both posts and all available categories
  const [contentfulEntries, categoryEntries] = await Promise.all([
      getEntries('blogPost'),
      getEntries('category')
  ]);
  
  const sp = await searchParams;
  const currentCategory = sp.category as string | undefined;
  
  const mappedPosts: BlogPost[] = contentfulEntries.map((entry) => {
    const fields = entry.fields as any;
    return {
      id: entry.sys.id,
      title: fields.titulo || 'Sin título',
      excerpt: fields.metaDescripcion || 'Sin descripción',
      content: '', // Content is not rendered on the list page
      date: fields.fechaPublicacion || entry.sys.createdAt,
      readTime: '5 min de lectura', // Can be calculated from content length
      category: fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'Psicología',
      image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
      author: {
        name: fields.autor?.fields?.nombre || 'Dr. Joan Ramon Soto',
        role: 'Psicólogo Fundador',
        image: fields.autor?.fields?.avatar?.fields?.file?.url ? `https:${fields.autor.fields.avatar.fields.file.url}` : 'https://i.pravatar.cc/150?img=11',
      },
      slug: fields.slug || '',
      featured: false, // Could add a boolean field in Contentful
    };
  });

  const allPosts = mappedPosts.length > 0 ? mappedPosts : FALLBACK_POSTS;
  
  // Extract all categories explicitly from Contentful to populate the sidebar
  const contentfulCategories = categoryEntries
    .map((entry: any) => entry.fields?.nombre)
    .filter(Boolean)
    .sort();

  // If using fallbacks or no categories found, extract from posts as fallback
  const categories = contentfulCategories.length > 0 
    ? contentfulCategories 
    : Array.from(new Set(allPosts.map(post => post.category))).sort();

  // Filter posts based on query
  const filteredPosts = currentCategory
    ? allPosts.filter(post => post.category === currentCategory)
    : allPosts;

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="bg-[#FDFBF7]">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          {/* Subtle Dynamic Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-gold/10 rounded-full blur-[120px] mix-blend-multiply" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[60%] bg-[#164E63]/5 rounded-full blur-[150px] mix-blend-multiply" />
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#164E63 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.03 }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-navy/10 text-navy px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
                <BookOpen className="w-4 h-4 text-gold" />
                Biblioteca Clínica
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-navy text-center leading-[1.1] tracking-tight mb-8">
                Palabras para entender <br className="hidden md:block" />
                <span className="text-gold italic font-medium relative whitespace-nowrap">
                   tu malestar
                   <svg className="absolute w-full h-auto left-0 -bottom-2 md:-bottom-4 text-gold/30 -z-10" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M2 18C45 -2 150 -2 198 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                   </svg>
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-navy/70 text-lg md:text-xl max-w-2xl text-center leading-relaxed font-light mb-16">
                Reflexiones y recursos sobre ansiedad, pánico y psicoanálisis escritos por el Dr. Joan Ramon Soto. Un espacio para dar sentido a la clínica contemporánea.
            </p>

            {/* Decorative Divider */}
            <div className="w-px h-16 bg-gradient-to-b from-navy/20 to-transparent" />
          </div>
        </section>

        {/* Content Layout (Sidebar + Main) */}
        <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                
                {/* Sidebar (Left) */}
                <aside className="w-full lg:w-1/4 flex flex-col gap-10 sticky top-32">
                    {/* Search Bar */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Buscar artículos..."
                            className="w-full bg-white border border-navy/10 rounded-2xl px-6 py-4 pl-14 focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-sm font-sans text-navy placeholder:text-navy/40 transition-all"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/40 w-5 h-5" />
                    </div>

                    {/* Category Filter */}
                    <div className="bg-white rounded-3xl p-6 shadow-glass border border-navy/5">
                        <CategoryFilter categories={categories} />
                    </div>

                    {/* Mini Newsletter (Optional replacing the massive one) */}
                    <div className="bg-navy rounded-3xl p-6 md:p-8 text-center relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <h4 className="font-serif text-xl text-white mb-2 relative z-10">Únete a nuestra carta clínica</h4>
                        <p className="text-white/70 text-sm mb-6 relative z-10 font-sans">
                            Recibe reflexiones mensuales directamente en tu bandeja de entrada.
                        </p>
                        <form className="flex flex-col gap-3 relative z-10">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all text-sm font-sans text-center"
                            />
                            <button type="button" className="w-full bg-gold text-white px-4 py-3 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg uppercase tracking-widest text-xs">
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </aside>

                {/* Main Articles Area (Right) */}
                <div className="w-full lg:w-3/4 flex flex-col gap-16">
                    {filteredPosts.length === 0 ? (
                        <div className="bg-white rounded-[40px] p-20 text-center shadow-glass border border-navy/5">
                            <h3 className="text-2xl font-serif text-navy mb-4">No se encontraron artículos</h3>
                            <p className="text-muted">No hay artículos publicados en esta categoría por el momento.</p>
                        </div>
                    ) : (
                        <>
                            {/* Featured Post */}
                            {featuredPost && (
                                <div className="bg-white rounded-[40px] overflow-hidden shadow-glass border border-navy/5 group hover:shadow-glass-hover transition-all duration-500">
                                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                                        <SafeImage
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            fallbackSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                                        />
                                        <div className="absolute top-6 left-6 flex gap-3 z-10">
                                            <span className="bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                                Destacado
                                            </span>
                                            <span className="bg-white/90 backdrop-blur-md text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                                {featuredPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12 relative">
                                        <div className="flex items-center gap-4 text-muted font-sans text-xs mb-4 uppercase tracking-widest">
                                            <span>{new Date(featuredPost.date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="w-1 h-1 rounded-full bg-gold" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                        <Link href={`/blog/${featuredPost.slug}`}>
                                            <h2 className="text-3xl lg:text-4xl font-serif text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                                                {featuredPost.title}
                                            </h2>
                                        </Link>
                                        <p className="text-muted text-lg mb-8 leading-relaxed line-clamp-3">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-6 border-t border-navy/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold/20">
                                                    <SafeImage src={featuredPost.author.image} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-navy font-bold text-sm leading-none mb-1">{featuredPost.author.name}</p>
                                                    <p className="text-muted text-[10px] uppercase tracking-widest">{featuredPost.author.role}</p>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/blog/${featuredPost.slug}`}
                                                className="w-12 h-12 flex items-center justify-center bg-navy/5 text-navy rounded-full group-hover:bg-gold group-hover:text-white transition-all duration-300"
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Posts Grid */}
                            {otherPosts.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <h2 className="text-3xl font-serif text-navy">Más Publicaciones</h2>
                                        <div className="h-px flex-grow bg-navy/10" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {otherPosts.map((post, index) => (
                                            <BlogCard key={post.id} post={post} index={index} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
