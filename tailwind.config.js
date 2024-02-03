/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"ITC Kabel Std"', 'sans-serif'],
      },
      colors: {
        'light-blue': '#0f4baf',
        'secondary-blue': '#d9e3f3',
        'main-grey': '#f6f6f6',
      },
    },
  },
  plugins: [],
};
