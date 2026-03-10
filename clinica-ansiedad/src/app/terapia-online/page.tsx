import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia Online para la Ansiedad | 30 Años de Experiencia | Clínica de la Ansiedad',
  description: 'Terapia online especializada en ansiedad desde 1993. La misma eficacia que la terapia presencial, accesible desde toda España. Tratamiento de ansiedad generalizada, crisis de pánico y depresión por videollamada.',
  path: '/terapia-online'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Terapia Online</h1>
    </div>
  );
}
