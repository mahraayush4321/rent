import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('error at storing value', error);
  }
};
export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log('error at getting value', error);
  }
};
export const removeItem = async Key => {
  try {
    await AsyncStorage.removeItem(Key);
  } catch (error) {
    console.log('error at removing value', error);
  }
};
