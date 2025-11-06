"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Career() {
  const ref = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Freelance",
      date: "2024 - Present",
    },
    {
      number: "02",
      title: "The Seed Crew",
      date: "2019 - 2024",
      url: "https://www.theseedcrew.com",
      type: "CDI",
      description: "Co-fondateur, Lead Tech, et Game Developer",
    },
    {
      number: "03",
      title: "JungleVR",
      date: "2019",
      url: "https://www.junglevr.io",
      type: "Stage (6 mois)",
      description:
        "Participation et amélioration d’un logiciel de revue de maquette d'Architect sous Unity en réalité virtuelle.",
    },
    {
      number: "04",
      title: "Knap",
      date: "2018",
      url: "https://www.knap.fr",
      type: "Stage (6 mois)",
      description: "Réalisation d'un système de géolocalisation indoor pour chariot connecté.",
    },
    {
      number: "05",
      title: "Appolonia",
      url: "https://www.appolonia.fr",
      date: "2017",
      type: "Stage (4 mois)",
      description:
        "Réalisation d’une application mobile IONIC de transfert d’argent sur machines à sous",
    },
    {
      number: "06",
      title: "Appolonia",
      url: "https://www.appolonia.fr",
      date: "2016",
      type: "Stage (2 mois)",
      description: "Réalisation d’un menu d’administrateur (Web) pour machine à sous",
    },
  ];

  return (
    <section id="career" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              Parcours Professionnel
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Mon parcours
            <br />
            <span className="text-white/70">Étape par Étape</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical line with improved visibility */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/30 md:left-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-24 md:pl-0`}>
                {/* Increase contrast of step numbers from 10% to 40% */}
                <div
                  className={`text-4xl md:text-6xl font-bold text-white/40 mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <a
                    href={step.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors group"
                  >
                    {step.title}
                  </a>
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 text-white ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {step.date}
                </h3>
                {/* Increase contrast of descriptions from 70% to 85% */}
                <div
                  className={`${index % 2 === 0 ? "md:text-right md:ml-auto" : ""} ${
                    index % 2 === 0 ? "md:max-w-sm md:inline-block" : "max-w-sm"
                  }`}
                >
                  <p className="text-white/30 italic bold mb-1">{step.type}</p>

                  <p className="text-white/85">{step.description}</p>
                </div>
              </div>

              <div className="relative flex items-center justify-center z-10 absolute-vertical-center md:static">
                {/* Increase border contrast from 30% to 40% */}
                <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a] group-hover:border-white/60 transition-all duration-300">
                  <div className="text-xl font-bold text-white">{step.number}</div>
                </div>
              </div>

              <div className="flex-1 hidden md:block">
                {/* Increase horizontal line contrast from 20% to 30% */}
                <div className="h-[2px] w-full bg-white/30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-60 left-20 w-40 h-40 border border-white/5"></div>

      {/* Add custom styles for mobile positioning */}
      <style jsx>{`
        .absolute-vertical-center {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (min-width: 768px) {
          .absolute-vertical-center {
            position: static;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
