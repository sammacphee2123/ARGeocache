import React from 'react';
import {Image} from 'react-native';
import Button from './Button';

export default class BackButton extends Button {
  constructor(navigation) {
    super(
      null,
      <Image
        source={require('./../../../data/images/back.png')}
        style={{width: 35, height: 35, marginLeft: 2}}
      />,
    );
    this._component = this._createComponent(navigation.goBack);
  }
}
