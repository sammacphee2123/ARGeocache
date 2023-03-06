import NavigationButton from './NavigationButton';

export default class NavigationButtonFactory {
  createButton(
    style,
    graphic,
    action,
    navigation,
    navigationLocation,
    successMessage,
    failMessage,
  ) {
    return new NavigationButton(
      style,
      graphic,
      action,
      navigation,
      navigationLocation,
      successMessage,
      failMessage,
    );
  }
}
