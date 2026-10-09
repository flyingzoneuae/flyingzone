import { APP_SETTINGS } from "@/constants/app-setting";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${APP_SETTINGS.siteUrl}/sitemap.xml`,
  };
}
