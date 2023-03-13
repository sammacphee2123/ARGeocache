import {Alert} from 'react-native';
import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';

export default class NavigationButton extends Button {
  constructor(
    action: Function,
    navigation: any,
    navigateOnSuccess: String,
    successMessage: String | null,
    buttonStyle: ButtonStyle,
  ) {
    super(async () => {
      if (action) {
        const errorMessage = await action();
        if (errorMessage) {
          Alert.alert(errorMessage);
          return;
        }
      }
      navigation.navigate(navigateOnSuccess);
      if (successMessage) {
        Alert.alert(successMessage);
      }
    }, buttonStyle);
  }
}
