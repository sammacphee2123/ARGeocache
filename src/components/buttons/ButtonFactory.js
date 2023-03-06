import ActionButtonFactory from './ActionButtonFactory';
import BackButtonFactory from './BackButtonFactory';
import MessageButtonFactory from './MessageButtonFactory';
import NavigationButtonFactory from './NavigationButtonFactory';

export default class ButtonFactory {
  _getButtonFactory(action, navigation, navigationLocation, message) {
    if (navigation && navigationLocation === -1) {
      return new BackButtonFactory();
    } else if (navigation) {
      return new NavigationButtonFactory();
    } else if (action) {
      return new ActionButtonFactory();
    } else if (message) {
      return new MessageButtonFactory();
    }
  }

  createButton({action, navigation, navTo, message, buttonStyle}) {
    return this._getButtonFactory(
      action,
      navigation,
      navTo,
      message,
    ).createButton(action, navigation, navTo, message, buttonStyle);
  }
}
