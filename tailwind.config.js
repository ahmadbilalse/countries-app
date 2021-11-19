module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
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
      },
      gridTemplateColumns: {
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        'fill-40': 'repeat(auto-fill, minmax(10rem, 1fr))',
        'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
