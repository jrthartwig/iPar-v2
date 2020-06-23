import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screen: {
      flex: 1 
    },
    titleWrapper: {
      flex: 1,
      padding: 1, 
      backgroundColor: 'white',
      alignItems: 'center',
      borderBottomColor: '#A9A9A9',
      borderBottomWidth: 1
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#51130d'
    },
    scrollWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    text: {
      fontFamily: "Verdana",
      fontSize: 18,
      flexDirection: "row",
      padding: 10,
      textAlign: "center",
      color: "#282828",
    },
    input: {
      borderColor: "#51130d",
      borderWidth: 1,
      width: 30,
      height: 30,
      textAlign: "center",
      marginTop: 8,
    },
    totalWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 10,
    },
    button: {
      marginRight: 40,
      marginLeft: 40,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#51130d",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#fff",
      alignContent: "center",
      paddingRight: 10,
      paddingLeft: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });

  export default styles;