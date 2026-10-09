import "@/styles/ceo.css";
import Image from "next/image";
import { Quote } from "lucide-react";
import { ceo } from "@/data/ceoContent";

// Self-contained (own stylesheet), so it works on the redesigned pages and on
// the legacy About page alike.
const CeoMessage = ({ soft = false }) => (
  <section className={`fz-ceo${soft ? " fz-ceo--soft" : ""}`} aria-labelledby="ceo-title">
    <div className="fz-container fz-ceo__inner">
      <figure className="fz-ceo__photo">
        <Image src={ceo.photo} alt={ceo.name} width={312} height={415} sizes="(min-width: 992px) 340px, 240px" />
      </figure>
      <div className="fz-ceo__body">
        <p className="fz-ceo__eyebrow">{ceo.eyebrow}</p>
        <h2 id="ceo-title">{ceo.title}</h2>
        <Quote className="fz-ceo__quote" size={36} aria-hidden="true" />
        {ceo.paragraphs.map((p) => (
          <p className="fz-ceo__text" key={p.slice(0, 24)}>
            {p}
          </p>
        ))}
        <p className="fz-ceo__sign">
          <strong>{ceo.name}</strong>
          <span>{ceo.role}, Flying Zone Travel &amp; Tours</span>
        </p>
      </div>
    </div>
  </section>
);

export default CeoMessage;
