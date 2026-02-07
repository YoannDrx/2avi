"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Landing7() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background grain effect */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Spotlight effect on hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Film strip top decoration */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none">
        <div className="flex justify-around h-full items-center px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-8 border-2 border-red-700/40 rounded-sm flex items-center justify-center text-xs text-red-700/20"
            >
              ▪
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center min-h-screen flex flex-col items-center justify-center">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 blur-3xl opacity-50 -z-10" style={{ boxShadow: "0 0 60px 20px rgba(255, 0, 0, 0.4)" }} />
          <Image
            src="/images/common/logo-2avi.png"
            alt="2AVI Logo"
            width={120}
            height={120}
            className="relative z-10"
            priority
          />
        </motion.div>

        {/* Main headline with neon effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #ff3333, #ff6666, #ff3333)",
            textShadow: "0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.4)",
            letterSpacing: "0.05em",
          }}
        >
          L'ART DE LA PROJECTION
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-red-300/70 max-w-2xl mb-12"
        >
          30+ ans d'expertise en installations cinéma, événements et affichages LED
        </motion.p>

        {/* Film strip divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-0.5 w-32 mb-12"
          style={{
            background: "linear-gradient(to right, transparent, #ff3333, transparent)",
            boxShadow: "0 0 10px rgba(255, 0, 0, 0.6)",
          }}
        />

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 0, 0.8)" }}
          className="px-8 py-4 border-2 border-red-600 text-red-400 font-semibold rounded-sm relative overflow-hidden group"
          style={{
            boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
          }}
        >
          <div className="absolute inset-0 bg-red-600 -z-10 opacity-0 group-hover:opacity-20 transition-opacity" />
          Découvrir nos Services
        </motion.button>
      </section>

      {/* Services Theater Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              textShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
            }}
          >
            <span className="text-red-500">NOS SERVICES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cinéma",
                description: "Installations cinéma de haut prestige pour salles, festivals et plein-air",
                icon: "🎬",
              },
              {
                title: "Événements",
                description: "Projections et installations pour avant-premières, concerts et spectacles",
                icon: "🎪",
              },
              {
                title: "LED Display",
                description: "Affichages LED haute résolution pour intérieurs et extérieurs",
                icon: "💡",
              },
              {
                title: "Projection Mapping",
                description: "Projections 3D immersives sur bâtiments et installations artistiques",
                icon: "🎨",
              },
              {
                title: "Audio Professionnel",
                description: "Systèmes sonores surround et audio spatial pour espaces cinéma",
                icon: "🔊",
              },
              {
                title: "Expertise Technique",
                description: "Conseil et intégration de technologie audiovisuelle premium",
                icon: "⚙️",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
                }}
                className="p-8 border-2 border-red-700/50 rounded-lg backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References Gallery with spotlight hover */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-red-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              textShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
            }}
          >
            <span className="text-red-500">RÉFÉRENCES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/12-references/ref-10-palais-garnier-la-flute-enchantee-2012.jpg",
              "/images/12-references/ref-15-opera-de-lyon-aida-2015.jpg",
              "/images/12-references/ref-20-theatre-du-chatelet-2017.jpg",
              "/images/12-references/ref-22-opera-de-bordeaux-2018.jpg",
              "/images/12-references/ref-27-musee-du-louvre-expo-2019.jpg",
              "/images/12-references/ref-28-festival-cannes-2019.jpg",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Reference ${idx + 1}`}
                  fill
                  className="object-cover group-hover:brightness-150 transition-all duration-300"
                />
                {/* Spotlight overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "inset 0 0 60px rgba(255, 0, 0, 0.3)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 px-6 flex items-center justify-center min-h-96">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255, 0, 0, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <p
            className="text-3xl md:text-5xl font-light italic text-red-300/80 leading-relaxed"
            style={{
              textShadow: "0 0 20px rgba(255, 0, 0, 0.3)",
            }}
          >
            "La projection est un art. <br />
            <span className="text-red-500">Nous en sommes les maîtres.</span>"
          </p>
          <p className="mt-8 text-red-600/60 text-lg">— 2AVI, 30+ ans d'excellence</p>
        </motion.div>
      </section>

      {/* Film strip bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none">
        <div className="flex justify-around h-full items-center px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-8 border-2 border-red-700/40 rounded-sm flex items-center justify-center text-xs text-red-700/20"
            >
              ▪
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6 text-center border-t border-red-900/30"
      >
        <p className="text-gray-400 mb-6">Prêt à illuminer votre prochain projet ?</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 bg-red-700 text-white font-bold rounded-sm transition-all hover:bg-red-600"
          style={{
            boxShadow: "0 0 25px rgba(255, 0, 0, 0.5)",
          }}
        >
          Contactez-nous
        </motion.button>
      </motion.footer>
    </div>
  );
}
