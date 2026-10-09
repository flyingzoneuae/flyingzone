/**
 * Google Reviews section (Home and Umrah / Hajj pages) — edit here.
 *
 * Everything below was copied from the Google Maps listing "Flying Zone for
 * Travels and Tours LLC. UAE" (link and screenshots supplied by the client in
 * October 2026). Review text is word for word, including the reviewers' own
 * spelling. Never add invented reviews.
 *
 * To keep current: update googleRating when the listing's numbers change.
 * rashid khan's review ends in "…" because the middle of it was not visible
 * in the screenshots; paste the full text if wanted.
 */
export const GOOGLE_LISTING_URL =
  "https://www.google.com/maps/place/Flying+Zone+for+Travels+and+Tours+LLC.+UAE/@25.2743701,55.3260479,17z/data=!4m8!3m7!1s0x3e5f5d0289894381:0xa91ac23bd9060282!8m2!3d25.2743701!4d55.3260479!9m1!1b1!16s%2Fg%2F11tdrkrhzd";

// Optional direct "write a review" link (https://search.google.com/local/writereview?placeid=PLACE_ID).
// While null, "Write a Review" opens the listing's reviews tab, which has the button.
export const GOOGLE_WRITE_REVIEW_URL = null;

// As shown on the listing in October 2026.
export const googleRating = { value: "4.8", count: 70 };

// `date` is optional and left out: Google only shows relative dates ("8 months ago").
// A blank line inside `text` (\n\n) starts a new paragraph.
export const googleReviews = [
  {
    name: "Sajid Ilyas",
    rating: 5,
    text: "I had a wonderful experience with this travel agency! Everything was handled smoothly and professionally from start to finish. A special thanks to Miss Rimsha, who did an outstanding job\n\nHighly recommended for anyone looking for reliable and professional travel assistance!",
  },
  {
    name: "rashid khan",
    rating: 5,
    text: "Flying Zone provided excellent service and great support throughout the process.Even when My Nusuk approval was showing on the waiting list in my account, but the team did not give up and supported me by arranging access through another approved account so the approval could be completed smoothly. …",
  },
  {
    name: "Sidra Naeem",
    rating: 5,
    text: "I had an amazing experience with Flying Zoom. The service was smooth, professional, and very well organized from start to finish. The staff was extremely helpful, friendly, and guided us properly throughout the process. Everything was on time and hassle-free, which made the whole experience even more enjoyable. I highly recommend Flying Zoom to anyone looking for reliable and quality service. Definitely worth it!",
  },
  {
    name: "jawad gujjar",
    rating: 5,
    text: "I had an excellent overall experience with Flying Zone Travel. From ticketing to travel arrangements, everything was managed in a very professional and organized manner.\n\nTheir team is cooperative, honest, and always ready to assist. The service was smooth, transparent, and exactly as committed.\n\nHighly recommended for anyone looking for reliable and quality travel services.",
  },
  {
    name: "ITLAAL KHALID",
    rating: 5,
    text: "I had a really good and comfortable experience with this travel agent. They were very helpful and supportive throughout the journey. I went for a 6-day Umrah, and everything was well organized. Highly recommended.",
  },
  {
    name: "Kiran Khan",
    rating: 5,
    text: "“We took the Standard Umrah by air package from Flying Zone Travels and Tourism, and our experience was really great. The journey was smooth and comfortable. The service was exactly as promised, with no hidden issues. Everything was clear, honest, and well organized. We felt fully supported throughout our trip. The staff, especially Rimsha and Ahsan, were very kind, cooperative, and always available. We could contact them at any time and they replied quickly, even late at night. I truly recommend Flying Zone Travels and Tourism to anyone planning Umrah.”",
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
