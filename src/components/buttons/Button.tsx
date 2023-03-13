import React from 'react';
import {TouchableOpacity} from 'react-native';
import ButtonStyle from './button-styles/ButtonStyle';

export default class Button {
  buttonStyle: ButtonStyle
  action: Function

  constructor(action: Function, buttonStyle: ButtonStyle) {
    this.buttonStyle = buttonStyle;
    this.action = action;
  }

  get component(): JSX.Element {
    return (
      <TouchableOpacity style={this.buttonStyle.style} onPress={this.action}>
        {this.buttonStyle.graphic}
      </TouchableOpacity>
    );
  }
}
