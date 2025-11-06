"use client";

import { useEffect, useRef } from "react";

/**
 * Noise Background Component
 *
 * Creates an animated grain/noise texture effect using HTML5 Canvas.
 * Adds visual texture to the background without impacting performance.
 *
 * The noise is regenerated on each animation frame to create a subtle
 * animated texture effect. Opacity is kept low (5%) for subtlety.
 */
export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    /**
     * Set canvas dimensions to match window size
     */
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    /**
     * Generate random noise pattern
     * Creates a subtle grain effect with 5% intensity
     */
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255 * 0.05; // 5% opacity noise
        data[i] = value; // Red
        data[i + 1] = value; // Green
        data[i + 2] = value; // Blue
        data[i + 3] = 255; // Alpha (fully opaque)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    /**
     * Animation loop - regenerates noise on each frame
     */
    let animationFrameId: number | undefined;
    const render = () => {
      createNoise();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-5" />;
}
