import React from 'react';
import {Text} from 'react-native';
import ButtonStyle from './ButtonStyle';

export default class TextButtonStyle extends ButtonStyle {
  constructor(text) {
    super(
      {
        padding: 10,
      },
      <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
        {text}
      </Text>,
    );
  }
}
