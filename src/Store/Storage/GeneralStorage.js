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

export default {setFirstTimeUse, getFirstTimeUse, setUser, getUser};
