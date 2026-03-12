import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terapia Online Ansiedad | 30 Años de Experiencia Clínica',
  description: 'Terapia online especializada en ansiedad desde 1993. Misma eficacia que la terapia presencial. Tratamiento de ansiedad generalizada, crisis de pánico y depresión.',
  path: '/terapia-online',
  keywords: [
    'terapia online ansiedad', 'terapia de ansiedad online', 'psicólogo online',
    'terapia ansiedad videollamada', 'ansiedad generalizada', 'crisis de pánico',
    'depresión online', 'psicólogo online España', 'terapia online Catalunya',
    'psicólogo online Barcelona', 'terapia online Girona', 'terapia online Lleida',
    'terapia online Tarragona', 'terapia online Maresme'
  ]
});

export default function TerapiaOnlineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
