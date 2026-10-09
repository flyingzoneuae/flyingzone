import PilgrimagePage from "@/components/site/PilgrimagePage";
import { pageMetadata } from "@/constants/seo";

// One shared pilgrimage page with an UMRAH / HAJJ toggle. Umrah is the default;
// /umrah?mode=hajj (and the legacy /hajj URL, which redirects here) opens it in Hajj Mode.
const modeFrom = (searchParams) => (searchParams?.mode === "hajj" ? "hajj" : "umrah");

export const generateMetadata = ({ searchParams }) =>
  modeFrom(searchParams) === "hajj"
    ? pageMetadata({
        title: "Hajj from the UAE — Guidance & Arrangements",
        description:
          "Speak to Flying Zone's Hajj team in Dubai about current Hajj arrangements, requirements, documents and booking procedures.",
        path: "/umrah?mode=hajj",
      })
    : pageMetadata({
        title: "Umrah & Hajj from the UAE — Umrah Packages by Bus & Air",
        description:
          "Compare Flying Zone's Umrah packages from the UAE by bus and by air — visa, flights, Makkah and Madinah hotels, transport and a guide — or ask about Hajj.",
        path: "/umrah",
      });

export default function UmrahHajjPage({ searchParams }) {
  return <PilgrimagePage initialMode={modeFrom(searchParams)} />;
}
