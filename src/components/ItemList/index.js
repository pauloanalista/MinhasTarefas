import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ItemContainer } from '../ItemList/style';
import { ItemText } from '../ItemList/ItemText';
import Radio from '../Radio';
import { Ionicons } from "@expo/vector-icons";
export function ItemList({ title, category }) {
  //console.warn('teste');
  return (
    <ItemContainer style={styles.itemContainer}>
      <Radio style={styles.radio}></Radio>
      <View style={styles.titulo}>
        <ItemText title={title} category={category} />
        <Ionicons  name="star-outline" />
      </View>
    </ItemContainer>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",

    //alignItems: 'flex-start',
    margin: 5
  },



  radio: {
    //flex: 1,
    fontSize: 20
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  titulo: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 8,
    paddingLeft: 10,
    //fontSize:100

  },

  favorito: {
    //flex: 1,
    fontSize: 20
  }
});