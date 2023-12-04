/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        greens: {
          100: "#008000",
          200: "#008000E5",
          300: "#008000CC",
          400: "#008000B2",
          500: "#00800099",
          600: "#00800080",
          700: "#00800066",
          800: "#0080004D",
          900: "#00800033",
          1000: "#0080001A",
          1100: "#0080001A",
        },
        blues: {
          1100: "#004080",
          1000: "#004080E5",
          900: "#004080CC",
          800: "#004080B2",
          700: "#00408099",
          600: "#00408080",
          500: "#00408066",
          400: "#0040804D",
          300: "#00408033",
          200: "#0040801A",
          100: "#0040800D",
        },
        grays: {
          1100: "#0D0D0D",
          1000: "#0D0D0DE5",
          900: "#0D0D0DCC",
          800: "#0D0D0DB2",
          700: "#0D0D0D99",
          600: "#0D0D0D80",
          500: "#0D0D0D66",
          400: "#0D0D0D4D",
          300: "#0D0D0D33",
          200: "#0D0D0D1A",
          100: "#0D0D0D0D",
        },
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
