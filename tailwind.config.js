/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#fff0e9",
          100: "#ffd8c7",
          200: "#ffb494",
          300: "#ff9164",
          400: "#ff7441",
          500: "#E65A33",
          600: "#c94727",
          700: "#a0371e",
          800: "#7a2916",
          900: "#51190d"
        }
      },
      boxShadow: {
        soft: "0 12px 30px -12px rgba(0,0,0,0.25)",
        paper: "0 20px 40px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        'mandala': "url('/assets/Hero_Mandala.svg')",
      },
      animation: {
        fadeInUp: "fadeInUp 600ms ease-out both"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
}
