import AsyncSorage from '@react-native-async-storage/async-storage';
// First Time Using
const setFirstTimeUse = () => {
  return AsyncSorage.setItem('isFirstTimeUse', 'true');
};

const getFirstTimeUse = () => {
  return AsyncSorage.getItem('isFirstTimeUse');
};
//  User State
const setUser = user => {
  return AsyncSorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
  return AsyncSorage.getItem('user');
};

// UID
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
