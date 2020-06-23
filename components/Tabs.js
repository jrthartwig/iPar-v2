import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import frontNine from '../screens/FrontNine/FrontNine';
import Home from '../screens/Home/Home';
import backNine from '../screens/BackNine/BackNine'

const Tab = createBottomTabNavigator();

const Tabs = props => {    

    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#A9A9A9'},{labelStyle: {fontSize: 16, fontFamily: 'Verdana', color: '#51130d'}}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Front 9" component={frontNine} />
            <Tab.Screen name="Back 9" component={backNine} />
        </Tab.Navigator>
    )
};

export default Tabs