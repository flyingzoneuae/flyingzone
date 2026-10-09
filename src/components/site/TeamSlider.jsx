"use client";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * "Meet Our Team" in the original card design (patterned card, round photo,
 * name panel, PREV / NEXT), rebuilt with CSS scroll-snap instead of Swiper.
 */
const TeamSlider = ({ members }) => {
  const track = useRef(null);

  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="fz-teamslider">
      <ul className="fz-teamslider__track" ref={track} tabIndex={0} aria-label="Team members">
        {members.map((m) => (
          <li key={m.name}>
            <article className="fz-teamcard">
              <span className="fz-teamcard__photo">
                {m.photo ? (
                  <Image src={m.photo} alt={m.name} fill sizes="200px" />
                ) : (
                  <span className="fz-teamcard__initials" aria-hidden="true">
                    {m.initials}
                  </span>
                )}
              </span>
              <div className="fz-teamcard__content">
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="fz-teamslider__nav">
        <button type="button" onClick={() => move(-1)} aria-label="Previous team members">
          <ArrowLeft size={18} aria-hidden="true" />
          PREV
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next team members">
          NEXT
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
