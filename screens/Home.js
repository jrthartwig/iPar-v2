import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../images/noblehawk.jpg")} />
      <View style={styles.imageOverlay}>
        <Text style={styles.perfect}>"The Perfect Golf Experience"</Text>
      </View>
      <View style={styles.events}>
        <Text style={styles.eventsTitle}>This Month's Events</Text>
        <Text style={styles.events}>May 3: 2 Person Team Pinehurt Event</Text>
        <Text style={styles.events}>
          May 5: Tuesday 2 Man Scramble League Begins
        </Text>
        <Text style={styles.events}>May 10: Tin Cup Anytime League Starts</Text>
        <Text style={styles.events}>
          May 16: 11th Annual "ScramBowl" Combined Bowling/Golf Event
        </Text>
        <Text style={styles.events}>
          May 21: Thursday Match Play League Begins
        </Text>
        <Text style={styles.events}>
          May 22: Friday Evening 9 Hole Scramble #1
        </Text>
      </View>
    </View>
  );
};

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

export default Home;
