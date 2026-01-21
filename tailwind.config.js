/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // كل ملفات المشروع
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Almarai', 'sans-serif'], // الخط الأساسي
      },
    },
  },
  plugins: [],
}
