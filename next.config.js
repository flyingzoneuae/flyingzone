/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    // Tree-shake icon imports so only the icons used are bundled.
    optimizePackageImports: ["lucide-react"],
    // Keep the 350 MB of static assets (served by the CDN anyway) and the
    // source backup out of the serverless function traces.
    outputFileTracingExcludes: {
      "*": ["public/**/*", "_original_src_backup/**/*", "scripts/**/*"],
    },
  },
  async redirects() {
    return [
      // Umrah and Hajj share one page with a toggle.
      { source: "/hajj", destination: "/umrah?mode=hajj", permanent: false },
      // The old template "Hajj & Umrah" listing is superseded by /umrah. Its Hajj
      // detail pages are left untouched (their data still needs client confirmation).
      { source: "/hajj-umrah", destination: "/umrah", permanent: false },
      // Old Umrah package URLs point to the redesigned package pages (307 until the client signs off).
      ...["executive-umrah-bus-10-days", "standard-umrah-air-08-days", "premium-umrah-air-05-days"].map((slug) => ({
        source: `/hajj-umrah/${slug}`,
        destination: `/umrah/${slug}`,
        permanent: false,
      })),
    ];
  },
};

module.exports = nextConfig;
