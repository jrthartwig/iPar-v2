import React from 'react'; 
import { View, Text, TextInput, StyleSheet, ScrollView} from 'react-native'; 
import holeJson from '../holeData';
import Card from '../components/Card'


const Hole = props => {
return (
        <View style={styles.screen}>
            
                    <ScrollView>
                        <View style={styles.scrollWrapper}>
                                {holeJson.map((hole, index) => ( 
                                    <Card key={index} styles={styles.holeWrapper}>
                                            <Text style={styles.text}>Hole:</Text>
                                            <Text style={styles.text}>{hole.number}</Text>
                                            <Text style={styles.text}>Par:</Text>
                                            <Text style={styles.text}>{hole.par}</Text>
                                            <Text style={styles.text}>Score:</Text>
                                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                                    </Card>
                                ))}
                        </View>
                    </ScrollView>
            
        </View>
    )

     }

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    scrollWrapper: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        paddingTop: 15
    },
    holeWrapper: {

        borderColor: 'black',
        borderWidth: .5
    },
    text: {
        fontFamily: 'Verdana',
        fontSize: 18,
        flexDirection: 'row',
        padding: 10, 
        textAlign: 'center'
    },
    input: {
        borderColor: '#51130d',
        borderWidth: 1,
        width: 30,
        height: 30,
        textAlign: 'center',
        marginTop: 8
    }
})

export default Hole