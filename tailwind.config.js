/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
      "principal": ['Be Vietnam Pro', 'sans-serif']
    },

    colors:{
      "bright-red": "hsl(12, 88%, 59%)",
      "dark-blue": "hsl(228, 39%, 23%)",
      "dark-grayish-blue": "hsl(227, 12%, 61%)",
      "vary-dark-blue": "hsl(233, 12%, 13%)",
      "vary-pale-red": "hsl(13, 100%, 96%)",
      "vary-light-gray": "hsl(0, 0%, 98%)",
      
    },

    backgroundImage:{
      "close-menu": "url('../src/images/icon-close.svg')",
      "open-menu": "url('../src/images/icon-hamburger.svg')",
    },


  },
  },
  plugins: [],
}

