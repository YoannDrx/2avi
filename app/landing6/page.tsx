"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Landing6Page() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (container.scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    const target = direction === "left"
      ? container.scrollLeft - amount
      : container.scrollLeft + amount;

    container.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <main className="relative bg-white">
      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="relative flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* SECTION 1: Title Card */}
        <section className="relative flex w-screen shrink-0 snap-center items-center justify-center bg-gradient-to-br from-brand-black to-red-950 px-8 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Image
                src="/images/common/logo-2avi.png"
                alt="2AVI Logo"
                width={200}
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-6xl font-bold text-white md:text-7xl">
              2AVI
            </h1>
            <p className="mt-6 text-2xl text-white/80">
              L'expertise audiovisuelle nouvelle génération
            </p>
            <p className="mt-4 max-w-2xl text-white/60">
              30+ années d'excellence. Cinéma, événementiel, LED, projections.
              Les plus grands projets du monde nous font confiance.
            </p>
            <motion.div
              className="mt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-sm uppercase tracking-widest text-white/50">
                Scroll pour explorer →
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: Cinema Services */}
        <section className="relative w-screen shrink-0 snap-center">
          <div className="flex h-screen items-center overflow-hidden">
            <div className="relative h-full w-1/2 overflow-hidden">
              <Image
                src="/images/00-homepage/home-cinema-plein-air.jpg"
                alt="Cinema Plein Air"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
            </div>
            <div className="flex w-1/2 flex-col justify-center px-12 py-16">
              <motion.h2
                className="text-5xl font-bold text-brand-black"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Cinéma & Projections
              </motion.h2>
              <motion.p
                className="mt-6 max-w-md text-lg text-brand-black/70"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Installations de haute qualité pour cinémas, plein air, et événements.
                Technologie 4K/8K, projecteurs laser, systèmes d'immersion.
              </motion.p>
              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary" />
                  <span className="text-brand-black/80">Projecteurs 4K/8K</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary" />
                  <span className="text-brand-black/80">Installation complète</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary" />
                  <span className="text-brand-black/80">Support technique 24/7</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LED Display */}
        <section className="relative w-screen shrink-0 snap-center">
          <div className="relative h-screen overflow-hidden bg-black">
            <Image
              src="/images/02-solutions-cinema-evenements/header-evenements.jpg"
              alt="LED Display"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl font-bold text-white md:text-7xl">
                LED Display
              </h2>
              <p className="mt-6 max-w-2xl text-xl text-white/80">
                Écrans LED haute résolution pour événements, retail, et installations permanentes.
                Technologie cutting-edge, couleurs exceptionnelles, brillance maximale.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-white/10 backdrop-blur px-6 py-4">
                  <div className="text-2xl font-bold text-primary">4K</div>
                  <p className="text-sm text-white/70">Ultra Haute Résolution</p>
                </div>
                <div className="rounded-lg bg-white/10 backdrop-blur px-6 py-4">
                  <div className="text-2xl font-bold text-primary">HDR</div>
                  <p className="text-sm text-white/70">Contraste Supérieur</p>
                </div>
                <div className="rounded-lg bg-white/10 backdrop-blur px-6 py-4">
                  <div className="text-2xl font-bold text-primary">Modular</div>
                  <p className="text-sm text-white/70">Format Flexible</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Events */}
        <section className="relative w-screen shrink-0 snap-center">
          <div className="grid h-screen grid-cols-2 overflow-hidden bg-white">
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/02-solutions-cinema-evenements/evenements-avant-premiere.jpg"
                alt="Avant Premiere"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/02-solutions-cinema-evenements/evenements-cine-concert.jpg"
                alt="Cine Concert"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-16">
            <motion.h2
              className="text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Événementiel
            </motion.h2>
            <motion.p
              className="mt-4 max-w-md text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Avant-premières, ciné-concerts, festivals. Solutions audiovisuelles
              intégrées pour vos événements les plus prestigieux.
            </motion.p>
          </div>
        </section>

        {/* SECTION 5: References Gallery */}
        <section className="relative w-screen shrink-0 snap-center bg-white px-8 py-16">
          <div className="flex h-full flex-col justify-center">
            <h2 className="text-5xl font-bold text-brand-black">Références</h2>
            <p className="mt-4 text-brand-black/60">
              50+ projets remarquables depuis 1993
            </p>

            {/* Small gallery grid */}
            <div className="mt-12 grid gap-4 grid-cols-4">
              {[
                "ref-01-cine-concert-2001-philharmonie.jpg",
                "ref-02-opera-bastille-alceste-2003.jpg",
                "ref-03-theatre-du-chatelet-cine-concert-gounod-2003.jpg",
                "ref-04-musee-carnavalet-cine-concert-2004.jpg",
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative h-40 overflow-hidden rounded-lg border-2 border-brand-black/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/images/12-references/${img}`}
                    alt={`Reference ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-12 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90"
              whileHover={{ x: 5 }}
            >
              Voir toutes nos références →
            </motion.button>
          </div>
        </section>

        {/* SECTION 6: Contact CTA */}
        <section className="relative flex w-screen shrink-0 snap-center items-center justify-center bg-gradient-to-br from-primary to-red-700 px-8 py-16">
          <motion.div
            className="max-w-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white md:text-6xl">
              Parlons de votre projet
            </h2>
            <p className="mt-6 text-xl text-white/90">
              Nos experts sont prêts à vous conseiller et concevoir
              la solution audiovisuelle parfaite pour vos ambitions.
            </p>
            <motion.button
              className="mt-8 rounded-lg bg-white px-12 py-4 font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.button>
            <p className="mt-6 text-sm text-white/70">
              Jean Baptiste: jbh@2avi.fr | Pascal: pascal@2avi.fr
            </p>
          </motion.div>
        </section>
      </div>

      {/* Scroll Navigation Controls */}
      <div className="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
        <motion.button
          onClick={() => scroll("left")}
          className="rounded-full bg-black/80 p-3 text-white backdrop-blur transition-all hover:bg-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          onClick={() => scroll("right")}
          className="rounded-full bg-black/80 p-3 text-white backdrop-blur transition-all hover:bg-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Horizontal Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-white/10 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-red-700"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Top Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-white/95 backdrop-blur px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-black">2AVI</div>
          <div className="hidden gap-8 md:flex">
            <a href="#" className="text-sm font-semibold text-brand-black/70 hover:text-primary">
              Solutions
            </a>
            <a href="#" className="text-sm font-semibold text-brand-black/70 hover:text-primary">
              Références
            </a>
            <a href="#" className="text-sm font-semibold text-brand-black/70 hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
}
