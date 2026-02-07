"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Landing5Page() {
  return (
    <main className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b-8 border-black bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-black tracking-widest">2AVI</div>
          <div className="flex gap-8 text-sm font-black tracking-widest">
            <a href="#" className="hover:underline">SOLUTIONS</a>
            <a href="#" className="hover:underline">PROJETS</a>
            <a href="#" className="hover:underline">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center border-b-8 border-black bg-white pt-24">
        <div className="relative w-full">
          {/* Oversized Text */}
          <motion.div
            className="absolute -left-32 top-20 text-black"
            animate={{ rotate: [0, 2, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-9xl font-black leading-none tracking-tighter">
              AUDIO
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-24 bottom-20 text-black"
            animate={{ rotate: [0, -2, 0], x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="text-8xl font-black leading-none tracking-tighter">
              VISUEL
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="border-l-8 border-black px-8 py-12 md:px-16">
            <h1 className="text-5xl font-black tracking-tighter md:text-7xl">
              2AVI
            </h1>
            <h2 className="border-l-4 border-red-600 pl-4 text-2xl font-black tracking-wider text-red-600 md:text-4xl">
              EXPERTISES AUDIOVISUELLES
            </h2>
            <p className="mt-8 max-w-2xl text-sm uppercase tracking-widest text-black/70">
              30+ années d'innovation. Cinéma. Événementiel. LED. Projections.
              Installations. Réalité Virtuelle.
            </p>

            {/* Counter Box */}
            <div className="mt-12 border-4 border-black bg-black p-6 text-white">
              <div className="text-6xl font-black">30+</div>
              <div className="mt-2 uppercase tracking-widest">Ans d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section — Raw Grid */}
      <section className="border-b-8 border-black bg-white">
        <div className="border-t-8 border-black px-8 py-16 md:px-16">
          <h2 className="text-6xl font-black tracking-tighter">
            DOMAINES
          </h2>

          <div className="mt-12 grid gap-0 border-4 border-black md:grid-cols-3">
            {[
              { title: "CINÉMA", desc: "Installations haut de gamme" },
              { title: "ÉVÉNEMENTS", desc: "Solutions intégrées" },
              { title: "LED DISPLAY", desc: "Écrans haute résolution" },
              { title: "PROJECTIONS", desc: "Technologie 4K / 8K" },
              { title: "SON", desc: "Systèmes immersifs" },
              { title: "3D", desc: "Technologie avancée" },
            ].map((item, idx) => (
              <div key={idx} className="border-r-4 border-b-4 border-black p-6 last:border-r-0 md:border-b-0">
                <div className="text-3xl font-black tracking-tight text-red-600">
                  {item.title}
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-black/60">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Raw & Irregular */}
      <section className="border-b-8 border-black bg-white px-8 py-16 md:px-16">
        <h2 className="text-6xl font-black tracking-tighter">
          RÉFÉRENCES
        </h2>

        <div className="mt-12 space-y-12">
          {/* Image Block 1 */}
          <div className="border-8 border-black">
            <div className="relative h-96 overflow-hidden bg-black">
              <Image
                src="/images/00-homepage/home-cinema-plein-air.jpg"
                alt="Cinema"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-4 text-sm uppercase tracking-widest text-black">
              CINÉMA PLEIN AIR — Installation extérieure
            </div>
          </div>

          {/* Image Block 2 */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-8 border-black">
              <div className="relative h-64 overflow-hidden bg-black">
                <Image
                  src="/images/00-homepage/home-festival-event.jpg"
                  alt="Festival"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-4 text-sm uppercase tracking-widest text-black">
                ÉVÉNEMENTIEL — Festivals & Conférences
              </div>
            </div>
            <div className="border-8 border-black">
              <div className="relative h-64 overflow-hidden bg-black">
                <Image
                  src="/images/00-homepage/home-salle-projection.jpg"
                  alt="Salle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-4 text-sm uppercase tracking-widest text-black">
                SALLES DE PROJECTION — Installations cinéma
              </div>
            </div>
          </div>

          {/* Image Block 3 */}
          <div className="border-8 border-black">
            <div className="relative h-80 overflow-hidden bg-black">
              <Image
                src="/images/02-solutions-cinema-evenements/header-evenements.jpg"
                alt="Evenements"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-4 text-sm uppercase tracking-widest text-black">
              ÉVÉNEMENTS CORPORATE — Solutions clés en main
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Text Sidebar */}
      <section className="relative border-b-8 border-black bg-red-600 px-8 py-20 md:px-16">
        <div className="flex items-center gap-12">
          <div className="hidden lg:block">
            <motion.div
              animate={{ rotate: -90 }}
              className="origin-center whitespace-nowrap text-4xl font-black tracking-tighter text-white"
            >
              INNOVATION AUDIOVISUELLE
            </motion.div>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl font-black tracking-tighter text-white">
              MISSION
            </h2>
            <p className="mt-6 max-w-2xl text-white/90">
              Depuis plus de 30 ans, 2AVI conçoit et déploie des solutions audiovisuelles pour les plus grands événements du monde. Cannes, Deauville, Mission Impossible 6 — nos projets définissent les standards de l'industrie.
            </p>
            <div className="mt-8 border-t-4 border-white pt-4 text-sm uppercase tracking-widest text-white/80">
              +50 références — 6 domaines — 30+ années
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Raw */}
      <section className="bg-white px-8 py-20 md:px-16">
        <div className="border-8 border-black bg-black p-12 text-center">
          <h2 className="text-6xl font-black tracking-tighter text-white">
            PARLONS PROJET
          </h2>
          <p className="mt-6 text-white/80">
            Votre vision, notre expertise
          </p>
          <button className="mt-8 border-4 border-red-600 bg-red-600 px-12 py-4 text-lg font-black tracking-widest text-white transition-all hover:bg-transparent hover:text-red-600">
            CONTACTER 2AVI
          </button>
        </div>
      </section>

      {/* Footer Brutalist */}
      <footer className="border-t-8 border-black bg-white px-8 py-12 md:px-16">
        <div className="border-t-4 border-black pt-8 text-xs uppercase tracking-widest text-black/60">
          2AVI CINEMA — 9 RUE SALVADOR ALLENDE, 91120 PALAISEAU — +33 6 16 15 10 73
        </div>
      </footer>

      {/* Corner Accent */}
      <div className="fixed bottom-0 right-0 h-32 w-32 border-l-8 border-t-8 border-black bg-red-600" />
    </main>
  );
}
