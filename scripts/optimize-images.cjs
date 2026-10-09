/**
 * One-off image pipeline for the redesigned pages.
 * Reads the original (multi-MB) PNGs and writes right-sized WebP masters to
 * public/assets/fz/. next/image then serves responsive AVIF/WebP from these.
 * Originals are left untouched. Run: node scripts/optimize-images.cjs
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "..", "public", "assets", "images");
const OUT = path.join(__dirname, "..", "public", "assets", "fz");

// [output name, source, max width, optional crop {left, top, width, height}]
const jobs = [
  ["hero-kaaba", "about/services/hajj-umrah.png", 1200],
  ["makkah-haram", "banners/hajj-umrah.png", 1200, { left: 420, top: 0, width: 975, height: 650 }],
  ["makkah-night", "home/slider/premium-umrah-packages.png", 1400, { left: 350, top: 0, width: 1170, height: 780 }],
  ["madinah-dome", "umrah/umrah-by-air-premium/1.png", 1400],
  ["madinah-hotels", "umrah/umrah-by-air-premium/2.png", 1400],
  ["madinah-arches", "umrah/umrah-by-air-premium/3.png", 1400],
  ["madinah-courtyard", "umrah/umrah-by-air-premium/4.png", 1400],
  ["madinah-green-dome", "umrah/umrah-by-air-standard/1.png", 1400],
  ["madinah-street", "umrah/umrah-by-air-standard/2.png", 1400],
  ["pilgrims-courtyard", "umrah/umrah-by-air-standard/3.png", 1400],
  ["madinah-gate", "umrah/umrah-by-air-standard/4.png", 1400],
  ["madinah-sunset", "umrah/umrah-by-bus-executive/1.png", 1400],
  ["madinah-bus-street", "umrah/umrah-by-bus-executive/2.png", 1400],
  ["madinah-baqi", "umrah/umrah-by-bus-executive/3.png", 1400],
  ["madinah-plaza", "umrah/umrah-by-bus-executive/4.png", 1400],
  ["visa-passport", "about/hero/travel-experiences.png", 900],
  ["hajj-banner", "banners/hajj-umrah.png", 1920],
  ["hajj-pilgrims", "banners/hajj-umrah.png", 900, { left: 500, top: 0, width: 769, height: 650 }],
  ["flight-takeoff", "banners/flight-tickets.png", 1200, { left: 470, top: 0, width: 975, height: 650 }],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, src, width, crop] of jobs) {
    let img = sharp(path.join(SRC, src));
    if (crop) img = img.extract(crop);
    const info = await img
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(OUT, `${name}.webp`));
    const before = fs.statSync(path.join(SRC, src)).size;
    console.log(`${name}.webp ${info.width}x${info.height} ${(before / 1024).toFixed(0)}KB -> ${(info.size / 1024).toFixed(0)}KB`);
  }
  // Open Graph image (JPEG for widest crawler support)
  await sharp(path.join(SRC, "banners/hajj-umrah.png"))
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, "og-umrah.jpg"));
  console.log("og-umrah.jpg written");
})();
