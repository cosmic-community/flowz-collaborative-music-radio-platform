/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D8B',
          dark: '#E6447D',
        },
        secondary: {
          DEFAULT: '#6C5CE7',
          dark: '#5F4FD4',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          lighter: '#232340',
          card: '#16213E',
        },
        accent: {
          cyan: '#00D9FF',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF4D8B 0%, #6C5CE7 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(26,26,46,0.95) 0%, rgba(26,26,46,1) 100%)',
      },
    },
  },
  plugins: [],
}