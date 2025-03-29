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
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 6s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
      colors: {
        kahana: {
          // Main brand colors
          primary: {
            DEFAULT: "#2B2640", // Deep twilight navy
            light: "#474267", // Soft twilight purple
            dark: "#1A1628", // Dark twilight
          },
          // Secondary colors
          secondary: {
            DEFAULT: "#B84A5B", // Rich burgundy
            light: "#E17B86", // Soft coral
            dark: "#8E2941", // Deep burgundy
          },
          // Accent colors
          accent: {
            coral: "#F1785D", // Warm coral
            burgundy: "#732F44", // Deep burgundy
            purple: "#635C7E", // Muted purple
            navy: "#2D2B4E", // Deep navy
          },
          // UI colors
          ui: {
            background: "#F8F6FF", // Soft twilight background
            surface: "#FFFFFF", // White surface
            border: "#E8E6F2", // Soft border
            hover: "#FFF1F3", // Warm hover
            highlight: "#FFE9EC", // Soft coral highlight
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
