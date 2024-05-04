import React from 'react';
import { Text, View } from 'react-native';


export function ItemText({ title, category }) {

    return (
        <View>
            <Text>{title}</Text>
            <Text>{category}</Text>
        </View>
    )
}