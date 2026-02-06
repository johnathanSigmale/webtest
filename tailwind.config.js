
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDF8F3',
          100: '#FFFBF7',
          200: '#FAF6F1',
          300: '#F2E8DE',
          900: '#8C7E72',
        },
        terracotta: {
          50: '#FDF3EF',
          100: '#FBE8E2',
          400: '#D4856A',
          500: '#C4704B',
          600: '#B85C3A',
          700: '#9A4D31',
        },
        sage: {
          50: '#F4F7F3',
          100: '#E9EFE7',
          400: '#A3B593',
          500: '#8B9E7C',
          600: '#7A8D6B',
          700: '#5F6F52',
        },
        charcoal: {
          500: '#5A5A5A',
          700: '#4A4A4A',
          800: '#3D3D3D',
          900: '#2C2C2C',
        }
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
