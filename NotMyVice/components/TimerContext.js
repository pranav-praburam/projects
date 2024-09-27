import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [startTimer, setStartTimer] = useState(false);
  const [startTimer2, setStartTimer2] = useState(false);
  const [startTimer3, setStartTimer3] = useState(false);
  const [startTimer4, setStartTimer4] = useState(false);

  // Load timers state from AsyncStorage when component mounts
  useEffect(() => {
    const loadTimers = async () => {
      const savedStartTimer = await AsyncStorage.getItem('startTimer');
      const savedStartTimer2 = await AsyncStorage.getItem('startTimer2');
      const savedStartTimer3 = await AsyncStorage.getItem('startTimer3');
      const savedStartTimer4 = await AsyncStorage.getItem('startTimer4');

      if (savedStartTimer !== null) {
        setStartTimer(JSON.parse(savedStartTimer));
      }
      if (savedStartTimer2 !== null) {
        setStartTimer2(JSON.parse(savedStartTimer2));
      }
      if (savedStartTimer3 !== null) {
        setStartTimer3(JSON.parse(savedStartTimer3));
      }
      if (savedStartTimer4 !== null) {
        setStartTimer4(JSON.parse(savedStartTimer4));
      }
    };

    loadTimers();
  }, []);

  // Save timers state to AsyncStorage whenever they change
  useEffect(() => {
    AsyncStorage.setItem('startTimer', JSON.stringify(startTimer));
    AsyncStorage.setItem('startTimer2', JSON.stringify(startTimer2));
    AsyncStorage.setItem('startTimer3', JSON.stringify(startTimer3));
    AsyncStorage.setItem('startTimer4', JSON.stringify(startTimer4));
  }, [startTimer, startTimer2, startTimer3, startTimer4]);

  return (
    <TimerContext.Provider value={{ startTimer, setStartTimer, startTimer2, setStartTimer2, startTimer3, setStartTimer3, startTimer4, setStartTimer4 }}>
      {children}
    </TimerContext.Provider>
  );
};

export const TimerConsumer = TimerContext.Consumer;

export default TimerContext;
