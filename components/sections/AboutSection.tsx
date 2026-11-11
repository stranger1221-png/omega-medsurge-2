"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Award } from "lucide-react";
import LuminousStatement from "@/components/react-bits/LuminousStatement";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Long-term Customer Relationships",
    desc: "Building enduring partnerships with hospitals, clinical centers and medical teams through reliable communication.",
  },
  {
    icon: Award,
    title: "Scientific Integrity",
    desc: "Supplying clinical technologies that meet recognized regulatory and medical accuracy standards.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Business Practices",
    desc: "Conducting transparent, accountable engagements with hospital procurement teams and healthcare administrators.",
  },
  {
    icon: Sparkles,
    title: "Access to Medical Innovations",
    desc: "Connecting healthcare providers with modern imaging, surgical, and intensive care advancements.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 1. Seamless Luminous Philosophy Banner (Dark Space Theme) */}
      <div className="py-20 bg-gradient-to-b from-[#050E1B] via-[#081B31] to-[#0D2440] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <LuminousStatement
            text="Technology matters most when it reaches the people who need it."
            tint="#35C6DF"
          />
        </div>
      </div>

      {/* 2. Company Profile & Values (Modern Crisp Light Background) */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Asymmetric Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Visual Panel: Deep Navy Glass with Layered Healthcare Photography */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl bg-[#081B31] p-7 sm:p-9 relative overflow-hidden shadow-card-dark text-white border border-white/10">
                <div className="absolute top-0 right-0 w-72 h-72 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan bg-cyan/15 px-3.5 py-1.5 rounded-full border border-cyan/30 font-sora">
                    ESTABLISHED HEALTHCARE SUPPLIER
                  </span>

                  <h3 className="font-sora font-extrabold text-2xl text-white mt-5 mb-2">
                    Operating Suites & Diagnostic Facilities
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Serving hospitals across Telangana with verified systems from established global manufacturers.
                  </p>

                  {/* Layered High-Res Image */}
                  <div className="relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-navy-900 border border-white/15 p-2 shadow-inner group">
                    <Image
                      src="/images/hero/hero-modern-suite.jpg"
                      alt="Modern Healthcare Suite"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover rounded-xl brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-medium">
                    <span>Registered in Patel Nagar, Nampally</span>
                    <span className="font-bold text-cyan-bright">Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Panel: Narrative & Values */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pale-blue text-electric border border-electric/25 text-xs font-bold uppercase tracking-wider font-sora">
                <span>COMPANY PROFILE</span>
              </div>

              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-midnight leading-[1.14]">
                Supporting Healthcare Through Medical Innovation.
              </h2>

              <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
                Omega Medsurge serves the medical fraternity with a portfolio of medical devices and healthcare equipment across multiple clinical departments. The company focuses on long-term customer relationships, scientific integrity and access to medical innovations.
              </p>

              {/* Four Company Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {VALUES.map((val, idx) => {
                  const IconComponent = val.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-electric/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-pale-blue flex items-center justify-center text-electric mb-3.5 shadow-sm">
                        <IconComponent className="w-5 h-5 text-electric" />
                      </div>
                      <h4 className="font-sora font-bold text-sm text-midnight">
                        {val.title}
                      </h4>
                      <p className="text-xs text-textSecondary mt-1.5 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-midnight hover:bg-navy-700 transition-colors shadow-sm active:scale-95"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
