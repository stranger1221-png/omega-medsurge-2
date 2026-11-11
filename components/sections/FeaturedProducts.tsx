"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Eye } from "lucide-react";
import ElasticHeading from "@/components/react-bits/ElasticHeading";
import ProductCarousel, { CarouselItem } from "@/components/react-bits/ProductCarousel";

// 8 verified equipment items specified for Option 02
const FEATURED_ITEMS: CarouselItem[] = [
  {
    id: "signa-explorer-mri",
    src: "/images/omega/signa-explorer-mri.png",
    alt: "SIGNA Explorer MRI",
    title: "SIGNA Explorer MRI",
    subtitle: "Imaging & Radiology",
    department: "Diagnostic Radiology Suite",
    href: "/products/signa-explorer-mri",
  },
  {
    id: "ge-32-slice-revolution-acts-ct-scan",
    src: "/images/omega/ge-32-slice-revolution-ct.png",
    alt: "GE 32 Slice Revolution ACTs Expert Edition CT Scan",
    title: "GE 32 Slice Revolution ACTs CT",
    subtitle: "Imaging & Radiology",
    department: "Computed Tomography",
    href: "/products/ge-32-slice-revolution-acts-ct-scan",
  },
  {
    id: "igs-320-cathlab",
    src: "/images/omega/igs-320-cathlab.png",
    alt: "IGS 320 Cathlab",
    title: "IGS 320 Cathlab",
    subtitle: "Imaging & Radiology",
    department: "Interventional Cardiology",
    href: "/products/igs-320-cathlab",
  },
  {
    id: "carestation-30",
    src: "/images/omega/carestation-30.png",
    alt: "Carestation 30",
    title: "Carestation 30",
    subtitle: "Anaesthesia",
    department: "Operating Room Workstation",
    href: "/products/carestation-30",
  },
  {
    id: "b105-patient-monitor",
    src: "/images/omega/b105-patient-monitor.png",
    alt: "B105 Patient Monitor",
    title: "B105 Patient Monitor",
    subtitle: "Critical Care",
    department: "ICU & Intensive Care Monitoring",
    href: "/products/b105-patient-monitor",
  },
  {
    id: "quasar-elite-hd-led-ot-light",
    src: "/images/omega/quasar-elite-hd-led-ot-light.png",
    alt: "Quasar eLite HD LED OT Light",
    title: "Quasar eLite HD LED OT Light",
    subtitle: "Operation Theatre",
    department: "High-Definition Surgical Illumination",
    href: "/products/quasar-elite-hd-led-ot-light",
  },
  {
    id: "hydraulic-ot-table",
    src: "/images/omega/hydraulic-ot-table.png",
    alt: "Hydraulic OT Table",
    title: "Hydraulic OT Table",
    subtitle: "Operation Theatre",
    department: "Surgical Operating Suite",
    href: "/products/hydraulic-ot-table",
  },
  {
    id: "hphv-rectangular-autoclave",
    src: "/images/omega/hphv-rectangular-autoclave.png",
    alt: "HPHV Rectangular Autoclave",
    title: "HPHV Rectangular Autoclave",
    subtitle: "Sterilization & CSSD",
    department: "Central Sterile Supply Department",
    href: "/products/hphv-rectangular-autoclave",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#050E1B] via-[#081B31] to-[#061324] text-white relative overflow-hidden">
      {/* Radiant Cyber-Medical Background Ambient Accents */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-electric/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[500px] bg-cyan/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Tactile Elastic Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan/40 text-xs font-bold uppercase tracking-widest text-cyan-bright mb-5 backdrop-blur-md shadow-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>FEATURED MEDICAL PORTFOLIO</span>
          </div>

          <div className="mt-2">
            <ElasticHeading
              text="Explore our equipment."
              as="h2"
              color="#FFFFFF"
              tensionColor="#35C6DF"
              className="text-3xl sm:text-4xl lg:text-5xl justify-center text-white"
              tension={0.35}
              stiffness={1.3}
              bounce={0.25}
              squash={0.2}
              tilt={0.2}
              lift={0.2}
              hint={true}
            />
          </div>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A closer look at selected equipment from the Omega Medsurge portfolio.
          </p>
        </div>

        {/* 3D Cylindrical Concave Product Carousel */}
        <ProductCarousel
          items={FEATURED_ITEMS}
          curvature={0.65}
          aspect={1.2}
          gap={18}
          draggable={true}
          controls={true}
          captions={true}
          pauseOnHover={true}
        />

        {/* Bottom Action: View Complete Catalogue */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-sora font-semibold text-white bg-gradient-to-r from-electric to-royal hover:from-royal hover:to-electric transition-all duration-300 shadow-glow hover:shadow-glow-lg text-sm sm:text-base border border-cyan/30 active:scale-95 group"
          >
            <span>Explore All 22+ Equipment Systems</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-bright" />
          </Link>
        </div>
      </div>
    </section>
  );
}
