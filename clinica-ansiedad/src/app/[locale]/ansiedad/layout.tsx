import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    // Modificador local delante: la consulta está en Canet de Mar (Maresme),
    // no en la ciudad de Barcelona. Barcelona queda solo como provincia y
    // como origen de parte de los pacientes.
    // OJO: Joan Ramon es PSICOANALISTA, no psicólogo (título protegido) — ni el
    // title ni el texto visible pueden autodenominarse psicólogo; ese término
    // solo vive en el slug /psicologo-maresme y en las keywords.
    title: 'Ansiedad en Canet de Mar (Maresme) | Clínica de la Ansiedad',
    description: 'Tratamiento de la ansiedad de raíz con un psicoanalista especialista. Consulta presencial en Canet de Mar (Maresme) y terapia online para toda Catalunya.',
    path: '/ansiedad',
    keywords: [
      'sintomas de ansiedad', 'ansiedad sintomas', 'que es ansiedad',
      'causas de la ansiedad', 'ansiedad generalizada', 'crisis de ansiedad sintomas',
      'palpitaciones por ansiedad', 'hiperventilacion', 'psicólogo ansiedad',
      'tratamiento ansiedad Barcelona', 'como se cura la ansiedad',
      'psicólogo ansiedad Barcelona', 'clínica ansiedad Barcelona',
      'ansiedad generalizada tratamiento Catalunya', 'psicólogo ansiedad Maresme',
      'terapia ansiedad Girona', 'terapia ansiedad Lleida', 'terapia ansiedad Tarragona'
    ],
    lang: locale,
  });
}

export default function AnsiedadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
