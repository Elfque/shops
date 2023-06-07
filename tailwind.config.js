/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greeny: "#D2F467",
        bluish: "#0369A1",
      },
      gridTemplateColumns: {
        settings: "15rem 1fr",
      },
    },
  },
  plugins: [],
};
