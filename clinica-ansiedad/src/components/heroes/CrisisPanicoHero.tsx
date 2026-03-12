"use client";
import { Zap } from "lucide-react";
import EspecialidadHero from "./EspecialidadHero";

export default function CrisisPanicoHero() {
  return (
    <EspecialidadHero
      chip="Tratamiento Especializado · Barcelona & Online"
      chipIcon={<Zap className="w-3.5 h-3.5" />}
      title="El pánico tiene nombre,"
      titleAccent="tiene causas y tiene solución."
      description="El corazón que se acelera. El aire que no llega. Si conoces esa secuencia, necesitas saber algo: no es un fallo de tu cuerpo. Es un mensaje que podemos descifrar."
      ctaText="Solicitar Valoración"
      quote="El ataque de pánico no es el enemigo. Es una señal urgente del psiquismo que pide ser escuchada."
      stats={[
        { value: "30+", label: "Años en trastornos de pánico" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
