"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const isCatalan = pathname.startsWith('/ca');

    const toEs = isCatalan ? pathname.replace(/^\/ca/, '') || '/' : pathname;
    const toCa = isCatalan ? pathname : `/ca${pathname === '/' ? '' : pathname}`;

    return (
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-navy/70 uppercase">
            <Link href={toEs} className={`hover:text-gold transition-colors ${!isCatalan ? 'text-gold' : ''}`}>
                ES
            </Link>
            <span className="text-navy/20">|</span>
            <Link href={toCa} className={`hover:text-gold transition-colors ${isCatalan ? 'text-gold' : ''}`}>
                CA
            </Link>
        </div>
    );
}
