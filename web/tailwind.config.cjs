/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    screens: {
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { 'max': '1313px'},
        
      ],
      'lg': '1313px',
    },
    extend: {
      colors: {
        'green': '#00875F',
        'green-light': '#00B37E',
        'gray1': '#202024',
        'gray2': '#323238',
        'gray3': '#7C7C8A',
        'gray4': '#E1E1E6',
        'gray5': '#121214',
        'white': '#FFFFFF',

      }
    },
  },
  plugins: [],
}
