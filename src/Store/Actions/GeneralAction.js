import StorageService from '../Storage/GeneralStorage';

const types = {
  SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
  SET_USER: 'SET_USER',
  SET_FIRST_TIME_USE: 'SET_FIRST_TIME_USE',
};

const setIsAppLoading = isAppLoading => {
  return {
    type: types.SET_IS_APP_LOADING,
    payload: isAppLoading,
  };
};

const setUser = user => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

const setIsFirstTimeUse = () => {
  return {
    type: types.SET_FIRST_TIME_USE,
    payload: false,
  };
};

const appStart = () => {
  return (dispatch, getState) => {
    StorageService.getFirstTimeUse().then(isFirstTimeUse => {
      dispatch({
        type: types.SET_FIRST_TIME_USE,
        payload: isFirstTimeUse ? false : true,
      });
    });
    StorageService.getUser().then(user => {
      if (user === 'true') {
        dispatch({
          type: types.SET_USER,
          payload: true,
        });
      } else {
        dispatch({
          type: types.SET_USER,
          payload: false,
        });
      }
      dispatch({
        type: types.SET_IS_APP_LOADING,
        payload: false,
      });
    });
  };
};

export default {setIsAppLoading, setUser, appStart, setIsFirstTimeUse, types};
