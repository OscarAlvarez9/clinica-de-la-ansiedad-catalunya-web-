"use client";
import { ShieldCheck } from "lucide-react";
import EspecialidadHero from "./EspecialidadHero";

export default function AnsiedadHero() {
  return (
    <EspecialidadHero
      chip="Especialistas en Ansiedad · Barcelona & Online"
      chipIcon={<ShieldCheck className="w-3.5 h-3.5" />}
      title="Entender la ansiedad"
      titleAccent="para dejar de sufrirla."
      description="Palpitaciones. Hiperventilación. La mente que no para. Si has llegado aquí es porque algo en ti ya sabe que necesitas respuestas reales —no técnicas de respiración, sino la comprensión de lo que te pasa."
      ctaText="Solicitar Valoración"
      quote="El síntoma es solo el mensajero continuo. Nuestro trabajo es descifrar el mensaje."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
