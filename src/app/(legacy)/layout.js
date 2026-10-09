// Layout for the existing inner pages (flights, visas, holidays, about, contact…).
// They keep the original template CSS so their layout and functionality are
// unchanged, and get the redesigned header, footer and WhatsApp bar.
// Removed from the old global list because nothing in src/ uses them:
// Font Awesome (all.min.css, fontawesome.min.css), slick.css, slick-theme.css.
import "../../../public/assets/css/bootstrap-icons.css";
import "../../../public/assets/css/boxicons.min.css";
import "../../../public/assets/css/swiper-bundle.min.css";
import "../../../public/assets/css/nice-select.css";
import "react-modal-video/css/modal-video.css";
import "../../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../../public/assets/css/style.css";
import "@/styles/chrome.css";
import { inter, manrope } from "@/styles/fonts";
import BootstrapClient from "@/components/site/BootstrapClient";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppBar from "@/components/site/WhatsAppBar";
import { baseMetadata, viewport as baseViewport } from "@/constants/seo";

export const metadata = {
  ...baseMetadata,
  title: { default: baseMetadata.applicationName, template: baseMetadata.title.template },
};
export const viewport = baseViewport;

export default function LegacyLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="fz-skip">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppBar />
        <BootstrapClient />
      </body>
    </html>
  );
}
