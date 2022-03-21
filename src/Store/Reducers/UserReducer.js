import UserAction from '../Actions/UserAction';

const initialState = {
  UID: '',
  user: {
    firstname: '',
    lastname: '',
    gender: '',
    age: '',
    complete: false,
  },
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAction.types.ADD_USER:
      return {...state, user: action.payload};
    case UserAction.types.SET_UID:
      return {...state, UID: action.payload};
    default:
      return state;
  }
};
export default UserReducer;
