'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Landing3() {
  const services = [
    { title: 'Cinéma', subtitle: 'Installations & Projection' },
    { title: 'Événementiel', subtitle: 'Productions Premium' },
    { title: 'LED Display', subtitle: 'Écrans Haute Luminosité' },
    { title: 'Son', subtitle: 'Systèmes Immersif' },
    { title: '3D', subtitle: 'Stéréoscopie' },
    { title: 'Réalité Virtuelle', subtitle: 'Expériences' }
  ];

  const newsItems = [
    { image: '/images/13-news/news-miramar-cannes.png', title: 'Miramar Cannes', year: '2024' },
    { image: '/images/13-news/news-mi6-chaillot.jpg', title: 'Mission Impossible 6', year: '2023' },
    { image: '/images/13-news/news-loreal-cannes.png', title: 'L\'Oréal Paris', year: '2023' },
    { image: '/images/13-news/news-festival-lama-2017.png', title: 'Festival Lama', year: '2017' },
  ];

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Hero Section - Full Width Asymmetric */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 gap-0">
          {/* Text side - left 5 columns */}
          <div className="col-span-12 md:col-span-5 bg-white" />
          {/* Image side - right 7 columns */}
          <div className="col-span-12 md:col-span-7 bg-black" />
        </div>

        <div className="relative w-full h-full grid grid-cols-12 gap-0 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-span-12 md:col-span-5 px-8 md:px-16 py-16 md:py-0 flex flex-col justify-center"
          >
            <div className="mb-8">
              <Image
                src="/images/common/logo-2avi.png"
                alt="2AVI"
                width={80}
                height={40}
              />
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tight">
              L'EXCELLENCE
              <br />
              <span className="text-red-600">AUDIOVISUELLE</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-700 mb-12 max-w-md leading-relaxed">
              Trente ans de passion, d'innovation et d'excellence au cœur de vos projets cinématographiques les plus ambitieux.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm font-light text-gray-600 border-l-4 border-red-600 pl-6"
            >
              <p className="italic mb-2">«Nous transformons les visions en réalités cinématographiques»</p>
              <p className="font-bold text-black">— 2AVI Cinema</p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 md:col-span-7 relative h-96 md:h-screen"
          >
            <Image
              src="/images/00-homepage/home-cinema-plein-air.jpg"
              alt="Cinema Installation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Pull Quote Section */}
      <section className="relative py-24 px-8 md:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <p className="text-5xl md:text-7xl font-light italic mb-8 leading-tight">
              «30 ans de passion
              <br />
              <span className="font-black not-italic text-red-600">PURE</span>
              <br />
              cinéma»
            </p>
            <div className="w-12 h-1 bg-red-600 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services - Horizontal Editorial Strip */}
      <section className="relative py-20 px-8 md:px-16 bg-white border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-black mb-16 tracking-tight"
          >
            NOS DOMAINES
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group cursor-pointer"
              >
                <div className="text-3xl font-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </div>
                <p className="text-sm font-light text-gray-600 leading-tight">
                  {service.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Grid - Asymmetric Layout */}
      <section className="relative py-24 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-black mb-16 tracking-tight"
          >
            ACTUALITÉS
          </motion.h2>

          {/* Custom asymmetric grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-max">
            {/* Large featured image - top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-50px' }}
              className="col-span-12 md:col-span-6 row-span-2 relative h-96 md:h-[500px] overflow-hidden group"
            >
              <Image
                src={newsItems[0].image}
                alt={newsItems[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-white font-black text-lg">{newsItems[0].title}</p>
                <p className="text-gray-300 text-sm font-light">{newsItems[0].year}</p>
              </div>
            </motion.div>

            {/* Two smaller on right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="col-span-12 md:col-span-6 relative h-56 overflow-hidden group"
            >
              <Image
                src={newsItems[1].image}
                alt={newsItems[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <p className="text-white font-black text-sm">{newsItems[1].title}</p>
                  <p className="text-gray-200 text-xs font-light">{newsItems[1].year}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
              className="col-span-12 md:col-span-6 relative h-56 overflow-hidden group"
            >
              <Image
                src={newsItems[2].image}
                alt={newsItems[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4">
                  <p className="text-white font-black text-sm">{newsItems[2].title}</p>
                  <p className="text-gray-200 text-xs font-light">{newsItems[2].year}</p>
                </div>
              </div>
            </motion.div>

            {/* Last image - bottom full */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: '-50px' }}
              className="col-span-12 relative h-64 md:h-80 overflow-hidden group"
            >
              <Image
                src={newsItems[3].image}
                alt={newsItems[3].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-white font-black text-2xl">{newsItems[3].title}</p>
                  <p className="text-gray-300 text-sm font-light">{newsItems[3].year}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reference Showcase */}
      <section className="relative py-24 px-8 md:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-black mb-16 tracking-tight"
          >
            QUELQUES RÉFÉRENCES
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/12-references/ref-01-cine-concert-2001-philharmonie.jpg',
              '/images/12-references/ref-05-grand-rex-cabine.jpg',
              '/images/12-references/ref-07-led-display-cap3000-b.jpg',
              '/images/12-references/ref-17-cine-concert-visitors-philharmonie.jpg',
              '/images/12-references/ref-18-cine-concert-petite-taupe-lyon.jpg',
              '/images/12-references/ref-25-led-display-ugc19.jpg',
              '/images/12-references/ref-39-mopa-2019.jpg',
              '/images/12-references/ref-42-theatre-marigny-champs-elysees-2019.jpg',
            ].map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative aspect-square overflow-hidden group border border-gray-800"
              >
                <Image
                  src={ref}
                  alt={`Référence ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 px-8 md:px-16 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Parlons de votre
                <br />
                <span className="text-red-600">projet</span>
              </h2>
              <p className="text-lg font-light text-gray-700 mb-8 leading-relaxed">
                Contactez nos équipes pour découvrir comment 2AVI peut transformer vos ambitions audiovisuelles en réalité.
              </p>
            </div>
            <div className="space-y-4 text-lg font-light">
              <div className="border-l-4 border-red-600 pl-6">
                <p className="font-black text-black mb-2">Adresse</p>
                <p className="text-gray-700">9 rue Salvador Allende<br />91120 Palaiseau, France</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="font-black text-black mb-2">Contacts</p>
                <p className="text-gray-700">jbh@2avi.fr<br />pascal@2avi.fr</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8 md:px-16 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Image
              src="/images/common/logo-2avi.png"
              alt="2AVI Logo"
              width={100}
              height={50}
            />
          </div>
          <p className="text-gray-400 text-sm font-light">
            &copy; 2024 2AVI Cinema. L'excellence audiovisuelle depuis 1994.
          </p>
        </div>
      </footer>
    </div>
  );
}
