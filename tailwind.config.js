const spacingGen = () => {
  let result = {}
  for (let i = 2; i < 400; i++) {
    result[`${i}p`] = `${i}px`;
  }

  return result;
};

module.exports = {
  content: [
    './src/pages/*.html',
  ],
  theme: {
    screens: {
      'lg': {'max': '1119px'},
      'md': {'max': '767px'},
      'sm': {'max': '424px'}
    },
    extend: {
      fontSize: {
        '18p': ['18px', {
          lineHeight: '27px',
        }],
      },
      spacing: spacingGen(),
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
