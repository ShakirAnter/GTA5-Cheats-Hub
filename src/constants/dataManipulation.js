import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error storing data", error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error("Error retrieving data", error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data", error);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing data", error);
  }
};

export default {
  storeData,
  getData,
  removeData,
  clearAll,
};
