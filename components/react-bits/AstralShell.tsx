"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface AstralShellProps {
  networkColor?: string;
  highlightColor?: string;
  nodeCount?: number;
  maxConnections?: number;
  rotationSpeed?: number;
  className?: string;
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  highlight: number;
}

export default function AstralShell({
  networkColor = "#3478F6",
  highlightColor = "#35C6DF",
  nodeCount = 900,
  maxConnections = 3,
  rotationSpeed = 0.003,
  className = "",
}: AstralShellProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      setIsSupported(false);
      return;
    }

    let animationId: number;
    let angleY = 0;
    let angleX = 0.25; // slight tilt
    let mouseX = -1000;
    let mouseY = -1000;
    let isHovered = false;

    // Generate nodes evenly distributed on a sphere (Fibonacci sphere distribution)
    const nodes: Node3D[] = [];
    const sphereRadius = 140;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      nodes.push({
        x: sphereRadius * Math.sin(phi) * Math.cos(theta),
        y: sphereRadius * Math.cos(phi),
        z: sphereRadius * Math.sin(phi) * Math.sin(theta),
        baseRadius: Math.random() > 0.85 ? 2.0 : 1.2,
        highlight: 0,
      });
    }

    // Resize handler
    const updateSize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio && window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const onPointerLeave = () => {
      isHovered = false;
      mouseX = -1000;
      mouseY = -1000;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", onPointerMove);
      container.addEventListener("mouseleave", onPointerLeave);
    }

    // Render loop
    const render = () => {
      if (!prefersReducedMotion) {
        angleY += rotationSpeed;
      }

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Rotate nodes & project
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = nodes.map((node) => {
        // Y rotation
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;
        // X rotation
        let y1 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        // Perspective projection
        const fov = 320;
        const scale = fov / (fov + z2);
        const px = cx + x1 * scale;
        const py = cy + y1 * scale;

        // Interactive hover highlight calculation
        let highlight = node.highlight;
        if (isHovered) {
          const dx = px - mouseX;
          const dy = py - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            highlight = Math.min(1, highlight + 0.15);
          } else {
            highlight = Math.max(0, highlight - 0.05);
          }
        } else {
          highlight = Math.max(0, highlight - 0.05);
        }
        node.highlight = highlight;

        return { px, py, pz: z2, scale, highlight, radius: node.baseRadius };
      });

      // Sort by depth (back to front)
      // To keep line rendering lightweight, we connect nodes that are close in projected space
      const connectionDistance = 38;

      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i += 2) {
        const p1 = projected[i];
        if (p1.pz > 120) continue; // skip far back

        let connections = 0;
        for (let j = i + 1; j < projected.length && connections < maxConnections; j += 3) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            connections++;
            const alpha = (1 - dist / connectionDistance) * (p1.highlight > 0 || p2.highlight > 0 ? 0.45 : 0.15);
            ctx.strokeStyle = p1.highlight > 0.2 ? highlightColor : networkColor;
            ctx.globalAlpha = Math.max(0.05, Math.min(alpha, 0.6));
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.2, (p.pz + sphereRadius) / (2 * sphereRadius));
        ctx.globalAlpha = p.highlight > 0.1 ? 1.0 : alpha;

        ctx.fillStyle = p.highlight > 0.2 ? highlightColor : p.pz > 0 ? highlightColor : networkColor;
        ctx.beginPath();
        const r = Math.max(0.8, p.radius * p.scale * (1 + p.highlight * 0.8));
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
      if (container) {
        container.removeEventListener("mousemove", onPointerMove);
        container.removeEventListener("mouseleave", onPointerLeave);
      }
    };
  }, [nodeCount, maxConnections, rotationSpeed, networkColor, highlightColor, prefersReducedMotion]);

  if (!isSupported) {
    return (
      <div className={`w-full h-[400px] flex items-center justify-center rounded-2xl bg-navy-900/40 border border-electric/20 ${className}`}>
        <div className="w-56 h-56 rounded-full border border-cyan/30 animate-pulse-slow flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-electric/40" />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative w-full h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background glow behind sphere */}
      <div className="absolute w-72 h-72 rounded-full bg-electric/15 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-cyan/15 blur-2xl pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}

