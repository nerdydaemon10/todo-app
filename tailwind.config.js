/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector', // enable dark: class
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')]
}