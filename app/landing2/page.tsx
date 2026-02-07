'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Landing2() {
  const stats = [
    { number: '30+', label: 'années d\'expertise' },
    { number: '50+', label: 'projets réalisés' },
    { number: '6', label: 'domaines de compétence' }
  ];

  const services = [
    'Cinéma & Projection',
    'Événementiel',
    'LED Display',
    'Son Immersif',
    '3D Stéréoscopique',
    'Réalité Virtuelle'
  ];

  const references = [
    '/images/12-references/ref-01-cine-concert-2001-philharmonie.jpg',
    '/images/12-references/ref-05-grand-rex-cabine.jpg',
    '/images/12-references/ref-07-led-display-cap3000-b.jpg',
    '/images/12-references/ref-17-cine-concert-visitors-philharmonie.jpg',
    '/images/12-references/ref-18-cine-concert-petite-taupe-lyon.jpg',
    '/images/12-references/ref-25-led-display-ugc19.jpg',
    '/images/12-references/ref-39-mopa-2019.jpg',
    '/images/12-references/ref-42-theatre-marigny-champs-elysees-2019.jpg',
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section className="min-h-screen flex items-center px-4 md:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <div className="w-1 h-24 bg-red-600 mb-12" />
              <h1 className="text-7xl lg:text-8xl font-black tracking-tight mb-8">
                2AVI
              </h1>
              <p className="text-lg font-light text-gray-600 max-w-md leading-relaxed">
                L'excellence audiovisuelle en trois décennies de passion et de dévouement.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-black text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-xs font-light text-gray-600 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full min-h-[500px]"
          >
            <Image
              src="/images/00-homepage/home-salle-projection.jpg"
              alt="Salle projection"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl lg:text-6xl font-black mb-20 tracking-tight"
          >
            Domaines de Compétence
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((service, idx) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-white p-12 flex items-center justify-center text-center min-h-48 hover:bg-gray-50 transition-colors duration-300"
              >
                <p className="text-xl font-light text-gray-800">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Grid */}
      <section className="py-24 px-4 md:px-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl lg:text-6xl font-black mb-20 tracking-tight"
          >
            Références
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {references.map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative aspect-square overflow-hidden bg-white group"
              >
                <Image
                  src={ref}
                  alt={`Reference ${idx + 1}`}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 px-4 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 mb-4">
                À propos
              </h3>
              <p className="text-base font-light leading-relaxed text-gray-800">
                Depuis plus de 30 ans, 2AVI se positionne comme leader incontournable dans les solutions audiovisuelles haute performance.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 mb-4">
                Adresse
              </h3>
              <p className="text-base font-light text-gray-800">
                9 rue Salvador Allende<br />
                91120 Palaiseau<br />
                France
              </p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2 text-base font-light text-gray-800">
                <li>Références</li>
                <li>Actualités</li>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm font-light text-gray-600">
          <p>&copy; 2024 2AVI Cinema. Excellence audiovisuelle.</p>
        </div>
      </footer>
    </div>
  );
}
