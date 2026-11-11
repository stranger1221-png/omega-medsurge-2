import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Sparkles,
  Building,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { BRANDS } from "@/data/brands";

export const metadata: Metadata = {
  title: "About Us | Omega Medsurge — Medical Equipment Supplier Hyderabad",
  description:
    "Learn about Omega Medsurge, our values of scientific integrity, customer-focused approach, and our role in connecting healthcare institutions with modern medical equipment.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-lightBg min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pale-blue text-electric border border-electric/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>ABOUT OMEGA MEDSURGE</span>
          </div>
          <h1 className="font-sora font-extrabold text-3xl sm:text-5xl text-midnight tracking-tight leading-[1.15]">
            Supporting Healthcare Through Medical Innovation.
          </h1>
          <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed">
            Omega Medsurge serves the medical fraternity with a portfolio of medical devices and healthcare equipment across multiple clinical departments. The company focuses on long-term customer relationships, scientific integrity and access to medical innovations.
          </p>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden mb-16 shadow-card-modern border border-borderLight">
          <Image
            src="/images/hero/hero-modern-suite.jpg"
            alt="Omega Medsurge Healthcare Technology Suite"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent flex items-end p-8">
            <div className="text-white max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
                Clinical Excellence
              </span>
              <p className="font-sora font-bold text-xl sm:text-2xl mt-1">
                Equipping Critical Care & Surgical Infrastructure Across India
              </p>
            </div>
          </div>
        </div>

        {/* Four Company Principles */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full">
              CORE PHILOSOPHY
            </span>
            <h2 className="font-sora font-extrabold text-3xl text-midnight mt-3">
              Our Principles & Ethical Standards
            </h2>
            <p className="text-textSecondary text-sm sm:text-base mt-2">
              Guided by scientific precision, transparent commerce, and lasting clinical trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPANY_INFO.principles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-borderLight p-6 sm:p-8 shadow-sm hover:shadow-card-modern transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pale-blue flex items-center justify-center text-electric mb-4">
                  {idx === 0 && <HeartHandshake className="w-5 h-5" />}
                  {idx === 1 && <Building className="w-5 h-5" />}
                  {idx === 2 && <Sparkles className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="font-sora font-bold text-xl text-midnight mb-2">
                  {p.title}
                </h3>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturer Relationships */}
        <div className="mb-20 bg-midnight rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-card-dark">
          <div className="absolute top-0 right-0 w-80 h-80 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan bg-cyan/15 px-3 py-1 rounded-full border border-cyan/30">
              SUPPLIER ECOSYSTEM
            </span>
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-white mt-3">
              Connected With Established Healthcare Names
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              We connect healthcare institutions with equipment from reputable medical manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {BRANDS.map((b) => (
              <div
                key={b.id}
                className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm"
              >
                <h4 className="font-sora font-bold text-base text-white">{b.name}</h4>
                <p className="text-xs text-cyan-bright mt-1 font-medium">{b.category}</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & CTA */}
        <div className="bg-white rounded-3xl border border-borderLight p-8 sm:p-12 shadow-card-modern flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric mb-2">
              <MapPin className="w-4 h-4" />
              <span>Registered Headquarters</span>
            </div>
            <h3 className="font-sora font-extrabold text-2xl text-midnight">
              Patel Nagar, Nampally, Hyderabad
            </h3>
            <p className="text-textSecondary text-sm mt-1 max-w-md">
              {COMPANY_INFO.address.full}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-electric hover:bg-royal transition-colors shadow-sm"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-sora font-semibold text-sm text-midnight bg-lightBg hover:bg-slate-200 border border-borderLight transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

