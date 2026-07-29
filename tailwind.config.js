/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f2f2ef',
        ink: '#246084',
        inkDark: '#0c3c54',
        inkSoft: '#d9e6ee',
      },
      fontFamily: {
        display: ['Tinos', 'Times New Roman', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
