const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        'beige': '#F6EBE2',
        'noirfond': "#1A1B20",
        'blanctext': "#FEF9F5"
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
    require("daisyui"),
  ],
};


// Pour que le dark mode s'adapte au dark mode déjà présent si un utlisateur l'as sur son site
// if (localStorage.theme === 'dark' | (!('theme' in localStorage)
//   && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// }
// else {
//   document.documentElement.classList.remove('dark')
// }
