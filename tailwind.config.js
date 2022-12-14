/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        btnHover: "#F7D3C1",
        nav: "#3391A4",
        step: "#3C8AAC",
      },
    },
  },
  plugins: [],
};
