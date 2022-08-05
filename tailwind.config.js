/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '700px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1100px',
        // => @media (min-width: 1280px) { ... }
      },
  },
  plugins: [],
}
