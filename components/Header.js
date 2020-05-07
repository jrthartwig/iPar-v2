import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'; 

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 120, 
        paddingTop: 36, 
        backgroundColor: '#51130d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Marker Felt'
    }


})

export default Header;