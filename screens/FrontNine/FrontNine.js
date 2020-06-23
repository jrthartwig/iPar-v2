import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import frontNineData from "../../frontNineData";
import Card from "../../components/Card/Card";
import FrontNineModal from "../../components/FrontNineModal/FrontNineModal";
import HoleDetail from "../HoleDetail/HoleDetail"
import {AsyncStorage} from "react-native"; 
import styles from './FrontNineStyles';

const _storeHoles = async (holes) => {
  // try {
    await AsyncStorage.setItem('@FrontNine:Holes', JSON.stringify(holes), e => console.log(e));
  //} catch (error) {
  //}
};

const _retrieveHoles = async () => {
  try {
    const value = await AsyncStorage.getItem('@FrontNine:Holes');
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value; 
    }
    else {
      console.log('somethings broken')
    }
  } catch (error) {
    console.log('this is an error')
  }
};

const FrontNine = (props) => {
  const [scorecardView, setScorecardView] = useState(false);
  const [holes, setHoles] = useState(frontNineData);
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
    let updatedScores = holes.map(h => h.score)
    _storeHoles(updatedScores) 
    _retrieveHoles();
  }



  return (
    <View style={styles.screen}>
      <View style={styles.scrollWrapper}>
      <View style={styles.titleWrapper}><Text style={styles.title}>Front Nine</Text></View>
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
          <FrontNineModal visible={scorecardView} onExit={onExitHandler} />
        </Card>
      </View>
    </View>
  );
};

export default FrontNine;
