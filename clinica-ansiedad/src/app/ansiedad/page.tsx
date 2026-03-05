import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Tratamiento de la Ansiedad | Dr. Joan Ramon Soto',
  description: 'Especialistas en el tratamiento profundo de la ansiedad. Comprende y resuelve las causas reales de tu angustia.',
  path: '/ansiedad'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Tratamiento de la Ansiedad</h1>
    </div>
  );
}
