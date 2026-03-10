import { buildMetadata } from '@/lib/metadata';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';

export const metadata = buildMetadata({
  title: 'Terapia de Pareja | Clínica de la Ansiedad Catalunya',
  description: 'Abordaje terapéutico para resolver conflictos de pareja, mejorar la comunicación y superar crisis relacionales.',
  path: '/terapia-pareja'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Terapia de Pareja</h1>
      <StickyBookingButton />
    </div>
  );
}
