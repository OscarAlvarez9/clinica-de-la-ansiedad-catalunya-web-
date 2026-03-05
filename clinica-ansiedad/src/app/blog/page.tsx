import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Blog de Psicoanálisis y Ansiedad | Clínica de la Ansiedad',
  description: 'Artículos, reflexiones y recursos sobre el tratamiento de la ansiedad, psicoanálisis y salud mental por Joan Ramon Soto.',
  path: '/blog'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Nuestro Blog</h1>
    </div>
  );
}
