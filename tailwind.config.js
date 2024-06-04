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
        // 'primary-foregrund': '#DDF5FD',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'kalam': ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
}

