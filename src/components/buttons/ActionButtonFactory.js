import ActionButton from './ActionButton';

export default class ActionButtonFactory extends ButtonFactory {
  createButton({style, graphic, action, _, _, successMessage, failMessage}) {
    return new ActionButton(
      style,
      graphic,
      action,
      successMessage,
      failMessage,
    );
  }
}
