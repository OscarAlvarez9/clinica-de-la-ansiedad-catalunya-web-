import { buildMetadata } from '@/lib/metadata';
import { BLOG_POSTS } from '@/lib/blog-data';
import BlogCard from '@/components/blog/BlogCard';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = buildMetadata({
  title: 'Blog sobre Ansiedad, Depresión y Salud Mental | Clínica de la Ansiedad Catalunya',
  description: 'Artículos sobre síntomas de ansiedad, causas de la ansiedad, crisis de pánico, depresión y tratamiento psicológico. Recursos y reflexiones por el Dr. Joan Ramon Soto.',
  path: '/blog'
});

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter(post => post.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-navy/5 text-navy px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <BookOpen className="w-4 h-4" /> Artículos y Reflexiones
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight">
                Diálogo sobre la <br className="hidden md:block" />
                <span className="text-gold italic">Salud Mental</span>
              </h1>
              <p className="text-muted text-xl max-w-2xl leading-relaxed">
                Explora nuestra biblioteca de recursos sobre ansiedad, psicoanálisis y bienestar emocional.
                Palabras que buscan dar sentido al malestar contemporáneo.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-6 mb-24">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-[40px] overflow-hidden shadow-glass border border-navy/5 flex flex-col lg:flex-row items-stretch min-h-[500px]">
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                  <SafeImage
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    fallbackSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-gold text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      Destacado
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                  <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                    {featuredPost.category}
                  </span>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-3xl lg:text-5xl font-serif text-navy mb-6 hover:text-gold transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-muted text-lg mb-10 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                        <SafeImage src={featuredPost.author.image} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-navy font-bold leading-none mb-1">{featuredPost.author.name}</p>
                        <p className="text-muted text-xs uppercase tracking-tighter">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="bg-navy text-white p-4 rounded-full hover:bg-gold transition-all shadow-lg hover:shadow-xl"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Latest Posts Grid */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Últimas Publicaciones</h2>
                <div className="h-1.5 w-24 bg-gold rounded-full" />
              </div>
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full bg-white border border-navy/10 rounded-full px-6 py-4 pl-14 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm font-sans"
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {otherPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {/* Newsletter / CTA */}
            <div className="mt-32 bg-navy rounded-[40px] p-8 lg:p-20 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold rounded-full blur-[80px]" />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 relative z-10">
                ¿Quieres recibir nuestras reflexiones?
              </h3>
              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto relative z-10 font-sans">
                Suscríbete para recibir mensualmente artículos sobre psicoanálisis y herramientas para gestionar la ansiedad.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                <input
                  type="email"
                  placeholder="Tu email principal"
                  className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all font-sans"
                />
                <button className="bg-gold text-white px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-all shadow-lg whitespace-nowrap uppercase tracking-widest text-sm">
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
