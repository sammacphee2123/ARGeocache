import React from 'react';
import {TouchableOpacity} from 'react-native';

export default class Button {
  constructor(action, buttonStyle) {
    this.buttonStyle = buttonStyle;
    this.action = action;
  }

  get component() {
    return (
      <TouchableOpacity style={this.buttonStyle.style} onPress={this.action}>
        {this.buttonStyle.graphic}
      </TouchableOpacity>
    );
  }
}
