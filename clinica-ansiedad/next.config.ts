import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.ts'
);

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            }
        ],
    },
    compress: true,
    turbopack: {
        root: path.resolve('.'),
    },
    async redirects() {
        return [
            // El middleware de next-intl solo atiende '/' y '/(es|ca)/...': cualquier
            // ruta sin prefijo de idioma daba 404. Redirección explícita al locale
            // por defecto para todas las rutas conocidas (sitemap antiguo + enlaces).
            { source: '/ansiedad', destination: '/es/ansiedad', permanent: true },
            { source: '/crisis-de-panico', destination: '/es/crisis-de-panico', permanent: true },
            { source: '/depresion', destination: '/es/depresion', permanent: true },
            { source: '/celos', destination: '/es/celos', permanent: true },
            { source: '/ludopatia', destination: '/es/ludopatia', permanent: true },
            { source: '/enfoque', destination: '/es/enfoque', permanent: true },
            { source: '/terapia-online', destination: '/es/terapia-online', permanent: true },
            { source: '/taller-gestion-estres-empresas', destination: '/es/taller-gestion-estres-empresas', permanent: true },
            // Slugs cortos alternativos que se pueden compartir en comunicación comercial.
            { source: '/taller-empresas', destination: '/es/taller-gestion-estres-empresas', permanent: true },
            { source: '/es/taller-empresas', destination: '/es/taller-gestion-estres-empresas', permanent: true },
            { source: '/ca/taller-empresas', destination: '/ca/taller-gestion-estres-empresas', permanent: true },
            { source: '/servicios', destination: '/es/servicios', permanent: true },
            { source: '/servicios/:path*', destination: '/es/servicios/:path*', permanent: true },
            { source: '/sobre-mi', destination: '/es/sobre-mi', permanent: true },
            { source: '/blog', destination: '/es/blog', permanent: true },
            { source: '/blog/:slug*', destination: '/es/blog/:slug*', permanent: true },
            { source: '/privacidad', destination: '/es/privacidad', permanent: true },
            { source: '/aviso-legal', destination: '/es/aviso-legal', permanent: true },
            { source: '/politica-de-cookies', destination: '/es/politica-de-cookies', permanent: true },
            { source: '/terapia-individual', destination: '/es/servicios/terapia-individual', permanent: true },
            { source: '/terapia-pareja', destination: '/es/servicios/terapia-de-pareja', permanent: true },

            // URLs del WordPress antiguo (rankeaban top 5 en GSC y daban 404 desde
            // el relanzamiento de marzo). Mapeadas a su equivalente más afín.
            { source: '/tratamientos-y-servicios', destination: '/es/servicios', permanent: true },
            { source: '/como-saber-si-has-dejado-de-querer-a-tu-pareja', destination: '/es/servicios/terapia-de-pareja', permanent: true },
            { source: '/deterioro-relacion-pareja-factores', destination: '/es/servicios/terapia-de-pareja', permanent: true },
            // Página local de Canet de Mar / Maresme (estas URLs del WordPress antiguo
            // rankeaban top 3-5 en catalán). Reconducidas a la nueva landing local.
            { source: '/psicoanalisis-canet-de-mar', destination: '/es/psicologo-maresme', permanent: true },
            { source: '/psicologia-canet-de-mar', destination: '/es/psicologo-maresme', permanent: true },
            { source: '/psicologo-maresme', destination: '/es/psicologo-maresme', permanent: true },
            { source: '/psicologo-canet-de-mar', destination: '/es/psicologo-maresme', permanent: true },
            { source: '/formacion-academica', destination: '/es/sobre-mi', permanent: true },

            // No existe página de contacto: el contacto es la sección #contacto de
            // la home. Evita el 404 en una URL de conversión.
            { source: '/contacto', destination: '/es#contacto', permanent: true },
            { source: '/es/contacto', destination: '/es#contacto', permanent: true },
            { source: '/ca/contacto', destination: '/ca#contacto', permanent: true },
            { source: '/ca/contacte', destination: '/ca#contacto', permanent: true },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
        ];
    },
};

export default withNextIntl(nextConfig);
