import React from 'react';
import {View, Button, StyleSheet} from 'react-native'; 

const GetScoreButton = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.button}><Button color="white" title="Get Score" /></View>
        </View>
    )


}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center', 

    },

    button: {
        backgroundColor: '#014421',
        width: 140,
        fontFamily: 'Calibri',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderRadius: 15,
        margin: 10,
        borderColor: 'black', 
        borderWidth: 1
}})

export default GetScoreButton 