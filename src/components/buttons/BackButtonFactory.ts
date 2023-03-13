import BackButton from './BackButton';
import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';

export default class BackButtonFactory {
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
    return new BackButton(navigation);
  }
}
