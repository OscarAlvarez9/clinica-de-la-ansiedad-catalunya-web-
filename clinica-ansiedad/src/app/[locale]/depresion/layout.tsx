import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Depresión en Canet de Mar (Maresme) | Clínica de la Ansiedad',
    description: 'Tratamiento de la depresión y la ansiedad desde su origen inconsciente. Psicoanalista en Canet de Mar (Maresme), presencial y online.',
    path: '/depresion',
    keywords: [
      'depresion ansiedad', 'ansiedad y depresion', 'tratamiento depresión Barcelona',
      'psicólogo depresión', 'terapia depresión psicoanalítica', 'superar la depresión',
      'síntomas depresión', 'psicólogo depresión Catalunya',
      'psicólogo depresión Barcelona', 'depresión y ansiedad tratamiento',
      'terapia depresión Maresme', 'psicólogo depresión Girona',
      'depresión tratamiento Lleida', 'depresión tratamiento Tarragona'
    ],
    lang: locale,
  });
}

export default function DepresionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
