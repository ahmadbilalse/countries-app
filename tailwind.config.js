module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('/search.svg')",
      },
      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(209, 23%, 22%)',
        onPrimary: 'hsl(0, 0%, 100%)',
        background: 'hsl(207, 26%, 17%)',
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
