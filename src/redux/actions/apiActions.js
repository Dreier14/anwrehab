import { ADD_API_CALL, REMOVE_API_CALL, SET_ERROR_MESSAGE } from '../reducers/apiReducer';

export const addApiCallInProgress = () => ({ type: ADD_API_CALL });

export const removeApiCallInProgress = () => ({ type: REMOVE_API_CALL });

export const setError = (errorMessage) => ({ type: SET_ERROR_MESSAGE, message: errorMessage });