import FemalePlaceholder from "./FemalePlaceholder";

// Landmark behind each person, cycled: Makkah, Madinah, Dubai.
const BACKDROPS = ["makkah", "madinah", "dubai"];

/**
 * Core Team card: blue swoosh + faded landmark, the person's cut-out in front,
 * then a white panel with a red accent, name and role.
 */
const CoreTeamCard = ({ person, index }) => {
  const backdrop = BACKDROPS[index % BACKDROPS.length];
  const src = person.cutout || person.photo;
  return (
    <article className="ct-card">
      <div className={`ct-card__visual ct-card__visual--${backdrop}`}>
        <span className="ct-card__landmark" style={{ backgroundImage: `url(/assets/fz/staff/cut/bg-${backdrop}.webp)` }} aria-hidden="true" />
        <svg className="ct-card__swoosh" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={`ct-sw-${index}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2f6fe0" />
              <stop offset="1" stopColor="#163a82" />
            </linearGradient>
          </defs>
          <path d="M0 0 H400 V40 C300 30 190 70 120 150 C70 210 30 260 0 300 Z" fill={`url(#ct-sw-${index})`} />
          <path d="M0 330 C40 250 110 170 200 120 C270 80 340 64 400 62 V74 C330 80 260 104 200 140 C120 188 60 260 0 350 Z" fill="#ffffff" fillOpacity="0.55" />
        </svg>
        {src ? (
          // Transparent WebP, already right-sized: served as-is.
          <img className={person.cutout ? "ct-card__person" : "ct-card__person ct-card__person--photo"} src={src} alt={`${person.name}, ${person.role}`} loading="eager" decoding="async" />
        ) : (
          <span className="ct-card__person ct-card__person--ph">
            <FemalePlaceholder name={person.name} bare />
          </span>
        )}
        <svg className="ct-card__wave" viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 C120 80 260 0 400 18 V80 H0 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="ct-card__body">
        <span className="ct-card__accent" aria-hidden="true" />
        <h3 className="ct-card__name">{person.name}</h3>
        <p className="ct-card__role">{person.role}</p>
        <span className="ct-card__rule" aria-hidden="true" />
      </div>
    </article>
  );
};

export default CoreTeamCard;
