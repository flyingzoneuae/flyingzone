"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import CoreTeamCard from "./CoreTeamCard";

/** Scroll-snap carousel with page dots (swipe, trackpad, keyboard, dot clicks). */
const CoreTeamCarousel = ({ people }) => {
  const track = useRef(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const n = max > 4 ? Math.ceil(el.scrollWidth / el.clientWidth - 0.05) : 1;
    setPages(n);
    setPage(max > 4 ? Math.round((el.scrollLeft / max) * (n - 1)) : 0);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (i) => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: pages > 1 ? (max * i) / (pages - 1) : 0, behavior: "smooth" });
  };

  return (
    <div className="ct-carousel">
      <ul className="ct-track" ref={track} onScroll={measure} tabIndex={0} aria-label="Flying Zone core team">
        {people.map((person, i) => (
          <li key={person.name}>
            <CoreTeamCard person={person} index={i} />
          </li>
        ))}
      </ul>
      {pages > 1 && (
        <div className="ct-dots" role="group" aria-label="Team pages">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === page ? "is-active" : undefined}
              aria-label={`Show team page ${i + 1} of ${pages}`}
              aria-current={i === page ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreTeamCarousel;
