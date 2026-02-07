'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export default function Landing1() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: '🎬', label: 'Cinéma', desc: 'Installations professionnelles' },
    { icon: '🎥', label: 'Vidéo', desc: 'Productions haute résolution' },
    { icon: '💡', label: 'LED Display', desc: 'Écrans haute luminosité' },
    { icon: '🔊', label: 'Son', desc: 'Systèmes audio immersif' },
    { icon: '🎭', label: '3D', desc: 'Projection stéréoscopique' },
    { icon: '🥽', label: 'Réalité Virtuelle', desc: 'Expériences immersives' }
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

  const newsItems = [
    {
      title: 'Miramar Cannes',
      desc: 'Installation premium pour le festival',
      image: '/images/13-news/news-miramar-cannes.png',
      year: '2024'
    },
    {
      title: 'Mission Impossible 6 - Chaillot',
      desc: 'Projection exceptionnelle au Théâtre du Chaillot',
      image: '/images/13-news/news-mi6-chaillot.jpg',
      year: '2023'
    }
  ];

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Film Grain Overlay */}
      <style>{`
        @keyframes grain {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.05; }
        }
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" /></filter><rect width="400" height="400" filter="url(%23noise)" opacity="0.15" /></svg>');
          pointer-events: none;
          z-index: 50;
          animation: grain 1.5s steps(2) infinite;
          mix-blend-mode: multiply;
        }
      `}</style>
      <div className="grain" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform'
          }}
        >
          <Image
            src="/images/00-homepage/home-cinema-plein-air.jpg"
            alt="Cinema plein air sunset"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-6 tracking-tight">
              30 ans de
              <br />
              <span className="text-red-600">pure passion</span>
              <br />
              cinéma
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            L'excellence audiovisuelle au service de vos rêves cinématographiques
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
              <motion.div className="w-1 h-2 bg-red-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl md:text-6xl font-serif font-bold mb-20 text-center"
          >
            Nos Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="group bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {service.label}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Gallery */}
      <section className="relative py-24 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl md:text-6xl font-serif font-bold mb-20 text-center"
          >
            50+ Projets de Prestige
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {references.map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative overflow-hidden rounded-lg aspect-square group"
              >
                <Image
                  src={ref}
                  alt={`Reference ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl md:text-6xl font-serif font-bold mb-20 text-center"
          >
            Dernières Actualités
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-full text-sm font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-gray-900 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image
                src="/images/common/logo-2avi.png"
                alt="2AVI Logo"
                width={120}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Plus de 30 ans d'expertise au service de l'excellence audiovisuelle.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Cinéma</li>
                <li>Événementiel</li>
                <li>LED Display</li>
                <li>3D & VR</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">9 rue Salvador Allende</p>
              <p className="text-gray-400 text-sm">91120 Palaiseau, France</p>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 2AVI. L'excellence audiovisuelle.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
