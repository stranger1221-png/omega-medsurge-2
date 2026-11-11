"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, Stethoscope, Handshake, Headphones, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WhyOmega() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-pale-blue rounded-full blur-[140px] pointer-events-none opacity-70" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pale-blue text-electric border border-electric/25 text-xs font-bold uppercase tracking-wider mb-3.5 font-sora">
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-midnight tracking-tight">
            Why Healthcare Providers Explore Omega Medsurge.
          </h2>
          <p className="mt-3 text-textSecondary text-base sm:text-lg">
            Dedicated infrastructure, multi-department portfolio, and responsive institutional procurement.
          </p>
        </div>

        {/* Bento Grid: 100% Solid, Perfectly Sized, Visually Cohesive */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Diverse Product Portfolio (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-[#081B31] text-white p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-card-dark border border-white/10 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-electric/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sora font-bold text-xs text-cyan bg-cyan/15 px-3 py-1 rounded-full border border-cyan/30">
                  01 — DIVERSE PORTFOLIO
                </span>
                <Package className="w-5 h-5 text-cyan" />
              </div>

              <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mt-3 mb-2">
                Comprehensive Multi-Department Portfolio
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Explore equipment across imaging, patient care, anaesthesia, operation theatre and sterilization.
              </p>
            </div>

            {/* Visual equipment preview strip */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/10 p-2.5 text-center border border-white/10">
                <div className="relative h-16 w-full mb-1">
                  <Image
                    src="/images/omega/signa-explorer-mri.png"
                    alt="MRI"
                    fill
                    sizes="(max-width: 768px) 30vw, 120px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-slate-300 font-semibold font-sora">Radiology</span>
              </div>

              <div className="rounded-xl bg-white/10 p-2.5 text-center border border-white/10">
                <div className="relative h-16 w-full mb-1">
                  <Image
                    src="/images/omega/carestation-30.png"
                    alt="Carestation"
                    fill
                    sizes="(max-width: 768px) 30vw, 120px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-slate-300 font-semibold font-sora">Anaesthesia</span>
              </div>

              <div className="rounded-xl bg-white/10 p-2.5 text-center border border-white/10">
                <div className="relative h-16 w-full mb-1">
                  <Image
                    src="/images/omega/quasar-elite-hd-led-ot-light.png"
                    alt="OT Light"
                    fill
                    sizes="(max-width: 768px) 30vw, 120px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-slate-300 font-semibold font-sora">OT Suites</span>
              </div>
            </div>
          </div>

          {/* Card 2: Healthcare Industry Focus (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-card-modern hover:border-electric/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sora font-bold text-xs text-electric bg-pale-blue px-3 py-1 rounded-full">
                  02 — HEALTHCARE FOCUS
                </span>
                <Stethoscope className="w-5 h-5 text-electric" />
              </div>

              <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-midnight mt-3 mb-2">
                Healthcare Industry Focus
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                A company focused on medical devices and equipment for the healthcare sector.
              </p>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden relative h-36 bg-slate-200 border border-slate-200">
              <Image
                src="/images/hero/hospital-hall.jpg"
                alt="Hospital Care"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 3: Manufacturer Relationships (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-card-modern hover:border-electric/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sora font-bold text-xs text-electric bg-pale-blue px-3 py-1 rounded-full">
                  03 — PROVEN BRANDS
                </span>
                <Handshake className="w-5 h-5 text-electric" />
              </div>

              <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-midnight mt-3 mb-2">
                Manufacturer Relationships
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                A product portfolio featuring established medical technology and healthcare companies.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-2">
              {["Wipro GE", "J&J Medical", "Midmark", "Meril", "MAP Industries", "Smith & Nephew"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-midnight shadow-sm"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Card 4: Direct Enquiry Support (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-gradient-to-br from-royal via-electric to-cyan text-white p-7 sm:p-9 flex flex-col justify-between shadow-glow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sora font-bold text-xs text-white bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-sm">
                  04 — DIRECT ENQUIRY SUPPORT
                </span>
                <Headphones className="w-5 h-5 text-white" />
              </div>

              <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mt-3 mb-2">
                Direct Enquiry & Specification Support
              </h3>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-lg">
                Contact the team for product information, institutional requirements and equipment enquiries.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-white/90 font-semibold font-sora">
                Rapid response for Telangana & institutional procurement
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-royal hover:bg-slate-50 font-sora font-bold text-sm transition-colors shadow-sm"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
