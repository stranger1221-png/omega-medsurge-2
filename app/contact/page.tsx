import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Building2, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import EnquiryForm from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Omega Medsurge Hyderabad — Medical Equipment Enquiries",
  description:
    "Contact Omega Medsurge in Hyderabad for product enquiries, technical datasheets, institutional quotations, and hospital equipment consultations.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    COMPANY_INFO.whatsapp.defaultMessage
  )}`;

  return (
    <div className="pt-32 pb-24 bg-lightBg min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pale-blue text-electric border border-electric/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>CONTACT OMEGA MEDSURGE</span>
          </div>
          <h1 className="font-sora font-extrabold text-3xl sm:text-5xl text-midnight tracking-tight leading-[1.15]">
            Let&apos;s Find the Right Equipment for Your Facility.
          </h1>
          <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed">
            Tell us what your healthcare facility needs. Connect with the Omega Medsurge team for product information, specifications, and procurement enquiries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bg-midnight rounded-3xl p-8 sm:p-10 text-white shadow-card-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan bg-cyan/15 px-3 py-1 rounded-full border border-cyan/30">
                  REGISTERED OFFICE
                </span>
                <h3 className="font-sora font-bold text-2xl text-white mt-3">
                  Omega Medsurge
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Healthcare Equipment & Technology Distribution
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Address
                    </h4>
                    <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                      Shop No. 1 & 2, Sri Balaji Enclave,<br />
                      D. No. 5-5-212/5/2 & 3, Patel Nagar, Nampally,<br />
                      Hyderabad - 500001, Telangana, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10">
                    <Phone className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Direct Phone Numbers
                    </h4>
                    <div className="flex flex-col gap-1 mt-1 text-sm text-slate-200">
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10">
                    <Mail className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm text-slate-200 hover:text-cyan transition-colors mt-1 block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan shrink-0 border border-white/10">
                    <Clock className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-slate-200 mt-1">
                      {COMPANY_INFO.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Connect */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sora font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-borderLight p-6 sm:p-10 shadow-card-modern">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-electric bg-pale-blue px-3 py-1 rounded-full">
                EQUIPMENT ENQUIRY FORM
              </span>
              <h2 className="font-sora font-extrabold text-2xl sm:text-3xl text-midnight mt-3">
                Send Your Requirements
              </h2>
              <p className="text-textSecondary text-sm mt-1">
                Fill in the details below to receive product datasheets, compliance documentation, and quotation terms.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

