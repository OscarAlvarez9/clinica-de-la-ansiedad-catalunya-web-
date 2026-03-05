import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: "Clínica de l'Ansietat Catalunya | Dr. Joan Ramon Soto",
  description: "Tractament especialitzat de l'ansietat a Catalunya. Abordatge psicoanalític per resoldre les causes profundes. Sessions presencials i online.",
  path: '/ca',
  lang: 'ca'
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">Clínica de l'Ansietat Catalunya (Inici)</h1>
    </div>
  );
}
