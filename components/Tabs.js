import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hole from '../screens/Hole';
import Scorecard from '../screens/Scorecard';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = props => {    

    return (
        <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 20, fontFamily: 'Verdana', color: '#51130d'}}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Holes" component={Hole} />
            <Tab.Screen name="Scorecard" component={Scorecard} />
        </Tab.Navigator>
    )
};

export default Tabs