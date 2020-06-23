import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    image: {
      height: 345,
      borderColor: "black",
      borderWidth: 1,
    },
    imageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 350,
      justifyContent: "center",
      alignItems: "center",
    },
    events: {
      fontFamily: "Verdana",
      paddingTop: 10,
      fontSize: 18,
      textAlign: "left",
      marginLeft: 10,
      color: "#282828",
    },
    eventsTitle: {
      fontFamily: "Verdana",
      paddingTop: 15,
      fontSize: 20,
      textAlign: "center",
      textDecorationLine: "underline",
      color: "#282828",
    },
    perfect: {
      color: "white",
      fontFamily: "Verdana",
      fontSize: 25,
      fontStyle: "italic",
    },
  });

  export default styles; 