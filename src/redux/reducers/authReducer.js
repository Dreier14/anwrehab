import * as _ from 'lodash';
import moment from 'moment';
/*
    Action Types
*/
export const PERSIST_LOGIN = 'PERSIST_LOGIN';
export const PERSIST_LOGOUT = 'PERSIST_LOGOUT';

/*
    Initial State
*/
export const initialState = {
    currentUser: {},
    expirationDate: undefined
};

export default (state=initialState, action) => {
    switch(action.type) {
        case PERSIST_LOGIN:
            return _.cloneDeep({
                        ...state,
                        currentUser: action.info,
                        expirationDate: moment().add(14, 'd').utc(true),
                        // dashboardData: action.dashboardData
                    });
        case PERSIST_LOGOUT:
            return _.cloneDeep({
                        ...state,
                        currentUser: initialState.currentUser,
                        expirationDate: undefined,
                        // dashboardData: initialState.dashboardData
                    });
        default:
            return state;
    }
}