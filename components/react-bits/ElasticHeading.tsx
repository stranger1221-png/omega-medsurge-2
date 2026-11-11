"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface ElasticLetteringProps {
  text?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  color?: string;
  tensionColor?: string;
  className?: string;
  tension?: number;
  stiffness?: number;
  bounce?: number;
  squash?: number;
  tilt?: number;
  lift?: number;
  interactive?: boolean;
  pluckOnClick?: boolean;
  hint?: boolean;
}

interface LetterPhysics {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scaleX: number;
  scaleY: number;
  rotate: number;
  tensionActive: boolean;
}

export default function ElasticHeading({
  text = "Explore our equipment.",
  as: Component = "h2",
  color = "#102B49",
  tensionColor = "#35C6DF",
  className = "",
  tension = 0.35,
  stiffness = 1.3,
  bounce = 0.25,
  squash = 0.2,
  tilt = 0.2,
  lift = 0.2,
  interactive = true,
  pluckOnClick = true,
  hint = true,
}: ElasticLetteringProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const letters = text.split("");
  const prefersReducedMotion = useReducedMotion();

  // State to track individual letter physics
  const [physicsState, setPhysicsState] = useState<LetterPhysics[]>(() =>
    letters.map(() => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tensionActive: false,
    }))
  );

  const physicsRef = useRef<LetterPhysics[]>(physicsState);
  physicsRef.current = physicsState;

  // Handle pointer interactions on letters
  const handleLetterPointer = useCallback(
    (index: number, e: React.PointerEvent<HTMLSpanElement>, type: "move" | "down") => {
      if (!interactive || prefersReducedMotion) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      const pullStrength = type === "down" && pluckOnClick ? 2.5 : 1.0;
      const targetY = -relY * 28 * lift * pullStrength;
      const targetX = relX * 20 * tension * pullStrength;
      const targetTilt = relX * 25 * tilt * pullStrength;
      const targetSquashY = 1 + Math.abs(relY) * squash * 0.8;
      const targetSquashX = 1 - Math.abs(relY) * (squash * 0.4);

      setPhysicsState((prev) => {
        const next = [...prev];
        next[index] = {
          ...next[index],
          x: targetX,
          y: targetY,
          vx: (targetX - next[index].x) * stiffness * 0.4,
          vy: (targetY - next[index].y) * stiffness * 0.4,
          scaleX: targetSquashX,
          scaleY: targetSquashY,
          rotate: targetTilt,
          tensionActive: true,
        };
        return next;
      });
    },
    [interactive, prefersReducedMotion, pluckOnClick, lift, tension, tilt, squash, stiffness]
  );

  const handlePointerLeave = useCallback(
    (index: number) => {
      if (prefersReducedMotion) return;
      setPhysicsState((prev) => {
        const next = [...prev];
        next[index] = {
          ...next[index],
          tensionActive: false,
        };
        return next;
      });
    },
    [prefersReducedMotion]
  );

  // Spring animation loop
  useEffect(() => {
    if (prefersReducedMotion) return;

    let animId: number;
    const updatePhysics = () => {
      let needsUpdate = false;
      const current = physicsRef.current;
      const updated = current.map((item) => {
        if (!item.tensionActive && (Math.abs(item.x) > 0.05 || Math.abs(item.y) > 0.05 || Math.abs(item.vx) > 0.05 || Math.abs(item.vy) > 0.05)) {
          needsUpdate = true;
          // Spring towards 0
          const ax = -item.x * stiffness * 0.25;
          const ay = -item.y * stiffness * 0.25;
          const newVx = (item.vx + ax) * (1 - bounce * 0.5);
          const newVy = (item.vy + ay) * (1 - bounce * 0.5);
          const newX = item.x + newVx;
          const newY = item.y + newVy;
          const newRotate = item.rotate * 0.85;
          const newScaleX = 1 + (item.scaleX - 1) * 0.82;
          const newScaleY = 1 + (item.scaleY - 1) * 0.82;

          return {
            x: Math.abs(newX) < 0.05 ? 0 : newX,
            y: Math.abs(newY) < 0.05 ? 0 : newY,
            vx: Math.abs(newVx) < 0.05 ? 0 : newVx,
            vy: Math.abs(newVy) < 0.05 ? 0 : newVy,
            scaleX: Math.abs(newScaleX - 1) < 0.02 ? 1 : newScaleX,
            scaleY: Math.abs(newScaleY - 1) < 0.02 ? 1 : newScaleY,
            rotate: Math.abs(newRotate) < 0.1 ? 0 : newRotate,
            tensionActive: false,
          };
        }
        return item;
      });

      if (needsUpdate) {
        setPhysicsState(updated);
      }
      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion, stiffness, bounce]);

  return (
    <div className="relative inline-block select-none group">
      {/* Screen reader only label for full accessibility */}
      <span className="sr-only">{text}</span>

      <Component
        ref={containerRef}
        aria-hidden="true"
        className={`inline-flex flex-wrap items-center font-sora font-bold tracking-tight cursor-default ${className}`}
        style={{ color }}
      >
        {letters.map((char, i) => {
          if (char === " ") {
            return (
              <span key={i} className="inline-block w-[0.3em]">
                &nbsp;
              </span>
            );
          }

          const state = physicsState[i] || {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotate: 0,
            tensionActive: false,
          };

          return (
            <span
              key={i}
              onPointerMove={(e) => handleLetterPointer(i, e, "move")}
              onPointerDown={(e) => handleLetterPointer(i, e, "down")}
              onPointerLeave={() => handlePointerLeave(i)}
              className="inline-block transition-colors duration-200 cursor-pointer will-change-transform"
              style={{
                transform: prefersReducedMotion
                  ? "none"
                  : `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.rotate}deg) scale(${state.scaleX}, ${state.scaleY})`,
                color: state.tensionActive ? tensionColor : color,
                textShadow: state.tensionActive ? `0 0 16px ${tensionColor}` : "none",
              }}
            >
              {char}
            </span>
          );
        })}
      </Component>

      {/* Subtle Hint indicator if enabled */}
      {hint && (
        <span className="hidden md:inline-block ml-3 px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-semibold text-cyan-600 bg-cyan-50 border border-cyan-200/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Interactive
        </span>
      )}
    </div>
  );
}

