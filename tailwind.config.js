/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00606a',
          hover: '#004c54',
          dark: '#14b8a6',
          darkHover: '#2dd4bf',
          muted: '#e6f2f3',
          darkMuted: '#0d2d31',
        },
        surface: {
          light: '#fafafa',
          dark: '#0a0a0a',
          cardLight: '#ffffff',
          cardDark: '#141414',
          borderLight: '#e5e7eb',
          borderDark: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.65',
        loose: '1.75',
      }
    },
  },
  plugins: [],
}
