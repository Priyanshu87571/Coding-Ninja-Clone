/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff7a00",
          dark: "#e55f00"
        },
        secondary: "#151b2c"
      }
    }
  },
  plugins: []
};
