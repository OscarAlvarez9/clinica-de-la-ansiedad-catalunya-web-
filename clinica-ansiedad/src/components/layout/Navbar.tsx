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
import { ChevronDown } from "lucide-react";

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
        { name: "Contacto", href: "/#contacto" },
    ];

    return (
        <HeroNavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            className={`fixed top-0 w-full transition-all duration-500 z-50 ${isScrolled
                ? "bg-white/95 backdrop-blur-3xl border-b border-navy/10 shadow-glass py-2"
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
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        {item.subItems ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase font-bold outline-none cursor-pointer">
                                    {item.name} <ChevronDown className="w-4 h-4 opacity-70" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-navy/10 shadow-glass rounded-xl p-2 min-w-[220px] mt-4">
                                    {item.subItems.map(subItem => (
                                        <DropdownMenuItem key={subItem.name} asChild className="cursor-pointer hover:bg-cream rounded-lg focus:bg-cream focus:text-navy data-[highlighted]:bg-cream">
                                            <Link href={subItem.href} className="w-full text-navy font-medium text-sm py-2 px-3 block">
                                                {subItem.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-navy hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase font-bold"
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as="a"
                        href="#contacto"
                        className="bg-gold text-white font-semibold rounded-full px-6 hover:bg-gold-light shadow-md transition-all"
                    >
                        Pedir cita
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-cream/95 backdrop-blur-md pt-6">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} className="w-full border-b border-navy/10 block mb-2">
                        {item.subItems ? (
                            <div className="flex flex-col py-2 w-full">
                                <span className="w-full text-navy text-xl font-serif py-2 opacity-70">
                                    {item.name}
                                </span>
                                <div className="flex flex-col pl-4 gap-2 pb-2">
                                    {item.subItems.map(subItem => (
                                        <Link
                                            key={subItem.name}
                                            className="w-full text-navy text-lg font-serif py-2 hover:text-gold transition-colors"
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
                                className="w-full text-navy text-xl font-serif py-4 block"
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="mt-6">
                    <Button
                        as="a"
                        href="#contacto"
                        className="w-full bg-gold text-white font-medium rounded-full py-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Pedir cita
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </HeroNavbar>
    );
}
