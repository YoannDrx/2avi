"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Film,
  Monitor,
  Lightbulb,
  Speaker,
  Box,
  Glasses,
  ArrowRight,
  Play,
  ChevronDown,
} from "lucide-react";

const services = [
  { icon: Film, label: "Cinéma", description: "Installations cinéma haut de gamme" },
  { icon: Monitor, label: "Vidéoprojecteurs", description: "Projection 4K et 8K" },
  { icon: Lightbulb, label: "LED Display", description: "Écrans LED haute résolution" },
  { icon: Speaker, label: "Son", description: "Systèmes audio immersifs" },
  { icon: Box, label: "Événementiel", description: "Solutions événements" },
  { icon: Glasses, label: "3D", description: "Technologie 3D avancée" },
];

const stats = [
  { number: 30, label: "Ans d'expérience", suffix: "+" },
  { number: 50, label: "Références clients", suffix: "+" },
  { number: 6, label: "Domaines d'expertise", suffix: "" },
];

const Counter = ({ target, label, suffix }: { target: number; label: string; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2;
        const increment = target / (duration * 60);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
      }
    });

    const el = document.getElementById(`counter-${label}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, label]);

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default function Landing4Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-black via-brand-black to-red-950">
      {/* Animated Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.h1
            className="bg-gradient-to-r from-white via-white to-red-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            2AVI
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-white/80 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            L'expertise audiovisuelle nouvelle génération
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50">
              Découvrir nos solutions
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition-all hover:border-white hover:bg-white/10">
              <Play className="h-4 w-4" />
              Voir nos projets
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Glass Cards */}
        <motion.div
          className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-32 left-10 h-48 w-48 rounded-2xl border border-red-400/20 bg-red-500/5 backdrop-blur-xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-white/5 px-4 py-16 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                target={stat.number}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Nos domaines d'expertise
            </h2>
            <p className="mt-4 text-white/60">
              6 spécialités audiovisuelles pour vos projets les plus ambitieux
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 inline-block rounded-lg bg-primary/20 p-3 text-primary transition-all group-hover:bg-primary/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white">{service.label}</h3>
                  <p className="mt-2 text-sm text-white/60">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-10 bg-white/5 px-4 py-20 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ils nous font confiance
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {["header-references.jpg", "news-mi6-chaillot.jpg", "news-miramar-cannes.png", "news-loreal-cannes.png"].map((img, idx) => (
              <div key={idx} className="relative h-48 overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={`/images/${img.includes("header") ? "common" : "13-news"}/${img}`}
                  alt={`Client ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-white/90">
              "2AVI a transformé notre approche de l'événementiel. Leur expertise et innovation
              technologique sont sans égal."
            </p>
            <p className="mt-4 font-semibold text-primary">Cannes Film Festival</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-primary to-red-700 px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Prêt à transformer votre projet?
          </h2>
          <p className="mt-4 text-white/90">
            Contactez-nous pour discuter de vos besoins audiovisuels
          </p>
          <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg">
            Démarrer votre projet
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
