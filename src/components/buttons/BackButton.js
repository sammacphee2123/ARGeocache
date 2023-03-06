import Button from './Button';
import IconButtonStyle from './button-styles/IconButtonStyle';

export default class BackButton extends Button {
  constructor(navigation) {
    super(
      navigation.goBack,
      new IconButtonStyle(require('./../../../data/images/back.png'), null, 35),
    );
  }
}
