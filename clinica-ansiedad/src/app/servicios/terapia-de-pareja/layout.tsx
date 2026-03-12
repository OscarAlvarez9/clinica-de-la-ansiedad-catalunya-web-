import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia de Pareja Barcelona | Clínica de la Ansiedad Catalunya',
  description: 'Terapia de pareja psicoanalítica para resolver conflictos, desconexión afectiva y comunicación. Sesiones presenciales en Barcelona y online para toda Catalunya.',
  path: '/servicios/terapia-de-pareja',
  keywords: [
    'terapia pareja', 'terapia de pareja Barcelona', 'psicólogo pareja',
    'conflictos pareja', 'desconexión afectiva', 'comunicación pareja',
    'terapia de pareja Catalunya', 'psicólogo pareja Maresme',
    'terapia pareja Girona', 'terapia pareja Lleida', 'terapia pareja Tarragona'
  ]
});

export default function TerapiaDeParejaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
