"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Cookie } from "lucide-react";

// Preferencia de consentimiento (exenta de consentimiento según la AEPD por ser
// almacenamiento de la propia elección del usuario). Caduca al año: se vuelve a preguntar.
const STORAGE_KEY = "ca-cookie-consent";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

type Stored = { analytics: boolean; ts: number };

function readConsent(): Stored | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as Stored;
        if (typeof parsed.analytics !== "boolean" || typeof parsed.ts !== "number") return null;
        if (Date.now() - parsed.ts > MAX_AGE_MS) return null;
        return parsed;
    } catch {
        return null;
    }
}

function pushConsentUpdate(granted: boolean) {
    const w = window as any;
    // Mismo formato que gtag(): la librería espera un objeto `arguments`.
    function g(..._args: unknown[]) {
        (w.dataLayer = w.dataLayer || []).push(arguments);
    }
    (w.gtag || g)("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
    });
}

const texts = {
    es: {
        title: "Cookies en esta web",
        body:
            "Usamos cookies de análisis (Google Analytics) para entender cómo se utiliza la web y mejorarla. La web funciona igual si las rechazas.",
        accept: "Aceptar",
        reject: "Rechazar",
        more: "Política de cookies",
    },
    ca: {
        title: "Cookies en aquest web",
        body:
            "Fem servir cookies d'anàlisi (Google Analytics) per entendre com s'utilitza el web i millorar-lo. El web funciona igual si les rebutges.",
        accept: "Acceptar",
        reject: "Rebutjar",
        more: "Política de cookies",
    },
} as const;

export default function CookieConsent() {
    const locale = (useLocale() === "ca" ? "ca" : "es") as "es" | "ca";
    const t = texts[locale];
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!readConsent()) setVisible(true);
        const open = () => setVisible(true);
        window.addEventListener("open-cookie-banner", open);
        return () => window.removeEventListener("open-cookie-banner", open);
    }, []);

    const decide = (analytics: boolean) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, ts: Date.now() }));
        } catch {
            /* almacenamiento no disponible: la sesión queda con el default (denegado) */
        }
        pushConsentUpdate(analytics);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label={t.title}
            className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-4 pointer-events-none"
        >
            <div className="pointer-events-auto mx-auto max-w-3xl bg-white rounded-2xl border border-navy/10 shadow-2xl shadow-navy/20 p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-4">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 shrink-0">
                        <Cookie className="w-5 h-5 text-gold" />
                    </span>
                    <div>
                        <p className="text-navy font-bold mb-1">{t.title}</p>
                        <p className="text-navy/70 text-sm leading-relaxed">
                            {t.body}{" "}
                            <Link
                                href={"/politica-de-cookies" as any}
                                className="text-gold font-semibold hover:text-navy underline underline-offset-2"
                            >
                                {t.more}
                            </Link>
                        </p>
                    </div>
                </div>
                {/* Aceptar y Rechazar con la misma prominencia (requisito AEPD) */}
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <button
                        onClick={() => decide(false)}
                        className="px-6 py-3 rounded-xl bg-white border border-navy/20 text-navy font-bold text-sm hover:bg-navy/5 transition-colors cursor-pointer"
                    >
                        {t.reject}
                    </button>
                    <button
                        onClick={() => decide(true)}
                        className="px-6 py-3 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy/90 transition-colors cursor-pointer"
                    >
                        {t.accept}
                    </button>
                </div>
            </div>
        </div>
    );
}
