import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Orchestrated GSAP timeline reveal for sections
 */
export function animateSectionReveal(
  target: HTMLElement | string,
  staggerItems?: string
) {
  if (typeof window === "undefined" || !target) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(target, {
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: "power3.out",
    });

    if (staggerItems) {
      tl.from(
        staggerItems,
        {
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }
  });

  return () => ctx.revert();
}

