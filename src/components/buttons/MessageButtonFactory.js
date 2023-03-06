import MessageButton from './MessageButton';

export default class MessageButtonFactory {
  createButton(_action, _navigation, _navTo, message, buttonStyle) {
    return new MessageButton(message, buttonStyle);
  }
}
