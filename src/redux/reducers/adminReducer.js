import * as _ from 'lodash';
import { SET_ERROR_MESSAGE } from '../reducers/apiReducer';
/*
    Action Types
*/
export const SET_DASHBOARD_DATA = 'SET_DASHBOARD_DATA';

/*
    Initial State
*/
export const initialState = {
    dashboardData: {},
    error: undefined
};

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_DASHBOARD_DATA:
            return _.cloneDeep({ ...state, dashboardData: action.dashboardData });

        case SET_ERROR_MESSAGE:
            return  _.cloneDeep({ ...state, dashboardData: initialState.dashboardData });
    
        default:
            return state;
    }
}