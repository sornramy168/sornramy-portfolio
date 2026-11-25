/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        khmer: [
          '"Kantumruy Pro Variable"',
          '"Kantumruy Pro"',
          '"Kantumruy"',
          "sans-serif",
        ],
      },
      animation: {
        gridScroll: "gridScroll 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        gradientX: "gradientX 4s ease infinite",
        marquee: "marquee 30s linear infinite", 
      },
      keyframes: {
        gridScroll: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(0,60px,0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        gradientX: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },    
    },
  },
  plugins: [],
};