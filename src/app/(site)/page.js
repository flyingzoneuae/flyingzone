// General travel homepage: the original Flying Zone homepage content
// (about, destinations, visas, why choose, tours, services, team), redesigned.
// Umrah & Hajj have their own page at /umrah.
import "@/styles/home.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, MapPin, ShieldCheck, Sparkles, Timer, Users } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import CeoMessage from "@/components/site/CeoMessage";
import TeamSlider from "@/components/site/TeamSlider";
import { CtaBand, SectionHead, Testimonials } from "@/components/site/sections";
import {
  featuredVisas,
  heroServices,
  homeAbout,
  popularDestinations,
  specializedServices,
  team,
  tourPackages,
  whyChoose,
} from "@/data/homeContent";
import { APP_SETTINGS, whatsappHref } from "@/constants/app-setting";
import { pageMetadata } from "@/constants/seo";

const TITLE = `${APP_SETTINGS.siteName} | Umrah, Flights, Visas & Holidays from Dubai`;
const DESCRIPTION =
  "Flying Zone Travel & Tours, established in 2007, arranges Umrah, flight tickets, UAE and global visit visas, tour packages and holidays from Dubai.";

export const metadata = {
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
  title: { absolute: TITLE },
};

const ABOUT_ICONS = [ShieldCheck, Users, Timer];
const WHY_ICONS = [Sparkles, Clock, MapPin, ShieldCheck];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="fz-home-hero" aria-labelledby="home-title">
        <Image src="/assets/fz/home/hero-skies.webp" alt="" fill priority sizes="100vw" className="fz-home-hero__bg" />
        <div className="fz-container fz-home-hero__inner">
          <p className="fz-eyebrow fz-eyebrow--light">Flying Zone Travel &amp; Tours · Since {APP_SETTINGS.established}</p>
          <h1 id="home-title">Explore the World with Flying Zone</h1>
          <p className="fz-home-hero__lead">
            Umrah journeys, flight tickets, visit visas and holiday packages — arranged by our team in Dubai.
          </p>
          <div className="fz-hero__actions">
            <Link href="/tour-packages" className="fz-btn fz-btn--light">
              Explore Tour Packages
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref("Assalamu alaikum, I would like help planning a trip with Flying Zone.")}
              className="fz-btn fz-btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main services (the original hero slides) */}
      <section className="fz-home-services" aria-label="Our main services">
        <ul className="fz-container fz-home-services__list">
          {heroServices.map((s) => (
            <li key={s.tag}>
              <Link href={s.href} className="fz-tile">
                <span className="fz-tile__media">
                  <Image src={s.image} alt="" fill sizes="(min-width: 1100px) 290px, (min-width: 640px) 50vw, 100vw" />
                </span>
                <span className="fz-tile__body">
                  <span className="fz-tile__tag">{s.tag}</span>
                  <span className="fz-tile__title">{s.title}</span>
                </span>
                <ArrowRight size={18} aria-hidden="true" className="fz-tile__arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Who we are */}
      <section className="fz-section" aria-labelledby="about-title">
        <div className="fz-container fz-split">
          <div className="fz-split__media" data-reveal>
            <Image
              src={homeAbout.image.src}
              alt={homeAbout.image.alt}
              width={homeAbout.image.width}
              height={homeAbout.image.height}
              sizes="(min-width: 992px) 560px, 100vw"
            />
            <p className="fz-split__badge">
              <strong>Est. {APP_SETTINGS.established}</strong>
              <span>Serving travellers across the UAE and Pakistan</span>
            </p>
          </div>
          <div className="fz-split__content">
            <SectionHead align="left" eyebrow={homeAbout.subtitle} id="about-title" title={homeAbout.title} text={homeAbout.description} />
            <ul className="fz-feature-list">
              {homeAbout.facilities.map((f, i) => {
                const Icon = ABOUT_ICONS[i] || Check;
                return (
                  <li key={f.id} data-reveal>
                    <span className="fz-service__icon">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link href="/about" className="fz-link">
              More about Flying Zone <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular travel locations */}
      <section className="fz-section fz-section--soft" aria-labelledby="dest-title">
        <div className="fz-container">
          <div className="fz-head-row">
            <SectionHead
              align="left"
              eyebrow="Journey with Flying Zone"
              id="dest-title"
              title="Popular Travel Locations"
              text="Holiday destinations with flydubai, planned and booked by our team."
            />
            <Link href="/holidays-by-fly-dubai" className="fz-btn fz-btn--outline fz-btn--sm">
              View All Destinations
            </Link>
          </div>
          <ul className="fz-dest" aria-label="Destinations">
            {popularDestinations.map((d) => (
              <li key={d.name}>
                <Link href={d.href} className="fz-dest__card">
                  <Image src={d.image} alt={`${d.name} holiday destination`} fill sizes="(min-width: 1100px) 285px, (min-width: 640px) 33vw, 70vw" />
                  <span className="fz-dest__name">{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visa processing */}
      <section className="fz-section" aria-labelledby="visa-title">
        <div className="fz-container">
          <SectionHead
            eyebrow="Visa processing"
            id="visa-title"
            title="UAE Visit Visas, Processed Quickly"
            text="Electronic UAE visas with same-day processing. Prices on request."
          />
          <ul className="fz-visas">
            {featuredVisas.map((v) => (
              <li key={v.title} data-reveal>
                <Link href={v.href} className="fz-visa">
                  <span className="fz-visa__media">
                    <Image src={v.image} alt="" fill sizes="(min-width: 1100px) 285px, (min-width: 640px) 50vw, 100vw" />
                  </span>
                  <span className="fz-visa__body">
                    <span className="fz-visa__title">{v.title}</span>
                    <span className="fz-visa__facts">
                      {v.facts.map((f) => (
                        <span key={f.key}>
                          <span>{f.key}</span>
                          {f.value}
                        </span>
                      ))}
                    </span>
                    <span className="fz-service__more">
                      View details <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="fz-section__more fz-section__more--row">
            <Link href="/visas/uae" className="fz-btn fz-btn--outline fz-btn--sm">
              All UAE Visas
            </Link>
            <Link href="/visas/global" className="fz-btn fz-btn--outline fz-btn--sm">
              Global Visas
            </Link>
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="fz-section fz-section--soft" aria-labelledby="why-title">
        <div className="fz-container fz-split fz-split--reverse">
          <div className="fz-why-media" data-reveal>
            <Image
              src={whyChoose.images.main.src}
              alt={whyChoose.images.main.alt}
              width={whyChoose.images.main.width}
              height={whyChoose.images.main.height}
              sizes="(min-width: 992px) 520px, 100vw"
              className="fz-why-media__main"
            />
            <Image
              src={whyChoose.images.secondary.src}
              alt={whyChoose.images.secondary.alt}
              width={whyChoose.images.secondary.width}
              height={whyChoose.images.secondary.height}
              sizes="200px"
              className="fz-why-media__secondary"
            />
          </div>
          <div className="fz-split__content">
            <SectionHead align="left" eyebrow="Experience travel" id="why-title" title={whyChoose.title} text={whyChoose.description} />
            <ul className="fz-why-grid">
              {whyChoose.features.map((f, i) => {
                const Icon = WHY_ICONS[i] || Check;
                return (
                  <li key={f.title} data-reveal>
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </li>
                );
              })}
            </ul>
            <dl className="fz-stats">
              <div>
                <dt>Years of experience</dt>
                <dd>{APP_SETTINGS.yearsExperience}</dd>
              </div>
              <div>
                <dt>Established</dt>
                <dd>{APP_SETTINGS.established}</dd>
              </div>
              <div>
                <dt>Countries with offices</dt>
                <dd>UAE &amp; PK</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Tour packages */}
      <section className="fz-section" aria-labelledby="tours-title">
        <div className="fz-container">
          <div className="fz-head-row">
            <SectionHead
              align="left"
              eyebrow="Our tours"
              id="tours-title"
              title="Explore Our Tour Packages"
              text="Carefully curated holidays designed to make your journey unforgettable."
            />
            <Link href="/tour-packages" className="fz-btn fz-btn--outline fz-btn--sm">
              All Tour Packages
            </Link>
          </div>
          <ul className="fz-tours">
            {tourPackages.map((t) => (
              <li key={t.href} data-reveal>
                <Link href={t.href} className="fz-tour">
                  <span className="fz-tour__media">
                    <Image src={t.image} alt="" fill sizes="(min-width: 1100px) 380px, (min-width: 640px) 50vw, 100vw" />
                    {t.tag && <span className="fz-pkg__label">{t.tag}</span>}
                  </span>
                  <span className="fz-tour__body">
                    <span className="fz-tour__title">{t.title}</span>
                    <span className="fz-tour__meta">
                      <span>
                        <Clock size={15} aria-hidden="true" />
                        {t.duration}
                      </span>
                      <span>
                        <MapPin size={15} aria-hidden="true" />
                        {t.places}
                      </span>
                    </span>
                    <span className="fz-service__more">
                      Explore package <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specialized travel services */}
      <section className="fz-section fz-section--soft" aria-labelledby="special-title">
        <div className="fz-container">
          <SectionHead
            eyebrow="Are you ready to travel?"
            id="special-title"
            title="Explore Our Specialized Travel Services"
            text="Trips shaped around who you are travelling with and why."
          />
          <ul className="fz-special">
            {specializedServices.map((s) => (
              <li key={s.id} data-reveal>
                <Link href={s.href} className="fz-special__card">
                  <span className="fz-special__media">
                    <Image src={s.image} alt="" fill sizes="112px" />
                  </span>
                  <span className="fz-special__body">
                    <span className="fz-tile__tag">{s.category}</span>
                    <span className="fz-special__title">{s.title}</span>
                    <span className="fz-special__text">{s.description}</span>
                    <span className="fz-special__chips">
                      {s.features.map((f) => (
                        <span key={f}>{f}</span>
                      ))}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pilgrimage teaser: one link to the shared Umrah / Hajj page */}
      <section className="fz-section" aria-labelledby="pilgrim-title">
        <div className="fz-container">
          <Link href="/umrah" className="fz-pilgrim" data-reveal>
            <Image src="/assets/fz/hero-kaaba.webp" alt="" fill sizes="(min-width: 1100px) 1180px, 100vw" />
            <span className="fz-pilgrim__body">
              <span className="fz-eyebrow fz-eyebrow--light">Umrah / Hajj</span>
              <span id="pilgrim-title" className="fz-pilgrim__title">
                Planning Umrah or Hajj?
              </span>
              <span className="fz-pilgrim__text">
                Umrah packages by bus and by air from the UAE, and guidance on Hajj arrangements.
              </span>
              <span className="fz-btn fz-btn--light fz-btn--sm">
                Explore Umrah &amp; Hajj <ArrowRight size={16} aria-hidden="true" />
              </span>
            </span>
          </Link>
        </div>
      </section>

      {/* Testimonials (real reviews only) */}
      <section className="fz-section fz-section--soft" aria-labelledby="testimonials-title">
        <div className="fz-container">
          <Testimonials />
        </div>
      </section>

      {/* CEO message */}
      <CeoMessage />

      {/* Team (original card design) */}
      <section className="fz-section fz-section--soft" aria-labelledby="team-title">
        <div className="fz-container">
          <SectionHead eyebrow="Our team" id="team-title" title="Meet Our Team" text="The people who plan and look after your journeys." />
          <TeamSlider members={team} />
        </div>
      </section>

      <CtaBand
        title="Plan Your Next Trip With Us"
        text="Tell us where you want to go. Our Dubai team will take care of flights, visas, hotels and tours."
        primary={{ label: "Explore Tour Packages", href: "/tour-packages" }}
        whatsapp={{
          label: "WhatsApp Us",
          message: "Assalamu alaikum, I would like help planning a trip with Flying Zone.",
        }}
      />
    </>
  );
}
