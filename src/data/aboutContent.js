/**
 * Home page "About Flying Zone" section — edit the copy and images here.
 *
 * The description and supporting paragraph are the supplied draft marketing
 * copy (CLIENT TO CONFIRM final wording). They contain no founding dates,
 * office locations, awards or statistics. The only company fact shown in the
 * section is "Est. 2007", which comes from the existing site content.
 */
export const aboutSection = {
  eyebrow: "About Flying Zone",
  title: "Your Trusted Travel Companion",
  description:
    "Flying Zone Travel & Tours helps travelers explore destinations, plan memorable holidays, and organize their travel arrangements with confidence. From holiday packages and visa assistance to flights and pilgrimage travel, our goal is to make every journey smoother through personalized service and reliable travel support.",
  supporting:
    "Whether you are planning an international holiday, arranging essential travel documentation, or preparing for a spiritual journey, our team is here to help you explore suitable travel options for your needs.",
  // icon: one of "assist" | "services" | "support" (see ABOUT_ICONS in app/(site)/page.js)
  benefits: [
    { icon: "assist", title: "Personalized Travel Assistance", text: "Advice shaped around your dates, budget and who is travelling." },
    { icon: "services", title: "Multiple Travel Services", text: "Holidays, flights, visit visas and Umrah & Hajj travel in one place." },
    { icon: "support", title: "Support Throughout Your Journey", text: "Our team stays in touch before you leave and while you travel." },
  ],
  cta: { label: "Discover Flying Zone", href: "/about" },

  // IMAGES — replace these two files (or change the paths) to swap the photos.
  // Recommended: main ≈ 1200×900 (4:3), small ≈ 600×700. Both are existing project photos for now.
  image: {
    src: "/assets/fz/home/about-main.webp",
    width: 984,
    height: 604,
    alt: "Hot-air balloons rising over Cappadocia at sunrise",
  },
  imageSmall: {
    src: "/assets/fz/visa-passport.webp",
    width: 648,
    height: 578,
    alt: "A passport and model aeroplane held up against the sea",
  },
};
