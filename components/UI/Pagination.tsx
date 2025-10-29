import { motion } from "framer-motion";
import { StepBack, StepForward } from "lucide-react";

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
    return (
        <div className="flex items-center gap-2 mt-6 justify-center">
            <motion.div
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-transparent p-1 cursor-pointer"
                onClick={() => onPageChange((currentPage - 1 + totalPages) % totalPages)}
            >
                <StepBack size={32} className="cursor-pointer" />
            </motion.div>
            {Array.from({ length: totalPages }).map((_, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer w-3 h-3 rounded-full mx-1 ${i === currentPage ? "bg-white" : "bg-white/30"}`}
                    onClick={() => onPageChange(i)}
                />
            ))}
            <motion.div
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.90 }}
                className="rounded-full bg-transparent p-1 cursor-pointer"
                onClick={() => onPageChange((currentPage + 1) % totalPages)}
            >
                <StepForward size={32} className="cursor-pointer" />
            </motion.div>
        </div >
    );
}
