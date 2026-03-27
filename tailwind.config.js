/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#B8860B',
        'gold-hover': '#D4A520',
        'gold-border': 'rgba(184, 134, 11, 0.25)',
        'gold-tint': 'rgba(184, 134, 11, 0.06)',
        'gold-light': 'rgba(184, 134, 11, 0.15)',
        charcoal: '#1f2937',
        muted: '#6b7280',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
