/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 6s ease-in-out infinite",
        blink: "blink 1s ease-in-out infinite",
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
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      colors: {
        kahana: {
          // Main brand colors from new logo
          primary: {
            DEFAULT: "#0d9488", // Primary teal from logo transition
            light: "#14b8a6", // Lighter teal
            dark: "#0f766e", // Darker teal
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#0d9488",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },
          // Secondary colors from logo gradient
          secondary: {
            DEFAULT: "#0ea5e9", // Cerulean blue from logo
            light: "#38bdf8", // Light blue
            dark: "#0284c7", // Dark blue
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc", // Bright lime from logo
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e", // Deep navy from logo
          },
          // Accent colors from logo elements
          accent: {
            green: "#059669", // Forest green from logo
            lime: "#7dd3fc", // Bright lime from logo
            navy: "#0c4a6e", // Deep navy from logo
            sand: "#fbbf24", // Sandy yellow from seascape
            sky: "#fef3c7", // Sky cream from seascape
            ocean: "#0ea5e9", // Ocean blue
            warm: "#92400e", // Warm brown from ocean
            coral: "#f97316", // Coral accent color
          },
          // UI colors inspired by logo's natural theme
          ui: {
            background: "#f8fafc", // Clean, minimal background
            surface: "#ffffff", // Pure white surface
            border: "#e2e8f0", // Subtle border
            hover: "#f0f9ff", // Light blue hover
            highlight: "#ccfbf1", // Light teal highlight
          },
        },
      },
      fontFamily: {
        "bricolage": [
          '"Briolage Grotesque"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        "geist": [
          "Geist",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        "sf-pro": [
          '"SF Pro Display"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["PT Serif", "serif"],
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
