import React from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import styles from './HoleDetailStyles';

const HoleDetail = (props) => {

  const handleOnPress = () => {
    const { onClose } = props;
    onClose && onClose();
  }

  return (
    <Modal visible={!!props.hole}>
      {props.hole &&
        <View style={styles.screen}>
          <View>
            <Text>This is a hole</Text>
          </View>
          <View><Text>{props.hole.number}</Text></View>
          <View>
            <Button title="close" onPress={handleOnPress} />
          </View>
        </View>
      }
    </Modal>
  );
};



export default HoleDetail;
