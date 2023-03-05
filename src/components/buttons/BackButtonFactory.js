import BackButton from './BackButton';

export default class BackButtonFactory extends ButtonFactory {
  createButton(_, _, _, navigation, _, _, _) {
    return new BackButton(navigation);
  }
}
