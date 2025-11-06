"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import NoiseBackground from "@/components/NoiseBackground";

/**
 * Scroll Restoration Component
 *
 * Ensures the page always loads at the top position.
 * Disables browser's automatic scroll restoration to prevent unwanted scrolling.
 */
const ScrollRestoration = () => {
  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Disable browser's built-in scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

/**
 * Lazy-loaded Components
 * These components are loaded only when needed to improve initial page load performance
 */
const About = dynamic(() => import("@/components/Home/About"));
const Spotlight = dynamic(() => import("@/components/Home/Spotlight"));
const Career = dynamic(() => import("@/components/Home/Career"));
const Contact = dynamic(() => import("@/components/Home/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

/**
 * LazyLoad Wrapper Component
 *
 * Uses Intersection Observer API to render children only when they enter the viewport.
 * Improves performance by deferring rendering of below-the-fold content.
 *
 * @param children - Content to lazy load
 */
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }, // Start loading 200px before element enters viewport
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{inView ? children : null}</div>;
}

/**
 * Home Page Component
 *
 * Main landing page showcasing portfolio sections:
 * - Hero: Introduction and branding
 * - About: Personal presentation and values
 * - Spotlight: Featured projects
 * - Career: Professional timeline
 * - Contact: Contact form with reCAPTCHA
 *
 * Implements lazy loading for performance optimization.
 */
export default function Home() {
  return (
    <main className="bg-black text-white">
      <ScrollRestoration />
      <NoiseBackground />
      <Navbar
        links={[
          { href: "#about", label: "À Propos" },
          { href: "#spotlight", label: "Spotlight" },
          { href: "#career", label: "Parcours Professionel" },
        ]}
      />
      <Hero />
      <LazyLoad>
        <About />
      </LazyLoad>
      <LazyLoad>
        <Spotlight />
      </LazyLoad>
      <LazyLoad>
        <Career />
      </LazyLoad>
      <LazyLoad>
        <Contact />
      </LazyLoad>
      <LazyLoad>
        <Footer
          links={[
            { href: "#about", label: "À Propos" },
            { href: "#spotlight", label: "Spotlight" },
            { href: "#career", label: "Parcours Professionel" },
          ]}
        />
      </LazyLoad>
    </main>
  );
}
