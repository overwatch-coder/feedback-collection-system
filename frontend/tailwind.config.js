/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        secondary: "#2D3748",
        secondaryLight: "#4A5568",
        light: "#CBD5E0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
