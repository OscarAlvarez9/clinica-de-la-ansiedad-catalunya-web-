"use client";
import { HeartHandshake } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function TerapiaDeParejaHero() {
  return (
    <ServicioHero
      image="/images/clinic-interior.png"
      imageAlt="Consulta Terapia de Pareja Barcelona"
      imagePosition="left"
      bg="white"
      chip="Resolución de Conflictos · Desde 1993"
      chipIcon={<HeartHandshake className="w-3.5 h-3.5" />}
      title="Terapia de"
      titleAccent="Pareja."
      description="Acompañamiento especializado para resolver dinámicas de conflicto, bloqueos en la comunicación y desconexión afectiva. Antes de que el silencio sea irreversible."
      trust={[
        "Neutralidad clínica absoluta — sin alianzas",
        "Para parejas en crisis o en punto de quiebre",
        "Presencial en Barcelona u online",
      ]}
      ctaText="Solicitar Cita de Pareja"
      quote="Intervenir en una crisis de pareja requiere neutralidad absoluta y empatía para validar el dolor de ambas partes."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Parejas acompañadas" },
      ]}
    />
  );
}
