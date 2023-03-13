import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';
import MessageButton from './MessageButton';

export default class MessageButtonFactory {
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
    return new MessageButton(message, buttonStyle);
  }
}
