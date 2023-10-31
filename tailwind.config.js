/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cat': "url('./src/assets/cat-bg.jpg')",
        'dog': "url('./src/assets/dog-bg.jpg')",
        'dog2': "url('./src/assets/dog-bg2.jpg')",
      }
    },
  },
  plugins: [],
}