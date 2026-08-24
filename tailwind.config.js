/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#FF385C',
          darkRed: '#E00B41',
          black: '#222222',
          lightBg: '#F7F7F7',
          gray: '#717171',
          border: '#DDDDDD'
        },
        brand: {
          50: '#F0F5FF',
          100: '#E0EAFF',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E1B4B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Circular', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
