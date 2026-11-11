"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { motion } from "motion/react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({
  product,
  priority = false,
  onQuickView,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-borderLight hover:border-electric/40 shadow-sm hover:shadow-card-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      {/* Card Header & Category */}
      <div className="p-5 pb-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full border border-electric/15 font-sora">
            {product.category}
          </span>
          <div className="flex items-center gap-1.5">
            {product.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <Sparkles className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
            {onQuickView && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onQuickView(product);
                }}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-electric hover:text-white flex items-center justify-center text-slate-500 transition-colors"
                title="Quick View Specifications"
                aria-label={`Quick View ${product.name}`}
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Image Frame */}
      <div className="relative w-full h-[200px] sm:h-[220px] p-4 flex items-center justify-center bg-slate-50/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      {/* Product Information */}
      <div className="p-5 pt-3 flex flex-col flex-grow justify-between border-t border-borderLight/60">
        <div>
          <h3 className="font-sora font-bold text-lg text-midnight group-hover:text-electric transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-textSecondary font-medium mt-1">
            {product.department}
          </p>
          <p className="text-xs text-textSecondary/80 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* CTA Link */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-bold text-electric group-hover:text-royal flex items-center gap-1.5 transition-colors font-sora"
          >
            <span>View Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[10px] text-slate-400 font-medium">Technical Data</span>
        </div>
      </div>
    </motion.div>
  );
}
