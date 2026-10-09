import "@/styles/chrome.css";
import "@/styles/site.css";
import { inter, manrope } from "@/styles/fonts";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppBar from "@/components/site/WhatsAppBar";
import Reveal from "@/components/site/Reveal";
import { baseMetadata, viewport as baseViewport, organizationJsonLd } from "@/constants/seo";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function SiteLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="fz-site">
        <a href="#main" className="fz-skip">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppBar />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
