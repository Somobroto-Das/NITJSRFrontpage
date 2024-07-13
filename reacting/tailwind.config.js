/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {boxShadow: {
      'custom': '0.5rem 0.75rem 1.5rem #bbbbbb',
    },
  },
},
variants: {
  extend: {
    boxShadow: ['hover'],
    translate: ['hover'],
},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

