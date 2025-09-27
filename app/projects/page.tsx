"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import Footer from "@/components/Footer";

const projects = [
    {
        title: "RecovR",
        description: "A brief description of Project One.",
        categories: [
            "Game Development",
            "Professionel",
            "Unreal Engine",
            "C++",
            "FullStack",
            "Multiplatform",
        ],
        image: "/assets/works/RecovR/RecovR.webp",
        link: "/projects/project-one",
    },
    {
        title: "Day Off",
        description: "A brief description of Project Two.",
        categories: [
            "Game Development",
            "Professionel",
            "Unity",
            "C#",
            "Mobile",
        ],
        image: "/assets/works/DayOff/DayOff.webp",
        link: "/projects/project-two",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <main className="bg-black text-white">
            <NoiseBackground />
            <Navbar />
            {/* Gallery Section */}
            <section className="py-24 relative overflow-hidden">
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
                                Galerie
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
                                Mes Projets
                                <br />
                                <span className="text-white/70">
                                    au fil du temps
                                </span>
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                href={project.link || "/unknown"}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300">
                                    <Image
                                        src={
                                            project.image || "/assets/placeholder.svg"
                                        }
                                        alt={project.title}
                                        fill
                                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                                    {/* Year badge with improved visibility */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20">
                                        
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
            <Footer />
        </main>
    );
}
