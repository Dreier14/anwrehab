import * as _ from 'lodash';
/*
    Action Types
*/
export const ADD_API_CALL = 'ADD_API_CALL';
export const REMOVE_API_CALL = 'REMOVE_API_CALL';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

/*
    Initial State
*/
export const initialState = {
    apiCallsInProgress: 0,
    error: undefined
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ADD_API_CALL:
            _.cloneDeep({ ...state, apiCallsInProgress: state.apiCallsInProgress + 1 });

        case REMOVE_API_CALL:
            _.cloneDeep({ ...state, apiCallsInProgress: state.apiCallsInProgress - 1 });
    
        case SET_ERROR_MESSAGE:
            _.cloneDeep({ ...state, error: action.message })

        default:
            return state;
    }
}