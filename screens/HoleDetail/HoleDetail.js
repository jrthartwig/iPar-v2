import React from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import styles from './HoleDetailStyles';

const HoleDetail = (props) => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.screen}>
        <View>
          <Text>This is a hole</Text>
        </View>
        <View>
          <Button title="close" onPress={props.onClose} />
        </View>
      </View>
    </Modal>
  );
};



export default HoleDetail;
