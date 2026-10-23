/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        sand: {
          50: '#fbf9f6',
          100: '#f5f0e9',
          200: '#eddccb',
          300: '#dfc5ab',
          400: '#cbb092',
          500: '#bfa081',
          primary: '#d6c5b3',
        }
      }
    },
  },
  plugins: [],
}
