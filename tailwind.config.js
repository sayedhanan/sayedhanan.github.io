/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontWeight: '700',
            },
            'h1': { fontSize: '2.25em' },
            'h2': { fontSize: '1.75em' },
            'h3': { fontSize: '1.5em' },
            'strong, b': { fontWeight: '700' },
            'a': {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}