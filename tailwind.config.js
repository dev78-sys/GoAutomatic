/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A961',
        'gold-hover': '#D4B877',
        'gold-border': 'rgba(201, 169, 97, 0.25)',
        'gold-tint': 'rgba(201, 169, 97, 0.06)',
        'gold-light': 'rgba(201, 169, 97, 0.15)',
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
