"use client";
import { Heart } from "lucide-react";
import EspecialidadHero from "./EspecialidadHero";

export default function CelosHero() {
  return (
    <EspecialidadHero
      chip="Especialistas en Celos · Barcelona & Online"
      chipIcon={<Heart className="w-3.5 h-3.5" />}
      title="Los celos que"
      titleAccent="no puedes controlar."
      description="Los celos son estados afectivos que todos hemos experimentado. Cuando se vuelven patológicos, destruyen vínculos y generan un sufrimiento continuo. Hay un origen —y tiene tratamiento."
      ctaText="Solicitar Valoración"
      quote="Los celos no son una debilidad moral. Son la expresión de una herida que necesita ser comprendida."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
