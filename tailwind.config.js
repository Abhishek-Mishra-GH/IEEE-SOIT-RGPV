/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#002250',
        'primary-foregrund': '#DDF5FD',
      }
    },
  },
  plugins: [],
}

