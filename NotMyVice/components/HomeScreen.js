// HomeScreen.js
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import TimerContext from './TimerContext.js';
import HomeContent from './HomeContent.js';
const Tab = createBottomTabNavigator();



function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeContent} />
      <Tab.Screen name="My Vices" component={TabOne} />
      <Tab.Screen name="Milestones" component={TabTwo} />
      <Tab.Screen name="About Us" component={TabThree} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
