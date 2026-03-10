import { buildMetadata } from '@/lib/metadata';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';

export const metadata = buildMetadata({
  title: 'Terapia Individual Psicoanalítica | Clínica de la Ansiedad',
  description: 'Tratamiento individualizado para superar la ansiedad y el malestar emocional desde la raíz con psicoterapia psicoanalítica.',
  path: '/terapia-individual'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Terapia Individual</h1>
      <StickyBookingButton />
    </div>
  );
}
