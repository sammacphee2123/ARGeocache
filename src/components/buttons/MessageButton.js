import {Alert} from 'react-native';
import Button from './Button';

export default class MessageButton extends Button {
  constructor(message, buttonStyle) {
    super(() => Alert.alert(message), buttonStyle);
  }
}
