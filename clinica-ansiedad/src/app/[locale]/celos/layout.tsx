import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Celos Patológicos en Canet de Mar (Maresme) | Psicoanalista',
    description: 'Tratamiento psicoanalítico de los celos patológicos en Canet de Mar (Maresme), presencial y online. Los celos tienen un origen profundo —y tienen solución.',
    path: '/celos',
    keywords: [
      'celos patológicos', 'tratamiento celos', 'celos en pareja', 'psicólogo celos',
      'celos ansiedad', 'terapia celos Barcelona', 'celos retroactivos',
      'celos enfermizos tratamiento', 'celos patológicos tratamiento Barcelona',
      'psicólogo celos Catalunya', 'terapia celos Maresme'
    ],
    lang: locale,
  });
}

export default function CelosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
