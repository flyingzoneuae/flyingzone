// Shared Umrah / Hajj page, rendered at /umrah (/hajj redirects to /umrah?mode=hajj).
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  FileCheck2,
  Headset,
  Moon,
  Users,
} from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import UmrahDetails from "@/components/site/UmrahDetails";
import { ModeProvider, ModeToggle, ModeView } from "./PilgrimageMode";
import {
  CityCards,
  CtaBand,
  Faq,
  faqJsonLd,
  HajjOptionGrid,
  JourneySteps,
  PackageGrid,
  SectionHead,
  ServiceGrid,
  Testimonials,
  WhyChoose,
} from "./sections";
import { homeFaqs, umrahExtraFaqs } from "@/data/umrahContent";
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

export const HAJJ_HREF = "/umrah?mode=hajj";
const umrahFaqs = [...homeFaqs, ...umrahExtraFaqs];

/** Everything that differs between Umrah Mode and Hajj Mode lives here. */
const MODE_CONTENT = {
  umrah: {
    eyebrow: "Your spiritual journey starts here",
    title: "Your Journey to Umrah Starts Here",
    lead: "Discover Umrah packages from the UAE with hotel options, flights, visa assistance, transportation, and personalized travel support.",
    primary: { label: "Explore Umrah Packages", href: "/umrah#packages" },
    secondary: {
      label: "Talk to an Umrah Expert",
      message: "Assalamu alaikum, I would like to talk to an Umrah expert.",
    },
    points: ["Visa, flights, hotels & transport", "Travel by bus or by air", "Guide & Muallam with every group"],
    image: {
      src: "/assets/fz/hero-kaaba.webp",
      width: 885,
      height: 748,
      alt: "Pilgrims performing tawaf around the Kaaba at Masjid al-Haram in Makkah",
    },
    chip: "Makkah & Madinah, arranged from Dubai",
    trust: [
      { icon: Award, title: `${APP_SETTINGS.yearsExperience} Years Experience`, text: `Established in ${APP_SETTINGS.established}` },
      { icon: Moon, title: "Umrah Specialists", text: "By bus and by air from the UAE" },
      { icon: FileCheck2, title: "Visa Assistance", text: "Included with every package" },
      { icon: Headset, title: "24/7 Support", text: "Before and during your journey" },
    ],
  },
  hajj: {
    eyebrow: "Prepare for your sacred journey",
    title: "Your Journey to Hajj Starts Here",
    lead: "Explore Hajj travel information and available arrangements with Flying Zone's team. Get guidance on package availability, requirements, and booking procedures.",
    primary: { label: "Explore Hajj Options", href: `${HAJJ_HREF}#packages` },
    secondary: {
      label: "Speak to a Hajj Advisor",
      message: "Assalamu alaikum, I would like to speak to a Hajj advisor at Flying Zone.",
    },
    points: ["Guidance on current availability", "Help with requirements & documents", "Booking assistance from Dubai"],
    image: {
      src: "/assets/fz/hajj-pilgrims.webp",
      width: 769,
      height: 650,
      alt: "Pilgrims in white ihram around the Kaaba at Masjid al-Haram, Makkah",
    },
    chip: "Hajj guidance from our Dubai team",
    trust: [
      { icon: Award, title: `${APP_SETTINGS.yearsExperience} Years Experience`, text: `Established in ${APP_SETTINGS.established}` },
      { icon: Moon, title: "Hajj & Umrah Services", text: "Pilgrimage travel from the UAE" },
      { icon: FileCheck2, title: "Documentation Guidance", text: "On current requirements" },
      { icon: Users, title: "Dedicated Advisors", text: "Speak to a real person" },
    ],
  },
};

const HeroText = ({ c, ghost = false }) => (
  <>
    <p className="fz-eyebrow">{c.eyebrow}</p>
    {ghost ? <p className="fz-h1">{c.title}</p> : <h1 id="hero-title" className="fz-h1">{c.title}</h1>}
    <p className="fz-hero__lead">{c.lead}</p>
    <div className="fz-hero__actions">
      <Link href={c.primary.href} className="fz-btn fz-btn--primary">
        {c.primary.label}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <a href={whatsappHref(c.secondary.message)} className="fz-btn fz-btn--outline" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={18} />
        {c.secondary.label}
      </a>
    </div>
    <ul className="fz-hero__points">
      {c.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </>
);

const HeroImage = ({ c, priority }) => (
  <>
    <Image
      src={c.image.src}
      alt={c.image.alt}
      width={c.image.width}
      height={c.image.height}
      priority={priority}
      sizes="(min-width: 992px) 560px, 100vw"
    />
    <p className="fz-hero__chip">
      <span className="fz-hero__chip-dot" aria-hidden="true" />
      {c.chip}
    </p>
  </>
);

const TrustStrip = ({ items }) => (
  <ul className="fz-container fz-trust__list">
    {items.map(({ icon: Icon, title, text }) => (
      <li key={title}>
        <span className="fz-trust__icon">
          <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      </li>
    ))}
  </ul>
);

const { umrah: U, hajj: H } = MODE_CONTENT;

export default function PilgrimagePage({ initialMode = "umrah" }) {
  return (
    <ModeProvider initialMode={initialMode}>
      {/* 2. Hero with the Umrah / Hajj toggle */}
      <section className="fz-hero" aria-labelledby="hero-title">
        <div className="fz-container fz-hero__inner">
          <div className="fz-hero__content">
            <ModeToggle />
            <ModeView
              umrah={<HeroText c={U} />}
              hajj={<HeroText c={H} />}
              ghost={{ umrah: <HeroText c={U} ghost />, hajj: <HeroText c={H} ghost /> }}
            />
          </div>
          <div className="fz-hero__media">
            <ModeView className="fz-hero__frame" prewarm umrah={<HeroImage c={U} priority />} hajj={<HeroImage c={H} />} />
          </div>
        </div>
      </section>

      {/* 3. Trust strip */}
      <section className="fz-trust" aria-label="Why travellers trust Flying Zone">
        <ModeView umrah={<TrustStrip items={U.trust} />} hajj={<TrustStrip items={H.trust} />} />
      </section>

      {/* 4. Packages / Hajj options */}
      <section className="fz-section" id="packages" aria-labelledby="packages-title">
        <div className="fz-container">
          <ModeView
            umrah={
              <>
                <SectionHead
                  eyebrow="Umrah packages"
                  id="packages-title"
                  title="Umrah Packages Designed Around Your Journey"
                  text="Choose a package that fits your time, budget and travel needs."
                />
                <PackageGrid />
                <p className="fz-section__more">
                  <Link href="#whats-included" className="fz-link">
                    See everything included in our Umrah packages <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </p>
              </>
            }
            hajj={
              <>
                <SectionHead
                  eyebrow="Hajj options"
                  id="packages-title"
                  title="Explore Your Hajj Travel Options"
                  text="Hajj arrangements are confirmed season by season. Speak to our team for what is available now."
                />
                <HajjOptionGrid options={hajjOptions} enquiry={hajjEnquiry} />
                <p className="fz-note">{HAJJ_DISCLAIMER}</p>
              </>
            }
          />
        </div>
      </section>

      {/* 5. Services */}
      <section className="fz-section fz-section--soft" id="services" aria-labelledby="services-title">
        <div className="fz-container">
          <ModeView
            umrah={
              <>
                <SectionHead
                  eyebrow="Complete service"
                  id="services-title"
                  title="Everything You Need for Your Umrah"
                  text="One booking covers each part of the journey, so nothing is left for you to arrange separately."
                />
                <ServiceGrid />
              </>
            }
            hajj={
              <>
                <SectionHead
                  eyebrow="Hajj support"
                  id="services-title"
                  title="Support for Your Hajj Journey"
                  text="Guidance and practical help from our team, within the requirements set by the official authorities."
                />
                <ServiceGrid items={hajjServices} />
              </>
            }
          />
        </div>
      </section>

      {/* Umrah-only details: what's included, visa, flights, hotels, transport */}
      <ModeView umrah={<UmrahDetails />} hajj={null} />

      {/* 6. Why choose Flying Zone */}
      <section className="fz-section" aria-labelledby="why-title">
        <div className="fz-container">
          <ModeView umrah={<WhyChoose />} hajj={<WhyChoose items={hajjWhyChoose} />} />
        </div>
      </section>

      {/* 7. Journey */}
      <section className="fz-section fz-section--soft" id="journey" aria-labelledby="steps-title">
        <div className="fz-container">
          <ModeView
            umrah={
              <>
                <SectionHead
                  eyebrow="Step by step"
                  id="steps-title"
                  title="How Your Umrah Journey Works"
                  text="Five simple steps from your first enquiry to completing your Umrah."
                />
                <JourneySteps />
              </>
            }
            hajj={
              <>
                <SectionHead
                  eyebrow="Step by step"
                  id="steps-title"
                  title="Plan Your Hajj Journey"
                  text="How our team helps you plan — from your first conversation to departure."
                />
                <JourneySteps steps={hajjSteps} />
                <p className="fz-note">{HAJJ_DISCLAIMER}</p>
              </>
            }
          />
        </div>
      </section>

      {/* 8. Makkah & Madinah */}
      <section className="fz-section" id="accommodation" aria-labelledby="cities-title">
        <div className="fz-container">
          <ModeView
            umrah={
              <>
                <SectionHead
                  eyebrow="Makkah & Madinah hotels"
                  id="cities-title"
                  title="Stay Close to What Matters Most"
                  text="Accommodation in both holy cities is selected and booked for you as part of your package."
                />
                <CityCards />
              </>
            }
            hajj={
              <>
                <SectionHead eyebrow="Accommodation" id="cities-title" title={hajjCities.title} text={hajjCities.text} />
                <CityCards makkah={hajjCities.makkah} madinah={hajjCities.madinah} hrefBase={HAJJ_HREF} />
              </>
            }
          />
        </div>
      </section>

      {/* 9. CTA */}
      <ModeView
        umrah={<CtaBand />}
        hajj={
          <CtaBand
            title="Planning Your Hajj?"
            text="Speak with our Hajj team about current availability, requirements and booking procedures."
            primary={{ label: "Explore Hajj Options", href: `${HAJJ_HREF}#packages` }}
            whatsapp={{ label: "Speak to a Hajj Advisor", message: H.secondary.message }}
          />
        }
      />

      {/* 10. Testimonials (shared, real reviews only) */}
      <section className="fz-section" aria-labelledby="testimonials-title">
        <div className="fz-container">
          <Testimonials />
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="fz-section fz-section--soft" id="faq" aria-labelledby="faq-title">
        <div className="fz-container fz-container--narrow">
          <ModeView
            umrah={
              <>
                <SectionHead
                  eyebrow="FAQ"
                  id="faq-title"
                  title="Umrah Questions, Answered"
                  text="Can't find what you need? Message our team and we will help."
                />
                <Faq items={umrahFaqs} />
              </>
            }
            hajj={
              <>
                <SectionHead
                  eyebrow="FAQ"
                  id="faq-title"
                  title="Hajj Questions, Answered"
                  text="Requirements change each season, so our team confirms the details for you."
                />
                <Faq items={hajjFaqs} />
              </>
            }
          />
        </div>
      </section>

      {/* 12. Final CTA */}
      <ModeView
        umrah={
          <CtaBand
            title="Ready to Begin Your Umrah Journey?"
            text="Tell us your dates and group size. We will recommend a package and confirm the current price."
          />
        }
        hajj={
          <CtaBand
            title="Ready to Plan Your Hajj?"
            text="Tell us who is travelling. We will explain the current arrangements and what is required."
            primary={{ label: "Explore Hajj Options", href: `${HAJJ_HREF}#packages` }}
            whatsapp={{ label: "Speak to a Hajj Advisor", message: H.secondary.message }}
          />
        }
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(initialMode === "hajj" ? hajjFaqs : umrahFaqs)) }}
      />
    </ModeProvider>
  );
}
