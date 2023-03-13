export default class ButtonStyle {
  _style: Object
  _graphic: JSX.Element

  constructor(style: Object, graphic: JSX.Element) {
    this._style = style;
    this._graphic = graphic;
  }

  get style(): Object {
    return this._style;
  }

  get graphic(): JSX.Element {
    return this._graphic;
  }
}
