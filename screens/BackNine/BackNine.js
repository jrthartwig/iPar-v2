import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import backNineData from "../../backNineData";
import Card from "../../components/Card/Card";
import BackNineModal from "../../components/BackNineModal/BackNineModal";
import HoleDetail from "../HoleDetail/HoleDetail";
import styles from './BackNineStyles';


const BackNine = (props) => {
  const [scorecardView, setScorecardView] = useState(false);
  const [holes, setHoles] = useState(backNineData);
  const [holeDetail, setHoleDetail] = useState(false);


  const onClickHandler = () => {
    setScorecardView(true);
  };

  const onExitHandler = () => {
    setScorecardView(false);
  };

  const onCloseHandler = () => {
    setHoleDetail(false);
  }

  const onPressHandler = () => {
    setHoleDetail(true);
  };

  const scoreTally = (t, {score}) => t + score;

  const updateScore = (score, index) => {
    let updateHoles = [...holes]
    updateHoles[index].score = score === '' ? 0 : parseInt(score);
    setHoles(updateHoles)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.scrollWrapper}>
      <View style={styles.titleWrapper}><Text style={styles.title}>Back Nine</Text></View>
        {holes && holes.map((hole, index) => (
         <TouchableOpacity key={index} onPress={onPressHandler}>
           <HoleDetail visible={holeDetail} onClose={onCloseHandler}/>
            <Card styles={styles.holeWrapper}>
              <Text style={styles.text}>Hole:</Text>
              <Text style={styles.text}>{hole.number}</Text>
              <Text style={styles.text}>Par:</Text>
              <Text style={styles.text}>{hole.par}</Text>
              <Text style={styles.text}>Score:</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(newValue) => updateScore(newValue, index)}
                defaultValue={hole.score.toString()}
              />
            </Card>
          </TouchableOpacity>
        ))}
        <Card style={styles.totalWrapper}>
          <Text style={styles.text}>{Object.values(holes).reduce(scoreTally, 0)}</Text>
          <TouchableOpacity style={styles.button} onPress={onClickHandler}>
            <Text style={styles.buttonText}>View Scorecard</Text>
          </TouchableOpacity>
          <BackNineModal visible={scorecardView} onExit={onExitHandler} />
        </Card>
      </View>
    </View>
  );
};

export default BackNine;
