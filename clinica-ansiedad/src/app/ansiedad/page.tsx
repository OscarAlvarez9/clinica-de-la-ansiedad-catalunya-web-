import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Qué Es la Ansiedad: Síntomas, Causas y Tratamiento | Clínica de la Ansiedad',
  description: 'Descubre qué es la ansiedad, sus síntomas más comunes (crisis, palpitaciones, hiperventilación) y las causas que la provocan. Tratamiento especializado con más de 30 años de experiencia en Barcelona y online.',
  path: '/ansiedad'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Tratamiento de la Ansiedad</h1>
    </div>
  );
}
