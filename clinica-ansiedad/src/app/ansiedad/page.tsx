import { buildMetadata } from '@/lib/metadata';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';

export const metadata = buildMetadata({
  title: 'Qué Es la Ansiedad: Síntomas, Causas y Tratamiento | Clínica de la Ansiedad',
  description: 'Descubre qué es la ansiedad, sus síntomas y causas. Psicoterapia psicoanalítica con el Dr. Joan Ramon Soto en Barcelona and online.',
  path: '/ansiedad',
  keywords: [
    'tratamiento ansiedad Barcelona',
    'psicólogo ansiedad',
    'síntomas de ansiedad',
    'causas de la ansiedad',
    'ansiedad generalizada tratamiento',
    'terapia ansiedad psicoanalítica',
    'psicólogo ansiedad Maresme',
    'cómo superar la ansiedad',
    'tratamiento ansiedad online'
  ]
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Tratamiento de la Ansiedad</h1>
      <StickyBookingButton />
    </div>
  );
}
