import {Alert} from 'react-native';
import Button from './Button';
import ButtonStyle from './button-styles/ButtonStyle';

export default class MessageButton extends Button {
  constructor(message: String, buttonStyle: ButtonStyle) {
    super(() => Alert.alert(message), buttonStyle);
  }
}
