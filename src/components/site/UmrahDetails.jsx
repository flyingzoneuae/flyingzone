// Umrah-only detail sections (what's included, visa, flights, hotels, transport),
// shown in Umrah Mode on the shared /umrah page. Moved from the former /umrah page.
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHead } from "./sections";

// Taken from the inclusions shared by the current Umrah packages.
const included = [
  { title: "Saudi visa", text: "Visa processing handled with your booking." },
  { title: "Travel from the UAE", text: "Return flights, or luxury coach travel on the bus package." },
  { title: "Makkah accommodation", text: "Hotel stay in Makkah for the nights in your package." },
  { title: "Madinah accommodation", text: "Hotel stay in Madinah for the nights in your package." },
  { title: "Makkah–Madinah transport", text: "Intercity travel between the two holy cities." },
  { title: "Guided ziarat", text: "Ziarat tours in the holy cities as listed in the itinerary." },
  { title: "Guide & Muallam", text: "A professional tour guide and Muallam with the group." },
  { title: "Travel insurance", text: "Included in each of our current packages." },
  { title: "Ihram gift", text: "A complimentary Ihram for your journey." },
];

const notIncluded = ["Meals (unless specified)", "Personal expenses", "Additional ziarat not in the itinerary", "Tips, optional tours and shopping"];

const features = [
  {
    id: "visa",
    eyebrow: "Visa assistance",
    title: "Your Umrah Visa, Handled for You",
    text: "Every Flying Zone Umrah package includes the Saudi visa or full visa processing support. Our team tells you what is needed and takes care of the application alongside your booking.",
    points: ["Saudi visa included with Umrah by Bus", "Visa processing with Umrah by Air", "Full visa support on the Premium package"],
    image: { src: "/assets/fz/visa-passport.webp", alt: "Passport and travel documents", width: 648, height: 578 },
  },
  {
    id: "flights",
    eyebrow: "Flights",
    title: "Return Flights from the UAE",
    text: "Umrah by Air packages include return air tickets from the UAE, with priority handling on the Premium package. As a ticketing agency working with multiple airlines, we book your flights together with the rest of your trip.",
    points: ["Return air tickets included", "Airport transfers on arrival", "Prefer the road? Choose Umrah by Bus"],
    image: { src: "/assets/fz/flight-takeoff.webp", alt: "Passenger aircraft taking off at sunset", width: 975, height: 650 },
    link: { label: "Flight tickets", href: "/flight-tickets" },
  },
  {
    id: "makkah-hotels",
    eyebrow: "Makkah hotels",
    title: "Hotels Near Masjid al-Haram",
    text: "Accommodation in Makkah is carefully selected to keep you close to the Haram. Choose a comfortable stay on our Standard and Executive packages, or a 5-star VOCO or similar hotel on the Premium package.",
    points: ["Comfortable accommodation close to the Haram", "5-star VOCO or similar on Premium", "Up to 6 nights in Makkah"],
    image: { src: "/assets/fz/makkah-night.webp", alt: "The Kaaba at night with hotels overlooking Masjid al-Haram, Makkah", width: 1170, height: 780 },
  },
  {
    id: "madinah-hotels",
    eyebrow: "Madinah hotels",
    title: "Hotels Near Masjid an-Nabawi",
    text: "Your Madinah stay is part of the same package, with time for prayers at Masjid an-Nabawi, a visit to Riaz ul Jannah and guided ziarat in the city.",
    points: ["Comfort hotels in Madinah", "3-star hotel on the Premium package", "Ziarat in Madinah included"],
    image: { src: "/assets/fz/madinah-hotels.webp", alt: "Hotels beside a mosque in Madinah", width: 1400, height: 976 },
  },
  {
    id: "transportation",
    eyebrow: "Transportation",
    title: "Every Transfer Arranged",
    text: "From the moment you leave the UAE, transport is taken care of: airport transfers, travel between Makkah and Madinah, and transport for ziarat. Our bus package travels by luxury air-conditioned coach with washroom and WiFi on board.",
    points: ["Pick-up in Dubai, Sharjah, Abu Dhabi and Jebel Ali (bus)", "Airport transfers and KSA transport (air)", "Makkah–Madinah intercity travel"],
    image: { src: "/assets/fz/madinah-bus-street.webp", alt: "Coach travelling along a hotel-lined street in Madinah", width: 1400, height: 976 },
  },
];

const UmrahDetails = () => (
  <>
      {/* What's included */}
      <section className="fz-section fz-section--soft" id="whats-included" aria-labelledby="included-title">
        <div className="fz-container">
          <SectionHead
            eyebrow="What's included"
            id="included-title"
            title="What Your Umrah Package Covers"
            text="The essentials are built in. Exact inclusions are listed on each package page."
          />
          <ul className="fz-included">
            {included.map((item) => (
              <li key={item.title} data-reveal>
                <span className="fz-checks__icon">
                  <Check size={16} strokeWidth={3} aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="fz-note">
            <strong>Not included:</strong> {notIncluded.join(" · ")}
          </p>
        </div>
      </section>

      {/* Visa, flights, hotels, transport */}
      <div className="fz-features">
        {features.map((feature, index) => (
          <section className="fz-section fz-feature" id={feature.id} key={feature.id} aria-labelledby={`${feature.id}-title`}>
            <div className={`fz-container fz-split${index % 2 ? " fz-split--reverse" : ""}`}>
              <div className="fz-split__media" data-reveal>
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={feature.image.width}
                  height={feature.image.height}
                  sizes="(min-width: 992px) 560px, 100vw"
                />
              </div>
              <div className="fz-split__content">
                <SectionHead align="left" eyebrow={feature.eyebrow} id={`${feature.id}-title`} title={feature.title} text={feature.text} />
                <ul className="fz-ticks" data-reveal>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                {feature.link && (
                  <p>
                    <Link href={feature.link.href} className="fz-link">
                      {feature.link.label} <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
  </>
);

export default UmrahDetails;
