import "@/styles/staff.css";
import Image from "next/image";
import RevealScope from "./RevealScope";
import { chairman } from "@/data/staffContent";

/** "A Message from Our Chairman" — editorial split layout. */
const ChairmanMessage = () => (
  <RevealScope as="section" className="st-chair" aria-labelledby="chairman-title">
    <div className="fz-container st-chair__inner">
      <figure className="st-chair__media" data-st>
        <span className="st-chair__block" aria-hidden="true" />
        <span className="st-chair__frame">
          <Image
            src={chairman.photo}
            alt={`${chairman.name}, ${chairman.role}, ${chairman.org}`}
            width={chairman.photoSize.width}
            height={chairman.photoSize.height}
            unoptimized
            sizes="(min-width: 992px) 440px, 82vw"
          />
        </span>
        <figcaption className="st-chair__tag">
          <strong>{chairman.name}</strong>
          <span>
            {chairman.role}, {chairman.org}
          </span>
        </figcaption>
      </figure>

      <div className="st-chair__body" data-st style={{ "--i": 1 }}>
        <p className="st-eyebrow">{chairman.eyebrow}</p>
        <h2 id="chairman-title" className="st-h2">
          {chairman.title}
        </h2>
        <span className="st-chair__quote" aria-hidden="true">
          “
        </span>
        <div className="st-chair__message">
          {chairman.message.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        <div className="st-chair__sign">
          <span className="st-chair__signature" aria-hidden="true">
            {chairman.name}
          </span>
          <p>
            <strong>{chairman.name}</strong>
            <span>
              {chairman.role}, {chairman.org}
            </span>
          </p>
        </div>
      </div>
    </div>
  </RevealScope>
);

export default ChairmanMessage;
