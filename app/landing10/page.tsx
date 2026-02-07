"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Landing10() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const magneticButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse for magnetic button
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (!magneticButtonRef.current) return;
      const button = magneticButtonRef.current;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2),
      );

      if (distance < 150) {
        const pullX = (e.clientX - centerX) * 0.3;
        const pullY = (e.clientY - centerY) * 0.3;
        setButtonOffset({ x: pullX, y: pullY });
      } else {
        setButtonOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
  };

  const words = ["L'ART", "DE", "LA", "PROJECTION"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border-2 border-red-600/30"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
              scale: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: Math.random() * -500,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              transform: `translateY(${scrollY * 0.5 * (i + 1)}px)`,
            }}
          />
        ))}

        {/* Floating lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-red-600/0 via-red-600/50 to-red-600/0"
            initial={{
              x: -1000,
              y: Math.random() * 1080,
              width: "200px",
            }}
            animate={{
              x: 2920,
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section with staggered text animation */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Image
                  src="/images/common/logo-2avi.png"
                  alt="2AVI"
                  width={100}
                  height={100}
                  priority
                />
              </motion.div>

              {/* Animated heading - words appear one by one */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl font-black leading-tight">
                  {words.map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={textVariant}
                      initial="hidden"
                      animate="visible"
                      className="inline-block mr-3"
                      style={{
                        background:
                          i === 0 || i === 3
                            ? "linear-gradient(to right, #ff3333, #ff6666)"
                            : "none",
                        backgroundClip: i === 0 || i === 3 ? "text" : "unset",
                        WebkitBackgroundClip:
                          i === 0 || i === 3 ? "text" : "unset",
                        WebkitTextFillColor:
                          i === 0 || i === 3 ? "transparent" : "white",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </div>

              {/* Animated description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-300 mb-8 max-w-md"
              >
                30+ ans d'expertise en technologies audiovisuelle. Cinéma,
                événements, LED displays, projection mapping.
              </motion.p>

              {/* Magnetic CTA Button */}
              <motion.button
                ref={magneticButtonRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: buttonOffset.y,
                  x: buttonOffset.x,
                }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
                }}
              >
                Commencer
              </motion.button>
            </motion.div>

            {/* Image side with scale animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/00-homepage/home-salle-projection.jpg"
                alt="Cinema"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="inline-flex items-center gap-8 px-8">
                <span className="text-3xl font-bold text-red-600">★</span>
                <span className="text-2xl font-bold text-white">
                  CINÉMA • ÉVÉNEMENTS • LED • PROJECTION MAPPING
                </span>
                <span className="text-3xl font-bold text-red-600">★</span>
              </div>
            ))}
          </div>
        </section>

        {/* Split Screen Section 1 */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
            {/* Slide in from left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/00-homepage/home-festival-event.jpg"
                alt="Events"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </motion.div>

            {/* Slide in from right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Événements Inoubliables
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Des avant-premières de films prestigieux aux festivals
                internationaux, nous créons des expériences audiovisuelles
                mémorables. Notre expertise couvre tous les aspects techniques
                et créatifs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 transition-colors font-bold rounded-lg"
              >
                En Savoir Plus →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Services with flip animation on hover */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-center mb-16"
            >
              Nos Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective">
              {[
                {
                  title: "Cinéma",
                  icon: "🎬",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  title: "Événements",
                  icon: "🎪",
                  color: "from-purple-600 to-purple-800",
                },
                {
                  title: "LED Displays",
                  icon: "💡",
                  color: "from-yellow-600 to-orange-800",
                },
                {
                  title: "Projection Mapping",
                  icon: "🎨",
                  color: "from-pink-600 to-red-800",
                },
                {
                  title: "Audio",
                  icon: "🔊",
                  color: "from-cyan-600 to-blue-800",
                },
                {
                  title: "Expertise",
                  icon: "⚙️",
                  color: "from-gray-600 to-gray-800",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ rotateY: 10, rotateX: -10 }}
                  className={cn(
                    "h-80 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer",
                    `bg-gradient-to-br ${service.color} shadow-lg hover:shadow-2xl transition-shadow`,
                  )}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="text-6xl mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference Gallery with staggered zoom */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-center mb-16"
            >
              Références
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "/images/12-references/ref-10-palais-garnier-la-flute-enchantee-2012.jpg",
                "/images/12-references/ref-15-opera-de-lyon-aida-2015.jpg",
                "/images/12-references/ref-20-theatre-du-chatelet-2017.jpg",
                "/images/12-references/ref-22-opera-de-bordeaux-2018.jpg",
                "/images/12-references/ref-27-musee-du-louvre-expo-2019.jpg",
                "/images/12-references/ref-28-festival-cannes-2019.jpg",
                "/images/12-references/ref-32-theatre-national-odeon-2019.jpg",
                "/images/12-references/ref-36-parc-asterix-2020.jpg",
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.1, zIndex: 50 }}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src={src}
                    alt={`Reference ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-120 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section className="relative min-h-96 flex items-center justify-center overflow-hidden py-20 px-6">
          <motion.div
            className="absolute inset-0"
            style={{
              y: scrollY * 0.5,
            }}
          >
            <Image
              src="/images/common/header-references.jpg"
              alt="Parallax"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center max-w-3xl"
          >
            <h2 className="text-5xl font-bold mb-6">
              Transformez Votre Vision
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Depuis 30 ans, nous transformons les visions les plus ambitieuses
              en réalités audiovisuelles spectaculaires.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Démarrer un Projet
            </motion.button>
          </motion.div>
        </section>

        {/* Footer CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-8"
            >
              Prêt pour l'Excellence ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-300 mb-12"
            >
              Contactez nos experts pour transformer votre prochain projet
              audiovisuel
            </motion.p>

            <div className="flex gap-6 justify-center flex-wrap">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
              >
                Nous Contacter
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 border-2 border-red-600 text-red-400 font-bold rounded-lg hover:bg-red-600/10 transition-colors"
              >
                Voir Portfolio
              </motion.button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-red-900/50 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-2">
              © 2024 2AVI - L'Excellence Audiovisuelle
            </p>
            <p className="text-gray-600 text-sm">
              30+ ans de passion pour la projection et l'innovation
            </p>
          </div>
        </footer>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
