/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightGray: '#24232B',
        darkDray: '#0E0D13',
        limeGreen: '#A4FFAF',
        yellow: '#F2CC73',
      },
    },
  },
  plugins: [],
};
