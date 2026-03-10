# 🚀 Quick Start - Schema Markup (Copy & Paste)

## Para empezar YA (5 minutos)

---

## 1️⃣ Actualizar Blog Post Page

**Archivo:** `src/app/blog/[slug]/page.tsx`

### ANTES ❌
```tsx
export default function BlogPost({ params }) {
    const post = getPost(params.slug);
    return <article>{post.content}</article>;
}
```

### DESPUÉS ✅ (Copy & Paste)
```tsx
import { blogPostingSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function BlogPost({ params }) {
    const post = getPost(params.slug);

    // ✓ NUEVO: Schema para SEO
    const schema = blogPostingSchema({
        title: post.title,
        description: post.excerpt || post.title,
        content: post.content,
        author: "Joan Ramon Soto",
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        image: post.image || "https://clinicadelansiedad.com/images/blog-default.png",
        url: `https://clinicadelansiedad.com/blog/${params.slug}`
    });

    return (
        <>
            {/* ✓ NUEVO: Inyectar schema */}
            <SchemaInjector schema={schema} id={`blog-${params.slug}`} />

            {/* Contenido existente */}
            <article className="...">
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
                <div>{post.content}</div>
            </article>
        </>
    );
}
```

**Líneas a agregar:** 2 imports + 1 componente = 3 líneas de código

---

## 2️⃣ Actualizar Página de Servicios

**Archivo:** `src/app/servicios/page.tsx`

### RÁPIDO (Copy & Paste)
```tsx
import { createServiceSchema } from '@/lib/schema-helpers';
import { MultiSchema } from '@/lib/schema-helpers';

export default function ServicesPage() {
    // ✓ NUEVO: Servicios con schema
    const servicesData = [
        {
            name: "Terapia Individual Psicoanalítica",
            description: "Sesiones individuales semanales para trabajar conflictos emocionales profundos mediante el diálogo terapéutico.",
            serviceType: "Psychotherapy",
            areaServed: ["Barcelona", "Catalunya", "España"],
            provider: "Joan Ramon Soto",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
        },
        {
            name: "Terapia de Pareja",
            description: "Sesiones conjuntas para resolver conflictos, mejorar comunicación y fortalecer la relación.",
            serviceType: "Psychotherapy",
            areaServed: ["Barcelona", "Catalunya"],
            provider: "Joan Ramon Soto",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
        },
        {
            name: "Sesiones Online",
            description: "Terapia psicoanalítica a través de videollamada segura con flexibilidad geográfica.",
            serviceType: "Telemedicine",
            areaServed: ["España"],
            provider: "Joan Ramon Soto"
        }
    ];

    const schemas = servicesData.map(createServiceSchema);

    return (
        <>
            {/* ✓ NUEVO: Inyectar todos los schemas de servicios */}
            <MultiSchema
                schemas={schemas.map((schema, i) => ({
                    schema,
                    id: `service-${i}`
                }))}
            />

            {/* Tu contenido existente aquí */}
            <section className="...">
                <h1>Servicios</h1>
                {/* servicesData.map() etc... */}
            </section>
        </>
    );
}
```

---

## 3️⃣ Actualizar Página Sobre Mí

**Archivo:** `src/app/sobre-mi/page.tsx`

### MÍNIMO (Copy & Paste)
```tsx
import { personSchema, articleSchema } from '@/lib/schema';
import { MultiSchema } from '@/lib/schema-helpers';

export default function AboutPage() {
    // ✓ NUEVO: Article schema para la página
    const aboutSchema = articleSchema({
        title: "Sobre Joan Ramon Soto - Psicólogo Clínico",
        description: "Con 31 años de experiencia en psicoterapia psicoanalítica, el Dr. Joan Ramon Soto ha ayudado a más de 1000 pacientes.",
        image: "https://clinicadelansiedad.com/images/joan-ramon-soto.png",
        url: "https://clinicadelansiedad.com/sobre-mi",
        datePublished: "2025-01-01",
        author: "Joan Ramon Soto"
    });

    return (
        <>
            {/* ✓ NUEVO: Inyectar schemas */}
            <MultiSchema
                schemas={[
                    { schema: personSchema, id: "schema-person" },
                    { schema: aboutSchema, id: "schema-about" }
                ]}
            />

            {/* Tu contenido existente */}
            <div className="...">
                <h1>Sobre mí</h1>
                {/* Contenido de la página */}
            </div>
        </>
    );
}
```

---

## 4️⃣ Actualizar Página Enfoque

**Archivo:** `src/app/enfoque/page.tsx`

### SIMPLE (Copy & Paste)
```tsx
import { articleSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function ApproachPage() {
    // ✓ NUEVO: Schema para metodología
    const schema = articleSchema({
        title: "Nuestro Enfoque: Psicoterapia Psicoanalítica Rigurosa",
        description: "La psicoterapia psicoanalítica busca resolver las causas profundas del sufrimiento emocional, no solo tratar síntomas.",
        image: "https://clinicadelansiedad.com/images/approach-hero.png",
        url: "https://clinicadelansiedad.com/enfoque",
        datePublished: "2025-01-01",
        author: "Joan Ramon Soto"
    });

    return (
        <>
            {/* ✓ NUEVO: Inyectar schema */}
            <SchemaInjector schema={schema} id="schema-approach" />

            {/* Tu contenido existente */}
            <div className="...">
                <ApproachSection />
            </div>
        </>
    );
}
```

---

## 5️⃣ Agregar Breadcrumbs a Páginas Internas

**Archivo:** Cualquier página interna (ej: `src/app/ansiedad/page.tsx`)

### TEMPLATE (Copy & Paste)
```tsx
import { generateBreadcrumb } from '@/lib/schema-helpers';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function AnxietyPage() {
    // ✓ NUEVO: Breadcrumb para navegación
    const breadcrumb = generateBreadcrumb([
        { name: "Inicio", path: "/" },
        { name: "Condiciones", path: "/condiciones" },
        { name: "Ansiedad Generalizada", path: "/ansiedad" }
    ]);

    return (
        <>
            {/* ✓ NUEVO: Breadcrumb schema */}
            <SchemaInjector schema={breadcrumb} id="breadcrumb" />

            {/* Tu contenido */}
            <div>
                <h1>Ansiedad Generalizada</h1>
            </div>
        </>
    );
}
```

---

## ✅ Validación Inmediata

Después de cada cambio:

```bash
# 1. Guardar el archivo
# 2. Ir a: https://validator.schema.org/
# 3. Pegar el JSON-LD de tu browser
# 4. Verificar que no hay errores
```

### Cómo extraer el JSON-LD para validar:
1. Abre tu página en navegador
2. Inspeccionador (F12)
3. Busca: `<script type="application/ld+json">`
4. Copia el contenido
5. Pega en https://validator.schema.org/

---

## 🎯 Orden Recomendado de Implementación

**Tiempo total: ~1 hora**

1. **Blog posts** (15 min) - Máximo impacto, todos los posts a la vez
2. **Servicios** (20 min) - Cada servicio rankea individualmente
3. **Sobre mí** (10 min) - Valida credenciales
4. **Enfoque** (5 min) - SEO para metodología
5. **Breadcrumbs** (10 min) - Añade a todas las páginas internas

---

## 🔍 Testing con Google Tools

### Opción 1: Rich Results Test (Recomendado)
```
1. Ir a: https://search.google.com/test/rich-results
2. Pegar URL de tu página
3. Esperar a que Google la procese
4. Ver qué tipos de rich snippets aparecen
```

### Opción 2: Mobile Friendly Test
```
1. https://search.google.com/test/mobile-friendly
2. Pegar URL
3. Verificar que todo se ve bien en mobile
```

---

## 📊 Antes vs Después Real

### Página de Blog

**ANTES** (sin schema)
```
"Crisis de Pánico: Síntomas y Causas" - blog.clinicadelansiedad.com
Crisis de pánico es una condición mental que afecta a...
```

**DESPUÉS** (con schema) ✨
```
Crisis de Pánico: Síntomas y Causas
Joan Ramon Soto · Clínica de la Ansiedad
⏰ Actualizado hace 2 meses

Crisis de pánico es una condición mental que afecta
a miles de personas. Aquí exploraremos síntomas,
causas y tratamiento efectivo...

[Leer artículo]
```

---

## 🚨 Errores Comunes (y soluciones)

### Error 1: `JSON parse error`
```
❌ Malo: name: 'Mi Servicio'  // Comillas simples
✅ Bien: name: "Mi Servicio"  // Comillas dobles
```

### Error 2: `Missing required property`
```
❌ Malo: { name: "...", description: "..." }
✅ Bien: Incluir todas las propiedades requeridas
```

### Error 3: `Invalid date format`
```
❌ Malo: datePublished: "01/01/2026"
✅ Bien: datePublished: "2026-01-01"  // ISO 8601
```

### Error 4: `URL must be valid`
```
❌ Malo: url: "clinicadelansiedad.com"
✅ Bien: url: "https://clinicadelansiedad.com"
```

---

## 📈 Monitoreo Semanal

Después de implementar, cada semana:

```
Semana 1: Implementar cambios
Semana 2: Validar en Google
Semana 3: Revisar en GSC (Google Search Console)
Semana 4: Analizar cambios en CTR y posiciones
```

### Dónde revisar:
1. **Google Search Console** → Performance
   - Ver clicks, impresiones, CTR

2. **Rich Results Report** → Coverage
   - Ver si los schemas aparecen

3. **URL Inspection**
   - Verificar cada página
   - Ver si se indexó bien

---

## 🎁 Bonus: Script de Validación

Crea `src/lib/validate-schemas.ts`:

```tsx
import { validateSchema } from '@/lib/schema-helpers';
import {
    medicalClinicSchema,
    faqSchema,
    personSchema
} from '@/lib/schema';

export function validateAllSchemas() {
    const schemas = {
        clinic: medicalClinicSchema,
        faq: faqSchema,
        person: personSchema
    };

    Object.entries(schemas).forEach(([name, schema]) => {
        const isValid = validateSchema(schema);
        console.log(`${name}: ${isValid ? '✓' : '✗'}`);
    });
}

// Usar en desarrollo:
if (process.env.NODE_ENV === 'development') {
    validateAllSchemas();
}
```

---

## 🏁 Checklist Rápido

- [ ] Actualizar `src/app/blog/[slug]/page.tsx`
- [ ] Actualizar `src/app/servicios/page.tsx`
- [ ] Actualizar `src/app/sobre-mi/page.tsx`
- [ ] Actualizar `src/app/enfoque/page.tsx`
- [ ] Agregar breadcrumbs a páginas internas
- [ ] Validar en https://validator.schema.org/
- [ ] Testear en https://search.google.com/test/rich-results
- [ ] Enviar sitio a Google Search Console
- [ ] Monitorear en 2-4 semanas

---

## 💡 Pro Tips

**Tip 1:** Mantén URLs semánticas
```
✅ /blog/crisis-de-panico-sintomas
❌ /blog/post-123
```

**Tip 2:** Incluye palabras clave en títulos
```
✅ "Tratamiento de Ansiedad en Barcelona"
❌ "Nuestro Tratamiento"
```

**Tip 3:** Actualiza fechas regularmente
```
dateModified: new Date().toISOString()
```

**Tip 4:** Usa imágenes de alta calidad en schema
```
image: "https://clinicadelansiedad.com/images/1200x630.png"
// Mínimo 1200x630px recomendado
```

---

## 🎓 Próximo Paso

Después de implementar esto:

1. Lee [SCHEMA_MARKUP_GUIDE.md](./SCHEMA_MARKUP_GUIDE.md)
2. Revisa [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)
3. Observa [SCHEMA_EXAMPLES.md](./SCHEMA_EXAMPLES.md) para entender el impacto

---

**Tiempo estimado:** 45 minutos
**Dificultad:** 🟢 Fácil (copy & paste)
**Impacto:** 🟢🟢🟢 ALTO

¡Adelante! 🚀
