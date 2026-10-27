import "@/styles/chairman.css";
import RevealScope from "./RevealScope";
import { chairman } from "@/data/staffContent";

/**
 * "Message from our Chairman": portrait cut-out on a blue stage with a large
 * curved edge, message on the right. Copy lives in src/data/staffContent.js.
 */
const ChairmanMessage = () => (
  <RevealScope as="section" className="cm" aria-labelledby="chairman-title">
    <div className="cm__stage" data-st>
      <span className="cm__glow" aria-hidden="true" />
      <svg className="cm__arcs" viewBox="0 0 700 800" preserveAspectRatio="none" aria-hidden="true">
        <path d="M120 0 C420 120 520 420 380 800" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" />
        <path d="M-40 140 C260 220 430 470 300 800" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />
      </svg>
      {/* Transparent, pre-sized WebP: served as-is */}
      <img
        className="cm__person"
        src={chairman.cutout || chairman.photo}
        alt={`${chairman.name}, ${chairman.role}, ${chairman.org}`}
        width={392}
        height={470}
        decoding="async"
      />
      {/* the big white curve that separates photo and message */}
      <svg className="cm__curve" viewBox="0 0 200 800" preserveAspectRatio="none" aria-hidden="true">
        <path d="M60 0 C150 180 170 420 120 800 H200 V0 Z" fill="#ffffff" />
        <path d="M60 0 C150 180 170 420 120 800" fill="none" stroke="#2f7ef0" strokeWidth="10" strokeOpacity="0.9" />
        <path d="M38 0 C126 180 146 420 98 800" fill="none" stroke="#5aa2ff" strokeWidth="3" strokeOpacity="0.55" />
      </svg>
    </div>

    <div className="cm__body" data-st style={{ "--i": 1 }}>
      <span className="cm__bars" aria-hidden="true">
        <span />
        <span />
      </span>
      <p className="cm__kicker">{chairman.eyebrow}</p>
      <h2 id="chairman-title" className="cm__title">
        Message from our <span>Chairman</span>
      </h2>
      <div className="cm__message">
        {chairman.message.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
      <div className="cm__sign">
        <strong>{chairman.name}</strong>
        <span>
          {chairman.role}, {chairman.org}
        </span>
      </div>
    </div>
  </RevealScope>
);

export default ChairmanMessage;
