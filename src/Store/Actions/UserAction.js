const types = {
  ADD_PLACE: 'ADD_PLACE',
};

const addPlace = place => {
  return {
    type: ADD_PLACE,
    payload: {
      latitude: place.latitude,
      longitude: place.longitude,
    },
  };
};

export default {types, addPlace};
