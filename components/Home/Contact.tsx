"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Linkedin,
    Github,
} from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
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
                            Contact
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Let's Work
                        <br />
                        <span className="text-white/70">Together</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                                placeholder="votre.email@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors min-h-[120px]"
                                placeholder="Votre message ou question..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-white text-black py-3 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors relative group overflow-hidden">
                            <span className="relative z-10">Envoyer</span>
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        </button>
                    </form>
                    <div>
                        <div className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8">
                            <h3 className="text-2xl font-bold mb-10 text-white">
                                Informations de Contact
                            </h3>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-white/10 p-2 rounded-sm mr-4">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                                            Email
                                        </div>
                                        <a
                                            href="mailto:lucasabadie.pro@gmail.com"
                                            className="text-white hover:text-white/70 transition-colors"
                                        >
                                            lucasabadie.pro@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white/10 p-2 rounded-sm mr-4">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                                            Adresse
                                        </div>
                                        <address className="not-italic text-white/80">
                                            16B rue Cécile Brunschvicg
                                            <br />
                                            31200 Toulouse
                                            <br />
                                            France
                                        </address>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10">
                                <div className="text-sm uppercase tracking-widest text-white/70 mb-3">
                                    Réseaux Sociaux
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/lucasabadie/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                                        aria-label="Connectons-nous sur LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href="https://github.com/LucasAbadie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                                        aria-label="Découvrez mes projets sur GitHub"
                                    >
                                        <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-40 right-20 w-32 h-32 border-2 border-white/10"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5"></div>
        </section>
    );
}
