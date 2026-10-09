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
// Google Reviews (rating panel + slider) lives in its own client component.
export { default as Testimonials } from "./GoogleReviews";

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
