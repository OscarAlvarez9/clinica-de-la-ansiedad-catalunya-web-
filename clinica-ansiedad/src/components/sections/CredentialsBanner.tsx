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
        <div className="w-full bg-navy-light border-y border-white/10 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {credentials.map((cred, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                            <span className="text-gold">{cred.icon}</span>
                            <span>{cred.text}</span>
                            {i < credentials.length - 1 && (
                                <span className="text-white/20 ml-8">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
