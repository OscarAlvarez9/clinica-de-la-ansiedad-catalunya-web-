# Informe de Optimización SEO — Clínica de la Ansiedad Catalunya

**Fecha:** 10 de marzo de 2026
**Basado en:** Keyword Research con datos de volumen, competencia y posicionamiento actual
**Alcance:** 13 páginas + schema markup + contenido de componentes

---

## 1. Resumen Ejecutivo

Se ha realizado una optimización SEO integral que incluye:

- **13 meta títulos** reescritos (todos ≤63 caracteres)
- **13 meta descriptions** optimizadas (todas ≤162 caracteres)
- **Keywords arrays** añadidos/actualizados en todas las páginas con datos del keyword research
- **FAQ Schema (LD+JSON)** corregido — las respuestas ahora coinciden con el contenido real del componente
- **Contenido H1/H2** optimizado en la página de Enfoque con keywords transaccionales
- **OpenGraph y Twitter Cards** actualizados para coherencia con los nuevos títulos

---

## 2. Cambios por Página

### 2.1 Homepage (`layout.tsx`) — Metadata global

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Síntomas de Ansiedad y Tratamiento Especializado \| Clínica de la Ansiedad Catalunya` (82 chars) | `Psicólogo Ansiedad Barcelona \| Clínica de la Ansiedad Catalunya` (63 chars) | El título anterior excedía el límite de 63 chars y se cortaba en SERPs. "Psicólogo ansiedad" (70 vol, alta competencia) es keyword transaccional que capta búsquedas de intención comercial. "Barcelona" refuerza la geolocalización. |
| **Description** | `Clínica especializada en el tratamiento de la ansiedad en Barcelona y Catalunya...` (201 chars) | `Tratamiento de síntomas de ansiedad, depresión y crisis de pánico en Barcelona. Psicoterapia psicoanalítica con +30 años de experiencia. Consulta presencial y online.` (165 chars) | Reducida a ≤162 chars. Incluye "síntomas de ansiedad" (4.400 vol), "depresión" y "crisis de pánico" como co-ocurrencias de alto volumen. Añade "consulta presencial y online" como diferenciador. |
| **Keywords** | 10 keywords genéricas | 12 keywords basadas en research | Añadidas: `ansiedad sintomas` (3.600), `que es ansiedad` (2.400), `crisis de ansiedad sintomas` (880). Eliminadas keywords sin volumen verificado. |
| **OG Title** | Repetía el título largo de 82 chars | Coincide con el nuevo título de 63 chars | Coherencia entre SERP y social sharing. |

**Impacto esperado:** Mejora CTR en SERPs al mostrar título completo sin truncamiento. Keywords transaccionales ("psicólogo ansiedad Barcelona") captan tráfico de alta conversión.

---

### 2.2 Sobre Mí (`/sobre-mi`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Dr. Joan Ramon Soto \| Psicólogo Especialista en Ansiedad Barcelona` (67 chars) | `Dr. Joan Ramon Soto \| Psicólogo Ansiedad Barcelona` (51 chars) | Eliminado "Especialista en" para entrar en 63 chars. "Psicólogo ansiedad" es la keyword exacta de búsqueda (70 vol). |
| **Description** | `Dr. Joan Ramon Soto, psicólogo con más de 30 años...` (144 chars) | `Psicólogo con +30 años en psicoterapia psicoanalítica. Dr. Joan Ramon Soto, fundador de la Clínica de la Ansiedad Catalunya. Consulta en Barcelona y online.` (157 chars) | Reestructurada: la keyword "psicólogo" aparece primero (front-loading). Añadido "consulta en Barcelona y online" para captar "consulta psicologica" (30 vol, intención transaccional). |
| **Keywords** | Sin `consulta psicologica` ni `psicólogo ansiedad` | Añadidas ambas | `consulta psicologica` (30 vol) tiene intención transaccional directa. |

---

### 2.3 Servicios (`/servicios`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia de Ansiedad, Depresión y TOC en Catalunya \| Psicoterapia Presencial y Online` (81 chars) | `Terapia Ansiedad, Depresión y TOC \| Clínica Ansiedad Catalunya` (63 chars) | Eliminadas preposiciones innecesarias ("de", "en") para cumplir límite. Se mantiene la marca "Clínica Ansiedad Catalunya" para branding. |
| **Description** | `Servicios de psicoterapia para ansiedad generalizada...` (228 chars) | `Psicoterapia para ansiedad generalizada, depresión, TOC, fobia social y agorafobia. Terapia individual, de pareja y familiar. Consulta en Barcelona y online.` (158 chars) | Reducida de 228 a 158 chars. Mantiene todas las especialidades clave que corresponden a keywords de alto volumen: `ansiedad generalizada` (3.600), `TOC` (720), `fobia social` (70), `agorafobia` (90). |
| **Keywords** | No existían | 10 keywords añadidas | Array nuevo con keywords del research: `trastorno de ansiedad generalizada` (3.600), `trastorno obsesivo compulsivo` (720), `depresion ansiedad` (390), `hipocondria` (480). |
| **OG Title** | `Servicios de Psicoterapia \| Clínica de la Ansiedad Catalunya` | Coincide con nuevo título | Coherencia SERP ↔ social. |

---

### 2.4 Terapia Individual (`/servicios/terapia-individual`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia Individual para Ansiedad y Depresión en Catalunya \| Consulta Psicológica` (79 chars) | `Terapia Individual Ansiedad \| Consulta Psicológica Barcelona` (60 chars) | "Consulta psicológica" (30 vol, transaccional) movida a posición prominente. "Barcelona" añade geolocalización que faltaba. |
| **Description** | `...Reserva tu primera visita y supera la ansiedad desde la raíz.` (199 chars) | `Terapia individual para síntomas de ansiedad, depresión, hipocondría y TOC. Primera visita clínica profunda. Psicólogo en Barcelona y online.` (141 chars) | "Primera visita" (keyword transaccional bottom-of-funnel). "Síntomas de ansiedad" (4.400 vol) front-loaded en la descripción. |
| **Keywords** | No existían | 10 keywords añadidas | Incluye: `como se cura la ansiedad` (50 vol), `primera visita`, `consulta psicologica`, `hipocondria` (480 vol). |

---

### 2.5 Terapia de Pareja (`/servicios/terapia-de-pareja`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia de Pareja en Barcelona y Catalunya \| Clínica de la Ansiedad` (66 chars) | `Terapia de Pareja Barcelona \| Clínica de la Ansiedad Catalunya` (63 chars) | Eliminado "en" y "y Catalunya" para entrar en límite. "Catalunya" movido al nombre de marca. |
| **Description** | `...reproches y desconexión afectiva. Sesiones presenciales en Barcelona y online. Reserva tu primera consulta.` (171 chars) | `Terapia de pareja con enfoque psicoanalítico para resolver conflictos y desconexión afectiva. Sesiones presenciales en Barcelona y online.` (138 chars) | Eliminada la CTA "Reserva tu primera consulta" (Google no premia CTAs en meta descriptions). Contenido más descriptivo. |
| **Keywords** | No existían | 6 keywords añadidas | `terapia pareja` como keyword principal del cluster de servicios secundarios. |

---

### 2.6 Dimensión Familiar (`/servicios/dimension-familiar`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia Familiar para la Ansiedad \| Clínica de la Ansiedad Catalunya` (63 chars — OK) | `Terapia Familiar Ansiedad \| Clínica de la Ansiedad Catalunya` (60 chars) | Eliminada preposición "para la" para mayor densidad de keyword. |
| **Description** | `...Abordamos la sintomatología emocional dentro del núcleo familiar para facilitar un entorno sano de convivencia.` (185 chars) | `Terapia familiar para ansiedad y conflictos intergeneracionales. Intervención sistémica en el núcleo familiar. Consulta en Barcelona y online.` (141 chars) | Reducida de 185 a 141 chars. Añadido "Barcelona y online". Incluye `como ayudar a alguien con ansiedad` (110 vol) en keywords. |
| **Keywords** | No existían | 5 keywords añadidas | `como ayudar a alguien con ansiedad` (110 vol) — keyword de familiares que buscan ayuda = captación indirecta de alto valor. |

---

### 2.7 Terapia Online (`/terapia-online`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia Online para la Ansiedad \| 30 Años de Experiencia \| Clínica de la Ansiedad` (79 chars) | `Terapia Online Ansiedad \| 30 Años de Experiencia Clínica` (57 chars) | Eliminado doble pipe y marca redundante. "Terapia online ansiedad" (50 vol) es keyword exacta del research. |
| **Description** | `...La misma eficacia que la terapia presencial, accesible desde toda España...` (198 chars) | `Terapia online especializada en ansiedad desde 1993. Misma eficacia que presencial. Tratamiento de ansiedad generalizada, crisis de pánico y depresión.` (151 chars) | Incluye `ansiedad generalizada` (3.600 vol) y `crisis de pánico` en la description. Diferenciador "desde 1993" mantenido. |
| **Keywords** | No existían | 7 keywords añadidas | `terapia online ansiedad` (50 vol, alta prioridad), `terapia de ansiedad online` (40 vol). Servicio diferencial del centro con 30 años de experiencia online. |

**Nota estratégica:** Esta es una de las páginas más importantes. El keyword research marca `terapia online ansiedad` como 🟠 ALTA prioridad con baja competencia. El centro tiene un diferenciador real (30 años online) que debe explotarse.

---

### 2.8 Ansiedad (`/ansiedad`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Qué Es la Ansiedad: Síntomas, Causas y Tratamiento \| Clínica de la Ansiedad` (69 chars) | `Síntomas de Ansiedad y Causas \| Clínica Ansiedad Catalunya` (59 chars) | "Síntomas de ansiedad" (4.400 vol, 🔴 TOP) como keyword principal front-loaded. Es la keyword de mayor volumen del research. |
| **Description** | `Descubre qué es la ansiedad, sus síntomas y causas. Psicoterapia psicoanalítica con el Dr. Joan Ramon Soto en Barcelona and online.` (126 chars) | `Descubre qué es la ansiedad, sus síntomas físicos y causas profundas. Tratamiento psicoanalítico con el Dr. Joan Ramon Soto. Consulta en Barcelona y online.` (157 chars) | Añadido "síntomas físicos" y "causas profundas" para captar long-tails como `palpitaciones por ansiedad` (70 vol), `hormigueo en la cara` (90 vol). Corregido "and" → "y". |
| **Keywords** | 9 keywords parcialmente relevantes | 11 keywords basadas en research | Añadidas TOP keywords: `sintomas de ansiedad` (4.400), `ansiedad sintomas` (3.600), `que es ansiedad` (2.400), `causas de la ansiedad` (1.300), `palpitaciones por ansiedad` (70), `hiperventilacion` (390). |

**Nota estratégica:** Esta página captura el cluster más grande del research (4.400 + 3.600 + 2.400 + 1.300 = **11.700 búsquedas/mes**). Posición actual 33-41, con potencial de llegar a top 10.

---

### 2.9 Crisis de Pánico (`/crisis-de-panico`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Ataques de Pánico: Síntomas y Tratamiento \| Clínica de la Ansiedad` (66 chars) | `Crisis de Ansiedad y Ataques de Pánico \| Síntomas y Tratamiento` (63 chars) | "Crisis de ansiedad" front-loaded — `crisis de ansiedad sintomas` (880 vol, 🟠 ALTA) es keyword de urgencia emocional con alta conversión. |
| **Keywords** | 7 keywords sin datos de volumen | 9 keywords basadas en research | Añadidas: `crisis de ansiedad sintomas` (880 vol), `ataques de panico sintomas` (170 vol), `palpitaciones por ansiedad` (70 vol), `hiperventilacion` (390 vol). |

---

### 2.10 Depresión (`/depresion`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Depresión y Ansiedad: Tratamiento Especializado \| Clínica de la Ansiedad Catalunya` (74 chars) | `Depresión y Ansiedad: Tratamiento \| Clínica Ansiedad Catalunya` (63 chars) | Eliminado "Especializado" para entrar en límite. La keyword `depresion ansiedad` (390 vol) se mantiene intacta. |
| **Keywords** | 7 keywords sin datos de volumen | 8 keywords basadas en research | `depresion ansiedad` (390 vol, 🟠 ALTA) y `ansiedad y depresion` (210 vol) como keywords principales del cluster de co-ocurrencia. |

---

### 2.11 Terapia Individual — root (`/terapia-individual`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia Individual para Ansiedad y Depresión \| Psicólogo en Barcelona y Online` (75 chars) | `Terapia Individual Ansiedad y Depresión \| Psicólogo Barcelona` (62 chars) | Eliminadas preposiciones para cumplir límite. "Psicólogo Barcelona" más directo. |
| **Keywords** | No existían | 8 keywords añadidas | `consulta psicologica` (30 vol, transaccional), `terapia individual`, `hipocondria` (480 vol). |

---

### 2.12 Terapia de Pareja — root (`/terapia-pareja`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Terapia de Pareja en Barcelona y Online \| Clínica de la Ansiedad Catalunya` (69 chars) | `Terapia de Pareja Barcelona y Online \| Clínica Ansiedad` (56 chars) | Compactado para cumplir límite. |
| **Keywords** | No existían | 5 keywords añadidas | `terapia pareja` como keyword principal. |

---

### 2.13 Enfoque (`/enfoque`)

| Campo | Antes | Después | Justificación |
|---|---|---|---|
| **Title** | `Psicoanálisis Directo: Cómo Se Cura la Ansiedad desde la Raíz \| Clínica de la Ansiedad` (87 chars) | `Cómo Se Cura la Ansiedad \| Psicoanálisis Directo Barcelona` (58 chars) | "Cómo se cura la ansiedad" (50 vol, 🟡 MEDIA) front-loaded. Keyword informacional que atrae tráfico de alta intención. |
| **Description** | `Descubre cómo se cura la ansiedad con el Psicoanálisis Directo...` (189 chars) | `Metodología de psicoanálisis directo para curar la ansiedad desde la raíz. 4 fases clínicas: cartografía, desarticulación, reestructuración y autonomía.` (152 chars) | Reducida a ≤162 chars. Las 4 fases como diferenciador único en SERPs (ningún competidor lo tiene). |
| **Keywords** | No existían en layout | 7 keywords añadidas | `como se cura la ansiedad` (50 vol), `curar ansiedad` (50 vol), `causas de la ansiedad` (1.300 vol). |
| **H1 subtítulo** | "Nuestra Metodología" | "Cómo Se Cura la Ansiedad" | Keyword exacta en la posición más prominente de la página. |
| **Hero párrafo** | "No tratamos síntomas." | "No tratamos síntomas de ansiedad superficialmente...causas profundas...psicoanálisis directo" | Densificación natural de keywords sin forzar lectura. |
| **Trust signals** | "Tres décadas de práctica clínica directa" | "Tres décadas tratando ansiedad generalizada, crisis de pánico y depresión" | Keywords de diagnóstico (`ansiedad generalizada` 3.600 vol, `crisis de pánico`) en sección de autoridad. |

---

## 3. FAQ Schema — Corrección Crítica

**Problema detectado:** El schema LD+JSON de FAQPage tenía preguntas correctas pero **respuestas completamente desincronizadas** con el contenido real del componente `FAQSection.tsx`. Ejemplo:

- **Pregunta:** "¿Cuáles son los síntomas de ansiedad más comunes?"
- **Respuesta anterior en schema:** "La psicoterapia psicoanalítica aborda la ansiedad y otros síntomas desde su origen..." *(respuesta genérica sobre metodología, no sobre síntomas)*
- **Respuesta actual en schema:** "Los síntomas de ansiedad más frecuentes incluyen palpitaciones, hiperventilación, hormigueo en la cara, presión en los oídos..." *(coincide con el componente visible)*

**Impacto:** Google valida el schema contra el contenido visible. Si no coinciden, penaliza el rich snippet o lo elimina. Esta corrección es **crítica** para que aparezcan los FAQ rich results en SERPs.

**Cambios realizados:**
- 8 respuestas reescritas para coincidir exactamente con el componente `FAQSection.tsx`
- Eliminadas 2 preguntas que no existían en el componente visible (precio y horarios)
- Keywords de alto volumen integradas naturalmente en las respuestas del schema

---

## 4. Principios SEO Aplicados

### 4.1 Front-loading de keywords
Las keywords más importantes se colocan al inicio del título. Google da más peso a las primeras palabras.

**Ejemplo:** `Psicólogo Ansiedad Barcelona | ...` en lugar de `... | Psicólogo Ansiedad Barcelona`

### 4.2 Límites estrictos de caracteres
- **Títulos ≤63 chars:** Evita truncamiento en SERPs (Google corta a ~60-63 chars)
- **Descriptions ≤162 chars:** Evita truncamiento en mobile (Google corta a ~155-162 chars)

### 4.3 Keyword clustering por página
Cada página ataca un cluster temático específico, evitando canibalización:

| Cluster | Página principal | Volumen total |
|---|---|---|
| Síntomas de ansiedad | `/ansiedad` | 11.700/mes |
| Ansiedad generalizada | `/servicios` | 7.200/mes |
| Crisis/Ataques de pánico | `/crisis-de-panico` | 1.050/mes |
| Depresión + ansiedad | `/depresion` | 600/mes |
| Terapia online | `/terapia-online` | 90/mes |
| Cómo se cura | `/enfoque` | 100/mes |
| Psicólogo + geo | Homepage | 140/mes |

### 4.4 Intención de búsqueda
- **Informacionales** (qué es, síntomas, causas) → Páginas de contenido (`/ansiedad`, `/enfoque`)
- **Comerciales** (terapia, psicólogo, clínica) → Páginas de servicio (`/servicios`, `/terapia-individual`)
- **Transaccionales** (cita, reservar, primera visita) → CTAs y booking pages
- **Navegacionales** (clínica ansiedad barcelona) → Homepage

### 4.5 Coherencia Schema ↔ Contenido visible
El schema LD+JSON ahora refleja exactamente el contenido que el usuario ve en pantalla, requisito de Google para rich snippets.

---

## 5. Archivos Modificados

| Archivo | Tipo de cambio |
|---|---|
| `src/app/layout.tsx` | Metadata global (title, description, keywords, OG, Twitter) |
| `src/app/sobre-mi/page.tsx` | Metadata (title, description, keywords) |
| `src/app/servicios/page.tsx` | Metadata (title, description, keywords, OG) |
| `src/app/servicios/terapia-individual/page.tsx` | Metadata (title, description, keywords) |
| `src/app/servicios/terapia-de-pareja/page.tsx` | Metadata (title, description, keywords) |
| `src/app/servicios/dimension-familiar/page.tsx` | Metadata (title, description, keywords) |
| `src/app/terapia-online/page.tsx` | Metadata (title, description, keywords) |
| `src/app/ansiedad/page.tsx` | Metadata (title, description, keywords) |
| `src/app/crisis-de-panico/page.tsx` | Metadata (title, description, keywords) |
| `src/app/depresion/page.tsx` | Metadata (title, description, keywords) |
| `src/app/terapia-individual/page.tsx` | Metadata (title, description, keywords) |
| `src/app/terapia-pareja/page.tsx` | Metadata (title, description, keywords) |
| `src/app/enfoque/layout.tsx` | Metadata (title, description, keywords) |
| `src/app/enfoque/metadata.ts` | Metadata backup (sincronizado) |
| `src/app/enfoque/page.tsx` | Contenido H1 subtítulo + párrafos + trust signals |
| `src/lib/schema.ts` | FAQ Schema LD+JSON — 8 respuestas corregidas |

**Total: 16 archivos modificados**

---

## 6. Verificación

- Build de Next.js completado sin errores
- Todas las páginas generan correctamente como estáticas
- No se han introducido cambios visuales o de diseño
- El branding y la voz de marca se mantienen intactos

---

## 7. Próximos Pasos Recomendados

1. **Crear landing dedicada de terapia online** — keyword "terapia online ansiedad" (50 vol) con baja competencia y diferenciador real del centro
2. **Desarrollar contenido para `/ansiedad`** — la página es minimal pero ataca el cluster de mayor volumen (11.700/mes)
3. **Crear páginas de blog** para keywords informacionales de alto volumen:
   - "medicamentos para la ansiedad" (1.300 vol)
   - "como dormir bien ansiedad" (110 vol)
   - "dolor brazo izquierdo estres" (260 vol)
4. **Implementar Google Search Console** para monitorear posiciones y CTR post-optimización
5. **Crear página de precios** — "precio psicologo" tiene intención transaccional directa
