"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "@/components/UI/Pagination";

interface GalleryProps {
    images: {
        url: string;
        alt?: string;
    }[];
}

export default function Gallery({ images }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [pageIndex, setPageIndex] = useState(0);

    const IMAGES_PER_PAGE_DESKTOP = 3;
    const IMAGES_PER_PAGE_MOBILE = 2;
    const totalPagesDesktop = Math.ceil(images.length / IMAGES_PER_PAGE_DESKTOP);
    const totalPagesMobile = Math.ceil(images.length / IMAGES_PER_PAGE_MOBILE);

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
            setCurrentIndex((currentIndex + 1) % images.length);
        }
    };

    const goPrev = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="">
            {/* Mobile Gallery: pagination, 2 columns x 2 rows */}
            <div className="block lg:hidden w-full">
                <div className="grid grid-cols-1 grid-rows-2 gap-4 w-full">
                    {pagedImagesMobile[pageIndex]?.map((src, index) => (
                        <motion.div
                            key={index + pageIndex * IMAGES_PER_PAGE_MOBILE}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer overflow-hidden rounded-xl shadow-md min-w-[150px] w-full"
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
                </div>
                {/* Dots + Arrows mobile */}
                <Pagination
                    totalPages={totalPagesMobile}
                    currentPage={pageIndex}
                    onPageChange={(page) => setPageIndex(page)}
                />
            </div>

            {/* Desktop: pagination, dots, arrows, 1 row */}
            <div className="hidden lg:flex relative w-full flex-col items-center">
                <motion.div
                    className="flex gap-4 w-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {pagedImagesDesktop[pageIndex]?.map((src, index) => (
                        <motion.div
                            key={index + pageIndex * IMAGES_PER_PAGE_DESKTOP}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer overflow-hidden rounded-xl shadow-md min-w-[300px] max-w-[500px] w-full"
                            onClick={() => setCurrentIndex(index + pageIndex * IMAGES_PER_PAGE_DESKTOP)}
                        >
                            <Image
                                src={src.url || "/assets/placeholder.svg"}
                                alt={src.alt || `Image ${index + 1}`}
                                width={500}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
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
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full p-4 flex items-center justify-center"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image courante */}
                            <Image
                                src={
                                    images[currentIndex].url ||
                                    "/assets/placeholder.svg"
                                }
                                alt={`Image ${currentIndex + 1}`}
                                width={1400}
                                height={900}
                                className="w-xl h-auto object-scale-down rounded-xl"
                            />

                            {/* Bouton fermeture */}
                            <button
                                className="absolute -top-10 right-4 bg-white/80 text-black px-3 py-1 rounded-lg hover:bg-white"
                                onClick={closeModal}
                            >
                                ✕
                            </button>

                            {/* Navigation */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        className="absolute left-4 -bottom-20 bg-white/70 rounded-full p-3 hover:bg-white"
                                        onClick={goPrev}
                                    >
                                        ◀
                                    </button>
                                    <button
                                        className="absolute right-4 -bottom-20 bg-white/70 rounded-full p-3 hover:bg-white"
                                        onClick={goNext}
                                    >
                                        ▶
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
