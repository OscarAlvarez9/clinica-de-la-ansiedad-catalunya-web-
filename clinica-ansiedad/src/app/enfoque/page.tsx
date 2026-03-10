'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyBookingButton from '@/components/servicios/StickyBookingButton';
import BookingOptions from '@/components/servicios/BookingOptions';
import FAQSection from '@/components/sections/FAQSection';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function EnfoquePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream selection:bg-gold/20 selection:text-navy">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* ===== HERO ===== */}
        <section className="bg-white text-navy pt-32 pb-32 px-4 md:px-8 relative overflow-hidden min-h-[75vh] flex items-center">
          <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-sage/5 rounded-full blur-[80px] -z-10 animate-blob"></div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-gold text-sm font-bold tracking-widest uppercase mb-6">Nuestra Metodología</p>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.05] font-bold mb-10 tracking-tight">
                Ir a la <span className="text-gold italic font-light">raíz.</span>
              </h1>

              <p className="text-xl md:text-2xl text-navy/70 max-w-2xl leading-relaxed font-light mb-8">
                No tratamos síntomas. Accedemos al inconsciente donde reside la estructura de tu angustia y la transformamos desde ahí.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 text-sm text-navy/70"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span>Cambio estructural</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span>Sin recaídas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span>Autonomía real</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== THE 4 PHASES ===== */}
        <section className="py-28 px-4 md:px-8 bg-cream/40">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-navy mb-20 font-semibold"
            >
              El recorrido
            </motion.h2>

            <div className="space-y-20">
              {[
                {
                  num: "01",
                  title: "Cartografía Clínica",
                  desc: "Sesiones exhaustivas donde mapeamos tu biografía, tu estructura de angustia, los mandatos inconscientes que cargas. Aquí establecemos el diagnóstico verdadero, más allá de etiquetas psiquiátricas."
                },
                {
                  num: "02",
                  title: "Desarticulación",
                  desc: "La fase donde ocurren los grandes descubrimientos personales. Intervenimos directamente en los patrones que mantienen viva la ansiedad. Aquí sientes que algo fundamental cambia."
                },
                {
                  num: "03",
                  title: "Reestructuración",
                  desc: "Consolidamos nuevos mecanismos de defensa saludables. Fortalecemos tu resiliencia natural. La psique se reorganiza alrededor de nuevas estructuras que te permiten vivir con libertad."
                },
                {
                  num: "04",
                  title: "Autonomía",
                  desc: "El alta clínica. Cuando has integrado los cambios y recuperado el timón de tu vida. No termina porque nos cansemos. Termina cuando ya no nos necesitas."
                }
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 md:gap-12 items-start"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="font-serif text-2xl text-gold font-bold">{phase.num}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="md:hidden mb-4">
                      <span className="inline-block text-gold font-bold text-sm uppercase tracking-widest">Fase {phase.num}</span>
                    </div>
                    <h3 className="font-serif text-3xl text-navy font-semibold mb-4">{phase.title}</h3>
                    <p className="text-navy/70 text-lg leading-relaxed">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUST SIGNALS ===== */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-navy/60 text-lg mb-12 leading-relaxed">
                Tres décadas de práctica clínica directa. Más de mil pacientes. Una filosofía que funciona.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { stat: "30+", label: "Años de experiencia" },
                  { stat: "1000+", label: "Pacientes tratados" },
                  { stat: "80%", label: "Alta en menos de 6 meses" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-serif text-5xl text-gold font-bold mb-2">{item.stat}</p>
                    <p className="text-navy/70 font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== BOOKING ===== */}
        <BookingOptions />
        <FAQSection />
        <StickyBookingButton />
      </main>

      <Footer />
    </div>
  );
}
