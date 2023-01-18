/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    colors: {
      "el-dark-blue":"#2B3945",
      "bg-very-dark-blue": "#202C37",
      "text-very-dark-blue": "#111517",
      "input-dark-gray": "#858585",
      "bg-very-light-gray": "#FAFAFA",
      "white": "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}
