/**
 * Home page "Meet Our Team" — edit names, roles and photos here.
 *
 * These are the real team members already listed on the Flying Zone site
 * (src/data/about.json), not invented people. Four have real photos in the
 * project. For the other three the project only contains blank placeholder
 * files, so they use PLACEHOLDER_PHOTO until real portraits are supplied.
 *
 * To add or replace a photo: put a portrait image (about 600×750, 4:5) in
 * public/assets/fz/home/ and set `photo` to its path. Optional `bio` adds a
 * short line under the role. No social links are shown because the project
 * only had generic template links.
 */
export const PLACEHOLDER_PHOTO = "/assets/fz/placeholders/portrait.svg";

export const teamSection = {
  eyebrow: "The people behind your journey",
  title: "Meet Our Team",
  description: "Meet the people dedicated to helping you plan your next journey with confidence and care.",
};

export const teamMembers = [
  { name: "Muhammad Naveed Naz", role: "Group Chairman", photo: "/assets/fz/home/team-muhammad-naveed-naz.webp" },
  { name: "Muhammad Ahmed", role: "Chief Executive Officer (CEO)", photo: "/assets/fz/home/team-muhammad-ahmed.webp" },
  { name: "Muhammad Yaseen", role: "Managing Director", photo: "/assets/fz/home/team-muhammad-yaseen.webp" },
  { name: "Wasim Sajjad", role: "Managing Director", photo: "/assets/fz/home/team-wasim-sajjad.webp" },
  // PHOTO NEEDED — replace PLACEHOLDER_PHOTO with the real portrait path:
  { name: "Malik Asad", role: "Sales Officer", photo: PLACEHOLDER_PHOTO },
  { name: "Asad", role: "Umrah Operations Officer", photo: PLACEHOLDER_PHOTO },
  { name: "Rimsha Naeem", role: "Customer Service Executive", photo: PLACEHOLDER_PHOTO },
];
