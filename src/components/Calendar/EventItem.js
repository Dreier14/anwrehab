import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { EventStatusConstants, EventTypeConstants } from '../../constants/events';

const EventItem = ({ description, createdDatetime, createdBy, eventTime, lkEventTypeId, lkEventStatusId, onClick }) => {
    debugger;
    return (
        <span 
            onClick={_ => onClick({ description, createdDatetime, createdBy, eventTime, lkEventTypeId, lkEventStatusId })} 
            className={`event-item event-${_.kebabCase(EventStatusConstants[lkEventStatusId.toString()].toLowerCase())}`}
        >
            <p>{description.length > 28 ? description.slice(0, 25) + '...' : description}</p>
            <p>{moment(eventTime).format('LT')}</p>
            <p>Event Type: {EventTypeConstants[lkEventTypeId.toString()]}</p>
        </span>
    );
}

export default EventItem;