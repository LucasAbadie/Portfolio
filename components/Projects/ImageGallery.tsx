"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "@/components/UI/Pagination";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const IMAGES_PER_PAGE_DESKTOP = 3;
  const IMAGES_PER_PAGE_MOBILE = 2;
  const totalPagesDesktop = Math.ceil(images.length / IMAGES_PER_PAGE_DESKTOP);
  const totalPagesMobile = Math.ceil(images.length / IMAGES_PER_PAGE_MOBILE);

  // Détecter mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Support clavier pour le modal
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  // Autoplay
  /* useEffect(() => {
        const interval = setInterval(() => {
            setPageIndex((prev) => (prev + 1) % totalPages);
        }, 4000); // 4s
        return () => clearInterval(interval);
    }, [totalPages]); */

  // Cutting desktop
  const pagedImagesDesktop = [];
  for (let i = 0; i < images.length; i += IMAGES_PER_PAGE_DESKTOP) {
    pagedImagesDesktop.push(images.slice(i, i + IMAGES_PER_PAGE_DESKTOP));
  }
  // Cutting mobile
  const pagedImagesMobile = [];
  for (let i = 0; i < images.length; i += IMAGES_PER_PAGE_MOBILE) {
    pagedImagesMobile.push(images.slice(i, i + IMAGES_PER_PAGE_MOBILE));
  }

  const closeModal = () => setCurrentIndex(null);

  const goNext = () => {
    if (currentIndex !== null) {
      setDirection(1);
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (currentIndex !== null) {
      setDirection(-1);
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  // Variants pour les animations du modal
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="overflow-hidden">
      {/* Mobile Gallery: pagination, 2 columns x 2 rows */}
      <div className="block lg:hidden w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 grid-rows-2 gap-4 w-full"
          >
            {pagedImagesMobile[pageIndex]?.map((src, index) => (
              <motion.div
                key={index + pageIndex * IMAGES_PER_PAGE_MOBILE}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg active:shadow-2xl transition-shadow duration-300 min-w-[150px] w-full"
                onClick={() => setCurrentIndex(index + pageIndex * IMAGES_PER_PAGE_MOBILE)}
              >
                <Image
                  src={src.url || "/assets/placeholder.svg"}
                  alt={src.alt || `Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Dots + Arrows mobile */}
        <Pagination
          totalPages={totalPagesMobile}
          currentPage={pageIndex}
          onPageChange={(page) => setPageIndex(page)}
        />
      </div>

      {/* Desktop: pagination, dots, arrows, 1 row */}
      <div className="hidden lg:flex relative w-full flex-col items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 400, damping: 35 }}
            className="flex gap-4 w-full"
          >
            {pagedImagesDesktop[pageIndex]?.map((src, index) => (
              <motion.div
                key={index + pageIndex * IMAGES_PER_PAGE_DESKTOP}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 min-w-[300px] max-w-[500px] w-full group relative"
                onClick={() => setCurrentIndex(index + pageIndex * IMAGES_PER_PAGE_DESKTOP)}
              >
                <Image
                  src={src.url || "/assets/placeholder.svg"}
                  alt={src.alt || `Image ${index + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="bg-white/90 rounded-full p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Dots + Arrows */}
        <Pagination
          totalPages={totalPagesDesktop}
          currentPage={pageIndex}
          onPageChange={(page) => setPageIndex(page)}
        />
      </div>

      {/* Modal + Slider */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermeture - Design moderne */}
              <motion.button
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group"
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              {/* Compteur d'images */}
              <motion.div
                className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentIndex + 1} / {images.length}
              </motion.div>

              {/* Container de l'image avec AnimatePresence pour les transitions */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute"
                  >
                    <Image
                      src={images[currentIndex].url || "/assets/placeholder.svg"}
                      alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
                      width={1400}
                      height={900}
                      className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation - Design moderne avec meilleur positionnement */}
              {images.length > 1 && (
                <>
                  {/* Bouton précédent */}
                  <motion.button
                    className="absolute left-2 md:left-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
                    style={isMobile ? { bottom: "5rem" } : { top: "50%", y: "-50%" }}
                    onClick={goPrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft
                      size={28}
                      className="group-hover:-translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>

                  {/* Bouton suivant */}
                  <motion.button
                    className="absolute right-2 md:right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
                    style={isMobile ? { bottom: "5rem" } : { top: "50%", y: "-50%" }}
                    onClick={goNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight
                      size={28}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>

                  {/* Description de l'image si disponible */}
                  {images[currentIndex].alt && (
                    <motion.div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm max-w-[90%] md:max-w-2xl text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {images[currentIndex].alt}
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
