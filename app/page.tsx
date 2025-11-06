"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import NoiseBackground from "@/components/NoiseBackground";

// Scroll restoration component
const ScrollRestoration = () => {
  useEffect(() => {
    // Set scroll to top
    window.scrollTo(0, 0);

    // Disable browser's automatic scroll restoration
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

// Lazy load components
const About = dynamic(() => import("@/components/Home/About"));

const Spotlight = dynamic(() => import("@/components/Home/Spotlight"));

const Career = dynamic(() => import("@/components/Home/Career"));

const Contact = dynamic(() => import("@/components/Home/Contact"));

const Footer = dynamic(() => import("@/components/Footer"));

// LazyLoad wrapper component
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
      { rootMargin: "200px" },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{inView ? children : null}</div>;
}

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
