/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "ubuntu": ['Ubuntu', 'sans-serif']
    },
    extend: {
      colors: {
        "main-background": 'hsl(217, 100%, 97%)',
        "radio-button": 'hsl(206, 94%, 87%)',
        "secondary": 'hsl(213, 96%, 18%)'
      }
    },
  },
  plugins: [],
}

