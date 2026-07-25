/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f7f4',
        ink: '#006fa6',
        inkDark: '#005c8a',
        inkSoft: '#d7edf7',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
