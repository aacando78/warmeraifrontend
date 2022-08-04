module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
// To enable dark mode for only single utility class:
variants: {
  backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd']
},
  plugins: [require('tailwindcss-dark-mode')()],
}
