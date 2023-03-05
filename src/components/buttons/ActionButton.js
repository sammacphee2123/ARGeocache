import {Alert} from 'react-native';

export default class ActionButton extends Button {
  constructor(style, graphic, action, successMessage, failMessage) {
    super(style, graphic);
    this._component = super._createComponent(() => {
      try {
        if (!action || action()) {
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
