import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Depresión y Ansiedad: Tratamiento | Clínica Ansiedad Catalunya',
  description: 'Tratamiento especializado de depresión y ansiedad desde el origen inconsciente. Psicoterapia psicoanalítica en Barcelona y online. Supera la tristeza profunda.',
  path: '/depresion',
  keywords: [
    'depresion ansiedad', 'ansiedad y depresion', 'tratamiento depresión Barcelona',
    'psicólogo depresión', 'terapia depresión psicoanalítica', 'superar la depresión',
    'síntomas depresión', 'psicólogo depresión Catalunya',
    'psicólogo depresión Barcelona', 'depresión y ansiedad tratamiento',
    'terapia depresión Maresme', 'psicólogo depresión Girona',
    'depresión tratamiento Lleida', 'depresión tratamiento Tarragona'
  ]
});

export default function DepresionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
