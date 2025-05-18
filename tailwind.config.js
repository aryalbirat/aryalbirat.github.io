/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bdd8ff',
          300: '#90beff',
          400: '#5a98ff',
          500: '#3b82ff', // Main primary color
          600: '#0058ff',
          700: '#0048d8',
          800: '#0039b0',
          900: '#003190',
        },
        secondary: {
          950: '#0a0e1a', // Darkest background
          900: '#0f172a', // Dark background
          800: '#1e293b', // Component background
          700: '#334155', // Lighter component background
          100: '#f1f5f9', // Light text on dark backgrounds
          50: '#f8fafc',  // Very light backgrounds
        },
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
        'button-gradient': 'linear-gradient(90deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px -3px rgba(59, 130, 255, 0.3)',
      }
    },
    screens: {
      'xs': '475px', // Extra small devices
      'sm': '640px', // Small devices
      'md': '768px', // Medium devices
      'lg': '1024px', // Large devices
      'xl': '1280px', // Extra large devices
      '2xl': '1536px', // 2X-Large devices
    },
  },
  plugins: [],
};