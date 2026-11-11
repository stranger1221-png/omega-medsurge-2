"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EquipmentQuickViewModal({
  product,
  isOpen,
  onClose,
}: QuickViewModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    `Hello Omega Medsurge, I would like to request detailed specifications and institutional pricing for ${product.name}.`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#081B31]/75 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full border border-electric/20 font-sora">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-textSecondary hidden sm:inline">
                  {product.department}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-midnight hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Equipment Image Canvas */}
                <div className="md:col-span-5 relative w-full h-[240px] sm:h-[280px] bg-slate-50 rounded-2xl border border-slate-200/80 p-4 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 drop-shadow-md"
                    sizes="300px"
                    priority
                  />
                </div>

                {/* Information Details */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-600 font-sora">
                      Equipment Specifications
                    </span>
                    <h2 id="modal-title" className="font-sora font-extrabold text-2xl text-midnight mt-1">
                      {product.name}
                    </h2>
                    <p className="text-xs text-textSecondary mt-0.5">
                      Department: {product.department}
                    </p>
                  </div>

                  <p className="text-sm text-textSecondary leading-relaxed">
                    {product.overview || product.shortDescription}
                  </p>

                  {/* Key Applications */}
                  {product.keyApplications && product.keyApplications.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="font-sora font-bold text-xs uppercase tracking-wider text-midnight">
                        Clinical Applications:
                      </p>
                      <ul className="space-y-1.5">
                        {product.keyApplications.slice(0, 3).map((app, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-textSecondary">
                            <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Hospital Equipment • Hyderabad Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-midnight hover:text-electric transition-colors"
              >
                <span>View Full Product Page & Datasheet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-midnight hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-electric" />
                  <span>Call Us</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Specs</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

