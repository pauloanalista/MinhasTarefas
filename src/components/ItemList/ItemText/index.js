import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function ItemText({ title, category }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{category}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        width: '90%',
    },
    subtitle: {
        width: '90%'
    },

});