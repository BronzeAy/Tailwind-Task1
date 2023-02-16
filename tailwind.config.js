/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage:{
        "bir":"linear-gradient(to bottom, rgba(0, 0, 0, 0.5) , transparent)"
      },
    },
  },
  plugins: [],
}
