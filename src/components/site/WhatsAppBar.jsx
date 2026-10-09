import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { APP_SETTINGS, telHref, whatsappHref } from "@/constants/app-setting";

// Fixed contact bar on mobile; collapses to a floating WhatsApp button from tablet up.
const WhatsAppBar = () => (
  <div className="fz-wabar">
    <a href={telHref(APP_SETTINGS.contact.phone)} className="fz-btn fz-btn--outline fz-wabar__call">
      <Phone size={18} aria-hidden="true" />
      Call
    </a>
    <a
      href={whatsappHref("Assalamu alaikum, I would like to ask about Umrah packages.")}
      className="fz-btn fz-btn--whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={20} />
      WhatsApp an Expert
    </a>
  </div>
);

export default WhatsAppBar;
