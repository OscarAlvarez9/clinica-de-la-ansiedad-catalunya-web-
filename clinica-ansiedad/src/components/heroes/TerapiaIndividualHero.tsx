"use client";
import { ShieldCheck } from "lucide-react";
import ServicioHero from "./ServicioHero";

export default function TerapiaIndividualHero() {
  return (
    <ServicioHero
      image="/images/joan-ramon-soto.png"
      imageAlt="Joan Ramon Soto - Terapia Individual Barcelona"
      imagePosition="right"
      bg="cream"
      chip="Psicoterapia Especializada · Desde 1993"
      chipIcon={<ShieldCheck className="w-3.5 h-3.5" />}
      title="Terapia"
      titleAccent="Individual."
      description="Un espacio confidencial para explorar tus angustias, entender la raíz de tus síntomas y construir recursos emocionales que duren. No parches. Comprensión real."
      trust={[
        "Primera sesión sin cuestionarios fríos",
        "Confidencialidad absoluta",
        "Presencial en Barcelona u online",
      ]}
      ctaText="Solicitar Primera Sesión"
      quote="En la primera sesión no hay cuestionarios. Hay una conversación clínica real."
      stats={[
        { value: "30+", label: "Años de experiencia" },
        { value: "+1K", label: "Pacientes tratados" },
        { value: "80%", label: "Alta en 6 meses" },
      ]}
    />
  );
}
