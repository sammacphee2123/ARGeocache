import ActionButtonFactory from './ActionButtonFactory';
import BackButtonFactory from './BackButtonFactory';
import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';
import MessageButtonFactory from './MessageButtonFactory';
import NavigationButtonFactory from './NavigationButtonFactory';

export default class ButtonFactory {
  createButton({
    action,
    navigation,
    navTo,
    message,
    buttonStyle,
  }: {
    action: Function;
    navigation: any;
    navTo: String | number | null;
    message: String | null;
    buttonStyle: ButtonStyle;
  }): Button {
    let factory: ButtonFactory;
    if (navigation && navTo === -1) {
      factory = new BackButtonFactory();
    } else if (navigation) {
      factory = new NavigationButtonFactory();
    } else if (action) {
      factory = new ActionButtonFactory();
    } else {
      // message must not be null
      factory = new MessageButtonFactory();
    }

    return factory.createButton({
      action,
      navigation,
      navTo,
      message,
      buttonStyle,
    });
  }
}
