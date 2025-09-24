"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Spotlight() {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            title: "RecovR",
            subtitle: "The Seed Crew",
            image: "/works/RecovR/RecovR.webp?height=600&width=800",
            year: "2019 - 2023",
            link: "/projects/recovr",
        },
        {
            title: "Day Off",
            subtitle: "The Seed Crew",
            image: "/works/DayOff/DayOff.webp?height=600&width=800",
            year: "2023 - 2024",
            link: "/projects/dayoff",
        },
        {
            title: "Sifter",
            subtitle: "Jeu PC",
            image: "/works/3.webp?height=600&width=800",
            year: "2025",
            link: "/projects/sifter",
        },
        {
            title: "Perfect Match",
            subtitle: "Jeu Mobile",
            image: "/works/PerfectMatch/PerfectMatch.webp?height=600&width=800",
            year: "2017-2018",
            link: "/projects/perfect-match",
        },
    ];

    return (
        <section id="spotlight" className="py-24 relative overflow-hidden">
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
                            À l’honneur
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
                            Projets
                            <br />
                            <span className="text-white/70">principaux</span>
                        </h2>
                        <Link
                            href="/projects"
                            className="border-2 border-white/20 px-6 py-3 text-sm uppercase tracking-widest text-white/80 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center group"
                        >
                            Voir tous mes projets
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.link}
                            className="group cursor-pointer"
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                                {/* Year badge with improved visibility */}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20">
                                    {project.year}
                                </div>

                                {/* Overlay content that appears on hover */}
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-xs uppercase tracking-widest text-white/80 mb-1">
                                        Voir le projet
                                    </div>
                                </div>
                            </div>

                            {/* Project title with enhanced styling */}
                            <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">
                                {project.title}
                            </h3>
                            <p className="text-white/70 group-hover:text-white/90 transition-colors">
                                {project.subtitle}
                            </p>

                            {/* Animated underline on hover */}
                            <div className="h-px w-0 bg-white group-hover:w-20 transition-all duration-300 mt-2"></div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-40 right-0 w-32 h-32 border border-white/10"></div>
            <div className="absolute bottom-20 left-0 w-48 h-48 border border-white/5"></div>
        </section>
    );
}
