/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Main': '#005f81',
        'Dark': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
