import ActionButton from './ActionButton';

export default class ActionButtonFactory {
  createButton(
    style,
    graphic,
    action,
    _navigation,
    _navTo,
    successMessage,
    failMessage,
  ) {
    return new ActionButton(
      style,
      graphic,
      action,
      successMessage,
      failMessage,
    );
  }
}
