import React from 'react';
import {Image, Text} from 'react-native';
import ButtonStyle from './ButtonStyle';

export default class IconButtonStyle extends ButtonStyle {
  constructor(image: String, text: String | null, iconSize: number = 40) {
    super(
      {...{alignItems: 'center'}},
      <>
        <Image
          source={image}
          style={{
            width: iconSize,
            height: iconSize,
            aspectRatio: 1,
            resizeMode: 'stretch',
          }}
        />
        {text ? (
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {text}
          </Text>
        ) : null}
      </>,
    );
  }
}
