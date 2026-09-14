import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Ludopatía en Canet de Mar (Maresme) | Clínica de la Ansiedad',
    description: 'Tratamiento psicoanalítico de la ludopatía y la adicción al juego en Canet de Mar (Maresme), presencial y online. Abordamos el origen, no solo el síntoma.',
    path: '/ludopatia',
    keywords: [
      'ludopatía tratamiento', 'adicción al juego', 'psicólogo ludopatía',
      'terapia ludopatía Barcelona', 'adicción juego online', 'juego patológico',
      'tratamiento adicciones psicoanalítico', 'ludopatía tratamiento Barcelona',
      'psicólogo ludopatía Catalunya', 'adicción juego Maresme'
    ],
    lang: locale,
  });
}

export default function LudopatiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
