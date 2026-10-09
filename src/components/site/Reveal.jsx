"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Subtle fade-up on scroll for elements marked with [data-reveal].
 * Content stays fully visible without JavaScript and when the visitor
 * prefers reduced motion (the hidden state only applies once this runs).
 */
const Reveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const root = document.documentElement;
    root.classList.add("fz-reveal-on");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default Reveal;
