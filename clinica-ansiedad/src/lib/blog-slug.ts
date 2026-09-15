// Contentful guarda los slugs con barra al principio y al final ("/terapia-familiar/")
// y algunos llevan carpeta ("/problemas/ansiedad-generalizada/"). La ruta del
// artículo es un catch-all, así que necesita el slug troceado en segmentos.

/** "/problemas/ansiedad-generalizada/" -> ["problemas", "ansiedad-generalizada"] */
export function slugSegments(raw?: string | string[] | null): string[] {
    const parts = Array.isArray(raw) ? raw : (raw || '').split('/');
    return parts.flatMap(p => (p || '').split('/')).filter(Boolean);
}

/** "/problemas/ansiedad-generalizada/" -> "problemas/ansiedad-generalizada" */
export function slugPath(raw?: string | string[] | null): string {
    return slugSegments(raw).join('/');
}
