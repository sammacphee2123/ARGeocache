import {TouchableOpacity} from 'react-native';

export default class Button {
  constructor(style, graphic) {
    this.style = style;
    this.graphic = graphic;
  }

  _createComponent(action) {
    return (
      <TouchableOpacity style={this.style} activeOpacity={0.5} onPress={action}>
        {this.graphic}
      </TouchableOpacity>
    );
  }

  get component() {
    return this._component;
  }
}
