/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#59D3C6',
        'secondary': '#0B3C6A',
        'accent': '#FF495C',
      }
    },
  },
  plugins: [],
}
