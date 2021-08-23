import authReducer from './reducers/authReducer';
import apiReducer from './reducers/apiReducer';
import eventReducer from './reducers/eventReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    api: apiReducer,
    event: eventReducer
});