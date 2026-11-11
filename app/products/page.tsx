import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProductsCatalogueClient from "@/components/sections/ProductsCatalogueClient";

export const metadata: Metadata = {
  title: "Medical Equipment Portfolio | Omega Medsurge",
  description:
    "Explore our complete 22+ portfolio of medical equipment across Imaging & Radiology, Patient Care, Anaesthesia, Operation Theatre, and Sterilization.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const initialCategory = searchParams?.category || "all";

  return (
    <Suspense fallback={<div className="pt-32 pb-24 text-center">Loading catalogue...</div>}>
      <ProductsCatalogueClient initialCategory={initialCategory} />
    </Suspense>
  );
}

