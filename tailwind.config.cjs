/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'lg2': { 'max': '900px' },
      // => @media (max-width: 900px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '690px' },

      'extra': { 'max': '410px' },
      // => @media (max-width: 690px) { ... }
    },

    container: {
      center: true,
      screens: {
        xl: "calc(1140px + 6rem)"
      },

    },
    extend: {
      backgroundImage: {
        'header-background': "linear-gradient(180deg, rgba(25, 25, 25, 0) 39.36%, rgba(25, 25, 25, 0.132292) 39.37%, #191919 100%), url('/src/assets/images/header.png')",
        'speleo-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, #191919 100%), url('/src/assets/images/speleo-bg.png')",
        'pvd-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 39.36%, rgba(25, 25, 25, 0.132292) 39.37%, #191919 100%), url('/src/assets/images/pvd-bg.png')",
        'canyoning-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.25) 0%, #191919 100%), url('/src/assets/images/pvd-asset-1.png')",
        'respect-background': "linear-gradient(180deg, #191919 0%, rgba(25, 25, 25, 0.5) 100%), url('/src/assets/images/respect.png')",
        'reviews-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.39) 0%, rgba(25, 25, 25, 0.39) 100%), url('/src/assets/images/reviews.png')",
        'tours-background': "linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 100%), url('/src/assets/images/main/header.png')",
        'tour-1-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-1.png')",
        'tour-2-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-2.png')",
        'tour-3-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-3.png')",
        'tour-4-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-4.png')",
        'tour-5-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-5.png')",
        'tour-6-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-6.png')",
        'tour-7-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-7.png')",
        'tour-8-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-8.png')",
        'tour-9-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-9/tour9-bg.jpg')",
        'tour-10-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-10/tour10-bg.jpg')",
        'tour-11-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-11/tour11-bg.jpg')",
        'tour-12-background': "linear-gradient(180deg, rgba(25, 25, 25, 0.2) 0%, rgba(25, 25, 25, 1) 100%), url('/src/assets/images/tour-12/tour12-bg.jpg')",
      },
      container: {
        padding: '3rem',
      },
      colors: {
        'primary-green': '#90D156',
        'gray-bgc': '#191919',
        'gray-2-bgc': '#1E1E1E',
        'gray-3-bgc': '#0F0F0F',
      },
      spacing: {
        '3.5': '0.875rem',
        '4.25': '1.08rem',
        '4.5': '1.125rem',
        '5.5': '1.35rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '34': '8.5rem',
        '62': '15.5rem',
        '68': '17rem',
        '70': '17.5rem',
        '76': '19rem',
        '86': '21rem',
        '92': '22.5rem',
        '102': '25rem',
        '106': '26rem',
        '110': '27rem',
        '112': '28rem',
        '130': '30rem',
        '135': '31rem',
        '140': '32rem',
        '145': '33rem',
        '150': '34rem',
        '160': '36rem',
        '161': '36.25rem',
        '162': '36.5rem',
        '165': '37rem',
        '170': '38rem',
        '200': '43.75rem',
        'heading': '4.25rem',
        'photo': '3rem',
        'decor': '2.75rem',
        'subh': '2.5rem',
        'info': '2.5rem',
        'text': '2.25rem',
        'paragraph': '2.25rem',
        'arrow': '2rem',
        'price': '2rem',
        'terh': '1.25rem',
      },
      fontSize: {
        'lg-sm': '1.2rem',
        '1.5xl': '1.45rem',
        '2.25xl': '1.635rem',
        '2.5xl': '1.725rem',
        '3.25xl': '1.95rem',
        '3.5xl': '2rem',
        '4.5xl': '2.55rem',
        '5.5xl': '3.125rem',
        '7.25xl': '4.8rem',
        '7.5xl': '5rem',
        'subh': '2rem'
      },
      lineHeight: {
        'more-loose': "2.25",
        'extra-loose': "2.5",
        'extra2-loose': "2.75",
      },
      maxWidth: {
        '2.5xl': '44rem',
        '0.5xl': '34rem',
      },
      boxShadow: {
        'btn-light': '0px 0px 14px 0px rgba(144, 209, 86, 0.5)',
      }
    },
  },
  plugins: [],
}
