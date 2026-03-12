"use client";
import { AlertCircle } from "lucide-react";
import EspecialidadHero from "./EspecialidadHero";

export default function LudopatiaHero() {
  return (
    <EspecialidadHero
      chip="Ludopatía · Tratamiento Psicoanalítico"
      chipIcon={<AlertCircle className="w-3.5 h-3.5" />}
      title="Una adicción que"
      titleAccent="viene de dentro."
      description="La ludopatía es una adicción vinculada al juego. Pero una adicción no existe sin un sujeto previo. El juego no es el problema real —es la solución que encontró tu psiquismo para gestionar algo que no podía afrontar de otra manera."
      ctaText="Solicitar Primera Sesión"
      quote="Una adicción no existe sin un sujeto previo. Tratar la ludopatía significa entender qué conflicto psíquico encontró en el juego su única salida posible."
      stats={[
        { value: "30+", label: "Años tratando adicciones" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
