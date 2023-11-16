/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["arimo", "sans-serif"],
        intern: ["intern", "sans-serif"],
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
          1100: "#0080001A"
        },
        blues: {

        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
