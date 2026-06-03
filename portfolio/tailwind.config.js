/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark:           '#000000',
        'dark-secondary':'#050508',
        'dark-card':    '#0A0A0A',
        'dark-border':  '#1A1A1A',
        'dark-text':    '#A1A1AA',
        accent:         '#6366F1',
        'accent-hover': '#4F46E5',
        'accent-light': '#EEF2FF',
        'accent-dark':  '#818CF8',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body:    ['Outfit', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
