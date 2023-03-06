import NavigationButton from './NavigationButton';

export default class NavigationButtonFactory {
  createButton(
    action,
    navigation,
    navigationLocation,
    successMessage,
    buttonStyle,
  ) {
    return new NavigationButton(
      action,
      navigation,
      navigationLocation,
      successMessage,
      buttonStyle,
    );
  }
}
