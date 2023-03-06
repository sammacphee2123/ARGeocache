import ActionButtonFactory from './ActionButtonFactory';
import BackButtonFactory from './BackButtonFactory';
import NavigationButtonFactory from './NavigationButtonFactory';

export default class ButtonFactory {
  _getButtonFactory(action, navigation, navigationLocation, successMessage) {
    if (navigation && navigationLocation === -1) {
      return new BackButtonFactory();
    } else if (navigation) {
      return new NavigationButtonFactory();
    } else if (action || successMessage) {
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
    return this._getButtonFactory(
      action,
      navigation,
      navTo,
      successMessage,
    ).createButton(
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
