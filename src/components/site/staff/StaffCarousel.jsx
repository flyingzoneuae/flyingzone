"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StaffCard from "./StaffCard";

/**
 * Staff carousel: CSS scroll-snap track with arrow buttons and a progress bar.
 * Works with touch swipe, trackpad, keyboard (arrow keys on the focused track).
 */
const StaffCarousel = ({ people }) => {
  const track = useRef(null);
  const [state, setState] = useState({ progress: 0, atStart: true, atEnd: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      progress: max > 0 ? el.scrollLeft / max : 1,
      atStart: el.scrollLeft <= 4,
      atEnd: el.scrollLeft >= max - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card ? card.getBoundingClientRect().width + gap : el.clientWidth), behavior: "smooth" });
  };

  return (
    <div className="sc">
      <ul className="sc__track" ref={track} onScroll={update} tabIndex={0} aria-label="Flying Zone team members">
        {people.map((person) => (
          <li key={person.name}>
            <StaffCard person={person} />
          </li>
        ))}
      </ul>

      <div className="sc__controls">
        <div className="sc__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.08, state.progress)})` }} />
        </div>
        <div className="sc__arrows">
          <button type="button" onClick={() => move(-1)} disabled={state.atStart} aria-label="Previous team members">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={state.atEnd} aria-label="Next team members">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCarousel;
