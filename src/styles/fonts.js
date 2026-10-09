import { Inter, Manrope } from "next/font/google";

// Self-hosted by next/font (no runtime request to Google). Both are variable
// fonts, so one file per family covers every weight used.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
