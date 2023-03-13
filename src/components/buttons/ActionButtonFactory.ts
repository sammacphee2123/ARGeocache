import ActionButton from './ActionButton';
import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';

export default class ActionButtonFactory {
  createButton({
    action,
    navigation,
    navTo,
    message,
    buttonStyle,
  }: {
    action: Function;
    navigation: any;
    navTo: String;
    message: String;
    buttonStyle: ButtonStyle;
  }): Button {
    return new ActionButton(action, message, buttonStyle);
  }
}
