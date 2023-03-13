import React from 'react';
import {Text} from 'react-native';
import ButtonStyle from './ButtonStyle';

export default class CenterButtonStyle extends ButtonStyle {
  constructor(text: String, backgroundColor: String = '#2AAA8A', fontSize: number = 18, width: number = 180) {
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
