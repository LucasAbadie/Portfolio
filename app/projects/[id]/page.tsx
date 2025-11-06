import React from "react";
import { projects } from "@/data/Projects";
import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import Hero from "@/components/Projects/Hero";
import Competences from "@/components/Projects/Competences";
import VideoIntro from "@/components/Projects/VideoIntro";
import Gallery from "@/components/Projects/ImageGallery";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ id: string }>;
};

/**
 * Dynamic Project Page
 *
 * Displays detailed information about a specific project.
 * URL pattern: /projects/[id]
 *
 * Sections:
 * - Hero: Project banner, title, description, and links
 * - VideoIntro: Optional YouTube video showcase
 * - Gallery: Project screenshots with lightbox
 * - Competences: Technical skills and contributions
 *
 * Static generation: All project pages are pre-rendered at build time
 * using generateStaticParams()
 */
export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-black text-white">
      <NoiseBackground />
      <Navbar
        links={[
          { href: "/", label: "Accueil" },
          { href: "/projects", label: "Mes projets" },
        ]}
      />

      {/* TODO: Add scroll-triggered animations for sections */}
      <Hero
        Name={project.name}
        Description={project.description}
        Categories={project.categories}
        Pitch={project.content.pitch}
        Banner={project.banner}
        ProjectUrl={project.url}
        GithubUrl={project.githubUrl}
      />
      <div className="px-8 pt-40 pb-8 xl:py-40 bg-gradient-to-b from-black to-neutral-900">
        <VideoIntro video={project.content.video} />
        <Gallery images={project.content.images} />
      </div>
      <Competences
        technicalContribution={project.content.technicalContribution}
        competences={project.content.competences}
      />

      <Footer />
    </main>
  );
}

/**
 * Generate Static Params
 *
 * Tells Next.js which project pages to pre-render at build time.
 * This is required for static export (output: "export" in next.config.js).
 *
 * @returns Array of params objects with project IDs
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
