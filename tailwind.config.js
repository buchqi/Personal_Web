/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        graphite: '#374151',
        mist: '#f7f8fb',
        line: '#e5e7eb',
        accent: '#2563eb',
        'accent-dark': '#1d4ed8',
        night: '#0f172a',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
