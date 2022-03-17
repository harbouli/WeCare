import AsyncSorage from '@react-native-async-storage/async-storage';

const setFirstTimeUse = () => {
  return AsyncSorage.setItem('isFirstTimeUse', 'true');
};

const getFirstTimeUse = () => {
  return AsyncSorage.getItem('isFirstTimeUse');
};

const setUser = user => {
  return AsyncSorage.setItem('user', 'false');
};

const getUser = () => {
  return AsyncSorage.getItem('user');
};
const setUID = UID => {
  return AsyncSorage.setItem('uid', UID);
};

const getUID = () => {
  return AsyncSorage.getItem('uid');
};

export default {
  setFirstTimeUse,
  getFirstTimeUse,
  setUser,
  getUser,
  setUID,
  getUID,
};
