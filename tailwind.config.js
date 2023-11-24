/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto mono, monospace',
    },
    extend: {
      fontSize: {
        // for fun
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        // more modern than 100vh
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
