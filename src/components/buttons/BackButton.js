import Button from './Button';
import IconButtonStyle from './IconButtonStyle';

export default class BackButton extends Button {
  constructor(navigation) {
    super(
      new IconButtonStyle(require('./../../../data/images/back.png'), null, 35),
    );
    this._component = this._createComponent(navigation.goBack);
  }
}
