module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          400: '#818cf8',
          600: '#6366f1',
        },
        gray: {
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};