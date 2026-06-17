/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pk: {
          bg: '#080808',
          'bg-soft': '#0e0f0c',
          card: '#14160f',
          'card-2': '#181b10',
          border: '#25281b',
          lime: '#b4ec51',
          'lime-dim': '#9bd23c',
          text: '#f5f7ef',
          muted: '#9aa08c',
        }
      }
    },
  },
  plugins: [],
}
