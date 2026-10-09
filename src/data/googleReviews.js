/**
 * Google Reviews section (Home and Umrah / Hajj pages) — edit here.
 *
 * The reviews below were copied word for word (including the reviewers' own
 * spelling) from the Google Maps listing "Flying Zone for Travels and Tours
 * LLC- UAE", from a screenshot supplied by the client in October 2026.
 * Text ending in "…" was cut off by Google's "More" link in that screenshot;
 * paste the full text here if wanted. Never add invented reviews.
 *
 * STILL TO SUPPLY:
 * 1. GOOGLE_LISTING_URL — the exact share link of the listing (Google Maps →
 *    Share → Copy link). Until then the buttons open a Maps search for the
 *    listing's exact name.
 * 2. GOOGLE_WRITE_REVIEW_URL — optional direct "write a review" link
 *    (https://search.google.com/local/writereview?placeid=PLACE_ID).
 * 3. googleRating — the overall rating and review count shown on the listing,
 *    e.g. { value: "4.8", count: 120 }. Leave null to hide. Do not estimate.
 */
const SEARCH_QUERY = "Flying Zone for Travels and Tours LLC- UAE, Deira, Dubai";

export const GOOGLE_LISTING_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SEARCH_QUERY)}`;

export const GOOGLE_WRITE_REVIEW_URL = null;

export const googleRating = null;

// `date` is optional and left out: the screenshot only showed relative dates ("8 months ago").
export const googleReviews = [
  {
    name: "Sajid Ilyas",
    rating: 5,
    text: "I had a wonderful experience with this travel agency! Everything was handled smoothly and professionally from start to finish. A special thanks to Miss Rimsha, who did an outstanding job …",
  },
  {
    name: "rashid khan",
    rating: 5,
    text: "Flying Zone provided excellent service and great support throughout the process.Even when My Nusuk approval was showing on the waiting list in my account, but the team did not give up and supported me by arranging access through another …",
  },
  {
    name: "Sidra Naeem",
    rating: 5,
    text: "I had an amazing experience with Flying Zoom. The service was smooth, professional, and very well organized from start to finish. The staff was extremely helpful, friendly, and guided us properly throughout the process. Everything was on …",
  },
  {
    name: "jawad gujjar",
    rating: 5,
    text: "I had an excellent overall experience with Flying Zone Travel. From ticketing to travel arrangements, everything was managed in a very professional and organized manner. …",
  },
  {
    name: "ITLAAL KHALID",
    rating: 5,
    text: "I had a really good and comfortable experience with this travel agent. They were very helpful and supportive throughout the journey. I went for a 6-day Umrah, and everything was well organized. Highly recommended.",
  },
  {
    name: "Kiran Khan",
    rating: 5,
    text: "We took the Standard Umrah by air package from Flying Zone Travels and Tourism, and our experience was really great. The journey was smooth and comfortable. The service was exactly as promised, with no hidden issues. Everything was clear, …",
  },
  {
    name: "Mohammed Musthakeem A",
    rating: 5,
    text: "Great service. They supported me from start to finish for my Umrah and stayed in constant touch throughout the entire journey.",
  },
  {
    name: "safdar sarwar",
    rating: 5,
    text: "Excellent overall service from start to finish. Clear communication, no hidden charges, and full support at every stage. I would definitely recommend Flying Zone Travel to anyone looking for dependable travel services.",
  },
  {
    name: "Sana Irfan",
    rating: 5,
    text: "Great Experience ! Everything was well organised. Excellent Services .",
  },
];

// Layout samples for local development only; unused while googleReviews has entries.
export const sampleReviews = [];
