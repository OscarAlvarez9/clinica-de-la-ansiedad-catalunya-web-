"use client";
import { HeartHandshake } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function TerapiaDeParejaHero() {
  return (
    <ServicioHero
      image="/images/centreclinicansiedad.jpeg"
      imageAlt="Consulta de Terapia de Pareja en Canet de Mar (Maresme)"
      imagePosition="left"
      bg="white"
      chip="Resolución de Conflictos · Desde 1993"
      chipIcon={<HeartHandshake className="w-3.5 h-3.5" />}
      title="Terapia de Pareja en"
      titleAccent="Canet de Mar."
      description="Acompañamiento especializado para resolver dinámicas de conflicto, bloqueos en la comunicación y desconexión afectiva. Antes de que el silencio sea irreversible."
      trust={[
        "Neutralidad clínica absoluta — sin alianzas",
        "Para parejas en crisis o en punto de quiebre",
        "Presencial en Canet de Mar (Maresme) u online",
      ]}
      ctaText="Reservar cita · 100 €"
      quote="Intervenir en una crisis de pareja requiere neutralidad absoluta y empatía para validar el dolor de ambas partes."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Parejas acompañadas" },
      ]}
    />
  );
}
