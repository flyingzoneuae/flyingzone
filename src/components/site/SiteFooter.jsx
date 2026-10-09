import Link from "next/link";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import TikTokIcon from "../svg/TikTokIcon";
import TabbyIcon from "../icons/TabbyIcon";
import TamaraIcon from "../icons/TamaraIcon";
import { footerNav } from "@/data/siteNav";
import { APP_SETTINGS, telHref, whatsappHref } from "@/constants/app-setting";

const SiteFooter = () => {
  const { contact, socialLinks, siteName, established } = APP_SETTINGS;

  return (
    <footer className="fz-footer">
      <div className="fz-container">
        <div className="fz-footer__top">
          <div className="fz-footer__brand">
            <Link href="/" className="fz-footer__logo" aria-label={`${siteName} — home`}>
              <img src="/assets/img/logo.png" alt={siteName} width={100} height={60} loading="lazy" />
            </Link>
            <p className="fz-footer__about">
              Flying Zone arranges complete Umrah journeys from the UAE — visa, flights, hotels and
              transport — alongside flights, visas and holidays. Established in {established}.
            </p>
            <ul className="fz-footer__socials">
              <li>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Flying Zone on Facebook">
                  <Facebook size={18} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Flying Zone on Instagram">
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Flying Zone on TikTok">
                  <TikTokIcon width={16} height={16} fill="currentColor" />
                </a>
              </li>
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="fz-footer__title">{group.title}</h2>
              <ul className="fz-footer__list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="fz-footer__contact">
            <h2 className="fz-footer__title">Contact</h2>
            <ul className="fz-footer__list">
              <li className="fz-footer__contact-item">
                <Phone size={17} aria-hidden="true" />
                <span>
                  <a href={telHref(contact.phone)}>{contact.phone}</a>
                  <span>
                    <a href={telHref(contact.phone2)}>{contact.phone2}</a>
                  </span>
                </span>
              </li>
              <li className="fz-footer__contact-item">
                <WhatsAppIcon size={17} />
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </li>
              <li className="fz-footer__contact-item">
                <Mail size={17} aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="fz-footer__contact-item">
                <MapPin size={17} aria-hidden="true" />
                <span>{contact.location}</span>
              </li>
              <li className="fz-footer__contact-item">
                <Clock size={17} aria-hidden="true" />
                <span>Open {contact.openingTime}</span>
              </li>
            </ul>
            <div className="fz-footer__pay">
              <span>Payment partners</span>
              <span className="fz-footer__pay-logo" role="img" aria-label="tabby">
                <TabbyIcon />
              </span>
              <span className="fz-footer__pay-logo" role="img" aria-label="tamara">
                <TamaraIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="fz-footer__bottom">
          <p>
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <p>
            Travel agents (B2B): <a href={telHref(contact.b2bPhone)}>{contact.b2bPhone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
