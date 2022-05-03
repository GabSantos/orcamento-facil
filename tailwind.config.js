module.exports = {
  content: [
    "./app/**/*.tsx",
    ".app/components/**/*.tsx"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'primary': '#4ED5FF',
      'primary-oppacity': 'rgba(78, 213, 255, 0.5)',
      'bg': '#404040',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'title': ['Roboto']
    },
    extend: {
      dropShadow: {
        center: '4px 4px 12px rgba(0, 0, 0, 0.25)'
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
