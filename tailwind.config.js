// const spacingGen = () => {
//   let result = {}
//   for (let i = 2; i < 400; i++) {
//     result[`${i}p`] = `${i}px`;
//   }
//
//   return result;
// };

module.exports = {
  content: [
    './src/pages/*.html',
  ],
  theme: {
    backgroundImage: {
      'goalsHeader': "url('C:/Users/Администратор/WebstormProjects/pinua.dev/src/assets/0513151511.jpg')",
      'reportHeader': "url('C:/Users/Администратор/WebstormProjects/pinua.dev/src/assets/image17.jpg')",
    },
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
        '56p': ['56px', {
          lineHeight: '60px',
        }],
        '23p': ['23px', {
          lineHeight: '24px',
        }],
      },
      // spacing: spacingGen(),
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
