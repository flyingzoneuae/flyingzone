"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { mainNav } from "@/data/siteNav";
import { APP_SETTINGS, telHref, whatsappHref } from "@/constants/app-setting";

const WA_MESSAGE = "Assalamu alaikum, I would like to speak to an Umrah expert at Flying Zone.";

const isActive = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

const SiteHeader = () => {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Close the drawer on navigation and lock page scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fz-header">
        <div className="fz-container fz-header__inner">
          <Link href="/" className="fz-logo" aria-label="Flying Zone Travel & Tours — home">
            {/* CLIENT TO CONFIRM: only a 100×60px logo exists in the project; supply an SVG/hi-res file. */}
            <img src="/assets/img/logo.png" alt="Flying Zone Travel & Tours" width={100} height={60} />
          </Link>

          <nav className="fz-nav" aria-label="Main">
            <ul className="fz-nav__list">
              {mainNav.map((item) =>
                item.children ? (
                  <li className="fz-nav__item" key={item.label}>
                    <button
                      type="button"
                      className={`fz-nav__link${item.children.some((c) => isActive(pathname, c.href)) ? " is-active" : ""}`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown size={15} aria-hidden="true" />
                    </button>
                    <ul className="fz-nav__sub">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} aria-current={isActive(pathname, child.href) ? "page" : undefined}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="fz-nav__item" key={item.href}>
                    <Link
                      href={item.href}
                      className={`fz-nav__link${item.primary ? " fz-nav__link--primary" : ""}`}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="fz-header__actions">
            <a
              href={whatsappHref(WA_MESSAGE)}
              className="fz-btn fz-btn--whatsapp fz-btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              <span className="fz-header__wa-label--long">WhatsApp an Expert</span>
              <span className="fz-header__wa-label--short">WhatsApp</span>
            </a>
            <button
              type="button"
              className="fz-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="fz-mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div className="fz-mobile" id="fz-mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="fz-mobile__list">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <details>
                    <summary className={item.children.some((c) => isActive(pathname, c.href)) ? "is-active" : undefined}>
                      {item.label}
                      <ChevronDown size={18} aria-hidden="true" />
                    </summary>
                    <ul className="fz-mobile__sub">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} aria-current={isActive(pathname, child.href) ? "page" : undefined}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`fz-mobile__link${item.primary ? " fz-mobile__link--primary" : ""}`}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    <span>
                      {item.label}
                      {item.primary && <span className="fz-mobile__tag">Packages</span>}
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="fz-mobile__cta">
          <a
            href={whatsappHref(WA_MESSAGE)}
            className="fz-btn fz-btn--whatsapp fz-btn--block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            WhatsApp an Expert
          </a>
          <a href={telHref(APP_SETTINGS.contact.phone)} className="fz-btn fz-btn--outline fz-btn--block">
            <Phone size={18} aria-hidden="true" />
            {APP_SETTINGS.contact.phone}
          </a>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
