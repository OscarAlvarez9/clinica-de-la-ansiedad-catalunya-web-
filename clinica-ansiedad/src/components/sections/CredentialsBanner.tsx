"use client";
import { MapPin, Globe, History, Star, Users } from "lucide-react";

export default function CredentialsBanner() {
    const credentials = [
        { icon: <History className="w-4 h-4" />, text: "Fundada en 1993" },
        { icon: <Globe className="w-4 h-4" />, text: "+25 años terapia online" },
        { icon: <MapPin className="w-4 h-4" />, text: "Maresme, Barcelona" },
        { icon: <Users className="w-4 h-4" />, text: "Online toda España" },
        { icon: <Star className="w-4 h-4" />, text: "5.0 / 130 reseñas" },
    ];

    return (
        <div className="w-full bg-navy border-y border-white/5 hidden md:block overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/4 w-64 h-full bg-gold/10 blur-[60px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
                    {credentials.map((cred, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/90 group cursor-default transition-all duration-300">
                            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all">
                                <span className="text-gold group-hover:scale-110 transition-transform">{cred.icon}</span>
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{cred.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
