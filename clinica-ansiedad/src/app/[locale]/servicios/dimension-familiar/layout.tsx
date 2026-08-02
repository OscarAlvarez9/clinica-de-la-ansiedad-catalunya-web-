import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Terapia Familiar Ansiedad | Clínica de la Ansiedad Catalunya',
    description: 'Terapia familiar psicoanalítica para ansiedad y conflictos intergeneracionales. Intervención sistémica especializada. Sesiones presenciales en Barcelona y online.',
    path: '/servicios/dimension-familiar',
    keywords: [
      'terapia familiar', 'conflictos intergeneracionales', 'intervención sistémica',
      'ansiedad familiar', 'como ayudar a alguien con ansiedad',
      'terapia familiar Barcelona', 'terapia familiar Catalunya',
      'psicólogo familiar Maresme', 'terapia familiar Girona'
    ],
    lang: locale,
  });
}

export default function DimensionFamiliarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
