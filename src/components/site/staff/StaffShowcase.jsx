import "@/styles/staff.css";
import RevealScope from "./RevealScope";
import StaffCarousel from "./StaffCarousel";
import { coreTeam, leadership, teamIntro } from "@/data/staffContent";

/** "Meet Our Core Team": heading + staff carousel (leadership first). */
const StaffShowcase = () => {
  const people = [...leadership.map((p) => ({ ...p, lead: true })), ...coreTeam.filter((p) => p.show !== false)];
  return (
    <RevealScope as="section" className="st-team" aria-labelledby="team-title">
      <div className="fz-container">
        <header className="st-team__head" data-st>
          <div>
            <p className="st-eyebrow">{teamIntro.eyebrow}</p>
            <h2 id="team-title" className="st-h2">
              {teamIntro.title}
            </h2>
          </div>
          <p className="st-team__lead">{teamIntro.text}</p>
        </header>
        <div data-st style={{ "--i": 1 }}>
          <StaffCarousel people={people} />
        </div>
      </div>
    </RevealScope>
  );
};

export default StaffShowcase;
