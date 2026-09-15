import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // La raíz sirve el castellano directamente, sin redirigir.
  //
  // Quien escribe "clinicadelansiedad.com" encadenaba tres saltos: 308 a https,
  // 308 a www (ambos los pone Vercel y no se tocan desde aquí) y un 301 a /es.
  // Reescribiendo en vez de redirigir, el tercero desaparece: la URL sigue
  // siendo "/" y la respuesta es un 200.
  //
  // No crea contenido duplicado porque la página renderiza con locale "es" y su
  // canonical apunta a /es, que es la URL indexada y la que lista el sitemap.
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/es', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|ca)/:path*']
};
