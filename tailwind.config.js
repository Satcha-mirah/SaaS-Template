/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        // 'alegreya': ['Alegreya', 'sans-serif']
      }
    },
  },
  plugins: [],
}

