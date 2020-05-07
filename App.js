import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Hole from './components/Hole';
import GetScoreButton from './components/GetScoreButton'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Noble Hawk" />
      <ScrollView>
      <Hole />
      <GetScoreButton style={styles.button} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
