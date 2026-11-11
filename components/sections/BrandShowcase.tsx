"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowUpRight, ShieldCheck, CheckCircle } from "lucide-react";
import { BRANDS } from "@/data/brands";

export default function BrandShowcase() {
  return (
    <section
      id="brands"
      className="py-24 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pale-blue rounded-full blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pale-blue text-electric border border-electric/20 text-xs font-bold uppercase tracking-widest mb-4 font-sora shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-cyan-600" />
            <span>ESTABLISHED MANUFACTURERS</span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-midnight tracking-tight">
            Connected With Established Healthcare Names.
          </h2>
          <p className="mt-3.5 text-textSecondary text-base sm:text-lg leading-relaxed">
            Equipment solutions featuring proven medical technology and healthcare brands across critical hospital departments.
          </p>
        </div>

        {/* 6 Manufacturer Cards Grid: 100% Visible, Crisp, and Ultra-Stylish */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand, i) => (
            <div
              key={brand.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-card-modern hover:shadow-card-elevated hover:border-electric/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top card glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Tag & Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-electric bg-pale-blue px-3 py-1.5 rounded-full font-sora border border-electric/15">
                    {brand.tagline}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-electric group-hover:border-electric group-hover:text-white flex items-center justify-center text-slate-500 transition-all duration-200 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Brand Name */}
                <h3 className="font-sora font-extrabold text-xl text-midnight group-hover:text-electric transition-colors">
                  {brand.name}
                </h3>

                {/* Category Subtitle */}
                <div className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-cyan-700">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan shrink-0" />
                  <span>{brand.category}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-textSecondary mt-3.5 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Verified Supplier</span>
                <Link
                  href="/products"
                  className="text-electric font-bold hover:text-royal flex items-center gap-1 font-sora transition-colors"
                >
                  <span>Explore Systems</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
