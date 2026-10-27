/**
 * Umrah by Air — the four sub-packages, taken from the client's PDFs in
 * public/assets/ummrah packes pdf/ (October 2026):
 *   Updated_Standard_Umrah_Package_Itinerary.pdf
 *   Premium_Umrah_Package_by_Air_Itinerary.pdf
 *   Elite_Umrah_Package_by_Air_Itinerary.pdf
 *   Special_Umrah_Package_by_Air_6_Days_5_Nights.pdf
 * Text is copied from the PDFs; only the card "facts" are short summaries of it.
 * No prices are given in the PDFs, so cards show "Request Price".
 *
 * These replace the older "Standard Umrah by Air (8 days)" and "Premium Umrah
 * by Air (5 nights)" entries, whose details disagreed with the PDFs (old URLs
 * redirect here — see next.config.js).
 */
const IMG = "/assets/fz";

// The 9-day sequence shared by Standard, Premium and Elite (Standard wording).
const nineDay = (hotel, transfer = "") => [
  { day: "Day 01", title: "Arrival in Jeddah, Makkah Hotel Check-in & Umrah", description: `Arrive at Jeddah Airport and ${transfer || "transfer"} to the ${hotel} in Makkah for check-in. Perform Umrah on the same day with the guide.` },
  { day: "Day 02", title: "Friday Prayer & Tawaf", description: "Perform Jummah prayer at Haram and complete Tawaf. If you wish, you may perform Umrah again." },
  { day: "Day 03", title: "Rest Day", description: "A rest day for personal worship and recovery. You will be informed on this day about the Makkah Ziarat planned for Sunday." },
  { day: "Day 04", title: "Sunday: Makkah Ziarat", description: "Join the guided Ziarat tour to important holy sites in Makkah." },
  { day: "Day 05", title: "Monday: Free Day", description: "Free time for personal worship, rest, and activities at your own pace." },
  { day: "Day 06", title: "Tuesday: Tawaf Al-Wida", description: "Free time during the day. Perform the farewell Tawaf (Tawaf Al-Wida) on Tuesday night." },
  { day: "Day 07", title: "Wednesday: Travel to Madinah", description: "Depart early in the morning from Makkah for Madinah. Visit the planned Ziarat sites in Madinah along the way, then proceed to the hotel." },
  { day: "Day 08", title: "Thursday: Riyaz ul Jannah", description: "Visit Riyaz ul Jannah at Masjid an-Nabawi and offer two rak‘ahs of nafl prayer, subject to the allocated permit/time." },
  { day: "Day 09", title: "Friday: Jummah & Return", description: "Perform Jummah prayer, then depart for the return journey at 2:00 PM." },
];

const NOT_INCLUDED = [
  "Meals, unless specified",
  "Personal expenses",
  "Additional Ziarat not listed in the itinerary",
  "Tips and gratuities",
  "Optional tours, activities, and shopping expenses",
];

const premiumItinerary = nineDay("5-star hotel");
premiumItinerary[6] = { ...premiumItinerary[6], description: "Depart early in the morning from Makkah for Madinah. Visit the planned Ziarat sites in Madinah along the way, then proceed to the 5-star hotel." };

const eliteItinerary = nineDay("5-star hotel", "take your private transfer");
eliteItinerary[3] = { ...eliteItinerary[3], description: "Join the guided Ziarat tour to important holy sites in Makkah, using private transport for the scheduled tour." };
eliteItinerary[6] = { ...eliteItinerary[6], description: "Depart early in the morning from Makkah by private transfer to Madinah. Visit the planned Ziarat sites in Madinah along the way, then proceed to the 5-star hotel." };
eliteItinerary[8] = { ...eliteItinerary[8], description: "Perform Jummah prayer, then take the arranged private transfer for the return journey at 2:00 PM. Confirm the precise pickup and flight timing before travel." };

export const airPackages = [
  {
    slug: "standard-umrah-package-by-air",
    tier: "Standard",
    label: "Umrah by Air",
    title: "Standard Umrah Package by Air — 09 Days",
    shortTitle: "Standard Umrah by Air",
    tagline: "Return flights from the UAE, comfort hotels and full transport in Saudi Arabia.",
    duration: "09 Days",
    locations: ["Makkah", "Madinah"],
    cover: { src: `${IMG}/madinah-green-dome.webp`, alt: "The Green Dome of Masjid an-Nabawi, Madinah" },
    gallery: [
      { src: `${IMG}/madinah-green-dome.webp`, alt: "The Green Dome of Masjid an-Nabawi, Madinah" },
      { src: `${IMG}/pilgrims-courtyard.webp`, alt: "Pilgrims in the courtyard of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-gate.webp`, alt: "Entrance gate of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-street.webp`, alt: "Hotel street near the mosque in Madinah" },
    ],
    facts: [
      { key: "Duration", value: "09 days" },
      { key: "Makkah", value: "06 nights · comfort hotel" },
      { key: "Madinah", value: "02 nights · comfort hotel" },
      { key: "Flights", value: "Return from the UAE" },
      { key: "Transport", value: "Airport transfers & full KSA" },
      { key: "Visa", value: "Processing assistance" },
    ],
    description:
      "Experience a comfortable and time-saving Umrah journey with our air travel package. This package includes return flights, comfortable accommodation, transport within Saudi Arabia, and guided support for a smooth and spiritually fulfilling experience.",
    highlights: [
      "Faster and convenient Umrah via flight",
      "Comprehensive transport within Saudi Arabia",
      "Comfortable hotel stays near Haram",
      "Guided spiritual experience",
      "Personalized support throughout the trip",
    ],
    inclusions: [
      "Return air tickets from UAE",
      "Visa processing assistance",
      "06 nights in Makkah (comfort hotel)",
      "02 nights in Madinah (comfort hotel)",
      "Airport transfers and full KSA transport",
      "Makkah–Madinah intercity travel",
      "Guided Ziarat tours in the holy cities",
      "Professional Muallam and tour guide",
      "Free Ehram gift",
      "Travel insurance",
    ],
    exclusions: NOT_INCLUDED,
    itinerary: nineDay("hotel").map((d, i) =>
      i === 0 ? { ...d, description: "Arrive at Jeddah Airport and transfer to the Makkah hotel for check-in. Perform Umrah on the same day with the guide." } : d
    ),
    note: "Return departure at 2:00 PM is shown as provided; please confirm the exact transport/flight timing before travel.",
    compare: { hotels: "Comfort hotels", transfers: "Airport transfers & full KSA transport", flights: "Return from the UAE" },
  },
  {
    slug: "premium-umrah-package-by-air",
    tier: "Premium",
    label: "Umrah by Air",
    title: "Premium Umrah Package by Air — 09 Days",
    shortTitle: "Premium Umrah by Air",
    tagline: "Premium 5-star hotels in Makkah and Madinah with return flights from the UAE.",
    duration: "09 Days",
    locations: ["Makkah", "Madinah"],
    cover: { src: `${IMG}/madinah-arches.webp`, alt: "Arches inside Masjid an-Nabawi, Madinah" },
    gallery: [
      { src: `${IMG}/madinah-arches.webp`, alt: "Arches inside Masjid an-Nabawi, Madinah" },
      { src: `${IMG}/madinah-dome.webp`, alt: "Green Dome and minarets of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-hotels.webp`, alt: "Hotels beside a mosque in Madinah" },
      { src: `${IMG}/madinah-courtyard.webp`, alt: "Courtyard and minaret of Masjid an-Nabawi" },
    ],
    facts: [
      { key: "Duration", value: "09 days" },
      { key: "Makkah", value: "06 nights · 5-star hotel" },
      { key: "Madinah", value: "02 nights · 5-star hotel" },
      { key: "Flights", value: "Return from the UAE" },
      { key: "Transport", value: "Airport transfers & full KSA" },
      { key: "Visa", value: "Processing assistance" },
    ],
    description:
      "Experience a more refined and time-saving Umrah journey with our premium air travel package. Enjoy return flights, premium 5-star hotel accommodation in Makkah and Madinah, transport within Saudi Arabia, and guided support for a smooth and spiritually fulfilling experience.",
    highlights: [
      "Fast and convenient Umrah journey by air",
      "Premium 5-star hotel stays in Makkah and Madinah",
      "Comprehensive airport transfers and transport within Saudi Arabia",
      "Guided spiritual experience and Ziarat tours",
      "Personalized support throughout the trip",
    ],
    inclusions: [
      "Return air tickets from UAE",
      "Visa processing assistance",
      "06 nights in Makkah at a 5-star hotel",
      "02 nights in Madinah at a 5-star hotel",
      "Airport transfers and full KSA transport",
      "Makkah–Madinah intercity travel",
      "Guided Ziarat tours in the holy cities",
      "Professional Muallam and tour guide",
      "Free Ehram gift",
      "Travel insurance",
    ],
    exclusions: NOT_INCLUDED,
    itinerary: premiumItinerary,
    note: "The package specifies 5-star hotels; exact hotel names and availability should be confirmed at booking. Please confirm the exact transport and flight timing before travel.",
    compare: { hotels: "Premium 5-star", transfers: "Airport transfers & full KSA transport", flights: "Return from the UAE" },
  },
  {
    slug: "elite-umrah-package-by-air",
    tier: "Elite",
    label: "Umrah by Air",
    title: "Elite Umrah Package by Air — 09 Days",
    shortTitle: "Elite Umrah by Air",
    tagline: "5-star hotels with private transfers for added comfort, privacy and flexibility.",
    duration: "09 Days",
    locations: ["Makkah", "Madinah"],
    cover: { src: `${IMG}/makkah-night.webp`, alt: "The Kaaba at Masjid al-Haram, Makkah, in the evening" },
    gallery: [
      { src: `${IMG}/makkah-night.webp`, alt: "The Kaaba at Masjid al-Haram, Makkah, in the evening" },
      { src: `${IMG}/makkah-haram.webp`, alt: "Pilgrims around the Kaaba at Masjid al-Haram" },
      { src: `${IMG}/madinah-dome.webp`, alt: "Green Dome and minarets of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-courtyard.webp`, alt: "Courtyard and minaret of Masjid an-Nabawi" },
    ],
    facts: [
      { key: "Duration", value: "09 days" },
      { key: "Makkah", value: "06 nights · 5-star hotel" },
      { key: "Madinah", value: "02 nights · 5-star hotel" },
      { key: "Flights", value: "Return from the UAE" },
      { key: "Transport", value: "Private transfers" },
      { key: "Visa", value: "Processing assistance" },
    ],
    description:
      "Enjoy a more personalized Umrah journey with convenient air travel, 5-star accommodation in Makkah and Madinah, and private transfers for your ground transportation. The same 9-day itinerary is retained, with added comfort, privacy, and flexibility during transfers.",
    highlights: [
      "Return air travel from the UAE",
      "5-star hotel accommodation in both holy cities",
      "Private transfers for airport pickups, intercity travel, and planned ground journeys",
      "Guided spiritual experience and Ziarat tours",
      "Personalized support throughout the trip",
    ],
    inclusions: [
      "Return air tickets from UAE",
      "Visa processing assistance",
      "06 nights in Makkah at a 5-star hotel",
      "02 nights in Madinah at a 5-star hotel",
      "Private airport transfers",
      "Private Makkah–Madinah intercity transfer",
      "Private transport for scheduled Ziarat tours and planned ground journeys",
      "Professional Muallam and tour guide",
      "Free Ehram gift",
      "Travel insurance",
    ],
    exclusions: NOT_INCLUDED,
    itinerary: eliteItinerary,
    note: "Exact 5-star hotel names, private vehicle category, and availability should be confirmed at booking. Please confirm flight schedules, permit arrangements, and private transfer details before travel.",
    compare: { hotels: "Premium 5-star", transfers: "Private transfers", flights: "Return from the UAE" },
    featured: true,
  },
  {
    slug: "special-umrah-package-by-air",
    tier: "Special",
    label: "Umrah by Air",
    title: "Special Umrah Package by Air — 06 Days / 05 Nights",
    shortTitle: "Special Umrah by Air",
    tagline: "A short 5-night journey with 5-star hotels and private transfers.",
    duration: "06 Days / 05 Nights",
    locations: ["Makkah", "Madinah"],
    cover: { src: `${IMG}/makkah-haram.webp`, alt: "Pilgrims around the Kaaba at Masjid al-Haram, Makkah" },
    gallery: [
      { src: `${IMG}/makkah-haram.webp`, alt: "Pilgrims around the Kaaba at Masjid al-Haram, Makkah" },
      { src: `${IMG}/hero-kaaba.webp`, alt: "The Kaaba and the clock tower, Makkah" },
      { src: `${IMG}/madinah-green-dome.webp`, alt: "The Green Dome of Masjid an-Nabawi, Madinah" },
      { src: `${IMG}/madinah-plaza.webp`, alt: "Courtyard umbrellas outside Masjid an-Nabawi" },
    ],
    facts: [
      { key: "Duration", value: "06 days / 05 nights" },
      { key: "Makkah", value: "03 nights · 5-star hotel" },
      { key: "Madinah", value: "02 nights · 5-star hotel" },
      { key: "Flights", value: "Return (city to be confirmed)" },
      { key: "Transport", value: "Private transfers" },
      { key: "Visa", value: "Processing assistance" },
    ],
    description:
      "Enjoy a short, thoughtfully arranged Umrah journey with five nights of accommodation split between Makkah and Madinah. This Special package includes 5-star hotels in both holy cities and private transfers for a more comfortable and personalized journey.",
    highlights: [
      "06 days and 05 nights in Saudi Arabia",
      "03 nights in Makkah at a 5-star hotel",
      "02 nights in Madinah at a 5-star hotel",
      "Private airport transfers and private Makkah–Madinah transfer",
      "Private transport for scheduled Ziarat tours",
      "Guided support for Umrah and visits",
    ],
    inclusions: [
      "Return air tickets (route and departure city to be confirmed)",
      "Visa processing assistance",
      "03 nights in Makkah at a 5-star hotel",
      "02 nights in Madinah at a 5-star hotel",
      "Private airport transfers",
      "Private Makkah–Madinah intercity transfer",
      "Private transport for scheduled Ziarat tours",
      "Professional Muallam / tour guide",
      "Free Ehram gift",
      "Travel insurance",
    ],
    exclusions: NOT_INCLUDED,
    itinerary: [
      { day: "Day 01", title: "Arrival in Jeddah & Umrah in Makkah", description: "Arrive at Jeddah Airport and meet your driver for a private transfer to the 5-star hotel in Makkah. Check in, refresh, and perform Umrah with the guide, subject to arrival time." },
      { day: "Day 02", title: "Worship at Masjid al-Haram", description: "Spend the day in Makkah for prayers, Tawaf, and personal worship. Optional additional Umrah arrangements can be discussed with the guide." },
      { day: "Day 03", title: "Makkah Ziarat", description: "Take a private guided Ziarat tour of important sites in Makkah. Return to the hotel for rest and worship." },
      { day: "Day 04", title: "Private Transfer to Madinah & Ziarat", description: "Check out and travel from Makkah to Madinah by private transfer. Visit planned Ziarat sites as time permits, then check in to the 5-star hotel in Madinah." },
      { day: "Day 05", title: "Masjid an-Nabawi & Riyaz ul Jannah", description: "Spend time at Masjid an-Nabawi for prayers and worship. Visit Riyaz ul Jannah subject to permit availability and allocated time." },
      { day: "Day 06", title: "Final Prayers & Departure", description: "Check out and take your arranged private transfer to the airport for your return flight. Departure timing depends on the confirmed flight schedule." },
    ],
    note: "Suggested itinerary; sequence and timing can be adjusted to match flight schedules and hotel check-in. Exact hotel names, airline, flight times, departure city, and private vehicle category should be confirmed at booking.",
    compare: { hotels: "5-star", transfers: "Private transfers", flights: "Return (city to be confirmed)" },
  },
].map((p) => ({ ...p, href: `/umrah/${p.slug}` }));

/** Rows for the comparison table (values per package, in airPackages order). */
export const airCompareRows = [
  { label: "Duration", get: (p) => p.duration },
  { label: "Makkah", get: (p) => p.facts.find((f) => f.key === "Makkah").value },
  { label: "Madinah", get: (p) => p.facts.find((f) => f.key === "Madinah").value },
  { label: "Return flights", get: (p) => p.compare.flights },
  { label: "Ground transport", get: (p) => p.compare.transfers },
  { label: "Visa processing", get: () => true },
  { label: "Guided Ziarat tours", get: () => true },
  { label: "Muallam & tour guide", get: () => true },
  { label: "Free Ehram gift", get: () => true },
  { label: "Travel insurance", get: () => true },
];
