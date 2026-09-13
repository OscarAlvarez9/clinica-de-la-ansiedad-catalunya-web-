"use client";

import { useEffect } from "react";

// Listener global de clics de conversión. Deriva el nombre del CTA de reserva
// del utm_content que ya llevan todos los enlaces a Setmore (bookingUrl()),
// de modo que cualquier CTA nuevo queda medido sin añadir código.
// Eventos GA4: clic_reserva {cta}, clic_whatsapp, clic_telefono.
export default function AnalyticsEvents() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            const a = target?.closest?.("a");
            if (!a || !a.href) return;

            const w = window as any;
            const send = (name: string, params: Record<string, string>) =>
                w.gtag?.("event", name, { ...params, page_path: location.pathname });

            if (a.href.startsWith("tel:")) {
                send("clic_telefono", {});
                return;
            }
            try {
                const url = new URL(a.href);
                if (url.hostname.endsWith("setmore.com")) {
                    send("clic_reserva", { cta: url.searchParams.get("utm_content") || "sin-atribuir" });
                } else if (url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com")) {
                    send("clic_whatsapp", {});
                }
            } catch {
                /* href no parseable: ignorar */
            }
        };

        document.addEventListener("click", onClick, { capture: true, passive: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);

    return null;
}
