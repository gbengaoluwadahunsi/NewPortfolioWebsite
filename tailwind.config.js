/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
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

