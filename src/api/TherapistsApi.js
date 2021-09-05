import axios from 'axios';
import { server } from '../constants/index';

export default class TherapistsApi {
    static getTherapists() {
        return axios.get(server + '/therapists')
                    .then(res => res.data.therapists)
                    .catch(error => error.message);
    }
    
    static createTherapist(therapistForm) {
        return axios.post(server + '/therapists', therapistForm)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
    
    static updateTherapist(therapistId, therapistForm) {
        return axios.put(server + '/therapists/' + therapistId, therapistForm)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
    
    static deleteTherapist(therapistId) {
        return axios.delete(server + '/therapists/' + therapistId)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }

}