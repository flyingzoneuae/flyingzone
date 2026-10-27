// Designed stand-in portrait for female staff without a photo: a woman in a
// hijab, drawn as a soft silhouette on a brand gradient (same frame as photos).
// `bare`: figure only (transparent background), for use over a card backdrop.
const FemalePlaceholder = ({ name, bare = false }) => (
  <span className={bare ? "st-ph st-ph--bare" : "st-ph"} role="img" aria-label={`${name} — photo coming soon`}>
    <svg viewBox="0 0 400 500" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="st-ph-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e4aa3" />
          <stop offset="1" stopColor="#102754" />
        </linearGradient>
        <linearGradient id="st-ph-cloth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.28" />
        </linearGradient>
        <radialGradient id="st-ph-glow" cx="0.5" cy="0.38" r="0.55">
          <stop offset="0" stopColor="#00afc7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#00afc7" stopOpacity="0" />
        </radialGradient>
      </defs>
      {!bare && <rect width="400" height="500" fill="url(#st-ph-bg)" />}
      {!bare && <rect width="400" height="500" fill="url(#st-ph-glow)" />}
      {/* shoulders */}
      <path d="M22 500 C34 430 96 392 160 382 L240 382 C304 392 366 430 378 500 Z" fill="url(#st-ph-cloth)" />
      {/* hijab: rounded crown, drapes past the chin onto the shoulders */}
      <path
        d="M200 92 C134 92 106 144 106 204 C106 252 112 290 102 326 C92 362 70 388 58 420 L58 500 L342 500 L342 420 C330 388 308 362 298 326 C288 290 294 252 294 204 C294 144 266 92 200 92 Z"
        fill="url(#st-ph-cloth)"
      />
      {/* inner fold framing the face */}
      <path
        d="M200 128 C152 128 136 168 136 214 C136 270 160 318 200 330 C240 318 264 270 264 214 C264 168 248 128 200 128 Z"
        fill="#ffffff"
        fillOpacity="0.10"
      />
      {/* face */}
      <ellipse cx="200" cy="222" rx="50" ry="64" fill="#dbe9fb" fillOpacity="0.9" />
    </svg>
  </span>
);

export default FemalePlaceholder;
