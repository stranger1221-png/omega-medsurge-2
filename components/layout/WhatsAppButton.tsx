"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
    COMPANY_INFO.whatsapp.defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-textPrimary px-3 py-2 rounded-xl shadow-card-modern border border-borderLight text-xs font-semibold animate-pulse-slow">
          <span>Need equipment assistance?</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-textSecondary hover:text-textPrimary p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Omega Medsurge on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />
      </a>
    </div>
  );
}

