import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ItemContainer, ItemText} from '../ItemList/style';

export function ItemList({ title }) {
  //console.warn('teste');
  return (
    <ItemContainer style={{flex: 1}}>
      <ItemText>{title}</ItemText>
    </ItemContainer>
  )
}
