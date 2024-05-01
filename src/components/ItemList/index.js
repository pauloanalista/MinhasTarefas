import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ItemContainer} from '../ItemList/style';
import { ItemText} from '../ItemList/ItemText';
import  Radio from '../Radio';
import { Ionicons } from "@expo/vector-icons";
export function ItemList({ title, category }) {
  //console.warn('teste');
  return (
    <ItemContainer style={styles.itemContainer}>
      <Radio style={styles.radio}></Radio>
      
        <ItemText style={styles.itemText} title={title} category={category}/>
      
      <Ionicons style={styles.favorito} name="star-outline"/> 
    </ItemContainer>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "space-around",
    //paddingTop:10,
    margin: 5
  },



  radio: {
    width: '5%',
    fontSize: 20
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
  itemText:{
    width: '90%'
  },
  
  favorito :{
    width: '5%',
    fontSize: 20
  }
});