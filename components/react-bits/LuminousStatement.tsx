"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface LuminousTypeProps {
  text?: string;
  tint?: string;
  className?: string;
}

export default function LuminousStatement({
  text = "Technology matters most when it reaches the people who need it.",
  tint = "#35C6DF",
  className = "",
}: LuminousTypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 50, y: 50 }); // percentage coords
  const isPointerActive = useRef(false);

  // Pointer tracking
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({ x, y });
      isPointerActive.current = true;
    },
    [prefersReducedMotion]
  );

  const handlePointerLeave = () => {
    isPointerActive.current = false;
  };

  // Idle smooth drift
  useEffect(() => {
    if (prefersReducedMotion) return;

    let animId: number;
    let t = 0;

    const drift = () => {
      if (!isPointerActive.current) {
        t += 0.012;
        const x = 50 + Math.sin(t) * 32;
        const y = 50 + Math.cos(t * 0.7) * 22;
        setPos({ x, y });
      }
      animId = requestAnimationFrame(drift);
    };

    animId = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative select-none py-10 px-6 sm:px-12 max-w-4xl mx-auto rounded-3xl overflow-hidden ${className}`}
    >
      {/* Background soft ambient radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 260px at ${pos.x}% ${pos.y}%, rgba(53, 198, 223, 0.18) 0%, rgba(52, 120, 246, 0.06) 50%, transparent 80%)`,
        }}
      />

      {/* SINGLE TEXT ELEMENT: Uses background-clip text so text NEVER doubles or misaligns */}
      <blockquote
        className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-tight text-center leading-[1.28] relative z-10 transition-all duration-150"
        style={{
          background: prefersReducedMotion
            ? "#FFFFFF"
            : `radial-gradient(circle 240px at ${pos.x}% ${pos.y}%, #FFFFFF 0%, #67DCEB 25%, #35C6DF 45%, rgba(255, 255, 255, 0.35) 75%, rgba(255, 255, 255, 0.22) 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: prefersReducedMotion ? "#FFFFFF" : "transparent",
          filter: prefersReducedMotion ? "none" : "drop-shadow(0 0 20px rgba(53, 198, 223, 0.35))",
        }}
      >
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Brand attribution label */}
      <div className="mt-6 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-cyan/30 text-[11px] uppercase tracking-[0.2em] font-bold text-cyan-bright font-sora">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          Omega Medsurge — Core Philosophy
        </span>
      </div>
    </div>
  );
}
