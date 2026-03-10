/**
 * Componentes y hooks para inyectar Schema Markup
 * Uso: Importar en componentes y páginas Next.js
 */

import Script from 'next/script';
import { ReactNode } from 'react';

// ============================================
// COMPONENTE: Inyector de Schema JSON-LD
// ============================================
interface SchemaInjectorProps {
    schema: Record<string, any>;
    id?: string;
}

export function SchemaInjector({ schema, id = 'schema-generic' }: SchemaInjectorProps) {
    return (
        <Script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema, null, 2)
            }}
            strategy="afterInteractive"
        />
    );
}

// ============================================
// COMPONENTE: Múltiples Schemas
// ============================================
interface MultiSchemaProps {
    schemas: Array<{ schema: Record<string, any>; id: string }>;
}

export function MultiSchema({ schemas }: MultiSchemaProps) {
    return (
        <>
            {schemas.map(({ schema, id }) => (
                <SchemaInjector key={id} schema={schema} id={id} />
            ))}
        </>
    );
}

// ============================================
// HOOK: usePageSchema (Para metadata dinámica)
// ============================================
export function usePageSchema(type: 'article' | 'blog' | 'event' | 'faq' | 'service') {
    const schemas: Record<string, Record<string, any>> = {
        article: {
            "@context": "https://schema.org",
            "@type": "Article",
            "publisher": {
                "@type": "Organization",
                "name": "Clínica de la Ansiedad Catalunya"
            }
        },
        blog: {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Clínica de la Ansiedad"
        },
        event: {
            "@context": "https://schema.org",
            "@type": "Event",
            "organizer": {
                "@type": "Organization",
                "name": "Clínica de la Ansiedad Catalunya"
            }
        },
        faq: {
            "@context": "https://schema.org",
            "@type": "FAQPage"
        },
        service: {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness"
        }
    };

    return schemas[type] || schemas.article;
}

// ============================================
// FUNCIÓN: Generar Breadcrumb Schema
// ============================================
export function generateBreadcrumb(items: Array<{ name: string; path: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://clinicadelansiedad.com${item.path}`
        }))
    };
}

// ============================================
// FUNCIÓN: Validador de Schema
// ============================================
export function validateSchema(schema: Record<string, any>): boolean {
    try {
        // Verificar estructura básica
        if (!schema["@context"] || !schema["@type"]) {
            console.warn("Schema incompleto: falta @context o @type");
            return false;
        }

        // Verificar JSON válido
        JSON.stringify(schema);
        return true;
    } catch (error) {
        console.error("Error validando schema:", error);
        return false;
    }
}

// ============================================
// FUNCIÓN: Agregar review a schema
// ============================================
interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
}

export function addReviewToSchema(
    schema: Record<string, any>,
    reviews: Review[]
) {
    return {
        ...schema,
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
            },
            "reviewBody": review.text,
            "datePublished": review.date
        }))
    };
}

// ============================================
// FUNCIÓN: Rating agregado
// ============================================
export function updateAggregateRating(
    schema: Record<string, any>,
    ratingValue: number,
    reviewCount: number
) {
    return {
        ...schema,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue.toFixed(1),
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": reviewCount,
            "reviewCount": reviewCount
        }
    };
}

// ============================================
// COMPONENTE: Meta tags + Schema bundle
// ============================================
interface PageMetaProps {
    title: string;
    description: string;
    image?: string;
    url: string;
    schema: Record<string, any>;
    children?: ReactNode;
}

export function PageMetaWithSchema({
    title,
    description,
    image,
    url,
    schema,
    children
}: PageMetaProps) {
    return (
        <>
            <head>
                {/* Meta tags básicos */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {image && <meta property="og:image" content={image} />}
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

                {/* Twitter Cards */}
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {image && <meta name="twitter:image" content={image} />}

                {/* Schema */}
                <SchemaInjector schema={schema} />
            </head>
            {children}
        </>
    );
}

// ============================================
// FUNCIÓN: Schema para Página de Servicio
// ============================================
export function createServiceSchema(service: {
    name: string;
    description: string;
    serviceType: string;
    areaServed: string[];
    provider: string;
    image?: string;
    price?: string;
    availability?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "serviceType": service.serviceType,
        "provider": {
            "@type": "Person",
            "name": service.provider
        },
        "areaServed": service.areaServed.map(area => ({
            "@type": "City",
            "name": area
        })),
        ...(service.image && { "image": service.image }),
        ...(service.price && {
            "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": service.price
            }
        }),
        ...(service.availability && {
            "availability": service.availability
        })
    };
}

// ============================================
// FUNCIÓN: Schema para Profesional
// ============================================
export function createProfessionalSchema(professional: {
    name: string;
    title: string;
    specialties: string[];
    image?: string;
    email: string;
    phone: string;
    credentials?: string[];
    yearsOfExperience?: number;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": professional.name,
        "jobTitle": professional.title,
        "knowsAbout": professional.specialties,
        ...(professional.image && { "image": professional.image }),
        "contactPoint": {
            "@type": "ContactPoint",
            "email": professional.email,
            "telephone": professional.phone
        },
        ...(professional.credentials && {
            "hasCredential": professional.credentials.map(cred => ({
                "@type": "EducationalOccupationalCredential",
                "name": cred
            }))
        }),
        ...(professional.yearsOfExperience && {
            "yearsOfExperience": professional.yearsOfExperience
        })
    };
}

// ============================================
// FUNCIÓN: Convertir para LLMs (ChatGPT, Claude)
// ============================================
export function convertSchemaForAI(schema: Record<string, any>): string {
    /**
     * Convierte schema JSON-LD a un formato más amigable para LLMs
     * Útil para que ChatGPT, Claude y otros modelos entiendan mejor la web
     */
    return JSON.stringify(schema, null, 2);
}

// ============================================
// UTILIDADES DE DEBUG
// ============================================
export function logSchemaValidation(schema: Record<string, any>, label: string = "Schema") {
    const isValid = validateSchema(schema);
    console.log(`✓ ${label} ${isValid ? "válido" : "INVÁLIDO"}`);
    if (process.env.NODE_ENV === 'development') {
        console.log(JSON.stringify(schema, null, 2));
    }
    return isValid;
}

// ============================================
// BATCH: Inyectar múltiples schemas de una vez
// ============================================
export const SchemaBundle = {
    homepage: (schemas: Record<string, any>[]) =>
        schemas.map((s, i) => ({ schema: s, id: `schema-homepage-${i}` })),

    servicepage: (schemas: Record<string, any>[]) =>
        schemas.map((s, i) => ({ schema: s, id: `schema-service-${i}` })),

    blogpage: (schemas: Record<string, any>[]) =>
        schemas.map((s, i) => ({ schema: s, id: `schema-blog-${i}` }))
};
