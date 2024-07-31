/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        batak: ['Noto Sans Batak', 'sans-serif'],
        Oxanium:['Oxanium','sans-serif']
      },
      colors: {
        customBlue: '#225DA5',
        customRed: '#a2373a',
      },
    },
  },
  plugins: [],
}
