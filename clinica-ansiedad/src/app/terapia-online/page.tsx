import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia Online Especializada | Clínica de la Ansiedad',
  description: 'Psicoterapia psicoanalítica en línea. La misma eficacia clínica que la terapia presencial, accesible desde toda España.',
  path: '/terapia-online'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Terapia Online</h1>
    </div>
  );
}
