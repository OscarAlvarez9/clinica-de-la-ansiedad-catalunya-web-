import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Tratamiento de los Celos | Clínica de la Ansiedad Catalunya',
  description: 'Tratamiento psicoanalítico de celos patológicos en Barcelona y online. Cuando los celos se descontrolan destruyen los vínculos. Tienen origen profundo y solución.',
  path: '/celos',
  keywords: [
    'celos patológicos', 'tratamiento celos', 'celos en pareja', 'psicólogo celos',
    'celos ansiedad', 'terapia celos Barcelona', 'celos retroactivos',
    'celos enfermizos tratamiento', 'celos patológicos tratamiento Barcelona',
    'psicólogo celos Catalunya', 'terapia celos Maresme'
  ]
});

export default function CelosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
