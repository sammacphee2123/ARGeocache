import BackButton from './BackButton';

export default class BackButtonFactory {
  createButton(_action, navigation, _navTo, _successMessage, _buttonStyle) {
    return new BackButton(navigation);
  }
}
