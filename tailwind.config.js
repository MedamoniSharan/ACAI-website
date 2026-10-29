/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acai: {
          50: '#fdf3f4',
          100: '#fae6e8',
          200: '#f5ced3',
          300: '#eda6b1',
          400: '#e17285',
          500: '#d0435c',
          600: '#b82b46',
          700: '#9b1e36',
          800: '#7e1c2e',
          900: '#4a0e17',
          950: '#2d060c',
        },
        cream: {
          50: '#fdfbf7',
          100: '#fbf7f0',
          200: '#f6ede0',
          300: '#f0dfcb',
          400: '#e5caab',
          500: '#d4ad85',
          600: '#bc9066',
          700: '#9d734e',
          800: '#7f5c3f',
          900: '#674c35',
        },
        forest: {
          800: '#1e382b',
          900: '#14271e',
          950: '#0c1a14',
        },
        matcha: {
          50: '#f4f8f0',
          100: '#e6f0de',
          300: '#b4d79d',
          500: '#7da85b',
          700: '#466831',
          900: '#233816',
        },
        ube: {
          50: '#f8f5fb',
          100: '#ede6f5',
          300: '#c5abd9',
          500: '#9466b5',
          700: '#6b3f8f',
          900: '#411e5f',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"SF Pro"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        serif: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
