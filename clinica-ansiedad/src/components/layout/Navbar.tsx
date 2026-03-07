"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Navbar as HeroNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
} from "@heroui/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Sobre Mí", href: "/sobre-mi" },
        {
            name: "Servicios",
            href: "/servicios",
            subItems: [
                { name: "Todos los servicios", href: "/servicios" },
                { name: "Terapia Individual", href: "/servicios/terapia-individual" },
                { name: "Terapia de Pareja", href: "/servicios/terapia-de-pareja" },
                { name: "Dimensión Familiar", href: "/servicios/dimension-familiar" },
            ]
        },
        { name: "Enfoque", href: "/enfoque" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "/#contacto" },
    ];

    return (
        <HeroNavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            className={`fixed top-0 w-full transition-all duration-500 z-50 ${isScrolled
                ? "bg-white/95 backdrop-blur-3xl border-b border-navy/5 shadow-sm py-1"
                : "bg-transparent py-4"
                }`}
            maxWidth="xl"
            position="sticky"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    className="sm:hidden text-navy"
                />
                <NavbarBrand as={Link} href="/" className="flex items-center gap-0">
                    <img
                        src="/images/logo.png"
                        alt="Clínica de la Ansiedad Catalunya"
                        className="h-10 md:h-12 w-auto object-contain brightness-0"
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        {item.subItems ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1.5 text-navy hover:text-gold transition-colors font-sans text-[11px] tracking-[0.2em] uppercase font-bold outline-none cursor-pointer">
                                    {item.name} <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white/98 backdrop-blur-xl border border-navy/5 shadow-2xl rounded-2xl p-2 min-w-[240px] mt-4">
                                    {item.subItems.map(subItem => (
                                        <DropdownMenuItem key={subItem.name} asChild className="cursor-pointer hover:bg-navy/5 rounded-xl focus:bg-navy/5 focus:text-navy data-[highlighted]:bg-navy/5 transition-all">
                                            <Link href={subItem.href} className="w-full text-navy font-semibold text-xs py-3 px-4 block">
                                                {subItem.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-navy hover:text-gold transition-colors font-sans text-[11px] tracking-[0.2em] uppercase font-bold"
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-6">
                <NavbarItem className="hidden lg:flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" />
                    <span className="text-navy font-bold text-xs">93 226 14 12</span>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as="a"
                        href="#contacto"
                        className="bg-navy text-white font-bold rounded-xl px-8 py-6 hover:bg-navy/90 shadow-xl shadow-navy/10 transition-all text-xs uppercase tracking-widest"
                    >
                        Cita Previa
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-cream/98 backdrop-blur-xl pt-10 px-8 gap-6">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} className="w-full block">
                        {item.subItems ? (
                            <div className="flex flex-col py-2 w-full">
                                <span className="w-full text-navy/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                    {item.name}
                                </span>
                                <div className="flex flex-col gap-6">
                                    {item.subItems.map(subItem => (
                                        <Link
                                            key={subItem.name}
                                            className="w-full text-navy text-2xl font-serif font-bold hover:text-gold transition-colors"
                                            href={subItem.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                className="w-full text-navy text-3xl font-serif font-bold py-2 block"
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="mt-12">
                    <Button
                        as="a"
                        href="#contacto"
                        className="w-full bg-navy text-white font-bold rounded-2xl py-8 text-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Solicitar Valoración
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </HeroNavbar>
    );
}
