// Server-rendered building blocks shared by the Home and Umrah pages.
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Bus,
  CalendarCheck,
  Check,
  ChevronDown,
  Facebook,
  FileCheck2,
  Headset,
  Info,
  Instagram,
  Plane,
  Star,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  journeySteps,
  packagePriceLabel,
  testimonials,
  umrahPackages,
  umrahServices,
  whyChoose,
} from "@/data/umrahContent";
import { APP_SETTINGS, telHref, whatsappHref } from "@/constants/app-setting";
import { GOOGLE_LISTING_URL, GOOGLE_WRITE_REVIEW_URL, googleRating, googleReviews, sampleReviews } from "@/data/googleReviews";

const SERVICE_ICONS = {
  visa: FileCheck2,
  flight: Plane,
  makkah: Building2,
  madinah: BedDouble,
  transport: Bus,
  support: Headset,
  info: Info,
  travel: Plane,
  booking: CalendarCheck,
};

export const iconFor = (name) => SERVICE_ICONS[name] || Info;

export const SectionHead = ({ eyebrow, title, text, id, align = "center" }) => (
  <div className={`fz-head fz-head--${align}`} data-reveal>
    {eyebrow && <p className="fz-eyebrow">{eyebrow}</p>}
    <h2 id={id}>{title}</h2>
    {text && <p className="fz-head__text">{text}</p>}
  </div>
);

export const PackageCard = ({ pkg, priority = false }) => (
  <article className="fz-pkg" data-reveal>
    <Link href={pkg.href} className="fz-pkg__media" tabIndex={-1} aria-hidden="true">
      <Image
        src={pkg.cover.src}
        alt=""
        fill
        sizes="(min-width: 1100px) 380px, (min-width: 768px) 50vw, 100vw"
        priority={priority}
      />
      <span className="fz-pkg__label">{pkg.label}</span>
    </Link>
    <div className="fz-pkg__body">
      <h3>
        <Link href={pkg.href}>{pkg.shortTitle}</Link>
      </h3>
      <p className="fz-pkg__tagline">{pkg.tagline}</p>
      <dl className="fz-pkg__facts">
        {pkg.facts.map((fact) => (
          <div key={fact.key}>
            <dt>{fact.key}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="fz-pkg__foot">
        <p className="fz-pkg__price">
          <span>Price</span>
          {packagePriceLabel(pkg)}
        </p>
        <Link href={pkg.href} className="fz-btn fz-btn--primary fz-btn--sm" aria-label={`View package: ${pkg.shortTitle}`}>
          View Package
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </article>
);

export const PackageGrid = () => (
  <div className="fz-pkg-grid">
    {umrahPackages.map((pkg) => (
      <PackageCard key={pkg.slug} pkg={pkg} />
    ))}
  </div>
);

export const ServiceGrid = ({ items = umrahServices }) => (
  <ul className="fz-services">
    {items.map((service) => {
      const Icon = SERVICE_ICONS[service.icon];
      return (
        <li key={service.title} data-reveal>
          <Link href={service.href} className="fz-service">
            <span className="fz-service__icon">
              <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span className="fz-service__more">
              Learn more <ArrowRight size={15} aria-hidden="true" />
            </span>
          </Link>
        </li>
      );
    })}
  </ul>
);

export const WhyChoose = ({ titleId = "why-title", items = whyChoose }) => (
  <div className="fz-split">
    <div className="fz-split__media" data-reveal>
      <Image
        src="/assets/fz/pilgrims-courtyard.webp"
        alt="Pilgrims walking through the courtyard of Masjid an-Nabawi in Madinah"
        width={1400}
        height={976}
        sizes="(min-width: 992px) 560px, 100vw"
      />
      <p className="fz-split__badge">
        <strong>Since {APP_SETTINGS.established}</strong>
        <span>Serving travellers across the UAE and Pakistan</span>
      </p>
    </div>
    <div className="fz-split__content">
      <SectionHead
        align="left"
        eyebrow="Why Flying Zone"
        title="Why Choose Flying Zone?"
        id={titleId}
        text="One team looks after your whole journey — from the first WhatsApp message to your return home."
      />
      <ul className="fz-checks">
        {items.map((item) => (
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
    </div>
  </div>
);

export const JourneySteps = ({ steps = journeySteps }) => (
  <ol className="fz-steps">
    {steps.map((step, index) => (
      <li key={step.title} data-reveal>
        <span className="fz-steps__num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      </li>
    ))}
  </ol>
);

export const CityCards = ({
  makkah = "Hotels near Masjid al-Haram",
  madinah = "Hotels near Masjid an-Nabawi",
  hrefBase = "/umrah",
}) => (
  <div className="fz-cities">
    <Link href={hrefBase === "/umrah" ? "/umrah#makkah-hotels" : `${hrefBase}#accommodation`} className="fz-city" data-reveal>
      <Image
        src="/assets/fz/makkah-haram.webp"
        alt="The Kaaba surrounded by pilgrims at Masjid al-Haram, Makkah"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <span className="fz-city__text">
        <span className="fz-city__name">Makkah</span>
        <span>{makkah}</span>
      </span>
    </Link>
    <Link href={hrefBase === "/umrah" ? "/umrah#madinah-hotels" : `${hrefBase}#accommodation`} className="fz-city" data-reveal>
      <Image
        src="/assets/fz/madinah-dome.webp"
        alt="The Green Dome and minarets of Masjid an-Nabawi, Madinah"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <span className="fz-city__text">
        <span className="fz-city__name">Madinah</span>
        <span>{madinah}</span>
      </span>
    </Link>
  </div>
);

export const CtaBand = ({
  title = "Planning Your Umrah?",
  text = "Speak with our travel experts and find the right package for your journey.",
  as: Heading = "h2",
  primary = { label: "Explore Umrah Packages", href: "/umrah#packages" },
  whatsapp = {
    label: "WhatsApp an Expert",
    message: "Assalamu alaikum, I am planning Umrah and would like to speak to an expert.",
  },
}) => (
  <section className="fz-cta" aria-label={title}>
    <div className="fz-container fz-cta__inner" data-reveal>
      <div>
        <Heading>{title}</Heading>
        <p>{text}</p>
      </div>
      <div className="fz-cta__actions">
        <Link href={primary.href} className="fz-btn fz-btn--light">
          {primary.label}
        </Link>
        <a
          href={whatsappHref(whatsapp.message)}
          className="fz-btn fz-btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} />
          {whatsapp.label}
        </a>
      </div>
    </div>
  </section>
);

/**
 * Renders real reviews from data/umrahContent.js. While that list is empty
 * (no genuine reviews were available in the project) it shows a neutral panel
 * pointing to the company's real social pages instead of invented quotes.
 */
const GoogleLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const Stars = ({ rating }) => (
  <span className="fz-stars" role="img" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <Star key={n} size={16} aria-hidden="true" className={n <= Math.round(rating) ? "is-on" : undefined} />
    ))}
  </span>
);

/**
 * Google Reviews. Shows only real reviews pasted into data/googleReviews.js;
 * while that list is empty it shows the Google call-to-action panel alone.
 * (Kept under the name Testimonials so existing pages need no changes.)
 */
export const Testimonials = () => {
  const writeUrl = GOOGLE_WRITE_REVIEW_URL || GOOGLE_LISTING_URL;
  // Labelled layout samples appear only in local development, never on the live site.
  const isSample = googleReviews.length === 0 && process.env.NODE_ENV === "development";
  const reviews = isSample ? sampleReviews : googleReviews;
  return (
    <>
      <SectionHead
        eyebrow="Google reviews"
        title="What Our Customers Say on Google"
        id="testimonials-title"
        text="Read what travellers say about Flying Zone on Google, or share your own experience."
      />
      {reviews.length > 0 && (
        <ul className="fz-reviews">
          {reviews.map((review, i) => (
            <li key={review.name + review.date + i} data-reveal>
              <figure className="fz-review">
                {isSample && <span className="fz-review__sample">Sample — not a real review</span>}
                <div className="fz-review__top">
                  <Stars rating={review.rating} />
                  <GoogleLogo size={18} />
                </div>
                <blockquote>{review.text}</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  {review.date && <span>{review.date}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
      <div className="fz-greview" data-reveal>
        <div className="fz-greview__brand">
          <GoogleLogo size={40} />
          <div>
            <strong>Flying Zone on Google</strong>
            {googleRating ? (
              <span className="fz-greview__rating">
                <b>{googleRating.value}</b>
                <Stars rating={Number(googleRating.value)} />
                <span>{googleRating.count} reviews</span>
              </span>
            ) : (
              <span>See our rating and customer reviews on our Google Business profile.</span>
            )}
          </div>
        </div>
        <div className="fz-greview__actions">
          <a href={GOOGLE_LISTING_URL} className="fz-btn fz-btn--primary" target="_blank" rel="noopener noreferrer">
            Read Reviews on Google
          </a>
          <a href={writeUrl} className="fz-btn fz-btn--outline" target="_blank" rel="noopener noreferrer">
            <Star size={18} aria-hidden="true" />
            Write a Review
          </a>
        </div>
      </div>
    </>
  );
};

// Native <details> accordion: accessible and needs no JavaScript.
export const Faq = ({ items }) => (
  <div className="fz-faq">
    {items.map((item) => (
      <details key={item.q} data-reveal>
        <summary>
          <h3>{item.q}</h3>
          <ChevronDown size={20} aria-hidden="true" />
        </summary>
        <p>{item.a}</p>
      </details>
    ))}
  </div>
);

export const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

/**
 * Hajj Mode "packages" area. No verified Hajj package data exists, so this
 * shows informational cards plus a prominent enquiry card — no prices,
 * durations, hotels or availability are stated.
 */
export const HajjOptionGrid = ({ options, enquiry }) => (
  <div className="fz-pkg-grid fz-hajj-grid">
    {options.map((option) => {
      const Icon = iconFor(option.icon);
      return (
        <article className="fz-hajj-card" key={option.title} data-reveal>
          <span className="fz-service__icon">
            <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <p className="fz-hajj-card__label">{option.label}</p>
          <h3>{option.title}</h3>
          <p className="fz-hajj-card__text">{option.text}</p>
          <ul className="fz-ticks">
            {option.points.map((point) => (
              <li key={point}>
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      );
    })}
    <article className="fz-hajj-card fz-hajj-card--enquiry" data-reveal>
      <p className="fz-hajj-card__label">Enquiry</p>
      <h3>{enquiry.title}</h3>
      <p className="fz-hajj-card__text">{enquiry.text}</p>
      <a
        href={whatsappHref(enquiry.message)}
        className="fz-btn fz-btn--whatsapp fz-btn--block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon size={18} />
        {enquiry.cta}
      </a>
      <a href={telHref(APP_SETTINGS.contact.phone)} className="fz-hajj-card__call">
        Or call {APP_SETTINGS.contact.phone}
      </a>
    </article>
  </div>
);
