"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Stethoscope, ShieldCheck, Activity } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  {
    icon: Stethoscope,
    target: 22,
    suffix: "+",
    label: "Medical Systems",
    description: "Across imaging, critical care & surgical suites",
  },
  {
    icon: Building2,
    target: 6,
    suffix: "",
    label: "Global Brand Alliances",
    description: "Wipro GE, J&J, Midmark, Meril & more",
  },
  {
    icon: Activity,
    target: 5,
    suffix: "",
    label: "Clinical Departments",
    description: "Radiology, ICU, OT, Anaesthesia, CSSD",
  },
  {
    icon: ShieldCheck,
    target: 100,
    suffix: "%",
    label: "Institutional Grade",
    description: "Verified compliant hospital supply",
  },
];

export default function StatCounterBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      STATS.forEach((stat, i) => {
        const el = countRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.innerText = Math.floor(obj.val).toString();
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-modern">
        {STATS.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={i}
              className={`p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 ${
                i !== STATS.length - 1 ? "lg:border-r border-slate-100" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-pale-blue flex items-center justify-center text-electric mb-3">
                <IconComponent className="w-5 h-5 text-electric" />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span
                  ref={(el) => {
                    countRefs.current[i] = el;
                  }}
                  className="font-sora font-extrabold text-3xl sm:text-4xl text-midnight"
                >
                  0
                </span>
                <span className="font-sora font-extrabold text-2xl sm:text-3xl text-cyan-600">
                  {stat.suffix}
                </span>
              </div>
              <h4 className="font-sora font-bold text-sm text-midnight mt-1">
                {stat.label}
              </h4>
              <p className="text-xs text-textSecondary mt-1 leading-normal hidden sm:block">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

