"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, Layers } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import EquipmentQuickViewModal from "@/components/ui/EquipmentQuickViewModal";
import { PRODUCTS, Product } from "@/data/products";

const FILTER_CATEGORIES = [
  { id: "all", name: "All Solutions" },
  { id: "imaging-radiology", name: "Imaging & Radiology" },
  { id: "patient-care", name: "Patient Care" },
  { id: "anaesthesia", name: "Anaesthesia" },
  { id: "operation-theatre", name: "Operation Theatre" },
  { id: "sterilization-cssd", name: "Sterilization & CSSD" },
];

export default function ProductsCatalogueClient({ initialCategory = "all" }: { initialCategory?: string }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-lightBg min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pale-blue text-electric border border-electric/25 text-xs font-bold uppercase tracking-wider mb-3.5 font-sora">
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            <span>PRODUCT CATALOGUE</span>
          </div>
          <h1 className="font-sora font-extrabold text-3xl sm:text-5xl text-midnight tracking-tight">
            Medical Equipment Portfolio
          </h1>
          <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed">
            Explore verified hospital equipment, diagnostic imaging systems, and surgical workstations supplied by Omega Medsurge.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl border border-borderLight p-4 sm:p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 font-sora ${
                    isActive
                      ? "bg-midnight text-white shadow-sm"
                      : "bg-lightBg text-textSecondary hover:text-textPrimary hover:bg-slate-100"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-borderLight bg-lightBg text-xs text-textPrimary placeholder:text-textSecondary/60 focus:bg-white focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Results Count & Quick Reset */}
        <div className="flex items-center justify-between mb-6 text-xs text-textSecondary">
          <span>
            Showing <strong className="text-textPrimary">{filteredProducts.length}</strong> equipment solutions
          </span>
          {selectedCategory !== "all" && (
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-electric font-bold hover:underline"
            >
              Reset category filter
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={i < 4}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-borderLight p-8">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-sora font-bold text-lg text-midnight">No equipment found</h3>
            <p className="text-sm text-textSecondary mt-1">
              No products matched &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-electric text-white text-xs font-bold font-sora shadow-sm"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Equipment Quick View Modal */}
      <EquipmentQuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
