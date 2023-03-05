import {Alert} from 'react-native';

export default class NavigationButton extends Button {
  constructor(
    style,
    graphic,
    action,
    navigation,
    navigateOnSuccess,
    failMessage,
  ) {
    super(style, graphic);
    this._component = super._createComponent(() => {
      try {
        if (!action || action()) {
          navigation.navigate(navigateOnSuccess);
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
