import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        flexDirection: 'row',
        backgroundColor: 'white', 
        padding: 12,
        borderRadius: 10,
        alignSelf: 'stretch',
        width: 450,
        justifyContent: 'center',
        borderBottomWidth: .5,
        borderBottomColor: "#A9A9A9"
    }

})

export default Card