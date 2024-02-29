/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
  darkMode: 'class',
  colorMode: {
    classSuffix: '',
    classPrefix: '',
    useCustomProperties: true,
    useContrastText: false,
    useRootSelector: false,
  }
}

