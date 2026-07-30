import type { Metadata } from 'next';

const PATH = '/taller-gestion-estres-empresas';
const BASE = 'https://www.clinicadelansiedad.com';

const meta = {
  es: {
    title: 'Taller de gestión del estrés y la ansiedad para empresas | Clínica de la Ansiedad',
    description:
      'Taller práctico presencial de gestión del estrés y la ansiedad para empresas: 3 sesiones, grupos de 4 a 10 personas. Formación en ansiedad para trabajadores en Barcelona y Catalunya. Solicita una propuesta.',
    keywords: [
      'taller gestión estrés empresas', 'formación ansiedad trabajadores',
      'taller estrés laboral', 'gestión del estrés en empresas',
      'formación gestión emocional empresas', 'taller bienestar emocional empresas',
      'prevención estrés laboral', 'salud psicológica empresa',
      'taller ansiedad empresas Barcelona', 'formación estrés Catalunya',
      'taller estrés y ansiedad trabajadores',
    ],
    ogLocale: 'es_ES',
  },
  ca: {
    title: "Taller de gestió de l'estrès i l'ansietat per a empreses | Clínica de la Ansiedad",
    description:
      "Taller pràctic presencial de gestió de l'estrès i l'ansietat per a empreses: 3 sessions, grups de 4 a 10 persones. Formació en ansietat per a treballadors a Barcelona i Catalunya. Sol·licita una proposta.",
    keywords: [
      "taller gestió estrès empreses", "formació ansietat treballadors",
      "taller estrès laboral", "gestió de l'estrès a empreses",
      "formació gestió emocional empreses", "taller benestar emocional empreses",
      "prevenció estrès laboral", "salut psicològica empresa",
      "taller ansietat empreses Barcelona", "formació estrès Catalunya",
    ],
    ogLocale: 'ca_ES',
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = locale === 'ca' ? meta.ca : meta.es;
  const url = `${BASE}/${locale === 'ca' ? 'ca' : 'es'}${PATH}`;

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords as unknown as string[],
    robots: 'index, follow',
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE}/es${PATH}`,
        ca: `${BASE}/ca${PATH}`,
        'x-default': `${BASE}/es${PATH}`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      type: 'website',
      locale: m.ogLocale,
      siteName: 'Clínica de la Ansiedad Catalunya',
      images: [
        {
          url: `${BASE}/images/og-default.png`,
          width: 1200,
          height: 630,
          alt: 'Clínica de la Ansiedad Catalunya',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [`${BASE}/images/og-default.png`],
    },
  };
}

export default function TallerEmpresasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
