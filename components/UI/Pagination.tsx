import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    totalPages,
    currentPage,
    onPageChange,
}: PaginationProps) {
    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === totalPages - 1;

    const handlePrevious = () => {
        if (!isFirstPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (!isLastPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center gap-3 md:gap-4 mt-8 justify-center">
            {/* Bouton Précédent */}
            <motion.button
                whileHover={!isFirstPage ? { scale: 1.1 } : {}}
                whileTap={!isFirstPage ? { scale: 0.95 } : {}}
                className={`rounded-full p-2 md:p-2.5 transition-all duration-300 ${
                    isFirstPage
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 text-white cursor-pointer backdrop-blur-sm"
                }`}
                onClick={handlePrevious}
                disabled={isFirstPage}
                aria-label="Page précédente"
            >
                <ChevronLeft size={24} />
            </motion.button>

            {/* Dots de pagination */}
            <div className="flex items-center gap-2 md:gap-2.5 px-2 md:px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                {Array.from({ length: totalPages }).map((_, i) => {
                    const isActive = i === currentPage;
                    const distance = Math.abs(i - currentPage);
                    
                    // Sur mobile, ne montrer que 5 dots max : 2 avant, actuel, 2 après
                    const shouldShow = totalPages <= 5 || distance <= 2;

                    if (!shouldShow) return null;

                    return (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                            className={`relative rounded-full transition-all duration-300 cursor-pointer ${
                                isActive 
                                    ? "w-8 md:w-10 h-3 md:h-3.5 bg-white" 
                                    : "w-3 md:w-3.5 h-3 md:h-3.5 bg-white/40 hover:bg-white/60"
                            }`}
                            onClick={() => onPageChange(i)}
                            aria-label={`Page ${i + 1}`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {/* Effet de lueur sur le dot actif */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute inset-0 rounded-full bg-white/50 blur-sm"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                />
                            )}
                        </motion.button>
                    );
                })}
                
                {/* Indicateur "..." si beaucoup de pages */}
                {totalPages > 5 && currentPage < totalPages - 3 && (
                    <span className="text-white/40 text-sm px-1">...</span>
                )}
            </div>

            {/* Bouton Suivant */}
            <motion.button
                whileHover={!isLastPage ? { scale: 1.1 } : {}}
                whileTap={!isLastPage ? { scale: 0.95 } : {}}
                className={`rounded-full p-2 md:p-2.5 transition-all duration-300 ${
                    isLastPage
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 text-white cursor-pointer backdrop-blur-sm"
                }`}
                onClick={handleNext}
                disabled={isLastPage}
                aria-label="Page suivante"
            >
                <ChevronRight size={24} />
            </motion.button>

            {/* Compteur de pages (optionnel, masqué sur très petit écran) */}
            <motion.div
                className="hidden sm:flex items-center text-white/60 text-sm font-medium ml-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                {currentPage + 1} / {totalPages}
            </motion.div>
        </div>
    );
}
