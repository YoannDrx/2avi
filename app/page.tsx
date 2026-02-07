import Image from "next/image";
import { SiteConfig } from "@/site-config";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-brand-black">
        <Image
          src="/images/00-homepage/home-cinema-plein-air.jpg"
          alt="Cinéma plein air"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center">
          <Image
            src="/images/common/logo-2avi.png"
            alt={SiteConfig.title}
            width={200}
            height={80}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {SiteConfig.title}
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            {SiteConfig.description}
          </p>
        </div>
      </section>
    </main>
  );
}
