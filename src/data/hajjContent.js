/**
 * Content for Hajj Mode on the homepage and the /hajj page.
 *
 * What the project confirms about Hajj (src/data/about.json, nav.json,
 * footer.json): Flying Zone offers "Hajj & Umrah Services" — "from visa
 * arrangements to accommodation and transport" — with "Guided Spiritual
 * Support". Nothing more is stated as fact here.
 *
 * CLIENT TO CONFIRM: src/data/hajj-and-umrah.json contains two Hajj packages
 * (21 and 25 days, prices 4,500 / 5,800) but they use template placeholder
 * images and dummy video links, so they are treated as unverified and are NOT
 * shown. Once confirmed, they can be added as package cards like Umrah.
 *
 * Wording deliberately avoids promising availability, quotas, permits or
 * eligibility: Hajj is regulated by the official authorities.
 */

/** Icon names map to lucide-react icons in components/site/sections.jsx */
export const hajjOptions = [
  {
    icon: "info",
    label: "Hajj information",
    title: "Hajj Package Information",
    text: "Ask our team which Hajj arrangements are available this season, what they include and the current price.",
    points: ["Current season availability", "What each arrangement includes", "Price confirmed on enquiry"],
  },
  {
    icon: "travel",
    label: "Arrangements",
    title: "Travel & Accommodation Arrangements",
    text: "Our Hajj & Umrah services cover help with visa arrangements, accommodation and transport, subject to official requirements.",
    points: ["Visa arrangement assistance", "Accommodation guidance", "Transport arrangements"],
  },
];

export const hajjEnquiry = {
  title: "Request Hajj Package Details",
  text: "Speak to our Hajj team for current availability, eligibility and booking information.",
  cta: "Enquire About Hajj",
  message: "Assalamu alaikum, I would like to request Hajj package details from Flying Zone.",
};

export const hajjServices = [
  {
    icon: "info",
    title: "Hajj Package Guidance",
    text: "Clear answers on the arrangements available each season and what they include.",
    href: "/umrah?mode=hajj#packages",
  },
  {
    icon: "flight",
    title: "Travel Arrangements",
    text: "Help with your travel to Saudi Arabia, planned around the confirmed arrangement.",
    href: "/umrah?mode=hajj#packages",
  },
  {
    icon: "makkah",
    title: "Accommodation Information",
    text: "We explain the accommodation offered with each arrangement before you commit.",
    href: "/umrah?mode=hajj#accommodation",
  },
  {
    icon: "visa",
    title: "Documentation Guidance",
    text: "Guidance on the documents typically requested. Permits and visas are issued by the official authorities.",
    href: "/umrah?mode=hajj#faq",
  },
  {
    icon: "booking",
    title: "Booking Assistance",
    text: "Step-by-step help with the booking procedures that apply to your arrangement.",
    href: "/umrah?mode=hajj#journey",
  },
  {
    icon: "support",
    title: "Guided Spiritual Support",
    text: "Our Hajj & Umrah services include guided spiritual support, backed by our team in Dubai.",
    href: "/umrah?mode=hajj#journey",
  },
];

export const hajjSteps = [
  { title: "Discuss Your Requirements", text: "Tell us who is travelling, your nationality and residency, and your preferences." },
  { title: "Check Eligibility & Availability", text: "We guide you on what currently applies. Final eligibility rests with the official authorities." },
  { title: "Review Available Arrangements", text: "Compare the arrangements available this season, with inclusions and price." },
  { title: "Complete Confirmed Booking Procedures", text: "Once an arrangement is confirmed, we help you complete the required steps." },
  { title: "Prepare for Your Journey", text: "Get ready to travel with your documents, itinerary and our team on call." },
];

export const hajjCities = {
  title: "Makkah & Madinah: Planning Your Stay",
  text: "Accommodation for Hajj depends on the arrangement available each season. Our team explains what is included before you book.",
  makkah: "Accommodation explained before you book",
  madinah: "Ask whether a Madinah visit is included",
};

export const hajjFaqs = [
  {
    q: "How can I enquire about Hajj arrangements?",
    a: "Message us on WhatsApp, call us, or visit our office in Deira, Dubai. Tell us who is travelling and we will explain the arrangements currently available.",
  },
  {
    q: "What eligibility requirements should I check?",
    a: "Hajj is regulated by the Saudi authorities and the relevant authorities in your country of residence, and requirements can differ by nationality and residency. Our team will guide you on what currently applies, but we cannot guarantee eligibility, quotas or permits.",
  },
  {
    q: "How can I confirm current availability?",
    a: "Availability is set each season and can change. Contact our Hajj team for the latest information before making plans.",
  },
  {
    q: "What documents may be required?",
    a: "A valid passport is the starting point. Other documents, such as residency papers, photographs or health records, depend on current official requirements, so our team confirms the exact list when you enquire.",
  },
  {
    q: "How can I speak to an advisor?",
    a: "Call or WhatsApp our team during office hours, 8:00 AM – 10:00 PM, or visit our office in Deira, Dubai.",
  },
];

export const HAJJ_DISCLAIMER =
  "General guidance only. Hajj permits, quotas and eligibility are decided by the official authorities and can change each season; our team will confirm what currently applies.";

export const hajjWhyChoose = [
  {
    title: "Experienced travel team",
    text: "Established in 2007, offering Hajj & Umrah services from the UAE.",
  },
  {
    title: "Guided spiritual support",
    text: "Guided spiritual support is part of our Hajj & Umrah services.",
  },
  {
    title: "Help with arrangements",
    text: "Visa arrangements, accommodation and transport, subject to official requirements.",
  },
  {
    title: "Honest, current guidance",
    text: "We tell you what is confirmed for this season — and never promise permits or quotas.",
  },
  {
    title: "UAE-based service",
    text: "Visit our office in Deira, Dubai, or reach us by phone and WhatsApp.",
  },
  {
    title: "Personalised customer support",
    text: "Talk to a real person about your family, requirements and timing.",
  },
];
