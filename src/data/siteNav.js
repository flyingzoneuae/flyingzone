// Main navigation for the redesigned header/footer. All targets are existing routes.
export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Umrah / Hajj", href: "/umrah", primary: true },
  { label: "Flights", href: "/flight-tickets" },
  {
    label: "Visa",
    children: [
      { label: "UAE Visa", href: "/visas/uae" },
      { label: "Global Visa", href: "/visas/global" },
    ],
  },
  {
    label: "Holidays",
    children: [
      { label: "Tour Packages", href: "/tour-packages" },
      { label: "Holidays by flydubai", href: "/holidays-by-fly-dubai" },
      { label: "Dubai Local Excursions", href: "/dubai-excursions" },
      { label: "Hotel Reservations", href: "/hotel-reservations" },
      { label: "Travel Insurance", href: "/travel-insurance" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Flights", href: "/flight-tickets" },
    ],
  },
  {
    title: "Umrah & Hajj",
    links: [
      { label: "Umrah / Hajj", href: "/umrah" },
      { label: "Umrah by Bus", href: "/umrah/executive-umrah-bus-10-days" },
      { label: "Umrah by Air", href: "/umrah/standard-umrah-air-08-days" },
      { label: "Premium Umrah", href: "/umrah/premium-umrah-air-05-days" },
      { label: "Hajj Information", href: "/umrah?mode=hajj" },
    ],
  },
  {
    title: "Visa & Holidays",
    links: [
      { label: "UAE Visa", href: "/visas/uae" },
      { label: "Global Visa", href: "/visas/global" },
      { label: "Tour Packages", href: "/tour-packages" },
      { label: "Holidays by flydubai", href: "/holidays-by-fly-dubai" },
      { label: "Dubai Excursions", href: "/dubai-excursions" },
      { label: "Hotel Reservations", href: "/hotel-reservations" },
      { label: "Travel Insurance", href: "/travel-insurance" },
    ],
  },
];
