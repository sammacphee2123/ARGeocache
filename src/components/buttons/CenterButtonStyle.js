import React from 'react';
import {Text} from 'react-native';
import ButtonStyle from './ButtonStyle';

export default class CenterButtonStyle extends ButtonStyle {
  constructor(text, backgroundColor = '#2AAA8A', fontSize = 18, width = 180) {
    super(
      {
        width,
        height: (fontSize * 5) / 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
      },
      <Text style={{fontWeight: 'bold', fontSize, color: 'black'}}>
        {text}
      </Text>,
    );
  }
}
