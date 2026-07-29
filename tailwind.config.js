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
        title: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
        subtitle: ['Audiowide', 'ui-sans-serif', 'sans-serif'],
        experience: ['Comfortaa', 'ui-sans-serif', 'sans-serif'],
        display: ['Tinos', 'Times New Roman', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
