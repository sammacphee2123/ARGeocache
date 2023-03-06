import React from 'react';
import {TouchableOpacity} from 'react-native';

export default class Button {
  constructor(buttonStyle) {
    this.buttonStyle = buttonStyle;
  }

  _createComponent(action) {
    return (
      <TouchableOpacity style={this.buttonStyle?.style} onPress={action}>
        {this.buttonStyle?.graphic}
      </TouchableOpacity>
    );
  }

  get component() {
    return this._component;
  }
}
