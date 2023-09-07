/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0984DD',
        secondary: '#F2F2F2',
        tertiary: 'rgba(255, 255, 255, 0.10)',
        quaternary: 'rgba(255, 255, 255, 0.10)'
      },
      keyframes: {
        slide: {
          'from, to': {
            transform: 'translateX(0)',
            transform: 'translateY(-100%)'
          }
        }
      },
      animation: {
        slide: '5s slide infinite linear'
      }
    }
  },
  plugins: []
}
