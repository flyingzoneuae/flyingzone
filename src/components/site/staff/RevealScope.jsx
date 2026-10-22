"use client";
import { useEffect, useRef } from "react";

/**
 * Staggered fade-up for elements marked [data-st] inside this wrapper.
 * Self-contained (works on the redesigned pages and the legacy About page).
 * Content is fully visible without JavaScript and with reduced motion.
 */
const RevealScope = ({ as: Tag = "div", className, children, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("st-motion");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
    );
    root.querySelectorAll("[data-st]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default RevealScope;
