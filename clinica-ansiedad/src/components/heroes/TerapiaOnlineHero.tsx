"use client";
import { Globe } from "lucide-react";
import EspecialidadHero from "./EspecialidadHero";

export default function TerapiaOnlineHero() {
  return (
    <EspecialidadHero
      chip="Terapia Online · Desde 1993"
      chipIcon={<Globe className="w-3.5 h-3.5" />}
      title="La distancia nunca fue"
      titleAccent="un obstáculo."
      description="Cuando la mayoría de clínicas aún no contemplaban la teleasistencia, nosotros ya acompañábamos pacientes a distancia. Treinta años perfeccionando la terapia online no se improvisan."
      ctaText="Solicitar Primera Sesión Online"
      quote="La distancia física nunca ha sido un obstáculo para la profundidad clínica. Lo que cura es el vínculo terapéutico —no la proximidad geográfica."
      stats={[
        { value: "30+", label: "Años terapia online" },
        { value: "+1K", label: "Pacientes a distancia" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
