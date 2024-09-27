// PA.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.js';
import { TimerProvider } from './TimerContext.js';

const Stack = createNativeStackNavigator();

function App() {
  const [startTimer, setStartTimer] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [quitTimes, setQuitTimes] = React.useState({smoking: new Date().getTime()});
  return (
    <TimerProvider value={{ startTimer, setStartTimer, seconds, setSeconds, quitTimes, setQuitTimes}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="NotMyVice" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TimerProvider>
  );
}


export default App;
