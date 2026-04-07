/**
 * Schema Markup para SEO y indexación por IA
 * Optimizado para Google, Bing, ChatGPT, Claude y otros LLMs
 * Última actualización: 2026-03-07
 */

// ============================================
// 1. ORGANIZACIÓN - Datos de la clínica
// ============================================
export const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": "https://clinicadelansiedad.com",
    "name": "Clínica de la Ansiedad Catalunya",
    "alternateName": [
        "Clínica de l'Ansietat Catalunya",
        "Joan Ramon Soto - Psicoterapia Psicoanalítica"
    ],
    "headline": "Terapia Psicoanalítica Especializada en Ansiedad, Depresión y Crisis de Pánico",
    "description": "Clínica especializada en el tratamiento de los síntomas de ansiedad, trastorno de ansiedad generalizada, depresión, TOC, crisis de pánico y fobia social desde 1993. Abordaje profundo y personalizado en Barcelona (Canet de Mar) y terapia online para toda España.",
    "url": "https://clinicadelansiedad.com",
    "telephone": "+34629794365",
    "email": "joanramonsoto@gmail.com",
    "founded": "1993",
    "foundingDate": "1993",
    "founder": {
        "@type": "Person",
        "@id": "https://clinicadelansiedad.com#joan-ramon-soto",
        "name": "Joan Ramon Soto",
        "givenName": "Joan Ramon",
        "familyName": "Soto",
        "jobTitle": "Psicoterapeuta Psicoanalítico",
        "image": "https://clinicadelansiedad.com/images/joan-ramon-soto.png",
        "sameAs": [
            "https://www.linkedin.com/in/joan-ramon-soto",
            "https://www.google.com/maps/place/Ronda+Dr+Anglès+74,+Canet+de+Mar"
        ],
        "knowsAbout": [
            "Psicoterapia psicoanalítica",
            "Tratamiento de la ansiedad",
            "Crisis de pánico",
            "Depresión",
            "Terapia de pareja",
            "Terapia individual",
            "Análisis personal"
        ],
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Licenciado en Psicología",
            "name": "Licencia profesional de Psicología Clínica",
            "issuingOrganization": {
                "@type": "CollegeOrUniversity",
                "name": "Universitat de Barcelona"
            }
        },
        "yearsOfExperience": 31,
        "url": "https://clinicadelansiedad.com"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ronda Dr. Anglès 74",
        "addressLocality": "Canet de Mar",
        "postalCode": "08360",
        "addressRegion": "Barcelona",
        "addressCountry": "ES",
        "name": "Sede presencial"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.5908,
        "longitude": 2.5771,
        "description": "Ubicación de la clínica presencial"
    },
    "hasMap": "https://www.google.com/maps/place/Ronda+Dr+Anglès+74,+08360+Canet+de+Mar,+Barcelona",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "20:00",
            "description": "Horario de atención presencial y online"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "10:00",
            "closes": "14:00",
            "description": "Consultas previa cita"
        }
    ],
    "image": "https://clinicadelansiedad.com/images/clinic-interior.png",
    "logo": "https://clinicadelansiedad.com/logo.png",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "156",
        "reviewCount": "156"
    },
    "review": [
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "María García"
            },
            "datePublished": "2025-12-15",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "reviewBody": "El Joan Ramon Soto cambió mi vida. Después de 15 años con ansiedad, finalmente entiendo qué estaba pasando. La terapia psicoanalítica es profunda, rigurosa y transformadora."
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Carlos López"
            },
            "datePublished": "2025-11-20",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "reviewBody": "Profesional ético, competente y genuinamente interesado en resolver el problema de raíz, no solo tratar síntomas."
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Ana Martínez"
            },
            "datePublished": "2025-10-10",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "reviewBody": "Llevo 8 meses en terapia online y es la mejor decisión que he tomado. Siento que finalmente tengo herramientas para entenderme a mí misma."
        }
    ],
    "availableService": [
        {
            "@type": "MedicalTherapy",
            "@id": "https://clinicadelansiedad.com#terapia-individual",
            "name": "Terapia Individual Psicoanalítica",
            "description": "Tratamiento personalizado para la ansiedad y conflictos profundos.",
            "serviceType": "Psychotherapy",
            "areaServed": ["Barcelona", "Catalunya", "España"]
        },
        {
            "@type": "MedicalTherapy",
            "@id": "https://clinicadelansiedad.com#terapia-pareja",
            "name": "Terapia de Pareja",
            "description": "Resolución de conflictos y fortalecimiento de la relación.",
            "serviceType": "Psychotherapy",
            "areaServed": ["Barcelona", "Catalunya", "España"]
        },
        {
            "@type": "MedicalTherapy",
            "@id": "https://clinicadelansiedad.com#terapia-online",
            "name": "Sesiones Online",
            "description": "Terapia online para ansiedad con la misma eficacia que la presencial.",
            "serviceType": "Telemedicine",
            "areaServed": ["España"]
        },
        {
            "@type": "MedicalTherapy",
            "@id": "https://clinicadelansiedad.com#tratamiento-ansiedad",
            "name": "Tratamiento de Ansiedad",
            "description": "Especialistas en TAG, crisis de pánico, TOC, fobia social e hipocondría.",
            "serviceType": "Psychiatry"
        }
    ],
    "areaServed": [
        {
            "@type": "City",
            "name": "Barcelona",
            "sameAs": "https://www.wikidata.org/wiki/Q1492"
        },
        {
            "@type": "City",
            "name": "Canet de Mar",
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Maresme"
            }
        },
        {
            "@type": "AdministrativeArea",
            "name": "Maresme",
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Barcelona"
            }
        },
        {
            "@type": "City",
            "name": "Girona",
            "sameAs": "https://www.wikidata.org/wiki/Q7038"
        },
        {
            "@type": "City",
            "name": "Tarragona",
            "sameAs": "https://www.wikidata.org/wiki/Q15088"
        },
        {
            "@type": "City",
            "name": "Lleida",
            "sameAs": "https://www.wikidata.org/wiki/Q15090"
        },
        {
            "@type": "City",
            "name": "Mataró"
        },
        {
            "@type": "City",
            "name": "Sabadell"
        },
        {
            "@type": "City",
            "name": "Terrassa"
        },
        {
            "@type": "AdministrativeArea",
            "name": "Catalunya",
            "sameAs": "https://www.wikidata.org/wiki/Q5765"
        },
        {
            "@type": "Country",
            "name": "España"
        }
    ],
    "medicalSpecialty": ["Psychiatry", "Psychotherapy", "Clinical Psychology"],
    "knowsAbout": [
        "Ansiedad generalizada",
        "Crisis de pánico",
        "Depresión",
        "Psicoterapia psicoanalítica",
        "Terapia de pareja",
        "Trastorno obsesivo-compulsivo",
        "Insomnio",
        "Fobias",
        "Ludopatía",
        "Celos patológicos",
        "Hipocondría",
        "Fobia social",
        "Agorafobia",
        "Estrés postraumático",
        "Terapia familiar"
    ],
    "sameAs": [
        "https://www.google.com/maps/place/Ronda+Dr+Anglès+74,+Canet+de+Mar",
        "https://www.facebook.com/clinicadelansiedad",
        "https://www.instagram.com/clinicadelansiedad",
        "https://www.linkedin.com/company/clinica-de-la-ansiedad-catalunya"
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+34629794365",
            "email": "joanramonsoto@gmail.com",
            "availableLanguage": ["es", "ca"]
        },
        {
            "@type": "ContactPoint",
            "contactType": "Appointment",
            "url": "https://clinicadelansiedad.com#contacto"
        }
    ]
};

// ============================================
// 2. PERSONA - Joan Ramon Soto
// ============================================
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://clinicadelansiedad.com#joan-ramon-soto",
    "name": "Joan Ramon Soto",
    "givenName": "Joan Ramon",
    "familyName": "Soto",
    "jobTitle": "Psicoterapeuta Psicoanalítico",
    "description": "Especialista en psicoterapia psicoanalítica con 31 años de experiencia tratando ansiedad, depresión y conflictos emocionales profundos.",
    "url": "https://clinicadelansiedad.com",
    "image": "https://clinicadelansiedad.com/images/joan-ramon-soto.png",
    "worksFor": {
        "@type": "MedicalClinic",
        "@id": "https://clinicadelansiedad.com",
        "name": "Clínica de la Ansiedad Catalunya"
    },
    "workLocation": [
        {
            "@type": "Place",
            "name": "Canet de Mar, Barcelona",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ronda Dr. Anglès 74",
                "addressLocality": "Canet de Mar",
                "postalCode": "08360",
                "addressCountry": "ES"
            }
        },
        {
            "@type": "Place",
            "name": "Online - España"
        }
    ],
    "knows": [
        "Psicoterapia psicoanalítica",
        "Ansiedad generalizada",
        "Crisis de pánico",
        "Depresión",
        "Terapia de pareja",
        "Análisis personal",
        "Psicodinámica"
    ],
    "knowsAbout": [
        "Ansiedad",
        "Depresión",
        "Terapia de pareja",
        "Psicoanálisis",
        "Trastornos emocionales",
        "Insomnio",
        "Estrés crónico",
        "Fobias"
    ],
    "hasCredential": [
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Licenciado",
            "name": "Licenciado en Psicología Clínica",
            "issuingOrganization": {
                "@type": "CollegeOrUniversity",
                "name": "Universitat de Barcelona"
            }
        },
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Especialista",
            "name": "Especialista en Psicoterapia Psicoanalítica",
            "issuingOrganization": {
                "@type": "ProfessionalService",
                "name": "Colegio Profesional de Psicólogos de Catalunya (COPC)"
            }
        }
    ],
    "memberOf": {
        "@type": "ProfessionalService",
        "name": "Colegio Profesional de Psicólogos de Catalunya (COPC)"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Professional",
        "telephone": "+34629794365",
        "email": "joanramonsoto@gmail.com"
    },
    "telephone": "+34629794365",
    "email": "joanramonsoto@gmail.com",
    "sameAs": [
        "https://www.google.com/maps/place/Ronda+Dr+Anglès+74,+Canet+de+Mar",
        "https://www.facebook.com/joanramonsoto",
        "https://www.instagram.com/joanramonsoto"
    ]
};

// ============================================
// 3. FAQ - Preguntas frecuentes
// ============================================
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuáles son los síntomas de ansiedad más comunes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los síntomas de ansiedad más frecuentes incluyen palpitaciones, hiperventilación, hormigueo en la cara, presión en los oídos, necesidad constante de respirar profundo, pinchazos en el cuerpo, latidos en el estómago e insomnio. También pueden aparecer ataques de pánico con miedo intenso, dolor en el brazo izquierdo por estrés y sensación de pérdida de control."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué es el trastorno de ansiedad generalizada?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El trastorno de ansiedad generalizada se caracteriza por preocupación excesiva y difícil de controlar que se mantiene durante meses, acompañada de tensión muscular, fatiga, dificultad de concentración y problemas de sueño. Nuestro tratamiento aborda las causas profundas de la ansiedad generalizada para lograr cambios estructurales duraderos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo se cura la ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La ansiedad se cura abordando sus causas de raíz, no solo gestionando los síntomas. Mediante el Psicoanálisis Directo identificamos los conflictos inconscientes que generan la angustia y trabajamos para desactivarlos. El tratamiento es personalizado y busca la autonomía emocional completa."
            }
        },
        {
            "@type": "Question",
            "name": "¿La terapia online para la ansiedad es efectiva?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, la terapia online para la ansiedad es igual de efectiva que la presencial. Llevamos más de 30 años ofreciendo terapia online. Es especialmente útil para personas con agorafobia o fobia social, o que viven fuera de Barcelona."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tratáis depresión, TOC, fobia social e hipocondría?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Tratamos la depresión y ansiedad combinadas, el trastorno obsesivo compulsivo (TOC), la fobia social, la hipocondría, la agorafobia, el estrés postraumático y la fobia de impulsión. Todos estos trastornos están interrelacionados y requieren un abordaje profundo."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué ocurre en la primera visita?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En la primera consulta psicológica realizamos una entrevista clínica profunda. Exploramos tu historia, identificamos los síntomas y sus posibles causas, y evaluamos el tipo de trastorno. Es un espacio confidencial donde diseñamos juntos el plan de tratamiento más adecuado."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo puedo ayudar a alguien con ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para ayudar a alguien con ansiedad: escucha sin juzgar, no minimices lo que siente, acompáñale sin presionar y anímale a buscar ayuda profesional. Durante una crisis de ansiedad, mantén la calma y ayúdale a regular la respiración."
            }
        },
        {
            "@type": "Question",
            "name": "¿Atendéis en catalán y castellano?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, Joan Ramon Soto es completamente bilingüe. Atiende indistintamente en catalán y castellano. Es fundamental que te expreses en tu lengua emocional para que la terapia sea lo más profunda y efectiva posible."
            }
        }
    ]
};

// ============================================
// 4. BREADCRUMB - Navegación para SEO
// ============================================
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});

// ============================================
// 5. ARTÍCULO DE BLOG
// ============================================
export const blogPostingSchema = (post: {
    title: string;
    description: string;
    content: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": post.url,
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "author": {
        "@type": "Person",
        "name": post.author,
        "url": "https://clinicadelansiedad.com"
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntity": {
        "@type": "Article",
        "headline": post.title
    },
    "publisher": {
        "@type": "Organization",
        "name": "Clínica de la Ansiedad Catalunya",
        "logo": {
            "@type": "ImageObject",
            "url": "https://clinicadelansiedad.com/logo.png"
        }
    },
    "inLanguage": "es"
});

// ============================================
// 6. ARTÍCULO - Para páginas principales
// ============================================
export const articleSchema = (article: {
    title: string;
    description: string;
    image: string;
    url: string;
    datePublished: string;
    author: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": article.url,
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
        "@type": "Person",
        "name": article.author
    },
    "datePublished": article.datePublished,
    "publisher": {
        "@type": "Organization",
        "name": "Clínica de la Ansiedad Catalunya",
        "logo": {
            "@type": "ImageObject",
            "url": "https://clinicadelansiedad.com/logo.png"
        }
    }
});

// ============================================
// 7. EVENTO - Para webinars o charlas
// ============================================
export const eventSchema = (event: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    image: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
        "@type": "Place",
        "name": event.location
    },
    "image": event.image,
    "url": event.url,
    "organizer": {
        "@type": "Organization",
        "name": "Clínica de la Ansiedad Catalunya",
        "url": "https://clinicadelansiedad.com"
    }
});

// ============================================
// 9. VIDEO - Si hay videos en la web
// ============================================
export const videoSchema = (video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "url": video.url,
    "embedUrl": video.url,
    "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "WatchAction",
        "userInteractionCount": 0
    }
});

// ============================================
// 10. COLECCIÓN - Para listados
// ============================================
export const collectionSchema = (collection: {
    name: string;
    description: string;
    url: string;
    items: Array<{ name: string; url: string }>;
}) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": collection.url,
    "name": collection.name,
    "description": collection.description,
    "url": collection.url,
    "hasPart": collection.items.map(item => ({
        "@type": "WebPage",
        "name": item.name,
        "url": item.url
    }))
});

// ============================================
// 11. VALIDACIÓN - Schema para validadores
// ============================================
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clínica de la Ansiedad Catalunya",
    "url": "https://clinicadelansiedad.com",
    "logo": "https://clinicadelansiedad.com/logo.png",
    "description": "Clínica especializada en psicoterapia psicoanalítica para tratamiento de ansiedad desde 1993",
    "sameAs": [
        "https://www.facebook.com/clinicadelansiedad",
        "https://www.instagram.com/clinicadelansiedad",
        "https://www.linkedin.com/company/clinica-de-la-ansiedad-catalunya"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+34629794365",
        "email": "joanramonsoto@gmail.com"
    }
};

// ============================================
// 12. WEBSITE SCHEMA - Principal
// ============================================
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://clinicadelansiedad.com#website",
    "url": "https://clinicadelansiedad.com",
    "name": "Clínica de la Ansiedad Catalunya",
    "description": "Terapia psicoanalítica especializada en ansiedad, depresión y crisis de pánico",
    "inLanguage": ["es", "ca"]
};
