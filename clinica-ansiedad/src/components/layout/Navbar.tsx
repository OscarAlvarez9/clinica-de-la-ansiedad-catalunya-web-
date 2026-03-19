"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Navbar as HeroNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@heroui/react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

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
                { name: "Terapia Online", href: "/terapia-online" },
            ]
        },
        {
            name: "Especialidades",
            href: "/ansiedad",
            subItems: [
                { name: "Ansiedad", href: "/ansiedad" },
                { name: "Crisis de Pánico", href: "/crisis-de-panico" },
                { name: "Depresión", href: "/depresion" },
                { name: "Celos", href: "/celos" },
                { name: "Ludopatía", href: "/ludopatia" },
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
            className={`fixed top-0 w-full transition-all duration-500 z-50 px-2 sm:px-4 ${isScrolled
                ? "bg-white/95 backdrop-blur-3xl border-b border-navy/5 shadow-sm py-2 sm:py-1"
                : "bg-transparent py-3 sm:py-4"
                }`}
            maxWidth="full"
            position="sticky"
        >
            <NavbarContent className="sm:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-navy p-2 hover:text-gold transition-colors"
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </NavbarContent>

            <NavbarBrand as={Link} href="/" className="flex items-center gap-0 flex-1 sm:flex-none">
                <img
                    src="/images/logo.png"
                    alt="Clínica de la Ansiedad Catalunya"
                    className="h-9 sm:h-10 md:h-12 w-auto object-contain brightness-0"
                />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 md:gap-8 lg:gap-10" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name} className="text-xs md:text-sm lg:text-base">
                        {item.subItems ? (
                            <Dropdown
                                classNames={{
                                    content: "min-w-[220px] p-2 bg-white/95 backdrop-blur-3xl border border-navy/10 shadow-glass rounded-[20px]",
                                }}
                            >
                                <DropdownTrigger>
                                    <button className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-sans text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold outline-none cursor-pointer">
                                        {item.name} <ChevronDown className="w-3 h-3 opacity-50" />
                                    </button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label={`Submenú de ${item.name}`}>
                                    {item.subItems.map(subItem => (
                                        <DropdownItem key={subItem.name} href={subItem.href} className="text-navy font-serif font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-gold/5 hover:text-gold transition-colors data-[hover=true]:bg-gold/5 data-[hover=true]:text-gold">
                                            {subItem.name}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-navy hover:text-gold transition-colors font-sans text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold"
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-2 sm:gap-3 md:gap-4 lg:gap-6">

                <NavbarItem>
                    <Button
                        as={Link}
                        href="/#contacto"
                        className="bg-navy text-white font-bold rounded-lg sm:rounded-xl px-3 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:bg-navy/90 shadow-lg shadow-navy/10 transition-all text-[10px] sm:text-xs md:text-xs uppercase tracking-wider md:tracking-widest"
                    >
                        Cita
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-white/95 backdrop-blur-3xl pt-32 pb-24 px-6 md:px-8 overflow-y-auto min-h-screen gap-8 z-40">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} className="w-full block">
                        {item.subItems ? (
                            <div className="flex flex-col py-2 w-full">
                                <span className="w-full text-navy/40 text-[9px] font-bold tracking-[0.15em] uppercase mb-3">
                                    {item.name}
                                </span>
                                <div className="flex flex-col gap-3">
                                    {item.subItems.map(subItem => (
                                        <Link
                                            key={subItem.name}
                                            className="w-full text-navy text-lg sm:text-xl font-serif font-bold hover:text-gold transition-colors"
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
                                className="w-full text-navy text-2xl sm:text-3xl font-serif font-bold py-2 block"
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="mt-8">
                    <Button
                        as={Link}
                        href="/#contacto"
                        className="w-full bg-navy text-white font-bold rounded-2xl py-6 sm:py-8 text-base sm:text-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Solicitar Valoración
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </HeroNavbar>
    );
}
