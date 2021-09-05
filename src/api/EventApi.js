import axios from 'axios';
import { server } from '../constants/index';

export default class EventApi {
    static getEvents() {
        return axios.get(server + '/events')
                    .then(res => res.data.events)
                    .catch(error => error.message);
    }
    
    static createEvent(eventForm) {
        return axios.post(server + '/events', eventForm)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
    
    static updateEvent(eventId, eventForm) {
        return axios.put(server + '/events/' + eventId, eventForm)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
    
    static deleteEvent(eventId) {
        return axios.delete(server + '/events/' + eventId)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }

    static updateEventStatus(eventId, eventStatusId) {
        return axios.patch(server + '/event_status/' + eventId, { eventStatusId })
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
}