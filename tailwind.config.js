/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#fdf8f0',
          100: '#f5e6d0',
          200: '#e8c9a0',
          300: '#d4a76a',
          400: '#c08b45',
          500: '#a67332',
          600: '#8b5e2a',
          700: '#6d4922',
          800: '#5a3d1e',
          900: '#4a321a',
        },
        forest: {
          50: '#f0f7f0',
          100: '#d4e8d4',
          200: '#a8d1a8',
          300: '#72b372',
          400: '#4a9a4a',
          500: '#2d7a2d',
          600: '#236623',
          700: '#1d521d',
          800: '#184218',
          900: '#133513',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#f9f0dd',
          300: '#f2e4c4',
          400: '#e8d4a0',
          500: '#d4bc7c',
        },
        alpine: {
          50: '#f0f5fa',
          100: '#d6e4f0',
          200: '#a8c4dd',
          300: '#7aa4ca',
          400: '#5588b5',
          500: '#3d6d9e',
        },
        trentino: {
          500: '#8b2222',
          600: '#7a1e1e',
          700: '#6d1a1a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
