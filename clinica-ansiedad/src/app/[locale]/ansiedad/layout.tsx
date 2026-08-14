import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    // Barcelona delante: la página ya asoma en pos 8-11 para "ansiedad barcelona",
    // "psicólogo ansiedad barcelona"... — el title es la señal que faltaba.
    // OJO: Joan Ramon es PSICOANALISTA, no psicólogo (título protegido) — el
    // title no puede autodenominarse psicólogo; a esa búsqueda se le responde
    // en el H2 de la sección Barcelona ("¿Buscas psicólogo...?").
    title: 'Tratamiento de la Ansiedad en Barcelona | Psicoanalista',
    description: '¿Buscas psicólogo para la ansiedad en Barcelona? Somos otra cosa: psicoanalista especialista en ansiedad. Tratamiento de raíz, presencial (Barcelona · Maresme) y online.',
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
