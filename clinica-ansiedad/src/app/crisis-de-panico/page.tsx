import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Ataques de Pánico: Síntomas, Crisis de Ansiedad y Tratamiento | Clínica de la Ansiedad',
  description: 'Reconoce los síntomas de los ataques de pánico y las crisis de ansiedad. Palpitaciones, hiperventilación, miedo intenso. Tratamiento psicoanalítico para detener el ciclo del pánico desde la raíz.',
  path: '/crisis-de-panico'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Crisis de Pánico</h1>
    </div>
  );
}
