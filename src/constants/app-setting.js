export const APP_SETTINGS = {
  siteName: "Flying Zone Travel & Tours",
  siteUrl: "https://flyingzone.ae",
  // Source: existing site copy ("Established in 2007", "17+ years of industry expertise").
  // NOTE (client to confirm): the old About page also said "18" and "19+" years — pick one figure.
  established: "2007",
  yearsExperience: "17+",
  contact: {
    email: "info@flyingzone.ae",
    phone: "+971 56 722 1458",
    phone2: "+971 50 473 9223",
    // NOTE (client to confirm): WhatsApp is assumed to be on the primary phone number.
    whatsapp: "971567221458",
    // NOTE (client to confirm): B2B line carried over from the old site-wide banner.
    b2bPhone: "+971 50 469 5951",
    location: "Al Mateena Project 2, Daira Muteena, Dubai",
    openingTime: "8:00 AM – 10:00 PM",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/flyingzonetraveluae",
    instagram: "https://www.instagram.com/flyingzonellcuae",
    tiktok: "https://www.tiktok.com/@flyingzonellc",
  },
};

export const telHref = (phone) => `tel:${phone.replace(/[^+\d]/g, "")}`;

export const whatsappHref = (message) => {
  const base = `https://wa.me/${APP_SETTINGS.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
