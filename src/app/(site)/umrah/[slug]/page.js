import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronDown, Clock, MapPin, Phone, X } from "lucide-react";
import EnquiryForm from "@/components/site/EnquiryForm";
import { CtaBand } from "@/components/site/sections";
import { getUmrahPackage, packagePriceLabel, umrahPackages } from "@/data/umrahContent";
import { APP_SETTINGS, telHref } from "@/constants/app-setting";
import { pageMetadata } from "@/constants/seo";

export const dynamicParams = false;

export const generateStaticParams = () => umrahPackages.map((pkg) => ({ slug: pkg.slug }));

export const generateMetadata = ({ params }) => {
  const pkg = getUmrahPackage(params.slug);
  if (!pkg) return {};
  return pageMetadata({
    title: pkg.title,
    description: pkg.description.slice(0, 155).replace(/\s+\S*$/, "") + "…",
    path: pkg.href,
  });
};

export default function UmrahPackagePage({ params }) {
  const pkg = getUmrahPackage(params.slug);
  if (!pkg) notFound();

  const others = umrahPackages.filter((p) => p.slug !== pkg.slug);

  return (
    <>
      <section className="fz-detailhero" aria-labelledby="package-title">
        <div className="fz-container">
          <nav className="fz-crumbs fz-crumbs--dark" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/umrah">Umrah</Link>
              </li>
              <li aria-current="page">{pkg.shortTitle}</li>
            </ol>
          </nav>
          <p className="fz-eyebrow">{pkg.label}</p>
          <h1 id="package-title">{pkg.title}</h1>
          <ul className="fz-detailhero__meta">
            <li>
              <Clock size={18} aria-hidden="true" />
              {pkg.duration}
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              {pkg.locations.join(" · ")}
            </li>
          </ul>
        </div>
      </section>

      <div className="fz-container fz-detail">
        <div className="fz-detail__main">
          <ul className="fz-gallery" aria-label="Package photos">
            {pkg.gallery.map((photo, index) => (
              <li key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index === 0}
                  sizes={index === 0 ? "(min-width: 992px) 760px, 100vw" : "(min-width: 992px) 250px, 33vw"}
                />
              </li>
            ))}
          </ul>

          <section aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p className="fz-detail__lead">{pkg.description}</p>
            <ul className="fz-highlights">
              {pkg.highlights.map((item) => (
                <li key={item}>
                  <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="inclusions-title">
            <h2 id="inclusions-title">What&apos;s Included</h2>
            <div className="fz-incl">
              <div>
                <h3>Included</h3>
                <ul className="fz-ticks">
                  {pkg.inclusions.map((item) => (
                    <li key={item}>
                      <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Not included</h3>
                <ul className="fz-ticks fz-ticks--no">
                  {pkg.exclusions.map((item) => (
                    <li key={item}>
                      <X size={18} strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="itinerary-title">
            <h2 id="itinerary-title">Day-by-Day Itinerary</h2>
            <div className="fz-faq fz-faq--itinerary">
              {pkg.itinerary.map((day, index) => (
                <details key={day.day} open={index === 0}>
                  <summary>
                    <h3>
                      <span>{day.day}</span>
                      {day.title}
                    </h3>
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <p>{day.description}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="fz-detail__aside" aria-label="Enquire about this package">
          <div className="fz-enquiry">
            <p className="fz-enquiry__price">
              <span>Price</span>
              {packagePriceLabel(pkg)}
            </p>
            <h2>Enquire About This Package</h2>
            <p>Share a few details and our Umrah team will confirm availability and the current price.</p>
            <EnquiryForm packageTitle={pkg.title} />
            <a href={telHref(APP_SETTINGS.contact.phone)} className="fz-enquiry__call">
              <Phone size={16} aria-hidden="true" />
              Or call {APP_SETTINGS.contact.phone}
            </a>
          </div>
        </aside>
      </div>

      <section className="fz-section fz-section--soft" aria-labelledby="others-title">
        <div className="fz-container">
          <h2 id="others-title" className="fz-h2-sm">
            Other Umrah Packages
          </h2>
          <ul className="fz-others">
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={other.href} className="fz-other">
                  <span className="fz-other__media">
                    <Image src={other.cover.src} alt="" fill sizes="140px" />
                  </span>
                  <span>
                    <span className="fz-other__label">{other.label}</span>
                    <strong>{other.shortTitle}</strong>
                    <span>{other.duration}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Have a Question About This Package?" text="Our Umrah team in Dubai is happy to help you decide." />
    </>
  );
}
