export const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Clínica de la Ansiedad Catalunya",
    "alternateName": "Clínica de l'Ansietat Catalunya",
    "founder": {
        "@type": "Person",
        "name": "Joan Ramon Soto",
        "jobTitle": "Psicólogo especialista en ansiedad",
        "knowsAbout": ["Síntomas de ansiedad", "Trastorno de ansiedad generalizada", "Psicoterapia psicoanalítica", "Terapia online ansiedad", "Depresión y ansiedad", "Crisis de pánico", "Trastorno obsesivo compulsivo", "Fobia social", "Hipocondría", "Agorafobia"]
    },
    "foundingDate": "1993",
    "medicalSpecialty": "Psychiatry",
    "description": "Clínica especializada en el tratamiento de los síntomas de ansiedad, trastorno de ansiedad generalizada, depresión, TOC, crisis de pánico y fobia social desde 1993. Consulta psicológica presencial en Barcelona (Maresme) y terapia online para toda España.",
    "url": "https://clinicadelansiedad.com",
    "telephone": "+34629794365",
    "email": "joanramonsoto@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ronda Dr. Anglès 74",
        "addressLocality": "Canet de Mar",
        "postalCode": "08360",
        "addressRegion": "Barcelona",
        "addressCountry": "ES"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.5908,
        "longitude": 2.5771
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "reviewCount": "130"
    },
    "hasMap": "https://maps.google.com/?q=Ronda+Dr+Anglès+74+Canet+de+Mar",
    "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
    }],
    "availableService": [
        { "@type": "MedicalTherapy", "name": "Tratamiento de síntomas de ansiedad" },
        { "@type": "MedicalTherapy", "name": "Tratamiento del trastorno de ansiedad generalizada" },
        { "@type": "MedicalTherapy", "name": "Tratamiento de depresión y ansiedad" },
        { "@type": "MedicalTherapy", "name": "Tratamiento de crisis de pánico y ataques de pánico" },
        { "@type": "MedicalTherapy", "name": "Tratamiento del trastorno obsesivo compulsivo (TOC)" },
        { "@type": "MedicalTherapy", "name": "Tratamiento de fobia social y agorafobia" },
        { "@type": "MedicalTherapy", "name": "Tratamiento de hipocondría" },
        { "@type": "MedicalTherapy", "name": "Terapia individual psicoanalítica" },
        { "@type": "MedicalTherapy", "name": "Terapia de pareja" },
        { "@type": "MedicalTherapy", "name": "Terapia online para la ansiedad" },
        { "@type": "MedicalTherapy", "name": "Terapia familiar" }
    ],
    "areaServed": [
        { "@type": "City", "name": "Barcelona" },
        { "@type": "City", "name": "Girona" },
        { "@type": "City", "name": "Tarragona" },
        { "@type": "City", "name": "Lleida" },
        { "@type": "AdministrativeArea", "name": "Catalunya" },
        { "@type": "Country", "name": "España" }
    ],
    "sameAs": [
        "https://www.google.com/maps?cid=TU_CID_DE_GOOGLE_MAPS"
    ]
};

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuáles son los síntomas de ansiedad más comunes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los síntomas de ansiedad más frecuentes incluyen palpitaciones por ansiedad, hiperventilación, hormigueo en la cara y extremidades, presión en los oídos, necesidad de respirar profundo, dolor en el brazo izquierdo por estrés, pinchazos en el cuerpo, latidos en el estómago e insomnio. Si experimentas crisis de ansiedad con estos síntomas físicos, es importante buscar ayuda profesional."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué es el trastorno de ansiedad generalizada y cómo se trata?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El trastorno de ansiedad generalizada se caracteriza por preocupación excesiva y constante, tensión muscular, dificultad para dormir y síntomas físicos persistentes. En nuestra clínica tratamos la ansiedad generalizada desde sus causas profundas mediante psicoterapia psicoanalítica, logrando cambios estructurales duraderos que van más allá de la simple supresión del síntoma."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo se cura la ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La ansiedad se cura abordando sus causas de raíz, no solo los síntomas. Nuestro enfoque psicoanalítico directo identifica los conflictos inconscientes que generan la angustia y trabaja para desactivarlos. A diferencia de terapias que ofrecen técnicas de manejo superficial, buscamos un cambio estructural que prevenga recaídas y otorgue autonomía emocional al paciente."
            }
        },
        {
            "@type": "Question",
            "name": "¿La terapia online para la ansiedad es igual de efectiva que la presencial?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, la terapia online para la ansiedad tiene una efectividad comparable a la presencial. Llevamos más de 30 años ofreciendo terapia online y la relación terapéutica se construye de igual manera. Es especialmente útil para personas con agorafobia, fobia social o que viven fuera de Barcelona y Catalunya."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué diferencia hay entre ansiedad y depresión?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La ansiedad y la depresión frecuentemente coexisten. La ansiedad se manifiesta con miedo, preocupación excesiva y síntomas físicos como palpitaciones, mientras que la depresión se caracteriza por tristeza profunda, apatía y pérdida de interés. En nuestra clínica tratamos ambas condiciones de forma integral, ya que comparten causas profundas comunes."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué ocurre en la primera visita o consulta psicológica?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En la primera visita realizamos una entrevista clínica profunda para comprender tu historia, identificar los síntomas de ansiedad y sus causas, y evaluar si padeces ansiedad generalizada, crisis de pánico, TOC, fobia social u otro trastorno. No usamos tests mecánicos sino una conversación clínica que permite diseñar un tratamiento personalizado."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tratáis trastorno obsesivo compulsivo (TOC), fobia social e hipocondría?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, tratamos el trastorno obsesivo compulsivo (TOC), la fobia social, la hipocondría, la agorafobia, el estrés postraumático y la fobia de impulsión. Todos estos trastornos están relacionados con la ansiedad y requieren un abordaje especializado que trate el origen del sufrimiento."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo puedo ayudar a alguien con ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para ayudar a alguien con ansiedad: escucha sin juzgar, no minimices sus síntomas, acompáñale sin presionar y anímale a buscar ayuda profesional. Evita frases como 'cálmate' o 'no pasa nada'. Si la persona sufre crisis de ansiedad o ataques de pánico, mantén la calma y ayúdale a respirar. En nuestra clínica también orientamos a familiares."
            }
        }
    ]
};

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joan Ramon Soto",
    "jobTitle": "Psicólogo especialista en ansiedad",
    "worksFor": {
        "@type": "MedicalClinic",
        "name": "Clínica de la Ansiedad Catalunya"
    },
    "knowsAbout": ["Síntomas de ansiedad", "Trastorno de ansiedad generalizada", "Psicoterapia psicoanalítica", "Terapia online ansiedad", "Depresión y ansiedad", "Crisis de pánico", "Trastorno obsesivo compulsivo", "Fobia social", "Hipocondría", "Agorafobia", "Estrés postraumático", "Ludopatía"],
    "hasCredential": "Fundador y director clínico desde 1993. Doctorado en Psicología Psicoanalítica.",
    "url": "https://clinicadelansiedad.com"
};
