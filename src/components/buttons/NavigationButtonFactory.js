import NavigationButton from './NavigationButton';

export default class NavigationButtonFactory {
  createButton(
    buttonStyle,
    action,
    navigation,
    navigationLocation,
    successMessage,
    failMessage,
  ) {
    return new NavigationButton(
      buttonStyle,
      action,
      navigation,
      navigationLocation,
      successMessage,
      failMessage,
    );
  }
}
