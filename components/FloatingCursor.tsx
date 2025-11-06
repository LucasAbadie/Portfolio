"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/**
 * Floating Cursor Component
 *
 * Custom cursor implementation with two elements:
 * - Dot: Small white circle that follows the mouse instantly
 * - Circle: Larger ring that follows with smooth easing
 *
 * Features:
 * - Smooth animation using requestAnimationFrame
 * - Click animation (shrinks on click)
 * - Hover animation on links/buttons (enlarges)
 * - Handles tab visibility and focus changes
 * - Disabled on mobile devices
 *
 * Performance optimizations:
 * - Uses refs to avoid re-renders
 * - Pauses animation when tab is hidden
 * - Properly cleans up animation frames
 */
export default function FloatingCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  /** Target position - follows mouse instantly */
  const positionRef = useRef({ x: 0, y: 0 });
  /** Animated position - follows target with smooth easing */
  const circlePositionRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  /**
   * Animation loop using requestAnimationFrame
   * Applies smooth easing to circle movement (15% interpolation)
   */
  const animateCursor = useCallback(() => {
    if (!circleRef.current || !dotRef.current || !mounted) return;

    // Smooth circle movement with easing (15% interpolation)
    circlePositionRef.current.x += (positionRef.current.x - circlePositionRef.current.x) * 0.15;
    circlePositionRef.current.y += (positionRef.current.y - circlePositionRef.current.y) * 0.15;
    circleRef.current.style.transform = `translate3d(${circlePositionRef.current.x}px, ${circlePositionRef.current.y}px, 0) translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`;

    // Dot follows mouse instantly (no easing)
    dotRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;

    requestRef.current = requestAnimationFrame(animateCursor);
  }, [clicked, mounted]);

  /**
   * Reset cursor position (used when teleporting cursor or restarting animation)
   * Prioritizes event coordinates if provided, otherwise uses last known position
   */
  const resetCursorPosition = useCallback(
    (e?: MouseEvent) => {
      if (!mounted) return;

      // Stop current animation
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }

      // Determine position: event coords > last known > center fallback
      let x, y;
      if (e) {
        x = e.clientX;
        y = e.clientY;
      } else {
        x = positionRef.current.x || window.innerWidth / 2;
        y = positionRef.current.y || window.innerHeight / 2;
      }

      // Update both position refs to match
      positionRef.current = { x, y };
      circlePositionRef.current = { x, y };

      // Apply transforms immediately
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (circleRef.current)
        circleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`;

      // Restart animation
      requestRef.current = requestAnimationFrame(animateCursor);
    },
    [mounted, animateCursor, clicked],
  );

  /**
   * Main effect: Initialize cursor and set up event listeners
   */
  useEffect(() => {
    setMounted(true);

    // Initialize cursor at center if no position set
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    if (positionRef.current.x === 0 && positionRef.current.y === 0) {
      positionRef.current = { x: initialX, y: initialY };
    }
    circlePositionRef.current = { x: positionRef.current.x, y: positionRef.current.y };

    // Apply initial transforms
    if (dotRef.current)
      dotRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
    if (circleRef.current)
      circleRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;

    /**
     * Update target position on mouse move
     */
    const updatePosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    /**
     * Handle click - reset position if cursor has drifted too far
     */
    const handleMouseDown = (e: MouseEvent) => {
      setClicked(true);
      // Calculate distance between animated circle and click position
      const dx = circlePositionRef.current.x - e.clientX;
      const dy = circlePositionRef.current.y - e.clientY;
      // Reset if visual distance > 30px to prevent jarring jumps
      if (Math.sqrt(dx * dx + dy * dy) > 30) {
        resetCursorPosition(e);
      }
    };

    const handleMouseUp = () => setClicked(false);
    const handleMouseEnterLink = () => setLinkHovered(true);
    const handleMouseLeaveLink = () => setLinkHovered(false);

    /**
     * Ensure animation is running (used on focus/visibility)
     */
    const ensureAnimationRunning = () => {
      if (mounted && !requestRef.current) {
        resetCursorPosition();
      }
    };

    /**
     * Handle tab visibility changes - pause when hidden to save resources
     */
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        ensureAnimationRunning();
      } else {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };

    const handleFocus = () => ensureAnimationRunning();

    /**
     * Reset cursor position when mouse enters window
     */
    const handleMouseEnterWindow = (e: MouseEvent) => resetCursorPosition(e);

    /**
     * Pause animation to save resources
     */
    const pauseAnimation = () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    };

    // Register event listeners
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", pauseAnimation);
    document.documentElement.addEventListener("mouseenter", handleMouseEnterWindow);
    document.documentElement.addEventListener("mouseleave", pauseAnimation);

    // Add hover listeners to all links and buttons
    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    // Start animation loop
    requestRef.current = requestAnimationFrame(animateCursor);

    // Cleanup
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);

      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", pauseAnimation);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.documentElement.removeEventListener("mouseleave", pauseAnimation);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnterLink);
        link.removeEventListener("mouseleave", handleMouseLeaveLink);
      });

      setMounted(false);
    };
  }, [animateCursor, resetCursorPosition]);

  /**
   * Update circle size and border based on interaction state
   */
  useEffect(() => {
    if (!circleRef.current) return;

    const size = linkHovered ? "50px" : "30px";
    circleRef.current.style.width = size;
    circleRef.current.style.height = size;
    circleRef.current.style.border = `1px solid ${clicked ? "rgba(255,255,255,0.5)" : "white"}`;
  }, [linkHovered, clicked]);

  // Client-side only rendering
  if (!mounted) return null;

  return (
    <>
      {/* Inner dot - follows mouse instantly */}
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
          opacity: 1,
        }}
      />

      {/* Outer circle - follows with smooth easing */}
      <div
        ref={circleRef}
        className="cursor-circle fixed pointer-events-none z-[9998]"
        style={{
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          border: "1px solid white",
          borderRadius: "50%",
          transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, border 0.2s ease",
        }}
      />

      <style jsx global>{`
        body {
          cursor: none;
        }

        /* Disable custom cursor on mobile/tablet */
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
          .cursor-dot,
          .cursor-circle {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
