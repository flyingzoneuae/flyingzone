"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { GOOGLE_LISTING_URL, GOOGLE_WRITE_REVIEW_URL, googleRating, googleReviews } from "@/data/googleReviews";

const GoogleLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const Stars = ({ rating, size = 16 }) => (
  <span className="fz-gr-stars" role="img" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <Star key={n} size={size} aria-hidden="true" className={n <= Math.round(rating) ? "is-on" : undefined} />
    ))}
  </span>
);

// Reviews longer than this are collapsed behind "Read more".
const LONG = 230;

const ReviewCard = ({ review }) => {
  const [open, setOpen] = useState(false);
  const long = review.text.length > LONG;
  return (
    <figure className="fz-gr-card">
      <div className="fz-gr-card__top">
        <Stars rating={review.rating} />
        <span className="fz-gr-card__mark" aria-hidden="true">
          ”
        </span>
      </div>
      <blockquote className={long && !open ? "is-clamped" : undefined}>{review.text}</blockquote>
      {long && (
        <button type="button" className="fz-gr-card__more" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "Show less" : "Read more"}
        </button>
      )}
      <figcaption>
        <span className="fz-gr-card__avatar" aria-hidden="true">
          {review.name.trim()[0].toUpperCase()}
        </span>
        <span className="fz-gr-card__who">
          <strong>{review.name}</strong>
          <span>
            <GoogleLogo size={14} />
            Posted on Google
          </span>
        </span>
      </figcaption>
    </figure>
  );
};

/**
 * Google Reviews: rating panel + review slider. Shows only the real reviews in
 * data/googleReviews.js. (Exported as Testimonials from sections.jsx.)
 */
const GoogleReviews = () => {
  const track = useRef(null);
  const writeUrl = GOOGLE_WRITE_REVIEW_URL || GOOGLE_LISTING_URL;

  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * (card ? card.getBoundingClientRect().width + 20 : el.clientWidth), behavior: "smooth" });
  };

  return (
    <div className="fz-gr">
      <div className="fz-gr-panel" data-reveal>
        <p className="fz-gr-panel__eyebrow">
          <GoogleLogo size={18} />
          Google Reviews
        </p>
        <h2 id="testimonials-title">What Our Customers Say</h2>
        {googleRating && (
          <div className="fz-gr-panel__score">
            <b>{googleRating.value}</b>
            <div>
              <Stars rating={Number(googleRating.value)} size={20} />
              <span>Based on {googleRating.count} Google reviews</span>
            </div>
          </div>
        )}
        <p className="fz-gr-panel__text">Real feedback from travellers who booked their Umrah, visas and flights with Flying Zone.</p>
        <div className="fz-gr-panel__actions">
          <a href={GOOGLE_LISTING_URL} className="fz-btn fz-btn--light" target="_blank" rel="noopener noreferrer">
            Read All Reviews
          </a>
          <a href={writeUrl} className="fz-btn fz-gr-btn-ghost" target="_blank" rel="noopener noreferrer">
            <Star size={18} aria-hidden="true" />
            Write a Review
          </a>
        </div>
      </div>

      {googleReviews.length > 0 && (
        <div className="fz-gr-slider">
          <ul className="fz-gr-track" ref={track} tabIndex={0} aria-label="Customer reviews from Google">
            {googleReviews.map((review) => (
              <li key={review.name}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
          <div className="fz-gr-nav">
            <button type="button" onClick={() => move(-1)} aria-label="Previous reviews">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next reviews">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleReviews;
