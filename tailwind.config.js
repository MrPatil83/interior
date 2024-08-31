/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'system-ui', 'sans-serif'],
        secondary: "raleway"
      },
      colors: {
        primary:"#FFFF",
      }
    },
  },
  plugins: [],
}
