import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia Individual Ansiedad | Consulta Psicológica Barcelona',
  description: 'Terapia individual psicoanalítica para ansiedad, depresión, hipocondría y TOC. Primera visita clínica profunda y personalizada. Psicólogo en Barcelona y online.',
  path: '/servicios/terapia-individual',
  keywords: [
    'terapia individual', 'consulta psicologica', 'primera visita',
    'síntomas de ansiedad', 'como se cura la ansiedad', 'psicólogo ansiedad',
    'terapia ansiedad', 'depresión', 'hipocondria', 'TOC',
    'terapia individual Barcelona', 'psicólogo Barcelona', 'consulta psicológica Catalunya',
    'psicólogo Maresme', 'terapia individual Canet de Mar'
  ]
});

export default function TerapiaIndividualLayout({ children }: { children: React.ReactNode }) {
  return children;
}
