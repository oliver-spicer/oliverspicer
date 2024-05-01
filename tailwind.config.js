/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': {
          50:  '#F3FAF4',
          100: '#E4F4E7',
          200: '#CAE8D0',
          300: '#A0D5AA',
          400: '#6FB97D',
          500: '#4B9C5B',
          600: '#398047',
          700: '#30653B',
          800: '#2A5132',
          900: '#24432B',
          950: '#0F2414',
          1000: '#202521'
      }
    },
    extend: {},
  },
  plugins: [],
}

