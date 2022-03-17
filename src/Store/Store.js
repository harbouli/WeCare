import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './Reducers/GeneralReducer';
import PlacesReducer from './Reducers/Places-reducer';

const rootReducer = combineReducers({Auth: AuthReducer, Places: PlacesReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
