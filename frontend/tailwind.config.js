/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-gray-100', 'text-gray-800',
    'bg-blue-100', 'text-blue-800',
    'bg-yellow-100', 'text-yellow-800',
    'bg-amber-100', 'text-amber-800',
    // Add other color combinations you need
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16rem',
    },
    extend: {},
  },
  plugins: [],
}

