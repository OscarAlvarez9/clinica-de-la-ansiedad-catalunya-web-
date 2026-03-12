"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/images/logo.png"
                            alt="Clínica de la Ansiedad Catalunya"
                            className="h-16 w-auto object-contain mb-4 filter invert brightness-0"
                        />
                        <p className="text-gold text-sm tracking-widest uppercase mb-4">
                            Espacio Psicoanalítico desde 1993
                        </p>
                        <p className="text-white/80 text-sm mb-6">
                            Joan Ramon Soto<br />
                            <span className="text-white/60">Psicólogo especialista en ansiedad</span>
                        </p>

                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit">
                            <Star className="w-4 h-4 text-gold fill-gold" />
                            <span className="text-sm font-medium">5.0 Google Reviews</span>
                        </div>
                    </div>

                    {/* Nav Col */}
                    <div>
                        <h3 className="font-sans font-bold text-lg mb-4 text-white">Navegación</h3>
                        <ul className="space-y-3 text-sm text-white/90">
                            <li><a href="/enfoque" className="hover:text-gold transition-colors">Nuestro enfoque</a></li>
                            <li><a href="/sobre-mi" className="hover:text-gold transition-colors">Joan Ramon Soto</a></li>
                            <li><a href="/#faq" className="hover:text-gold transition-colors">Preguntas frecuentes</a></li>
                            <li><a href="https://clinicadelaansiedad.setmore.com?utm_source=qr-code&utm_medium=more-share-bp" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Pedir cita</a></li>
                        </ul>
                    </div>

                    {/* Services Col */}
                    <div>
                        <h3 className="font-sans font-bold text-lg mb-4 text-white">Servicios</h3>
                        <ul className="space-y-3 text-sm text-white/90">
                            <li><a href="/servicios/terapia-individual" className="hover:text-gold transition-colors">Terapia individual</a></li>
                            <li><a href="/servicios/terapia-de-pareja" className="hover:text-gold transition-colors">Terapia de pareja</a></li>
                            <li><a href="/terapia-online" className="hover:text-gold transition-colors">Terapia online</a></li>
                            <li><a href="/servicios/dimension-familiar" className="hover:text-gold transition-colors">Dimensión familiar</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h3 className="font-sans font-bold text-lg mb-4 text-white">Contacto</h3>
                        <ul className="space-y-4 text-sm text-white/90">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <a href="tel:+34629794365" className="hover:text-white transition-colors">
                                    629 79 43 65
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <a href="mailto:joanramonsoto@gmail.com" className="hover:text-white transition-colors">
                                    joanramonsoto@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span>
                                    Ronda Dr. Anglès 74<br />
                                    08360 Canet de Mar<br />
                                    Barcelona (Maresme)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
                    <p>© {currentYear} Clínica de la Ansiedad Catalunya. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="/privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
                        <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
