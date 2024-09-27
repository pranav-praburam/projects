// TabOne.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function BoxScreen({ navigation }) {
  return (
<View style={styles.container}>
<TouchableOpacity style={[styles.box, {backgroundColor: 'red'}]} onPress={() => navigation.navigate('Cigarettes')}>
<Text style={styles.boxText}>Cigarettes</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box, {backgroundColor: 'blue'}]} onPress={() => navigation.navigate('Vaping')}>
<Text style={styles.boxText}>Vaping</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box, {backgroundColor: 'green'}]} onPress={() => navigation.navigate('Alcohol')}>
<Text style={styles.boxText}>Alcohol</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.box, {backgroundColor: 'orange'}]} onPress={() => navigation.navigate('Gambling')}>
<Text style={styles.boxText}>Gambling</Text>
</TouchableOpacity>
</View>
  );
}

function Box1() {
  return <Text style={styles.contentText}>Quitting Cigarettes is very difficult and is statiscally one of the hardest addictions to kill. 1 in 5 Americans die of 
    smoking related illnesses. The average smoker will die 10 years earlier than a non-smoker. The good news is that quitting smoking can
    greatly reduce your risk of developing lung cancer, heart disease, and other serious health conditions. The bad news is that quitting
    smoking is very difficult. Nicotine is highly addictive and can cause withdrawal symptoms such as irritability, anxiety, and depression.
    Luckily, this app is here to help you quit smoking and live a healthier life. ~ Pranav Praburam</Text>;
}

function Box2() {
  return <Text style={styles.contentText}>Vaping although new, does not mean healthy. Although our knowledge on the long-term effects of vaping are unclear, we know that the nicotine levels
    in one vape are comparable to that of smoking at least 50 cigarettes. Vaping can also lead to popcorn lung, a condition that causes scarring in the lungs,
    and is a condition that's affecting people of all ages. Vaping can also lead to addiction, and can be a gateway to smoking. If you're looking to quit vaping,
    you came to the right place. This app will help you quit vaping and live a healthier life. ~ Pranav Praburam
  </Text>;
}

function Box3() {
  return <Text style={styles.contentText}>Although it's socially acceptable at times, alcohol is not joke. In fact, it is the only drug which can kill heavy users if they try to quit
    cold turkey. With that being said, this app is here to help you taper off alcohol in a healthy manner, and will help hold yourself accountable,
    for your own sake and your liver's. This app will help you quit alcohol and live a healthier life. ~ Pranav Praburam
  </Text>;
}

function Box4() {
  return <Text style={styles.contentText}>Gambling, also known as the silent killer. Although it poses no adverse physical health effects, mentally it is a very taxing habit.
    Research has shown that gambling can change the risk and reward centers in the brain, and can lead to addiction. This app is here to help you quit gambling,
    and to help hold yourself accountable. This app will help you quit gambling and live a healthier life. ~ Pranav Praburam
  </Text>;
}

const Stack = createStackNavigator();

function TabOne() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BoxScreen" component={BoxScreen}  />
      <Stack.Screen name="Cigarettes" component={Box1} />
      <Stack.Screen name="Vaping" component={Box2} />
      <Stack.Screen name="Alcohol" component={Box3} />
      <Stack.Screen name="Gambling" component={Box4} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  box: {
    width: '80%', // Reduced width
    height: 70, // Increased height
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20, // Added rounded corners
    // backgroundColor is now set individually for each box below
  },
  boxText: {
    color: '#fff',
    fontSize: 40
  },
  contentText: { // New style for the content text
    fontSize: 40, // Increased font size
    textAlign: 'justify', // Justify text for better readability
    margin: 40, // Add margin to prevent text from touching the edges
    flex: 1 // Make text take up most of the screen
  }
});

export default TabOne;
