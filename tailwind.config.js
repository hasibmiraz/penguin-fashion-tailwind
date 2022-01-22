const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        penguin: '#FFFBF0',
        jacketprice: '#FABE4C',
        benefitText: '#3E3E3E',
        main: '#E5E5E5',
      },
    },
  },
  plugins: [],
};
