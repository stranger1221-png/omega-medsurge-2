import React from "react";
import Hero from "@/components/sections/Hero";
import StatCounterBar from "@/components/ui/StatCounterBar";
import CategoryExplorer from "@/components/sections/CategoryExplorer";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ConnectedHealthcare from "@/components/sections/ConnectedHealthcare";
import AboutSection from "@/components/sections/AboutSection";
import BrandShowcase from "@/components/sections/BrandShowcase";
import WhyOmega from "@/components/sections/WhyOmega";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 01: Interactive Modern Hero Section with Three.js Orbital Scene */}
      <Hero />

      {/* 02: GSAP Animated Metrics Counter Bar */}
      <StatCounterBar />

      {/* 03: Horizontal Interactive Product Category Explorer with GSAP reveals */}
      <CategoryExplorer />

      {/* 04: Featured Products with Elastic Lettering & 3D Concave Carousel */}
      <FeaturedProducts />

      {/* 05: Connected Healthcare Ecosystem with Astral Shell Globe */}
      <ConnectedHealthcare />

      {/* 06: Company Introduction with Luminous Statement & Split Values */}
      <AboutSection />

      {/* 07: Manufacturer Relationships with GSAP Staggered Cards */}
      <BrandShowcase />

      {/* 08: Why Omega Medsurge Bento Grid */}
      <WhyOmega />

      {/* 09: Contact & Conversion Section with Signal Type & Enquiry Form */}
      <ContactSection />
    </>
  );
}
