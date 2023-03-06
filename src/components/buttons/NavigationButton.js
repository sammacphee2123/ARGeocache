import {Alert} from 'react-native';
import Button from './Button';

export default class NavigationButton extends Button {
  constructor(
    style,
    graphic,
    action,
    navigation,
    navigateOnSuccess,
    successMessage,
    failMessage,
  ) {
    super(style, graphic);
    this._component = this._createComponent(async () => {
      try {
        if (!action || (await action())) {
          navigation.navigate(navigateOnSuccess);
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
