"use client";
import { Brain } from "lucide-react";
import EspecialidadHero from "./EspecialidadHero";

export default function DepresionHero() {
  return (
    <EspecialidadHero
      chip="Depresión & Ansiedad · Canet de Mar & Online"
      chipIcon={<Brain className="w-3.5 h-3.5" />}
      title="Depresión en Canet de Mar (Maresme):"
      titleAccent="cuando la vida deja de interesarte."
      description="No es pereza. No es falta de voluntad. Es un grito silencioso del psiquismo que pide ser escuchado. Desde 1993 ayudamos a personas como tú a recuperar el deseo de vivir —desde la raíz. Consulta presencial en Canet de Mar (Maresme) y terapia online."
      ctaText="Solicitar Valoración"
      quote="La depresión no es tristeza. Es la retirada del deseo. Y el deseo, cuando se trabaja desde el origen, puede recuperarse."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
