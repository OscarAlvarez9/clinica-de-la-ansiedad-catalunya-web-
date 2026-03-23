import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Crisis de Ansiedad y Ataques de Pánico | Síntomas y Tratamiento',
  description: 'Reconoce los síntomas de crisis de ansiedad y ataques de pánico. Tratamiento psicoanalítico para detener el ciclo del pánico desde la raíz. Barcelona y online.',
  path: '/crisis-de-panico',
  keywords: [
    'crisis de ansiedad sintomas', 'ataques de panico sintomas', 'crisis de pánico',
    'ataque de pánico psicólogo', 'palpitaciones por ansiedad', 'hiperventilacion',
    'como se cura la ansiedad', 'psicólogo crisis de pánico', 'terapia pánico psicoanalítica',
    'ataques de pánico tratamiento Barcelona', 'crisis de pánico psicólogo Catalunya',
    'pánico tratamiento Maresme', 'ataques de pánico Girona'
  ]
});

export default function CrisisDePanicoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
