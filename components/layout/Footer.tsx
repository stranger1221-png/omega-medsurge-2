"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-midnight text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-glow">
                <Image
                  src="/images/omega/logo.png"
                  alt="Omega Medsurge Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-sora font-extrabold text-xl tracking-tight text-white">
                OMEGA <span className="text-cyan">MEDSURGE</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Healthcare technology and medical equipment supplier in Hyderabad, Telangana. Delivering access to dependable clinical devices for hospitals, diagnostics, and surgical suites.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Registered Office:</p>
              <p>{COMPANY_INFO.address.full}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sora font-semibold text-sm uppercase tracking-wider text-cyan mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/#brands" className="hover:text-cyan transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sora font-semibold text-sm uppercase tracking-wider text-cyan mb-4">
              Equipment Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products?category=imaging-radiology" className="hover:text-cyan transition-colors">
                  Imaging & Radiology
                </Link>
              </li>
              <li>
                <Link href="/products?category=patient-care" className="hover:text-cyan transition-colors">
                  Patient Care
                </Link>
              </li>
              <li>
                <Link href="/products?category=anaesthesia" className="hover:text-cyan transition-colors">
                  Anaesthesia
                </Link>
              </li>
              <li>
                <Link href="/products?category=operation-theatre" className="hover:text-cyan transition-colors">
                  Operation Theatre
                </Link>
              </li>
              <li>
                <Link href="/products?category=sterilization-cssd" className="hover:text-cyan transition-colors">
                  Sterilization & CSSD
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-sora font-semibold text-sm uppercase tracking-wider text-cyan mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center gap-2 hover:text-cyan transition-colors"
              >
                <Phone className="w-4 h-4 text-electric shrink-0" />
                <span>{COMPANY_INFO.displayPhones[0]}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones[1]}`}
                className="flex items-center gap-2 hover:text-cyan transition-colors"
              >
                <Phone className="w-4 h-4 text-electric shrink-0" />
                <span>{COMPANY_INFO.displayPhones[1]}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-electric shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
                    COMPANY_INFO.whatsapp.defaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
                >
                  <span>WhatsApp Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Omega Medsurge. All rights reserved.</p>
          <p className="text-slate-400">
            Medical Equipment & Healthcare Solutions • Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}

