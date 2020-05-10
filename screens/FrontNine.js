import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import frontNineData from "../frontNineData";
import Card from "../components/Card";
import FrontNineModal from "../components/FrontNineModal";

const FrontNine = (props) => {
  const [scores, setScores] = useState([0]);
  const [scorecardView, setScorecardView] = useState(false); 

  const onClickHandler = () => {
    setScorecardView(true);
  };

  const onExitHandler = () => {
    setScorecardView(false);
  };

  const onChangeInputHandler = (enteredScore) => {
    if (enteredScore) setScores(scores.concat([parseInt(enteredScore)]));
  };

  const onPressHandler = () => {
    alert("You pressed this");
  };

  const scoreTally = (total, score) => total + score;
  

  return (
    <View style={styles.screen}>
      <View style={styles.scrollWrapper}>
        {frontNineData.map((hole, index) => (
          <TouchableOpacity onPress={onPressHandler}>
            <Card key={index} styles={styles.holeWrapper}>
              <Text style={styles.text}>Hole:</Text>
              <Text style={styles.text}>{hole.number}</Text>
              <Text style={styles.text}>Par:</Text>
              <Text style={styles.text}>{hole.par}</Text>
              <Text style={styles.text}>Score:</Text>
              <TextInput
                style={styles.input}
                value={hole.score}
                onChangeText={onChangeInputHandler}
                placeholder="0"
                keyboardType="number-pad"
                maxLength={1}
              />
            </Card>
          </TouchableOpacity>
        ))}
        <Card style={styles.totalWrapper}>
          <Text style={styles.text}>{scores.reduce(scoreTally)}</Text>
          <TouchableOpacity style={styles.button} onPress={onClickHandler}>
            <Text style={styles.buttonText}>View Scorecard</Text>
          </TouchableOpacity>
          <FrontNineModal newScores={scores} visible={scorecardView} onExit={onExitHandler} />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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

export default FrontNine;
