/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Fancy", "sans-serif"],
        spaceMono: ["SpaceMono", "sans-serif"],
        OpenSans: ["OpenSans", "sans-serif"],
        OpenSansBold: ["OpenSansBold", "sans-serif"],
        Anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
