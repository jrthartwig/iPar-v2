import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import frontNine from "../screens/FrontNine/FrontNine";
import Home from "../screens/Home/Home";
import backNine from "../screens/BackNine/BackNine";
import { Link, Route } from "react-router-native";
import FrontNine from "../screens/FrontNine/FrontNine";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={
        ({ activeTintColor: "#A9A9A9" },
        {
          labelStyle: { fontSize: 16, fontFamily: "Verdana", color: "#51130d" },
        })
      }
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Front 9" component={frontNine} />
      <Tab.Screen name="Back 9" component={backNine} />
    </Tab.Navigator>
  );
};

const newTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Route path="/home" component={Home} />
        <Route path="/frontnine" component={frontNine} />
        <Route path="/backnine" component={backNine} />
      </View>
      <View style={styles.tabs}>
        <Link to="/home" style={styles.link} underlayColor={"rgb(245, 245, 245)"}>
          <Text style={styles.text}>Home</Text></Link>
        <Link to="/frontnine" style={styles.link} underlayColor={"rgb(245, 245, 245)"}><Text style={styles.text}>Front 9</Text></Link>
        <Link to="/backnine" style={styles.link} underlayColor={"rgb(245, 245, 245)"}><Text style={styles.text}>Back 9</Text></Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  tabs: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    flex: 1,
    flexBasis: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "transparent"
  },
  text: {
    color: "#51130d",
    fontSize: 16,
    fontFamily: "Verdana",
  }
})


export default Tabs;
