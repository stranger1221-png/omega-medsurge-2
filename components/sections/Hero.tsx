"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Activity,
  Layers,
  ChevronRight,
  Stethoscope,
  Building2,
} from "lucide-react";
import { motion } from "motion/react";
import HeroOrbitalScene from "@/components/three/HeroOrbitalScene";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[96vh] lg:min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#050E1B] text-white overflow-hidden flex items-center"
    >
      {/* Dynamic Multi-layered Ambient Light Volumetrics */}
      <div className="absolute top-1/4 left-1/12 w-[600px] h-[600px] bg-electric/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/12 w-[650px] h-[650px] bg-cyan/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber-medical Precision Vector Grid */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(103, 220, 235, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 120, 246, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Vignette Mask */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050E1B]/50 to-[#050E1B] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Confident Modern Medtech Copy & Telemetry */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            {/* Precision Overline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.07] border border-cyan/40 backdrop-blur-xl w-fit shadow-glow"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-bright opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-cyan-bright font-sora">
                OMEGA MEDSURGE | HEALTHCARE TECHNOLOGY SOLUTIONS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-[64px] tracking-tight leading-[1.08]"
            >
              Equipping Healthcare{" "}
              <span className="bg-gradient-to-r from-white via-cyan-bright to-electric bg-clip-text text-transparent drop-shadow-sm">
                for What&apos;s Next.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Discover medical equipment and healthcare technology solutions designed to serve hospitals, surgical suites and medical institutions across critical departments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-sora font-semibold text-white bg-gradient-to-r from-electric to-royal hover:from-royal hover:to-electric transition-all duration-300 shadow-glow hover:shadow-glow-lg text-sm sm:text-base active:scale-95 border border-cyan/30"
              >
                <span>Explore Our Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-bright" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-sora font-semibold text-white/95 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-cyan/50 backdrop-blur-xl transition-all duration-300 text-sm sm:text-base active:scale-95 shadow-sm"
              >
                <span>Request a Quote</span>
              </Link>
            </motion.div>

            {/* Key Telemetry Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl"
            >
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl sm:text-3xl text-cyan-bright">22+</span>
                <p className="text-xs text-slate-400 font-medium">Verified Systems</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl sm:text-3xl text-white">5</span>
                <p className="text-xs text-slate-400 font-medium">Clinical Wings</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl sm:text-3xl text-electric-light">Hyderabad</span>
                <p className="text-xs text-slate-400 font-medium">Headquarters</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Macaw-style True Cutout Product Composition with Three.js Orbital Core behind */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
            
            {/* The 3D Orbital Scene rendered directly behind the equipment cutout */}
            <div className="absolute inset-0 flex items-center justify-center z-0 scale-125 lg:scale-135 pointer-events-none">
              <HeroOrbitalScene />
            </div>

            {/* Hero Equipment Composition: Cutout floating without box enclosure */}
            <div className="relative z-10 w-full flex items-center justify-center">
              
              {/* Central Flagship Machine: GE 32 Slice Revolution CT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-[340px] sm:w-[420px] lg:w-[460px] h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center group"
              >
                {/* Radial ambient glow immediately behind cutout */}
                <div className="absolute w-72 h-72 rounded-full bg-cyan/25 blur-3xl pointer-events-none animate-pulse-slow" />
                
                <Image
                  src="/images/omega/ge-32-slice-revolution-ct.png"
                  alt="GE 32 Slice Revolution ACTs Expert Edition CT Scan"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter brightness-105 group-hover:scale-105 transition-transform duration-700 select-none"
                  priority
                />

                {/* Floating Telemetry Capsule 1: Top Status */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#081B31]/95 border border-cyan/40 backdrop-blur-xl shadow-glow text-[11px] font-semibold text-cyan-bright flex items-center gap-2 whitespace-nowrap"
                >
                  <Activity className="w-3.5 h-3.5 text-cyan animate-pulse" />
                  <span>32-Slice CT • Sub-Millimeter Diagnostic Precision</span>
                </motion.div>

                {/* Floating Telemetry Capsule 2: Left Satellite (B105 Patient Monitor) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="hidden sm:flex absolute -left-8 bottom-12 items-center gap-3 p-3 rounded-2xl bg-[#081B31]/95 border border-white/20 backdrop-blur-xl shadow-card-dark"
                >
                  <div className="relative w-12 h-12 bg-white/10 rounded-xl p-1 flex items-center justify-center border border-white/10">
                    <Image
                      src="/images/omega/b105-patient-monitor.png"
                      alt="B105 Patient Monitor"
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="font-sora font-bold text-xs text-white block">B105 Monitor</span>
                    <span className="text-[10px] text-cyan-bright font-medium">Critical Care Suite</span>
                  </div>
                </motion.div>

                {/* Floating Telemetry Capsule 3: Right Satellite (Quasar eLite OT Light) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden sm:flex absolute -right-6 top-16 items-center gap-3 p-3 rounded-2xl bg-[#081B31]/95 border border-cyan/30 backdrop-blur-xl shadow-glow"
                >
                  <div className="relative w-12 h-12 bg-white/10 rounded-xl p-1 flex items-center justify-center border border-white/10">
                    <Image
                      src="/images/omega/quasar-elite-hd-led-ot-light.png"
                      alt="Quasar eLite OT Light"
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="font-sora font-bold text-xs text-white block">Quasar eLite HD</span>
                    <span className="text-[10px] text-electric-light font-medium">Operation Theatre</span>
                  </div>
                </motion.div>

                {/* Floating Telemetry Capsule 4: Bottom Specs Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl bg-[#081B31]/90 border border-electric/40 backdrop-blur-xl shadow-card-dark flex items-center gap-3 text-xs whitespace-nowrap"
                >
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan" />
                    <span>Certified GE Healthcare Systems</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <Link
                    href="/products/ge-32-slice-revolution-acts-ct-scan"
                    className="text-cyan-bright hover:underline font-semibold flex items-center gap-1"
                  >
                    Specifications <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
