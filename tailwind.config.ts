import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta del proyecto: bosque nativo + lago del sur de Chile
        bosque: {
          50: '#f1f7f3',
          100: '#dcebe1',
          200: '#bbd7c6',
          300: '#8fbaa1',
          400: '#5e9678',
          500: '#3d7a5d',
          600: '#2c6149',
          700: '#244e3c',
          800: '#1e3f31',
          900: '#1a3429',
          950: '#0d1d17',
        },
        lago: {
          50: '#eef8fb',
          100: '#d4edf3',
          200: '#aedce8',
          300: '#76c2d6',
          400: '#39a0bc',
          500: '#1e83a1',
          600: '#1b6a88',
          700: '#1c5670',
          800: '#1f485d',
          900: '#1d3d4f',
        },
        crema: '#f7f4ec',
        arena: '#e8e0cf',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
