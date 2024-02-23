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
        'back-blue': '#dbeaf3',
        'main-grey': '#f6f6f6',
        'main-text': '#1f2f27',
        'text-black': '#212322',
      },
      transitionProperty: {
        height: 'height',
      },
      spacing: {
        480: '480px',
        560: '560px',
        800: '800px',
        1024: '1024px',
      },
    },
  },
  plugins: [],
};
