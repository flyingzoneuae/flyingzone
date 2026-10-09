import { APP_SETTINGS } from "@/constants/app-setting";
import { umrahPackages } from "@/data/umrahContent";

export default function sitemap() {
  const base = APP_SETTINGS.siteUrl;
  const page = (path, priority) => ({ url: `${base}${path}`, changeFrequency: "weekly", priority });

  return [
    page("/", 1),
    page("/umrah", 0.9),
    ...umrahPackages.map((pkg) => page(pkg.href, 0.8)),
    ...[
      "/flight-tickets",
      "/visas/uae",
      "/visas/global",
      "/tour-packages",
      "/holidays-by-fly-dubai",
      "/dubai-excursions",
      "/hotel-reservations",
      "/travel-insurance",
      "/about",
      "/contact",
    ].map((path) => page(path, 0.6)),
  ];
}
