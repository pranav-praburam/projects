// AsyncStorageHandler.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveTimerState = async (timerKey, timerState) => {
  try {
    const jsonValue = JSON.stringify(timerState);
    await AsyncStorage.setItem(timerKey, jsonValue);
  } catch (e) {
    console.error("Error saving timer state", e);
  }
};

const loadTimerState = async (timerKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(timerKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.error("Error loading timer state", e);
    return null;
  }
};

export { saveTimerState, loadTimerState };
