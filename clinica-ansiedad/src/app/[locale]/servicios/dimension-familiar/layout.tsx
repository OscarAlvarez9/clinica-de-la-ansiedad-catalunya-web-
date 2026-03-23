import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia Familiar Ansiedad | Clínica de la Ansiedad Catalunya',
  description: 'Terapia familiar psicoanalítica para ansiedad y conflictos intergeneracionales. Intervención sistémica especializada. Sesiones presenciales en Barcelona y online.',
  path: '/servicios/dimension-familiar',
  keywords: [
    'terapia familiar', 'conflictos intergeneracionales', 'intervención sistémica',
    'ansiedad familiar', 'como ayudar a alguien con ansiedad',
    'terapia familiar Barcelona', 'terapia familiar Catalunya',
    'psicólogo familiar Maresme', 'terapia familiar Girona'
  ]
});

export default function DimensionFamiliarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
