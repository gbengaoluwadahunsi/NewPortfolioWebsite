/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    screens:{
      'sm': '640px',
      'md': '901px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px'
  
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        customBlue: 'rgb(6, 6, 61)',
      },
      height: {
        'custom': '45rem',// Adjust the value as per your requirement
        'footer-height': '30rem'
      },
    },
  },
  plugins: [],
}

