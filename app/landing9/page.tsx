"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export default function Landing9() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const element = scrollRef.current;
    if (!element) return;
    const scrollAmount = 400;
    element.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="min-h-96 flex flex-col items-center justify-center px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/images/common/logo-2avi.png"
            alt="2AVI Logo"
            width={100}
            height={100}
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900"
        >
          L'Excellence Audiovisuelle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 text-center max-w-2xl mb-12"
        >
          30+ années d'innovation en cinéma, événements et technologies LED
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors">
            Découvrir
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-colors">
            En Savoir Plus
          </button>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 auto-rows-[300px]">
          {/* Large Cinema Card - spans 3 columns and 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 lg:col-span-3 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <Image
              src="/images/00-homepage/home-salle-projection.jpg"
              alt="Cinema Installation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Installations Cinéma</h3>
              <p className="text-gray-200">Salles et plein-air premium</p>
            </div>
          </motion.div>

          {/* Stats Card - spans 1.5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1.5 lg:col-span-3 rounded-2xl bg-white shadow-lg p-8 flex flex-col justify-center cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-red-600">30</span>
              <span className="text-2xl text-gray-500">+</span>
            </div>
            <p className="text-gray-700 font-medium text-lg">
              Ans d'Expérience
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Leadership reconnu depuis 1994
            </p>
          </motion.div>

          {/* LED Display Icon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1.5 lg:col-span-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow text-center"
          >
            <div className="text-6xl mb-3">💡</div>
            <h3 className="text-xl font-bold text-white">LED Displays</h3>
            <p className="text-white/80 text-sm mt-1">Ultra haute résolution</p>
          </motion.div>

          {/* Reference Gallery Strip - spans full width, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 lg:col-span-6 rounded-2xl bg-gray-900 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="relative h-[300px] flex items-center">
              {/* Scroll buttons */}
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-4 z-20 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                ←
              </button>

              {/* Scrollable gallery */}
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide px-16 py-4 w-full h-full items-center"
              >
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex-shrink-0 h-64 w-96 relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <Image
                      src={src}
                      alt={`Reference ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => handleScroll("right")}
                className="absolute right-4 z-20 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Quote/Testimonial Card - tall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1.5 lg:col-span-2 lg:row-span-2 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg p-8 flex flex-col justify-center cursor-pointer text-white hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">"</div>
            <p className="text-xl font-light italic mb-6 leading-relaxed">
              La projection n'est pas juste une technologie, c'est un art que
              nous maîtrisons depuis plus de 30 ans.
            </p>
            <p className="text-red-200 font-semibold">— 2AVI Expertise</p>
          </motion.div>

          {/* Audio/Sound Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1.5 lg:col-span-2 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow text-center text-white"
          >
            <div className="text-6xl mb-3">🔊</div>
            <h3 className="text-xl font-bold">Systèmes Audio</h3>
            <p className="text-blue-200 text-sm mt-1">Immersive & Spatial</p>
          </motion.div>

          {/* Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1.5 lg:col-span-2 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow text-center text-white group"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
              →
            </div>
            <h3 className="text-lg font-bold mb-2">Nous Contacter</h3>
            <p className="text-gray-300 text-sm">Démarrez votre projet</p>
          </motion.div>

          {/* Projection Mapping Card - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 lg:col-span-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg p-8 flex flex-col justify-center cursor-pointer hover:shadow-xl transition-shadow text-white"
          >
            <div className="text-5xl mb-3">🎨</div>
            <h3 className="text-2xl font-bold mb-2">Projection Mapping 3D</h3>
            <p className="text-white/80">
              Installations artistiques immersives
            </p>
          </motion.div>

          {/* Events Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 lg:col-span-3 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <Image
              src="/images/00-homepage/home-festival-event.jpg"
              alt="Events"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-1">Événements</h3>
              <p className="text-gray-200 text-sm">
                Festivals, avant-premières, spectacles
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Prêt à Illuminer Votre Événement ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600 mb-12"
          >
            Nos experts vous accompagnent du concept à la réalisation pour créer
            une expérience inoubliable.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-red-600 text-white font-bold rounded-xl text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Planifier une Consultation
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/common/logo-2avi.png"
              alt="2AVI Logo"
              width={60}
              height={60}
            />
          </div>
          <p className="text-gray-400 mb-2">
            © 2024 2AVI - L'excellence audiovisuelle
          </p>
          <p className="text-gray-500 text-sm">
            30+ ans d'expertise en cinéma, événements et technologies LED
          </p>
        </div>
      </footer>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
