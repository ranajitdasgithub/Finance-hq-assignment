/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Scan files in src for Tailwind classes
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-in-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glowing: "0 0 25px 5px rgba(255, 140, 0, 0.75)", // Custom glowing shadow
      },
      transitionTimingFunction: {
        easeElastic: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Custom easing
      },
      colors: {
        primary: "#6A0DAD", // Add custom colors
        secondary: "#FF8C00",
      },
    },
  },
  plugins: [],
};
