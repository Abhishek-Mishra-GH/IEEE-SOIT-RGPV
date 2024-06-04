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
        'primary-foreground': "#71d3f4",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'kalam': ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
}

