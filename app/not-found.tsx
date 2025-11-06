"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <NoiseBackground />
      <Navbar />

      {/* 404 Section */}
      <section className="flex-1 flex items-center justify-center py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <h1 className="text-[150px] md:text-[250px] font-bold tracking-tighter text-white/10 leading-none select-none">
              404
            </h1>
          </div>

          {/* Content */}
          <div className="relative -mt-32 md:-mt-48">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-white/40"></div>
              <div className="text-xs uppercase tracking-widest text-white/80">
                Page introuvable
              </div>
              <div className="h-px w-12 bg-white/40"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Oups !
              <br />
              <span className="text-white/70">Cette page n&apos;existe pas</span>
            </h2>

            <p className="text-lg text-white/60 max-w-md mx-auto mb-12">
              La page que vous recherchez a peut-être été déplacée, supprimée ou n&apos;a jamais
              existé.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group relative px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/90"
              >
                <span className="relative z-10">Retour à l&apos;accueil</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                href="/projects"
                className="group relative px-8 py-4 border border-white/40 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/10"
              >
                <span className="relative z-10">Voir les projets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
