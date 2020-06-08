import React from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";

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

const styles = StyleSheet.create({
  screen: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 40
      }
});

export default HoleDetail;
