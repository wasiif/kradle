import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f4ee',
        ink: '#1d1d1b',
        sepia: '#f1e5d3',
        charcoal: '#1f1f1f',
      },
      fontFamily: {
        serif: ['var(--font-literata)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
