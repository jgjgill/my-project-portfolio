module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        list: {
          '0%': {
            opacity: 0,
            transform: 'rotate(-3deg) translateX(-100px)',
          },
        },
      },
      animation: {
        list: 'list 1s',
      },
    },
  },
  plugins: [],
};
