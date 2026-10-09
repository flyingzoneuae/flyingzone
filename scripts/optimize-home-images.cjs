/**
 * Right-sized WebP copies of the original homepage imagery (tours, visas,
 * destinations, services, team, slider). Originals are left untouched.
 * Output: public/assets/fz/home/. Run: node scripts/optimize-home-images.cjs
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const ROOT = path.join(__dirname, "..");
const PUB = path.join(ROOT, "public");
const OUT = path.join(PUB, "assets", "fz", "home");
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const destinations = require("../src/data/destinationData.json");
const tours = require("../src/data/tours.json");
const visa = require("../src/data/visa.json");
const activities = require("../src/data/activities.json");
const about = require("../src/data/about.json");

const jobs = [
  ["hero-skies", "/assets/images/home/slider/international-fares.png", 1920],
  ["slide-umrah", "/assets/images/home/slider/premium-umrah-packages.png", 800],
  ["slide-flights", "/assets/images/home/slider/international-fares.png", 800],
  ["slide-visa", "/assets/images/home/slider/quick-visa-processing.png", 800],
  ["slide-holidays", "/assets/images/home/slider/custom-holidays.png", 800],
  ["about-main", "/assets/images/home/about/main.png", 1000],
  ["why-main", "/assets/images/home/highlights/main.png", 1000],
  ["why-secondary", "/assets/images/home/highlights/secondary.png", 500],
  ...destinations.map((d) => [`dest-${slug(d.name)}`, d.image, 640]),
  ...tours.map((t) => [`tour-${t.slug}`, t.img, 800]),
  ...visa.uaeVisa.map((v) => [`visa-${v.slug}`, v.img, 640]),
  ...activities.activities.map((a) => [`service-${a.id}`, a.images.img1, 500]),
  ...about.team.members
    .filter((m) => fs.statSync(path.join(PUB, m.photo)).size > 5000) // skip 1.4 KB placeholders
    .map((m) => [`team-${slug(m.name)}`, m.photo, 420]),
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, src, width] of jobs) {
    const file = path.join(PUB, decodeURI(src));
    if (!fs.existsSync(file)) {
      console.log("MISSING", src);
      continue;
    }
    const info = await sharp(file).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(OUT, `${name}.webp`));
    console.log(`${name}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
  }
})();
