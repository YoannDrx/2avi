"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function Landing8() {
  const timelineRef = useRef(null);

  const chapters = [
    {
      id: "debuts",
      title: "Les Débuts",
      subtitle: "1994 - 2005",
      description: "2AVI naît de la passion pour le cinéma et les projections. Fondée en 1994, l'entreprise débute par des installations cinéma dans des salles indépendantes. Les premières collaborations avec des festivals régionaux marquent le début d'une belle histoire. Les années 2000 voient l'émergence de 2AVI comme expert incontournable du secteur audiovisuel français.",
      milestones: [
        { year: "1994", text: "Fondation de 2AVI" },
        { year: "1998", text: "Premières installations Dolby" },
        { year: "2001", text: "Festival de Cannes" },
      ],
    },
    {
      id: "numerique",
      title: "L'Ère Numérique",
      subtitle: "2006 - 2015",
      description: "La révolution numérique transforme l'industrie. 2AVI investit massivement dans les technologies de projection 4K, les systèmes LED haute résolution et l'audio spatial. Des partenariats avec de grands festivals et institutions culturelles consolident notre position. Les projections immersives et le mapping 3D deviennent nos signatures.",
      milestones: [
        { year: "2008", text: "1ère projection 4K" },
        { year: "2012", text: "LED Display spécialisé" },
        { year: "2014", text: "Certification 3D premium" },
      ],
    },
    {
      id: "grandes-scenes",
      title: "Les Grandes Scènes",
      subtitle: "2016 - 2020",
      description: "2AVI installe ses systèmes dans les plus prestigieux théâtres d'Europe. Opéra de Paris, Festival de Deauville, Palais Garnier... nos réalisations deviennent des références. Mission Impossible 6 utilise nos technologies de projection. Nous travaillons désormais avec les plus grands événements et les institutions culturelles les plus exigeantes.",
      milestones: [
        { year: "2017", text: "Deauville Film Festival" },
        { year: "2018", text: "Mission Impossible 6" },
        { year: "2020", text: "Opéra de Bordeaux" },
      ],
    },
    {
      id: "aujourd-hui",
      title: "Aujourd'hui",
      subtitle: "2021 - Présent",
      description: "2AVI continue d'innover avec les technologies les plus avancées : projections holographiques, LED ultra-fine pitch, systèmes audio immersifs. Nous servons plus de 200 clients prestigieux à travers l'Europe. Notre expertise couvre cinéma, événementiel, muséographie, et installations permanentes. 30+ ans de passion pour la perfection.",
      milestones: [
        { year: "2022", text: "Technologie holographique" },
        { year: "2023", text: "200+ clients satisfaits" },
        { year: "2024", text: "Leader du secteur" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl z-10"
        >
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/common/logo-2avi.png"
              alt="2AVI Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black">
            30+ Ans d'Excellence
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            L'histoire de 2AVI est celle de la passion pour la projection et l'innovation continue.
            Découvrez comment nous sommes devenus les experts incontournables du secteur audiovisuel.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            Commencer le voyage
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative py-32 px-6">
        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-400 to-red-600 -translate-x-1/2" />

        {chapters.map((chapter, chapterIdx) => (
          <motion.section
            key={chapter.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-48 relative"
          >
            {/* Chapter container */}
            <div className="max-w-7xl mx-auto">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 top-0 w-8 h-8 bg-red-600 rounded-full -translate-x-1/2 border-4 border-white shadow-lg z-20"
              />

              {/* Alternating layout: odd on left, even on right */}
              <div
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                  chapterIdx % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:[&>*:first-child]:order-last"
                )}
              >
                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: chapterIdx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:pr-12"
                >
                  {/* Sticky chapter heading */}
                  <div className="sticky top-24 z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-red-600 mb-3">
                      {chapter.title}
                    </h2>
                    <p className="text-2xl text-gray-400 font-light mb-6">{chapter.subtitle}</p>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-12">
                    {chapter.description}
                  </p>

                  {/* Milestones */}
                  <div className="space-y-6">
                    {chapter.milestones.map((milestone, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                          <span className="text-xl font-bold text-red-600">{milestone.year}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 font-medium group-hover:text-red-600 transition-colors">
                            {milestone.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={
                      chapterIdx === 0
                        ? "/images/12-references/ref-01-cine-concert-2001-philharmonie.jpg"
                        : chapterIdx === 1
                          ? "/images/12-references/ref-15-opera-de-lyon-aida-2015.jpg"
                          : chapterIdx === 2
                            ? "/images/12-references/ref-28-festival-cannes-2019.jpg"
                            : "/images/12-references/ref-46-opera-bastille-indes-galantes-2020.jpg"
                    }
                    alt={chapter.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Stats Section */}
      <section className="relative py-32 px-6 bg-gradient-to-r from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-black"
          >
            Nos Chiffres Parlent
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Ans d'expérience" },
              { number: "200+", label: "Clients satisfaits" },
              { number: "50+", label: "Grands événements" },
              { number: "15+", label: "Pays desservis" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl font-bold text-red-600 mb-3">{stat.number}</div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with background image */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/common/header-contact.jpg"
          alt="Contact Background"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à écrire le prochain chapitre ?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Nos experts sont à votre disposition pour concrétiser votre projet audiovisuel.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
          >
            Nous Contacter
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 2AVI - L'excellence audiovisuelle</p>
          <p className="text-sm text-gray-500">
            Depuis 1994, nous transformons la vision en réalité immersive
          </p>
        </div>
      </footer>
    </div>
  );
}
