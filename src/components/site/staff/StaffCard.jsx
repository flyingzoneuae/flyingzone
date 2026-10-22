import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import TwitterXIcon from "@/components/svg/TwitterXIcon";
import FemalePlaceholder from "./FemalePlaceholder";

const NETWORKS = [
  { key: "facebook", label: "Facebook", Icon: (p) => <Facebook size={15} {...p} /> },
  { key: "x", label: "X", Icon: (p) => <TwitterXIcon width={13} height={13} {...p} /> },
  { key: "instagram", label: "Instagram", Icon: (p) => <Instagram size={15} {...p} /> },
  { key: "linkedin", label: "LinkedIn", Icon: (p) => <Linkedin size={15} {...p} /> },
];

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Portrait = ({ person, sizes }) =>
  person.photo ? (
    // Already right-sized WebP (scripts/optimize-staff-images.cjs): served as-is.
    // Eager so off-screen carousel cards are never blank when slid into view (~25 KB each).
    <Image src={person.photo} alt="" fill unoptimized loading="eager" sizes={sizes} />
  ) : person.placeholder === "female" ? (
    <FemalePlaceholder name={person.name} />
  ) : (
    <span className="sc-initials">{initials(person.name)}</span>
  );

/**
 * Staff card: inset portrait, round avatar overlapping the corner, name, role
 * and social icons. Icons render only for real URLs in `person.social`.
 */
const StaffCard = ({ person }) => {
  const links = NETWORKS.filter((n) => person.social?.[n.key]);
  return (
    <article className="sc-card">
      <span className="sc-card__avatar" aria-hidden="true">
        <Portrait person={person} sizes="96px" />
      </span>
      <div className="sc-card__photo" role="img" aria-label={`${person.name}, ${person.role}`}>
        <Portrait person={person} sizes="(min-width: 1100px) 340px, (min-width: 640px) 45vw, 80vw" />
      </div>
      <div className="sc-card__body">
        {person.lead && <span className="sc-card__badge">Leadership</span>}
        <h3 className="sc-card__name">{person.name}</h3>
        <p className="sc-card__role">{person.role}</p>
        {links.length > 0 && (
          <ul className="sc-card__social" aria-label={`${person.name} on social media`}>
            {links.map(({ key, label, Icon }) => (
              <li key={key}>
                <a href={person.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`${person.name} on ${label}`}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default StaffCard;
