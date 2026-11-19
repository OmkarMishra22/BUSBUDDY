/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kolkata: {
          yellow: '#FFB800',
          yellowDark: '#E6A500',
          blue: '#1E3A8A',
          blueLight: '#3B82F6',
          tramGreen: '#059669',
          ferryCyan: '#0891B2',
          danger: '#DC2626',
          warning: '#D97706',
          success: '#16A34A',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          textMain: '#0F172A',
          textMuted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        bengali: ['"Noto Sans Bengali"', '"Hind Siliguri"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
