import NavigationButton from './NavigationButton';

export default class NavigationButtonFactory extends ButtonFactory {
  createButton({
    style,
    graphic,
    action,
    navigation,
    navigationLocation,
    _,
    failMessage,
  }) {
    return new NavigationButton(
      style,
      graphic,
      action,
      navigation,
      navigationLocation,
      failMessage,
    );
  }
}
