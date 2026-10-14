/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        glow: 'var(--glow)',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 25px var(--glow)',
        'glow-lg': '0 0 50px var(--glow)',
      },
    },
  },
  plugins: [],
}
