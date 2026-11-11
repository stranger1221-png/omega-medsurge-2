"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface SignalTypeProps {
  text?: string;
  color?: string;
  glowColor?: string;
  unlit?: "outline" | "dim";
  glow?: number;
  flickers?: number;
  speed?: number;
  trigger?: "view" | "load";
  loop?: boolean;
  className?: string;
}

export default function SignalHeading({
  text = "LET'S TALK HEALTHCARE",
  color = "#EAF8FF",
  glowColor = "#35C6DF",
  glow = 0.35,
  flickers = 2,
  trigger = "view",
  loop = false,
  className = "",
}: SignalTypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [litState, setLitState] = useState(0); // 0 = unlit, 1 = flickering, 2 = fully lit
  const hasTriggered = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setLitState(2);
      return;
    }

    const startFlicker = () => {
      if (hasTriggered.current && !loop) return;
      hasTriggered.current = true;

      // Restrained medical-tech sign power-on sequence:
      // Off -> Quick pulse -> Off -> Full steady illumination
      setLitState(1);
      setTimeout(() => {
        setLitState(0);
        setTimeout(() => {
          setLitState(1);
          setTimeout(() => {
            setLitState(2);
          }, 120);
        }, 80);
      }, 150);
    };

    if (trigger === "view") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startFlicker();
            if (!loop) {
              observer.disconnect();
            }
          }
        },
        { threshold: 0.3 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return () => observer.disconnect();
    } else {
      startFlicker();
    }
  }, [trigger, loop, prefersReducedMotion, flickers]);

  return (
    <div ref={containerRef} className={`inline-block select-none ${className}`}>
      <span
        className="font-sora font-bold tracking-[0.22em] text-xs sm:text-sm uppercase transition-all duration-300"
        style={{
          color: litState === 0 ? "rgba(234, 248, 255, 0.4)" : color,
          textShadow:
            litState >= 1
              ? `0 0 12px ${glowColor}, 0 0 24px rgba(53, 198, 223, ${glow})`
              : "none",
          WebkitTextStroke: litState === 0 ? "1px rgba(53, 198, 223, 0.3)" : "none",
        }}
      >
        {text}
      </span>
    </div>
  );
}

