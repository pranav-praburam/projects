import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TimerContext from './TimerContext.js';
import { saveTimerState, loadTimerState } from './AsyncStorageHandler'; // Import AsyncStorage functions

const HomeContent = () => {
  const { startTimer, setStartTimer, startTimer2, setStartTimer2, startTimer3, setStartTimer3, startTimer4, setStartTimer4} = useContext(TimerContext);

  // Timer states initialization
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [years, setYears] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const [minutes2, setMinutes2] = useState(0);
  const [hours2, setHours2] = useState(0);
  const [days2, setDays2] = useState(0);
  const [years2, setYears2] = useState(0);
  // Timer 3 state initialization
const [seconds3, setSeconds3] = useState(0);
const [minutes3, setMinutes3] = useState(0);
const [hours3, setHours3] = useState(0);
const [days3, setDays3] = useState(0);
const [years3, setYears3] = useState(0);

// Timer 4 state initialization
const [seconds4, setSeconds4] = useState(0);
const [minutes4, setMinutes4] = useState(0);
const [hours4, setHours4] = useState(0);
const [days4, setDays4] = useState(0);
const [years4, setYears4] = useState(0);

  // Load timer states from AsyncStorage on component mount
  useEffect(() => {
    const loadState = async () => {
      const timer1State = await loadTimerState('timer1');
      if (timer1State) {
        setSeconds(timer1State.seconds);
        setMinutes(timer1State.minutes);
        setHours(timer1State.hours);
        setDays(timer1State.days);
        setYears(timer1State.years);
      }
      const timer2State = await loadTimerState('timer2');
      if (timer2State) {
        setSeconds2(timer2State.seconds);
        setMinutes2(timer2State.minutes);
        setHours2(timer2State.hours);
        setDays2(timer2State.days);
        setYears2(timer2State.years);
      }

      const timer3State = await loadTimerState('timer3');
    if (timer3State) {
      setSeconds3(timer3State.seconds);
      setMinutes3(timer3State.minutes);
      setHours3(timer3State.hours);
      setDays3(timer3State.days);
      setYears3(timer3State.years);
    }
    // Loading state for timer 4
    const timer4State = await loadTimerState('timer4');
    if (timer4State) {
      setSeconds4(timer4State.seconds);
      setMinutes4(timer4State.minutes);
      setHours4(timer4State.hours);
      setDays4(timer4State.days);
      setYears4(timer4State.years);
    }
    };
    loadState();
  }, []);

  // Timer 1 logic
  useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => {
              if (prevMinutes === 59) {
                setHours(prevHours => {
                  if (prevHours === 23) {
                    setDays(prevDays => {
                      if (prevDays === 365) {
                        setYears(prevYears => prevYears + 1);
                        return 0;
                      }
                      return prevDays + 1;
                    });
                    return 0;
                  }
                  return prevHours + 1;
                });
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    } else {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
      setYears(0);
    }
    return () => {
      clearInterval(interval);
      saveTimerState('timer1', { seconds, minutes, hours, days, years });
    };
  }, [startTimer, seconds, minutes, hours, days, years]);

  // Timer 2 logic (mirrors Timer 1 with adjustments for Timer 2's state variables)
  useEffect(() => {
    let interval2 = null;
    if (startTimer2) {
      interval2 = setInterval(() => {
        setSeconds2(prevSeconds2 => {
          if (prevSeconds2 === 59) {
            setMinutes2(prevMinutes2 => {
              if (prevMinutes2 === 59) {
                setHours2(prevHours2 => {
                  if (prevHours2 === 23) {
                    setDays2(prevDays2 => {
                      if (prevDays2 === 365) {
                        setYears2(prevYears2 => prevYears2 + 1);
                        return 0;
                      }
                      return prevDays2 + 1;
                    });
                    return 0;
                  }
                  return prevHours2 + 1;
                });
                return 0;
              }
              return prevMinutes2 + 1;
            });
            return 0;
          }
          return prevSeconds2 + 1;
        });
      }, 1000);
    } else {
      setSeconds2(0);
      setMinutes2(0);
      setHours2(0);
      setDays2(0);
      setYears2(0);
    }
    return () => {
      clearInterval(interval2);
      saveTimerState('timer2', { seconds2, minutes2, hours2, days2, years2 });
    };
  }, [startTimer2, seconds2, minutes2, hours2, days2, years2]);

  useEffect(() => {
    let interval3 = null;
    if (startTimer3) {
      interval3 = setInterval(() => {
        setSeconds3(prevSeconds3 => {
          if (prevSeconds3 === 59) {
            setMinutes3(prevMinutes3 => {
              if (prevMinutes3 === 59) {
                setHours3(prevHours3 => {
                  if (prevHours3 === 23) {
                    setDays3(prevDays3 => {
                      if (prevDays3 === 365) {
                        setYears3(prevYears3 => prevYears3 + 1);
                        return 0;
                      }
                      return prevDays3 + 1;
                    });
                    return 0;
                  }
                  return prevHours3 + 1;
                });
                return 0;
              }
              return prevMinutes3 + 1;
            });
            return 0;
          }
          return prevSeconds3 + 1;
        });
      }, 1000);
    } else {
      setSeconds3(0);
      setMinutes3(0);
      setHours3(0);
      setDays3(0);
      setYears3(0);
    }
    return () => {
      clearInterval(interval3);
      saveTimerState('timer3', { seconds3, minutes3, hours3, days3, years3 });
    };
  }, [startTimer3, seconds3, minutes3, hours3, days3, years3]);
  useEffect(() => {
    let interval4 = null;
    if (startTimer4) {
      interval4 = setInterval(() => {
        setSeconds4(prevSeconds4 => {
          if (prevSeconds4 === 59) {
            setMinutes4(prevMinutes4 => {
              if (prevMinutes4 === 59) {
                setHours4(prevHours4 => {
                  if (prevHours4 === 23) {
                    setDays4(prevDays4 => {
                      if (prevDays4 === 365) {
                        setYears4(prevYears4 => prevYears4 + 1);
                        return 0;
                      }
                      return prevDays4 + 1;
                    });
                    return 0;
                  }
                  return prevHours4 + 1;
                });
                return 0;
              }
              return prevMinutes4 + 1;
            });
            return 0;
          }
          return prevSeconds4 + 1;
        });
      }, 1000);
    } else {
      setSeconds4(0);
      setMinutes4(0);
      setHours4(0);
      setDays4(0);
      setYears4(0);
    }
    return () => {
      clearInterval(interval4);
      saveTimerState('timer4', { seconds4, minutes4, hours4, days4, years4 });
    };
  }, [startTimer4, seconds4, minutes4, hours4, days4, years4]);
  
  // UI for all timers and their control buttons
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* First Timer Display and Control Button */}
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontSize: 20 }}>Quit Smoking Cigarettes!</Text>
        <Text style={{ fontSize: 30 }}>
          Timer: {years} years {days} days {hours} hours {minutes} minutes {seconds} seconds
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            width: 200,
            alignItems: 'center'
          }}
          onPress={() => setStartTimer(!startTimer)}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>{startTimer ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
      </View>
      {/* Second Timer Display and Control Button */}
      <View style={{ alignSelf: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Quit Vaping!</Text>
        <Text style={{ fontSize: 30 }}>
          Timer: {years2} years {days2} days {hours2} hours {minutes2} minutes {seconds2} seconds
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            width: 200,
            alignItems: 'center'
          }}
          onPress={() => setStartTimer2(!startTimer2)}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>{startTimer2 ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
      </View>
      {/* Third Timer Display and Control Button */}
      <View style={{ alignSelf: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Quit drinking!</Text>
        <Text style={{ fontSize: 30 }}>
          Timer: {years3} years {days3} days {hours3} hours {minutes3} minutes {seconds3} seconds
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 5,
            width: 200,
            alignItems: 'center'
          }}
          onPress={() => setStartTimer3(!startTimer3)}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>{startTimer3 ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
      </View>
      {/* Fourth Timer Display and Control Button */}
      <View style={{ alignSelf: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Quit Gambling!</Text>
        <Text style={{ fontSize: 30 }}>
          Timer: {years4} years {days4} days {hours4} hours {minutes4} minutes {seconds4} seconds
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 5,
            width: 200,
            alignItems: 'center'
          }}
          onPress={() => setStartTimer4(!startTimer4)}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>{startTimer4 ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeContent;
