/**
 * Content for the general-travel Home page (/), built from the data the
 * original homepage already used. Images point to optimized copies made by
 * scripts/optimize-home-images.cjs.
 *
 * Left out on purpose (template/demo content, CLIENT TO CONFIRM if real):
 *  - "Phenomenal Deals Offered" (promotions.json): placeholder images and
 *    invented discounts (20% / 40% / 50% off, "4 Days in Switzerland").
 *  - Demo testimonials (Liam Nohkan, "CEO, TourXpro", …).
 *  - Counters "60K+ Happy Traveler", "98% Positive Review" and the TripAdvisor
 *    "245354 reviews" badge, which link to tripadvisor.com's homepage.
 *  - Tour star ratings in tours.json.
 */
import destinations from "@/data/destinationData.json";
import tours from "@/data/tours.json";
import visa from "@/data/visa.json";
import activities from "@/data/activities.json";
import about from "@/data/about.json";
import { featureSectionData } from "@/data/feature-data";

const IMG = "/assets/fz/home";
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// The four slides of the original hero slider (data/homeSlider.json), with fixed links.
export const heroServices = [
  { tag: "Hajj & Umrah", title: "Spiritual journeys with premium Umrah packages", href: "/umrah", image: `${IMG}/slide-umrah.webp` },
  { tag: "Flight Tickets", title: "Best international fares and global bookings", href: "/flight-tickets", image: `${IMG}/slide-flights.webp` },
  { tag: "Visit Visa", title: "Quick visa processing for every destination", href: "/visas/global", image: `${IMG}/slide-visa.webp` },
  { tag: "Tour Packages", title: "Explore the world with custom holidays", href: "/tour-packages", image: `${IMG}/slide-holidays.webp` },
];

export const homeAbout = {
  ...about.homeAbout,
  image: { src: `${IMG}/about-main.webp`, width: 984, height: 604, alt: "Hot-air balloons over Cappadocia at sunrise" },
};

// Popular destinations from "Holidays by flydubai" (the cards on the original homepage).
const FEATURED_DESTINATIONS = ["Almaty", "Baku", "Bishkek", "Bucharest", "Istanbul", "Tbilisi", "Male", "Tashkent"];
export const popularDestinations = FEATURED_DESTINATIONS.map((name) => destinations.find((d) => d.name === name))
  .filter(Boolean)
  .map((d) => ({
    name: d.name,
    href: `/holidays-by-fly-dubai/${d.slug}`,
    image: `${IMG}/dest-${slug(d.name)}.webp`,
  }));

// UAE visit visas (Visa Processing section).
const FEATURED_VISAS = ["uae-30-day-tourist-visa", "uae-60-day-tourist-visa", "uae-transit-visa", "uae-5-year-multiple-entry-visit-visa"];
export const featuredVisas = FEATURED_VISAS.map((s) => visa.uaeVisa.find((v) => v.slug === s))
  .filter(Boolean)
  .map((v) => ({
    title: v.title,
    href: `/visas/${v.slug}`,
    image: `${IMG}/visa-${v.slug}.webp`,
    facts: [
      { key: "Validity", value: v.validity.replace(/\s*\(.*\)/, "") },
      { key: "Processing", value: v.processingTime },
      { key: "Mode", value: v.visaMode.replace(/\s*\(.*\)/, "") },
    ],
  }));

export const whyChoose = {
  title: featureSectionData.title,
  description: featureSectionData.description,
  features: featureSectionData.mainFeatures.map((f) => ({
    title: f.title.replace("Boking", "Booking"),
    description: f.description,
  })),
  images: {
    main: { src: `${IMG}/why-main.webp`, width: 984, height: 604, alt: "A guide leading travellers through a canyon" },
    secondary: { src: `${IMG}/why-secondary.webp`, width: 433, height: 535, alt: "Travellers looking out over a green valley" },
  },
};

export const tourPackages = tours.map((t) => ({
  title: t.title,
  href: `/tour-packages/${t.slug}`,
  image: `${IMG}/tour-${t.slug}.webp`,
  duration: t.duration,
  places: t.locations.join(" · "),
  tag: t.tag,
}));

export const specializedServices = activities.activities.map((a) => ({
  id: a.id,
  category: a.category,
  title: a.title,
  description: a.description,
  features: a.features.flatMap((f) => f.split("|").map((x) => x.trim())),
  image: `${IMG}/service-${a.id}.webp`,
  href: a.id === "other-tours" ? "/umrah" : "/tour-packages",
}));

// Team from about.json. Three members only have 1.4 KB placeholder photos
// in the project, so they are shown with initials (CLIENT TO CONFIRM: photos).
const PHOTOS = new Set(["Muhammad Naveed Naz", "Muhammad Ahmed", "Muhammad Yaseen", "Wasim Sajjad"]);
export const team = about.team.members.map((m) => ({
  name: m.name,
  role: m.role,
  photo: PHOTOS.has(m.name) ? `${IMG}/team-${slug(m.name)}.webp` : null,
  initials: m.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join(""),
}));
