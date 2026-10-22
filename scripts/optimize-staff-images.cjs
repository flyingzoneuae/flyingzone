/**
 * Makes 4:5 WebP portrait crops of the staff photos for the team section.
 * Originals in "public/assets/images/staff images/" are left untouched.
 * Output: public/assets/fz/staff/<slug>.webp (+ <slug>-lg.webp for featured use).
 *
 * `box` = crop window as fractions of the (auto-rotated) image: [left, top, width].
 * Height is derived from the 4:5 ratio. Tune these if a crop needs adjusting.
 *
 * Run: node scripts/optimize-staff-images.cjs
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "assets", "images", "staff images");
const OUT = path.join(ROOT, "public", "assets", "fz", "staff");

const jobs = [
  { file: "GROUP CHAIRMAN FZ UAE NAVEED NAZ.jpeg", slug: "naveed-naz", box: [0.36, 0.12, 0.62], large: true },
  { file: "CEO Muhammad Yasin.jpeg", slug: "muhammad-yasin", box: [0.234, 0.37, 0.5] },
  { file: "MD Wasim Sajjad.png", slug: "wasim-sajjad", box: [0.1, 0.0, 0.8] },
  { file: "Diractor Muhammad Yaseen.jpeg", slug: "muhammad-yaseen", box: [0.26, 0.17, 0.55] },
  { file: "Reservation Manager KSA Ahsan Sarwar.jpeg", slug: "ahsan-sarwar", box: [0.1, 0.0, 0.8] },
  { file: "Sales & Marketing Manager Asad Saleem.jpeg", slug: "asad-saleem", box: [0.1, 0.0, 0.8] },
  { file: "Umrah Operations Manager Tanzeel ur Rehman.jpeg", slug: "tanzeel-ur-rehman", box: [0.1, 0.0, 0.8] },
  { file: "Travel Consultant Asad Hussain.jpeg", slug: "asad-hussain", box: [0.1, 0.0, 0.8] },
  { file: "Umrah Executive Mehran Sabir.jpeg", slug: "mehran-sabir", box: [0.0, 0.0, 1.0] },
  { file: "Accounts Executive Khizer Raza.jpeg", slug: "khizer-raza", box: [0.1, 0.29, 0.8] },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const job of jobs) {
    // rotate() applies EXIF orientation (the CEO photo is stored sideways).
    const rotated = await sharp(path.join(SRC, job.file)).rotate().toBuffer();
    const { width: W, height: H } = await sharp(rotated).metadata();
    const [l, t, w] = job.box;
    let cw = Math.round(W * w);
    let ch = Math.round((cw * 5) / 4);
    if (ch > H) {
      ch = H;
      cw = Math.round((ch * 4) / 5);
    }
    const left = Math.min(Math.max(0, Math.round(W * l)), W - cw);
    const top = Math.min(Math.max(0, Math.round(H * t)), H - ch);
    const crop = sharp(rotated).extract({ left, top, width: cw, height: ch });
    const sizes = job.large ? [["", 640], ["-lg", 1000]] : [["", 640]];
    for (const [suffix, width] of sizes) {
      const info = await crop
        .clone()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(OUT, `${job.slug}${suffix}.webp`));
      console.log(`${job.slug}${suffix}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
    }
  }
})();
