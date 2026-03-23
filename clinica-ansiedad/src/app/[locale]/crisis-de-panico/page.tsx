"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle2, ShieldCheck, Brain, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CrisisPanicoHero from "@/components/heroes/CrisisPanicoHero";
import BookingOptions from "@/components/servicios/BookingOptions";
import FAQSection from "@/components/sections/FAQSection";
import StickyBookingButton from "@/components/servicios/StickyBookingButton";
import { BOOKING_URL } from "@/lib/constants";

const inView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const symptoms = [
  "Palpitaciones intensas o taquicardia repentina.",
  "Hiperventilación y sensación de ahogo.",
  "Hormigueo o entumecimiento en extremidades.",
  "Dolor o presión en el pecho.",
  "Nudo en la garganta que impide tragar.",
  "Miedo a morir o a perder el control.",
  "Sudoración, temblores, escalofríos.",
  "Mareos, despersonalización o irrealidad.",
];

const phases = [
  {
    num: "01",
    title: "Contención",
    desc: "Un espacio seguro donde narrar lo que vives sin juicio. Herramientas de regulación fisiológica para reducir la intensidad de las crisis y recuperar la sensación de que puedes con esto.",
  },
  {
    num: "02",
    title: "Exploración",
    desc: "Mediante la escucha clínica y la asociación libre, identificamos qué conflicto emocional se manifiesta como pánico. ¿Qué angustia no resuelta está gritando a través de tu cuerpo?",
  },
  {
    num: "03",
    title: "Desactivación",
    desc: "Desmontamos el ciclo: la anticipación, la hipervigilancia, la evitación. Al integrar las emociones reprimidas, el cuerpo deja de necesitar la crisis como canal de expresión.",
  },
  {
    num: "04",
    title: "Consolidación",
    desc: "Afianzamos los cambios para que dispongas de recursos internos sólidos. El objetivo: que la ansiedad no vuelva a necesitar el pánico como vía de escape.",
  },
];

const benefits = [
  {
    Icon: ShieldCheck,
    title: "Fin del Ciclo",
    desc: "Desactiva el miedo anticipatorio que alimenta las crisis. Sin miedo al miedo, los ataques pierden su poder.",
  },
  {
    Icon: Brain,
    title: "Cuerpo en Calma",
    desc: "Las palpitaciones, la hiperventilación y los mareos se disuelven al abordar la causa emocional que los genera.",
  },
  {
    Icon: Leaf,
    title: "Libertad",
    desc: "Recupera la capacidad de ir a cualquier lugar, viajar y vivir sin que la sombra del próximo ataque condicione cada decisión.",
  },
];

export default function CrisisDePanicoPage() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />
      <main className="pt-24">
        <CrisisPanicoHero />

        {/* ===== QUÉ ES UN ATAQUE DE PÁNICO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Comprender
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Ataques de pánico: qué ocurre y por qué
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6 text-navy/70 leading-relaxed text-lg"
            >
              <motion.p variants={inView}>
                Un ataque de pánico es una oleada de miedo intenso que alcanza su pico en minutos y desencadena reacciones físicas brutales sin que exista un peligro real. Es una de las manifestaciones más agudas de la{" "}<Link href="/ansiedad" className="text-gold hover:text-gold/80 underline underline-offset-2">ansiedad</Link>. Tu cuerpo reacciona como si estuvieras en peligro de muerte. Y tú, atrapado dentro de esa tormenta, no puedes distinguir la alarma de la realidad.
              </motion.p>
              <motion.p variants={inView}>
                Pero lo más incapacitante no es la crisis en sí. Es lo que viene después: el{" "}
                <strong className="text-navy font-semibold">miedo a que vuelva</strong>. Ese miedo anticipatorio es lo que convierte un episodio puntual en un trastorno que devora tu vida poco a poco. Empiezas a evitar lugares, situaciones, personas. Tu mundo se encoge.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== SÍNTOMAS ===== */}
        <section className="py-20 md:py-24 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-navy/8 text-navy border border-navy/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                Síntomas
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-4">
                ¿Te reconoces?
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10 max-w-2xl">
                Estos son los síntomas que describen los pacientes que llegan a mi consulta. Los conocen bien. Los han sufrido solos demasiado tiempo.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-3"
            >
              {symptoms.map((item, i) => (
                <motion.div key={i} variants={inView} className="flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-cream/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-navy/70">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-navy/60 text-lg leading-relaxed mt-8"
            >
              Las palpitaciones por ansiedad son las que más asustan porque imitan un infarto. He tenido pacientes que visitaron urgencias cinco, seis, diez veces hasta que un médico les dijo: «Su corazón está perfecto. Esto es ansiedad». Y entonces empezó la segunda angustia:{" "}
              <em>¿y ahora qué hago con esto?</em>
            </motion.p>
          </div>
        </section>

        {/* ===== POR QUÉ — Con pullquote lateral ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Origen
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-10">
                Por qué tu cuerpo entra en pánico
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-3 space-y-6 text-navy/70 leading-relaxed text-lg"
              >
                <motion.p variants={inView}>
                  Los ataques de pánico no son un fallo aleatorio de tu sistema nervioso. Son la expresión corporal de{" "}
                  <strong className="text-navy font-semibold">emociones reprimidas</strong> que no han encontrado otra salida. Rabia contenida. Duelo que no pudo ser. Culpa que nadie nombró.
                </motion.p>
                <motion.p variants={inView}>
                  Aparecen en momentos de transición vital: cambios laborales, rupturas, pérdidas. Las palpitaciones, la hiperventilación, la opresión en el pecho —son el lenguaje somático de una angustia que necesita ser escuchada.
                </motion.p>
                <motion.p variants={inView}>
                  Por eso el tratamiento exclusivamente sintomático —solo medicación, solo técnicas de respiración— ofrece alivio temporal. El pánico regresa porque el mensaje sigue sin descifrar. En nuestra consulta de Barcelona (Canet de Mar, comarca del Maresme), abordamos los ataques de pánico desde su origen emocional con{" "}<Link href="/enfoque" className="text-gold hover:text-gold/80 underline underline-offset-2">psicoanálisis directo</Link>, disponible también como{" "}<Link href="/terapia-online" className="text-gold hover:text-gold/80 underline underline-offset-2">terapia online</Link> para pacientes de Barcelona, Girona, Lleida, Tarragona y toda Catalunya.
                </motion.p>
              </motion.div>

              <motion.div
                variants={inView}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="bg-sage/20 border border-sage/30 shadow-none">
                  <CardBody className="p-8">
                    <div className="w-8 h-1 bg-gold mb-6" />
                    <p className="font-serif text-xl text-navy italic leading-snug font-light mb-6">
                      &ldquo;El ataque de pánico no es el enemigo. Es una señal urgente del psiquismo. Cuando aprendemos a descifrarla, el cuerpo deja de gritar.&rdquo;
                    </p>
                    <p className="font-bold tracking-[0.15em] uppercase text-[11px] text-navy/50">Joan Ramon Soto</p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== TRATAMIENTO ===== */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={inView} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <Chip size="sm" className="bg-sage/20 text-navy border border-sage/30 text-[10px] font-bold uppercase tracking-widest mb-6">
                Tratamiento
              </Chip>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mb-6">
                Cómo trabajamos el trastorno de pánico
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-16 max-w-2xl">
                Combinamos la contención inmediata del síntoma con la exploración profunda de sus causas. Porque necesitas dejar de sufrir ahora —y necesitas que no vuelva a pasar. Con frecuencia, las crisis de pánico coexisten con{" "}<Link href="/depresion" className="text-gold hover:text-gold/80 underline underline-offset-2">depresión</Link>, y nuestro tratamiento contempla ambas dimensiones.
              </p>
            </motion.div>

            <div className="space-y-16 md:space-y-20">
              {phases.map((step, i) => (
                <motion.div
                  key={i}
                  variants={inView}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex gap-8 md:gap-12 items-start"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="font-serif text-2xl text-gold font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="md:hidden mb-3">
                      <Chip size="sm" className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                        Fase {step.num}
                      </Chip>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">{step.title}</h3>
                    <p className="text-navy/70 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFICIOS ===== */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4">
                Recupera tu{" "}
                <span className="text-gold italic font-light">Vida sin Miedo</span>
              </h2>
              <p className="text-navy/60 max-w-lg mx-auto font-light">
                El tratamiento adecuado transforma la ansiedad: de amenaza constante a una señal que ya no necesita el pánico.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {benefits.map(({ Icon, title, desc }, i) => (
                <motion.div key={i} variants={inView}>
                  <Card className="bg-white border border-navy/5 hover:border-gold/20 transition-all hover:-translate-y-1 shadow-none h-full">
                    <CardBody className="p-6 md:p-8">
                      <Icon className="w-10 h-10 text-gold mb-5" />
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">{title}</h3>
                      <p className="text-navy/60 leading-relaxed font-light text-sm">{desc}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                as="a"
                href={BOOKING_URL}
                className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-xl shadow-navy/20 hover:bg-navy/90 transition-all"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Primera Sesión
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== CONDICIONES RELACIONADAS ===== */}
        <section className="py-12 px-4 md:px-8 border-t border-navy/5">
          <div className="container mx-auto max-w-4xl">
            <p className="text-navy/50 text-sm leading-relaxed">
              Los ataques de pánico son una de las manifestaciones más agudas de la{" "}
              <a href="/ansiedad" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">ansiedad</a>. Con frecuencia coexisten con{" "}
              <a href="/depresion" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">depresión</a> o se vinculan a{" "}
              <a href="/celos" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">celos patológicos</a> que generan angustia constante.
              Tratamiento de ataques de pánico en Barcelona (Canet de Mar, Maresme) con{" "}
              <a href="/servicios/terapia-individual" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia individual</a> presencial y{" "}
              <a href="/terapia-online" className="text-navy font-medium hover:text-gold transition-colors underline decoration-gold/30">terapia online</a> para toda Catalunya y España.
            </p>
          </div>
        </section>

        <BookingOptions />
        <FAQSection />
        <StickyBookingButton />
      </main>
      <Footer />
    </div>
  );
}
