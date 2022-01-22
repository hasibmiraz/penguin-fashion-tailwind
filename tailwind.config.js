const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        penguin: '#FFFBF0',
        jacketprice: '#FABE4C',
      },
    },
  },
  plugins: [],
};
