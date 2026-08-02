import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Terapia Online Ansiedad | 30 Años de Experiencia Clínica',
    description: 'Terapia online especializada en ansiedad desde 1993. Misma eficacia que la terapia presencial. Tratamiento de ansiedad generalizada, crisis de pánico y depresión.',
    path: '/terapia-online',
    keywords: [
      'terapia online ansiedad', 'terapia de ansiedad online', 'psicoanalista online',
      'terapia ansiedad videollamada', 'ansiedad generalizada', 'crisis de pánico',
      'depresión online', 'psicoanalista online España', 'terapia online Catalunya',
      'psicoanalista online Barcelona', 'terapia online Girona', 'terapia online Lleida',
      'terapia online Tarragona', 'terapia online Maresme'
    ],
    lang: locale,
  });
}

export default function TerapiaOnlineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
