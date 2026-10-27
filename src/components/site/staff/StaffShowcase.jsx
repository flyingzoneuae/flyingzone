import "@/styles/staff.css";
import "@/styles/core-team.css";
import { Plane } from "lucide-react";
import RevealScope from "./RevealScope";
import CoreTeamCarousel from "./CoreTeamCarousel";
import { chairman, coreTeam, leadership, teamIntro } from "@/data/staffContent";

/** "Our Core Team": centred heading + landmark card carousel (CEO, chairman, then the rest of leadership first). */
const StaffShowcase = () => {
  const [ceo, ...directors] = leadership;
  const people = [
    ceo,
    { name: chairman.name, role: chairman.role, photo: chairman.photo, cutout: chairman.cutout },
    ...directors,
    ...coreTeam.filter((p) => p.show !== false),
  ];
  return (
    <RevealScope as="section" className="ct" aria-labelledby="team-title">
      <span className="ct__mosque" aria-hidden="true" />
      <svg className="ct__swoosh ct__swoosh--left" viewBox="0 0 600 500" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120 C160 160 300 300 420 500 H0 Z" fill="#2454b8" fillOpacity="0.9" />
        <path d="M0 60 C200 100 360 260 470 500 H420 C320 290 180 150 0 110 Z" fill="#00afc7" fillOpacity="0.35" />
      </svg>
      <svg className="ct__swoosh ct__swoosh--right" viewBox="0 0 600 500" preserveAspectRatio="none" aria-hidden="true">
        <path d="M600 220 C440 240 300 320 200 500 H600 Z" fill="#2454b8" fillOpacity="0.85" />
      </svg>
      <span className="ct__plane" aria-hidden="true">
        <Plane size={64} strokeWidth={1.2} />
      </span>

      <div className="fz-container ct__inner">
        <header className="ct__head" data-st>
          <p className="ct__eyebrow">Our</p>
          <h2 id="team-title" className="ct__title">
            Core <span>Team</span>
          </h2>
          <p className="ct__lead">{teamIntro.text}</p>
        </header>
        <div data-st style={{ "--i": 1 }}>
          <CoreTeamCarousel people={people} />
        </div>
      </div>
    </RevealScope>
  );
};

export default StaffShowcase;
