import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Psicoanálisis Directo: Cómo Se Cura la Ansiedad desde la Raíz | Clínica de la Ansiedad',
  description: 'Descubre cómo se cura la ansiedad con el Psicoanálisis Directo. Un enfoque terapéutico que trata las causas de la ansiedad, no solo los síntomas. Más de 30 años de experiencia clínica en Barcelona.',
  path: '/enfoque'
});

export default function EnfoqueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
