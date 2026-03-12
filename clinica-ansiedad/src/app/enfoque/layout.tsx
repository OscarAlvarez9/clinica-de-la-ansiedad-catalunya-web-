import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Cómo Se Cura la Ansiedad | Psicoanálisis Directo Barcelona',
  description: 'Psicoanálisis directo para curar la ansiedad desde la raíz. 4 fases clínicas con más de 30 años de experiencia clínica en Barcelona, Maresme y online en Catalunya.',
  path: '/enfoque',
  keywords: ['como se cura la ansiedad', 'terapia ansiedad', 'psicoanálisis directo', 'causas de la ansiedad', 'tratamiento ansiedad Barcelona', 'psicoterapia psicoanalítica', 'curar ansiedad', 'psicoanálisis Barcelona', 'psicólogo psicoanalítico Catalunya', 'terapia psicoanalítica Maresme'],
  image: 'https://clinicadelansiedad.com/images/enfoque-hero.png',
  imageAlt: 'Cómo se cura la ansiedad - Psicoanálisis Directo'
});

export default function EnfoqueLayout({ children }: { children: React.ReactNode }) {
  return children;
}
