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

            <div className="w-full relative z-10 overflow-hidden">
                <div className="flex items-center w-max animate-marquee scrollbar-hide">
                    {/* First set */}
                    {credentials.map((cred, i) => (
                        <div
                            key={`set1-${i}`}
                            className="flex flex-col items-center justify-center px-8 md:px-16 py-6 shrink-0 border-r border-white/10 group cursor-default transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="text-gold font-bold text-sm md:text-base tracking-widest whitespace-nowrap group-hover:text-gold/80 transition-colors uppercase">{cred.label}</span>
                            <span className="text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap mt-1.5">{cred.sublabel}</span>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {credentials.map((cred, i) => (
                        <div
                            key={`set2-${i}`}
                            className="flex flex-col items-center justify-center px-8 md:px-16 py-6 shrink-0 border-r border-white/10 group cursor-default transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="text-gold font-bold text-sm md:text-base tracking-widest whitespace-nowrap group-hover:text-gold/80 transition-colors uppercase">{cred.label}</span>
                            <span className="text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap mt-1.5">{cred.sublabel}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
