const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'search-icon': "url('/search.svg')",
      },
      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: '#2B3945',
        secondary: '#404d58',
        onPrimary: '#fff',
        background: '#202C37',
        light: {
          primary: '#FFF',
          secondary: '#DADADA',
          onPrimary: '#111517',
          background: '#FAFAFA',
        }
      },
      gridTemplateColumns: {
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        'fill-40': 'repeat(auto-fill, minmax(10rem, 1fr))',
        'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))',
        'auto-2': 'repeat(2, auto)',
      },
      gridTemplateRows: {
        'auto-2': 'repeat(2, auto)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
