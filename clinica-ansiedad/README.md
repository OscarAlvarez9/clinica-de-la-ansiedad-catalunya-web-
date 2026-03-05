# Clínica de la Ansiedad Catalunya

Proyecto frontend flagship para la Clínica de la Ansiedad Catalunya, diseñada y enfocada en SEO técnico y conversión.
Especialidades en psicoterapia psicoanalítica fundada en 1993 por Joan Ramon Soto.

## Stack Tecnológico

- React 19 + Vite
- TypeScript (Strict Mode)
- Tailwind CSS v3
- HeroUI + Shadcn UI
- Framer Motion
- React Helmet Async (SEO)
- React Router DOM

## Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm o yarn

## Instalación

1. Clona el repositorio o abre la carpeta del proyecto.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Para construir la versión de producción:

```bash
npm run build
```

## Estructura del Proyecto

- \`src/components/layout\`: Componentes globales como \`Navbar\` y \`Footer\`.
- \`src/components/sections\`: Secciones individuales de la landing page organizadas semánticamente.
- \`src/hooks\`: Custom hooks como \`useAnimatedNumber\` para las estadísticas.
- \`src/index.css\`: Configuraciones globales de Tailwind CSS y paleta de colores requerida.
- \`index.html\`: Contiene inyecciones SEO indispensables como Schema Markup (JSON-LD) para MedicalClinic y FAQPage, además de metadatos de optimización.

## Decisiones de Diseño (UI/UX)

- **Paleta de Colores**: Integrada en la configuración de Tailwind con colores calmantes (sage, cream, navy) e indicadores premium (gold).
- **Tipografía**: 'Cormorant Garamond' para el confort visual en encabezados y 'Lato' asegurando legibilidad en textos largos.
- **Animaciones**: Scroll suave y animaciones staggered (en cascada) utilizando \`framer-motion\`, sin sobrecargar el DOM.
- **Mobile First**: Totalmente responsivo e interactivo, asegurando que los CTAs (Llamadas a la acción) estén siempre visibles.
- **SEO Técnico**: Cumplimiento de Core Web Vitals y schema de la clínica para E-E-A-T (Experiencia, Expertise, Autoridad, y Confianza).
