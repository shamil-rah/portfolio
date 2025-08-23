/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'beni-regular': ['BeniRegular', 'sans-serif'],
        'compita-semibold': ['CompitaSemibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};