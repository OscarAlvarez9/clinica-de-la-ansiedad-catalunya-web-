import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Tratamiento de Crisis de Pánico | Clínica de Catalunya',
  description: 'Ayuda especializada para las crisis de pánico y angustia extrema. Detén el ciclo del miedo a través de un abordaje de raíz.',
  path: '/crisis-de-panico'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Crisis de Pánico</h1>
    </div>
  );
}
