import BackButton from './BackButton';

export default class BackButtonFactory {
  createButton(
    _style,
    _graphic,
    _action,
    navigation,
    _navTo,
    _successMessage,
    _failMessage,
  ) {
    return new BackButton(navigation);
  }
}
