/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-orange": "#cc8e32",
        "gradient-purple": "#a27cf2",
        "base-blue-100": "#010b1f",
        "base-blue-200": "#021740",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
