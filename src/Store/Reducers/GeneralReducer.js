import GeneralAction from '../Actions/GeneralAction';

const initialState = {
  isAppLoading: true,
  user: false,
  isFirstTimeUse: true,
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralAction.types.SET_IS_APP_LOADING:
      return {...state, isAppLoading: action.payload};
    case GeneralAction.types.SET_USER:
      return {...state, user: action.payload};
    case GeneralAction.types.SET_FIRST_TIME_USE:
      return {...state, isFirstTimeUse: action.payload};
    default:
      return state;
  }
};

export default GeneralReducer;
