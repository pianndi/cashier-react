/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#f1503a",
        back: "#ecedee",
        extraLight: "#d1d3d5",
        light: "#bdc0c2",
      },
    },
  },
  plugins: [],
};
