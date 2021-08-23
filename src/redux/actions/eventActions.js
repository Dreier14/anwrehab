import { SELECT_EVENT, UNSELECT_EVENT, EDIT_EVENT, UNEDIT_EVENT } from '../reducers/eventReducer';

export const selectEvent = (event) => ({
    type: SELECT_EVENT,
    event
});

export const unselectEvent = () => ({
    type: UNSELECT_EVENT
});

export const editEvent = (event) => ({
    type: EDIT_EVENT,
    event
});

export const unEditEvent = () => ({
    type: UNEDIT_EVENT
});