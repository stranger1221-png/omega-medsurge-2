import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  ArrowRight,
  Share2,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import ProductCard from "@/components/ui/ProductCard";
import EnquiryForm from "@/components/ui/EnquiryForm";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: "Product Not Found | Omega Medsurge" };
  }

  return {
    title: `${product.name} | Omega Medsurge Medical Equipment`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — Omega Medsurge`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category (excluding current)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    `Hello Omega Medsurge, I would like to request technical specifications and quote for ${product.name}.`
  )}`;

  return (
    <div className="pt-32 pb-24 bg-lightBg min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-textSecondary font-medium">
            <li>
              <Link href="/" className="hover:text-electric transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link href="/products" className="hover:text-electric transition-colors">
                Products
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link
                href={`/products?category=${product.categoryId}`}
                className="hover:text-electric transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-midnight font-bold truncate max-w-[220px]">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Prominent Product Image Presentation */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-borderLight p-8 sm:p-12 shadow-card-modern flex flex-col items-center justify-center relative overflow-hidden">
            {/* Ambient subtle backdrop */}
            <div className="absolute inset-0 bg-radial-gradient from-pale-blue/40 via-transparent to-transparent pointer-events-none" />

            <div className="w-full flex items-center justify-between mb-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full border border-electric/20">
                {product.category}
              </span>
              <span className="text-xs font-semibold text-textSecondary">
                {product.department}
              </span>
            </div>

            {/* High-res Equipment Canvas */}
            <div className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center my-4 relative z-10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 drop-shadow-lg"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />
            </div>

            <div className="w-full pt-6 border-t border-borderLight/80 flex items-center justify-between text-xs text-textSecondary relative z-10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan" />
                Verified Clinical Sourcing
              </span>
              <span>Hyderabad Supply Ready</span>
            </div>
          </div>

          {/* Right Column: Information, Specifications & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                Clinical Equipment Profile
              </span>
              <h1 className="font-sora font-extrabold text-2xl sm:text-4xl text-midnight tracking-tight mt-1 mb-3">
                {product.name}
              </h1>
              <p className="text-sm font-semibold text-textSecondary">
                Department: {product.department}
              </p>
            </div>

            {/* Introduction / Short Description */}
            <div className="bg-white rounded-2xl border border-borderLight p-6 shadow-sm">
              <h3 className="font-sora font-bold text-sm text-midnight mb-2">
                Equipment Overview
              </h3>
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                {product.overview || product.shortDescription}
              </p>
            </div>

            {/* Key Clinical Applications if available */}
            {product.keyApplications && product.keyApplications.length > 0 && (
              <div className="bg-white rounded-2xl border border-borderLight p-6 shadow-sm">
                <h3 className="font-sora font-bold text-sm text-midnight mb-3">
                  Key Clinical Applications
                </h3>
                <ul className="space-y-2.5">
                  {product.keyApplications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-textSecondary">
                      <CheckCircle className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Specification Enquiry</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sora font-semibold text-sm text-midnight bg-white hover:bg-slate-50 border border-borderLight transition-colors shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4 text-electric" />
                <span>Call Specialist</span>
              </a>
            </div>

            {/* Institution Consultation Note */}
            <div className="p-4 rounded-xl bg-pale-blue/60 border border-electric/20 text-xs text-textSecondary flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
              <span>
                Omega Medsurge provides quotation and technical procurement datasheets to hospitals, medical centers, and clinical facilities across Telangana and India.
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Facility Enquiry Form for this specific product */}
        <div className="mt-16 bg-white rounded-3xl border border-borderLight p-6 sm:p-10 shadow-card-modern">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full">
              DIRECT SPECIFICATION REQUEST
            </span>
            <h2 className="font-sora font-extrabold text-2xl sm:text-3xl text-midnight mt-3">
              Request Technical Details for {product.name}
            </h2>
            <p className="text-textSecondary text-sm mt-1">
              Complete the enquiry below and our technical equipment specialist will share formal datasheets and institutional terms.
            </p>
          </div>

          <EnquiryForm defaultProduct={product.name} />
        </div>

        {/* Related Equipment in this Category */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-textSecondary">
                  RELATED SYSTEMS
                </span>
                <h3 className="font-sora font-extrabold text-2xl text-midnight mt-1">
                  More in {product.category}
                </h3>
              </div>
              <Link
                href={`/products?category=${product.categoryId}`}
                className="text-xs font-bold text-electric hover:text-royal flex items-center gap-1"
              >
                <span>View All Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

