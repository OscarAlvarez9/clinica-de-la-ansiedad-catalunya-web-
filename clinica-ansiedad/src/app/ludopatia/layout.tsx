import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Tratamiento de la Ludopatía | Clínica de la Ansiedad Catalunya',
  description: 'Tratamiento psicoanalítico de ludopatía y adicción al juego en Barcelona y online. Abordamos el origen inconsciente de la adicción, no solo el síntoma visible.',
  path: '/ludopatia',
  keywords: [
    'ludopatía tratamiento', 'adicción al juego', 'psicólogo ludopatía',
    'terapia ludopatía Barcelona', 'adicción juego online', 'juego patológico',
    'tratamiento adicciones psicoanalítico', 'ludopatía tratamiento Barcelona',
    'psicólogo ludopatía Catalunya', 'adicción juego Maresme'
  ]
});

export default function LudopatiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
