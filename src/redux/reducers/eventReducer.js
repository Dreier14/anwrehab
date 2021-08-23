    import * as _ from 'lodash';
/*
    Action Types
*/
export const SELECT_EVENT = 'SELECT_EVENT';
export const UNSELECT_EVENT = 'UNSELECT_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const UNEDIT_EVENT = 'UNEDIT_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAIL = 'UPDATE_EVENT_FAIL';
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_FAIL = 'LOAD_EVENTS_FAIL';

/*
    Initial State
*/
export const initialState = {
    selectedEvent: {},
    eventToUpdate: {},
    events: [],
};

export default (state=initialState, action) => {
    switch(action.type) {
        case SELECT_EVENT:
            return _.cloneDeep({
                        ...state,
                        selectedEvent: action.event
                    });
        
        case UNSELECT_EVENT:
            return _.cloneDeep({
                        ...state,
                        selectedEvent: initialState.selectedEvent
                    });
        
        case EDIT_EVENT:
            return _.cloneDeep({
                        ...state,
                        eventToUpdate: action.event
                    });
        
        case UNEDIT_EVENT:
            return _.clone({
                        ...state,
                        eventToUpdate: initialState.eventToUpdate
                    });

        case UPDATE_EVENT_SUCCESS:
        case UPDATE_EVENT_FAIL:

        case LOAD_EVENTS_SUCCESS:

        default:
            return state;
    }
}