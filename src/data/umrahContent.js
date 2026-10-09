/**
 * Content for the redesigned Home and Umrah pages.
 *
 * Every factual statement here is taken from data that already existed in the
 * project (src/data/hajj-and-umrah.json, about.json, umrah-faq.json,
 * constants/app-setting.js). Nothing is invented. Items that still need the
 * client's confirmation are marked "CLIENT TO CONFIRM".
 */
import hajjUmrahData from "@/data/hajj-and-umrah.json";

/**
 * CLIENT TO CONFIRM: the package data contains "startingPrice" values
 * (850 / 1,350 / 2,250) but no currency, and the old site never displayed
 * them. Set SHOW_PRICES to true (and confirm PRICE_CURRENCY) to show
 * "From AED x" on the cards instead of "Request Price".
 */
export const SHOW_PRICES = false;
export const PRICE_CURRENCY = "AED";

const IMG = "/assets/fz";

/**
 * Presentation details for each real Umrah package, keyed by slug.
 * `facts` are lifted from that package's inclusions/highlights/itinerary.
 * Note: the old cover images (".../5.png") are promotional banners with
 * "Suspend Now!" text baked in, so real photography is used instead.
 */
const PACKAGE_PRESENTATION = {
  "executive-umrah-bus-10-days": {
    label: "Umrah by Bus",
    shortTitle: "Executive Umrah by Bus",
    tagline: "A guided group journey by luxury coach, with pick-up across the UAE.",
    cover: { src: `${IMG}/madinah-sunset.webp`, alt: "Masjid an-Nabawi in Madinah at sunset" },
    gallery: [
      { src: `${IMG}/madinah-sunset.webp`, alt: "Masjid an-Nabawi in Madinah at sunset" },
      { src: `${IMG}/madinah-bus-street.webp`, alt: "Coach on a street lined with hotels in Madinah" },
      { src: `${IMG}/madinah-baqi.webp`, alt: "View across Madinah towards the Green Dome" },
      { src: `${IMG}/madinah-plaza.webp`, alt: "Courtyard umbrellas outside Masjid an-Nabawi" },
    ],
    facts: [
      { key: "Duration", value: "10 days" },
      { key: "Makkah", value: "6 nights" },
      { key: "Madinah", value: "2 nights" },
      { key: "Hotels", value: "Comfortable accommodation" },
      { key: "Travel", value: "Luxury air-conditioned bus" },
      { key: "Transport", value: "Makkah–Madinah included" },
      { key: "Visa", value: "Saudi visa included" },
    ],
  },
  "standard-umrah-air-08-days": {
    label: "Umrah by Air",
    shortTitle: "Standard Umrah by Air",
    tagline: "Return flights from the UAE with full ground support in Saudi Arabia.",
    cover: { src: `${IMG}/madinah-green-dome.webp`, alt: "The Green Dome of Masjid an-Nabawi, Madinah" },
    gallery: [
      { src: `${IMG}/madinah-green-dome.webp`, alt: "The Green Dome of Masjid an-Nabawi, Madinah" },
      { src: `${IMG}/pilgrims-courtyard.webp`, alt: "Pilgrims in the courtyard of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-gate.webp`, alt: "Entrance gate of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-street.webp`, alt: "Hotel street near the mosque in Madinah" },
    ],
    facts: [
      { key: "Duration", value: "8 days" },
      { key: "Makkah", value: "6 nights" },
      { key: "Madinah", value: "2 nights" },
      { key: "Hotels", value: "Comfort hotels" },
      { key: "Travel", value: "Return flights from the UAE" },
      { key: "Transport", value: "Airport transfers & KSA transport" },
      { key: "Visa", value: "Visa processing assistance" },
    ],
  },
  "premium-umrah-air-05-days": {
    label: "Premium by Air",
    shortTitle: "Premium Umrah by Air",
    tagline: "A short, high-comfort journey with a 5-star stay in Makkah.",
    cover: { src: `${IMG}/madinah-arches.webp`, alt: "Arches inside Masjid an-Nabawi, Madinah" },
    gallery: [
      { src: `${IMG}/madinah-arches.webp`, alt: "Arches inside Masjid an-Nabawi, Madinah" },
      { src: `${IMG}/madinah-dome.webp`, alt: "Green Dome and minarets of Masjid an-Nabawi" },
      { src: `${IMG}/madinah-hotels.webp`, alt: "Hotels beside a mosque in Madinah" },
      { src: `${IMG}/madinah-courtyard.webp`, alt: "Courtyard and minaret of Masjid an-Nabawi" },
    ],
    facts: [
      { key: "Duration", value: "5 nights / 6 days" },
      { key: "Makkah", value: "5-star hotel" },
      { key: "Madinah", value: "3-star hotel" },
      { key: "Hotels", value: "VOCO Makkah or similar" },
      { key: "Travel", value: "Return flights, priority handling" },
      { key: "Transport", value: "VIP airport transfers" },
      { key: "Visa", value: "Full visa support" },
    ],
  },
};

// Display order on cards: most affordable first.
const ORDER = [
  "executive-umrah-bus-10-days",
  "standard-umrah-air-08-days",
  "premium-umrah-air-05-days",
];

export const umrahPackages = ORDER.map((slug) => {
  const pkg = hajjUmrahData.umrah.find((p) => p.slug === slug);
  return { ...pkg, ...PACKAGE_PRESENTATION[slug], href: `/umrah/${slug}` };
}).filter((p) => p.title);

export const getUmrahPackage = (slug) => umrahPackages.find((p) => p.slug === slug);

export const packagePriceLabel = (pkg) =>
  SHOW_PRICES && pkg.startingPrice ? `From ${PRICE_CURRENCY} ${pkg.startingPrice}` : "Request Price";

/** Icon names map to lucide-react icons in components/site/icons.js */
export const umrahServices = [
  {
    icon: "visa",
    title: "Umrah Visa Assistance",
    text: "Visa processing is part of every Umrah package, so your paperwork is handled alongside your booking.",
    href: "/umrah#visa",
  },
  {
    icon: "flight",
    title: "Flights",
    text: "Return air tickets from the UAE on our Umrah by Air packages, booked together with the rest of your trip.",
    href: "/umrah#flights",
  },
  {
    icon: "makkah",
    title: "Makkah Hotels",
    text: "Carefully selected accommodation close to the Haram, from comfortable stays to a 5-star option.",
    href: "/umrah#makkah-hotels",
  },
  {
    icon: "madinah",
    title: "Madinah Hotels",
    text: "Your Madinah stay is arranged as part of the same package, with time set aside for Masjid an-Nabawi.",
    href: "/umrah#madinah-hotels",
  },
  {
    icon: "transport",
    title: "Transportation",
    text: "Airport transfers, Makkah–Madinah travel and transport for ziarat — or a luxury coach all the way from the UAE.",
    href: "/umrah#transportation",
  },
  {
    icon: "support",
    title: "Travel Support",
    text: "A professional guide and Muallam travel with the group, backed by our team in Dubai.",
    href: "/umrah#whats-included",
  },
];

export const whyChoose = [
  {
    title: "Experienced travel team",
    text: "Established in 2007, with a team that plans Umrah journeys from the UAE every season.",
  },
  {
    title: "Dedicated Umrah support",
    text: "A professional guide and Muallam accompany our Umrah groups for religious guidance along the way.",
  },
  {
    title: "Complete travel assistance",
    text: "Visa, flights or coach, hotels, transfers, ziarat and travel insurance arranged in one booking.",
  },
  {
    title: "Packages for different needs",
    text: "Travel by bus or by air, from a shorter premium trip to a 10-day group journey.",
  },
  {
    title: "UAE-based service",
    text: "Visit our office in Deira, Dubai, or reach us by phone and WhatsApp.",
  },
  {
    title: "Personalised customer support",
    text: "Talk to a real person about your dates, family size and budget before you book.",
  },
];

export const journeySteps = [
  { title: "Choose Your Package", text: "Compare our Umrah packages by bus or by air and pick what suits you." },
  { title: "Share Your Details", text: "Send us your travel dates and traveller details on WhatsApp or by phone." },
  { title: "Visa & Booking", text: "We process your visa and confirm your flights or coach, hotels and transfers." },
  { title: "Travel to Saudi Arabia", text: "Depart from the UAE with your group, guide and itinerary in hand." },
  { title: "Complete Your Journey", text: "Perform Umrah, visit Madinah and return home with our team on call." },
];

/**
 * FAQ answers are written from the existing package inclusions/exclusions and
 * the legacy umrah-faq.json. CLIENT TO CONFIRM wording before launch.
 */
export const homeFaqs = [
  {
    q: "What is included in an Umrah package?",
    a: "Our packages cover the Saudi visa or visa processing, return flights or luxury coach travel from the UAE, hotel stays in Makkah and Madinah, Makkah–Madinah transport, guided ziarat, a professional guide and Muallam, travel insurance and a complimentary Ihram. Meals and personal expenses are not included unless your package says so.",
  },
  {
    q: "Do you provide Umrah visa assistance?",
    a: "Yes. Visa processing is included in each of our Umrah packages, and our team guides you through what is needed.",
  },
  {
    q: "Which UAE cities can I depart from?",
    a: "Our Umrah by Bus package offers pick-up from Dubai, Sharjah, Abu Dhabi and Jebel Ali. Umrah by Air packages include return flights from the UAE — ask our team about departures that suit you.",
  },
  {
    q: "Can I customize my Umrah package?",
    a: "Speak to our team about your dates, group size and preferred hotel category. We offer personalised arrangements and will tell you what is possible for your journey.",
  },
  {
    q: "Do you arrange airport transfers?",
    a: "Yes. Umrah by Air packages include airport transfers and transport within Saudi Arabia, including travel between Makkah and Madinah.",
  },
  {
    q: "How can I book an Umrah package?",
    a: "Message us on WhatsApp, call us, or visit our office in Deira, Dubai. We will confirm availability, the current price and the documents required, then complete your booking.",
  },
  {
    q: "What documents are required?",
    a: "You will need a passport with at least six months' validity. Other requirements depend on current Saudi regulations and your residency status, so our team confirms the exact list when you enquire.",
  },
];

export const umrahExtraFaqs = [
  {
    q: "What is the difference between Umrah by Bus and Umrah by Air?",
    a: "Umrah by Bus is the more economical option: you travel as a group by luxury air-conditioned coach from the UAE. Umrah by Air is faster and suits travellers with limited time, with return flights and airport transfers included.",
  },
  {
    q: "Are meals included?",
    a: "Meals are not included in our current Umrah packages unless specified. Please check the inclusions of the package you choose or ask our team.",
  },
  {
    q: "Is travel insurance included?",
    a: "Yes, travel insurance is listed in the inclusions of each of our current Umrah packages.",
  },
  {
    q: "Will there be a guide with the group?",
    a: "Yes. A professional tour guide and Muallam accompany the group, and guided ziarat tours in the holy cities are part of the package.",
  },
  {
    q: "When does the Umrah by Bus package depart?",
    a: "The Executive Umrah by Bus package departs on Wednesdays. Contact us for the next available date.",
  },
];

/**
 * CLIENT TO CONFIRM: no genuine customer reviews exist in the project (the old
 * site only had template demo testimonials, which have been removed).
 * Add real reviews here as { quote, name, detail } and the testimonial cards
 * will render automatically. Do not add invented reviews.
 */
export const testimonials = [];
