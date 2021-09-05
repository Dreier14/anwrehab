import adminReducer from './reducers/adminReducer';
import authReducer from './reducers/authReducer';
import apiReducer from './reducers/apiReducer';
import eventReducer from './reducers/eventReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    admin: adminReducer,
    auth: authReducer,
    api: apiReducer,
    event: eventReducer
});