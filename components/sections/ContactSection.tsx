"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Building } from "lucide-react";
import SignalHeading from "@/components/react-bits/SignalHeading";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { COMPANY_INFO } from "@/data/company";

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    COMPANY_INFO.whatsapp.defaultMessage
  )}`;

  return (
    <section id="contact" className="py-24 bg-midnight text-white relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-electric/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dark Closing Banner with Signal Type Accent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SignalHeading
            text="LET'S TALK HEALTHCARE"
            color="#EAF8FF"
            glowColor="#35C6DF"
            glow={0.35}
            flickers={2}
            trigger="view"
            loop={false}
          />

          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-4">
            Let&apos;s equip your healthcare facility.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Connect with Omega Medsurge for product information and equipment enquiries.
          </p>
        </div>

        {/* Contrasting Surfaces: Left Dark Info Panel + Right Pale-Blue Form Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Dark Navy Direct Information Panel */}
          <div className="lg:col-span-5 rounded-3xl bg-navy-900/90 border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-card-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
                  HEADQUARTERS
                </span>
                <h3 className="font-sora font-bold text-2xl text-white mt-3">
                  Omega Medsurge
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Healthcare Equipment & Technology Distribution
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10 mt-0.5">
                    <MapPin className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm text-slate-200 mt-0.5 leading-relaxed">
                      Shop No. 1 & 2, Sri Balaji Enclave,<br />
                      D. No. 5-5-212/5/2 & 3, Patel Nagar, Nampally,<br />
                      Hyderabad - 500001, Telangana, India.
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10 mt-0.5">
                    <Phone className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Phone Numbers
                    </p>
                    <div className="flex flex-col gap-1 mt-0.5 text-sm text-slate-200">
                      <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-cyan transition-colors">
                        {COMPANY_INFO.displayPhones[0]}
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-cyan transition-colors">
                        {COMPANY_INFO.displayPhones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10 mt-0.5">
                    <Mail className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm text-slate-200 hover:text-cyan transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10 mt-0.5">
                    <Clock className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Working Hours
                    </p>
                    <p className="text-sm text-slate-200 mt-0.5">
                      {COMPANY_INFO.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sora font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pale-Blue / Light Contrasting Surface with Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-lightBg border border-borderLight p-6 sm:p-10 shadow-card-modern text-textPrimary">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full">
                INSTITUTIONAL ENQUIRY
              </span>
              <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-midnight mt-3">
                Let&apos;s Find the Right Equipment for Your Facility.
              </h3>
              <p className="text-textSecondary text-sm sm:text-base mt-2">
                Tell us what your healthcare facility needs. Connect with the Omega Medsurge team for product information and enquiries.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

