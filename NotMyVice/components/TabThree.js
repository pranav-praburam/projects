import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TimerContext from './TimerContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TabThree() {
  const { startTimer, setStartTimer } = useContext(TimerContext);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [years, setYears] = useState(0);

  // Second timer state
  const { startTimer2, setStartTimer2 } = useContext(TimerContext);
  const [seconds2, setSeconds2] = useState(0);
  const [minutes2, setMinutes2] = useState(0);
  const [hours2, setHours2] = useState(0);
  const [days2, setDays2] = useState(0);
  const [years2, setYears2] = useState(0);

   // Third timer state
  const { startTimer3, setStartTimer3 } = useContext(TimerContext);
  const [seconds3, setSeconds3] = useState(0);
  const [minutes3, setMinutes3] = useState(0);
  const [hours3, setHours3] = useState(0);
  const [days3, setDays3] = useState(0);
  const [years3, setYears3] = useState(0);

  // Fourth timer state
  const { startTimer4, setStartTimer4 } = useContext(TimerContext);
  const [seconds4, setSeconds4] = useState(0);
  const [minutes4, setMinutes4] = useState(0);
  const [hours4, setHours4] = useState(0);
  const [days4, setDays4] = useState(0);
  const [years4, setYears4] = useState(0);

  const saveTimerState = async () => {
    try {
      await AsyncStorage.setItem('timerState', JSON.stringify({ seconds, minutes, hours, days, years }));
      await AsyncStorage.setItem('timerState2', JSON.stringify({ seconds2, minutes2, hours2, days2, years2 }));
      await AsyncStorage.setItem('timerState3', JSON.stringify({ seconds3, minutes3, hours3, days3, years3 }));
      await AsyncStorage.setItem('timerState4', JSON.stringify({ seconds4, minutes4, hours4, days4, years4 }));
    } catch (e) {
      console.error(e);
    }
  };

  const loadTimerState = async () => {
    try {
      const timerState = await AsyncStorage.getItem('timerState');
      const timerState2 = await AsyncStorage.getItem('timerState2');
      const timerState3 = await AsyncStorage.getItem('timerState3');
      const timerState4 = await AsyncStorage.getItem('timerState4');
      if (timerState !== null) {
        const { seconds, minutes, hours, days, years } = JSON.parse(timerState);
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);
        setYears(years);
      }
      if (timerState2 !== null) {
        const { seconds2, minutes2, hours2, days2, years2 } = JSON.parse(timerState2);
        setSeconds2(seconds2);
        setMinutes2(minutes2);
        setHours2(hours2);
        setDays2(days2);
        setYears2(years2);
      }
      if (timerState3 !== null) {
        const { seconds3, minutes3, hours3, days3, years3 } = JSON.parse(timerState3);
        setSeconds3(seconds3);
        setMinutes3(minutes3);
        setHours3(hours3);
        setDays3(days3);
        setYears3(years3);
      }
      if (timerState4 !== null) {
        const { seconds4, minutes4, hours4, days4, years4 } = JSON.parse(timerState4);
        setSeconds4(seconds4);
        setMinutes4(minutes4);
        setHours4(hours4);
        setDays4(days4);
        setYears4(years4);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadTimerState();
  }, []);

  useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 59) {
            setMinutes(minutes => {
              if (minutes === 59) {
                setHours(hours => {
                  if (hours === 23) {
                    setDays(days => {
                      if (days === 365) {
                        setYears(years => years + 1);
                        return 0;
                      }
                      return days + 1;
                    });
                    return 0;
                  }
                  return hours + 1;
                });
                return 0;
              }
              return minutes + 1;
            });
            return 0;
          }
          return seconds + 1;
        });
      }, 1000);
    } else {
      // Reset timer when stopped
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
      setYears(0);
    }
    return () => {
      clearInterval(interval);
      saveTimerState();
    };
  }, [startTimer, seconds, minutes, hours, days, years]);

  const resetTimer = async () => {
    setStartTimer(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
    setYears(0);
    await AsyncStorage.removeItem('timerState');
  };

  useEffect(() => {
    let interval2 = null;
    if (startTimer2) {
      interval2 = setInterval(() => {
        setSeconds2(seconds2 => {
          if (seconds2 === 59) {
            setMinutes2(minutes2 => {
              if (minutes2 === 59) {
                setHours2(hours2 => {
                  if (hours2 === 23) {
                    setDays2(days2 => {
                      if (days2 === 365) {
                        setYears2(years2 => years2 + 1);
                        return 0;
                      }
                      return days2 + 1;
                    });
                    return 0;
                  }
                  return hours2 + 1;
                });
                return 0;
              }
              return minutes2 + 1;
            });
            return 0;
          }
          return seconds2 + 1;
        });
      }, 1000);
    } else {
      // Reset timer when stopped
      setSeconds2(0);
      setMinutes2(0);
      setHours2(0);
      setDays2(0);
      setYears2(0);
    }
    return () => {
      clearInterval(interval2);
      saveTimerState();
    };
  }, [startTimer2, seconds2, minutes2, hours2, days2, years2]);

  const resetTimer2 = async () => {
    setStartTimer2(false);
    setSeconds2(0);
    setMinutes2(0);
    setHours2(0);
    setDays2(0);
    setYears2(0);
    await AsyncStorage.removeItem('timerState2');
  };

  useEffect(() => {
    let interval3 = null;
    if (startTimer3) {
      interval3 = setInterval(() => {
        setSeconds3(seconds3 => {
          if (seconds3 === 59) {
            setMinutes3(minutes3 => {
              if (minutes3 === 59) {
                setHours3(hours3 => {
                  if (hours3 === 23) {
                    setDays3(days3 => {
                      if (days3 === 365) {
                        setYears3(years3 => years3 + 1);
                        return 0;
                      }
                      return days3 + 1;
                    });
                    return 0;
                  }
                  return hours3 + 1;
                });
                return 0;
              }
              return minutes3 + 1;
            });
            return 0;
          }
          return seconds3 + 1;
        });
      }, 1000);
    } else {
      // Reset timer when stopped
      setSeconds3(0);
      setMinutes3(0);
      setHours3(0);
      setDays3(0);
      setYears3(0);
    }
    return () => {
      clearInterval(interval3);
      saveTimerState();
    };
  }, [startTimer3, seconds3, minutes3, hours3, days3, years3]);

  const resetTimer3 = async () => {
    setStartTimer3(false);
    setSeconds3(0);
    setMinutes3(0);
    setHours3(0);
    setDays3(0);
    setYears3(0);
    await AsyncStorage.removeItem('timerState3');
  };
  useEffect(() => {
    let interval4 = null;
    if (startTimer4) {
      interval4 = setInterval(() => {
        setSeconds4(seconds4 => {
          if (seconds4 === 59) {
            setMinutes4(minutes4 => {
              if (minutes4 === 59) {
                setHours4(hours4 => {
                  if (hours4 === 23) {
                    setDays4(days4 => {
                      if (days4 === 365) {
                        setYears4(years4 => years4 + 1);
                        return 0;
                      }
                      return days4 + 1;
                    });
                    return 0;
                  }
                  return hours4 + 1;
                });
                return 0;
              }
              return minutes4 + 1;
            });
            return 0;
          }
          return seconds4 + 1;
        });
      }, 1000);
    } else {
      // Reset timer when stopped
      setSeconds4(0);
      setMinutes4(0);
      setHours4(0);
      setDays4(0);
      setYears4(0);
    }
    return () => {
      clearInterval(interval4);
      saveTimerState();
    };
  }, [startTimer4, seconds4, minutes4, hours4, days4, years4]);

  const resetTimer4 = async () => {
    setStartTimer4(false);
    setSeconds4(0);
    setMinutes4(0);
    setHours4(0);
    setDays4(0);
    setYears4(0);
    await AsyncStorage.removeItem('timerState4');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        Quit Smoking Cigarettes! {years}y {days}d {hours}h {minutes}m {seconds}s
      </Text>
      <Text style={styles.timerText}>
        Quit Vaping! {years2}y {days2}d {hours2}h {minutes2}m {seconds2}s
      </Text>
      <Text style={styles.timerText}>
        Quit drinking alcohol! {years3}y {days3}d {hours3}h {minutes3}m {seconds3}s
      </Text>
      <Text style={styles.timerText}>
        Quit Gambling! {years4}y {days4}d {hours4}h {minutes4}m {seconds4}s
      </Text>
      <Text style={styles.text}>
        Hey there quitters! Growing up we've been told never to quit, but as we grow older, we realize that some things are worth letting go of in life. 
        This app is designed to help you quit your vices. Whether it's smoking, drinking, or any other bad habit, this app will help you keep track of how long you've been clean
        as well as motivate you to keep going. Remember, it's never too late to quit. You got this! ~ Pranav Praburam 
      </Text>
      <TouchableOpacity style={styles.button} onPress={resetTimer}>
        <Text style={styles.buttonText}>Reset Timer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetTimer2}>
        <Text style={styles.buttonText}>Reset Timer 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetTimer3}>
        <Text style={styles.buttonText}>Reset Timer 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetTimer4}>
        <Text style={styles.buttonText}>Reset Timer 4</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20
  },
  timerText: {
    fontSize: 14, // Smaller font size for the timer
    marginBottom: 20 // Add some space between the timer and the text
  },
  button: {
    marginTop: 20,
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default TabThree;
