import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './Reducers/GeneralReducer';
import UserReducer from './Reducers/UserReducer';

const rootReducer = combineReducers({Auth: AuthReducer, User: UserReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
