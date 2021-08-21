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
    currentUser: new Map(),
    accessToken: {},
    expirationDate: undefined
};

export default (state=initialState, action) => {
    switch(action.type) {
        case PERSIST_LOGIN:
            return _.cloneDeep({
                        ...state,
                        currentUser: action.userInfo,
                        accessToken: action.accessToken,
                        expirationDate: moment().add(14, 'd').utc(true)
                    });
        case PERSIST_LOGOUT:
            return _.cloneDeep({
                        ...state,
                        currentUser: {},
                        accessToken: {},
                        expirationDate: undefined
                    });
        default:
            return state;
    }
}