import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

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
        fontSize: 32,
        fontFamily: 'Verdana',
        fontWeight: 'bold'
    }


})

export default Header;