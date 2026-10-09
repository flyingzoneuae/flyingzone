import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import {
  CityCards,
  CtaBand,
  Faq,
  faqJsonLd,
  HajjOptionGrid,
  JourneySteps,
  SectionHead,
  ServiceGrid,
  WhyChoose,
} from "@/components/site/sections";
import {
  HAJJ_DISCLAIMER,
  hajjCities,
  hajjEnquiry,
  hajjFaqs,
  hajjOptions,
  hajjServices,
  hajjSteps,
  hajjWhyChoose,
} from "@/data/hajjContent";
import { APP_SETTINGS, whatsappHref } from "@/constants/app-setting";
import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata({
  title: "Hajj from the UAE — Guidance & Arrangements",
  description:
    "Speak to Flying Zone's Hajj team in Dubai about current Hajj arrangements, requirements, documents and booking procedures.",
  path: "/hajj",
});

const ADVISOR_MESSAGE = "Assalamu alaikum, I would like to speak to a Hajj advisor at Flying Zone.";

const subnav = [
  { label: "Options", href: "#options" },
  { label: "Support", href: "#support" },
  { label: "Journey", href: "#journey" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "FAQ", href: "#faq" },
];

export default function HajjPage() {
  return (
    <>
      <section className="fz-pagehero" aria-labelledby="hajj-title">
        <Image src="/assets/fz/hajj-banner.webp" alt="" fill priority sizes="100vw" className="fz-pagehero__bg" />
        <div className="fz-container fz-pagehero__inner">
          <nav className="fz-crumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Hajj</li>
            </ol>
          </nav>
          <h1 id="hajj-title">Your Journey to Hajj Starts Here</h1>
          <p>
            Explore Hajj travel information and available arrangements with Flying Zone&apos;s team. Get
            guidance on package availability, requirements, and booking procedures.
          </p>
          <div className="fz-hero__actions">
            <a href="#options" className="fz-btn fz-btn--light">
              Explore Hajj Options
            </a>
            <a href={whatsappHref(ADVISOR_MESSAGE)} className="fz-btn fz-btn--whatsapp" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} />
              Speak to a Hajj Advisor
            </a>
          </div>
        </div>
      </section>

      <nav className="fz-subnav" aria-label="On this page">
        <ul className="fz-container">
          {subnav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="fz-section" id="options" aria-labelledby="options-title">
        <div className="fz-container">
          <SectionHead
            eyebrow="Hajj options"
            id="options-title"
            title="Explore Your Hajj Travel Options"
            text="Hajj arrangements are confirmed season by season. Speak to our team for what is available now."
          />
          <HajjOptionGrid options={hajjOptions} enquiry={hajjEnquiry} />
          <p className="fz-note">{HAJJ_DISCLAIMER}</p>
        </div>
      </section>

      <section className="fz-section fz-section--soft" id="support" aria-labelledby="support-title">
        <div className="fz-container">
          <SectionHead
            eyebrow="Hajj support"
            id="support-title"
            title="Support for Your Hajj Journey"
            text="Guidance and practical help from our team, within the requirements set by the official authorities."
          />
          <ServiceGrid items={hajjServices} />
        </div>
      </section>

      <section className="fz-section" id="journey" aria-labelledby="journey-title">
        <div className="fz-container">
          <SectionHead
            eyebrow="Step by step"
            id="journey-title"
            title="Plan Your Hajj Journey"
            text="How our team helps you plan — from your first conversation to departure."
          />
          <JourneySteps steps={hajjSteps} />
          <p className="fz-note">{HAJJ_DISCLAIMER}</p>
        </div>
      </section>

      <section className="fz-section fz-section--soft" id="accommodation" aria-labelledby="accommodation-title">
        <div className="fz-container">
          <SectionHead eyebrow="Accommodation" id="accommodation-title" title={hajjCities.title} text={hajjCities.text} />
          <CityCards makkah={hajjCities.makkah} madinah={hajjCities.madinah} hrefBase="/hajj" />
        </div>
      </section>

      <section className="fz-section" aria-labelledby="why-title">
        <div className="fz-container">
          <WhyChoose items={hajjWhyChoose} />
        </div>
      </section>

      <section className="fz-section fz-section--soft" id="faq" aria-labelledby="faq-title">
        <div className="fz-container fz-container--narrow">
          <SectionHead
            eyebrow="FAQ"
            id="faq-title"
            title="Hajj Questions, Answered"
            text={`Still unsure? Call ${APP_SETTINGS.contact.phone} or message us on WhatsApp.`}
          />
          <Faq items={hajjFaqs} />
          <p className="fz-section__more">
            <Link href="/umrah" className="fz-link">
              Planning Umrah instead? See our Umrah packages <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Planning Your Hajj?"
        text="Speak with our Hajj team about current availability, requirements and booking procedures."
        primary={{ label: "Explore Hajj Options", href: "#options" }}
        whatsapp={{ label: "Speak to a Hajj Advisor", message: ADVISOR_MESSAGE }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(hajjFaqs)) }} />
    </>
  );
}
