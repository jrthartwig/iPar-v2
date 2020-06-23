import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from './HomeStyles';

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../../images/noblehawk.jpg")} />
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

export default Home;
