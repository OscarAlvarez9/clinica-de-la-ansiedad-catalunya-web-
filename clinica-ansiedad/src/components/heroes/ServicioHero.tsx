"use client";

import { motion, type Variants } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface Stat {
  value: string;
  label: string;
}

interface ServicioHeroProps {
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bg?: "cream" | "white";
  chip: string;
  chipIcon: React.ReactNode;
  title: string;
  titleAccent: string;
  description: string;
  trust: string[];
  ctaText: string;
  quote: string;
  stats: Stat[];
}

export default function ServicioHero({
  image,
  imageAlt,
  imagePosition = "right",
  bg = "cream",
  chip,
  chipIcon,
  title,
  titleAccent,
  description,
  trust,
  ctaText,
  quote,
  stats,
}: ServicioHeroProps) {
  const bgClass = bg === "cream" ? "bg-cream" : "bg-white";
  const edgeGradient = imagePosition === "right"
    ? (bg === "cream" ? "bg-gradient-to-r from-cream to-transparent" : "bg-gradient-to-r from-white to-transparent")
    : (bg === "cream" ? "bg-gradient-to-l from-cream to-transparent" : "bg-gradient-to-l from-white to-transparent");

  const content = (
    <div className={`relative z-10 flex flex-col justify-center w-full lg:w-[57%] pt-36 pb-20 px-8 md:px-16 lg:px-20 ${imagePosition === "left" ? "lg:ml-auto" : ""}`}>
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
        <Chip
          startContent={<span className="text-gold">{chipIcon}</span>}
          variant="bordered"
          className="border-navy/15 bg-white text-navy/80 text-[10px] font-bold tracking-[0.15em] uppercase mb-8 shadow-sm"
        >
          {chip}
        </Chip>
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-navy leading-[1.04] tracking-tight mb-8"
      >
        {title}<br />
        <span className="text-gold italic font-light">{titleAccent}</span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-lg text-navy/65 leading-relaxed font-light max-w-md mb-10"
      >
        {description}
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="space-y-3 mb-10"
      >
        {trust.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
            <span className="text-navy/60 text-sm">{item}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          as="a"
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white font-semibold px-10 py-7 rounded-xl text-sm shadow-2xl shadow-navy/20 hover:bg-navy/90 transition-all cursor-pointer"
          endContent={<ArrowRight className="w-4 h-4" />}
        >
          {ctaText}
        </Button>
        <Button
          as="a"
          href="/enfoque"
          variant="bordered"
          className="border-navy/15 text-navy hover:bg-navy/5 font-bold px-8 py-7 rounded-xl text-xs uppercase tracking-widest cursor-pointer"
        >
          Nuestro Método
        </Button>
      </motion.div>

      {/* Stat strip */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex gap-8 mt-14 pt-10 border-t border-navy/10"
      >
        {stats.map((s, i) => (
          <div key={i}>
            <p className="font-serif text-3xl font-bold text-gold leading-none">{s.value}</p>
            <p className="text-navy/50 text-xs font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  const imagePanel = (
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`hidden lg:block absolute inset-y-0 ${imagePosition === "right" ? "right-0" : "left-0"} w-[40%]`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-top"
        priority
      />
      <div className={`absolute inset-y-0 w-16 ${imagePosition === "right" ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l"} ${bg === "cream" ? "from-cream" : "from-white"} to-transparent`} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />

      {/* Quote strip */}
      <div className="absolute bottom-10 left-8 right-8">
        <div className="flex gap-4 items-start">
          <div className="w-0.5 h-12 bg-gold rounded-full shrink-0 mt-1" />
          <div>
            <p className="font-serif text-white text-base italic leading-snug font-light drop-shadow-lg">
              &ldquo;{quote}&rdquo;
            </p>
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
              Joan Ramon Soto · Psicólogo Fundador
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={`relative min-h-screen flex overflow-hidden ${bgClass}`}>
      {content}
      {imagePanel}
    </section>
  );
}
