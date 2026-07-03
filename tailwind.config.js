/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#0B4F6C',
        'blue-deeper': '#083A50',
        'blue-bright': '#1D88B8',
        'blue-soft': '#EAF4FA',
        'grey-light': '#F4F6F8',
        'grey-mist': '#E4EAEE',
        ink: '#16232B',
        'ink-soft': '#4B5C66',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        utility: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(135deg, #EAF4FA 0%, #FFFFFF 55%, #F4F6F8 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top right, #EAF4FA 0%, #FFFFFF 45%, #F4F6F8 100%)',
        'deep-gradient': 'linear-gradient(135deg, #0B4F6C 0%, #145C7D 60%, #1D88B8 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(11, 79, 108, 0.12)',
        card: '0 4px 24px rgba(11, 79, 108, 0.08)',
        'card-hover': '0 12px 40px rgba(11, 79, 108, 0.16)',
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      animation: {
        'pulse-line': 'pulseLine 3.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        pulseLine: {
          '0%, 100%': { strokeDashoffset: '0' },
          '50%': { strokeDashoffset: '-24' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
