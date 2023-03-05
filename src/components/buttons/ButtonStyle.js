export default class ButtonStyle {
  static namedButtonStyle(name, styleOverrides) {
    let style;
    switch (name) {
      case 'center':
        style = {
          width: '40%',
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2AAA8A',
        };
    }
    return {...style, ...styleOverrides};
  }
}
