import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Tratamiento de los Celos | Clínica de la Ansiedad Catalunya',
    description: 'Tratamiento psicoanalítico de celos patológicos en Barcelona y online. Cuando los celos se descontrolan destruyen los vínculos. Tienen origen profundo y solución.',
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
