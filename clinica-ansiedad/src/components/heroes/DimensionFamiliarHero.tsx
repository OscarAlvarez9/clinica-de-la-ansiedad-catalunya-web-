"use client";
import { Users } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function DimensionFamiliarHero() {
  return (
    <ServicioHero
      image="/images/centreclinicansiedad.jpeg"
      imageAlt="Consulta de Terapia Familiar en Canet de Mar (Maresme)"
      imagePosition="right"
      bg="cream"
      chip="Intervención Sistémica · Desde 1993"
      chipIcon={<Users className="w-3.5 h-3.5" />}
      title="Dimensión Familiar en"
      titleAccent="Canet de Mar."
      description="La sintomatología emocional que aparece en un miembro de la familia raramente le pertenece solo a él. Abordamos el sistema completo para transformar el entorno familiar en una red de cuidado real."
      trust={[
        "Abordamos el sistema familiar completo",
        "No solo al paciente identificado",
        "Presencial en Canet de Mar (Maresme) u online",
      ]}
      ctaText="Reservar cita"
      quote="Ningún síntoma individual se produce en un vacío. La familia es siempre el contexto y, con frecuencia, parte de la solución."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Familias acompañadas" },
      ]}
    />
  );
}
