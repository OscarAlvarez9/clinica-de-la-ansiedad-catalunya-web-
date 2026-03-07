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
        "Dr. Joan Ramon Soto - Psicoterapia Psicoanalítica"
    ],
    "headline": "Terapia Psicoanalítica Especializada en Ansiedad, Depresión y Crisis de Pánico",
    "description": "Clínica de psicoterapia psicoanalítica especializada en el tratamiento de la ansiedad desde 1993. Abordaje profundo y personalizado. Modalidades presencial en Canet de Mar (Maresme, Barcelona) y online para toda España.",
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
            "https://www.google.com/maps/contrib/tuId"
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
            "reviewBody": "El Dr. Joan Ramon Soto cambió mi vida. Después de 15 años con ansiedad, finalmente entiendo qué estaba pasando. La terapia psicoanalítica es profunda, rigurosa y transformadora."
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
            "@type": "MedicalBusiness",
            "@id": "https://clinicadelansiedad.com#terapia-individual",
            "name": "Terapia Individual Psicoanalítica",
            "description": "Tratamiento personalizado mediante sesiones individuales semanales para trabajar los conflictos emocionales profundos.",
            "serviceType": "Psychotherapy",
            "areaServed": ["Barcelona", "Catalunya", "España"],
            "provider": {
                "@type": "Person",
                "name": "Joan Ramon Soto"
            }
        },
        {
            "@type": "MedicalBusiness",
            "@id": "https://clinicadelansiedad.com#terapia-pareja",
            "name": "Terapia de Pareja",
            "description": "Sesiones conjuntas para resolver conflictos, mejorar la comunicación y fortalecer la relación desde una perspectiva psicoanalítica.",
            "serviceType": "Psychotherapy",
            "areaServed": ["Barcelona", "Catalunya", "España"]
        },
        {
            "@type": "MedicalBusiness",
            "@id": "https://clinicadelansiedad.com#terapia-online",
            "name": "Sesiones Online",
            "description": "Terapia psicoanalítica a través de videollamada segura para mayor flexibilidad y accesibilidad geográfica.",
            "serviceType": "Telemedicine",
            "areaServed": ["España"],
            "availableLanguage": ["es", "ca"]
        },
        {
            "@type": "MedicalBusiness",
            "@id": "https://clinicadelansiedad.com#tratamiento-ansiedad",
            "name": "Tratamiento Especializado de Ansiedad",
            "description": "Abordaje psicoanalítico para resolver las causas profundas de la ansiedad generalizada, crisis de pánico y angustia crónica.",
            "serviceType": "Psychiatry",
            "medicalSpecialty": "Psychiatry"
        },
        {
            "@type": "MedicalBusiness",
            "@id": "https://clinicadelansiedad.com#tratamiento-depresion",
            "name": "Tratamiento de la Depresión",
            "description": "Terapia integral para depresión desde sus raíces emocionales, combinando el análisis personal con estrategias prácticas.",
            "serviceType": "Psychiatry"
        },
        {
            "@type": "MedicalBusiness",
            "@id": "https://clinicadelansiedad.com#primera-consulta",
            "name": "Primera Consulta de Valoración",
            "description": "Sesión inicial para evaluar la situación, clarificar la demanda y determinar si la terapia psicoanalítica es apropiada.",
            "serviceType": "Consultation",
            "potentialAction": {
                "@type": "BuyAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://clinicadelansiedad.com#contacto",
                    "actionPlatform": ["DesktopWebPlatform", "MobileWebPlatform"]
                }
            }
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
            "name": "Canet de Mar"
        },
        {
            "@type": "City",
            "name": "Girona"
        },
        {
            "@type": "City",
            "name": "Tarragona"
        },
        {
            "@type": "City",
            "name": "Lleida"
        },
        {
            "@type": "AdministrativeArea",
            "name": "Catalunya"
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
        "Fobias"
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
// 2. PERSONA - Dr. Joan Ramon Soto
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
        "https://www.google.com/maps/contrib/tuId",
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
            "name": "¿Qué es la psicoterapia psicoanalítica y en qué se diferencia de otras terapias?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La psicoterapia psicoanalítica aborda la ansiedad y otros síntomas desde su origen e historia personal, no solo tratando síntomas superficialmente. Exploramos las causas profundas e inconscientes para lograr cambios duraderos y transformación genuina, a diferencia de terapias que se centran únicamente en técnicas de conducta."
            }
        },
        {
            "@type": "Question",
            "name": "¿La terapia online es igual de efectiva que la presencial?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, la efectividad es comparable. La base de la recuperación es la relación y el espacio terapéutico entre analista y paciente, que se logra con igual efectividad en una conexión online estable, con la ventaja adicional de mayor flexibilidad geográfica y temporal."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo dura el tratamiento de la ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La duración es variable según cada caso. No aplicamos protocolos estándar cerrados, sino que trabajamos al ritmo necesario hasta lograr no solo aliviar síntomas, sino resolver verdaderamente el nudo emocional original. Algunos casos requieren meses, otros un año o más."
            }
        },
        {
            "@type": "Question",
            "name": "¿Atendéis en català y castellano?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, trabajamos indistintamente en catalán y castellano. Es esencial que cada paciente se exprese en su lengua materna o preferida para facilitar la máxima libertad de expresión y profundidad en la terapia."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo sé si la terapia psicoanalítica es para mí?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Es apropiada si sientes que la ansiedad se repite a pesar de tus esfuerzos y deseas entender profundamente qué ocurre, yendo más allá de técnicas básicas de relajación. Si buscas cambio genuino y duradero, es la opción adecuada."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué sucede en la primera consulta?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La primera consulta sirve para conocernos, evaluar tu situación y comprender tu demanda real. Evaluamos la viabilidad del tratamiento, aclaramos dudas y establecemos el encuadre terapéutico apropiado para tu caso."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tratáis solo ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tratamos el sufrimiento psíquico de forma integral. Aunque la ansiedad es frecuentemente la puerta de entrada, abordamos depresión, fobias, crisis de pánico, pensamientos obsesivos, problemas de pareja y conflictos recurrentes vitales."
            }
        },
        {
            "@type": "Question",
            "name": "¿Atendéis solo en Catalunya o en toda España?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La sede presencial está en Canet de Mar (Maresme, Barcelona). Sin embargo, mediante terapia online atendemos a pacientes de cualquier punto de España, manteniendo la misma calidad y rigor clínico."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuál es el precio de las sesiones?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los precios varían según la modalidad (presencial u online) y pueden ajustarse según circunstancias personales. Para información específica, contacta directamente para que podamos ofrecerte opciones personalizadas."
            }
        },
        {
            "@type": "Question",
            "name": "¿Hay flexibilidad en horarios para terapia online?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, para terapia online existe mayor flexibilidad en horarios para adaptarse a diferentes zonas horarias y disponibilidades personales. Puedes consultar disponibilidad directamente."
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
// 7. BÚSQUEDA - Para página de búsqueda
// ============================================
export const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://clinicadelansiedad.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://clinicadelansiedad.com/buscar?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// ============================================
// 8. EVENTO - Para webinars o charlas
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
    "inLanguage": ["es", "ca"],
    "isPartOf": {
        "@type": "WebApplication",
        "name": "Clínica de la Ansiedad Catalunya"
    }
};
