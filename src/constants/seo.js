import { APP_SETTINGS } from "./app-setting";

const { siteName, siteUrl, contact, socialLinks } = APP_SETTINGS;

export const DEFAULT_DESCRIPTION =
  "Complete Umrah packages from the UAE with visa assistance, flights, hotels and transportation, arranged by Flying Zone Travel & Tours in Dubai.";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#163A82",
};

export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Umrah Packages from UAE | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: siteName,
  icons: { icon: "/assets/img/logo.png" },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_AE",
    url: siteUrl,
    title: `Umrah Packages from UAE | ${siteName}`,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/assets/fz/og-umrah.jpg", width: 1200, height: 630, alt: "The Kaaba at Masjid al-Haram, Makkah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Umrah Packages from UAE | ${siteName}`,
    description: DEFAULT_DESCRIPTION,
    images: ["/assets/fz/og-umrah.jpg"],
  },
};

/** Helper for per-page metadata with canonical + matching Open Graph. */
export const pageMetadata = ({ title, description, path }) => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { ...baseMetadata.openGraph, title, description, url: path },
  twitter: { ...baseMetadata.twitter, title, description },
});

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/assets/img/logo.png`,
  image: `${siteUrl}/assets/fz/og-umrah.jpg`,
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Mateena Project 2, Daira Muteena",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: Object.values(socialLinks),
};
