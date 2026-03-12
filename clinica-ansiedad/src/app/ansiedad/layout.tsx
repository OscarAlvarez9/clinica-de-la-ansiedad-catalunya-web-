import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Síntomas de Ansiedad y Causas | Clínica Ansiedad Catalunya',
  description: 'Descubre qué es la ansiedad, sus síntomas físicos y sus causas profundas. Tratamiento psicoanalítico con el Dr. Joan Ramon Soto. Consulta en Barcelona y online.',
  path: '/ansiedad',
  keywords: [
    'sintomas de ansiedad', 'ansiedad sintomas', 'que es ansiedad',
    'causas de la ansiedad', 'ansiedad generalizada', 'crisis de ansiedad sintomas',
    'palpitaciones por ansiedad', 'hiperventilacion', 'psicólogo ansiedad',
    'tratamiento ansiedad Barcelona', 'como se cura la ansiedad',
    'psicólogo ansiedad Barcelona', 'clínica ansiedad Barcelona',
    'ansiedad generalizada tratamiento Catalunya', 'psicólogo ansiedad Maresme',
    'terapia ansiedad Girona', 'terapia ansiedad Lleida', 'terapia ansiedad Tarragona'
  ]
});

export default function AnsiedadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
