export const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Clínica de la Ansiedad Catalunya",
    "alternateName": "Clínica de l'Ansietat Catalunya",
    "founder": {
        "@type": "Person",
        "name": "Joan Ramon Soto",
        "jobTitle": "Psicoterapeuta psicoanalítico",
        "knowsAbout": ["Ansiedad", "Psicoterapia psicoanalítica", "Terapia online", "Depresión", "Crisis de pánico"]
    },
    "foundingDate": "1993",
    "medicalSpecialty": "Psychiatry",
    "description": "Espacio de psicoterapia psicoanalítica especializado en el tratamiento de la ansiedad desde 1993. Atención presencial en Canet de Mar (Maresme, Barcelona) y terapia online para toda Catalunya y España.",
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
        { "@type": "MedicalTherapy", "name": "Terapia individual psicoanalítica" },
        { "@type": "MedicalTherapy", "name": "Terapia de pareja" },
        { "@type": "MedicalTherapy", "name": "Terapia online" },
        { "@type": "MedicalTherapy", "name": "Tratamiento de la ansiedad" },
        { "@type": "MedicalTherapy", "name": "Tratamiento de la depresión" }
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
            "name": "¿Qué es la psicoterapia psicoanalítica y en qué se diferencia de otras terapias?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La psicoterapia psicoanalítica aborda la ansiedad y otros síntomas desde su origen e historia personal, en lugar de centrarse solo en eliminarlos superficialmente. A diferencia de terapias enfocadas únicamente en la conducta, aquí exploramos las causas profundas e inconscientes para lograr cambios duraderos y una transformación genuina."
            }
        },
        {
            "@type": "Question",
            "name": "¿La terapia online es igual de efectiva que la presencial?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, la efectividad es comparable. La base fundamental de la recuperación es la relación y el espacio terapéutico que se construye entre analista y paciente, y esto se logra de igual manera a través de una conexión online estable, permitiendo además una mayor flexibilidad geográfica."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo dura el tratamiento de la ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La duración del tratamiento es variable y depende de la singularidad de cada caso. No aplicamos protocolos estándar con tiempos cerrados; trabajamos al ritmo necesario hasta lograr no solo aliviar los síntomas, sino resolver verdaderamente el nudo original."
            }
        },
        {
            "@type": "Question",
            "name": "¿Atendéis tanto en català como en castellano?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trabajamos indistintamente en catalán y castellano. Es esencial que cada paciente se exprese en la lengua con la que se sienta más cómodo y haya construido su relato de vida, facilitando la máxima libertad de expresión durante la terapia."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo sé si la terapia psicoanalítica es adecuada para mí?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Es adecuada si sientes que la ansiedad o el malestar se repiten a pesar de tus esfuerzos. La terapia psicoanalítica es idónea para quienes desean entender profundamente qué les ocurre, yendo más allá de las clásicas técnicas de relajación."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué ocurre en la primera consulta?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La primera consulta sirve para conocernos, evaluar meticulosamente tu situación real y comprender la naturaleza de tu demanda. Evaluamos la viabilidad del tratamiento, clarificamos dudas y determinamos el encuadre adecuado."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tratáis solo ansiedad o también otros problemas emocionales?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tratamos el sufrimiento psíquico de forma integral. La ansiedad suele ser la puerta de entrada, pero tratamos la depresión, fobias, crisis de pánico, pensamientos obsesivos, adicciones y conflictos recurrentes vitales o de pareja."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tenéis atención para toda España o solo Catalunya?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nuestra sede presencial está en Canet de Mar (Maresme, Barcelona) enfocada al ámbito catalán, pero gracias a la modalidad de terapia online, atendemos a pacientes y acompañamos procesos en cualquier punto de España."
            }
        }
    ]
};

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joan Ramon Soto",
    "jobTitle": "Psicoterapeuta psicoanalítico",
    "worksFor": {
        "@type": "MedicalClinic",
        "name": "Clínica de la Ansiedad Catalunya"
    },
    "knowsAbout": ["Ansiedad", "Psicoterapia psicoanalítica", "Terapia online", "Depresión", "Crisis de pánico", "Ludopatía"],
    "hasCredential": "Fundador y director clínico desde 1993",
    "url": "https://clinicadelansiedad.com"
};
