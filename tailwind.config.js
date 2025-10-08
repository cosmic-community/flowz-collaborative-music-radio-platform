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
          DEFAULT: '#A855F7',
          dark: '#9333EA',
        },
        dark: {
          DEFAULT: '#0F0F1E',
          lighter: '#1A1A2E',
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
        'gradient-primary': 'linear-gradient(135deg, #FF4D8B 0%, #A855F7 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(15,15,30,0.95) 0%, rgba(15,15,30,1) 100%)',
      },
    },
  },
  plugins: [],
}