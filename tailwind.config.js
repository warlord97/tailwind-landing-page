/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary': '#3238f2'
      },
      fontFamily: {
        'inter-font': ['Inter', 'sans-serif'],
        'poppins-font': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

