"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Umrah page: the "Umrah by Air" and "Compare" cards each open a panel
 * (the four air packages, or the comparison table) below the card grid.
 * Panel content is rendered on the server; this only shows/hides it.
 * Linking to /umrah#air-packages or #compare-packages opens that panel.
 */
const PanelsContext = createContext({ open: null, toggle: () => {} });

export const PanelsProvider = ({ ids, children }) => {
  const [open, setOpen] = useState(null);

  const toggle = useCallback((id) => {
    setOpen((prev) => {
      const next = prev === id ? null : id;
      if (next) {
        // wait for the panel to render, then bring it into view
        requestAnimationFrame(() =>
          document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (ids.includes(id)) {
        setOpen(id);
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [ids]);

  const value = useMemo(() => ({ open, toggle }), [open, toggle]);
  return <PanelsContext.Provider value={value}>{children}</PanelsContext.Provider>;
};

export const PanelButton = ({ id, label, openLabel }) => {
  const { open, toggle } = useContext(PanelsContext);
  const isOpen = open === id;
  return (
    <button
      type="button"
      className={`fz-btn fz-btn--primary fz-btn--sm fz-panel-btn${isOpen ? " is-open" : ""}`}
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={() => toggle(id)}
    >
      {isOpen ? openLabel : label}
      <ChevronDown size={16} aria-hidden="true" />
    </button>
  );
};

export const Panel = ({ id, labelledBy, children }) => {
  const { open } = useContext(PanelsContext);
  return (
    <section id={id} className="fz-panel" aria-labelledby={labelledBy} hidden={open !== id}>
      {children}
    </section>
  );
};
