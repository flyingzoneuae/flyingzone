/**
 * Google Reviews section (Home and Umrah / Hajj pages) — edit here.
 *
 * CLIENT TO CONFIRM / SUPPLY:
 * 1. GOOGLE_LISTING_URL — the exact Google Maps link of the Flying Zone
 *    business profile (open the listing in Google Maps → Share → Copy link).
 *    Until it is supplied, the buttons open a Google Maps search for the
 *    business name and address.
 * 2. GOOGLE_WRITE_REVIEW_URL — optional direct "write a review" link
 *    (https://search.google.com/local/writereview?placeid=PLACE_ID).
 * 3. googleRating — copy the rating and review count shown on the listing.
 *    Leave as null to hide the summary. Do not estimate.
 * 4. googleReviews — paste real reviews exactly as they appear on Google.
 *    Never add invented reviews. Example entry:
 *    { name: "Reviewer name", rating: 5, date: "March 2026", text: "Review text…" },
 */
const SEARCH_QUERY = "Flying Zone Travel & Tours, Al Mateena, Deira, Dubai";

export const GOOGLE_LISTING_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SEARCH_QUERY)}`;

export const GOOGLE_WRITE_REVIEW_URL = null;

// e.g. { value: "4.8", count: 120 }
export const googleRating = null;

export const googleReviews = [];
