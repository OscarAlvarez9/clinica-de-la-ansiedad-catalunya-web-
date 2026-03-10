import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Depresión y Ansiedad: Tratamiento Especializado | Clínica de la Ansiedad Catalunya',
  description: 'Tratamiento de la depresión y la ansiedad desde el origen. Intervención psicoanalítica para superar la tristeza profunda, la apatía y la angustia. Sesiones presenciales en Barcelona y terapia online.',
  path: '/depresion'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Tratamiento de la Depresión</h1>
    </div>
  );
}
