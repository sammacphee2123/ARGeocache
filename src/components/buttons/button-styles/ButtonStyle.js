export default class ButtonStyle {
  constructor(style, graphic) {
    this._style = style;
    this._graphic = graphic;
  }

  get style() {
    return this._style;
  }

  get graphic() {
    return this._graphic;
  }
}
