import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header/Header";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.screen}>
        <Header title="Noble Hawk" />
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
