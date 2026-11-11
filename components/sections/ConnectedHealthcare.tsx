"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Network, CheckCircle, ShieldCheck, Cpu } from "lucide-react";
import AstralShell from "@/components/react-bits/AstralShell";

export default function ConnectedHealthcare() {
  return (
    <section className="py-28 bg-[#050E1B] text-white relative overflow-hidden border-t border-white/5">
      {/* Radiant Cyber Background Lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-electric/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Vector Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(103, 220, 235, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 120, 246, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-cyan/40 text-xs font-bold uppercase tracking-widest text-cyan-bright shadow-glow font-sora">
              <Network className="w-3.5 h-3.5 text-cyan" />
              <span>CONNECTED BY TECHNOLOGY</span>
            </div>

            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.14]">
              Bringing Healthcare Technology Together.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Omega Medsurge works across multiple medical equipment categories and healthcare technology relationships, connecting healthcare institutions with a diverse equipment portfolio.
            </p>

            {/* Core Pillars */}
            <div className="pt-2 space-y-4">
              {[
                { title: "Multi-Departmental Integration", desc: "Coordinating equipment sourcing across imaging, critical care and surgical suites." },
                { title: "Verified Brand Ecosystem", desc: "Collaborating with premier manufacturers including Wipro GE, J&J and Midmark." },
                { title: "Direct Hospital Procurement Support", desc: "Providing responsive institutional pricing, technical datasheets, and delivery terms." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-cyan-bright" />
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-sm text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-sora font-semibold text-white bg-gradient-to-r from-electric to-royal hover:from-royal hover:to-electric transition-all duration-300 shadow-glow text-sm sm:text-base active:scale-95 border border-cyan/30"
              >
                <span>Explore About Omega Medsurge</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-bright" />
              </Link>
            </div>
          </div>

          {/* Right Column: Astral Shell (Connected Node Visual Metaphor) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full relative">
              <AstralShell
                networkColor="#3478F6"
                highlightColor="#35C6DF"
                nodeCount={1050}
                maxConnections={4}
                rotationSpeed={0.0028}
              />

              <div className="text-center mt-3">
                <span className="text-[11px] uppercase tracking-[0.2em] text-cyan-bright/80 font-bold font-sora">
                  Interactive Healthcare Connection Constellation
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
