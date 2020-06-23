import React from 'react';
import {View, Button, StyleSheet} from 'react-native'; 
import styles from './GetScoreButtonStyles'; 

const GetScoreButton = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.button}><Button color="white" title="Get Score" /></View>
        </View>
    )
}

export default GetScoreButton 