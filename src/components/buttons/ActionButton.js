import {Alert} from 'react-native';
import Button from './Button';

export default class ActionButton extends Button {
  constructor(action, successMessage, buttonStyle) {
    super(async () => {
      const errorMessage = await action();
      if (errorMessage) {
        Alert.alert(null, errorMessage);
      } else {
        Alert.alert(successMessage);
      }
    }, buttonStyle);
  }
}
