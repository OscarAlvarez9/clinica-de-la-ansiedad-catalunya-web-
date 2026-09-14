import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Terapia de pareja en Canet de Mar (Maresme) | Clínica Ansiedad',
    description: 'Terapia de pareja psicoanalítica para conflictos y desconexión afectiva. Sesiones presenciales en Canet de Mar (Maresme) y terapia online.',
    path: '/servicios/terapia-de-pareja',
    keywords: [
      'terapia pareja', 'terapia de pareja Barcelona', 'psicólogo pareja',
      'conflictos pareja', 'desconexión afectiva', 'comunicación pareja',
      'terapia de pareja Catalunya', 'psicólogo pareja Maresme',
      'terapia pareja Girona', 'terapia pareja Lleida', 'terapia pareja Tarragona',
      'terapia de pareja Canet de Mar', 'terapia de pareja Maresme'
    ],
    lang: locale,
  });
}

export default function TerapiaDeParejaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
