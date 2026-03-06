export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
    readTime: string;
    featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Comprender la Ansiedad: Un Enfoque Psicoanalítico',
        slug: 'comprender-la-ansiedad-enfoque-psicoanalitico',
        excerpt: 'La ansiedad no es solo un síntoma, sino una señal que nuestro psiquismo nos envía. Exploramos las raíces profundas del estrés desde la perspectiva clínica.',
        content: `
      <p>La ansiedad es, posiblemente, uno de los padecimientos más comunes en nuestra sociedad contemporánea. Sin embargo, detrás de la taquicardia, la falta de aire o la inquietud constante, se esconde una historia subjetiva que merece ser escuchada.</p>
      
      <h3>¿Qué es la ansiedad para el psicoanálisis?</h3>
      <p>A diferencia de los enfoques puramente conductuales que buscan "eliminar" el síntoma lo antes posible, el psicoanálisis se pregunta por el sentido de ese malestar. Freud describía la angustia como una señal del yo ante un peligro interno, un conflicto que no ha sido resuelto.</p>
      
      <blockquote>"Lo que no se dice con palabras, el cuerpo lo expresa con síntomas."</blockquote>
      
      <h3>Más allá de la medicación</h3>
      <p>Si bien en casos graves la medicación puede ser un apoyo necesario, el trabajo terapéutico permite abordar la causa, no solo el efecto. Entender qué es lo que "nos aprieta" el pecho nos da las herramientas para transformar esa energía en algo constructivo.</p>
      
      <h3>Consejos para navegar momentos de crisis</h3>
      <ul>
        <li><strong>Escucha tu cuerpo:</strong> No intentes luchar contra la sensación, intenta ponerle palabras.</li>
        <li><strong>Busca un espacio de palabra:</strong> Tener a alguien que escuche sin juzgar es el primer paso para la sanación.</li>
        <li><strong>La respiración como ancla:</strong> En momentos de desborde, volver al ritmo biológico ayuda a calmar el sistema nervioso.</li>
      </ul>
    `,
        date: '2024-03-15',
        category: 'Psicoanálisis',
        image: '/images/blog/ansiedad-roots.jpg',
        author: {
            name: 'Dr. Joan Ramon Soto',
            role: 'Psicoanalista Clínico',
            image: '/images/joan-ramon.jpg'
        },
        readTime: '5 min',
        featured: true
    },
    {
        id: '2',
        title: 'El Lazo Familiar y su Influencia en el Estrés Moderno',
        slug: 'lazo-familiar-influencia-estres-moderno',
        excerpt: '¿Cómo influyen nuestras primeras relaciones en la forma en que gestionamos el estrés hoy en día? Un análisis sobre la dimensión familiar.',
        content: `
      <p>Nuestra forma de vincularnos con el mundo no nace de la nada. Los primeros lazos afectivos configuran la arquitectura de nuestra psique y, por ende, nuestra respuesta ante la presión y el estrés.</p>
      
      <h3>La repetición de patrones</h3>
      <p>A menudo nos encontramos reaccionando ante jefes o parejas de la misma forma que lo hacíamos ante nuestras figuras de autoridad en la infancia. Reconocer estos patrones es fundamental para dejar de repetirlos automáticamente.</p>
      
      <h3>Construir una nueva forma de estar</h3>
      <p>La terapia no busca culpar al pasado, sino liberar el presente. Al desenterrar las raíces de nuestras inseguridades, podemos empezar a cultivar una confianza propia que nos permita afrontar los retos modernos con mayor serenidad.</p>
    `,
        date: '2024-03-10',
        category: 'Terapia Familiar',
        image: '/images/blog/family-bonds.jpg',
        author: {
            name: 'Dr. Joan Ramon Soto',
            role: 'Psicoanalista Clínico',
            image: '/images/joan-ramon.jpg'
        },
        readTime: '4 min'
    },
    {
        id: '3',
        title: 'Terapia Online: La Eficacia de la Palabra a Distancia',
        slug: 'terapia-online-eficacia-palabra-distancia',
        excerpt: '¿Es posible realizar un proceso psicoanalítico a través de una pantalla? Analizamos los beneficios y la profundidad de la terapia digital.',
        content: `
      <p>La tecnología ha transformado la clínica. Lo que antes parecía una barrera, hoy se presenta como un puente para quienes no pueden desplazarse o prefieren la comodidad de su entorno para hablar de lo más íntimo.</p>
      
      <h3>El encuadre en el entorno digital</h3>
      <p>La clave de la terapia online no es el dispositivo, sino el compromiso con el discurso. La palabra circula igual de potente a través de una videollamada si existe la transferencia necesaria entre analista y paciente.</p>
    `,
        date: '2024-03-05',
        category: 'Terapia Online',
        image: '/images/blog/online-therapy.jpg',
        author: {
            name: 'Dr. Joan Ramon Soto',
            role: 'Psicoanalista Clínico',
            image: '/images/joan-ramon.jpg'
        },
        readTime: '3 min'
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}

export function getRelatedPosts(currentId: string, limit = 2): BlogPost[] {
    return BLOG_POSTS
        .filter(post => post.id !== currentId)
        .slice(0, limit);
}
