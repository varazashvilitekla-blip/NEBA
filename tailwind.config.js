/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F3', paper: '#FFF2E3', peach: '#FFEBD2', high: '#F9E5CD',
        forest: '#3B6633', 'forest-dark': '#2F5229', ink: '#241A0B', deep: '#061D16', muted: '#42493F', line: '#B3A28C', mint: '#CEE8DC', error: '#BA1A1A', 'error-bg': '#FFDAD6',
      },
      fontFamily: { sans: ['Noto Sans Georgian', 'Noto Sans', 'sans-serif'], serif: ['Noto Serif Georgian', 'Noto Serif', 'serif'] },
      boxShadow: { soft: '0 2px 8px -2px rgba(26,15,8,.05), 0 1px 3px rgba(26,15,8,.03)', lift: '0 12px 24px -6px rgba(26,15,8,.08), 0 4px 8px -2px rgba(26,15,8,.04)' },
    },
  },
  plugins: [],
};
