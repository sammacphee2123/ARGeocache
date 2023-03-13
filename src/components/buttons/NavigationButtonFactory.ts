import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';
import NavigationButton from './NavigationButton';

export default class NavigationButtonFactory {
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
    return new NavigationButton(
      action,
      navigation,
      navTo,
      message,
      buttonStyle,
    );
  }
}
