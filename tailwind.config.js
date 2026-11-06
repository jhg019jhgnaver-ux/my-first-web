/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Noto Sans KR"', 'system-ui', 'sans-serif'] },
      colors: {
        primary: { 50: '#f4f8e9', 100: '#e8f1d2', 200: '#d3e7a7', 300: '#b9d77a', 400: '#9bc34f', 500: '#7aa52d', 600: '#648a24', 700: '#4d6b1e', 800: '#3f561d', 900: '#35481d' },
        accent: { 50: '#f2f4ec', 100: '#e6eadb', 200: '#d2dbbb', 300: '#b9c995', 400: '#9fb66e', 500: '#849f4c', 600: '#6c833c', 700: '#536532', 800: '#45522d', 900: '#3b4729' },
      },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
      animation: { 'fade-in-up': 'fadeInUp 0.5s ease-out forwards' },
    },
  },
  plugins: [],
};
