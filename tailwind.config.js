/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Vazir': ['Vazir'],
      'Lalezar': ['Lalezar'],
      'IranSansDN': ['IranSansDN']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}