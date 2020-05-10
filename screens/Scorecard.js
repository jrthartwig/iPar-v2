import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Scorecard = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.scorecard}>Scorecard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scorecard: {
    fontSize: 40,
    textAlign: "center",
    padding: 10,
  },
});

export default Scorecard;
