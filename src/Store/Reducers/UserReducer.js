import PlacesAction from '../Actions/Places-action';

const initialState = {
  places: [],
};
const PlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlacesAction.types.ADD_PLACE:
      return {...state, places: action.payload};
    default:
      return state;
  }
};
export default PlacesReducer;
