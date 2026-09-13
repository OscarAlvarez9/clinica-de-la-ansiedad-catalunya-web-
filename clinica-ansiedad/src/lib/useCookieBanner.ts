"use client";

import { useEffect, useState } from "react";

// El banner de cookies es `fixed bottom-0` y ocupa la franja inferior de la
// pantalla: en móvil son ~326 px de 812, justo donde viven los botones
// flotantes de reserva y WhatsApp. Como el banner va por encima (z-60 vs z-40),
// esos CTAs quedaban debajo y no se podían pulsar. El banner publica aquí su
// estado para que los botones se aparten mientras está abierto.

export const COOKIE_BANNER_EVENT = "cookie-banner-change";

// Altura real del banner, publicada como variable CSS para que los CTAs flotantes
// se coloquen justo encima en lugar de adivinar un margen fijo.
export const COOKIE_BANNER_HEIGHT_VAR = "--cookie-banner-h";

export function setCookieBannerOpen(open: boolean) {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.cookieBanner = open ? "open" : "closed";
    if (!open) document.documentElement.style.setProperty(COOKIE_BANNER_HEIGHT_VAR, "0px");
    window.dispatchEvent(new CustomEvent(COOKIE_BANNER_EVENT, { detail: { open } }));
}

export function setCookieBannerHeight(px: number) {
    if (typeof document === "undefined") return;
    document.documentElement.style.setProperty(COOKIE_BANNER_HEIGHT_VAR, `${Math.round(px)}px`);
}

export function useCookieBannerOpen() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Estado inicial: el banner puede haberse montado antes que este hook.
        setOpen(document.documentElement.dataset.cookieBanner === "open");

        const onChange = (e: Event) => setOpen(!!(e as CustomEvent).detail?.open);
        window.addEventListener(COOKIE_BANNER_EVENT, onChange);
        return () => window.removeEventListener(COOKIE_BANNER_EVENT, onChange);
    }, []);

    return open;
}
