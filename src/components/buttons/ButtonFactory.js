import BackButtonFactory from './BackButtonFactory';
import NavigationButtonFactory from './NavigationButtonFactory';

export default class ButtonFactory {
  _getButtonFactory(action, navigation, navigationLocation) {
    if (navigation && navigationLocation === -1) {
      return new BackButtonFactory();
    } else if (navigation) {
      return new NavigationButtonFactory();
    } else if (action) {
      return new ActionButtonFactory();
    }
  }

  createButton({
    style,
    graphic,
    action,
    navigation,
    navTo,
    successMessage,
    failMessage,
  }) {
    return this._getButtonFactory(action, navigation, navTo).createButton(
      style,
      graphic,
      action,
      navigation,
      navTo,
      successMessage,
      failMessage,
    );
  }
}
