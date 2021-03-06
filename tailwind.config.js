module.exports = {
  content: [
    './src/pages/*.html',
  ],
  theme: {
    dropShadow: {
      '3xl': '0px 0px 14px rgba(145, 149, 154, 0.12);',
    },
    backgroundImage: {
      'goalsHeader': "url('/src/assets/0513151511.jpg')",
      'reportHeader': "url('/src/assets/image17.jpg')",
    },
    screens: {
      'lg': {'max': '1119px'},
      'md': {'max': '767px'},
      'md550': {'max': '550px'},
      'sm': {'max': '424px'}
    },
    extend: {
      fontSize: {
        '18p': ['18px', {
          lineHeight: '27px',
        }],
        '56p': ['56px', {
          lineHeight: '60px',
        }],
        '23p': ['23px', {
          lineHeight: '24px',
        }],
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
