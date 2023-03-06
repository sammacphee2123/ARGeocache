import {Alert} from 'react-native';
import Button from './Button';

export default class NavigationButton extends Button {
  constructor(
    action,
    navigation,
    navigateOnSuccess,
    successMessage,
    buttonStyle,
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
