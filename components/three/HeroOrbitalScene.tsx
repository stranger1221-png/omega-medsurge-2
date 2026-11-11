"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Lazy load Three.js Canvas
const CanvasWrapper = dynamic(
  () =>
    import("@react-three/fiber").then((mod) => {
      const Canvas = mod.Canvas;
      const Inner = require("./OrbitalSceneInner").default;
      return function DynamicCanvas({ reducedMotion }: { reducedMotion: boolean }) {
        return (
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          >
            <Inner reducedMotion={reducedMotion} />
          </Canvas>
        );
      };
    }),
  {
    ssr: false,
    loading: () => <OrbitalFallback />,
  }
);

function OrbitalFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden pointer-events-none">
      <div className="absolute w-64 h-64 rounded-full border border-cyan-400/30 animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-80 h-80 rounded-full border border-electric-500/25 animate-[spin_28s_linear_infinite_reverse] [transform:rotateX(60deg)]" />
      <div className="absolute w-96 h-96 rounded-full border border-cyan-bright/20 animate-[spin_36s_linear_infinite] [transform:rotateY(60deg)]" />
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-midnight-950 via-navy-800 to-electric/40 backdrop-blur-md border border-cyan-400/40 shadow-glow" />
    </div>
  );
}

export default function HeroOrbitalScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[380px] md:min-h-[500px] relative pointer-events-none select-none">
      {isVisible ? (
        <Suspense fallback={<OrbitalFallback />}>
          <CanvasWrapper reducedMotion={prefersReducedMotion} />
        </Suspense>
      ) : (
        <OrbitalFallback />
      )}
    </div>
  );
}

