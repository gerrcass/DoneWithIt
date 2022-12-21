import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};
const isExpired = (item) => {
  //Single responsability principle
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (value !== null) {
      const item = JSON.stringify(value);

      if (isExpired(item)) {
        /*👉Command or Query Separation (CQS)👈
        Your functions or methods should either be 'command' or 'query', but not both.
        Command: is a functions that CHANGES the state of the system
        Query: is a functions that RETURNS the state of the system.
        
        BUT, it's ok in this case to break that rules because we don't want to store too much data.
        */
        await AsyncStorage.removeItem(prefix + key);
        return null;
      }

      return item.value;
    }
  } catch (error) {
    logger.log(error);
  }
};

export default {
  store,
  get,
};
