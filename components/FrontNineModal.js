import React from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import frontNineData from "../frontNineData";

const FrontNineModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.modal}>
        <View style={styles.title}>
          <Text style={styles.holeTitleText}>Hole</Text>
          <Text style={styles.talonTitleText}>Talon</Text>
          <Text style={styles.augustaTitleText}>Augusta</Text>
          <Text style={styles.whiteTitleText}>White</Text>
          <Text style={styles.redtailTitleText}>Redtail</Text>
          <Text style={styles.seniorTitleText}>Senior</Text>
          <Text style={styles.titleText}>Par</Text>
          <Text style={styles.titleText}>Score</Text>
        </View>
        {frontNineData.map((hole, index) => (
          <View key={index}>
            <Text style={styles.topHoleNumbers}>{hole.number}</Text>
            <Text style={styles.talonYardage}>{hole.talon}</Text>
            <Text style={styles.augustaYardage}>{hole.augusta}</Text>
            <Text style={styles.whiteYardage}>{hole.white}</Text>
            <Text style={styles.redtailYardage}>{hole.redtail}</Text>
            <Text style={styles.seniorYardage}>{hole.senior}</Text>
            <Text style={styles.holeNumbers}>{hole.par}</Text>
            <Text style={styles.holeNumbers}>{hole.score}</Text>
          </View>
        ))}
      </View>
      <View style={styles.button}>
        <Button title="Close" onPress={props.onExit} color="#51130d" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'black', 
    borderTopWidth: 1
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 40
  },
  title: {
    flexDirection: "column"
  },
  titleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
  },
  holeTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#ddd"
  },
  talonTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "black",
    color: 'white'
  },
  augustaTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#006633",
    color: 'white'
  },
  whiteTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#666666",
    color: 'white'
  },
  redtailTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#990033",
    color: 'white'
  }, 
  seniorTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#999900",
    color: 'white'
  },
  holeNumbers: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
  },
  topHoleNumbers: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: "#ddd"
  },
  talonYardage: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: 'black',
    color: 'white' 
  },
  augustaYardage: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: '#006633',
    color: 'white' 
  },
  whiteYardage: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: '#666666',
    color: 'white' 
  },
  redtailYardage: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: '#990033',
    color: 'white' 
  }, 
  seniorYardage: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: '#999900',
    color: 'white'
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: -300,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FrontNineModal;
