import {Alert} from 'react-native';

export default class BackButton extends Button {
  constructor(navigation) {
    super(
      null,
      <Image
        source={require('../../data/images/back.png')}
        style={{width: 35, height: 35, marginLeft: 2}}
      />,
    );
    this._component = super._createComponent(navigation.goBack);
  }
}
