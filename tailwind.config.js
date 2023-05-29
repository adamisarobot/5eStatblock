/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'yellow-bar': '#E69A28',
        paper: '#FDF1DC'
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
