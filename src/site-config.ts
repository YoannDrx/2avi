export const SiteConfig = {
  title: "2AVI",
  description: "Solutions audiovisuelles pour le cinéma, l'événementiel et l'installation",
  prodUrl: "https://www.2avi.fr",
  appId: "2avi",
  domain: "2avi.fr",
  company: {
    name: "2AVI",
    fullName: "2AVI Cinema",
    address: "9 rue Salvador Allende, 91120 Palaiseau",
    siret: "941 431 348 00015",
    contacts: {
      jeanBaptiste: { name: "Jean Baptiste", email: "jbh@2avi.fr", phone: "06 16 15 10 73" },
      pascal: { name: "Pascal", email: "pascal@2avi.fr", phone: "06 62 85 81 41" },
    },
  },
  nav: {
    solutions: [
      { label: "Installations", href: "/solutions/installations" },
      { label: "Événements", href: "/solutions/evenements" },
      { label: "Prestations", href: "/solutions/prestations" },
      { label: "Services", href: "/solutions/services" },
      { label: "Cinéma Plein Air", href: "/solutions/cinema-plein-air" },
      { label: "3D", href: "/solutions/3d" },
      { label: "Vidéo", href: "/solutions/video" },
      { label: "LED Display", href: "/solutions/led-display" },
      { label: "Réalité Virtuelle", href: "/solutions/realite-virtuelle" },
      { label: "Son", href: "/solutions/son" },
    ],
    main: [
      { label: "Références", href: "/references" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;
