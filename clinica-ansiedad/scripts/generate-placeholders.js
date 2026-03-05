import fs from 'fs';
import path from 'path';

const pages = [
    {
        path: 'terapia-individual',
        title: 'Terapia Individual Psicoanalítica | Clínica de la Ansiedad',
        description: 'Tratamiento individualizado para superar la ansiedad y el malestar emocional desde la raíz con psicoterapia psicoanalítica.',
        titleDisplay: 'Terapia Individual'
    },
    {
        path: 'terapia-pareja',
        title: 'Terapia de Pareja | Clínica de la Ansiedad Catalunya',
        description: 'Abordaje terapéutico para resolver conflictos de pareja, mejorar la comunicación y superar crisis relacionales.',
        titleDisplay: 'Terapia de Pareja'
    },
    {
        path: 'terapia-online',
        title: 'Terapia Online Especializada | Clínica de la Ansiedad',
        description: 'Psicoterapia psicoanalítica en línea. La misma eficacia clínica que la terapia presencial, accesible desde toda España.',
        titleDisplay: 'Terapia Online'
    },
    {
        path: 'ansiedad',
        title: 'Tratamiento de la Ansiedad | Dr. Joan Ramon Soto',
        description: 'Especialistas en el tratamiento profundo de la ansiedad. Comprende y resuelve las causas reales de tu angustia.',
        titleDisplay: 'Tratamiento de la Ansiedad'
    },
    {
        path: 'depresion',
        title: 'Tratamiento de la Depresión | Clínica de la Ansiedad',
        description: 'Intervención psicoanalítica para superar la depresión. Un espacio para entender el origen de la tristeza y recuperar el deseo.',
        titleDisplay: 'Tratamiento de la Depresión'
    },
    {
        path: 'crisis-de-panico',
        title: 'Tratamiento de Crisis de Pánico | Clínica de Catalunya',
        description: 'Ayuda especializada para las crisis de pánico y angustia extrema. Detén el ciclo del miedo a través de un abordaje de raíz.',
        titleDisplay: 'Crisis de Pánico'
    },
    {
        path: 'blog',
        title: 'Blog de Psicoanálisis y Ansiedad | Clínica de la Ansiedad',
        description: 'Artículos, reflexiones y recursos sobre el tratamiento de la ansiedad, psicoanálisis y salud mental por Joan Ramon Soto.',
        titleDisplay: 'Nuestro Blog'
    },
    {
        path: 'ca',
        title: 'Clínica de l\'Ansietat Catalunya | Dr. Joan Ramon Soto',
        description: 'Tractament especialitzat de l\'ansietat a Catalunya. Abordatge psicoanalític per resoldre les causes profundes. Sessions presencials i online.',
        titleDisplay: 'Clínica de l\'Ansietat Catalunya (Inici)',
        lang: 'ca'
    }
];

const basePath = path.join(process.cwd(), 'src/app');

pages.forEach(p => {
    const dirPath = path.join(basePath, p.path);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const content = `import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: '${p.title}',
  description: '${p.description}',
  path: '/${p.path}'${p.lang ? `,
  lang: '${p.lang}'` : ''}
});

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
      <h1 className="text-3xl font-serif text-navy">${p.titleDisplay}</h1>
    </div>
  );
}
`;

    fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Placeholder pages created successfully.');
