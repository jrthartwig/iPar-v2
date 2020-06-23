import React from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import backNineData from "../../backNineData";
import styles from './BackNineModalStyles'; 

const BackNineModal = (props) => {
  return (
    <Modal visible={props.visible} animationType="fade">
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
        {backNineData.map((hole, index) => (
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

export default BackNineModal;
