import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Crisis de Pánico Barcelona | Tratamiento Especializado',
  description: 'Tratamiento crisis de pánico en Barcelona. Psicoterapia psicoanalítica para ataques de pánico. Dr. Joan Ramon Soto, Clínica de la Ansiedad Catalunya.',
  path: '/crisis-de-panico',
  keywords: [
    'crisis de pánico Barcelona',
    'tratamiento crisis pánico',
    'ataque de pánico psicólogo',
    'psicólogo crisis de pánico',
    'cómo superar crisis de pánico',
    'terapia pánico psicoanalítica',
    'síntomas crisis de pánico'
  ]
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Crisis de Pánico</h1>
    </div>
  );
}
