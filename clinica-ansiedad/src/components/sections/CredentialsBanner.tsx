"use client";

export default function CredentialsBanner() {
    const credentials = [
        { label: "COPC", sublabel: "Col·legi Oficial de Psicòlegs de Catalunya" },
        { label: "COP", sublabel: "Colegio Oficial de Psicólogos de España" },
        { label: "5.0 ★", sublabel: "130+ Reseñas verificadas Google" },
        { label: "1993 →", sublabel: "Más de 30 años de trayectoria clínica" },
        { label: "Online", sublabel: "Terapia para toda España y Catalunya" },
    ];

    return (
        <div className="w-full bg-navy border-y border-white/5 overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/4 w-64 h-full bg-gold/10 blur-[60px] rounded-full" />
            <div className="absolute top-0 right-1/4 w-48 h-full bg-gold/5 blur-[80px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 py-0 relative z-10">
                <div className="flex items-center overflow-x-auto scrollbar-hide divide-x divide-white/10">
                    {credentials.map((cred, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center px-6 md:px-10 py-5 shrink-0 group cursor-default transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="text-gold font-bold text-sm md:text-base tracking-wider whitespace-nowrap group-hover:text-gold/80 transition-colors">{cred.label}</span>
                            <span className="text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase whitespace-nowrap mt-1">{cred.sublabel}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
