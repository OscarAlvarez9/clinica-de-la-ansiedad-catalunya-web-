import { buildMetadata } from '@/lib/metadata';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';

export const metadata = buildMetadata({
  title: 'Ataques de Pánico: Síntomas y Tratamiento | Clínica de la Ansiedad',
  description: 'Reconoce los síntomas de los ataques de pánico y las crisis de ansiedad. Tratamiento psicoanalítico para detener el ciclo del pánico desde la raíz en Barcelona y online.',
  path: '/crisis-de-panico',
  keywords: [
    'crisis de pánico Barcelona',
    'tratamiento crisis pánico',
    'ataque de pánico psicólogo',
    'síntomas ataque de pánico',
    'cómo superar crisis de pánico',
    'terapia pánico psicoanalítica',
    'psicólogo crisis de pánico'
  ]
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Crisis de Pánico</h1>
      <StickyBookingButton />
    </div>
  );
}
