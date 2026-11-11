"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CATEGORIES_DATA } from "@/data/categories";
import { PRODUCTS, Product } from "@/data/products";
import EquipmentQuickViewModal from "@/components/ui/EquipmentQuickViewModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CategoryExplorer() {
  const [selectedId, setSelectedId] = useState(CATEGORIES_DATA[0].id);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    CATEGORIES_DATA.find((c) => c.id === selectedId) || CATEGORIES_DATA[0];

  // GSAP ScrollTrigger Section Reveal
  useGSAP(
    () => {
      gsap.from(tabsRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(previewRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  const handleOpenQuickView = (slug: string) => {
    const prod = PRODUCTS.find((p) => p.slug === slug);
    if (prod) {
      setQuickViewProduct(prod);
    }
  };

  return (
    <section ref={sectionRef} id="solutions" className="py-28 bg-[#F5F8FC] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-pale-blue rounded-full blur-[140px] pointer-events-none opacity-80" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-100/60 rounded-full blur-[140px] pointer-events-none opacity-70" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pale-blue text-electric border border-electric/25 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm font-sora">
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-midnight leading-[1.15]">
            Explore Healthcare Solutions.
          </h2>
          <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed max-w-2xl">
            Discover equipment across the departments and applications that support modern healthcare facilities.
          </p>
        </div>

        {/* Category Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Category Tabs */}
          <div ref={tabsRef} className="lg:col-span-5 flex flex-col space-y-3">
            {CATEGORIES_DATA.map((cat) => {
              const isActive = cat.id === selectedId;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  className={`group relative text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-[#081B31] text-white border-[#081B31] shadow-card-modern scale-[1.01]"
                      : "bg-white hover:bg-slate-50/80 text-textPrimary border-borderLight hover:border-electric/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <span
                      className={`font-sora text-xs font-extrabold px-3 py-1.5 rounded-xl transition-colors ${
                        isActive
                          ? "bg-cyan/20 text-cyan-bright border border-cyan/40"
                          : "bg-slate-100 text-textSecondary group-hover:text-electric group-hover:bg-pale-blue"
                      }`}
                    >
                      {cat.number}
                    </span>
                    <div>
                      <h3
                        className={`font-sora font-bold text-base sm:text-lg transition-colors ${
                          isActive ? "text-white" : "text-midnight group-hover:text-electric"
                        }`}
                      >
                        {cat.name}
                      </h3>
                      <p
                        className={`text-xs mt-1 line-clamp-1 ${
                          isActive ? "text-slate-300" : "text-textSecondary"
                        }`}
                      >
                        {cat.headline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 relative z-10 ${
                      isActive
                        ? "text-cyan translate-x-1"
                        : "text-slate-400 group-hover:text-electric group-hover:translate-x-1"
                    }`}
                  />

                  {isActive && (
                    <motion.div
                      layoutId="active-category-pill"
                      className="absolute inset-0 bg-[#081B31] rounded-2xl border-2 border-electric"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Preview Card: Dynamically changing details & equipment photography */}
          <div ref={previewRef} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white border-2 border-borderLight/90 rounded-3xl p-6 sm:p-10 shadow-card-modern relative overflow-hidden"
              >
                {/* Header Information */}
                <div className="flex items-center justify-between pb-6 border-b border-borderLight">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-electric font-sora">
                      Department Category {activeCategory.number}
                    </span>
                    <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-midnight mt-1">
                      {activeCategory.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-pale-blue text-electric border border-electric/20 shadow-sm">
                    {activeCategory.productNames.length} Verified Systems
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 text-textSecondary text-base leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Prominent Featured Equipment Image Canvas with Specular Gradient */}
                <div className="relative w-full h-[280px] sm:h-[340px] bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl border border-slate-200 p-6 my-6 flex items-center justify-center shadow-inner group">
                  <div className="absolute inset-0 bg-radial-gradient from-cyan/10 via-transparent to-transparent pointer-events-none" />
                  <Image
                    src={activeCategory.primaryImage}
                    alt={activeCategory.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    sizes="(max-width: 1024px) 100vw, 650px"
                    priority
                  />
                </div>

                {/* Product Chips List with Quick View Action */}
                <div className="space-y-3">
                  <p className="font-sora font-bold text-xs uppercase tracking-wider text-midnight">
                    Featured Systems in this Category:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCategory.productNames.map((name, i) => {
                      const slug = activeCategory.productSlugs[i];
                      return (
                        <div
                          key={name}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-electric hover:bg-pale-blue/50 text-midnight text-xs font-semibold transition-all group"
                        >
                          <Link
                            href={`/products/${slug}`}
                            className="flex items-center gap-2 truncate flex-1 hover:text-electric transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 group-hover:text-electric transition-colors" />
                            <span className="truncate">{name}</span>
                          </Link>

                          <button
                            onClick={() => handleOpenQuickView(slug)}
                            className="p-1 text-slate-400 hover:text-electric ml-2 rounded-lg hover:bg-white transition-colors"
                            title={`Quick View ${name}`}
                            aria-label={`Quick View ${name}`}
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-borderLight flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Link
                    href={`/products?category=${activeCategory.slug}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-electric hover:bg-royal transition-all duration-200 shadow-sm active:scale-95"
                  >
                    <span>Explore {activeCategory.shortName} Portfolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-bold text-textSecondary hover:text-electric transition-colors flex items-center gap-1"
                  >
                    Request institutional quotation & datasheets →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Equipment Quick View Modal */}
      <EquipmentQuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
