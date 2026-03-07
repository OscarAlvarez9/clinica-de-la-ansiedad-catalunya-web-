import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Tratamiento Ansiedad Barcelona | Psicólogo Especialista',
  description: 'Tratamiento ansiedad generalizada y angustia en Barcelona. Psicoterapia psicoanalítica para resolver las causas profundas. Dr. Joan Ramon Soto, 31 años de experiencia.',
  path: '/ansiedad',
  keywords: [
    'tratamiento ansiedad Barcelona',
    'psicólogo ansiedad',
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
    </div>
  );
}
