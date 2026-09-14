import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Crisis de Pánico en Canet de Mar (Maresme) | Psicoanalista',
    description: 'Reconoce los síntomas de crisis de ansiedad y ataques de pánico. Tratamiento psicoanalítico presencial en Canet de Mar (Maresme) y online para toda Catalunya.',
    path: '/crisis-de-panico',
    keywords: [
      'crisis de ansiedad sintomas', 'ataques de panico sintomas', 'crisis de pánico',
      'ataque de pánico psicólogo', 'palpitaciones por ansiedad', 'hiperventilacion',
      'como se cura la ansiedad', 'psicólogo crisis de pánico', 'terapia pánico psicoanalítica',
      'ataques de pánico tratamiento Barcelona', 'crisis de pánico psicólogo Catalunya',
      'pánico tratamiento Maresme', 'ataques de pánico Girona'
    ],
    lang: locale,
  });
}

export default function CrisisDePanicoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
