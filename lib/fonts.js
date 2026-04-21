import localFont from "next/font/local";

/** Body / UI text — replaces legacy @font-face "Geist" in globals.css */
export const fontGeist = localFont({
  src: "../public/fonts/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
  display: "swap",
});

/** Headings — replaces legacy @font-face "Bricolage Grotesque" */
export const fontBricolage = localFont({
  src: "../public/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-bricolage",
  /** Reduces CLS from heading metric swaps on the homepage hero (vs swap). */
  display: "optional",
});
