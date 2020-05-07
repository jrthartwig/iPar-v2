import React from 'react'; 
import { View, Text, TextInput, StyleSheet } from 'react-native'; 
import holeJson from '../holeData';
import Card from '../components/Card'


const Hole = props => {

return (
        <View style={styles.screen}>

                    <Card styles={styles.holeWrapper}>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[0].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[0].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[1].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[1].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[2].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[2].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[3].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[3].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[4].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[4].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[5].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[5].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[6].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[6].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[7].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[7].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
                    <Card>
                            <Text style={styles.text}>Hole:</Text>
                            <Text style={styles.text}>{holeJson.holes[8].number}</Text>
                            <Text style={styles.text}>Par:</Text>
                            <Text style={styles.text}>{holeJson.holes[8].par}</Text>
                            <Text style={styles.text}>Score:</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="number-pad" maxLength={1}/>    
                    </Card>
     </View>
    )

     }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    holeWrapper: {
        padding: 15,
        borderColor: 'black',
        borderWidth: .5,
    },
    text: {
        fontFamily: 'Marker Felt',
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