/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'toasty-orange': 'var(--toasty-orange)',
        'lotion-white': 'var(--lotion-white)',
        'bright-gray': 'var(--bright-gray)',
        'chinese-black': 'var(--chinese-black)',
        'raisin-black': 'var(--raisin-black)',
      },
    },
    fontFamily: {
      'lato': 'Lato, sans-serif',
    },
    screens: {
      'xxs': '388px',
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}
