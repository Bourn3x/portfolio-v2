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
        'lotion-white': 'var(--lotion-white)',
        'bright-gray': 'var(--bright-gray)',
        'chinese-black': 'var(--chinese-black)',
      }
    },
  },
  plugins: [],
}
