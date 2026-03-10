import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia Individual para Ansiedad y Depresión | Psicólogo en Barcelona y Online',
  description: 'Psicoterapia individual para tratar síntomas de ansiedad, depresión, TOC e hipocondría. Psicólogo especializado en ansiedad con consulta en Barcelona y terapia online.',
  path: '/terapia-individual'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Terapia Individual</h1>
    </div>
  );
}
