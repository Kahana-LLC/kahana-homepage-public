/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        kahana: {
          // Main brand colors
          primary: {
            DEFAULT: "#3C584A", // Deep sage green
            light: "#6B8C7D", // Light sage
            dark: "#2A4037", // Dark sage
          },
          // Secondary colors
          secondary: {
            DEFAULT: "#D2B8A4", // Warm sand
            light: "#E6D5C7", // Light sand
            dark: "#BFA08C", // Dark sand
          },
          // Accent colors
          accent: {
            sage: "#94A89A", // Muted sage
            mint: "#A8C2B3", // Soft mint
            sand: "#DCC1A7", // Desert sand
            terra: "#C68D6E", // Terracotta
          },
          // UI colors
          ui: {
            background: "#FAF7F4", // Light sand background
            surface: "#FFFFFF", // White surface
            border: "#E6D5C7", // Light sand border
            hover: "#F0E6DD", // Hover state
            sunlight: "#FFF8E7", // Soft golden sunlight
          },
        },
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
