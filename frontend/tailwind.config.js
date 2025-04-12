/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'uber-thumbnail':"url('/src/assets/Uber.png')"
      },
      cursor: {
        'car-cursor': 'url(./src/assets/uber_hover.svg), pointer',
      }
    }
  },
  plugins: [],
}

