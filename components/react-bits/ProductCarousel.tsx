"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, MoveHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface CarouselItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
  department?: string;
}

export interface ConcaveCarouselProps {
  items: CarouselItem[];
  aspect?: number;
  size?: number;
  curvature?: number;
  distance?: number;
  gap?: number;
  radius?: number;
  autoplay?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  draggable?: boolean;
  snap?: boolean;
  captions?: boolean;
  controls?: boolean;
  className?: string;
}

export default function ProductCarousel({
  items,
  curvature = 0.65,
  autoplay = true,
  speed = 0.05,
  pauseOnHover = true,
  draggable = true,
  snap = true,
  captions = true,
  controls = true,
  className = "",
}: ConcaveCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentDelta = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const total = items.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay slow drift if enabled and not hovered/reduced motion
  useEffect(() => {
    if (!autoplay || prefersReducedMotion || (pauseOnHover && isHovered)) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [autoplay, prefersReducedMotion, isHovered, pauseOnHover, nextSlide]);

  // Drag interaction physics
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragCurrentDelta.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragCurrentDelta.current = e.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 40;
    if (dragCurrentDelta.current > threshold) {
      prevSlide();
    } else if (dragCurrentDelta.current < -threshold) {
      nextSlide();
    }
    dragCurrentDelta.current = 0;
  };

  return (
    <div
      className={`relative w-full overflow-hidden py-6 select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => setIsDragging(false)}
    >
      {/* 3D Cylindrical Concave Stage on Desktop (Mariam Munawar Style) */}
      <div className="hidden md:flex items-center justify-center relative w-full h-[580px] [perspective:1200px] [perspective-origin:50%_48%]">
        
        {/* Floor Specular Light & Reflection Horizon */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[780px] h-[140px] bg-gradient-to-t from-cyan/15 via-electric/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-[360px] lg:w-[400px] h-[510px] flex items-center justify-center [transform-style:preserve-3d]">
          {items.map((item, index) => {
            // Calculate cyclic distance
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCurrent = offset === 0;
            const isVisible = Math.abs(offset) <= 3;

            if (!isVisible) return null;

            // Framer 3D Endless Concave Arc Geometry Math:
            // Cylinder angle curving towards viewer:
            const angle = offset * (25 * curvature);
            const translateX = (Math.sin((angle * Math.PI) / 180) * 580).toFixed(2);
            const translateZ = ((Math.cos((angle * Math.PI) / 180) - 1) * 380 - (isCurrent ? 0 : 40)).toFixed(2);
            const rotateY = (-angle * 0.9).toFixed(2);
            const scale = (isCurrent ? 1.04 : Math.max(0.72, 1 - Math.abs(offset) * 0.12)).toFixed(3);
            const opacity = (isCurrent ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.28)).toFixed(3);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (offset !== 0) {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute inset-0 rounded-3xl transition-all duration-600 cubic-bezier(0.2,0.8,0.2,1) ${
                  isCurrent ? "z-30 cursor-default" : "z-10 cursor-pointer hover:brightness-110"
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                {/* Card Body */}
                <div
                  className={`w-full h-full rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    isCurrent
                      ? "bg-gradient-to-b from-white/95 to-white/90 border-2 border-cyan/60 shadow-[0_20px_50px_rgba(8,27,49,0.25)] ring-2 ring-cyan/30"
                      : "bg-white/80 border border-slate-200/90 shadow-card-modern backdrop-blur-md"
                  }`}
                >
                  {/* Top Header: Category Tag & Detail Arrow */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pale-blue text-electric border border-electric/20 font-sora">
                      {item.subtitle}
                    </span>
                    <Link
                      href={item.href}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-electric text-white shadow-glow hover:bg-royal"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                      title={`View ${item.title}`}
                      onClick={(e) => {
                        if (!isCurrent) e.preventDefault();
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* High Quality Medical Photography Frame (Contain & Centered) */}
                  <div className="relative w-full h-[250px] my-auto flex items-center justify-center p-3 relative z-10 group">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-2 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority={isCurrent}
                    />
                  </div>

                  {/* Bottom Caption & Technical Label */}
                  {captions && (
                    <div className="border-t border-slate-200/70 pt-4 mt-2 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-cyan-600 uppercase tracking-widest">
                          {item.department || "Clinical Equipment"}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          0{index + 1} / 0{total}
                        </span>
                      </div>
                      <h3 className="font-sora font-extrabold text-xl text-midnight leading-snug line-clamp-1 mt-1">
                        {item.title}
                      </h3>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="text-xs font-bold text-electric hover:text-royal flex items-center gap-1.5 group"
                        >
                          <span>Explore Technical Specs</span>
                          <span className="transition-transform group-hover:translate-x-1 font-bold">
                            →
                          </span>
                        </Link>
                        {isCurrent && (
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Ambient internal specular sheen for current card */}
                  {isCurrent && (
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan/15 to-transparent rounded-full pointer-events-none" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Touch-Friendly Swipe Card */}
      <div className="md:hidden w-full px-4">
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="bg-white border-2 border-cyan/40 rounded-3xl p-6 shadow-card-elevated"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pale-blue text-electric font-sora">
                  {items[activeIndex].subtitle}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {activeIndex + 1} of {total}
                </span>
              </div>

              <div className="relative w-full h-[230px] flex items-center justify-center p-2 mb-4">
                <Image
                  src={items[activeIndex].src}
                  alt={items[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 380px"
                  priority
                />
              </div>

              <span className="text-[11px] font-semibold text-cyan-600 uppercase tracking-widest block">
                {items[activeIndex].department || "Clinical Equipment"}
              </span>
              <h3 className="font-sora font-extrabold text-2xl text-midnight mt-1">
                {items[activeIndex].title}
              </h3>

              <div className="mt-6 pt-4 border-t border-borderLight flex items-center justify-between">
                <Link
                  href={items[activeIndex].href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-electric to-royal px-5 py-3 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <span>Explore Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous equipment"
                    className="w-10 h-10 rounded-full border border-borderLight flex items-center justify-center text-textPrimary hover:bg-slate-100 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next equipment"
                    className="w-10 h-10 rounded-full border border-borderLight flex items-center justify-center text-textPrimary hover:bg-slate-100 active:scale-95 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Control Bar: Next/Prev + Pill Counter + Drag Hint */}
      {controls && (
        <div className="hidden md:flex items-center justify-between max-w-2xl mx-auto mt-6 px-6 py-3 rounded-full bg-white/90 border border-borderLight/80 shadow-card-modern backdrop-blur-md">
          <button
            onClick={prevSlide}
            aria-label="Previous equipment"
            className="w-10 h-10 rounded-full bg-lightBg hover:bg-electric hover:text-white flex items-center justify-center text-midnight transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Interactive Dots Bar */}
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-8 h-2.5 bg-electric shadow-glow"
                    : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-textSecondary">
            <MoveHorizontal className="w-4 h-4 text-cyan" />
            <span>Drag or click to navigate</span>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next equipment"
            className="w-10 h-10 rounded-full bg-lightBg hover:bg-electric hover:text-white flex items-center justify-center text-midnight transition-all duration-200 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
