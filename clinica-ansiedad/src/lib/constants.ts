const SETMORE_BASE = 'https://clinicadelaansiedad.setmore.com';

// Enlace de reserva con atribución por ubicación del CTA (utm_content),
// para poder medir en analítica qué botón convierte.
export const bookingUrl = (ctaLocation: string) =>
  `${SETMORE_BASE}?utm_source=web&utm_medium=cta&utm_content=${ctaLocation}`;

// Compat: enlace genérico usado por páginas que aún no atribuyen ubicación.
export const BOOKING_URL = bookingUrl('general');

export const PHONE_NUMBER = '+34613916079';
export const PHONE_DISPLAY = '613 91 60 79';

export const WHATSAPP_NUMBER = '34613916079';
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
