/** @type {import('tailwindcss').Config} */
/**
 * Brand palettes (primary oasis-green, secondary desert-yellow + oasis-blue).
 * `kahana.*` is remapped to these scales for backward compatibility with existing utilities.
 */
const oasisGreen = {
  50: "#F8FAF2",
  100: "#F2F4E5",
  200: "#E4E9CC",
  300: "#CAD399",
  400: "#AFBE66",
  500: "#94A833",
  600: "#7A9200",
  700: "#617500",
  800: "#495800",
  900: "#313A00",
};

const desertYellow = {
  50: "#FFFBF4",
  100: "#FEF8E8",
  200: "#FDF1D2",
  300: "#FDEABB",
  400: "#FCE3A5",
  500: "#FBDC8E",
  600: "#C9B072",
  700: "#978455",
  800: "#645839",
};

const oasisBlue = {
  50: "#EDF5F8",
  100: "#DAEBF0",
  200: "#B6D7E1",
  300: "#91C3D3",
  400: "#6DAFC4",
  500: "#489CB5",
  600: "#3A7C91",
  700: "#2B5D6D",
  800: "#1D3E48",
};

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
        "oasis-green": { ...oasisGreen },
        "desert-yellow": { ...desertYellow },
        "oasis-blue": { ...oasisBlue },
        brand: {
          text: oasisGreen[800],
          "text-strong": oasisGreen[900],
          link: oasisBlue[500],
          "link-hover": oasisBlue[600],
          accent: oasisGreen[600],
          "accent-hover": oasisGreen[700],
          surface: oasisGreen[50],
          border: `${oasisGreen[800]}1a`,
        },
        kahana: {
          primary: {
            DEFAULT: oasisGreen[600],
            light: oasisGreen[500],
            dark: oasisGreen[800],
            ...oasisGreen,
          },
          secondary: {
            DEFAULT: oasisBlue[500],
            light: oasisBlue[300],
            dark: oasisBlue[700],
            ...oasisBlue,
          },
          accent: {
            green: oasisGreen[700],
            lime: oasisGreen[400],
            navy: oasisBlue[800],
            sand: desertYellow[600],
            sky: desertYellow[100],
            ocean: oasisBlue[500],
            warm: desertYellow[800],
            coral: "#f97316",
          },
          ui: {
            background: oasisGreen[50],
            surface: "#ffffff",
            border: `${oasisGreen[800]}26`,
            hover: oasisBlue[50],
            highlight: oasisGreen[200],
          },
        },
      },
      fontFamily: {
        bricolage: [
          "var(--font-bricolage)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        geist: [
          "var(--font-geist)",
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
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
