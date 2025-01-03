/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        layout: '#191919',
        main: '#1C1C1C'
      },
      boxShadow: {
        menuActive : '0 0 13px -4px #CAFF33',
        shadowSide : '0px 0px 13px -4px black',
      }
    },
  },
  plugins: [],
}