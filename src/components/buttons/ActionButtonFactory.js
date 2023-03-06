import ActionButton from './ActionButton';

export default class ActionButtonFactory {
  createButton(
    buttonStyle,
    action,
    _navigation,
    _navTo,
    successMessage,
    failMessage,
  ) {
    return new ActionButton(buttonStyle, action, successMessage, failMessage);
  }
}
