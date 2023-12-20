/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rojo-dg':'#FF2929',
        'negro-dg':'#323232',
        'azul-dg':'#0055D4'
      }
    },
  },
  plugins: [
    require('tailwindcss-text-balance'),
  ],
}
