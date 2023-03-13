import {Alert} from 'react-native';
import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';

export default class ActionButton extends Button {
  constructor(
    action: Function,
    successMessage: String,
    buttonStyle: ButtonStyle,
  ) {
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
