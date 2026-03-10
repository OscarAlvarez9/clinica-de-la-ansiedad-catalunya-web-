import { buildMetadata } from '@/lib/metadata';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';

export const metadata = buildMetadata({
  title: 'Tratamiento Depresión Barcelona | Psicólogo Especialista',
  description: 'Tratamiento depresión en Barcelona. Psicoterapia psicoanalítica para superar la tristeza y la angustia. Dr. Joan Ramon Soto, especialista en salud mental.',
  path: '/depresion',
  keywords: [
    'tratamiento depresión Barcelona',
    'psicólogo depresión',
    'depresión psicoanálisis',
    'terapia depresión psicoanalítica',
    'superar la depresión',
    'psicólogo depresión Catalunya',
    'tratamiento depresión online'
  ]
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Tratamiento de la Depresión</h1>
      <StickyBookingButton />
    </div>
  );
}
