"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  cards: Card[];
  width?: number;
  height?: number;
  maxVisible?: number;
};

export default function StackedCards({
  cards,
  width = 340,
  height = 480,
  maxVisible = 4,
}: Props) {
  const [stack, setStack] = useState<Card[]>(cards);

  // Motion values for 3D tilt effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Reference to the card container to measure mouse position
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement inside the container
  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Calculate rotation relative to the center of the card
    const rotateAmountX = ((y - midY) / midY) * -8; // vertical tilt
    const rotateAmountY = ((x - midX) / midX) * 8;  // horizontal tilt

    // Update motion values
    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  }

  // Reset tilt when the mouse leaves the card
  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  // Move the top card to the back of the stack
  function cycleTopToBack() {
    if (stack.length <= 1) return;
    const next = [...stack];
    const top = next.shift()!; // remove first card
    next.push(top);            // put it at the end
    setStack(next);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card container with perspective for 3D tilt */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ width, height }}
        className="relative perspective-[1200px]"
      >
        <AnimatePresence>
          {stack.slice(0, maxVisible).map((card, idx) => {
            // Offset from the top card (0 = top)
            const offset = idx;
            const scale = 1 - offset * 0.04; // each deeper card is slightly smaller
            const y = offset * 18;           // vertical shift for stacking

            const isTop = idx === 0;

            return (
              <motion.div
                key={card.id}
                style={{
                  rotateX,
                  rotateY,
                  zIndex: 100 + (maxVisible - idx), // ensure top card is on top
                }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{
                  opacity: 1,
                  scale,
                  y,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 220, damping: 30 },
                }}
                exit={{ opacity: 0, scale: 0.9, y: -40 }}
                // Card style
                className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden bg-white will-change-transform"
                // Clicking the top card cycles it to the back
                onClick={() => isTop && cycleTopToBack()}
              >
                {/* Background image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* Card footer with title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white font-semibold">{card.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Button to manually cycle to the next card */}
      <button
        onClick={cycleTopToBack}
        className="px-4 py-2 rounded-md border border-slate-200 bg-white shadow-sm text-sm"
      >
        Next card
      </button>
    </div>
  );
}
