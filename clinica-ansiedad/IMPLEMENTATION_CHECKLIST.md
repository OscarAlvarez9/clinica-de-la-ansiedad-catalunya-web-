# ✅ Checklist de Implementación Schema Markup

## Estado Actual: 60% Implementado

### Ya Hecho ✓
- [x] `schema.ts` - Todos los schemas JSON-LD creados (12 tipos)
- [x] `schema-helpers.tsx` - Componentes y funciones helper
- [x] `layout.tsx` - MedicalClinicSchema inyectado (línea 52)
- [x] `layout.tsx` - FAQSchema inyectado (línea 53)
- [x] `layout.tsx` - PersonSchema inyectado (línea 54)
- [x] Documentación completa (SCHEMA_MARKUP_GUIDE.md)
- [x] Ejemplos visuales (SCHEMA_EXAMPLES.md)

---

## Por Implementar: 7 Acciones Críticas

### 🔴 PRIORIDAD 1: Blog Posts

**Archivo:** `src/app/blog/[slug]/page.tsx`

**Código a añadir:**
```tsx
import { blogPostingSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function BlogPost({ params }) {
    const post = getPost(params.slug);

    const schema = blogPostingSchema({
        title: post.title,
        description: post.excerpt,
        content: post.content,
        author: "Joan Ramon Soto",
        datePublished: post.date,
        dateModified: post.updated,
        image: post.image,
        url: `https://clinicadelansiedad.com/blog/${params.slug}`
    });

    return (
        <>
            <SchemaInjector schema={schema} id={`blog-${params.slug}`} />
            {/* Resto del contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Alto - Cada post rankea mejor en Google
**Tiempo:** ⏱️ 15 min
**Urgencia:** 🔴 ALTA

---

### 🟠 PRIORIDAD 2: Servicios Pages

**Archivo:** `src/app/servicios/page.tsx`

**Código a añadir:**
```tsx
import { createServiceSchema } from '@/lib/schema-helpers';
import { MultiSchema } from '@/lib/schema-helpers';

const services = [
    {
        name: "Terapia Individual Psicoanalítica",
        description: "Sesiones individuales semanales...",
        serviceType: "Psychotherapy",
        areaServed: ["Barcelona", "Catalunya", "España"],
        provider: "Joan Ramon Soto"
    },
    // Más servicios...
];

export default function ServicesPage() {
    const schemas = services.map(createServiceSchema);

    return (
        <>
            <MultiSchema
                schemas={schemas.map((s, i) => ({
                    schema: s,
                    id: `service-${i}`
                }))}
            />
            {/* Resto del contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Alto - Cada servicio posiciona independientemente
**Tiempo:** ⏱️ 20 min
**Urgencia:** 🔴 ALTA

---

### 🟠 PRIORIDAD 3: Página Sobre Mí

**Archivo:** `src/app/sobre-mi/page.tsx`

**Código a añadir:**
```tsx
import { personSchema, articleSchema } from '@/lib/schema';
import { MultiSchema } from '@/lib/schema-helpers';

export default function AboutPage() {
    const aboutArticleSchema = articleSchema({
        title: "Sobre Joan Ramon Soto",
        description: "Psicólogo y psicoterapeuta con 31 años de experiencia...",
        image: "/images/joan-ramon-soto.png",
        url: "https://clinicadelansiedad.com/sobre-mi",
        datePublished: "2025-01-01",
        author: "Joan Ramon Soto"
    });

    return (
        <>
            <MultiSchema
                schemas={[
                    { schema: personSchema, id: "schema-person" },
                    { schema: aboutArticleSchema, id: "schema-about" }
                ]}
            />
            {/* Resto del contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Medio - Valida credenciales del doctor
**Tiempo:** ⏱️ 10 min
**Urgencia:** 🟠 Media

---

### 🟠 PRIORIDAD 4: Página Enfoque

**Archivo:** `src/app/enfoque/page.tsx`

**Código a añadir:**
```tsx
import { articleSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function ApproachPage() {
    const schema = articleSchema({
        title: "Nuestro Enfoque: Psicoterapia Psicoanalítica",
        description: "La psicoterapia psicoanalítica busca resolver las causas profundas...",
        image: "/images/approach-hero.png",
        url: "https://clinicadelansiedad.com/enfoque",
        datePublished: "2025-01-01",
        author: "Joan Ramon Soto"
    });

    return (
        <>
            <SchemaInjector schema={schema} id="schema-approach" />
            {/* Resto del contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Medio
**Tiempo:** ⏱️ 5 min
**Urgencia:** 🟠 Media

---

### 🟡 PRIORIDAD 5: Breadcrumbs en Páginas Internas

**Archivo:** `src/app/servicios/[service]/page.tsx` (y similares)

**Código a añadir:**
```tsx
import { generateBreadcrumb } from '@/lib/schema-helpers';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function ServicePage({ params }) {
    const breadcrumb = generateBreadcrumb([
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: params.service, path: `/servicios/${params.service}` }
    ]);

    return (
        <>
            <SchemaInjector schema={breadcrumb} id="breadcrumb" />
            {/* Resto del contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Medio - Mejora navegabilidad en SERP
**Tiempo:** ⏱️ 15 min
**Urgencia:** 🟡 Baja-Media

---

### 🟡 PRIORIDAD 6: Rutas Específicas de Condiciones

**Archivos:**
- `src/app/ansiedad/page.tsx`
- `src/app/depresion/page.tsx`
- `src/app/crisis-de-panico/page.tsx`

**Patrón:**
```tsx
import { articleSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function ConditionPage() {
    const schema = articleSchema({
        title: "Tratamiento de la Ansiedad Generalizada",
        description: "La ansiedad generalizada es un trastorno mental...",
        image: "/images/anxiety-treatment.png",
        url: "https://clinicadelansiedad.com/ansiedad",
        datePublished: "2025-01-01",
        author: "Joan Ramon Soto"
    });

    return (
        <>
            <SchemaInjector schema={schema} id="schema-condition" />
            {/* Contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Alto - Posiciona por condición específica
**Tiempo:** ⏱️ 5 min × 5 páginas = 25 min
**Urgencia:** 🟡 Alta

---

### 🟡 PRIORIDAD 7: Página de Blog (Listado)

**Archivo:** `src/app/blog/page.tsx`

**Código a añadir:**
```tsx
import { collectionSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function BlogPage() {
    const posts = getAllPosts();

    const schema = collectionSchema({
        name: "Blog - Clínica de la Ansiedad",
        description: "Artículos sobre psicoterapia, ansiedad y salud mental...",
        url: "https://clinicadelansiedad.com/blog",
        items: posts.map(post => ({
            name: post.title,
            url: `https://clinicadelansiedad.com/blog/${post.slug}`
        }))
    });

    return (
        <>
            <SchemaInjector schema={schema} id="schema-blog-collection" />
            {/* Resto del contenido */}
        </>
    );
}
```

**Impacto:** 🟢 Medio
**Tiempo:** ⏱️ 10 min
**Urgencia:** 🟡 Baja

---

## 📋 Plan de Acción Semanal

### Semana 1 (Esta semana)
- [ ] Implementar blog schema (Prioridad 1) - 15 min
- [ ] Implementar servicios schema (Prioridad 2) - 20 min
- [ ] Implementar Sobre Mí (Prioridad 3) - 10 min
- [ ] Validar en https://validator.schema.org/ - 10 min
- **Total:** 55 minutos

### Semana 2
- [ ] Implementar enfoque schema (Prioridad 4) - 5 min
- [ ] Añadir breadcrumbs (Prioridad 5) - 15 min
- [ ] Condiciones específicas (Prioridad 6) - 25 min
- [ ] Blog collection schema (Prioridad 7) - 10 min
- [ ] Testear en https://search.google.com/test/rich-results - 15 min
- **Total:** 70 minutos

### Semana 3
- [ ] Revisar datos en Google Search Console
- [ ] Ajustar información si es necesario
- [ ] Agregar a URLs de sitemap.xml
- [ ] Enviar a Google para recrawl

---

## 🔍 Validación Step-by-Step

Después de cada implementación:

```bash
# 1. Copiar JSON-LD generado
# 2. Ir a: https://validator.schema.org/
# 3. Pegar el JSON-LD
# 4. Verificar que no hay errores
# 5. Si hay errores, revisar sintaxis
```

### Errores Comunes

| Error | Solución |
|-------|----------|
| `Missing property "name"` | Agregar `name` al objeto |
| `Invalid date format` | Usar formato ISO: `2026-03-07` |
| `Unknown property` | Remover propiedades no estándar |
| `Invalid URL` | Verificar que comience con `https://` |

---

## 📊 Checklist de Validación

### Para cada schema:
- [ ] JSON válido (sin errores de sintaxis)
- [ ] Propiedades requeridas presentes
- [ ] URLs correctas (https://)
- [ ] Fechas en formato ISO 8601
- [ ] Sin información sensible expuesta
- [ ] Datos actualizados y correctos

---

## 🚀 Comandos Útiles

### Buscar páginas sin schema
```bash
grep -r "SchemaInjector" src/app/ --include="*.tsx" | grep -v node_modules
```

### Validar todos los schemas
```bash
npm run lint  # Si tienes ESLint configurado
```

---

## 📈 Monitoreo Post-Implementación

### Semana 1-2 (Después de implementar)
- ✓ Google tardará en procesar los nuevos schemas
- ✓ Puede que no veas cambios inmediatos

### Semana 3-4
- ✓ Verificar en Google Search Console → Performance
- ✓ Buscar tu dominio en Google
- ✓ Usar "site:" + keyword para verificar indexación

### Mes 1
- ✓ Analizar CTR en GSC
- ✓ Revisar si aparecen rich snippets
- ✓ Ajustar contenido si es necesario

---

## 🎯 Objetivos de Implementación

| Métrica | Target | Timeline |
|---------|--------|----------|
| Schemas implementados | 100% (12/12) | 2 semanas |
| Páginas con schema | 100% | 2 semanas |
| Rich snippets en SERP | +5 tipos | 4 semanas |
| CTR mejorado | +50% | 6 semanas |
| LLM indexation | 100% | 2 semanas |

---

## 📞 Soporte y Debugging

### Si algo no funciona:

1. **Validar JSON**
   ```
   Ir a: https://jsonlint.com/
   Pegar el schema
   Verificar sintaxis
   ```

2. **Revisar en Browser**
   ```
   Inspeccionador → Elements
   Buscar: <script type="application/ld+json">
   Copiar y validar
   ```

3. **Testear en Google**
   ```
   https://search.google.com/test/rich-results
   Pegar URL de la página
   Ver errores
   ```

---

## ✨ Próximos Pasos Opcionales (Bonus)

Después de completar lo anterior:

- [ ] Agregar VideoSchema si hay videos
- [ ] Agregar EventSchema si hay webinars
- [ ] Implementar LocalBusiness mejorado
- [ ] Agregar AggregateRating dinámico desde DB
- [ ] Conectar Google Analytics 4
- [ ] Agregar Google Search Console monitoring

---

## 🎓 Recursos de Referencia

| Recurso | URL | Propósito |
|---------|-----|----------|
| Schema.org | https://schema.org/ | Documentación oficial |
| Google Developers | https://developers.google.com/search/docs/appearance/structured-data | Guía de Google |
| JSON Schema | https://json-schema.org/ | Validación |
| MDN - JSON-LD | https://developer.mozilla.org/en-US/docs/Glossary/JSON-LD | Referencia técnica |

---

**Tiempo total estimado:** 3-4 horas de trabajo
**Impacto esperado:** +200-300% en visibilidad de búsqueda dentro de 2 meses

---

*Última actualización: 7 de marzo de 2026*
*Mantén este documento actualizado mientras implementas*
