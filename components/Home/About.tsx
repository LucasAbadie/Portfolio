"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Square, Circle, Triangle, Hexagon, MessageSquareHeart } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const features = [
    {
      icon: <Square className="w-6 h-6" />,
      title: "Code Structuré",
      description: "Un développement propre et rigoureux qui garantit stabilité et évolutivité.",
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: "Solutions Sur-Mesure",
      description: "Des fonctionnalités pensées pour répondre précisément aux besoins réels.",
    },
    {
      icon: <Triangle className="w-6 h-6" />,
      title: "Expérience Intuitive",
      description: "Une navigation simple et claire, qui met l’utilisateur au centre.",
    },
    {
      icon: <Hexagon className="w-6 h-6" />,
      title: "Valeur Durable",
      description: "Des projets solides qui continuent d’apporter des résultats sur le long terme.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-4 mt-20 sm:mt-0 sm:py-24 relative overflow-hidden bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-20">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">À propos de moi</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Le développeur
            <br />
            <span className="text-white/70">de tous vos projets</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
            <Image
              src="/assets/me.webp"
              alt="Moi, avec une barbe et les cheveux attachés, assis à un bureau, concentré sur des écrans d'ordinateur affichant du code."
              width={800}
              height={800}
              className="rounded-full aspect-square p-2 border-2 border-dashed border-white/20"
            />
            <div className="max-w-4xl mx-auto col-span-2">
              <div className="relative border-2 border-white/20 p-8 md:p-12 bg-white/5 backdrop-blur-sm">
                <div className="absolute top-6 right-8 text-white/10 opacity-60">
                  <MessageSquareHeart size={120} />
                </div>

                <div className="relative z-10 min-h-[200px] flex flex-col">
                  <p>
                    Passionné par l’univers des technologies et des jeux vidéo, je transforme mes
                    idées en expériences interactives et applications concrètes. Mon objectif est de
                    créer des projets immersifs et fonctionnels, alliant créativité et technique.
                    <br />
                    <br />
                    À travers mes projets personnels et collaboratifs, j’ai exploré Unity et Unreal
                    Engine pour le développement de jeux 2D et 3D, ainsi que les technologies web et
                    fullstack pour des applications interactives et des sites performants. Ces
                    expériences m’ont permis de renforcer mes compétences en programmation, en
                    design d’interaction et en gestion de projet, tout en nourrissant ma curiosité
                    et ma créativité.
                    <br />
                    <br />
                    Au-delà de la technique, j’attache une grande importance à l’expérience
                    utilisateur et à la qualité du design, cherchant toujours à proposer des
                    interfaces claires, intuitives et agréables à utiliser. Je suis également
                    passionné par l’apprentissage continu, expérimentant de nouvelles technologies
                    et méthodologies pour rester à la pointe des innovations.
                    <br />
                    <br />
                    Curieux, rigoureux et déterminé, je mets toute mon énergie à concevoir des
                    solutions innovantes, que ce soit dans le jeu vidéo ou dans le développement
                    web, en transformant chaque idée en projet concret et abouti. Mon ambition est
                    de contribuer à des projets qui allient performance, créativité et impact réel
                    pour les utilisateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">Ma vision</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            From Code
            <br />
            <span className="text-white/70">to Impact</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group rounded-sm"
            >
              <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
                <div className="bg-white/10 p-3 inline-block rounded-sm group-hover:bg-white/20 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}
