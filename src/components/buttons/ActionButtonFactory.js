import ActionButton from './ActionButton';

export default class ActionButtonFactory {
  createButton(action, _navigation, _navTo, message, buttonStyle) {
    return new ActionButton(action, message, buttonStyle);
  }
}
