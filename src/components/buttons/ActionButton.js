import {Alert} from 'react-native';
import Button from './Button';

export default class ActionButton extends Button {
  constructor(buttonStyle, action, successMessage, failMessage) {
    super(buttonStyle);
    this._component = this._createComponent(async () => {
      try {
        if (!action || (await action())) {
          if (successMessage) {
            Alert.alert(null, successMessage);
          }
        } else {
          if (failMessage) {
            Alert.alert(null, failMessage);
          }
        }
      } catch (error) {
        if (failMessage) {
          Alert.alert(null, failMessage);
        }
      }
    });
  }
}
