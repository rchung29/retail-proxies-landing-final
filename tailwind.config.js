/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#020F1A',
        secondary: '#04121E',
        third: '#0A1C2B',
        text: '#314E64',
        gradient1: '#0FA9D5',
        gradient2: '#27F19F',
      },
      fontFamily: {
        'montserrat':['Montserrat']
      }
    },
  },
  plugins: [
    require('tailwind-animatecss')
  ],
}
